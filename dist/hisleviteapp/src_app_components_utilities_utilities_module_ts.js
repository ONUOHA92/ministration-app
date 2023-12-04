"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_utilities_utilities_module_ts"],{

/***/ 76038:
/*!*************************************************************************!*\
  !*** ./src/app/components/utilities/background/background.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundComponent: () => (/* binding */ BackgroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


class BackgroundComponent {
  constructor() {
    this.isClosed = false;
    this.isClosed1 = false;
  }
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  successToggle() {
    this.isClosed = true;
  }
  dangerToggle() {
    this.isClosed1 = true;
  }
  static #_ = this.ɵfac = function BackgroundComponent_Factory(t) {
    return new (t || BackgroundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackgroundComponent,
    selectors: [["app-background"]],
    decls: 307,
    vars: 4,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "graybg", 1, "card", "custom-card"], ["graybg", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "gray-set"], [1, "flex-1", "bg-gray-100", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-200", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-300", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-400", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-500", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-600", "ht-100p", "p-3"], [1, "flex-1", "bg-gray-700", "ht-100p", "p-3", "tx-white-7"], [1, "flex-1", "bg-gray-800", "ht-100p", "p-3", "tx-white-7"], [1, "flex-1", "bg-gray-900", "ht-100p", "p-3", "tx-white-7"], [1, "card-footer", "p-4"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "wd-40p"], [1, "wd-60p"], ["id", "solidbg", 1, "card", "custom-card"], ["solidbg", ""], [1, ""], [1, "flex-1", "bg-primary", "p-3", "tx-white"], [1, "flex-1", "bg-secondary", "p-3", "tx-white"], [1, "flex-1", "bg-success", "p-3", "tx-white"], [1, "flex-1", "bg-warning", "p-3", "tx-white"], [1, "flex-1", "bg-danger", "p-3", "tx-white"], [1, "flex-1", "bg-info", "p-3", "tx-white"], [1, "flex-1", "bg-purple", "p-3", "tx-white"], [1, "flex-1", "bg-pink", "p-3", "tx-white"], [1, "flex-1", "bg-teal", "p-3", "tx-white"], ["id", "whitebg", 1, "card", "custom-card"], ["whitebg", ""], [1, "d-flex", "flex-wrap", "ht-50", "mb-lg-5"], [1, "flex-1", "pos-relative"], ["alt", "", "src", "../../assets/img/media/7.jpg", 1, "wd-100p", "ht-100p", "object-fit-cover"], [1, "pos-absolute", "a-0", "bg-white-1"], [1, "pos-absolute", "a-0", "bg-white-2"], [1, "pos-absolute", "a-0", "bg-white-3"], [1, "pos-absolute", "a-0", "bg-white-4"], [1, "pos-absolute", "a-0", "bg-white-5"], [1, "pos-absolute", "a-0", "bg-white-6"], [1, "pos-absolute", "a-0", "bg-white-7"], [1, "pos-absolute", "a-0", "bg-white-8"], [1, "pos-absolute", "a-0", "bg-white-9"], ["id", "blackbg", 1, "card", "custom-card"], ["blackbg", ""], [1, "pos-absolute", "a-0", "bg-black-1"], [1, "pos-absolute", "a-0", "bg-black-2"], [1, "pos-absolute", "a-0", "bg-black-3"], [1, "pos-absolute", "a-0", "bg-black-4"], [1, "pos-absolute", "a-0", "bg-black-5"], [1, "pos-absolute", "a-0", "bg-black-6"], [1, "pos-absolute", "a-0", "bg-black-7"], [1, "pos-absolute", "a-0", "bg-black-8"], [1, "pos-absolute", "a-0", "bg-black-9"], ["id", "colortrans", 1, "card", "custom-card"], ["colortrans", ""], [1, "pos-absolute", "a-0", "bg-white-transparent"], [1, "pos-absolute", "a-0", "bg-dark-transparent"], [1, "pos-absolute", "a-0", "bg-primary-transparent"], [1, "pos-absolute", "a-0", "bg-secondary-transparent"], [1, "pos-absolute", "a-0", "bg-success-transparent"], [1, "pos-absolute", "a-0", "bg-info-transparent"], [1, "pos-absolute", "a-0", "bg-warning-transparent"], [1, "pos-absolute", "a-0", "bg-danger-transparent"], [1, "pos-absolute", "a-0", "bg-pink-transparent"], [1, "pos-absolute", "a-0", "bg-purple-transparent"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card", "custom-card", 3, "ngbCollapse", "ngbCollapseChange"], [1, "alert", "text-center", "fade", "show", "p-3"], ["type", "button", "data-dismiss", "alert", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "fe", "fe-upload-cloud", "fs-50", "text-success"], [1, "mt-2", "mb-1"], [1, "mb-3", "mb-3", "tx-inverse"], ["href", "javascript:;", 1, "btn", "ripple", "btn-success"], [1, "fe", "fe-download-cloud", "fs-50", "text-danger"], ["href", "javascript:;", 1, "btn", "ripple", "btn-danger"]],
    template: function BackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Background");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gray Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "A set of gray background utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".bg-gray-100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ".bg-gray-200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".bg-gray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".bg-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".bg-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".bg-gray-600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".bg-gray-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".bg-gray-800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".bg-gray-900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30)(51, "div", 31)(52, "table", 32)(53, "thead")(54, "tr")(55, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Class Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody")(60, "tr")(61, "td")(62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "class=\"bg-gray-[value]\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35, 36)(68, "div", 17)(69, "div")(70, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Solid Background Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " set of solid background utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37)(75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".bg-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".bg-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".bg-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".bg-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".bg-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".bg-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".bg-purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".bg-pink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ".bg-teal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 30)(94, "div", 31)(95, "table", 32)(96, "thead")(97, "tr")(98, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Class Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tbody")(103, "tr")(104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "class=\"bg-[value]\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "primary | secondary | success | warning | danger | info | indigo | purple | pink | teal | orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47, 48)(111, "div", 17)(112, "div")(113, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Transparent White Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "A set of overlay transparent white background utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49)(118, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 51)(120, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 51)(123, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 51)(126, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 51)(129, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 51)(132, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 51)(135, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 51)(138, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 51)(141, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 51)(144, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 30)(146, "div", 31)(147, "table", 32)(148, "thead")(149, "tr")(150, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Class Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tbody")(155, "tr")(156, "td")(157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "class=\"bg-white-[value]\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 61, 62)(163, "div", 17)(164, "div")(165, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Transparent Black Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "A set of overlay transparent black background utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 49)(170, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 51)(172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 51)(175, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 51)(178, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 51)(181, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 51)(184, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 51)(187, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 51)(190, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 51)(193, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 51)(196, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 30)(198, "div", 31)(199, "table", 32)(200, "thead")(201, "tr")(202, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Class Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "tbody")(207, "tr")(208, "td")(209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "class=\"bg-black-[value]\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 72, 73)(215, "div", 17)(216, "div")(217, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Transparent Colors Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "A set of overlay transparent colors background utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 49)(222, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 51)(224, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 51)(227, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 51)(230, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 51)(233, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 51)(236, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 51)(239, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 51)(242, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 51)(245, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "img", 51)(248, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 51)(251, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 30)(253, "div", 31)(254, "table", 32)(255, "thead")(256, "tr")(257, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Class Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "tbody")(262, "tr")(263, "td")(264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "class=\"bg-[value]-transparent\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "light | dark | primary | secondary | success | info | warning | danger | pink | purple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 84)(269, "div", 85)(270, "div", 86)(271, "div", 87)(272, "nav", 88)(273, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_a_click_273_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Gray Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_a_click_275_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Solid Background Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_a_click_277_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Transparent White Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_a_click_279_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](162);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Transparent Black Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_a_click_281_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](214);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r4));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Transparent Colors Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function BackgroundComponent_Template_div_ngbCollapseChange_283_listener($event) {
          return ctx.isClosed = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 91)(285, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_button_click_285_listener() {
          return ctx.successToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h5", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Success !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Data Upload Successfully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function BackgroundComponent_Template_div_ngbCollapseChange_295_listener($event) {
          return ctx.isClosed1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 91)(297, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackgroundComponent_Template_button_click_297_listener() {
          return ctx.dangerToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h5", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Something went wrong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isClosed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isClosed1);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapse],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 38955:
/*!*****************************************************************!*\
  !*** ./src/app/components/utilities/border/border.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderComponent: () => (/* binding */ BorderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class BorderComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function BorderComponent_Factory(t) {
    return new (t || BorderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BorderComponent,
    selectors: [["app-border"]],
    decls: 377,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "brset", 1, "card", "custom-card"], ["brset", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "col-md-6", "col-xl-4", "col-md-4"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2"], [1, "p-3", "p-3", "bg-gray-100", "bd-l", "bd-2", "mt-4", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd-t", "bd-2"], [1, "p-3", "p-3", "bg-gray-100", "bd-y", "bd-2", "mt-4", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd-r", "bd-2"], [1, "p-3", "p-3", "bg-gray-100", "bd-x", "bd-2", "mt-4", "mb-4", "mb-xl-0"], [1, "col-md-6", "col-xl-4", "col-md-4", "mt-4"], [1, "p-3", "p-3", "bg-gray-100", "bd-b", "bd-2", "mb-0"], [1, "card-footer"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "wd-30p"], [1, "wd-70p"], [1, "pd-0", "bg-transparent"], ["id", "brsizes", 1, "card", "custom-card"], ["brsizes", ""], [1, "col-md-6", "col-xl-3", "col-md-4"], [1, "p-3", "p-3", "bg-gray-100", "bd", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-3", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-4", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-5"], ["id", "brremove", 1, "card", "custom-card"], ["brremove", ""], [1, "col-md-6", "col-xl-4", "col-md-4", "mb-4"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-t-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-r-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-b-0"], [1, "col-md-6", "col-xl-4", "col-md-4", "mb-4", "mb-xl-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-l-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-x-0"], [1, "p-3", "p-3", "bg-gray-100", "bd", "bd-2", "bd-y-0"], ["id", "brcolor", 1, "card", "custom-card"], ["brcolor", ""], [1, "p-3", "p-3", "bd", "bd-2", "bd-primary"], [1, "p-3", "p-3", "bd", "bd-2", "bd-success"], [1, "p-3", "p-3", "bd", "bd-2", "bd-warning"], [1, "p-3", "p-3", "bd", "bd-2", "bd-danger"], [1, "p-3", "p-3", "bd", "bd-2", "bd-info"], [1, "p-3", "p-3", "bd", "bd-2", "bd-gray-500"], ["id", "brradius", 1, "card", "custom-card"], ["brradius", ""], [1, "d-md-flex"], [1, "wd-60", "mt-md-0", "ht-60", "mg-l-10", "bd", "rounded"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-5"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-10"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-20"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-30"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-top"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-right"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-bottom"], [1, "wd-80", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-left"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-circle"], [1, "wd-60", "mt-md-0", "mt-4", "ht-60", "mg-l-10", "bd", "rounded-0"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-body", "text-center"], [1, "icon-service", "bg-primary-transparent", "rounded-circle", "text-primary"], [1, "fe", "fe-user"], [1, "mb-1", "text-muted"], [1, "mb-0"], [1, "icon-service", "bg-secondary-transparent", "rounded-circle", "text-secondary"], [1, "fe", "fe-trending-up"], [1, "icon-service", "bg-info-transparent", "rounded-circle", "text-info"], [1, "fe", "fe-dollar-sign"]],
    template: function BorderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Border");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The following border utilities classes will add border to any side of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "div", 20)(33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".border-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20)(38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".border-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".border-top & .border-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20)(43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".border-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".border-left & .border-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27)(48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".border-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29)(51, "div", 30)(52, "table", 31)(53, "thead")(54, "tr")(55, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody")(60, "tr")(61, "td")(62, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "class=\"bd\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Add border in all sides of an element using default color and width.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr")(67, "td")(68, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "class=\"bd-t\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Add border to top side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr")(73, "td")(74, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "class=\"bd-r\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Add border to right side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr")(79, "td")(80, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "class=\"bd-b\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Add border to bottom side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr")(85, "td")(86, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "class=\"bd-l\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Add border to left side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr")(91, "td")(92, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "class=\"bd-x\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Add border to left and right side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr")(97, "td")(98, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "class=\"bd-y\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Add border to top and bottom side of element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 35, 36)(104, "div", 17)(105, "div")(106, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Border Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Below are the available border size utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13)(111, "div", 37)(112, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 37)(115, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37)(118, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 37)(121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37)(124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 29)(127, "div", 30)(128, "table", 31)(129, "thead")(130, "tr")(131, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody")(136, "tr")(137, "td")(138, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "class=\"bd\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Set 1px (default) border to element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr")(143, "td")(144, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "class=\"bd bd-2\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Set 2px border to element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr")(149, "td")(150, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "class=\"bd bd-3\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Set 3px border to element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr")(155, "td")(156, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "class=\"bd bd-4\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Set 4px border to element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "class=\"bd bd-5\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Set 5px border to element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43, 44)(168, "div", 17)(169, "div")(170, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Remove Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "You can remove a border to a single side of an element by using the following border utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 13)(175, "div", 45)(176, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 45)(179, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 45)(182, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 49)(185, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 49)(188, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 20)(191, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 29)(194, "div", 30)(195, "table", 31)(196, "thead")(197, "tr")(198, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tbody")(203, "tr")(204, "td")(205, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, ".bd-t-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Remove top border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr")(210, "td")(211, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ".bd-r-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Remove right border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tr")(216, "td")(217, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, ".bd-b-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Remove bottom border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "tr")(222, "td")(223, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".bd-l-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Remove left border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr")(228, "td")(229, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, ".bd-x-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Remove left and right border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr")(234, "td")(235, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, ".bd-y-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Remove top and bottom border of an element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr")(240, "td")(241, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, ".bd-[t||r|bl|x|y]-0-f");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Force remove border of any side of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 53, 54)(247, "div", 17)(248, "div")(249, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Border Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "You can set a border color of any side of an element by adding the following utilities classes below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 13)(254, "div", 45)(255, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 45)(258, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 45)(261, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 45)(264, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 45)(267, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 45)(270, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, ".border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 29)(273, "div", 30)(274, "table", 31)(275, "thead")(276, "tr")(277, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "tbody")(282, "tr")(283, "td")(284, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, ".bd-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "primary | success | warning | danger | info | indigo | purple | pink | teal | orange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "tr")(289, "td")(290, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, ".bd-gray-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 61, 62)(296, "div", 17)(297, "div")(298, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "You can set a border to any element by using the following utilities classes below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "div", 64)(304, "div", 65)(305, "div", 66)(306, "div", 67)(307, "div", 68)(308, "div", 69)(309, "div", 70)(310, "div", 71)(311, "div", 72)(312, "div", 73)(313, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 29)(315, "div", 30)(316, "table", 31)(317, "thead")(318, "tr")(319, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Description / Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "tbody")(324, "tr")(325, "td")(326, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, ".rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Set a border radius of 2px (default) to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr")(331, "td")(332, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, ".rounded-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "5 | 10 | 20 | 30 | 40 | 50 | circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 75)(337, "div", 76)(338, "div", 77)(339, "div", 78)(340, "nav", 79)(341, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BorderComponent_Template_a_click_341_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Set Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BorderComponent_Template_a_click_343_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Border Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BorderComponent_Template_a_click_345_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Remove Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BorderComponent_Template_a_click_347_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](246);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Border Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BorderComponent_Template_a_click_349_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](295);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r4));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Border Radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 77)(352, "div", 81)(353, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "34,789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 77)(360, "div", 81)(361, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "98,674");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 77)(368, "div", 81)(369, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Total Profits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "h3", 85)(374, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "45,078");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 27690:
/*!*******************************************************************!*\
  !*** ./src/app/components/utilities/display/display.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayComponent: () => (/* binding */ DisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class DisplayComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function DisplayComponent_Factory(t) {
    return new (t || DisplayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DisplayComponent,
    selectors: [["app-display"]],
    decls: 184,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "basic", 1, "card", "custom-card"], ["basic", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "wd-30p"], [1, "wd-70p"], ["id", "hiding", 1, "card", "custom-card"], ["hiding", ""], [1, "wd-40p"], [1, "wd-60p"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-body", "user-card", "text-center"], [1, "main-img-user", "avatar-lg", "online", "text-center"], ["alt", "avatar", "src", "../../assets/img/users/5.jpg", 1, "rounded-circle"], [1, "mt-2"], [1, "mb-1"], [1, "mb-1", "tx-inverse"], [1, "text-muted"], [1, "far", "fa-check-circle", "text-success", "mr-1"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "btn-sm", "mt-3"], ["alt", "avatar", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "btn-sm", "mt-3"]],
    template: function DisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Display");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Basic Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The following display utilities classes will set display property of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20)(32, "table", 21)(33, "thead")(34, "tr")(35, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody")(40, "tr")(41, "td")(42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".d-inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Set an inline display property of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr")(47, "td")(48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".d-inline-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Set an inline-block display property of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr")(53, "td")(54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".d-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Set a block display property of an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24, 25)(60, "div", 17)(61, "div")(62, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Hiding Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20)(67, "table", 21)(68, "thead")(69, "tr")(70, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Screen Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody")(75, "tr")(76, "td")(77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Hidden on all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr")(82, "td")(83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".d-none .d-sm-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Hidden only on xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr")(88, "td")(89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".d-sm-none .d-md-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Hidden only on sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr")(94, "td")(95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".d-md-none .d-lg-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Hidden only on md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr")(100, "td")(101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ".d-lg-none .d-xl-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Hidden only on lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr")(106, "td")(107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".d-xl-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Hidden only on xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr")(112, "td")(113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ".d-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Visible on all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr")(118, "td")(119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ".d-block .d-sm-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Visible only on xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr")(124, "td")(125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, ".d-none .d-sm-block .d-md-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Visible only on sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr")(130, "td")(131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, ".d-none .d-md-block .d-lg-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Visible only on md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr")(136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".d-none .d-lg-block .d-xl-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Visible only on lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr")(142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, ".d-none .d-xl-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Visible only on xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 28)(148, "div", 29)(149, "div", 30)(150, "div", 31)(151, "nav", 32)(152, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayComponent_Template_a_click_152_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayComponent_Template_a_click_154_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Hiding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 30)(157, "div", 34)(158, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 37)(161, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Reynante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 30)(171, "div", 34)(172, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 37)(175, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Joyce Chua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Team Leader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84280:
/*!*****************************************************************!*\
  !*** ./src/app/components/utilities/extras/extras.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtrasComponent: () => (/* binding */ ExtrasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


class ExtrasComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function ExtrasComponent_Factory(t) {
    return new (t || ExtrasComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExtrasComponent,
    selectors: [["app-extras"]],
    decls: 178,
    vars: 5,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "opacity", 1, "card", "custom-card"], ["opacity", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "op-1"], [1, "op-2"], [1, "op-3"], [1, "op-4"], [1, "op-5"], [1, "op-6"], [1, "op-7"], [1, "op-8"], [1, "op-9"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0"], [1, "wd-30p"], [1, "wd-70p"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "mg-b-5"], [1, "mg-b-0"], ["id", "shadow", 1, "card", "custom-card"], ["shadow", ""], [1, ""], [1, "shadow-base"], [1, "shadow-none"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "p-3"], [1, "main-traffic-detail-item"], ["type", "primary", 3, "value"], [1, "p-3", "border-top"], ["type", "secondary", 3, "value"], ["type", "info", 3, "value"], ["type", "danger", 3, "value"], ["type", "success", 3, "value"]],
    template: function ExtrasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Extras");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Opacity Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set opacity to an element instantly by using the following utilities classes for opacity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div")(32, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29)(51, "table", 30)(52, "thead")(53, "tr")(54, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody")(59, "tr")(60, "td")(61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".op-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29)(66, "table", 33)(67, "thead")(68, "tr")(69, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody")(74, "tr")(75, "td")(76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ".op-[breakpoint]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td")(79, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "breakpoint: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 36, 37)(85, "div", 17)(86, "div")(87, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Shadow Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You can add or remove shadow to an element instantly by using the following utilities classes for shadow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 38)(92, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29)(97, "table", 33)(98, "thead")(99, "tr")(100, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tbody")(105, "tr")(106, "td")(107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".shadow-base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Add shadow to any box element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr")(112, "td")(113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ".shadow-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Remove shadow to any box element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41)(118, "div", 42)(119, "div", 43)(120, "div", 44)(121, "nav", 45)(122, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtrasComponent_Template_a_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Opacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtrasComponent_Template_a_click_124_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 43)(127, "div", 38)(128, "div", 47)(129, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "HTML Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48)(132, "div")(133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Project status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "ngb-progressbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 50)(139, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Wordpress Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48)(142, "div")(143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Project status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "ngb-progressbar", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 50)(149, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 48)(152, "div")(153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Project status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "ngb-progressbar", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 50)(159, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 48)(162, "div")(163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Project status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "ngb-progressbar", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 50)(169, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "PHP Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 48)(172, "div")(173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Project status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "ngb-progressbar", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 70);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbProgressbar],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18886:
/*!*************************************************************!*\
  !*** ./src/app/components/utilities/flex/flex.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexComponent: () => (/* binding */ FlexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-circle-progress */ 95000);


class FlexComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function FlexComponent_Factory(t) {
    return new (t || FlexComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FlexComponent,
    selectors: [["app-flex"]],
    decls: 293,
    vars: 52,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12", "col-md-12"], ["id", "enable", 1, "card", "custom-card"], ["enable", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "d-flex", "pd-10", "bg-light"], ["id", "direc", 1, "card", "custom-card"], ["direc", ""], [1, "d-flex", "flex-row", "bg-light", "mg-b-20"], [1, "pd-10", "bg-gray-100"], [1, "pd-10", "bg-gray-300"], [1, "pd-10", "bg-gray-400"], [1, "d-flex", "flex-row-reverse", "bg-light"], ["id", "justcont", 1, "card", "custom-card"], ["justcont", ""], [1, "d-flex", "flex-row", "justify-content-start", "bg-light", "mg-b-20"], [1, "d-flex", "flex-row", "justify-content-end", "bg-light", "mg-b-20"], [1, "d-flex", "flex-row", "justify-content-center", "bg-light", "mg-b-20"], [1, "d-flex", "flex-row", "justify-content-between", "bg-light", "mg-b-20"], [1, "d-flex", "flex-row", "justify-content-around", "bg-light"], ["id", "alignitems", 1, "card", "custom-card"], ["alignitems", ""], [1, "d-flex", "flex-row", "align-items-start", "bg-light", "ht-100", "mg-b-20"], [1, "d-flex", "flex-row", "align-items-center", "bg-light", "ht-100", "mg-b-20"], [1, "d-flex", "flex-row", "align-items-end", "bg-light", "ht-100", "mg-b-20"], [1, "d-flex", "flex-row", "align-items-stretch", "bg-light", "ht-100"], ["id", "alignself", 1, "card", "custom-card"], ["alignself", ""], [1, "d-flex", "flex-row", "bg-light", "ht-100", "mg-b-20"], [1, "pd-10", "bg-gray-100", "align-self-start"], [1, "pd-10", "bg-gray-300", "align-self-center"], [1, "pd-10", "bg-gray-400", "align-self-end"], [1, "pd-10", "bg-gray-500", "align-self-stretch"], ["id", "fill", 1, "card", "custom-card"], ["fill", ""], [1, "d-flex", "bg-light"], [1, "pd-10", "bg-gray-100", "flex-fill"], [1, "pd-10", "bg-gray-300", "flex-fill"], [1, "pd-10", "bg-gray-400", "flex-fill"], ["id", "grow", 1, "card", "custom-card"], ["grow", ""], [1, "pd-10", "bg-gray-100", "flex-grow-1"], ["id", "automargin", 1, "card", "custom-card"], ["automargin", ""], [1, "pd-10", "bg-gray-400", "mg-l-auto"], ["id", "order", 1, "card", "custom-card"], ["order", ""], [1, "pd-10", "bg-gray-100", "order-3"], [1, "pd-10", "bg-gray-300", "order-2"], [1, "pd-10", "bg-gray-400", "order-1"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-header", "custom-card-header"], [1, "main-content-label", "mb-0"], [1, ""], [1, "list", "d-flex", "align-items-center", "p-3"], ["outerStrokeLinecap", "square", 3, "showTitle", "showUnits", "showSubtitle", "percent", "radius", "space", "outerStrokeWidth", "innerStrokeWidth", "showInnerStroke", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration"], [1, "wrappe", "ml-3"], [1, "mb-1"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "mb-0", "text-muted"], [1, "fas", "fa-check-circle", "mr-2"], [1, "list", "d-flex", "align-items-center", "p-3", "border-top"], [1, "fas", "fa-spinner", "mr-2"], [1, "fas", "fa-info-circle", "mr-2"]],
    template: function FlexComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Flex");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enable Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Apply display utilities to create a flexbox container and transform direct children elements into flex items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I'm a flexbox container! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21, 22)(35, "div", 17)(36, "div")(37, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Set the direction of flex items in a flex container with direction utilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div")(42, "div", 23)(43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27)(50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28, 29)(58, "div", 17)(59, "div")(60, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Justify Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div")(65, "div", 30)(66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31)(73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32)(80, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33)(87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34)(94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35, 36)(102, "div", 17)(103, "div")(104, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Align Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div")(109, "div", 37)(110, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 38)(117, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 39)(124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 40)(131, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 41, 42)(139, "div", 17)(140, "div")(141, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Align Self");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Use align-self utilities on flexbox items to individually change their alignment on the cross axis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div")(146, "div", 43)(147, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Flex item 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Flex item 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Flex item 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Flex item 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48, 49)(157, "div", 17)(158, "div")(159, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, ".flex-fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " class on a series of sibling elements to force them into widths equal to their content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div")(167, "div", 50)(168, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Flex item with a lot of content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 54, 55)(176, "div", 17)(177, "div")(178, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Grow and Shrink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ".flex-grow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " utilities to toggle a flex item\u2019s ability to grow to fill available space.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div")(186, "div", 50)(187, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Third flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 57, 58)(195, "div", 17)(196, "div")(197, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Auto Margins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div")(202, "div", 50)(203, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Third flex item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 60, 61)(211, "div", 17)(212, "div")(213, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Change the visual order of specific flex items with a handful of order utilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div")(218, "div", 50)(219, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " First Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Second Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Third Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 65)(226, "div", 66)(227, "div", 67)(228, "div", 68)(229, "nav", 69)(230, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_230_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Enable Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_232_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_234_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Justify Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_236_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Align Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_238_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](138);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r4));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Align Self");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_240_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](156);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r5));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_242_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](175);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r6));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Grow and Shrink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_244_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](194);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r7));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Auto Margins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlexComponent_Template_a_click_246_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](210);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r8));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 67)(249, "div", 71)(250, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Project Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 73)(253, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "circle-progress", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 76)(256, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Project Planning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 78)(259, "div", 79)(260, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "100% Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "circle-progress", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 76)(266, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Project Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 78)(269, "div", 79)(270, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "100% Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "circle-progress", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 76)(276, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Project Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 78)(279, "div", 79)(280, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "76% Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "circle-progress", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 76)(286, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Project Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 78)(289, "div", 79)(290, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false)("showUnits", false)("showSubtitle", false)("percent", 100)("radius", 18)("space", -5)("outerStrokeWidth", 5)("innerStrokeWidth", 5)("showInnerStroke", true)("outerStrokeColor", "#38d250")("innerStrokeColor", "#77778e33")("animation", true)("animationDuration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false)("showUnits", false)("showSubtitle", false)("percent", 100)("radius", 18)("space", -5)("outerStrokeWidth", 5)("innerStrokeWidth", 5)("showInnerStroke", true)("outerStrokeColor", "#38d250")("innerStrokeColor", "#77778e33")("animation", true)("animationDuration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false)("showUnits", false)("showSubtitle", false)("percent", 76)("radius", 18)("space", -5)("outerStrokeWidth", 5)("innerStrokeWidth", 5)("showInnerStroke", true)("outerStrokeColor", "#53caed")("innerStrokeColor", "#77778e33")("animation", true)("animationDuration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false)("showUnits", false)("showSubtitle", false)("percent", 10)("radius", 18)("space", -5)("outerStrokeWidth", 5)("innerStrokeWidth", 5)("showInnerStroke", true)("outerStrokeColor", "#f16d75")("innerStrokeColor", "#77778e33")("animation", true)("animationDuration", 1000);
      }
    },
    dependencies: [ng_circle_progress__WEBPACK_IMPORTED_MODULE_1__.CircleProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62198:
/*!*****************************************************************!*\
  !*** ./src/app/components/utilities/height/height.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeightComponent: () => (/* binding */ HeightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


class HeightComponent {
  constructor() {
    this.isClosed = false;
    this.isClosed1 = false;
  }
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  successToggle() {
    this.isClosed = true;
  }
  dangerToggle() {
    this.isClosed1 = true;
  }
  static #_ = this.ɵfac = function HeightComponent_Factory(t) {
    return new (t || HeightComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeightComponent,
    selectors: [["app-height"]],
    decls: 203,
    vars: 4,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "seth", 1, "card", "custom-card"], ["seth", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-80", "bg-light"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-150", "bg-light", "mg-l-20"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-100", "bg-light", "mg-l-20"], [1, "card-footer"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0"], [1, "wd-30p"], [1, "wd-70p"], [1, "table-responsive", "mt-0"], [1, "table", "main-table-reference", "mg-t-0"], [1, "table", "main-table-reference", "mt-0", "mb-0"], ["id", "percentage", 1, "card", "custom-card"], ["percentage", ""], ["id", "media", 1, "card", "custom-card"], ["media", ""], ["rowspan", "2", 1, "bd-l"], [1, "mg-b-5"], [1, "mg-b-0"], ["id", "extra", 1, "card", "custom-card"], ["extra", ""], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "bg-white", "box-shadow", 3, "ngbCollapse", "ngbCollapseChange"], [1, "alert", "text-center", "fade", "show", "p-3"], ["type", "button", "data-dismiss", "alert", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "fe", "fe-upload-cloud", "fs-50", "text-success"], [1, "mt-2", "mb-1"], [1, "mb-3", "mb-3", "tx-inverse"], ["href", "javascript:;", 1, "btn", "ripple", "btn-success"], [1, "fe", "fe-download-cloud", "fs-50", "text-danger"], ["href", "javascript:;", 1, "btn", "ripple", "btn-danger"]],
    template: function HeightComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Height");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set a height to an element instantly by using the following utilities classes for height.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " .ht-80 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " .ht-150 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " .ht-100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "table", 25)(41, "thead")(42, "tr")(43, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Smaller Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody")(48, "tr")(49, "td")(50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ".ht-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28)(55, "table", 29)(56, "thead")(57, "tr")(58, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Regular Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody")(63, "tr")(64, "td")(65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".ht-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "15 | 20 | 25 | 30 | ... | 100 \u00A0 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24)(70, "table", 30)(71, "thead")(72, "tr")(73, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Bigger Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tbody")(78, "tr")(79, "td")(80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ".ht-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "150 | 200 | 250 | 300 | ... | 850 \u00A0 (step of 50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31, 32)(86, "div", 17)(87, "div")(88, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Percentage Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "You can set a height through percentage using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24)(93, "table", 30)(94, "thead")(95, "tr")(96, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tbody")(101, "tr")(102, "td")(103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".ht-[value]p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10 | 20 | 30 | 40 | ... | 100 \u00A0 (step of 10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33, 34)(109, "div", 17)(110, "div")(111, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Media Query Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "You can also set a height to a different media query using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24)(116, "table", 30)(117, "thead")(118, "tr")(119, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody")(124, "tr")(125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ".ht-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 35)(129, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "size: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "value: the height value (refer to code above)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr")(134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ".ht-[size]-[value]p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 38, 39)(139, "div", 17)(140, "div")(141, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Extra Height Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "You can also set a height using the extra utilities classes below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 24)(146, "table", 30)(147, "thead")(148, "tr")(149, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tbody")(154, "tr")(155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ".ht-100v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Set a height to an element based on viewport height.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".ht-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Set an auto height to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 40)(167, "div", 41)(168, "div", 42)(169, "div", 43)(170, "nav", 44)(171, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_a_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Set Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_a_click_173_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Percentage Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_a_click_175_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Media Query Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_a_click_177_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](138);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Extra Height Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function HeightComponent_Template_div_ngbCollapseChange_179_listener($event) {
          return ctx.isClosed = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 47)(181, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_button_click_181_listener() {
          return ctx.successToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Success !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Data Upload Successfully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function HeightComponent_Template_div_ngbCollapseChange_191_listener($event) {
          return ctx.isClosed1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 47)(193, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeightComponent_Template_button_click_193_listener() {
          return ctx.dangerToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Something went wrong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isClosed1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isClosed1);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapse],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9536:
/*!*****************************************************************!*\
  !*** ./src/app/components/utilities/margin/margin.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginComponent: () => (/* binding */ MarginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class MarginComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function MarginComponent_Factory(t) {
    return new (t || MarginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MarginComponent,
    selectors: [["app-margin"]],
    decls: 210,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "setmargin", 1, "card", "custom-card"], ["setmargin", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "wd-150", "ht-80", "bg-light"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-80", "bg-light", "mg-l-20"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-80", "bg-light", "mg-l-40"], [1, "card-footer"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "wd-30p"], [1, "wd-70p"], ["id", "mediamargin", 1, "card", "custom-card"], ["mediamargin", ""], [1, "mg-b-5"], [1, "mg-b-0"], ["id", "automargin", 1, "card", "custom-card"], ["automargin", ""], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-body", "user-card", "text-center"], [1, "main-img-user", "avatar-lg", "online", "text-center"], ["alt", "avatar", "src", "../../assets/img/users/5.jpg", 1, "rounded-circle"], [1, "mt-2"], [1, "mb-1"], [1, "mb-1", "tx-inverse"], [1, "text-muted"], [1, "far", "fa-check-circle", "text-success", "mr-1"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "btn-sm", "mt-3"], ["alt", "avatar", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "btn-sm", "mt-3"]],
    template: function MarginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Margin");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set a margin to an element instantly by using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " .mg-l-20 (or) .ml-2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " .mg-l-40 (or) .ml-4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23)(38, "div", 24)(39, "table", 25)(40, "thead")(41, "tr")(42, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Smaller Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody")(47, "tr")(48, "td")(49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".mg-t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " .mg-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " .mg-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " .mg-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr")(60, "td")(61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".mt-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " .mr-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " .mb-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " .ml-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "0 | 1 | 2 | 3 | 4 | 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28, 29)(73, "div", 17)(74, "div")(75, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Media Query Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "You can also set a margin to a different media query using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24)(80, "table", 25)(81, "thead")(82, "tr")(83, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tbody")(88, "tr")(89, "td")(90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ".mg-[breakpoint]-t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " .mg-[breakpoint]-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " .mg-[breakpoint]-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " .mg-[breakpoint]-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td")(99, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "breakpoint: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "value: the margin value (refer to code above)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr")(104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, ".mt-[breakpoint]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " .mr-[breakpoint]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " .mb-[breakpoint]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " .ml-[breakpoint]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td")(114, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "breakpoint: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "value: the margin value (refer to code above)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32, 33)(120, "div", 17)(121, "div")(122, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Auto Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "You can also set a margin to a different media query using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 24)(127, "table", 25)(128, "thead")(129, "tr")(130, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tbody")(135, "tr")(136, "td")(137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".mg-t-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ".mt-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Set a top margin to auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr")(145, "td")(146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, ".mg-r-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " .mr-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Set a right margin to auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr")(154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ".mg-b-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".mb-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Set a bottom margin to auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr")(163, "td")(164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, ".mg-l-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ".ml-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Set a left margin to auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 34)(172, "div", 35)(173, "div", 36)(174, "div", 37)(175, "nav", 38)(176, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarginComponent_Template_a_click_176_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Set Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarginComponent_Template_a_click_178_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Media Query Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarginComponent_Template_a_click_180_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Auto Margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 36)(183, "div", 40)(184, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 43)(187, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Reynante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 36)(197, "div", 40)(198, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 43)(201, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Joyce Chua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Team Leader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52529:
/*!*******************************************************************!*\
  !*** ./src/app/components/utilities/padding/padding.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaddingComponent: () => (/* binding */ PaddingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class PaddingComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function PaddingComponent_Factory(t) {
    return new (t || PaddingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaddingComponent,
    selectors: [["app-padding"]],
    decls: 215,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "setpd", 1, "card", "custom-card"], ["setpd", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "d-md-flex"], [1, "wd-200", "ht-100", "bg-gray-500", "pd-t-30"], [1, "d-flex", "align-items-center", "justify-content-center", "ht-100p", "bg-gray-400"], [1, "wd-200", "ht-100", "bg-gray-500", "ml-md-4", "pd-t-50", "mt-4", "mt-xl-0"], [1, "wd-200", "ht-100", "bg-gray-500", "ml-md-4", "pd-t-70", "mt-4", "mt-xl-0"], [1, "card-footer"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0"], [1, "wd-30p"], [1, "wd-70p"], [1, "table", "main-table-reference", "mt-0", "mb-0"], ["id", "mediapd", 1, "card", "custom-card"], ["mediapd", ""], [1, "mg-b-5"], [1, "mg-b-0"], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-header", "custom-card-header", "border-bottom-0"], [1, "main-content-label", "mb-0"], [1, "border"], [1, "main-list-item", "p-3"], [1, "main-list-item", "p-3", "border-top"]],
    template: function PaddingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Padding");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set a padding to an element instantly by using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20)(32, "div", 21)(33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " .pd-t-30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23)(36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " .pd-t-50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24)(39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " .pd-t-70 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25)(42, "div", 26)(43, "table", 27)(44, "thead")(45, "tr")(46, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Smaller Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody")(51, "tr")(52, "td")(53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".pd-t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " .pd-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " .pd-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " .pd-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr")(64, "td")(65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".pt-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " .pr-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " .pb-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " .pl-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "0 | 1 | 2 | 3 | 4 | 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26)(76, "table", 27)(77, "thead")(78, "tr")(79, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Bigger Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tbody")(84, "tr")(85, "td")(86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ".pd-t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " .pd-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " .pd-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " .pd-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "15 | 20 | 25 | 30 | ... | 120 \u00A0 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26)(97, "table", 30)(98, "thead")(99, "tr")(100, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Even Bigger Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tbody")(105, "tr")(106, "td")(107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".pd-t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " .pd-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " .pd-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " .pd-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "110 | 120 | 130 | 140 | ... | 200 \u00A0 (step of 10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31, 32)(119, "div", 17)(120, "div")(121, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Media Query Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "You can also set a padding to a different media query using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 26)(126, "table", 30)(127, "thead")(128, "tr")(129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tbody")(134, "tr")(135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".pd-[size]-t-[value] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".pt-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, ".pd-[size]-r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ".pr-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " .pd-[size]-b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ".pb-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " .pd-[size]-l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " (or) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ".pl-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td")(160, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "size: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "value: the padding value (refer to code above)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 35)(165, "div", 36)(166, "div", 37)(167, "div", 38)(168, "nav", 39)(169, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaddingComponent_Template_a_click_169_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Set Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaddingComponent_Template_a_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Media Query Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 37)(174, "div", 41)(175, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Sales Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 17)(178, "div", 43)(179, "div", 44)(180, "div")(181, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div")(186, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u00A315,300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 45)(189, "div")(190, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Total Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div")(195, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u00A31,625");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 45)(198, "div")(199, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div")(204, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\u00A355,897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 45)(207, "div")(208, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Total Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div")(213, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30931:
/*!*********************************************************************!*\
  !*** ./src/app/components/utilities/position/position.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionComponent: () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class PositionComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function PositionComponent_Factory(t) {
    return new (t || PositionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PositionComponent,
    selectors: [["app-position"]],
    decls: 267,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "setposition", 1, "card", "custom-card"], ["setposition", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0", "mb-0"], [1, "wd-30p"], [1, "wd-70p"], ["id", "cornering", 1, "card", "custom-card"], ["cornering", ""], ["id", "zyposition", 1, "card", "custom-card"], ["zyposition", ""], ["id", "negative", 1, "card", "custom-card"], ["negative", ""], ["id", "zindex", 1, "card", "custom-card"], ["zindex", ""], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-header", "custom-card-header", "border-bottom-0"], [1, "main-content-label", "mb-0"], [1, "border"], [1, "main-list-item", "p-3"], [1, "main-list-item", "p-3", "border-top"]],
    template: function PositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Position");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set a position to an element instantly by using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20)(32, "table", 21)(33, "thead")(34, "tr")(35, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody")(40, "tr")(41, "td")(42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".pos-relative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Set a relative position to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr")(47, "td")(48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".pos-absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Set an absolute position to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr")(53, "td")(54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".pos-fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Set a fixed position to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr")(59, "td")(60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".pos-static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Set a static position to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24, 25)(66, "div", 17)(67, "div")(68, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Cornering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "You can set a top,right,bottom and left position to an element using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20)(73, "table", 21)(74, "thead")(75, "tr")(76, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody")(81, "tr")(82, "td")(83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr")(88, "td")(89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr")(94, "td")(95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr")(100, "td")(101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ".l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26, 27)(107, "div", 17)(108, "div")(109, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "X and Y Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "You can set a top,right,bottom and left position to an element using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 20)(114, "table", 21)(115, "thead")(116, "tr")(117, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tbody")(122, "tr")(123, "td")(124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, ".t-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr")(129, "td")(130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, ".r-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr")(135, "td")(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".b-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr")(141, "td")(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, ".l-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 28, 29)(148, "div", 17)(149, "div")(150, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Negative Corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "You can set a negative positioning to an element using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 20)(155, "table", 21)(156, "thead")(157, "tr")(158, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tbody")(163, "tr")(164, "td")(165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, ".t--[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr")(170, "td")(171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, ".r--[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr")(176, "td")(177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ".b--[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr")(182, "td")(183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, ".l--[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "0 | 5 | 10 | 15 | ... | 100 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 30, 31)(189, "div", 17)(190, "div")(191, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Z-Index Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "You can set a z-index to an element instantly using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 20)(196, "table", 21)(197, "thead")(198, "tr")(199, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tbody")(204, "tr")(205, "td")(206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, ".z-index-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "10 | 50 | 100 | 150 | 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 32)(211, "div", 33)(212, "div", 34)(213, "div", 35)(214, "nav", 36)(215, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_215_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Set Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_217_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Cornering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_219_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "X and Y Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_221_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Negative Corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PositionComponent_Template_a_click_223_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](188);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r4));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Z-Index Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 34)(226, "div", 38)(227, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Sales Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 17)(230, "div", 40)(231, "div", 41)(232, "div")(233, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div")(238, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u00A315,300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 42)(241, "div")(242, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Total Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div")(247, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u00A31,625");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 42)(250, "div")(251, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div")(256, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u00A355,897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 42)(259, "div")(260, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Total Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div")(265, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87545:
/*!******************************************************************!*\
  !*** ./src/app/components/utilities/utilities-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesRoutingModule: () => (/* binding */ UtilitiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background.component */ 76038);
/* harmony import */ var _border_border_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border/border.component */ 38955);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ 27690);
/* harmony import */ var _extras_extras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/extras.component */ 84280);
/* harmony import */ var _flex_flex_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flex/flex.component */ 18886);
/* harmony import */ var _height_height_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./height/height.component */ 62198);
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./margin/margin.component */ 9536);
/* harmony import */ var _padding_padding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./padding/padding.component */ 52529);
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ 30931);
/* harmony import */ var _width_width_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./width/width.component */ 74410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);













