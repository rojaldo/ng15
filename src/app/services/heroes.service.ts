import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeroesService {

  private _heroes = [
    new Hero('Windstorm', 'Really cool guy'),
    new Hero('Bombasto', 'Really cool guy'),
    new Hero('Magneta', 'Really cool guy'),
    new Hero('Tornado', 'Really cool guy')];

  public heroes$ = new BehaviorSubject<Hero[]>(this._heroes);

  private _formHero = new Hero();

  constructor() { }

  get formHero() {
    // return a clone
    return Object.assign({}, this._formHero);
  }

  addHero(newHero: Hero) {
    if (newHero.name.trim().length > 0) {
      this._heroes.push(newHero);
      this.heroes$.next(this._heroes);
    }
  }

  updateFormHero(hero: Hero) {
    this._formHero = hero;
  }

  deleteHero(index: number) {
    this._heroes.splice(index, 1);
    this.heroes$.next(this._heroes);
  }
}
