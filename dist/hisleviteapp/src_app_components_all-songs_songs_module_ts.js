"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_all-songs_songs_module_ts"],{

/***/ 36688:
/*!**************************************************************!*\
  !*** ./src/app/components/all-songs/songs-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongsRoutingModule: () => (/* binding */ SongsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs/songs.component */ 37267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);

// import { RemindersComponent } from './reminders/reminders.component';



// import { AdminAccessComponent } from './admin-access/admin-access.component';
const routes = [{
  path: '',
  children: [{
    path: 'songs',
    component: _songs_songs_component__WEBPACK_IMPORTED_MODULE_0__.SongComponent
  }]
}];
class SongsRoutingModule {
  static #_ = this.ɵfac = function SongsRoutingModule_Factory(t) {
    return new (t || SongsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SongsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SongsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 12779:
/*!******************************************************!*\
  !*** ./src/app/components/all-songs/songs.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongsModule: () => (/* binding */ SongsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _songs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs-routing.module */ 36688);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs/songs.component */ 37267);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quill */ 86882);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);





// import { LeafletModule } from '@asymmetrik/ngx-leaflet';












// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";
class SongsModule {
  static #_ = this.ɵfac = function SongsModule_Factory(t) {
    return new (t || SongsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SongsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__.LeafletModule, _songs_routing_module__WEBPACK_IMPORTED_MODULE_0__.SongsRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__.NgCircleProgressModule.forRoot(), ngx_quill__WEBPACK_IMPORTED_MODULE_14__.QuillModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SongsModule, {
    declarations: [_songs_songs_component__WEBPACK_IMPORTED_MODULE_2__.SongComponent],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__.LeafletModule, _songs_routing_module__WEBPACK_IMPORTED_MODULE_0__.SongsRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__.NgCircleProgressModule, ngx_quill__WEBPACK_IMPORTED_MODULE_14__.QuillModule]
  });
})();

/***/ }),

/***/ 37267:
/*!***************************************************************!*\
  !*** ./src/app/components/all-songs/songs/songs.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongComponent: () => (/* binding */ SongComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/path.service */ 26537);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ 86882);