const routes = [{
  path: '',
  children: [{
    path: 'background',
    component: _background_background_component__WEBPACK_IMPORTED_MODULE_0__.BackgroundComponent
  }, {
    path: 'border',
    component: _border_border_component__WEBPACK_IMPORTED_MODULE_1__.BorderComponent
  }, {
    path: 'display',
    component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent
  }, {
    path: 'extras',
    component: _extras_extras_component__WEBPACK_IMPORTED_MODULE_3__.ExtrasComponent
  }, {
    path: 'flex',
    component: _flex_flex_component__WEBPACK_IMPORTED_MODULE_4__.FlexComponent
  }, {
    path: 'height',
    component: _height_height_component__WEBPACK_IMPORTED_MODULE_5__.HeightComponent
  }, {
    path: 'margin',
    component: _margin_margin_component__WEBPACK_IMPORTED_MODULE_6__.MarginComponent
  }, {
    path: 'padding',
    component: _padding_padding_component__WEBPACK_IMPORTED_MODULE_7__.PaddingComponent
  }, {
    path: 'position',
    component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__.PositionComponent
  }, {
    path: 'width',
    component: _width_width_component__WEBPACK_IMPORTED_MODULE_9__.WidthComponent
  }]
}];
class UtilitiesRoutingModule {
  static #_ = this.ɵfac = function UtilitiesRoutingModule_Factory(t) {
    return new (t || UtilitiesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: UtilitiesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UtilitiesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 89348:
/*!**********************************************************!*\
  !*** ./src/app/components/utilities/utilities.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesModule: () => (/* binding */ UtilitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background.component */ 76038);
/* harmony import */ var _border_border_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border/border.component */ 38955);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ 27690);
/* harmony import */ var _flex_flex_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex/flex.component */ 18886);
/* harmony import */ var _height_height_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./height/height.component */ 62198);
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./margin/margin.component */ 9536);
/* harmony import */ var _padding_padding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./padding/padding.component */ 52529);
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position/position.component */ 30931);
/* harmony import */ var _width_width_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./width/width.component */ 74410);
/* harmony import */ var _extras_extras_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extras/extras.component */ 84280);
/* harmony import */ var _utilities_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities-routing.module */ 87545);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
















