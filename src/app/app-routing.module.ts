import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const routes: Routes = [

  { path: '', component: PaginaInicioComponent }, // Ruta para la página de inicio
  { path: 'quienes-somos', component: QuienesSomosComponent }, // Ruta para "Quiénes Somos"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
