import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BeersService } from './services/beers.service';
import { ApodService } from './services/apod.service';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { PredictiveFormComponent } from './components/forms/predictive-form/predictive-form.component';
import { AppRoutingModule } from './modules/app.routing.module';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { AbvPipe } from './pipes/abv.pipe';

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
    BeersSliderComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PredictiveFormComponent,
    PageNotFoundComponent,
    FormsComponent,
    AbvPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbModule, 
    HttpClientModule, 
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, HeroesService, BeersService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
