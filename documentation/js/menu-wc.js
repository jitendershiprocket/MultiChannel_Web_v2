'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angle documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cdad714c06ba29726f07c79ffd776a87"' : 'data-target="#xs-components-links-module-AppModule-cdad714c06ba29726f07c79ffd776a87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cdad714c06ba29726f07c79ffd776a87"' :
                                            'id="xs-components-links-module-AppModule-cdad714c06ba29726f07c79ffd776a87"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-fc2680f9a11cc2e89f655323dd07d8b7"' : 'data-target="#xs-injectables-links-module-CoreModule-fc2680f9a11cc2e89f655323dd07d8b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-fc2680f9a11cc2e89f655323dd07d8b7"' :
                                        'id="xs-injectables-links-module-CoreModule-fc2680f9a11cc2e89f655323dd07d8b7"' }>
                                        <li class="link">
                                            <a href="injectables/MenuService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThemesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-4e0dc99e9a1db15968bbd9ca37fd0093"' : 'data-target="#xs-components-links-module-HomeModule-4e0dc99e9a1db15968bbd9ca37fd0093"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-4e0dc99e9a1db15968bbd9ca37fd0093"' :
                                            'id="xs-components-links-module-HomeModule-4e0dc99e9a1db15968bbd9ca37fd0093"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-40ce3e735af527d63588ad1840100ee5"' : 'data-target="#xs-components-links-module-LayoutModule-40ce3e735af527d63588ad1840100ee5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-40ce3e735af527d63588ad1840100ee5"' :
                                            'id="xs-components-links-module-LayoutModule-40ce3e735af527d63588ad1840100ee5"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-d08df9acc69b5e55ba5b6e165b2561a4"' : 'data-target="#xs-components-links-module-PagesModule-d08df9acc69b5e55ba5b6e165b2561a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-d08df9acc69b5e55ba5b6e165b2561a4"' :
                                            'id="xs-components-links-module-PagesModule-d08df9acc69b5e55ba5b6e165b2561a4"' }>
                                            <li class="link">
                                                <a href="components/Error404Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Error404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Error500Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Error500Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaintenanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaintenanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link">ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportsModule-ccfa420a137856ac392f3df3d02796b8"' : 'data-target="#xs-components-links-module-ReportsModule-ccfa420a137856ac392f3df3d02796b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportsModule-ccfa420a137856ac392f3df3d02796b8"' :
                                            'id="xs-components-links-module-ReportsModule-ccfa420a137856ac392f3df3d02796b8"' }>
                                            <li class="link">
                                                <a href="components/OrderReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderReportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsRoutingModule.html" data-type="entity-link">ReportsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutesModule.html" data-type="entity-link">RoutesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SampleModule.html" data-type="entity-link">SampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SampleModule-a727fb3b0ad9a4f8aae35c05ab5e2001"' : 'data-target="#xs-components-links-module-SampleModule-a727fb3b0ad9a4f8aae35c05ab5e2001"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SampleModule-a727fb3b0ad9a4f8aae35c05ab5e2001"' :
                                            'id="xs-components-links-module-SampleModule-a727fb3b0ad9a4f8aae35c05ab5e2001"' }>
                                            <li class="link">
                                                <a href="components/SampleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Samplev1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Samplev1Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SampleRoutingModule.html" data-type="entity-link">SampleRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-975781838ce3384a17252173e399242b"' : 'data-target="#xs-directives-links-module-SharedModule-975781838ce3384a17252173e399242b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-975781838ce3384a17252173e399242b"' :
                                        'id="xs-directives-links-module-SharedModule-975781838ce3384a17252173e399242b"' }>
                                        <li class="link">
                                            <a href="directives/CheckallDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckallDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/EasypiechartDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">EasypiechartDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FlotDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlotDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/JqcloudDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">JqcloudDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NowDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NowDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollableDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SparklineDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SparklineDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/VectormapDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">VectormapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-975781838ce3384a17252173e399242b"' : 'data-target="#xs-injectables-links-module-SharedModule-975781838ce3384a17252173e399242b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-975781838ce3384a17252173e399242b"' :
                                        'id="xs-injectables-links-module-SharedModule-975781838ce3384a17252173e399242b"' }>
                                        <li class="link">
                                            <a href="injectables/ColorsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});