function SongComponent_tr_57_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SongComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 34)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_tr_57_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const data_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](63);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.openLyricsModal(data_r9, _r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "View Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, SongComponent_tr_57_span_15_Template, 3, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r9.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", data_r9.lyricslink, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", data_r9.link, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r9.status);
  }
}
function SongComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Prev");
  }
}
function SongComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Next");
  }
}
function SongComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Lyrics Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_62_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Song Lyrics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 47)(10, "quill-editor", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SongComponent_ng_template_62_Template_quill_editor_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.lyricsData = $event);
    })("onContentChanged", function SongComponent_ng_template_62_Template_quill_editor_onContentChanged_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.logChange($event, "content"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 49)(12, "span", 50)(13, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "option", 52)(15, "option", 53)(16, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "option", 56)(19, "option", 52)(20, "option", 57)(21, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "button", 59)(24, "button", 60)(25, "button", 61)(26, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "select", 63)(29, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "button", 65)(32, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "option", 52)(35, "option", 68)(36, "option", 69)(37, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "button", 71)(40, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 73)(42, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_62_Template_button_click_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r13.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.lyricsData);
  }
}
function SongComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_64_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r19.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 75)(10, "div", 76)(11, "app-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function SongComponent_ng_template_64_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.newUser.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 76)(13, "app-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function SongComponent_ng_template_64_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.newUser.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 76)(15, "app-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function SongComponent_ng_template_64_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.newUser.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 76)(17, "app-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function SongComponent_ng_template_64_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 76)(19, "app-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function SongComponent_ng_template_64_Template_app_input_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.newUser.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Admin Register New User account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 73)(23, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_64_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r19.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "firstname")("value", ctx_r6.newUser.firstName)("placeholder", "Enter First Name")("inputModel", ctx_r6.newUser.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r6.newUser.lastName)("placeholder", "Enter Last Name")("inputModel", ctx_r6.newUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r6.newUser.email)("placeholder", "Enter Username")("inputModel", ctx_r6.newUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r6.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r6.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "phone")("id", "phone")("value", ctx_r6.newUser.phone)("placeholder", "Enter Phone Number")("inputModel", ctx_r6.newUser.phone);
  }
}
function SongComponent_ng_template_66_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 34)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td")(4, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SongComponent_ng_template_66_tr_22_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const data_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r30.value.read = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SongComponent_ng_template_66_tr_22_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const data_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r30.value.write = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SongComponent_ng_template_66_tr_22_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const data_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r30.value.execute = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_66_tr_22_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const data_r30 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.save(data_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r30.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r30.value.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r30.value.write);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r30.value.execute);
  }
}
function SongComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SongComponent_ng_template_66_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      const modal_r28 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r28.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46)(7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Assign Privilege to this user. Please, be sure you aware of the consequence of this before you proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 24)(10, "table", 25)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Privilege");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Write");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, SongComponent_ng_template_66_tr_22_Template, 12, 4, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.controls);
  }
}
class SongComponent {
  constructor(modalService, authService, userService, pathService, requestService, songService, toastr) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.pathService = pathService;
    this.requestService = requestService;
    this.songService = songService;
    this.toastr = toastr;
    this.users = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.songs = [];
    this.lyricsData = '';
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.searchTerm = '';
    this.filteredSongs = [];
    this.filteredSongs = this.songs;
  }
  search() {
    this.filteredSongs = this.songs.filter(song => song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || song.intro.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  ngOnInit() {
    // this.load()
    this.gitAllUserSongs();
  }
  save(data) {
    let $this = this;
    let payload = {};
    payload.data = data;
    payload.user_id = this.selected_user;
    console.log("Checker0--->>>", payload);
    this.requestService._post(this.pathService.LIST_PRIVILEGES, payload, function (result, status) {
      if (status) {
        $this.toastr.success("Privilege successfully added");
        return;
      }
      $this.toastr.error("Privilege failed to add");
    });
  }
  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }
  // load() {
  //   let $this = this
  //   this.userService.all(function (result, status) {
  //     if (status) {
  //       $this.users = result
  //     }
  //   })
  // }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onEdit(data, priviledgeModel) {
    this.modalService.open(priviledgeModel);
    let $this = this;
    this.selected_user = data.id;
    this.requestService._get(this.pathService.LIST_PRIVILEGES + '/' + this.selected_user, function (result, status) {
      let access = $this.authService.parseAccess(result);
      // $this.setControl(access);
    });
  }

  openLyricsModal(data, selectLyricsmodal) {
    console.log(data, 'info');
    // if (lyrics) {
    this.lyricsData = data.lyrics;
    this.modalService.open(selectLyricsmodal, {
      size: 'lg'
    });
  }
  gitAllUserSongs() {
    this.songService.getAllMinistriesSongs().subscribe(data => {
      const songs = data.allSongs.map(songObj => songObj.songs);
      this.songs = songs;
      this.filteredSongs = this.songs;
      console.log(this.filteredSongs, 'let see');
      // this.songs = data.allSongs; // Adjust if response structure is different
      // console.log(this.songs, ); // Process songs data here
      console.log(data.allSongs, 'see how e goes');
    }, error => {
      console.error('Error fetching songs:', error);
      // Handle error here
    });
  }
  static #_ = this.ɵfac = function SongComponent_Factory(t) {
    return new (t || SongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__.PathService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SongComponent,
    selectors: [["app-access"]],
    inputs: {
      lyricsData: "lyricsData"
    },
    decls: 68,
    vars: 6,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "d-flex"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search songs", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", 1, "btn", "bg-orange-color"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["selectLyricsmodal", ""], ["select2modal", ""], ["privilegeModel", ""], [1, "border-bottom"], [1, "custom-button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "fa", "fa-eye"], [1, "text-center"], ["class", "label text-success d-flex", 4, "ngIf"], [1, "label", "text-success", "d-flex"], [1, "dot-label", "bg-success", "mr-1", 2, "margin-top", "6px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "", 2, "background", "white", "padding", "30px"], [3, "ngModel", "ngModelChange", "onContentChanged"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], ["type", "button", 1, "btn", "ripple", "btn-primary"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
    template: function SongComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "All Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div")(15, "div", 10)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "All Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "select", 16)(25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 17)(36, "div", 18)(37, "div", 19)(38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SongComponent_Template_input_ngModelChange_38_listener($event) {
          return ctx.searchTerm = $event;
        })("keyup", function SongComponent_Template_input_keyup_38_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 24)(43, "table", 25)(44, "thead")(45, "tr")(46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "lyrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "lyrics link");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, SongComponent_tr_57_Template, 16, 5, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 27)(59, "ngb-pagination", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function SongComponent_Template_ngb_pagination_pageChange_59_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, SongComponent_ng_template_60_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, SongComponent_ng_template_61_Template, 1, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, SongComponent_ng_template_62_Template, 44, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, SongComponent_ng_template_64_Template, 27, 35, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, SongComponent_ng_template_66_Template, 23, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredSongs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx.users.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, ngx_quill__WEBPACK_IMPORTED_MODULE_12__.QuillEditorComponent],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n\n  border: none;\n  color: white;\n  padding: 8px 14px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition-duration: 0.4s;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbGwtc29uZ3Mvc29uZ3Mvc29uZ3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2FsbC1zb25ncy9zb25ncy9zb25ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREtJOztFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7QUNGUjtBREtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUk7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0pSO0FET0k7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDTFI7QURRSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ05SO0FEU0k7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7QUNQUjtBRFVJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ1JSO0FEV0k7RUFDSSxzQkFBQTtBQ1RSO0FEWUk7RUFDSSxhQUFBO0FDVlI7QURhSTs7RUFFSSxZQUFBO0FDWFI7O0FEZ0JBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNiSjs7QURnQkE7RUFDSSxvQ0FBQTtBQ2JKIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCB7XHJcblxyXG4gICAgZHAtZGF0ZS1waWNrZXIsXHJcbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzNiNDg2MztcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XHJcbiAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG5cclxuLmJnLW9yYW5nZS1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3YTJkICFpbXBvcnRhbnQ7XHJcbn0iLCIub3B0aW9uLWRvdHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlcixcbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYThhZmM3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzYjQ4NjM7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XG4gIGNvbG9yOiAjM2I0ODYzICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyIC5kcC1jYWxlbmRhci1kYXkge1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgLyogR3JlZW4gKi9cbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5iZy1vcmFuZ2UtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3YTJkICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11811:
/*!**********************************************!*\
  !*** ./src/app/shared/models/auth.models.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Profile: () => (/* binding */ Profile),
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   UserList: () => (/* binding */ UserList),
/* harmony export */   UserPayload: () => (/* binding */ UserPayload),
/* harmony export */   UserRecord: () => (/* binding */ UserRecord)
/* harmony export */ });
class User {}
class UserList {}
class UserPayload {}
class UserRecord {
  constructor() {
    this.availability = [];
    this.assigned = [];
    this.document = [];
    this.profile = new Profile();
  }
}
class Profile {}

