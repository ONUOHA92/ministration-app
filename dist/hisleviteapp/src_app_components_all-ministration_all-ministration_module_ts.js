"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_all-ministration_all-ministration_module_ts"],{

/***/ 20832:
/*!************************************************************************!*\
  !*** ./src/app/components/all-ministration/all-ministration.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllMinistrationModule: () => (/* binding */ AllMinistrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _all_ministration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-ministration.component */ 35993);
/* harmony import */ var _all_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-minstration.routing.module */ 51363);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _elements_elements_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/elements.module */ 13918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);

// import { AllMinstrationRoutingModule } from './all-minstration.routing.module';



// import { LeafletModule } from '@asymmetrik/ngx-leaflet';












// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";
class AllMinistrationModule {
  static #_ = this.ɵfac = function AllMinistrationModule_Factory(t) {
    return new (t || AllMinistrationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AllMinistrationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _all_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__.AllMinRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _elements_elements_module__WEBPACK_IMPORTED_MODULE_3__.ElementsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AllMinistrationModule, {
    declarations: [_all_ministration_component__WEBPACK_IMPORTED_MODULE_1__.AllMinistrationComponent],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _all_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__.AllMinRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _elements_elements_module__WEBPACK_IMPORTED_MODULE_3__.ElementsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 51363:
/*!*******************************************************************************!*\
  !*** ./src/app/components/all-ministration/all-minstration.routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllMinRoutingModule: () => (/* binding */ AllMinRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _all_ministration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-ministration.component */ 35993);
/* harmony import */ var _editor_mineditor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/mineditor.component */ 57071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





const routes = [{
  path: '',
  children: [{
    path: 'list',
    component: _all_ministration_component__WEBPACK_IMPORTED_MODULE_0__.AllMinistrationComponent
  }, {
    path: ':index/ministration',
    component: _editor_mineditor_component__WEBPACK_IMPORTED_MODULE_1__.MinEditorComponent
  }]
}];
class AllMinRoutingModule {
  static #_ = this.ɵfac = function AllMinRoutingModule_Factory(t) {
    return new (t || AllMinRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AllMinRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AllMinRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_all-ministration_all-ministration_module_ts.js.map