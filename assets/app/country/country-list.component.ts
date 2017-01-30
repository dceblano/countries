import { CountryService } from './country.service';
import { Country } from './country.model';
import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html'
})
export class CountryListComponent implements OnInit {
    countries: Country[];

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries()
            .subscribe(
                (countries: Country[]) => {
                    this.countries = countries;
                }
            );
    }
}