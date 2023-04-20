import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CalculatorComponent } from '../components/calculator/calculator/calculator.component';
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';
import { ApodComponent } from '../components/apod/apod/apod.component';
import { BeersComponent } from '../components/beers/beers/beers.component';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { PageNotFoundComponent } from '../components/errors/page-not-found/page-not-found.component';
import { FormsComponent } from '../components/forms/forms/forms.component';
import { MyGuard } from '../guards/my-guard.guard';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod', component: ApodComponent },
    { path: 'beers', component: BeersComponent, canActivate: [MyGuard] },
    { path: 'forms', component: FormsComponent },
    { path: '', redirectTo: '/forms', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }