import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beersDataArray: any[] = [];
  private _beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>(this._beers);

  constructor(private http: HttpClient) { }

  getBeers() {
    const observable = {
      next: (array: any) => {
        this._beersDataArray = array;
        this._beers = array.map((jsonBeer: any[]) => new Beer(jsonBeer));
        this.beers$.next(this._beers);
      },
      error: (err: any) => { console.log(err) },
      complete: () => { console.log('complete') }
    };
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(observable)
  }

  getSmartData(id: number): Array<number> {
    const myBeer = this._beersDataArray.filter((beer: any) => beer.id === id);
    if (myBeer.length === 0) {
      return [0, 0, 0];
    }
    return [myBeer[0].abv, myBeer[0].ibu, myBeer[0].ebc];
  }
}
