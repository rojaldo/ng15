import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  model = new Hero();

  submitted = false;

  // regex that checks for only letters and spaces min 2 max 5, include spanish characters
  namePattern = '^[a-zA-Z\u00C0-\u017F ]{2,5}$';

  descriptionPattern = '^[a-zA-Z0-9\u00C0-\u017F ]{2,5}$';

  onSubmit() { 
    this.submitted = true; 
    console.log('submitted: ' + JSON.stringify(this.model));
    this.model = new Hero();
    
  }

  newHero() {
    this.model = new Hero();
  }


}
