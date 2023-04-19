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

  getApod(dateStr?: string) {
    let url = 'https://api.nasa.gov/planetary/apod'
    const apiKey = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

    dateStr ? url += `?api_key=${apiKey}&date=${dateStr}` : url += `?api_key=${apiKey}`;

    const observable = {
      next: (data: any) => {
        console.log(data)
        this._apodData = data;
        this.apod$.next(this._apodData);
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('complete')
    };
    this.service.get(url).subscribe(observable);
  }

}
