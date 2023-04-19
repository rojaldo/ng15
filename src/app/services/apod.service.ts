import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of, tap, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apodData: any = {};
  public apod$ = new BehaviorSubject<any>(this._apodData);

  constructor(private service: HttpClient) {
  }

  getApod() {
    const observable = {
      next: (data: any) => {
        console.log(data)
        this._apodData = data;
        this.apod$.next(this._apodData);
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('complete')
    };
    this.service.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(observable);
  }

}
