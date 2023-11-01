import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import WebMap from '@arcgis/core/WebMap';

@Component({
  selector: 'app-esries',
  templateUrl: './esries.component.html',
  styleUrls: ['./esries.component.css']
})
export class EsriesComponent implements OnInit, OnDestroy {
  public view: any = null;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;


  initializeMap(): Promise<any> {
    console.log("in initializemap");
    const container = this.mapViewEl.nativeElement;

    
    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });


    
    const map = new Map({
      basemap: "topo-vector"
    });
    
    const view = new MapView({
      container,
      map: map,
      zoom: 4,
      center: [15, 65] // longitude, latitude
    });

    this.view = view;
    console.log("about to return");
    return this.view.when();
  }


  ngOnInit(): any {
    console.log("in ngoninit");
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }





}
