<!-- 
Description : Séléction Application selon le profil
***************************************************
Créée par Roni Alain SONMEZ, le 23/04/2024 - 14h00 
***************************************************
Historique de modification : 
+ Modifiée par Xxxx XXXX, le XX/XX/XXXX - 00H00
+ Modifiée par Xxxx XXXX, le XX/XX/XXXX - 00H00
+ Modifiée par Xxxx XXXX, le XX/XX/XXXX - 00H00
-->
<!doctype html>
<html lang="fr">
 <head itemscope itemtype="http://schema.org/Article">
  <meta name="keywords" content="">
  <meta charset="utf-8">
  <title>Oxygen - Mes applications</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
  <meta name="theme-color" content="#25465f">
  <meta name="description" content="Oxygen - Mes applications">
  <meta name="robots" content="noindex, nofollow">
  <meta name="referrer" content="no-referrer">
  <link rel="canonical" href="https://www.bouyguestelecom.fr">
  <meta property="og:title" content="Oxygen - Mes applications">
  <meta property="og:description" content="Mes applications">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.bouyguestelecom.fr">
  <meta property="og:image" itemprop="image" content="https://www.bouyguestelecom.fr/static/logo-bouygues-telecom.png">
  <link rel="apple-touch-icon" sizes="57x57" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="https://www.bouyguestelecom.fr/skin/frontend/bytel/default/medias/images/favicons/favicon-16x16.png" sizes="16x16">
  <link rel="stylesheet" type="text/css" href="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-framework@3.8.8/trilogy.css">
        <style type="text/css">article{flex:1}@keyframes dontBeShy{from{opacity:0}to{opacity:1}}@keyframes beMyGuest{0%{opacity:0;margin-bottom:0}75%{margin-bottom:0}100%{opacity:1;margin-bottom:inherit!important}}.doc-animation-first,.doc-animation-second,.doc-animation-third{opacity:0}.doc-animation-first{animation:1.5s ease-in-out 250ms forwards dontBeShy}.doc-animation-second{margin-bottom:0; animation:1.5s ease-in-out 250ms forwards beMyGuest}.doc-animation-third{animation:1.5s ease-in-out 1.5s forwards dontBeShy}</style>
        <script runat="server">
        Platform.Load('Core','1.1.1');
        var session = Platform.Request.GetCookieValue('BytelSession');
        Variable.SetValue('@sessionFromSSJS', session);
        </script>
        %%[SET @authDE = 'Ent.authDE' SET @session = @sessionFromSSJS SET @BU = Lookup(@authDE, 'BU', 'session', @session)]%%
 </head>
 <body class="has-background-grey-light">
        <header>
            <section class="hero is-primary has-background is-overlapped is-hidden-mobile" style="background: url(https://assets.bouyguestelecom.fr/TRILOGY/trilogy-framework@3.5.1/assets/jpg/transparent-noise.png),url(https://assets.bouyguestelecom.fr/TRILOGY/trilogy-framework@3.5.1/assets/svg/pattern-dark-logo.svg) no-repeat,linear-gradient(#1b3650, #0C7B91);background-size:auto,90%;background-position:0 0,333px 33%,0 0;height: 250px">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="headline is-level-1 has-text-white is-uppercase doc-animation-second">Mes applicati<span class="has-variant">o</span>ns %%=v(@BU)=%%</h1>
                    </div>
                </div>
            </section>
            <section class="hero is-primary has-background is-overlapped is-hidden-tablet has-text-centered" style="background: url(https://assets.bouyguestelecom.fr/TRILOGY/trilogy-framework@3.5.1/assets/jpg/transparent-noise.png),url(https://assets.bouyguestelecom.fr/TRILOGY/trilogy-framework@3.5.1/assets/svg/pattern-dark-logo.svg) no-repeat,linear-gradient(#1b3650, #0C7B91);background-size:auto,125%;background-position:left 50%">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="headline is-level-1 has-text-white is-uppercase doc-animation-second" style="padding-top:1rem;margin-bottom: 10px;">Mes applicati<span class="has-variant">o</span>ns %%=v(@BU)=%%</h1>
                    </div>
                </div>
            </section>
        </header>
        <!--BEGIN Partie Admin-->
        %%[IF @BU == 'admin' Then]%%
        <article>
            <section class="section has-background-grey-light doc-animation-third">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1847,'BU','restreint'))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-home-tools" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">KP <br class="is-hidden-mobile">MFO</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(606))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-archiving-folder" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Marketing Demande <br class="is-hidden-mobile">Historisation</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(640))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-priority-path" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Parametrage <br class="is-hidden-mobile">Migration-Acquisition</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2005))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-sort" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Fusion Parametrage <br class="is-hidden-mobile">Migration-Acquisition</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="columns is-centered" style="padding-top: 3rem">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(702))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-archiving" aria-hidden="true"></i></span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Prospect Demande <br class="is-hidden-mobile">Historisation</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1064))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"> <i class="tri-newspapers" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Référentiel <br class="is-hidden-mobile">Campagnes</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1250))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-duplicata" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Création de <br class="is-hidden-mobile"> DE en masse</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(667))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-mobile-data-transfer" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Matrice de<br class="is-hidden-mobile"> lissage SMS</h2>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="columns is-centered" style="padding-top: 3rem">
                        <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1185))=%%">  
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-advisor" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Jivaros <br class="is-hidden-mobile"> Version 1 </h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(602))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-search" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">App <br class="is-hidden-mobile">Finder</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1710))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-beach" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Météo <br class="is-hidden-mobile">Version 1</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1187))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-recycle" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Purge DE <br class="is-hidden-mobile">Nikita</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="columns is-centered" style="padding-top: 3rem">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(622))=%%">  
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-calendar-unavailable" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision <br class="is-hidden-mobile"> Historisation</h2>
                                </div>
                            </a>
                        </div>
                         <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1323))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-comment" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Courrier <br class="is-hidden-mobile">SMS 1 Reponse</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1295))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-talentsoft" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Création <br class="is-hidden-mobile">CAV</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(595))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-home" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Dashboard <br class="is-hidden-mobile">Monitoring</h2>
                                </div>
                            </a>
                        </div> 
                    </div>
                    <div class="columns is-left" style="padding-top: 3rem">
     <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1744,'BU',@BU))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision <br class="is-hidden-mobile">Automation</h2>
                                </div>
                            </a>
                        </div>
      <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2138))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision <br class="is-hidden-mobile">SMS</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2014))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Parametrage <br class="is-hidden-mobile">Potamia</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2124))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-shooting-star" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Météor <br class="is-hidden-mobile">Perf P3C</h2>
                                </div>
                            </a>
                        </div>
                    </div>    
                       <div class="columns is-left" style="padding-top: 3rem">
                         <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2241))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-personal-space" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Contrats <br class="is-hidden-mobile">Blacklist</h2>
                                </div>
                            </a>
                           
                        </div>
                         
                         <div class="column is-3">
