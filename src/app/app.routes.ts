import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListaComponent } from "./components/lista/lista.component";

// arreglo de rutas con path y componentes
// los ** es si no encuentra la ruta ejecutara esto
// se importa en app.modules

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'lista', component: ListaComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// si se necesitara usar el # en las rutas
// esta manera es mas eficiente para usar parametros
// en lugar de las direcciones normales que aveces fallan

// se puede arreglar las rutas normales con <base href="/">
// tambien se ocupa una configuracion previa en el server

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
