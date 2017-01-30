import { CountryService } from './country.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-continent-count',
    template: '{{count}}'
})
export class ContinentCountComponent {
    @Input() continent: string;

    count: number;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.countCountriesByContinent(this.continent)   
            .subscribe(
                (count: number) => {
                    this.count = count;
                }
            );
    }
}