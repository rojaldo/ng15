import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  constructor() { }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroName = 'Superman';

  addHero() {
    if (this.heroName.trim().length > 0) {
      this.heroes.push(this.heroName);
      this.heroName = '';
    }
  }
}
