import { ContinentCountComponent } from './continent.count.component';
import { AUTH_ROUTES } from './../dashboard/dashboard.routing';
import { CountryService } from './country.service';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CountryListComponent,
        CountryComponent,
        ContinentCountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AUTH_ROUTES
    ],
    providers: [CountryService]
})
export class CountryModule {

}