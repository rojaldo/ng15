import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  @Output() onNewHero = new EventEmitter<Hero>();

  hero = new Hero();

  addHero() {
    this.onNewHero.emit(this.hero);
    this.hero = new Hero();
  }
}
