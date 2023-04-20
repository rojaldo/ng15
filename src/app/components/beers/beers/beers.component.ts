import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  minValue: number = 4;
  maxValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(
      (beers) => {
        this.beers = beers;
        this.handleChange();
      });
    this.service.getBeers();
  }

  handleChange() {
    this.filteredBeers = this.beers.filter(
      (beer) => beer.abv >= this.minValue && beer.abv <= this.maxValue
    );
  }

}
