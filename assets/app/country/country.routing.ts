import { CountryListComponent } from './country-list.component';
import { ContinentCountComponent } from './continent.count.component';
import { Routes, RouterModule } from "@angular/router";


export const COUNTRY_ROUTES: Routes = [
    { path: '', redirectTo: 'countries', pathMatch: 'full' },
    { path: 'countries', component: CountryListComponent },
    { path: 'continent', component: ContinentCountComponent }
];
