import { Component } from '@angular/core';


enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public display = '';

  private currentState = State.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private result = 0;
  private operator = '';


  handleClick(value: number | string) {
    console.log('handleClick', value);
    if(typeof value === 'number') {
      this.handleNumber(value);
    } else if (typeof value === 'string') {
      this.handleSymbol(value);
    }
  }

  handleNumber(value: number) {
    switch(this.currentState) {
      case State.Init:
        this.firstFigure = value;
        this.currentState = State.FirstFigure;
        this.display = this.firstFigure.toString();
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display = this.firstFigure.toString();
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += this.secondFigure.toString();
        break;
      case State.Result:
        this.clearCalculator();
        this.firstFigure = value;
        this.currentState = State.FirstFigure;
        this.display = this.firstFigure.toString();
        break;
      default:
        break;
    }
  }

  handleSymbol(value: string) {
    if(value === 'C') {
      this.clearCalculator();
      return;
    }
    switch(this.currentState) {
      case State.Init:
        break;
      case State.FirstFigure:
        if(this.isOperator(value)){
          this.operator = value;
          this.currentState = State.SecondFigure;
          this.display += this.operator;
        }
        break;
      case State.SecondFigure:
        if(value === '=') {
          this.result = this.resolve();
          this.display += `=${this.result}`;
          this.currentState = State.Result;
        }
        break;
      case State.Result:
        if(this.isOperator(value)){
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = value;
          this.currentState = State.SecondFigure;
          this.display = `${this.firstFigure}${this.operator}`;
        }
        break;
      default:
        break;
    }
  }

  resolve(): number {
    switch(this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }

  clearCalculator(): void {
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.result = 0;
    this.operator = '';
    this.display = '';
    this.currentState = State.Init;
  }

  isOperator(value: string): boolean {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }
}
