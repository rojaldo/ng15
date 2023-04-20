import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-predictive-form',
  templateUrl: './predictive-form.component.html',
  styleUrls: ['./predictive-form.component.scss']
})
export class PredictiveFormComponent implements OnInit{
	
  public model: any;
  names: string[] = [];

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.countryNames$.subscribe(
      (names) => {
        this.names = names;
      }
    )
    this.service.getCountries();
  }


	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term: any) =>
				term.length < 2 ? [] : this.names.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);


}
