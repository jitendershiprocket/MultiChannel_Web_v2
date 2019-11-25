import { Component, OnInit, ViewChild } from '@angular/core';

import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout

    isNavSearchVisible: boolean;

    constructor(public menu: MenuService, public settings: SettingsService) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout

    }

    ngOnInit() {
        this.isNavSearchVisible = false;

        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv\:11\./)) { // Not supported under IE
        }
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
