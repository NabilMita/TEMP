<script runat="server">
  Platform.Load("Core","1.1.1");
  var session = Platform.Request.GetCookieValue("BytelSession");
  var bu = Platform.Request.GetCookieValue("BytelBU");
  Variable.SetValue("@sessionFromSSJS", session);
  Variable.SetValue("@BUFromSSJS", bu);
  function getTokenExpireDate() {
    var d = new Date();
    d.setMinutes(d.getMinutes() + 240);
    var  month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    if(h<10) h = '0'+h;
    if(m<10) m = '0'+m;
    if(s<10) s = '0'+s;
    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;
    var formattedDate = month + '/' + day + '/' + year+' '+h+':'+m+':'+s;
    return formattedDate
  }
</script>
%%[


    VAR @appName, @clientID, @clientSecret, @clientBase, @appURL, @errorURL, @requestURL, @payload, @APIStatus, @response, @token, @session, @code, @authDE ,@rest_instance_url,@BU,@appURLWithBU,@BUssjs,@error,@error_description,@error_uri


    /* Add clientID, Client Secret, Client Base (part of API Base URL) for all further calls*/
    SET @clientIDAdmin = ''
    SET @clientSecretAdmin = ''
    SET @clientBase = '' 
    SET @rest_instance_url = 'https://mc4m3gyjn-56t5p2511h2mb76-xq.rest.marketingcloudapis.com/'
    SET @clientIDMarketing = ''
    SET @clientSecretMarketing = ''
    SET @clientIDprospect = ''
    SET @clientSecretprospect = ''




    /* App Nane and relevant URLs */
    SET @appName = 'oxygen'
    SET @appURL = 'https://site.infos.bouyguestelecom.fr/oxygen'
    SET @BUSELECTURL = 'https://site.infos.bouyguestelecom.fr/oxygen-context'
    SET @errorURL = 'https://site.infos.bouyguestelecom.fr/oxygen-error'

    SET @error = RequestParameter('error')
    SET @error_description = RequestParameter('error_description')
    SET @error_uri = RequestParameter('error_uri')
    
    IF NOT Empty(@error) and NOT Empty(@error_description) and NOT Empty(@error_uri) THEN
    /* Pass the BU value to the error page */
    SET @BUssjs=@BUFromSSJS
    Redirect(CloudPagesURL(1735,'BU',@BUssjs)) 
    /* OLD error messages */
/*    Redirect(CloudPagesURL(1735,'error',@error,'error_description',@error_description,'error_uri',@error_uri)) */
    ENDIF
 

    /* Data Extension for Authorisation Logging */
    SET @authDE = 'ENT.authDE'
  


    /* Capture Requested BU */
    SET @BU = RequestParameter('BU')
    SET @appURLWithBU = Concat(@appURL,'?BU=',@BU)
    SET @BUssjs=@BUFromSSJS


    /* Capture State and Session for Authorisation purposes */
    SET @state = RequestParameter('state')
    SET @session = @sessionFromSSJS

    /* If user was authenticated for another, deconnect and reconnect for current BU  */
    IF NOT Empty(@BU) and NOT Empty(@session) and Lookup(@authDE, 'BU', 'session', @session)!= @BU THEN
    ]%%  
        <script language="javascript" runat="server">
          try {
            Platform.Response.SetCookie("BytelBU",'','01 Jan 1970 00:00:01 GMT');
            Platform.Response.SetCookie("BytelSession",'','01 Jan 1970 00:00:01 GMT');
          }
          catch (e) {
            Write("<br>e: " + Stringify(e));
          }
        </script>
