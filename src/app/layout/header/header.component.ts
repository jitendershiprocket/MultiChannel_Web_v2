import { Component, OnInit, ViewChild } from '@angular/core';

import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { AuthService } from '../../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../shared/services/http.service';
import { FreshdeskService } from '../../shared/services/admin/freshdesk.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout

    isNavSearchVisible: boolean;
    userData:any;

    constructor(public menu: MenuService, public settings: SettingsService, public authService: AuthService, private toastr: ToastrService, private httpService: HttpService, private FreshdeskService: FreshdeskService) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }

    ngOnInit() {
        this.isNavSearchVisible = false;

        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv\:11\./)) { // Not supported under IE
        }
        this.userData = JSON.parse(localStorage.getItem("ngStorage-USER"));
    }

    freshdesk(){
        this.FreshdeskService.freshdeskService('support/sso-url').subscribe(response => {
            if (response) {
                this.toastr.success(response);
                var redirect = response.url;
                window.open(redirect, '_blank');
            } else {
                this.toastr.warning(response.error);
            }
        })
    }

    logout(){
        this.authService.logout();
    }

    toggleUserBlock(event) {
        event.preventDefault();
    }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleOffsidebar() {
        this.settings.toggleLayoutSetting('offsidebarOpen');
    }

    toggleCollapsedSideabar() {
        this.settings.toggleLayoutSetting('isCollapsed');
    }

    isCollapsedText() {
        return this.settings.getLayoutSetting('isCollapsedText');
    }

    toggleFullScreen(event) {
    }
}
