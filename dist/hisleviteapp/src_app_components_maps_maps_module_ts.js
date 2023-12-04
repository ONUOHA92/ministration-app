"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_maps_maps_module_ts"],{

/***/ 71485:
/*!************************************************************!*\
  !*** ./src/app/components/maps/google/google.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleComponent: () => (/* binding */ GoogleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class GoogleComponent {
  constructor() {
    // Map1
    this.lat_m1 = 20.593683;
    this.lng_m1 = 78.962883;
    this.zoom_m1 = 4;
    //Map2
    this.lat_m2 = 52.5159;
    this.lng_m2 = 13.3777;
    this.zoom_m2 = 14;
    //Map3
    this.lat_m3 = 34.552942;
    this.lng_m3 = 112.690597;
    this.zoom_m3 = 6;
    //Map4
    this.lat_m4 = 27.98805;
    this.lng_m4 = 86.9250;
    this.zoom_m4 = 10;
    //Map5
    this.lat_m5 = 42.3572;
    this.lng_m5 = -71.0596;
    this.zoom_m5 = 4;
    this.lat_m5_c1 = 41.4822;
    this.lng_m5_c1 = -81.6697;
    this.lat_m5_c2 = 37.090240;
    this.lng_m5_c2 = -95.712891;
    //Map6
    this.lat_m6 = 10;
    this.lng_m6 = 10;
    this.zoom_m6 = 5;
    this.paths_m6 = [{
      lat: 0,
      lng: 10
    }, {
      lat: 0,
      lng: 20
    }, {
      lat: 10,
      lng: 20
    }, {
      lat: 10,
      lng: 10
    }, {
      lat: 0,
      lng: 10
    }];
    //Map7
    this.lat_m7 = 52.5159;
    this.lng_m7 = 13.3777;
    this.zoom_m7 = 14;
    //Map8
    this.lat_m8 = 52.5159;
    this.lng_m8 = 13.3777;
    this.zoom_m8 = 3;
    this.lat_m8_A = 53.3477;
    this.lng_m8_A = -6.2597;
    this.lat_m8_B = 51.5008;
    this.lng_m8_B = -0.1224;
    this.lat_m8_c = 48.8567;
    this.lng_m8_c = 2.3508;
    this.lat_m8_d = 52.5166;
    this.lng_m8_d = 13.3833;
    this.strokecolor_m8 = "#0000FF";
    this.strokewidth_m8 = 4;
    //Map9
    this.lat_m9 = 52.5159;
    this.lng_m9 = 13.3777;
    this.zoom_m9 = 2;
    this.fillcolor_m9 = "#FFFFCC";
    this.strokeColor_m9 = "#829";
    this.pstrokeweight_m9 = 8;
    this.fillOpacity_m9 = 1;
    this.paths_m9 = [{
      lat: 52,
      lng: 40
    }, {
      lat: 40,
      lng: 13
    }, {
      lat: 13,
      lng: 50
    }];
    //Map10
    this.lat_m10 = 42.3572;
    this.lng_m10 = -81.6697;
    this.zoom_m10 = 4;
    this.lat_m10_c1 = 37.090240;
    this.lng_m10_c1 = -95.712891;
    this.markers = [{
      lat: 52.5159,
      lng: 13.3777,
      label: 'A',
      draggable: true
    }, {
      lat: 52.5159,
      lng: 13.3730,
      label: 'B',
      draggable: true
    }, {
      lat: 52.5059,
      lng: 13.3771,
      label: 'C',
      draggable: true
    }];
  }
  mapClicked(e) {}
  ngOnInit() {}
  markerDragEnd(m, $event) {}
  static #_ = this.ɵfac = function GoogleComponent_Factory(t) {
    return new (t || GoogleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GoogleComponent,
    selectors: [["app-google"]],
    decls: 21,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"]],
    template: function GoogleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBzL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4XHJcbn0iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89506:
/*!**************************************************************!*\
  !*** ./src/app/components/maps/leaflet/leaflet.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeafletComponent: () => (/* binding */ LeafletComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 50658);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 74048);



class LeafletComponent {
  constructor(http) {
    this.http = http;
    //Basic Map
    this.options1 = {
      layers: [leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })],
      zoom: 5,
      center: leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng(20.5937, 78.9629)
    };
    //Popup map
    this.options2 = {
      layers: [leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.circleMarker([20.5937, 78.9629]).bindPopup("<b>Hello world!<\/b><br />I am a popup.").openPopup()],
      zoom: 5,
      center: leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng(20.5937, 78.9629)
    };
    //Circle map
    this.options3 = {
      layers: [leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([20.5937, 78.9629], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      })],
      zoom: 5,
      center: leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng(20.5937, 78.9629)
    };
  }
  onMapReady(map) {
    this.http.get("assets/maps/leafletmap.json").subscribe(json => {
      console.log(json);
      this.json = json;
      leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(this.json).addTo(map);
    });
  }
  // markerIcon = {
  //   icon: L.icon({
  //     iconSize: [25, 41],
  //     iconAnchor: [10, 41],
  //     popupAnchor: [2, -40],
  //     // specify the path here
  //     iconUrl: "assets/img/marker-icon.png",
  //     shadowUrl: "assets/img/marker-shadow.png"
  //   })
  // };
  ngOnInit() {}
  static #_ = this.ɵfac = function LeafletComponent_Factory(t) {
    return new (t || LeafletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeafletComponent,
    selectors: [["app-leaflet"]],
    decls: 47,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12"], ["id", "map1", 1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "col-lg-6"], [1, "card", "custom-card"]],
    template: function LeafletComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Leaflet Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Leaflet Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Basic Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Ease the build of pretty data visualizations on dynamic maps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13)(31, "div", 19)(32, "div", 20)(33, "div", 16)(34, "div")(35, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Leaflet Map With Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Ease the build of pretty data visualizations on dynamic maps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 20)(41, "div", 16)(42, "div")(43, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Leaflet Map With Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Ease the build of pretty data visualizations on dynamic maps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: [".leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive {\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBzL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvbWFwcy9sZWFmbGV0L2xlYWZsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNEUiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcclxuICAgIC5sZWFmbGV0LW1hcmtlci1pY29uLmxlYWZsZXQtem9vbS1hbmltYXRlZC5sZWFmbGV0LWludGVyYWN0aXZle1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL21hcmtlci1pY29uLnBuZyk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxufSIsIjo6bmctZGVlcCAubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LXpvb20tYW5pbWF0ZWQubGVhZmxldC1pbnRlcmFjdGl2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36916:
/*!********************************************************!*\
  !*** ./src/app/components/maps/maps-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapsRoutingModule: () => (/* binding */ MapsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google/google.component */ 71485);
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet/leaflet.component */ 89506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





const routes = [{
  path: '',
  children: [{
    path: 'google',
    component: _google_google_component__WEBPACK_IMPORTED_MODULE_0__.GoogleComponent
  }, {
    path: 'leaflet',
    component: _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_1__.LeafletComponent
  }]
}];
class MapsRoutingModule {
  static #_ = this.ɵfac = function MapsRoutingModule_Factory(t) {
    return new (t || MapsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MapsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 47190:
/*!************************************************!*\
  !*** ./src/app/components/maps/maps.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapsModule: () => (/* binding */ MapsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet/leaflet.component */ 89506);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google/google.component */ 71485);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-routing.module */ 36916);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);







// import { AgmCoreModule } from '@agm/core';
class MapsModule {
  static #_ = this.ɵfac = function MapsModule_Factory(t) {
    return new (t || MapsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: MapsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _maps_routing_module__WEBPACK_IMPORTED_MODULE_2__.MapsRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MapsModule, {
    declarations: [_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_0__.LeafletComponent, _google_google_component__WEBPACK_IMPORTED_MODULE_1__.GoogleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _maps_routing_module__WEBPACK_IMPORTED_MODULE_2__.MapsRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_maps_maps_module_ts.js.map