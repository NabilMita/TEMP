<script runat="server">
 Platform.Load("core","1.1.1");
  var session = Platform.Request.GetCookieValue("BytelSession");
  Variable.SetValue("@sessionFromSSJS", session);
</script>
%%[
    VAR @appName, @session, @authDE , @state,@adminApps,@marketingApps,@prospectApps,@APPURL,@BUSELECTURL,@APP
    /* ---------------------- Should be changed  ------------------------ */
    SET @appName = 'oxygen'
    /* ------------------------------------------------------------------ */
    SET @authDE = 'ENT.authDE'
    SET @state = RequestParameter('state')
    SET @session = @sessionFromSSJS
    SET @APPURL =  RequestParameter('PAGEURL')
    IF IndexOf(@APPURL, ".fr/") > 0 THEN
    SET @rs = BuildRowsetFromString(@APPURL,'.fr/')
    SET @APPURL = Field(Row(@rs,2),1)
    ENDIF
    IF IndexOf(@APPURL, "?") > 0 THEN
    SET @rs = BuildRowsetFromString(@APPURL,'?')
    SET @APPURL = Field(Row(@rs,1),1)
    ENDIF
    IF IndexOf(@APPURL, "/") > 0 THEN
    SET @rs = BuildRowsetFromString(@APPURL,'/')
    SET @APPURL = Field(Row(@rs,1),1)
    ENDIF
    
    SET @BUSELECTURL = 'https://site.infos.bouyguestelecom.fr/oxygen-context'
    SET @adminApps= 'oxygen;demande-historisation-main;demande-historisation-creation-page;demande-historisation-modification;demande-historisation-delete-confirmation;demande-historisation-archive-confirmation;demande-historisation-retreive-de;demande-historisation-reset-Error-Confirmation-Page;demande-historisation-Error-Supervision-Page;parametrage-migration-main;param-aquisition-RetrieveAllActiveOffers;param-aquisition-RetrieveCodeCampagneActive;param-aquisition-RetrieveCodeCampagneInActive;param-aquisition-RetrieveCodePromoFromDE;param-aquisition-delete-page;param-acquisition-dev-modification-page-dev;param-acquisition-dev-CreationPreprod;param-acquisition-dev-ModificationPreprod;param-acquisition-dev-RetrieveFamilleOCSource;param-acquisition-dev-RetrieveFamilleOCCible;param-aquisition-AffichageOCS-OCC-dev;demande-historisation-prospect-main;demande-historisation-prospect-modification;demande-historisation-prospect-Retrieve-DE-Prospect;demande-historisation-prospect-creation;Referentiel-Campagnes-RetrieveAllActiveOffers;Referentiel-Campagne;Creation-DE-masse-Retreive-DE-auto;Creation-DE-masse-DE-query;Creation-DE-masse;matrice-lissage-sms-page-principale;matrice-lissage-sms-administration;matrice-lissage-sms-saisie-campagne;matrice-lissage-sms-modification-campagne;matrice-lissage-sms-supression-campagne;matrice-lissage-sms-RecuperationToutCodesActifs;matrice-lissage-sms-ssjs-run-automation;matrice-lissage-sms-resultat-lissage;jiravos-prod;SplitCampaign;appfinder1;appfinderV3;meteo-v1-main;purge-de;SMS-1-Reponse;creationObjetCajolineProd;SFMC_PURGE_stats;supervisionv3;potamiamain;potamiaverif;fusion-param-migration-aqui-main;meteor;meteor/resultats;meteor/verification;supervision-sms-mo;contrat-blacklist-main;contrats-blacklist-creation-page;contrats-blacklist-modification;modification;fusion-parm-migraqui-creation;param-cajoline-lot-2-delete-page-dev;suppression-campagne-fusion;param-cajoline-lot-2-Validation-Dev;CajolineDynamisation;main-page-ML;verification-page-ML;oxygen-DECreator-v1;oxygen-DEManager-v1;oxygen-SupervisionJB-v1'
    
    
    SET @marketingApps= 'oxygen;demande-historisation-main;demande-historisation-creation-page;demande-historisation-modification;demande-historisation-delete-confirmation;demande-historisation-archive-confirmation;demande-historisation-retreive-de;demande-historisation-reset-Error-Confirmation-Page;parametrage-migration-main;param-aquisition-RetrieveAllActiveOffers;param-aquisition-RetrieveCodeCampagneActive;param-aquisition-RetrieveCodeCampagneInActive;param-aquisition-RetrieveCodePromoFromDE;param-aquisition-delete-page;param-acquisition-dev-modification-page-dev;param-acquisition-dev-CreationPreprod;param-acquisition-dev-ModificationPreprod;param-acquisition-dev-RetrieveFamilleOCSource;param-acquisition-dev-RetrieveFamilleOCCible;param-aquisition-AffichageOCS-OCC-dev;Referentiel-Campagnes-RetrieveAllActiveOffers;Referentiel-Campagne;Creation-DE-masse-Retreive-DE-auto;Creation-DE-masse-DE-query;Creation-DE-masse;matrice-lissage-sms-page-principale;matrice-lissage-sms-administration;matrice-lissage-sms-saisie-campagne;matrice-lissage-sms-modification-campagne;matrice-lissage-sms-supression-campagne;matrice-lissage-sms-RecuperationToutCodesActifs;matrice-lissage-sms-ssjs-run-automation;matrice-lissage-sms-resultat-lissage;jiravos-prod;SplitCampaign;appfinder1;appfinderV3;meteo-v1-main;SMS-1-Reponse;creationObjetCajolineProd;potamiamain;potamiaverif;meteor;meteor/resultats;meteor/verification;supervision-sms-mo;supervisionv3;contrat-blacklist-main;contrats-blacklist-creation-page;contrats-blacklist-modification;param-cajoline-lot-2-main-page;param-cajoline-lot-2-creation-page-dev;CajolineDynamisation;fusion-param-migration-aqui-main;fusion-parm-migraqui-creation;suppression-campagne-fusion;modification;main-page-ML;verification-page-ML;oxygen-SupervisionJB-v1'
    
    
    SET @prospectApps = 'oxygen;demande-historisation-prospect-main;demande-historisation-prospect-modification;demande-historisation-prospect-Retrieve-DE-Prospect;demande-historisation-retreive-de;demande-historisation-delete-confirmation;demande-historisation-archive-confirmation;demande-historisation-prospect-creation;Referentiel-Campagnes-RetrieveAllActiveOffers;Referentiel-Campagne;SplitCampaign;appfinder1;appfinderV3;meteo-v1-main;matrice-lissage-sms-page-principale;matrice-lissage-sms-administration;matrice-lissage-sms-saisie-campagne;matrice-lissage-sms-modification-campagne;matrice-lissage-sms-supression-campagne;matrice-lissage-sms-RecuperationToutCodesActifs;matrice-lissage-sms-ssjs-run-automation;matrice-lissage-sms-resultat-lissage;jiravos-prod;SplitCampaign'
    
    /* ---------------------- Session Validation ------------------------ */
    IF Empty(@session) THEN
          Redirect(CloudPagesURL(577,"page",RequestParameter('PAGEURL')))
    ELSE
        /* If user was authenticated for another app or if he is not authenticated, redirect to login page */
        IF Lookup(@authDE, 'appName', 'session', @session) != @appName THEN
              Redirect(CloudPagesURL(577,"page",RequestParameter('PAGEURL')))
         ELSEIF  Lookup(@authDE, 'BU', 'session', @session) == 'admin' AND IndexOf(@adminApps,@APPURL) == 0 THEN
              Redirect(@BUSELECTURL)
         ELSEIF  Lookup(@authDE, 'BU', 'session', @session) == 'marketing' AND IndexOf(@marketingApps,@APPURL) == 0 THEN
              Redirect(@BUSELECTURL)
         ELSEIF  Lookup(@authDE, 'BU', 'session', @session) == 'prospect' AND IndexOf(@prospectApps,@APPURL) == 0 THEN
              Redirect(@BUSELECTURL)
        ENDIF
    ENDIF
        
]%% 

