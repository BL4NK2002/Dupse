import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VoluntarioListComponent } from './components/voluntario-list/voluntario-list.component';
import { VoluntarioAddComponent } from './components/voluntario-add/voluntario-add.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent }, // Ruta raíz: Página de Inicio
  { path: 'quienes-somos', component: QuienesSomosComponent }, // Ruta para "Quiénes Somos"
  { path: 'contactanos', component: ContactanosComponent }, // Ruta para "contactanos"
  { path: 'voluntarios', component: VoluntarioListComponent }, // Lista de voluntarios
  { path: 'aliados', component: AliadosComponent }, // Lista de aliados
  { path: 'eventos', component: EventosComponent }, // Lista de eventos
  { path: 'voluntarios/add', component: VoluntarioAddComponent }, // Agregar un voluntario
];

@NgModule({
  declarations: [
    AppComponent,
    VoluntarioListComponent,
    VoluntarioAddComponent,
    PaginaInicioComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    AliadosComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes), // Configuración de rutas
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
