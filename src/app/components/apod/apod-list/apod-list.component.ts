import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss']
})
export class ApodListComponent {
  @Input() apod: any = {};

}
