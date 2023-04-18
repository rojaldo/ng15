import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  @Input() myHeroes = new Array<Hero>();
  @Output() onDeleteHero = new EventEmitter<number>();

  deleteHero(index: number) {
    this.onDeleteHero.emit(index);
  }
}
