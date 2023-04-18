import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {

  private _heroes = [
    new Hero('Windstorm', 'Really cool guy'),
    new Hero('Bombasto', 'Really cool guy'),
    new Hero('Magneta', 'Really cool guy'),
    new Hero('Tornado', 'Really cool guy')];

  private _formHero = new Hero();

  constructor() { }

  get heroes() {
    // return a copy of the array
    return this._heroes.slice();
  }

  get formHero() {
    // return a clone
    return Object.assign({}, this._formHero);
  }

  addHero(newHero: Hero) {    
    if (newHero.name.trim().length > 0) {
      this._heroes.push(newHero);
    }
  }

  updateFormHero(hero: Hero) {
    this._formHero = hero;
  }

  deleteHero(index: number) {
    this._heroes.splice(index, 1);
  }
}
