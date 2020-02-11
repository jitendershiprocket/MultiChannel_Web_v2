import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { RouterLinkActive, Router } from '@angular/router';
import { UploadCASComponent } from './upload-cas/upload-cas.component';
import { RedirecttojsComponent } from './pages/redirecttojs/redirecttojs.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            {
                path: 'reports',
                loadChildren: './reports/reports.module#ReportsModule'
            },
            {
                path: 'COD-Panel',
                component: UploadCASComponent,
                data: {
                    oldRoute: 'app.codPanel',
                }
            },
            // {
            //     path: 'upload-awbs', component: UploadCASComponent,
            //     data: {
            //         oldRoute: 'app.uploadAwbs',
            //     }
            // },
            // {
            //     path: 'SOW-Panel', component: UploadCASComponent,
            //     data: {
            //         oldRoute: 'app.sowPanel',
            //     }
            // }
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },


    // Not found
    {
        path: '**',
        component: RedirecttojsComponent,

    }

];
