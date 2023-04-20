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
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { ApodListComponent } from './components/apod/apod-list/apod-list.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeersListComponent } from './components/beers/beers-list/beers-list.component';
import { BeersSliderComponent } from './components/beers/beers-slider/beers-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
    ApodComponent,
    ApodPickerComponent,
    ApodListComponent,
    BeersComponent,
    BeersListComponent,
    BeersSliderComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    NgbModule, 
    HttpClientModule, 
    NgxSliderModule
  ],
  providers: [CalculatorService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
