import { Component, EventEmitter, Output } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod-picker',
  templateUrl: './apod-picker.component.html',
  styleUrls: ['./apod-picker.component.scss']
})
export class ApodPickerComponent {

  @Output() onDateChange = new EventEmitter<string>();

  model!: NgbDateStruct;

  constructor(private calendar: NgbCalendar) { 
    this.model = this.calendar.getToday();
  }

  handleDateChange(date: NgbDateStruct) {
    const dateStr = `${date.year}-${date.month}-${date.day}`;
    this.onDateChange.emit(dateStr);
  }
}
