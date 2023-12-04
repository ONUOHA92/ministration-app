
import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import * as L from 'leaflet';
// import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import { Subject } from "rxjs";

@Component({
  selector: 'app-mapx',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // public latlng: LatLng = new LatLng();

  @Input() tracking: Subject<any>;

  @Input() inputModel: any;

  @Output() inputModelChange = new EventEmitter<string>();

  public location: any = {
    x: -3.9747177,
    y: 56.1187003,
    label: 'Dumbarton, Stiling City, Scotland'
  };

  ngOnInit() {

    this.initMap();

    // console.log("Map Initialized here");

  }



  ngAfterViewInit() {

    // this.tracking.subscribe(v => { 

    //   switch(v.key){
    //       case "status":
    //         if(v.value){
    //           // setTimeout(() => this.initMap(), 200);
    //         }
    //       break;
    //       case "address":
    //           if(v.value){
    //               console.log("Address Entered:", v.value)

    //               this.address = v.value;

    //               setTimeout(() => this.initMap(), 200);
    //           }
    //       break;
    //   }

    // });
  }

  ////////////// MAP leaflet ///////////////
  public address: string;

  public marker: any;

  public initMap(): void {

    // refresh map id
    document.getElementById(
      "contain-map"
    ).innerHTML = `<div id='map' style='width: 100%; height: 100%;'></div>`;
    // init map
    const map = L.map("map", {
      // Set latitude and longitude of the map center (required)
      center: [this.location.y, this.location.x],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 13
    });
    // add icon
    L.icon({
      iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Chartreuse-icon.png",
      // shadowUrl: 'assets/images/icons/Blank.png',
      iconSize: [25, 41], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [9, 40], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    L.control.scale().addTo(map);
    // Create a Tile Layer and add it to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
    }).addTo(map);

    // add search control https://github.com/smeijer/leaflet-geosearch
    const provider = new OpenStreetMapProvider();
    const searchControl = GeoSearchControl({
      provider: provider,
      autoClose: true
    });
    // map.addControl(searchControl);

    /**
     * Set address on the map
     */
    this.getAddress(provider, map)

    // popover
    // let marker = L.marker([this.location.y, this.location.x], { draggable: true })
    //   .addTo(map)
    //   // .bindPopup(this.location.label)
    //   .openPopup();

    //   marker.on('click', function(e) {

    //     alert("Label clicked!");

    //  })

    // handler
    // map.on("geosearch/showlocation", e => {
    //   if (this.marker) {
    //     // check
    //     map.removeLayer(this.marker); // remove
    //   }

    //   this.marker = new L.Marker([e.location.y, e.location.x], { draggable: true })
    //     .addTo(map)
    //     .bindPopup(e.location.label)
    //     .openPopup();
    // });

    let $this = this;

    map.on('click', function (e) {

      // console.log(e.location.label)

      $this.onChange(e);

      // $this.inputModel = $this.latlng;

      if (this.marker) {
        // check
        map.removeLayer(this.marker); // remove
      }

      // this.marker = new L.Marker(e.latlng, { draggable: true })
      // .addTo(map)
      // // .bindPopup('<p>New Location Selected</p>')
      // .openPopup();

      // var popLocation= e.latlng;
      // var popup = L.popup()
      // .setLatLng(popLocation)
      // .setContent('<p>Hello world!<br />This is a nice popup.</p>')
      // .openOn(map);        
    });

  }

  onChange(e) {

    let data: any = e.latlng;

    console.log(e);

    this.inputModelChange.emit(data);
  }

  getAddress(provider: any, map: any) {

    if (this.address) {

      var query_promise = provider.search({ query: `${this.address}` });
      console.log(this.address, query_promise);

      query_promise.then(value => {

        for (let i = 0; i < value.length; i++) {

          var x_coor = value[i].x;
          var y_coor = value[i].y;
          var label = value[i].label;
          // Create a marker for the found coordinates
          this.marker = L.marker([y_coor, x_coor], { draggable: true }).addTo(map) // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
          // Add a popup to said marker with the address found by geosearch (not the one from the user)
          this.marker.bindPopup("<b>Found location</b><br>" + label).openPopup();

          /**
           * Emit event change to parent view
           */
          this.onChange({ latlng: { lat: y_coor, lng: x_coor } });

          break;
        };
      }, reason => {
        console.log(reason); // Error!
      });

    }

  }
}
