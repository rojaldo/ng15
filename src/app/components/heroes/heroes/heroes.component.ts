import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  constructor(public service: HeroesService) { }

  getHeroes() {
    return this.service.heroes;
  }

  getFormHero() {
    return this.service.formHero;
  }
  
  addHero(newHero: Hero) {
    if (newHero.name.trim().length > 0) {
      this.service.addHero(newHero);
    }
  }

  handleChange(hero: Hero) {
    this.service.updateFormHero(hero)
  }

  deleteHero(index: number) {
    this.service.deleteHero(index)
  }
}
