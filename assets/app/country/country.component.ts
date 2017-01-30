import { Country } from './country.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html'
})
export class CountryComponent {
     @Input() country: Country;
}