%%[  
        Redirect(@appURLWithBU)
    ENDIF



    /* ----------------------------------------------------------------------- */
    /* ------------------------- 2. AUTHENTICATION FLOW ---------------------- */
    /* ----------------------------------------------------------------------- */


    /* ---------------------- 2.1. Session Validation ------------------------ */
    /* If there is Session parameter, validate it with logging DE*/

    IF NOT Empty(@session) THEN
        /* If user was authenticated for another app or if he is not authenticated, redirect to login */
        IF Lookup(@authDE, 'appName', 'session', @session) != @appName THEN
        Redirect(@appURLWithBU)
        ENDIF
        /* Authenticated users jumps to main code */

    /* ------------------------- 2.2. Authorization -------------------------- */
    /* If there is no BU parameter, redirect to select context */
    ELSEIF Empty(@BU) AND Empty(@state) THEN
        Redirect(@BUSELECTURL)
    /* ------------------------- 2.3. Authorization -------------------------- */
    /* If there is no Session parameter, start Authorisation flow */
    ELSEIF Empty(@state) AND Empty(@session) THEN
]%%  
<script language="javascript" runat="server">
  try {
    Platform.Response.SetCookie("BytelBU",Variable.GetValue("@BU"),getTokenExpireDate(),true);
  }
  catch (e) {
    Write("<br>e: " + Stringify(e));
  }
</script>
%%[     

        IF @BU =='admin' THEN
            set @clientID = @clientIDAdmin
        ELSEIF @BU == 'marketing' then
            set @clientID = @clientIDMarketing
        ELSEIF @BU == 'prospect' then
            set @clientID = @clientIDprospect
        ENDIF

        SET @session = GUID()
        SET @requestURL = Concat(
            'https://', @clientBase, '.auth.marketingcloudapis.com/v2/authorize',
            '?response_type=code&client_id=', @clientID,
            '&redirect_uri=', @appURL, '&state=', @session,'&BU=',@BU)
        Redirect(@requestURL)
    /* ------------------------- 2.4. Authentication ------------------------- */
    /* If there is state parameter after Authorisation, get the REST Token */
    ELSEIF NOT Empty(@state) THEN
        SET @code = RequestParameter('code')
        IF @BUFromSSJS =='admin' THEN
            set @clientID = @clientIDAdmin
            set @clientSecret = @clientSecretAdmin
        ELSEIF @BUFromSSJS == 'marketing' then
            set @clientID = @clientIDMarketing
            set @clientSecret = @clientSecretMarketing
        ELSEIF @BUFromSSJS == 'prospect' then
            set @clientID = @clientIDprospect
            set @clientSecret = @clientSecretprospect
        ENDIF
        SET @requestURL = Concat("https://", @clientBase, ".auth.marketingcloudapis.com/v2/token")
        /* 2.3.1. Build token request payload */
        SET @payload = Concat(
            '{"grant_type": "authorization_code",',
            '"code": "' ,@code, '",',
            '"client_id": "', @clientID, '",',
            '"client_secret": "', @clientSecret, '",',
            '"redirect_uri": "', @appURL, '"}'
        )
        /* 2.3.2. Get the token */
        SET @httppost = HTTPPost2(@requestURL, "application/json", @payload, true, @APIStatus, @response)
        SET @token = Substring(@APIStatus,18,512)
        /* Token expires after an 18 minutes */
        /* 2.3.2. Upsert Logging Data Extension */
        /* Add record to Logging DE to store the token and validate access with it */
        UpsertData(@authDE,1, 'session' ,@state, 'appName', @appName, 'token', @token, 'tokenExpire', DateAdd(Now(), 18, 'MI'),'BU',@BUFromSSJS)
        
        /* Get username of user */

]%%  
<script language="javascript" runat="server">
  try {
    var requestURLUsername = "https://"+ Variable.GetValue("@clientBase") + ".auth.marketingcloudapis.com/v2/userinfo";
    var headerNames = ["Authorization"];
    var headerValues = ["Bearer " + Variable.GetValue("@token")];
    var response = HTTP.Get(requestURLUsername, headerNames, headerValues);
    var responsejson = Platform.Function.ParseJSON(String(response.Content));
    Platform.Response.SetCookie("BytelSession",Variable.GetValue("@state"),getTokenExpireDate(),true);
    Platform.Response.SetCookie("BytelUsername",responsejson.user.preferred_username,getTokenExpireDate(),true);
  }
  catch (e) {
    Write("<br>e: " + Stringify(e));
  }
</script>
%%[
      Redirect(@appURL)
    /* For any other scenario, redirect to Error Page  */
    ELSE
        Redirect(@errorURL)
    ENDIF
]%%