/***/ }),

/***/ 55613:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/users/user.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class UserService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(callback) {
    this.get(`user/list`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  availability(callback) {
    this.get(`fetch/job/availability/list/all`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  send(target, options, callback) {
    this.post(`auth/admin/${target}`, options).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  delete(id, callback) {
    this.get(`auth/admin/delete/${id}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵUserService_BaseFactory;
    return function UserService_Factory(t) {
      return (ɵUserService_BaseFactory || (ɵUserService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UserService)))(t || UserService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48451:
/*!******************************************************!*\
  !*** ./src/app/shared/services/web/songs.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongService: () => (/* binding */ SongService)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 74048);



class SongService {
  constructor(http) {
    this.http = http;
  }
  deleteSong(ministryId, songId) {
    const deleteUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/delete/${ministryId}/songs/${songId}`;
    return this.http.delete(deleteUrl);
  }
  deleteMinistry(ministryId) {
    const deleteUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/${ministryId}`;
    return this.http.delete(deleteUrl);
  }
  createSong(ministryId, body) {
    const createUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/${ministryId}/songs`;
    return this.http.post(createUrl, body);
  }
  updateSong(ministryId, body, songId) {
    const updateUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/update/${ministryId}/songs/${songId}`;
    return this.http.put(updateUrl, body);
  }
  allMin() {
    const getAllUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/get/all-ministries`;
    return this.http.get(getAllUrl, {});
  }
  makeAdmin(userId) {
    const updateUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/make-admin/${userId}`;
    return this.http.patch(updateUrl, {
      makeAdmin: true
    });
  }
  deleteAdmin(userId) {
    const removeUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/remove-admin/${userId}`;
    return this.http.delete(removeUrl);
  }
  getAllMinistriesSongs() {
    const getAllUserUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/all-ministries-songs`;
    return this.http.get(getAllUserUrl);
  }
  getAllMinistration() {
    const getAllMinsUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/allMinistriesWithSongsAndBackup`;
    return this.http.get(getAllMinsUrl);
  }
  getSongsBackup(ministryId) {
    const getAlSongsbackuUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/${ministryId}/songs-backup`;
    return this.http.get(getAlSongsbackuUrl);
  }
  existingSong(ministryId, songId) {
    const url = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/add-existing/${ministryId}/songs/${songId}`;
    return this.http.post(url, {});
  }
  static #_ = this.ɵfac = function SongService_Factory(t) {
    return new (t || SongService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SongService,
    factory: SongService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_all-songs_songs_module_ts.js.map