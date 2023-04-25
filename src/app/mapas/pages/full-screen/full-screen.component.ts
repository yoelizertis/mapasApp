import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa{
      width:100%;
      height:100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit{
  ngOnInit(): void {
    
var map = new mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-5.6238062901122525,43.52597740147863],
  zoom:17
});

  }

}
