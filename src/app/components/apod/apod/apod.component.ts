import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent {

  apodDateStr = '';

  constructor() {

  }

  handleDateChange(dateStr: string) {
    this.apodDateStr = dateStr;
  }


}
