import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countries: any[] = [];
  private _countryNames: string[] = [];
  countryNames$ = new BehaviorSubject<string[]>(this._countryNames);

  constructor(private http: HttpClient) { }

  getCountries() {
    let observer = {
      next: (data: any) => {
        this._countries = data;
        this._countryNames = data.map((country: any) => country.translations.spa.common);
        this.countryNames$.next(this._countryNames);
      },
      error: (err: any) => {
        console.log(err);
      }
    }
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }

  get countries() {
    return this._countryNames;
  }

  get countryNames() {
    return this._countryNames;
  }

}
