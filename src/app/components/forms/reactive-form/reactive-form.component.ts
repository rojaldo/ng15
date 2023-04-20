import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
});


constructor(private fb: FormBuilder) { }

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
}



}
