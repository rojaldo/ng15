import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  public display = '';

  constructor(private calculatorService: CalculatorService) { 
    this.calculatorService.display$.subscribe(
      (value) => {
        this.display = value;
      }
    )
  }

  handleClick(value: number | string) {
    console.log('handleClick', value);
    if(typeof value === 'number') {
      this.calculatorService.handleNumber(value);
    } else if (typeof value === 'string') {
      this.calculatorService.handleSymbol(value);
    }
  }

}
