import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from "@angular/router";


export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }
];
