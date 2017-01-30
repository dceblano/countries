import { CountryListComponent } from './country/country-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes, RouterModule } from "@angular/router";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'countries', component: CountryListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);