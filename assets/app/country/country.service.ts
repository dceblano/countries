import { Country } from './country.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CountryService {
    private countries: Country[] = [];
    count: number;

    constructor(private http: Http) {}

    getCountries() {
        return this.http.get('http://localhost:3000/country')
            .map((response: Response) => {
                const countries = response.json().obj;
                let transformedcountries: Country[] = [];
                for (let country of countries) {
                    transformedcountries.push(new Country(country.Code, country.Name, country.Continent, country.StatusId));
                }
                this.countries = transformedcountries;
                return transformedcountries;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    countCountriesByContinent(continent) {
        return this.http.get('http://localhost:3000/country/continent/' + continent)
            .map((response: Response) => {
                this.count = response.json().count[0].count; 
                return this.count;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}