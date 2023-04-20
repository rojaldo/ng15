import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';
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

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(
      (beers) => {
        this.beers = beers;
        this.handleChange({min: 4, max: 6});
      });
    this.service.getBeers();
  }

  handleChange(value: any){
    // use rxjs operators to filter the beers
    of(this.beers).pipe(
      map((beers) => beers.filter(
        (beer) => beer.abv >= value.min && beer.abv <= value.max
      )),
      tap((beers) => this.filteredBeers = beers)
    ).subscribe();
  }

  handleSlowerChange(value: any){
        // use filter function from array to filter the beers
    this.filteredBeers = this.beers.filter(
      (beer) => beer.abv >= value.min && beer.abv <= value.max
    );
  }

}
