   %%=ContentBlockbyId("43356")=%%%%=ContentBlockbyId("43358")=%%

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">



<html>
    <!-- 
    ID : App_Finder_V3_1
    
-->
 <head>
  <title>AppFinder</title>
  <meta name="description" value="A tool for locating content in the Salesforce Marketing Cloud Application" />
  %%[
   /* Pull User Input Data From Passed URL Parameters */

   set @ContentType = RequestParameter("ContentType")
   set @Property1 = RequestParameter("Property1")
   set @SimpleOperator1 = RequestParameter("SimpleOperator1")
   set @Value1 = RequestParameter("Value1")
   set @LogicalOperator = RequestParameter("LogicalOperator")
   set @Property2 = RequestParameter("Property2")par
   set @SimpleOperator2 = RequestParameter("SimpleOperator2")
   set @Value2 = RequestParameter("Value2")
   set @Delim = RequestParameter("Delim")
   set @GlobalSearch = RequestParameter("GlobalSearch")
   set @MaxResults = RequestParameter("MaxResults")
   set @ComplexSearch = RequestParameter("ComplexSearch")
   set @ShowID = RequestParameter("ShowID")
   set @ShowFID = RequestParameter("ShowFID")

   set @EnterpriseID = AuthenticatedEnterpriseID()
   set @MemberID = AuthenticatedMemberID()
   set @EmployeeID = AuthenticatedEmployeeID()
  ]%%

  <script runat="server" language="JavaScript">
   Platform.Load("Core","1");

   /* Folder Structure Utility Functions */





   function findParent(ChildID, GlobalSearch) {

    var filter = {
     Property: "ID",
     SimpleOperator: "equals",
     Value: ChildID
    };
    var ChildFolder = Retrieve("DataFolder", filter, GlobalSearch).Results[0];
    var filter = {
     Property: "ID",
     SimpleOperator: "equals",
     Value: ChildFolder.ParentFolder.ID
    };
    var ParentFolder = Retrieve("DataFolder", filter, GlobalSearch).Results[0];

    return ParentFolder;
   };
   function pathFinder(initial_obj, delim, GlobalSearch, MaxResults, ShowID, ShowFID) {
    var i = 0;
    var path = "";
    /* Cycle Returned Objects */
    while (i < initial_obj.Results.length && i < MaxResults) {
     var new_path = "";
     if ((typeof initial_obj.Results[i].CategoryID !== 'undefined' && initial_obj.Results[i].CategoryID > 0) || (typeof initial_obj.Results[i].ParentFolder !== 'undefined' && initial_obj.Results[i].ParentFolder.ID > 0) || (typeof initial_obj.Results[i].Category !== 'undefined' && initial_obj.Results[i].Category > 0)) {






      
      /* Capture Object ID if ShowID is True */
      if (ShowID == true && typeof initial_obj.Results[i].ID !== 'undefined' && initial_obj.Results[i].ID > 0) {
       var ObjID = " (" + initial_obj.Results[i].ID + ") ";
      }
      else if (ShowID == true && typeof initial_obj.Results[i].ObjectID !== 'undefined' && initial_obj.Results[i].ObjectID > 0) {
       var ObjID = " (" + initial_obj.Results[i].ObjectID + ") ";
      }


      else {
       var ObjID = "";
      }


      /* Get Parent Folder's ID for Path Lookup */
      var filter
      if (typeof initial_obj.Results[i].ParentFolder  !== 'undefined' && initial_obj.Results[i].ParentFolder.ID > 0) {
       filter = {
        Property: "ID",
        SimpleOperator: "equals",
        Value: initial_obj.Results[i].ParentFolder.ID
       };
      }
      else if (typeof initial_obj.Results[i].CategoryID  !== 'undefined' && initial_obj.Results[i].CategoryID > 0) {
       filter = {
        Property: "ID",
        SimpleOperator: "equals",
        Value: initial_obj.Results[i].CategoryID
       };
      }
      else if (typeof initial_obj.Results[i].Category  !== 'undefined' && initial_obj.Results[i].Category > 0) {
       filter = {
        Property: "ID",
        SimpleOperator: "equals",
        Value: initial_obj.Results[i].Category
       };
      }

      /* Retrieve Parent Folder and Show ID if ShowFID is True */
      if (typeof filter  !== 'undefined' && filter.length > 0) {
       var folder = Retrieve("DataFolder", filter, GlobalSearch).Results[0];
       if (typeof folder !== 'undefined' && folder.ID > 0) {
        if (ShowFID == true) {
         var FID = " (" + folder.ID + ") ";
        }
        else {
         var FID = "";
        }

        /* Build Folder Path for Object */
        if (typeof initial_obj.Results[i].Name !== 'undefined') {
         new_path += decodeURIComponent(folder.Name + FID + delim + "<span>" + initial_obj.Results[i].Name + "</span>");
        }
        else if (typeof initial_obj.Results[i].DisplayName !== 'undefined') {
         new_path += decodeURIComponent(folder.Name + FID + delim + "<span>" + initial_obj.Results[i].DisplayName + "</span>");
        }
        else if (typeof initial_obj.Results[i].ListName !== 'undefined') {
         new_path += decodeURIComponent(folder.Name + FID + delim + "<span>" + initial_obj.Results[i].ListName + "</span>");
        }
        else if (typeof initial_obj.Results[i].TemplateName !== 'undefined') {
         new_path += decodeURIComponent(folder.Name + FID + delim + "<span>" + initial_obj.Results[i].TemplateName + "</span>");
        }
        else if (typeof initial_obj.Results[i].SendID !== 'undefined') {
         new_path += decodeURIComponent(folder.Name + FID + delim + "<span>" + initial_obj.Results[i].SendID + "</span>");
        }

        else {
         new_path += folder.Name + FID;
        }
        var parent = findParent(folder.ID, GlobalSearch);
        while (typeof parent !== 'undefined') {
         if (ShowFID == true) {
          var PID = " (" + parent.ID + ") ";
         }
         else {
          var PID = "";
         }
         new_path = decodeURIComponent(parent.Name + PID + delim + new_path);
         parent = findParent(parent.ID, GlobalSearch);
        }

        /* Append to Existing Object Paths */
        path += "<div class='path'>" + new_path + ObjID + "</div>";
       }
      }
     }
     i++;
    };
    return path;
   };

   /* Content Retrieval Function (Identifying Fields Only, Customize As Needed) */
   function GetFields(content_type) {
    var cols = [];
    cols.push("ObjectID","ID","Name","CustomerKey","CategoryID");
    if (content_type == "Account") {
     cols = ["Client.EnterpriseID", "BusinessName"];
    }


    else if (content_type == "ContentArea") {
    }
    else if (content_type == "DataExtension") {

     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }




    else if (content_type == "DataFolder") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("ParentFolder.ID");
    }

    else if (content_type == "Email") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ObjectID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "Portfolio") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID" || cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("DisplayName");
    }
    else if (content_type == "FilterDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "Group") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID" || cols[i] == "CustomerKey") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("Category");
    }
    else if (content_type == "List") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "CategoryID" || cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("Category","ListName");
    }
    else if (content_type == "Template") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "Name") {
       cols.splice(i,1);
       i--;
      }
     }
     cols.push("TemplateName");
    }
    else if (content_type == "EmailSendDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "QueryDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    else if (content_type == "TriggeredSendDefinition") {
     for(var i = 0; i < cols.length; i++) {
      if (cols[i] == "ID") {
       cols.splice(i,1);
       i--;
      }
     }
    }
    return cols;
   }


   function Retrieve(content_type, filter, GlobalSearch, MaxResults) {



    var prox = new Script.Util.WSProxy();
    if (GlobalSearch == true) {
     prox.setClientId({ "ID": Variable.GetValue("@EnterpriseID"), "UserID": Variable.GetValue("@EmployeeID")});
    }


    else {
     prox.setClientId({ "ID": Variable.GetValue("@MemberID"), "UserID": Variable.GetValue("@EmployeeID")});
    }
    var cols = GetFields(content_type);
    var props = {
     QueryAllAccounts: GlobalSearch
    };
    var opts = {
     BatchSize: MaxResults /* For future use */
    };
    if (typeof filter !== 'undefined' && filter.length > 0) {

     var data = prox.retrieve(content_type, cols, filter, opts, props);
    }
    else {

     var data
    }


    return data;
   };
   function AppLookup() {
    /* Pull AMPScript GET Variables for SSJS Processing */
    var content_type = Variable.GetValue("@ContentType");
    var property1 = Variable.GetValue("@Property1");
    var simpleop1 = Variable.GetValue("@SimpleOperator1");
    if (simpleop1 == "IN") {
     var value1 = Variable.GetValue("@Value1");
    }
    else {
     var value1 = Variable.GetValue("@Value1");
    }
    var delim = Variable.GetValue("@Delim");
    var GlobalSearch = (Variable.GetValue("@GlobalSearch") == "true");
    var MaxResults = parseInt(Variable.GetValue("@MaxResults"));
    var ComplexSearch = (Variable.GetValue("@ComplexSearch") == "true");
    var ShowID = (Variable.GetValue("@ShowID") == "true");
    var ShowFID = (Variable.GetValue("@ShowFID") == "true");
    
    /* Build Search Filter */
    var filter
    if (ComplexSearch == true) {
     var logicalop = Variable.GetValue("@LogicalOperator");
     var property2 = Variable.GetValue("@Property2");
     var simpleop2 = Variable.GetValue("@SimpleOperator2");
     var value2 = Variable.GetValue("@Value2");
     filter = {
      LeftOperand: {
       Property: property1,
       SimpleOperator: simpleop1,
       Value: value1
      },
      LogicalOperator: logicalop,
      RightOperand: {
       Property: property2,
       SimpleOperator: simpleop2,
       Value: value2
      }
     };
    }
    else {
     filter = {
      Property: property1,
      SimpleOperator: simpleop1,
      Value: value1
     };
    }

















    /* Retrieve Results and Build Path */
    if (filter.length > 0) {
     var data = Retrieve(content_type, filter, GlobalSearch, MaxResults);
     if (data.Status == "OK" || data.Status == "MoreDataAvailable" && data.Results.length > 0) {
      Variable.SetValue("@Path", pathFinder(data, delim, GlobalSearch, MaxResults, ShowID, ShowFID));
     }
     else {
      Variable.SetValue("@Error", data.Status);
     }
    }
   };
  </script>


  %%[ if Not Empty(@ContentType) then ]%%
  <script runat="server" language="JavaScript">


   /* Only Perform Search if URL has Search Parameters */
   AppLookup();
  </script>
  %%[ endif ]%%


  <!-- Client-Side Scripting -->
  
  

  <!-- Default Styles -->
  <style>
   body {
    font-family: Arial,Helvetica,sans-serif;
    text-align: center;

    background-color: #FFFFFF;
    margin: 0px;
   }
   .welcome > div {
    display: none;
    padding-top: 15px;
    font-family: inherit;
    font-size: 18px;
   }
   .welcome > div.options {
    padding-top: 0px;
    padding-left: 50px;
    font-size: 13px;
    text-align: center;
    border-top: 3px solid #E98300;
    background-color: #4F4F4F;
    color: #DDDDDD;
   }
   .welcome > div.options input {
    box-shadow: none;
    margin-right: 50px;
   }
   div.options > div {
    display: inline-block;
   }
   #options-toggle {
    float: left;
    position: relative;
    color: blue;
    cursor: pointer;
    font-size: 12px;
    color: #3F8BB6;
    padding: 3px;
   }
   h1 {
    color: #333333;
    font-family: inherit;
    font-weight: bold;
    font-size: 21px;





    line-height: 27px;
    width: 100%;

    float: left;
   }
   input::placeholder {
    color: #797979;
    font-style: italic;
   }
   input::-webkit-input-placeholder {
    color: #797979;
    font-style: italic;
   }
   input::-moz-placeholder {
    color: #797979;
    font-style: italic;
   }
   input:-ms-input-placeholder {
    color: #797979;
    font-style: italic;
   }
   input:-moz-placeholder {
    color: #797979;
    font-style: italic;
   }
   input, select {
    margin: 15px 0px 15px 0px;
    padding: 7px;
    border: 2px solid #C1C1C1;
    border-radius: 3px;

    background-color: #EEEEEE;
    box-shadow: 4px 3px 10px 1px #EEEEEE;
   }


   #ComplexBuilder {
    display: none;
   }


   iframe {
    visibility: hidden;
    border: none;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
   }
   .success, .multiple, .fail, .searching {
    font-family: Verdana;
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
   }
   .success strong {
    font-weight: bold;
    color: #049b04;
   }
   .multiple strong {
    font-weight: bold;
    color: #ffa405;
   }
   .fail strong {
    font-weight: bold;
    color: #ff0000;
   }
   .searching {
    display: none;
    text-align: left;
    width: 95px;
    margin: 0 auto;
   }
   .path {
    color: #646464;
    font-size: 12px;
    font-weight: bold;
    padding: 3px;
   }
   .path div {
    display: block;
    padding: 3px;
   }
   .path span {
    color: #3F8BB6;
    text-decoration: none;
    font-weight: normal;
   }
   @media (max-width:400px) {
    .welcome > div.options {
     padding-left: 0px;
    }
    .welcome > div.options input {
     margin-right: 0px;
    }
    .welcome > div.options input[type=text] , .welcome > div.options input[type=number] {
     display: block;
     margin: 5px auto;
    }
    .welcome > div.options > div {
     display: block;
     width: 100%;
     padding-top: 10px;
    }
   }
  </style>
 </head>
 <body>
   %%[ if Empty(@ContentType) then ]%%
   %%=ContentBlockbyId("43360")=%%
   %%[
   endif
   SET @AuthenticatedEmployeeID = AuthenticatedEmployeeID()
   SET @UserName = AuthenticatedEmployeeUserName()
   var @RoleName
   SET @DateNowTest = SystemDateToLocalDate(Now())
   var @accessPage
   ]%%
   
   <!-- Authentifcation -->
   <script runat="server">
       Platform.Load('Core','1');
       var AuthenticatedEmployeeID = Variable.GetValue("@AuthenticatedEmployeeID").toString();
       var accesPage = "false";
   
       /* Retrieve AccountUser to Check Roles */
       var rr = Platform.Function.CreateObject("RetrieveRequest");
       Platform.Function.SetObjectProperty(rr, "ObjectType", "AccountUser");
       Platform.Function.AddObjectArrayItem(rr, "Properties", "CustomerKey");
       Platform.Function.AddObjectArrayItem(rr, "Properties", "Roles");
       /* Filter on CustomerKey */
       var sfp = Platform.Function.CreateObject("SimpleFilterPart");
       Platform.Function.SetObjectProperty(sfp, "Property", "ID");
       Platform.Function.SetObjectProperty(sfp, "SimpleOperator", "equals");
       Platform.Function.AddObjectArrayItem(sfp, "Value", AuthenticatedEmployeeID);
       
           /* Filter on MID --> Ne fonctionne pas a date on laisse le double SimplefiltarPart avec l'ID */
         /*var sfp2 = Platform.Function.CreateObject("SimpleFilterPart");
       Platform.Function.SetObjectProperty(sfp2, "Property", "DefaultBusinessUnit");
       Platform.Function.SetObjectProperty(sfp2, "SimpleOperator", "equals");
       Platform.Function.AddObjectArrayItem(sfp2, "Value", "7213695");*/
   
        var sfp2 = Platform.Function.CreateObject("SimpleFilterPart");
       Platform.Function.SetObjectProperty(sfp2, "Property", "ID");
       Platform.Function.SetObjectProperty(sfp2, "SimpleOperator", "equals");
       Platform.Function.AddObjectArrayItem(sfp2, "Value", AuthenticatedEmployeeID);
   
           /* ComplexFilterPart */
       var cfp = Platform.Function.CreateObject("ComplexFilterPart");
       Platform.Function.SetObjectProperty(cfp, "LeftOperand", sfp);
       Platform.Function.SetObjectProperty(cfp, "LogicalOperator", "AND");
       Platform.Function.SetObjectProperty(cfp, "RightOperand", sfp2);
   
       Platform.Function.SetObjectProperty(rr, "Filter", cfp);
       /* Retrieve */
       var retrieveStatus = [0,0,0];
       var automationResultSet = Platform.Function.InvokeRetrieve(rr, retrieveStatus);        
       if (retrieveStatus[0] == "OK") {
           
             if (automationResultSet.length == 1 && automationResultSet[0].ID == AuthenticatedEmployeeID) {
            
                 if (automationResultSet[0].Roles.length > 0) {
                     for (id in automationResultSet[0].Roles) {
                         var tempRole = automationResultSet[0].Roles[id];
                         Variable.SetValue("@NameRole",tempRole.Name);
                         if (tempRole.Name == "Marketing Cloud Administrator"|| tempRole.Name == "Administrateur" || tempRole.Name == "Administrator" || tempRole.Name == "Expert CRM" ||  tempRole.Name == "Realisateur" || tempRole.Name == "Manager" || tempRole.Name == "Push API" || tempRole.Name == "Test Push" ||tempRole.Name == "Role Landing Pages") {
                            accesPage = "true";
                            
                            
                         }
                     }
                 }
             }
       }
       Variable.SetValue("@accessPage",accesPage);
   
   </script>
       
   %%[IF @accessPage != "true" THEN]%%
   
   <div style="padding-top:10px;padding-left:15px;font-weight: bold;color: darkred">
   ACCES MICROSITE NON AUTORISE <br />
   </div>
   <p>Username : %%=v(@UserName)=%%<br />
   <p>Date : %%=v(@DateNowTest)=%%<br />
   
   %%[ELSE]%%

  %%[ if Empty(@ContentType) then ]%%
   <div class="welcome">
    <!-- Advanced Options Menu -->
    <div class="options">
     <div>
      <label name="Delimiter" for="Delimiter">Delimiter: </label><input id="Delimiter" type="text" value=" > "></input>
     </div>
     <div>
      <label name="MaxResults" for="MaxResults">Maximum Results to Return: </label><input id="MaxResults" type="number" value="3"></input>
     </div>
     %%[ if @EnterpriseID == @MemberID then ]%%
      <div>
       <label name="GlobalSearch" for="GlobalSearch">Search All Child Business Units </label><input id="GlobalSearch" type="checkbox" checked="true"></input>
      </div>
     %%[ else ]%%
      <div>
       <label name="GlobalSearch" for="GlobalSearch">Search All Child Business Units </label><input id="GlobalSearch" type="checkbox"></input>
      </div>
     %%[ endif ]%%
     <div>
      <label name="ComplexSearch" for="ComplexSearch">Show Complex Search Options </label><input id="ComplexSearch" type="checkbox"></input>
     </div>
     <div>
      <label name="ShowID" for="ShowID">Show Object ID </label><input id="ShowID" type="checkbox"></input>
     </div>
     <div>
      <label name="ShowFID" for="ShowFID">Show Folder IDs </label><input id="ShowFID" type="checkbox"></input>
     </div>
    </div>
    <span id="options-toggle">Show Additional Options</span>

    <!-- Object Selector -->
    <h1>Welcome to the AppFinder! How can we help you locate today?</h1>
    <select id="FinderSelect">
     <option value="SelectOne">Select One</option>

     <option value="ContentArea">Content Area</option>
     <option value="DataExtension">Data Extension</option>
     <option value="FilterDefinition">Data Filter</option>
     <option value="Email">Email</option>
     <option value="Template">Email Template</option>
     <option value="DataFolder">Folder</option>
     <option value="Group">Group</option>
     <option value="Portfolio">Image</option>
     <option value="List">List</option>
     <option value="QueryDefinition">Query</option>
     <option value="TriggeredSendDefinition">Triggered Send</option>
     <option value="EmailSendDefinition">User-Initiated Send</option>
    </select>



























    <!-- Object Query Builder -->
    <div id="QueryBuilder">

     Great! Let me help you find that <span id="FinderValue">Object</span>. Try the search options below.<br />
     <select id="PropertySelect1"></select>
     <select id="OperatorSelect1">
      <option value="equals"> is equal to </option>
      <option value="notEquals"> does not equal </option>
      <option value="like"> is like </option>
      <option value="lessThan"> is less than </option>
      <option value="lessThanOrEqual"> is less than or equal to </option>
      <option value="greaterThan"> is greater than </option>
      <option value="greaterThanOrEqual"> is greater than or equal to </option>
     </select>
     <input id="SearchInput1" name="SearchInput1" type="text" val="" placeholder=""></input><br />
     <div id="ComplexBuilder">
      <select id="LogicSelect">
       <option value="AND"> AND </option>
       <option value="OR"> OR </option>
      </select><br />
      <select id="PropertySelect2"></select>
      <select id="OperatorSelect2">
       <option value="equals"> is equal to </option>
       <option value="notEquals"> does not equal </option>
       <option value="like"> is like </option>
       <option value="lessThan"> is less than </option>
       <option value="lessThanOrEqual"> is less than or equal to </option>
       <option value="greaterThan"> is greater than </option>
       <option value="greaterThanOrEqual"> is greater than or equal to </option>
      </select>
      <input id="SearchInput2" name="SearchInput2" type="text" val="" placeholder=""></input><br />
     </div>
     <div class="searching">Searching...</div>
     <iframe id="Path" name="Path" src=""></iframe>
    </div>
   </div>
   <div class="unsecured" style="display: none;">
    <h1>Sorry! This page will only work if the Microsite Security Properties are set to "Application Page"</h1>
    <h3>Please modify these settings and use the new secure link below:</h3>
    <div class="securelink"></div>
   </div>
  %%[ elseif Not Empty(@Path) AND (Add(IndexOf(@Path,"</div>"),6) < Length(@Path)) then ]%%

   <div class="multiple"><strong>I Found A Few Possible Matches...</strong> %%=v(@Path)=%%</div>
  %%[ elseif Not Empty(@Path) then ]%%
   <div class="success"><strong>Found It!</strong> %%=v(@Path)=%%</div>
  %%[ elseif Not Empty(@Error) then ]%%
   <div class="fail"><strong>%%=v(@Error)=%%</strong></div>
  %%[ else ]%%
   <div class="fail"><strong>Hmmm...sorry.</strong> I couldn't find that for you. :/</div>
  %%[ endif ]%%
  %%[ENDIF]%%
 </body>
</html>
