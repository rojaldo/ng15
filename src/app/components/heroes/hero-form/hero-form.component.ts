import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  @Output() onNewHero = new EventEmitter<Hero>();

  hero = new Hero();

  constructor(private service: HeroesService) { 
    this.hero = this.service.formHero;
  }

  addHero() {
    this.onNewHero.emit(this.hero);
    this.hero = new Hero();
  }

  handleChange(){
    this.service.updateFormHero(this.hero);
  }

  
}
