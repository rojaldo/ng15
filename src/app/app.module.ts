import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorService } from './services/calculator.service';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule
  ],
  providers: [CalculatorService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
