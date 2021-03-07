import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// las constantes van en mayusculas

// luego esto se anade al app.modules

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''} // si no encuentra ninguna ruta anterior
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);