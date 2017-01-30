import { ContinentCountComponent } from './country/continent.count.component';
import { CountryService } from './country/country.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list.component';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent, 
        CountryListComponent, 
        CountryComponent, 
        DashboardComponent,
        ContinentCountComponent],
    imports: [
        BrowserModule, 
        routing, 
        HttpModule],
    providers: [CountryService],
    bootstrap: [AppComponent]
})
export class AppModule {

}