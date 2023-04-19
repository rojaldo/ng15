import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {};
  model!: NgbDateStruct;

  constructor(private service: ApodService, private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

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

  handleDateChange(event: any) {
    console.log('handleDateChange', event);
    // transform NgbDateStruct to string in format yyyy-mm-dd
    const dateStr = `${event.year}-${event.month}-${event.day}`;
    this.service.getApod(dateStr);
    
  }


}
