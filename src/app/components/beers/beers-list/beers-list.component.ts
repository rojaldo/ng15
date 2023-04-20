import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent {
@Input() beers: Beer[] = [];
}
