"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_reviews_reviews_module_ts"],{

/***/ 79955:
/*!**************************************************************!*\
  !*** ./src/app/components/reviews/reviews-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsRoutingModule: () => (/* binding */ ReviewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews/reviews.component */ 59784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent
  }, {
    path: 'performance',
    component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent
  }]
}];
class ReviewsRoutingModule {
  static #_ = this.ɵfac = function ReviewsRoutingModule_Factory(t) {
    return new (t || ReviewsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReviewsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReviewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85382:
/*!******************************************************!*\
  !*** ./src/app/components/reviews/reviews.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsModule: () => (/* binding */ ReviewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews-routing.module */ 79955);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews/reviews.component */ 59784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);














class ReviewsModule {
  static #_ = this.ɵfac = function ReviewsModule_Factory(t) {
    return new (t || ReviewsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ReviewsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReviewsModule, {
    declarations: [_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__.ReviewsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 59784:
/*!*****************************************************************!*\
  !*** ./src/app/components/reviews/reviews/reviews.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsComponent: () => (/* binding */ ReviewsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/job.model */ 33132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);











function ReviewsComponent_ng_template_87_ng_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", data_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r7.name, " ");
  }
}
function ReviewsComponent_ng_template_87_ng_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", data_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r9.name, " ");
  }
}
function ReviewsComponent_ng_template_87_ng_option_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", data_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r11.name, " ");
  }
}
function ReviewsComponent_ng_template_87_ng_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", data_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r13.name, " ");
  }
}
function ReviewsComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReviewsComponent_ng_template_87_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 43)(7, "div", 44)(8, "div", 45)(9, "div", 46)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Event Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ReviewsComponent_ng_template_87_Template_ng_select_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.onSelected($event, "job"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ReviewsComponent_ng_template_87_ng_option_13_Template, 2, 2, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 49)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Event Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.form.date = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 49)(19, "div", 46)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Senior Staff:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ReviewsComponent_ng_template_87_Template_ng_select_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onSelected($event, "user"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ReviewsComponent_ng_template_87_ng_option_23_Template, 2, 2, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 45)(25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Staff On Duty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 49)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " No. of Paramedics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.form.paramedics = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 49)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " No. of Technicians ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.form.technicians = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 45)(36, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Service Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 49)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Clock In Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.form.clock_in_time = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 49)(43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Stand Down Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.form.clock_out_time = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 51)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Number of Callouts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.form.callouts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 51)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Ear plugs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.form.ear_pugs = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 51)(55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " No of ambulances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.form.ambulances = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 45)(59, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Attendees");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 51)(62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Arena staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.form.arena_staff = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 51)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, " Catering staff ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.form.catering = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 51)(70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Event staff ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.form.event_staff = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 49)(74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " Competitor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.form.competitor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 49)(78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " Visitor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputModelChange", function ReviewsComponent_ng_template_87_Template_app_input_inputModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.form.visitor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 49)(82, "div", 46)(83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Use of O2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ReviewsComponent_ng_template_87_Template_ng_select_change_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onSelected($event, "o2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, ReviewsComponent_ng_template_87_ng_option_86_Template, 2, 2, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 49)(88, "div", 46)(89, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Use of Entonox:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ReviewsComponent_ng_template_87_Template_ng_select_change_91_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onSelected($event, "entonox"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, ReviewsComponent_ng_template_87_ng_option_92_Template, 2, 2, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 52)(94, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReviewsComponent_ng_template_87_Template_button_click_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Create Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReviewsComponent_ng_template_87_Template_button_click_96_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r2.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "datetime-local")("id", "name")("value", ctx_r1.form.date)("placeholder", "Date of Event")("inputModel", ctx_r1.form.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r1.number)("id", "name")("value", ctx_r1.form.paramedics)("placeholder", "0")("inputModel", ctx_r1.form.paramedics);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r1.number)("id", "name")("value", ctx_r1.form.technicians)("placeholder", "0")("inputModel", ctx_r1.form.technicians);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "datetime-local")("id", "name")("value", ctx_r1.form.clock_in_time)("placeholder", "Clock In Time")("inputModel", ctx_r1.form.clock_in_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "datetime-local")("id", "name")("value", ctx_r1.form.clock_out_time)("placeholder", "Clock Out Time")("inputModel", ctx_r1.form.clock_out_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.callouts)("placeholder", "0")("inputModel", ctx_r1.form.callouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r1.number)("id", "name")("value", ctx_r1.form.ear_pugs)("placeholder", "0")("inputModel", ctx_r1.form.ear_pugs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r1.number)("id", "name")("value", ctx_r1.form.ambulances)("placeholder", "0")("inputModel", ctx_r1.form.ambulances);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.arena_staff)("placeholder", "0")("inputModel", ctx_r1.form.arena_staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.catering)("placeholder", "0")("inputModel", ctx_r1.form.catering);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.event_staff)("placeholder", "0")("inputModel", ctx_r1.form.event_staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.competitor)("placeholder", "0")("inputModel", ctx_r1.form.competitor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "number")("id", "name")("value", ctx_r1.form.visitor)("placeholder", "0")("inputModel", ctx_r1.form.visitor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.levels);
  }
}
class ReviewsComponent {
  constructor(modalService, authService, userService) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.users = new Array();
    this.jobs = new Array();
    this.modalValue = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.reports = [];
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.form = new Form();
    this.newNessage = new src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__.JobAssignedPayload();
    this.levels = [{
      id: 0,
      name: "None"
    }, {
      id: 1,
      name: "Low"
    }, {
      id: 2,
      name: "Medium"
    }, {
      id: 3,
      name: "High"
    }];
    this.page = 1;
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
  }
  ngOnInit() {
    this.loadUsers();
    this.loadJobs();
    this.loadRecords();
  }
  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }
  loadUsers() {
    let $this = this;
    this.userService.all(function (result, status) {
      console.log(result, status);
      if (status) {
        $this.users = result;
      }
    });
  }
  loadJobs() {}
  loadRecords() {}
  onSubmit() {
    console.log(this.form);
    let $this = this;
    let options = this.form;
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onSelected($event, target) {
    switch (target) {
      case "user":
        this.form.senior_staff_id = $event;
        break;
      case "o2":
        this.form.use_of_o2 = $event;
        break;
      case "job":
        this.form.job_id = $event;
        break;
      case "entonox":
        this.form.use_of_entonox = $event;
        break;
    }
  }
  static #_ = this.ɵfac = function ReviewsComponent_Factory(t) {
    return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ReviewsComponent,
    selectors: [["app-reviews"]],
    decls: 89,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], [1, "border-bottom"], [1, "button-list"], ["href", "javascript:;", 1, "btn"], [1, "ti", "ti-files"], [1, "ti", "ti-pencil"], [1, "ti", "ti-trash"], [1, "mt-3"], ["select2modal", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], [1, "form-group"], [1, "form-control", "p-0", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "col-lg-4", "mt-4"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [3, "value"]],
    template: function ReviewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](88);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.Select2Open(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " New Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div")(23, "div", 6)(24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "All Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 21)(33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29)(51, "table", 30)(52, "thead")(53, "tr")(54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Remark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Visitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "tbody")(67, "tr", 31)(68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Gregor Project Outreach");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "David Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Excellent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Permanent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "td")(79, "div", 32)(80, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, ReviewsComponent_ng_template_87_Template, 98, 95, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _common_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSOztBREVJO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBQ0NSOztBREVJO0VBQ0kscUJBQUE7QUNDUjs7QURJUTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNGWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQ0ZaO0FESVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNGWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0FDRlo7QURJUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUNGWjtBREtRO0VBQ0ksc0JBQUE7QUNIWjtBREtRO0VBQ0ksYUFBQTtBQ0haO0FES1E7O0VBRUksWUFBQTtBQ0haIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4ICwgNDBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLFxyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYThhZmM3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNDg2MztcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcclxuICAgICAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIiwiLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIsXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2E4YWZjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjM2I0ODYzO1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xuICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class Form {}

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

/***/ })

}]);
//# sourceMappingURL=src_app_components_reviews_reviews_module_ts.js.map