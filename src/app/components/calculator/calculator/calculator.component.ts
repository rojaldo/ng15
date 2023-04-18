import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  public display = '';

  constructor(private calculatorService: CalculatorService) { }

  handleClick(value: number | string) {
    console.log('handleClick', value);
    if(typeof value === 'number') {
      this.display = this.calculatorService.handleNumber(value);
    } else if (typeof value === 'string') {
      this.display = this.calculatorService.handleSymbol(value);
    }
  }

}
