import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss']
})
export class ApodListComponent implements OnChanges{
  @Input() apodDate: string = '';

  apod: Apod = new Apod();

  constructor(private service: ApodService) { }

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ' + JSON.stringify(changes));
    this.service.getApod(this.apodDate);
  }
}