<a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2424))=%%">
    <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
        <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-comment" aria-hidden="true"></i> </span>
        <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Cajoline<br class="is-hidden-mobile">Dynamisation</h2>
    </div>
</a>
</div>
                         
                                                  <div class="column is-3">
<a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2436))=%%">
    <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
        <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-collaborative-library" aria-hidden="true"></i> </span>
        <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Bibliothèque<br class="is-hidden-mobile">Mentions Légales</h2>
    </div>
</a>
</div>
                        
                                             <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2473))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-duplicata" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Création de DE<br class="is-hidden-mobile"> en CSV</h2>
                                </div>
                            </a>
                        </div>
                         </div>
                   <div class="columns is-left" style="padding-top: 3rem">
                         <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2487))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-personal-space" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Gérer les champs <br class="is-hidden-mobile">d'une DE</h2>
                                </div>
                            </a>
                     </div>
                      <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2528))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision<br class="is-hidden-mobile">JB</h2>
                                </div>
                            </a>
                        </div>
                  </div>
                        
                </div>
            </section>
        </article>
        <!--END Partie Admin-->
        <!--BEGIN Partie Marketing-->
        %%[ELSEIF @BU == 'marketing' Then]%%
        <article>
            <section class="section has-background-grey-light doc-animation-third">
                <div class="container">
                     <div class="columns is-centered">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(606))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-archiving-folder" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Demande <br class="is-hidden-mobile">Historisation</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(640))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-priority-path" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Parametrage <br class="is-hidden-mobile">Migration-Acquisition</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1064))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"> <i class="tri-newspapers" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Référentiel <br class="is-hidden-mobile">Campagnes</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1250))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-duplicata" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Création de <br class="is-hidden-mobile"> DE en masse</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="columns is-centered" style="padding-top: 3rem">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(667))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-mobile-data-transfer" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Matrice de<br class="is-hidden-mobile"> lissage SMS</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(602))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-search" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">App <br class="is-hidden-mobile">Finder</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1710))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-beach" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Météo <br class="is-hidden-mobile">Version 1</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1323))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-comment" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Courrier <br class="is-hidden-mobile">SMS 1 Reponse</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="columns is-centered" style="padding-top: 3rem">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1295))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-talentsoft" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Création <br class="is-hidden-mobile">CAV</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1847,'BU','restreint'))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-home-tools" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">KP <br class="is-hidden-mobile">MFO</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2014))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Parametrage <br class="is-hidden-mobile">Potamia</h2>
                                </div>
                            </a>
                        </div>
      <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2138))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision <br class="is-hidden-mobile">SMS</h2>
                                </div>
                            </a>
                        </div>
                        
                    </div>
    <div class="columns is-left" style="padding-top: 3rem">

     <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2124))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-shooting-star" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Météor <br class="is-hidden-mobile">Perf P3C</h2>
                                </div>
                            </a>
                        </div>
      <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(657))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-shooting-star" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Test <br class="is-hidden-mobile">IHM Cajoline</h2>
                                </div>
                            </a>
                        </div>
      
           <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1744,'BU',@BU))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision <br class="is-hidden-mobile">Automation</h2>
                                </div>
                            </a>
                        </div>
   
                

                         <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2241))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-personal-space" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Contrats <br class="is-hidden-mobile">Blacklist</h2>
                                </div>
                            </a>
                        </div> 
                          </div>
                    
                        <div class="columns is-left" style="padding-top: 3rem">
                               <div class="column is-3">
