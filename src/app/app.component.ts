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

