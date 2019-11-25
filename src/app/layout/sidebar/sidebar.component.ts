import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../services/app-setting';
declare var $: any;

import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

    menuItems: Array<any>;
    router: Router;
    sbclickEvent = 'click.sidebar-toggle';
    $doc: any = null;

    constructor(public menu: MenuService, public settings: SettingsService, public injector: Injector) {



        
        localStorage.setItem("ngStorage-menuItems", '{"reports":{"order_report":true,"billing_report":true,"awb_status_report":true,"delhivery_warehouse_report":true,"company_master":true,"weight_dispute_report":{"pincode_upload":true,"price_upload":true},"seller_report":true,"zone_serviceability":true,"refund_freight_report":true,"pincode_serviceability":true,"awb_order_report":true,"awb_billing_report":true},"cod_panel":true,"upload-awbs":true,"sow_panel":true,"ndr":{"ndr_panel":true,"call_center":true,"ndr_escalation":true,"callcenter_priority":true,"ndr_kam":true},"company":{"manage":true,"shipping_limit":true},"international_couriers":true,"weight_dispute":{"wd_image_upload":true,"wd_mis_upload":true,"wd_resolve_sheet":true,"weight_slab":true,"wd_category":true,"weight_freez":true,"weight_upload":true,"weight_freeze_awbs":true},"remittance":{"upload_remittance":true,"view_remittance_history":true,"upload_courier_file":true,"upload_lost_awb":true},"automated_billing":false,"verifications":{"kyc":true,"bank":true},"internal_crm":{"admin_seller":true,"admin_shipment":true,"mainfest_escalation":true},"pincode_panel":{"pincode_summary":true,"pincode_update_panel":true},"sales":true,"coupons":{"coupon_list":true,"coupon_create":true},"escalation":{"expedite_escalation":true}}');




        let apimenu = JSON.parse(localStorage.getItem('ngStorage-menuItems'));
        var apimenuKey = Object.keys(apimenu);
        let jsondata = JSON.parse(AppSettings.API_ENDPOINT);

        // console.log(apimenu, apimenuKey);

        let actualMenuItem = [];
    //    console.log(actualMenuItem, 'apimenu');
       for(let data in jsondata){
           if(apimenuKey.indexOf(data) !== -1 )
             {  
                var finalData = jsondata[data];
                if(finalData.submenu != undefined){
                    var submenu = [];
                    var submenuValue = Object.keys(finalData.submenu);
                    var apisubmenukey = Object.keys(apimenu[data]);
                    // console.log(submenuValue, 'fir');
                    // console.log(apisubmenukey, 'sec')
                    for(let subdata in submenuValue){
                        // console.log(apisubmenukey);
                        if(apisubmenukey.indexOf(submenuValue[subdata]) != -1){
                            // console.log(jsondata[data].submenu[submenuValue[subdata]], 'hello');
                            submenu.push(jsondata[data].submenu[submenuValue[subdata]]);
                        }
                    }
                    finalData.submenu = submenu;
                    // console.log(submenu);
                }
            //    console.log(finalData);
               actualMenuItem.push(finalData);
             }  
        
        }
        this.menuItems = actualMenuItem;
    }

    ngOnInit() {

        this.router = this.injector.get(Router);

        this.router.events.subscribe((val) => {
            // close any submenu opened when route changes
            this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
            // close sidebar on route change
            this.settings.setLayoutSetting('asideToggled', false);
        });

        // enable sidebar autoclose from extenal clicks
        this.anyClickClose();

    }

    anyClickClose() {
        this.$doc = $(document).on(this.sbclickEvent, (e) => {
            if (!$(e.target).parents('.aside-container').length) {
                this.settings.setLayoutSetting('asideToggled', false);
            }
        });
    }

    ngOnDestroy() {
        if (this.$doc)
            this.$doc.off(this.sbclickEvent);
    }

    toggleSubmenuClick(event) {

        event.preventDefault();

        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {

            let ul = $(event.currentTarget.nextElementSibling);

            // hide other submenus
            let parentNav = ul.parents('.sidebar-subnav');
            $('.sidebar-subnav').each((idx, el) => {
                let $el = $(el);
                // if element is not a parent or self ul
                if (el !== parentNav[0] && el !== ul[0]) {
                    this.closeMenu($el);
                }
            });

            // abort if not UL to process
            if (!ul.length) {
                return;
            }

            // any child menu should start closed
            ul.find('.sidebar-subnav').each((idx, el) => {
                this.closeMenu($(el));
            });

            // toggle UL height
            const ulHeight = ul.css('height')
            if (ulHeight === 'auto' || parseInt(ulHeight, 10)) {
                this.closeMenu(ul);
            }
            else {
                // expand menu
                ul.on('transitionend', () => {
                    ul.css('height', 'auto').off('transitionend');
                }).css('height', ul[0].scrollHeight);
                // add class to manage animation
                ul.addClass('opening');
            }

        }

    }

    // Close menu collapsing height
    closeMenu(elem) {
        elem.css('height', elem[0].scrollHeight); // set height
        elem.css('height', 0); // and move to zero to collapse
        elem.removeClass('opening');
    }

    toggleSubmenuHover(event) {
        let self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();

            this.removeFloatingNav();

            let ul = $(event.currentTarget.nextElementSibling);
            let anchor = $(event.currentTarget);

            if (!ul.length) {
                return; // if not submenu return
            }

            let $aside = $('.aside-container');
            let $asideInner = $aside.children('.aside-inner'); // for top offset calculation
            let $sidebar = $asideInner.children('.sidebar');
            let mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            let itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();

            let floatingNav = ul.clone().appendTo($aside);
            let vwHeight = document.body.clientHeight;

            // let itemTop = anchor.position().top || anchor.offset().top;

            floatingNav
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                    position: this.settings.getLayoutSetting('isFixed') ? 'fixed' : 'absolute',
                    top: itemTop,
                    bottom: (floatingNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
                });

            floatingNav
                .on('mouseleave', () => { floatingNav.remove(); })
                .find('a').on('click', function(e) {
                    e.preventDefault(); // prevents page reload on click
                    // get the exact route path to navigate
                    let routeTo = $(this).attr('route');
                    if (routeTo) self.router.navigate([routeTo]);
                });

            this.listenForExternalClicks();

        }

    }

    listenForExternalClicks() {
        let $doc = $(document).on('click.sidebar', (e) => {
            if (!$(e.target).parents('.aside-container').length) {
                this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    }

    removeFloatingNav() {
        $('.nav-floating').remove();
    }

    isSidebarCollapsed() {
        return this.settings.getLayoutSetting('isCollapsed');
    }
    isSidebarCollapsedText() {
        return this.settings.getLayoutSetting('isCollapsedText');
    }
    isEnabledHover() {
        return this.settings.getLayoutSetting('asideHover');
    }
}
