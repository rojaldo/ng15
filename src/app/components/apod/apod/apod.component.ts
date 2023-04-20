import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: Apod = new Apod();

  constructor(private service: ApodService) {

  }

  ngOnInit(): void {
    console.log('ngOnInit: ApodComponent');
    this.service.apod$.subscribe(
      (apod) => {
        this.apod = new Apod(apod);
      }
    )
    this.service.getApod();
    // this.service.doSomething();
    
  }

  handleDateChange(dateStr: string) {
    this.service.getApod(dateStr);
    
  }


}