class UtilitiesModule {
  static #_ = this.ɵfac = function UtilitiesModule_Factory(t) {
    return new (t || UtilitiesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: UtilitiesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _utilities_routing_module__WEBPACK_IMPORTED_MODULE_10__.UtilitiesRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](UtilitiesModule, {
    declarations: [_background_background_component__WEBPACK_IMPORTED_MODULE_0__.BackgroundComponent, _border_border_component__WEBPACK_IMPORTED_MODULE_1__.BorderComponent, _display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent, _flex_flex_component__WEBPACK_IMPORTED_MODULE_3__.FlexComponent, _height_height_component__WEBPACK_IMPORTED_MODULE_4__.HeightComponent, _margin_margin_component__WEBPACK_IMPORTED_MODULE_5__.MarginComponent, _padding_padding_component__WEBPACK_IMPORTED_MODULE_6__.PaddingComponent, _position_position_component__WEBPACK_IMPORTED_MODULE_7__.PositionComponent, _width_width_component__WEBPACK_IMPORTED_MODULE_8__.WidthComponent, _extras_extras_component__WEBPACK_IMPORTED_MODULE_9__.ExtrasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _utilities_routing_module__WEBPACK_IMPORTED_MODULE_10__.UtilitiesRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 74410:
/*!***************************************************************!*\
  !*** ./src/app/components/utilities/width/width.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidthComponent: () => (/* binding */ WidthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class WidthComponent {
  constructor() {}
  ngOnInit() {}
  scrollToElement(element) {
    element.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  }
  static #_ = this.ɵfac = function WidthComponent_Factory(t) {
    return new (t || WidthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WidthComponent,
    selectors: [["app-width"]],
    decls: 221,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-9", "col-lg-12"], ["id", "set", 1, "card", "custom-card"], ["set", ""], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-80", "ht-80", "bg-light"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-150", "ht-80", "bg-light", "mg-l-20"], [1, "d-flex", "align-items-center", "justify-content-center", "wd-100", "ht-80", "bg-light", "mg-l-20"], [1, "card-footer"], [1, "table-responsive"], [1, "table", "main-table-reference", "mt-0"], [1, "wd-30p"], [1, "wd-70p"], [1, "table", "main-table-reference", "mt-0", "mb-0"], ["id", "percentage", 1, "card", "custom-card"], ["percentage", ""], ["id", "media", 1, "card", "custom-card"], ["media", ""], ["rowspan", "2"], [1, "mg-b-5"], [1, "mg-b-0"], ["id", "extra", 1, "card", "custom-card"], ["extra", ""], [1, "col-xl-3", "col-lg-12", "d-none", "d-xl-block", "custom-leftnav"], [1, "main-content-left-components"], [1, "card", "custom-card"], [1, "card-body", "component-item"], [1, "nav", "flex-column"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "card-header", "custom-card-header", "border-bottom-0"], [1, "main-content-label", "mb-0"], [1, "border"], [1, "main-list-item", "p-3"], [1, "main-list-item", "p-3", "border-top"]],
    template: function WidthComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Width");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15, 16)(25, "div", 17)(26, "div")(27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "You can set a width to an element instantly by using the following utilities classes for width.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " .wd-80 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " .wd-150 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " .wd-100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "table", 25)(41, "thead")(42, "tr")(43, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Smaller Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody")(48, "tr")(49, "td")(50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ".wd-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24)(55, "table", 25)(56, "thead")(57, "tr")(58, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Regular Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody")(63, "tr")(64, "td")(65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".wd-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "15 | 20 | 25 | 30 | ... | 100 \u00A0 (step of 5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24)(70, "table", 28)(71, "thead")(72, "tr")(73, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Bigger Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tbody")(78, "tr")(79, "td")(80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ".wd-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "150 | 200 | 250 | 300 | ... | 1000 \u00A0 (step of 50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29, 30)(86, "div", 17)(87, "div")(88, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Percentage Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "You can set a width through percentage using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24)(93, "table", 28)(94, "thead")(95, "tr")(96, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tbody")(101, "tr")(102, "td")(103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".wd-[value]p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10 | 20 | 30 | 40 | ... | 100 \u00A0 (step of 10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31, 32)(109, "div", 17)(110, "div")(111, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Media Query Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "You can also set a width to a different media query using the following utilities classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24)(116, "table", 28)(117, "thead")(118, "tr")(119, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody")(124, "tr")(125, "td")(126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ".wd-[size]-[value]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 33)(129, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "size: xs | sm | md | lg | xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "value: the width value (refer to code above)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr")(134, "td")(135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ".wd-[size]-[value]p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 36, 37)(139, "div", 17)(140, "div")(141, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Extra Width Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "You can also set a width using the extra utilities classes below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 24)(146, "table", 28)(147, "thead")(148, "tr")(149, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tbody")(154, "tr")(155, "td")(156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ".wd-100v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Set a width to an element based on viewport width.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr")(161, "td")(162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".wd-auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Set an auto width to an element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 38)(167, "div", 39)(168, "div", 40)(169, "div", 41)(170, "nav", 42)(171, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidthComponent_Template_a_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Set Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidthComponent_Template_a_click_173_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r1));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Percentage Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidthComponent_Template_a_click_175_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Media Query Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidthComponent_Template_a_click_177_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](138);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.scrollToElement(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Extra Width Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 40)(180, "div", 44)(181, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Sales Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 17)(184, "div", 46)(185, "div", 47)(186, "div")(187, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div")(192, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u00A315,300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 48)(195, "div")(196, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Total Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div")(201, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u00A31,625");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 48)(204, "div")(205, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div")(210, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u00A355,897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 48)(213, "div")(214, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Total Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "weekly profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div")(219, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_utilities_utilities_module_ts.js.map