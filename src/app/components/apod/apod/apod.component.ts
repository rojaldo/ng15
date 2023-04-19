import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    console.log('ngOnInit: ApodComponent');
    this.service.apod$.subscribe(
      (apod) => {
        this.apod = apod;
      }
    )
    this.service.getApod();
    // this.service.doSomething();
    
  }


}