<a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2424))=%%">
    <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
        <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-comment" aria-hidden="true"></i> </span>
        <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Cajoline<br class="is-hidden-mobile">Dynamisation</h2>
    </div>
</a>
</div>
                          <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2005))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-sort" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Fusion Parametrage <br class="is-hidden-mobile">Migration-Acquisition</h2>
                                </div>
                            </a>
                        </div>
                          
                                                   <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2436))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-collaborative-library" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Bibliothèque<br class="is-hidden-mobile">Mentions Légales</h2>
                                </div>
                            </a>
                        </div>
                          
                           <div class="column is-3">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(2528))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-good-practices" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Supervision<br class="is-hidden-mobile">JB</h2>
                                </div>
                            </a>
                        </div>
           </div>
                </div>
            </section>
        </article>
        <!--END Partie Marketing-->
        <!--BEGIN Partie Prospect-->
        %%[ELSEIF @BU == 'prospect' Then]%%
        <article>
            <section class="section has-background-grey-light doc-animation-third">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(702))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-archiving" aria-hidden="true"></i></span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Demande <br class="is-hidden-mobile">Historisation</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(667))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-mobile-data-transfer" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Matrice de<br class="is-hidden-mobile"> lissage SMS</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(602))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-search" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">App <br class="is-hidden-mobile">Finder</h2>
                                </div>
                            </a>
                        </div>
                        <div class="column">
                            <a style="width: 90%; margin: 0 auto" class="box" href="%%=RedirectTo(CloudPagesURL(1710))=%%">
                                <div class="box-content has-text-centered" style="padding: 10px 10px 24px 10px">
                                    <span class="icon is-huge" aria-label="Icone de taille huge"><i class="tri-beach" aria-hidden="true"></i> </span>
                                    <h2 class="title is-level-2 has-text-centered" style="margin-top: 1px">Météo <br class="is-hidden-mobile">Version 1</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        %%[ENDIF]%%
        <!--END Partie Prospect-->
        <footer>
            <section class="section has-background-grey-light">
                <div class="container has-text-centered" style="background-image: url(https://image.infos.bouyguestelecom.fr/lib/fe8e13727467027470/m/1/dee77e38-85c2-4181-9c42-0f3cf4c8e69c.png); background-repeat: no-repeat; height: 50px; background-position: center; background-size: contain;"></div>
            </section>
        </footer>
    </body>
</html>
