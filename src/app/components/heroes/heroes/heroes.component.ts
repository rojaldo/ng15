import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  constructor() { }

  heroes = [
    new Hero('Windstorm', 'Really cool guy'), 
    new Hero('Bombasto', 'Really cool guy'), 
    new Hero('Magneta', 'Really cool guy'), 
    new Hero('Tornado', 'Really cool guy')];

  
  addHero(newHero: Hero) {
    if (newHero.name.trim().length > 0) {
      this.heroes.push(newHero);
    }
  }
}
