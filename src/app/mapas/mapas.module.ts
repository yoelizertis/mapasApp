import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    FullScreenComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
