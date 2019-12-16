import { Component, HostBinding, OnInit ,OnDestroy} from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';

import { SettingsService } from './core/settings/settings.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
    onlineEvent: Observable<Event>;
    offlineEvent: Observable<Event>;

     subscriptions: Subscription[] = [];

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.getLayoutSetting('isFixed'); };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.getLayoutSetting('isCollapsed'); };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.getLayoutSetting('isBoxed'); };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.getLayoutSetting('useFullLayout'); };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.getLayoutSetting('hiddenFooter'); };
    @HostBinding('class.layout-h') get horizontal() { return this.settings.getLayoutSetting('horizontal'); };
    @HostBinding('class.aside-float') get isFloat() { return this.settings.getLayoutSetting('isFloat'); };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.getLayoutSetting('offsidebarOpen'); };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.getLayoutSetting('asideToggled'); };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.getLayoutSetting('isCollapsedText'); };

    constructor(public settings: SettingsService, private toaster : ToastrService) { }

    ngOnInit() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') e.preventDefault();
        });
        this.onlineEvent = fromEvent(window, 'online');
        this.offlineEvent = fromEvent(window, 'offline');

        this.subscriptions.push(this.onlineEvent.subscribe(e => {
            this.toaster.success("Now Online");
        }));

        this.subscriptions.push(this.offlineEvent.subscribe(e => {
           this.toaster.warning('Please check your network connection','Connection lost!');
        }));

        localStorage.setItem("ngStorage-USER", '{"is_ownkey":false,"is_autorecharge_upgradable":0,"account_type":0,"id":1,"first_name":"Ashish","last_name":"Kataria","email":"stage.admin@kartrocket.com","mobile":"9313079252","country_code":"","company_id":1,"is_profile_complete":"true","is_plan_expired":false,"plan_id":3,"created_at":{"date":"2016-06-15 11:54:30.000000","timezone_type":3,"timezone":"Asia/Kolkata"},"role_type":["accounts","admin"],"is_auto_accept_notification_seen":0,"is_onboarding_complete":true,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9tdWx0aWNoYW5uZWwxLmFwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTc1NDYzNDI0LCJleHAiOjE1NzYzMjc0MjQsIm5iZiI6MTU3NTQ2MzQyNCwianRpIjoiREF3VG1QNUV5S0VvMnJCZSJ9.UHQwuJSn6T_HAKWrkUE49JXWWSsoLl3j8tr13mw8KgE","company_name":"ABC INC","tnc_accepted":true,"is_fixed_plan":true,"is_free_plan":false,"is_basic_plan":false,"is_weight_dispute":true,"is_statement":true,"allow_bulk_dispute":false,"is_hul":false,"inventory_sync_status":false,"show_channel_page":true,"international_documents_uploaded":false,"gstn":false,"is_shopify_app_user":false,"kyc_status":0,"channel_limit":10,"allow_mps":0,"primary_pincode":"","is_seller":false,"web_app_version":1,"billing_cycle":"NA","renewal_date":"NA","is_suspended":false,"renewal_days_left":"NA","kyc_shipment_count_error":false,"shipment_count":1,"kyc_shipment_check":0,"kyc_bulk_status":{},"tier":"","tracking_url":"/tracking/","hide_revenue":false,"is_custom_user":false,"is_recharge_pending":true,"is_admin":false,"early_cod_enabled":false}');

        


    }

    ngOnDestroy(): void {
        /**
        * Unsubscribe all subscriptions to avoid memory leak
        */
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}

/**
 * @fromEvent
 * @description
 * fromEvent accepts as a first argument event target, which is an object with methods for registering event handler functions. 
 * As a second argument it takes string that indicates type of event we want to listen for
 */

