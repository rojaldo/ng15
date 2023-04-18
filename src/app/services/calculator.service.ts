import { Injectable } from '@angular/core';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result,
}

@Injectable()
export class CalculatorService {
  private _display = '';
  private _currentState = State.Init;
  private _firstFigure = 0;
  private _secondFigure = 0;
  private _result = 0;
  private _operator = '';

  constructor() { }

  public handleNumber(value: number): string {
    switch(this._currentState) {
      case State.Init:
        this._firstFigure = value;
        this._currentState = State.FirstFigure;
        this._display = this._firstFigure.toString();
        break;
      case State.FirstFigure:
        this._firstFigure = this._firstFigure * 10 + value;
        this._display = this._firstFigure.toString();
        break;
      case State.SecondFigure:
        this._secondFigure = this._secondFigure * 10 + value;
        this._display += value.toString();
        break;
      case State.Result:
        this.clearCalculator();
        this._firstFigure = value;
        this._currentState = State.FirstFigure;
        this._display = this._firstFigure.toString();
        break;
      default:
        break;
    }
    return this._display;
  }

  public handleSymbol(value: string): string {
    if(value === 'C') {
      this.clearCalculator();
      return '';
    }
    switch(this._currentState) {
      case State.Init:
        break;
      case State.FirstFigure:
        if(this.isOperator(value)){
          this._operator = value;
          this._currentState = State.SecondFigure;
          this._display += this._operator;
        }
        break;
      case State.SecondFigure:
        if(value === '=') {
          this._result = this.resolve();
          this._display += `=${this._result}`;
          this._currentState = State.Result;
        }
        break;
      case State.Result:
        if(this.isOperator(value)){
          this._firstFigure = this._result;
          this._secondFigure = 0;
          this._operator = value;
          this._currentState = State.SecondFigure;
          this._display = `${this._firstFigure}${this._operator}`;
        }
        break;
      default:
        break;
    }
    return this._display;
  }

  private resolve(): number {
    switch(this._operator) {
      case '+':
        return this._firstFigure + this._secondFigure;
      case '-':
        return this._firstFigure - this._secondFigure;
      case '*':
        return this._firstFigure * this._secondFigure;
      case '/':
        return this._firstFigure / this._secondFigure;
      default:
        return 0;
    }
  }

  private clearCalculator(): void {
    this._firstFigure = 0;
    this._secondFigure = 0;
    this._result = 0;
    this._operator = '';
    this._display = '';
    this._currentState = State.Init;
  }

  private isOperator(value: string): boolean {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }

}
