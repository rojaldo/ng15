import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>(this._beers);

  constructor(private http: HttpClient) { }

  getBeers() {
    const observable = {
      next: (array: any) => {
        this._beers = array.map((jsonBeer: any[]) => new Beer(jsonBeer));
        this.beers$.next(this._beers);
      },
      error: (err: any) => {console.log(err)},
      complete: () => {console.log('complete')}
    };
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(observable)
  }
}
