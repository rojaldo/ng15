import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-beers-slider',
  templateUrl: './beers-slider.component.html',
  styleUrls: ['./beers-slider.component.scss']
})
export class BeersSliderComponent {

  @Output() onChange = new EventEmitter<any>();

  minValue: number = 4;
  maxValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  handleChange() {
    this.onChange.emit({min: this.minValue, max: this.maxValue});
  }
  
}
