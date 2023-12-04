"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["default-src_app_components_common_component_module_ts"],{

/***/ 72255:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 68100);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 33294);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 55824:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 85439);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 61324);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 62204:
/*!*********************************************************************!*\
  !*** ./src/app/components/common/access/access-notice.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessNoticeComponent: () => (/* binding */ AccessNoticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class AccessNoticeComponent {
  constructor() {
    this.hide = true;
  }
  ngAfterViewInit() {
    console.log("Hide status", this.hide);
  }
  static #_ = this.ɵfac = function AccessNoticeComponent_Factory(t) {
    return new (t || AccessNoticeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccessNoticeComponent,
    selectors: [["access-notice"]],
    inputs: {
      hide: "hide"
    },
    decls: 5,
    vars: 0,
    consts: [[1, "access-notice"]],
    template: function AccessNoticeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Access Not allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You do not have permission to view this page, Please request access!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".access-notice[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 120px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYWNjZXNzL2FjY2Vzcy1ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9hY2Nlc3MvYWNjZXNzLW5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFjY2Vzcy1ub3RpY2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6MTIwcHggMDtcbn0iLCIuYWNjZXNzLW5vdGljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTIwcHggMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3427:
/*!************************************************************!*\
  !*** ./src/app/components/common/alert/alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertComponents: () => (/* binding */ AlertComponents)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);



const _c0 = ["successmodal"];
const _c1 = ["errormodal"];
const _c2 = ["warningmodal"];
function AlertComponents_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_0_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r6.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r6.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.caption);
  }
}
function AlertComponents_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_2_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r10.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_2_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r10.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.caption);
  }
}
function AlertComponents_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const modal_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r15.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponents_ng_template_4_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const modal_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r15.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.caption);
  }
}
class AlertComponents {
  constructor(modalService) {
    this.modalService = modalService;
    this.message = "Suceessfully Completed";
    this.caption = "";
    this.onTriggerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, {
      centered: true
    });
  }
  ErrorOpen(errormodal) {
    this.modalService.open(errormodal, {
      centered: true
    });
  }
  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, {
      centered: true
    });
  }
  ngAfterViewInit() {
    let $this = this;
    this.status.subscribe(v => {
      $this.message = v.message;
      $this.caption = v.caption;
      switch (v.status) {
        case "success":
          $this.SuccessOpen(this.successmodal);
          break;
        case "error":
          $this.ErrorOpen(this.errormodal);
          break;
        case "warning":
          $this.WarningOpen(this.warningmodal);
          break;
      }
    });
  }
  onConfirm() {
    this.onTrigger = true;
    this.onTriggerChange.emit(this.onTrigger);
    this.modalService.dismissAll();
  }
  static #_ = this.ɵfac = function AlertComponents_Factory(t) {
    return new (t || AlertComponents)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AlertComponents,
    selectors: [["app-alerts"]],
    viewQuery: function AlertComponents_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.successmodal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errormodal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.warningmodal = _t.first);
      }
    },
    inputs: {
      status: "status",
      onTrigger: "onTrigger"
    },
    outputs: {
      onTriggerChange: "onTriggerChange"
    },
    decls: 6,
    vars: 0,
    consts: [["class", "successmodal"], ["successmodal", ""], ["warningmodal", ""], ["errormodal", ""], [1, "modal-body", "text-center", "p-4"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "icon", "ion-ios-checkmark-circle-outline", "tx-100", "tx-success", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-success", "tx-semibold", "mg-b-20"], [1, "mg-b-20", "mg-x-20"], ["type", "button", 1, "btn", "btn-success", "pd-x-25", "mr-0", 3, "click"], [1, "icon", "icon", "ion-ios-close-circle-outline", "tx-100", "tx-warning", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-warning", "mg-b-20"], ["type", "button", 1, "btn", "btn-warning", "pd-x-25", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-default", "pd-x-25", "mr-0", 3, "click"], [1, "icon", "icon", "ion-ios-close-circle-outline", "tx-100", "tx-danger", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-danger", "mg-b-20"], ["type", "button", 1, "btn", "btn-danger", "pd-x-25", "mr-0", 3, "click"]],
    template: function AlertComponents_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponents_ng_template_0_Template, 11, 2, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponents_ng_template_2_Template, 13, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertComponents_ng_template_4_Template, 11, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75601:
/*!*************************************************************!*\
  !*** ./src/app/components/common/alerts/alert.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertComponent: () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);



const _c0 = ["successmodal"];
const _c1 = ["errormodal"];
const _c2 = ["warningmodal"];
function AlertComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r6.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r6.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.caption);
  }
}
function AlertComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_2_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r10.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_2_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r10.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.caption);
  }
}
function AlertComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const modal_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r15.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_4_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const modal_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r15.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.caption);
  }
}
class AlertComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.message = "Suceessfully Completed";
    this.caption = "";
    this.onTriggerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, {
      centered: true
    });
  }
  ErrorOpen(errormodal) {
    this.modalService.open(errormodal, {
      centered: true
    });
  }
  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, {
      centered: true
    });
  }
  ngAfterViewInit() {
    let $this = this;
    this.status.subscribe(v => {
      $this.message = v.message;
      $this.caption = v.caption;
      switch (v.status) {
        case "success":
          $this.SuccessOpen(this.successmodal);
          break;
        case "error":
          $this.ErrorOpen(this.errormodal);
          break;
        case "warning":
          $this.WarningOpen(this.warningmodal);
          break;
      }
    });
  }
  onConfirm() {
    this.onTrigger = true;
    this.onTriggerChange.emit(this.onTrigger);
    this.modalService.dismissAll();
  }
  static #_ = this.ɵfac = function AlertComponent_Factory(t) {
    return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AlertComponent,
    selectors: [["app-alert"]],
    viewQuery: function AlertComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.successmodal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errormodal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.warningmodal = _t.first);
      }
    },
    inputs: {
      status: "status",
      onTrigger: "onTrigger"
    },
    outputs: {
      onTriggerChange: "onTriggerChange"
    },
    decls: 6,
    vars: 0,
    consts: [["class", "successmodal"], ["successmodal", ""], ["warningmodal", ""], ["errormodal", ""], [1, "modal-body", "text-center", "p-4"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "icon", "ion-ios-checkmark-circle-outline", "tx-100", "tx-success", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-success", "tx-semibold", "mg-b-20"], [1, "mg-b-20", "mg-x-20"], ["type", "button", 1, "btn", "btn-success", "pd-x-25", "mr-0", 3, "click"], [1, "icon", "icon", "ion-ios-close-circle-outline", "tx-100", "tx-warning", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-warning", "mg-b-20"], ["type", "button", 1, "btn", "btn-warning", "pd-x-25", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-default", "pd-x-25", "mr-0", 3, "click"], [1, "icon", "icon", "ion-ios-close-circle-outline", "tx-100", "tx-danger", "lh-1", "mg-t-20", "d-inline-block"], [1, "tx-danger", "mg-b-20"], ["type", "button", 1, "btn", "btn-danger", "pd-x-25", "mr-0", 3, "click"]],
    template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 11, 2, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_ng_template_2_Template, 13, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertComponent_ng_template_4_Template, 11, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 65758:
/*!*******************************************************!*\
  !*** ./src/app/components/common/component.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentModule: () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ 86882);
/* harmony import */ var _access_access_notice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access/access-notice.component */ 62204);
/* harmony import */ var _alerts_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts/alert.component */ 75601);
/* harmony import */ var _element_date_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element/date/date.component */ 27014);
/* harmony import */ var _element_datetime_datetime_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element/datetime/datetime.component */ 96728);
/* harmony import */ var _element_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element/picker/image-picker.component */ 63033);
/* harmony import */ var _element_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element/text-editor/text-editor.component */ 2736);
/* harmony import */ var _element_text_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element/text/text-input.component */ 5088);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert/alert.component */ 3427);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/input.component */ 22124);
/* harmony import */ var _textarea_editor_textarea_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea-editor/textarea-editor.component */ 29287);
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textarea/textarea.component */ 15782);
/* harmony import */ var _element_image_image_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/image/image-select.component */ 52990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);

















class ComponentModule {
  static #_ = this.ɵfac = function ComponentModule_Factory(t) {
    return new (t || ComponentModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: ComponentModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_15__.QuillModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ComponentModule, {
    declarations: [_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_10__.TextAreaComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _alerts_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__.AlertComponents, _element_text_text_input_component__WEBPACK_IMPORTED_MODULE_6__.TextInputComponent, _element_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_5__.TextEditorComponent, _element_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__.ImagePickerComponent, _access_access_notice_component__WEBPACK_IMPORTED_MODULE_0__.AccessNoticeComponent, _textarea_editor_textarea_editor_component__WEBPACK_IMPORTED_MODULE_9__.TextAreaEditorComponent, _element_date_date_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent, _element_datetime_datetime_component__WEBPACK_IMPORTED_MODULE_3__.DateTimeInputComponent, _element_image_image_select_component__WEBPACK_IMPORTED_MODULE_11__.ImageSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_15__.QuillModule],
    exports: [_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_10__.TextAreaComponent, _input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _alerts_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__.AlertComponents, _element_text_text_input_component__WEBPACK_IMPORTED_MODULE_6__.TextInputComponent, _element_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_5__.TextEditorComponent, _element_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__.ImagePickerComponent, _access_access_notice_component__WEBPACK_IMPORTED_MODULE_0__.AccessNoticeComponent, _textarea_editor_textarea_editor_component__WEBPACK_IMPORTED_MODULE_9__.TextAreaEditorComponent, _element_date_date_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent, _element_datetime_datetime_component__WEBPACK_IMPORTED_MODULE_3__.DateTimeInputComponent, _element_image_image_select_component__WEBPACK_IMPORTED_MODULE_11__.ImageSelectComponent]
  });
})();

/***/ }),

/***/ 27014:
/*!******************************************************************!*\
  !*** ./src/app/components/common/element/date/date.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateInputComponent: () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);





function DateInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DateInputComponent_div_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DateInputComponent_div_0_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.inputModel = $event);
    })("ngModelChange", function DateInputComponent_div_0_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logChange(ctx_r4.inputModel));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.inputModel)("id", ctx_r0.id)("value", ctx_r0.value);
  }
}
class DateInputComponent {
  constructor(webService) {
    this.webService = webService;
    this.id = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  validate($event, form) {}
  logChange(data) {
    let $this = this;
    if (data == undefined || data == "") {
      return;
    }
    if (this.id == undefined || this.id == "") {
      return;
    }
    let body = {
      target: {
        id: this.id
      },
      data: {
        value: data
      }
    };
    this.webService.update(`element`, body).subscribe(response => {
      // console.log("Response Data for Groups:: ", response, response.status)
      if (response.status == 'success') {
        // $this.groups = result
      }
    });
  }
  onDelete() {
    const body = {};
    body.id = this.id;
    body.name = this.label;
    this.webService.postDelete(`element`, body).subscribe(response => {
      if (response.status == "success") {
        this.is_showing = false;
        this.stateChange.emit(this.inputModel);
      }
    });
  }
  static #_ = this.ɵfac = function DateInputComponent_Factory(t) {
    return new (t || DateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DateInputComponent,
    selectors: [["element-date"]],
    inputs: {
      label: "label",
      id: "id",
      value: "value",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      stateChange: "stateChange",
      onValidatorChange: "onValidatorChange"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "", 4, "ngIf"], [1, ""], ["href", "javascript:;", 1, "btn", "pull-right", 2, "float", "right", 3, "click"], [1, "ti", "ti-trash"], ["type", "date", "autocomplete", "off", "placeholder", "write something...", 1, "form-control", 3, "ngModel", "id", "value", "ngModelChange"]],
    template: function DateInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DateInputComponent_div_0_Template, 6, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96728:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/element/datetime/datetime.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimeInputComponent: () => (/* binding */ DateTimeInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);





function DateTimeInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DateTimeInputComponent_div_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DateTimeInputComponent_div_0_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.inputModel = $event);
    })("ngModelChange", function DateTimeInputComponent_div_0_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logChange(ctx_r4.inputModel));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.inputModel)("id", ctx_r0.id)("value", ctx_r0.value);
  }
}
class DateTimeInputComponent {
  constructor(webService) {
    this.webService = webService;
    this.id = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  validate($event, form) {}
  logChange(data) {
    let $this = this;
    if (data == undefined || data == "") {
      return;
    }
    if (this.id == undefined || this.id == "") {
      return;
    }
    let body = {
      target: {
        id: this.id
      },
      data: {
        value: data
      }
    };
    this.webService.update(`element`, body).subscribe(response => {
      // console.log("Response Data for Groups:: ", response, response.status)
      if (response.status == 'success') {
        // $this.groups = result
      }
    });
  }
  onDelete() {
    let $this = this;
    const body = {};
    body.id = this.id;
    body.name = this.label;
    this.webService.postDelete(`element`, body).subscribe(response => {
      if (response.status == "success") {
        this.is_showing = false;
        this.stateChange.emit(this.inputModel);
      }
    });
  }
  static #_ = this.ɵfac = function DateTimeInputComponent_Factory(t) {
    return new (t || DateTimeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DateTimeInputComponent,
    selectors: [["element-datetime"]],
    inputs: {
      label: "label",
      id: "id",
      value: "value",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      stateChange: "stateChange",
      onValidatorChange: "onValidatorChange"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "", 4, "ngIf"], [1, ""], ["href", "javascript:;", 1, "btn", "pull-right", 2, "float", "right", 3, "click"], [1, "ti", "ti-trash"], ["type", "datetime-local", "autocomplete", "off", "placeholder", "write something...", 1, "form-control", 3, "ngModel", "id", "value", "ngModelChange"]],
    template: function DateTimeInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DateTimeInputComponent_div_0_Template, 6, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52990:
/*!***************************************************************************!*\
  !*** ./src/app/components/common/element/image/image-select.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageSelectComponent: () => (/* binding */ ImageSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70997);






function ImageSelectComponent_div_2_ng_template_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageSelectComponent_div_2_ng_template_4_div_9_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const image_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.getImages(image_r5.path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImageSelectComponent_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageSelectComponent_div_2_ng_template_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const modal_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10)(7, "div", 11)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ImageSelectComponent_div_2_ng_template_4_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.images);
  }
}
function ImageSelectComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageSelectComponent_div_2_Template_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.addImage(_r1));
    })("ngModelChange", function ImageSelectComponent_div_2_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.inputModel = $event);
    })("ngModelChange", function ImageSelectComponent_div_2_Template_input_ngModelChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onUpdate(ctx_r14.inputModel));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageSelectComponent_div_2_ng_template_4_Template, 10, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.inputModel);
  }
}
class ImageSelectComponent {
  constructor(webService, modalService) {
    this.webService = webService;
    this.modalService = modalService;
    this.required = true;
    this.uuid = "";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // when input change, call update
    this.is_required = false;
    this.is_showing = true;
  }
  ngOnInit() {}
  load() {
    this.webService.list('images').subscribe(response => {
      if (response.status == 'success') {
        this.images = response.data;
      }
    });
  }
  addImage(newBlock) {
    this.modalService.open(newBlock, {
      size: "lg"
    });
    /**
     * Fetch images from server after opening the modal
    */
    this.load();
  }
  getImages(url) {
    this.modalService.dismissAll();
    this.onUpdate(url);
  }
  onUpdate($event) {
    console.log("Update:::", $event);
    this.onModelChange.emit($event);
  }
  static #_ = this.ɵfac = function ImageSelectComponent_Factory(t) {
    return new (t || ImageSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImageSelectComponent,
    selectors: [["image-select"]],
    inputs: {
      label: "label",
      required: "required",
      uuid: "uuid",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      inputModel: "inputModel"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      onModelChange: "onModelChange"
    },
    decls: 3,
    vars: 1,
    consts: [[1, "row"], [1, "col-lg-12", "d-flex"], ["style", "width:100%", 4, "ngIf"], [2, "width", "100%"], ["readonly", "", "type", "text", "autocomplete", "off", "placeholder", "", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["newImage", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "src", "click"]],
    template: function ImageSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageSelectComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 63033:
/*!****************************************************************************!*\
  !*** ./src/app/components/common/element/picker/image-picker.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePickerComponent: () => (/* binding */ ImagePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70997);






function ImagePickerComponent_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.data.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImagePickerComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ImagePickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImagePickerComponent_div_2_img_1_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImagePickerComponent_div_2_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.data.value != "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.data.value == "-");
  }
}
function ImagePickerComponent_div_3_ng_template_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImagePickerComponent_div_3_ng_template_6_div_9_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const image_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.getImages(image_r8.path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r8.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ImagePickerComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImagePickerComponent_div_3_ng_template_6_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const modal_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r6.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18)(7, "div", 19)(8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ImagePickerComponent_div_3_ng_template_6_div_9_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.images);
  }
}
function ImagePickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImagePickerComponent_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImagePickerComponent_div_3_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.addImage(_r4));
    })("ngModelChange", function ImagePickerComponent_div_3_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.inputModel = $event);
    })("ngModelChange", function ImagePickerComponent_div_3_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.onUpdate(ctx_r18.inputModel));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ImagePickerComponent_div_3_ng_template_6_Template, 10, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.inputModel)("id", ctx_r1.id)("value", ctx_r1.value);
  }
}
class ImagePickerComponent {
  constructor(webService, modalService) {
    this.webService = webService;
    this.modalService = modalService;
    this.required = true;
    this.type = "text";
    this.id = "";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // when input change, call update
    this.onModelDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // delete, call delete 
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  ngOnInit() {}
  load() {
    this.webService.list('images').subscribe(response => {
      if (response.status == 'success') {
        this.images = response.data;
      }
    });
  }
  addImage(newBlock) {
    this.modalService.open(newBlock, {
      size: "lg"
    });
    /**
     * Fetch images from server after opening the modal
    */
    this.load();
  }
  getImages(url) {
    this.modalService.dismissAll();
    this.onUpdate(url);
  }
  onUpdate($event) {
    this.data.value = $event;
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    console.log("Update Image:: ", this.data, $event);
    this.onModelChange.emit(this.data);
  }
  onDelete($event) {
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    this.onModelDelete.emit(this.data);
  }
  static #_ = this.ɵfac = function ImagePickerComponent_Factory(t) {
    return new (t || ImagePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImagePickerComponent,
    selectors: [["element-picker"]],
    inputs: {
      label: "label",
      groupid: "groupid",
      uuid: "uuid",
      required: "required",
      type: "type",
      id: "id",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      data: "data",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      onModelChange: "onModelChange",
      onModelDelete: "onModelDelete",
      onValidatorChange: "onValidatorChange"
    },
    decls: 4,
    vars: 2,
    consts: [[1, "row"], [1, "col-lg-12", "d-flex"], ["class", "", "style", "width:80px;height:80px;border:1px solid rgb(151, 149, 149);margin:10px", 4, "ngIf"], ["style", "width:100%", 4, "ngIf"], [1, "", 2, "width", "80px", "height", "80px", "border", "1px solid rgb(151, 149, 149)", "margin", "10px"], ["style", "width: 75px;", 3, "src", 4, "ngIf"], ["style", "text-align: center;margin-top: 30px;", 4, "ngIf"], [2, "width", "75px", 3, "src"], [2, "text-align", "center", "margin-top", "30px"], [2, "width", "100%"], ["href", "javascript:;", 1, "btn", "pull-right", 2, "float", "right", 3, "click"], [1, "ti", "ti-trash"], ["readonly", "", "type", "text", "autocomplete", "off", "placeholder", "write something...", 1, "form-control", 3, "ngModel", "id", "value", "click", "ngModelChange"], ["newImage", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "src", "click"]],
    template: function ImagePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImagePickerComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ImagePickerComponent_div_3_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2736:
/*!********************************************************************************!*\
  !*** ./src/app/components/common/element/text-editor/text-editor.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextEditorComponent: () => (/* binding */ TextEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 86882);






function TextEditorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextEditorComponent_div_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "quill-editor", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextEditorComponent_div_0_Template_quill_editor_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.inputModel = $event);
    })("onContentChanged", function TextEditorComponent_div_0_Template_quill_editor_onContentChanged_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "span", 6)(8, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "option", 8)(10, "option", 9)(11, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "option", 12)(14, "option", 8)(15, "option", 13)(16, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "button", 15)(19, "button", 16)(20, "button", 17)(21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "select", 19)(24, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "button", 21)(27, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "option", 8)(30, "option", 24)(31, "option", 25)(32, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "button", 27)(35, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.inputModel);
  }
}
class TextEditorComponent {
  constructor(webService) {
    this.webService = webService;
    this.required = true;
    this.type = "text";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // when input change, call update
    this.onModelDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // delete, call delete 
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  validate($event, form) {}
  onUpdate($event) {
    this.data.value = this.inputModel;
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    this.onModelChange.emit(this.data);
  }
  onDelete($event) {
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    this.onModelDelete.emit(this.data);
  }
  static #_ = this.ɵfac = function TextEditorComponent_Factory(t) {
    return new (t || TextEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TextEditorComponent,
    selectors: [["element-editor"]],
    inputs: {
      label: "label",
      groupid: "groupid",
      uuid: "uuid",
      data: "data",
      required: "required",
      type: "type",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      onModelChange: "onModelChange",
      onModelDelete: "onModelDelete",
      onValidatorChange: "onValidatorChange"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "", 4, "ngIf"], [1, ""], ["href", "javascript:;", 1, "btn", "pull-right", 2, "float", "right", 3, "click"], [1, "ti", "ti-trash"], [3, "ngModel", "ngModelChange", "onContentChanged"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"]],
    template: function TextEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TextEditorComponent_div_0_Template, 36, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditorComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5088:
/*!************************************************************************!*\
  !*** ./src/app/components/common/element/text/text-input.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInputComponent: () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);





function TextInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TextInputComponent_div_0_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextInputComponent_div_0_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.inputModel = $event);
    })("ngModelChange", function TextInputComponent_div_0_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onUpdate(ctx_r4.inputModel));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.type)("ngModel", ctx_r0.inputModel)("id", ctx_r0.groupid);
  }
}
class TextInputComponent {
  constructor(webService) {
    this.webService = webService;
    this.type = "text";
    this.class = "form-control";
    this.onModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // when input change, call update
    this.onModelDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // delete, call delete 
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  validate($event, form) {}
  onUpdate($event) {
    this.data.value = this.inputModel;
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    this.onModelChange.emit(this.data);
  }
  onDelete($event) {
    this.data.group_id = this.groupid;
    this.data.group_uuid = this.uuid;
    this.onModelDelete.emit(this.data);
  }
  static #_ = this.ɵfac = function TextInputComponent_Factory(t) {
    return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TextInputComponent,
    selectors: [["element-input"]],
    inputs: {
      label: "label",
      type: "type",
      readonly: "readonly",
      uuid: "uuid",
      data: "data",
      groupid: "groupid",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      onModelChange: "onModelChange",
      onModelDelete: "onModelDelete",
      stateChange: "stateChange",
      onValidatorChange: "onValidatorChange"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "", 4, "ngIf"], [1, ""], ["href", "javascript:;", 1, "btn", "pull-right", 2, "float", "right", 3, "click"], [1, "ti", "ti-trash"], ["autocomplete", "off", "placeholder", "write something...", 1, "form-control", 3, "type", "ngModel", "id", "ngModelChange"]],
    template: function TextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TextInputComponent_div_0_Template, 6, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22124:
/*!************************************************************!*\
  !*** ./src/app/components/common/input/input.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputComponent: () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70997);



class InputComponent {
  constructor() {
    this.info = "";
    this.required = true;
    this.type = "text";
    this.id = "";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDataModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.is_required = false;
  }
  onChangeInput() {
    this.inputModelChange.emit(this.inputModel);
    let data = {};
    data.name = this.id;
    data.value = this.inputModel;
    this.onDataModelChange.emit(data);
  }
  validate($event, form) {}
  static #_ = this.ɵfac = function InputComponent_Factory(t) {
    return new (t || InputComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputComponent,
    selectors: [["app-input"]],
    inputs: {
      readonly: "readonly",
      info: "info",
      required: "required",
      type: "type",
      id: "id",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      onDataModelChange: "onDataModelChange",
      onValidatorChange: "onValidatorChange"
    },
    decls: 3,
    vars: 9,
    consts: [["autocomplete", "off", 3, "type", "readonly", "ngModel", "id", "placeholder", "value", "ngModelChange"]],
    template: function InputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener($event) {
          return ctx.inputModel = $event;
        })("ngModelChange", function InputComponent_Template_input_ngModelChange_0_listener() {
          return ctx.onChangeInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("readonly", ctx.readonly)("ngModel", ctx.inputModel)("id", ctx.id)("placeholder", ctx.placeholder)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29287:
/*!********************************************************************************!*\
  !*** ./src/app/components/common/textarea-editor/textarea-editor.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAreaEditorComponent: () => (/* binding */ TextAreaEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 86882);






function TextAreaEditorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "quill-editor", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextAreaEditorComponent_div_0_Template_quill_editor_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.inputModel = $event);
    })("onContentChanged", function TextAreaEditorComponent_div_0_Template_quill_editor_onContentChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.logChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3)(3, "span", 4)(4, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "option", 6)(6, "option", 7)(7, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "option", 10)(10, "option", 6)(11, "option", 11)(12, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "button", 13)(15, "button", 14)(16, "button", 15)(17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "select", 17)(20, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "button", 19)(23, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "option", 6)(26, "option", 22)(27, "option", 23)(28, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "button", 25)(31, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.inputModel);
  }
}
class TextAreaEditorComponent {
  constructor(webService) {
    this.webService = webService;
    this.required = true;
    this.type = "text";
    this.id = "";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.is_required = false;
    this.is_showing = true;
  }
  logChange($event) {
    if ($event.html == undefined) {
      return;
    }
    this.inputModelChange.emit(this.inputModel);
  }
  static #_ = this.ɵfac = function TextAreaEditorComponent_Factory(t) {
    return new (t || TextAreaEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_0__.WebService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TextAreaEditorComponent,
    selectors: [["textarea-editor"]],
    inputs: {
      label: "label",
      required: "required",
      type: "type",
      id: "id",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      inputModel: "inputModel"
    },
    outputs: {
      inputModelChange: "inputModelChange"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "", 4, "ngIf"], [1, ""], [3, "ngModel", "ngModelChange", "onContentChanged"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"]],
    template: function TextAreaEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TextAreaEditorComponent_div_0_Template, 32, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_showing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditorComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 15782:
/*!******************************************************************!*\
  !*** ./src/app/components/common/textarea/textarea.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAreaComponent: () => (/* binding */ TextAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70997);



class TextAreaComponent {
  constructor() {
    this.required = true;
    this.type = "text";
    this.placeholder = "";
    this.value = "";
    this.class = "form-control";
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDataModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.validation = false;
    this.onValidatorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.is_required = false;
  }
  onChangeInput() {
    // this.inputModelChange.emit(this.inputModel)
    let data = {};
    data.name = this.id;
    data.value = this.inputModel;
    console.log("DataChanged:: ", data);
    this.onDataModelChange.emit(data);
  }
  validate($event, form) {}
  static #_ = this.ɵfac = function TextAreaComponent_Factory(t) {
    return new (t || TextAreaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TextAreaComponent,
    selectors: [["app-textarea"]],
    inputs: {
      required: "required",
      type: "type",
      id: "id",
      placeholder: "placeholder",
      value: "value",
      class: "class",
      inputModel: "inputModel",
      validation: "validation"
    },
    outputs: {
      inputModelChange: "inputModelChange",
      onDataModelChange: "onDataModelChange",
      onValidatorChange: "onValidatorChange"
    },
    decls: 2,
    vars: 7,
    consts: [["rows", "7", 3, "ngModel", "id", "placeholder", "value", "ngModelChange"]],
    template: function TextAreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextAreaComponent_Template_textarea_ngModelChange_0_listener() {
          return ctx.onChangeInput();
        })("ngModelChange", function TextAreaComponent_Template_textarea_ngModelChange_0_listener($event) {
          return ctx.inputModel = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputModel)("id", ctx.id)("placeholder", ctx.placeholder)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.value, "\n    ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99662:
/*!****************************************************!*\
  !*** ./src/app/shared/services/web/web.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebService: () => (/* binding */ WebService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ 57473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);



class WebService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(target, callback) {
    this.get(`get/${target}`, {}).subscribe(response => {
      console.log(response);
      if (response.status_code === 200) {
        console.log(response, 'response');
        callback(response.userMinistries, true);
      } else {
        console.error('Error fetching data');
        callback([], false);
      }
    }, error => {
      console.error('HTTP error:', error);
      callback([], false);
    });
  }
  getSongs(dataId) {
    return this.get(`ministries/${dataId}/songs`);
  }
  getbackup(dataId) {
    return this.get(`ministries/${dataId}/backup`);
  }
  deleteSong(songId, identifier, callback) {
    return this.get(`ministries/delete/${identifier}/songs/${songId}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  // delete(target, identifier, callback) {
  //   this.get(`cms/pages/delete/${target}/${identifier}`, {}).subscribe(response => {
  //     let status = false
  //     if (response.status == "success") {
  //       status = true
  //     }
  //     callback(response.data, status);
  //   }, (error: HttpErrorResponse) => callback(error, false));
  // }
  list(target) {
    return this.get(`cms/pages/fetch/${target}`);
  }
  create(target, body = {}) {
    return this.post(`create/${target}`, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      console.log('HTTP Response:', response);
    }));
  }
  update(target, body) {
    return this.post(`cms/pages/update/${target}`, body);
  }
  delete(target, identifier, callback) {
    this.get(`ministries/${identifier}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  postDelete(target, body = {}) {
    return this.post(`cms/pages/delete/${target}`, body);
  }
  fetch(target, identifier, callback) {
    this.get(`cms/pages/fetch/${target}/${identifier}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  images(callback) {
    this.get(`cms/pages/images/list`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  search(target, body) {
    return this.post(`cms/pages/search/${target}`, body);
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵWebService_BaseFactory;
    return function WebService_Factory(t) {
      return (ɵWebService_BaseFactory || (ɵWebService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WebService)))(t || WebService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WebService,
    factory: WebService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78543:
/*!**************************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2022/ngx-quill-config.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUILL_CONFIG_TOKEN: () => (/* binding */ QUILL_CONFIG_TOKEN),
/* harmony export */   QuillConfigModule: () => (/* binding */ QuillConfigModule),
/* harmony export */   defaultModules: () => (/* binding */ defaultModules),
/* harmony export */   provideQuillConfig: () => (/* binding */ provideQuillConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);


const defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

const QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config', {
  providedIn: 'root',
  factory: () => ({
    modules: defaultModules
  })
});

/**
 * This `NgModule` provides a global Quill config on the root level, e.g., in `AppModule`.
 * But this eliminates the need to import the entire `ngx-quill` library into the main bundle.
 * The `quill-editor` itself may be rendered in any lazy-loaded module, but importing `QuillModule`
 * into the `AppModule` will bundle the `ngx-quill` into the vendor.
 */
class QuillConfigModule {
  static forRoot(config) {
    return {
      ngModule: QuillConfigModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static #_ = this.ɵfac = function QuillConfigModule_Factory(t) {
    return new (t || QuillConfigModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: QuillConfigModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuillConfigModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
  }], null, null);
})();

/**
 * Provides Quill configuration at the root level:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideQuillConfig(...)]
 * });
 * ```
 */
const provideQuillConfig = config => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([{
  provide: QUILL_CONFIG_TOKEN,
  useValue: config
}]);

/*
 * Public API Surface of ngx-quill/config
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 86882:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2022/ngx-quill.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUILL_CONFIG_TOKEN: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN),
/* harmony export */   QuillConfigModule: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QuillConfigModule),
/* harmony export */   QuillEditorBase: () => (/* binding */ QuillEditorBase),
/* harmony export */   QuillEditorComponent: () => (/* binding */ QuillEditorComponent),
/* harmony export */   QuillModule: () => (/* binding */ QuillModule),
/* harmony export */   QuillService: () => (/* binding */ QuillService),
/* harmony export */   QuillViewComponent: () => (/* binding */ QuillViewComponent),
/* harmony export */   QuillViewHTMLComponent: () => (/* binding */ QuillViewHTMLComponent),
/* harmony export */   defaultModules: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules),
/* harmony export */   provideQuillConfig: () => (/* reexport safe */ ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.provideQuillConfig)
/* harmony export */ });
/* harmony import */ var _Users_macadmin_Desktop_LeviteFrontend_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 19369);
/* harmony import */ var ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quill/config */ 78543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 23380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 28610);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 72255);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 92378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 34155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 55824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 92887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 70997);












function QuillEditorComponent_ng_template_0_pre_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 3);
  }
}
function QuillEditorComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_ng_template_0_pre_0_Template, 1, 0, "pre", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.preserve)("ngIfElse", _r2);
  }
}
function QuillEditorComponent_ng_template_2_pre_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 3);
  }
}
function QuillEditorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_ng_template_2_pre_0_Template, 1, 0, "pre", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.preserve)("ngIfElse", _r2);
  }
}
function QuillEditorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
  }
}
const _c0 = [[["", "quill-editor-toolbar", ""]]];
const _c1 = ["[quill-editor-toolbar]"];
function QuillViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 1);
  }
}
function QuillViewComponent_pre_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pre", 1);
  }
}
const getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || 'html';
};
class QuillService {
  constructor(injector, config) {
    var _this = this;
    this.config = config;
    this.quill$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)( /*#__PURE__*/(0,_Users_macadmin_Desktop_LeviteFrontend_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.Quill) {
        // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
        // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
        // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
        const maybePatchedAddEventListener = _this.document.addEventListener;
        // There're 2 types of Angular applications:
        // 1) zone-full (by default)
        // 2) zone-less
        // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
        // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
        // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
        // this means the `zone.js` is not imported.
        // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
        // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
        _this.document.addEventListener =
        // eslint-disable-next-line @typescript-eslint/dot-notation
        _this.document['__zone_symbol__addEventListener'] || _this.document.addEventListener;
        const quillImport = yield __webpack_require__.e(/*! import() | quill */ "quill").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 20759, 19));
        _this.document.addEventListener = maybePatchedAddEventListener;
        _this.Quill = quillImport.default ? quillImport.default : quillImport;
      }
      // Only register custom options and modules once
      _this.config.customOptions?.forEach(customOption => {
        const newCustomOption = _this.Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        _this.Quill.register(newCustomOption, true, _this.config.suppressGlobalRegisterWarning);
      });
      return yield _this.registerCustomModules(_this.Quill, _this.config.customModules, _this.config.suppressGlobalRegisterWarning);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    if (!this.config) {
      this.config = {
        modules: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules
      };
    }
  }
  getQuill() {
    return this.quill$;
  }
  /**
   * Marked as internal so it won't be available for `ngx-quill` consumers, this is only
   * internal method to be used within the library.
   *
   * @internal
   */
  registerCustomModules(Quill, customModules, suppressGlobalRegisterWarning) {
    return (0,_Users_macadmin_Desktop_LeviteFrontend_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (Array.isArray(customModules)) {
        // eslint-disable-next-line prefer-const
        for (let {
          implementation,
          path
        } of customModules) {
          // The `implementation` might be an observable that resolves the actual implementation,
          // e.g. if it should be lazy loaded.
          if ((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.isObservable)(implementation)) {
            implementation = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(implementation);
          }
          Quill.register(path, implementation, suppressGlobalRegisterWarning);
        }
      }
      // Return `Quill` constructor so we'll be able to re-use its return value except of using
      // `map` operators, etc.
      return Quill;
    })();
  }
  static #_ = this.ɵfac = function QuillService_Factory(t) {
    return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: QuillService,
    factory: QuillService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})();
class QuillEditorBase {
  constructor() {
    this.required = false;
    this.customToolbarPosition = 'top';
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */
    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onNativeFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onNativeBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit
    this.preserve = false;
    this.toolbarPosition = 'top';
    this.subscription = null;
    this.quillSubscription = null;
    this.elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    this.cd = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.domSanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer);
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID);
    this.renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    this.zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(QuillService);
    this.valueGetter = (quillEditor, editorElement) => {
      let html = editorElement.querySelector('.ql-editor').innerHTML;
      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }
      let modelValue = html;
      const format = getFormat(this.format, this.service.config.format);
      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }
      return modelValue;
    };
    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      if (format === 'html') {
        const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
        if (sanitize) {
          value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
        }
        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }
      return value;
    };
    this.selectionChangeHandler = (range, oldRange, source) => {
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched;
      // only emit changes when there's any listener
      if (!this.onBlur.observed && !this.onFocus.observed && !this.onSelectionChanged.observed && !shouldTriggerOnModelTouched) {
        return;
      }
      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }
        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });
        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }
        this.cd.markForCheck();
      });
    };
    this.textChangeHandler = (delta, oldDelta, source) => {
      // only emit changes emitted by user interactions
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.editorElem.querySelector('.ql-editor').innerHTML;
      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }
      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange;
      // only emit changes when there's any listener
      if (!this.onContentChanged.observed && !shouldTriggerOnModelChange) {
        return;
      }
      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
        }
        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    };
    // eslint-disable-next-line max-len
    this.editorChangeHandler = (event, current, old, source) => {
      // only emit changes when there's any listener
      if (!this.onEditorChanged.observed) {
        return;
      }
      // only emit changes emitted by user interactions
      if (event === 'text-change') {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElem.querySelector('.ql-editor').innerHTML;
        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = this.defaultEmptyValue;
        }
        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };
  }
  static normalizeClassNames(classes) {
    const classList = classes.trim().split(' ');
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();
      if (trimmed) {
        prev.push(trimmed);
      }
      return prev;
    }, []);
  }
  ngOnInit() {
    this.preserve = this.preserveWhitespace;
    this.toolbarPosition = this.customToolbarPosition;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    }
    // The `quill-editor` component might be destroyed before the `quill` chunk is loaded and its code is executed
    // this will lead to runtime exceptions, since the code will be executed on DOM nodes that don't exist within the tree.
    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;
      if (beforeRender) {
        promises.push(beforeRender());
      }
      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
      const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === undefined) {
        modules.toolbar = ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.defaultModules.toolbar;
      }
      let placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;
      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }
      if (this.styles) {
        Object.keys(this.styles).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
      if (this.classes) {
        this.addClasses(this.classes);
      }
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;
      if (!bounds) {
        bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
      }
      let debug = this.debug;
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let readOnly = this.readOnly;
      if (!readOnly && this.readOnly !== false) {
        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
      }
      let defaultEmptyValue = this.defaultEmptyValue;
      // eslint-disable-next-line no-prototype-builtins
      if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
        defaultEmptyValue = this.service.config.defaultEmptyValue;
      }
      let scrollingContainer = this.scrollingContainer;
      if (!scrollingContainer && this.scrollingContainer !== null) {
        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
      }
      let formats = this.formats;
      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : undefined;
      }
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          bounds,
          debug: debug,
          formats: formats,
          modules,
          placeholder,
          readOnly,
          defaultEmptyValue,
          scrollingContainer: scrollingContainer,
          strict: this.strict,
          theme: this.theme || (this.service.config.theme ? this.service.config.theme : 'snow')
        });
        if (this.onNativeBlur.observed) {
          // https://github.com/quilljs/quill/issues/2186#issuecomment-533401328
          this.quillEditor.scroll.domNode.addEventListener('blur', () => this.onNativeBlur.next({
            editor: this.quillEditor,
            source: 'dom'
          }));
          // https://github.com/quilljs/quill/issues/2186#issuecomment-803257538
          this.quillEditor.getModule('toolbar').container.addEventListener('mousedown', e => e.preventDefault());
        }
        if (this.onNativeFocus.observed) {
          this.quillEditor.scroll.domNode.addEventListener('focus', () => this.onNativeFocus.next({
            editor: this.quillEditor,
            source: 'dom'
          }));
        }
        // Set optional link placeholder, Quill has no native API for it so using workaround
        if (this.linkPlaceholder) {
          const tooltip = this.quillEditor?.theme?.tooltip;
          const input = tooltip?.root?.querySelector('input[data-link]');
          if (input?.dataset) {
            input.dataset.link = this.linkPlaceholder;
          }
        }
      });
      if (this.content) {
        const format = getFormat(this.format, this.service.config.format);
        if (format === 'text') {
          this.quillEditor.setText(this.content, 'silent');
        } else {
          const newValue = this.valueSetter(this.quillEditor, this.content);
          this.quillEditor.setContents(newValue, 'silent');
        }
        this.quillEditor.getModule('history').clear();
      }
      // initialize disabled status based on this.disabled as default value
      this.setDisabledState();
      this.addQuillEventListeners();
      // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.
      if (!this.onEditorCreated.observed && !this.onValidatorChanged) {
        return;
      }
      // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
      requestAnimationFrame(() => {
        if (this.onValidatorChanged) {
          this.onValidatorChanged();
        }
        this.onEditorCreated.emit(this.quillEditor);
        this.onEditorCreated.complete();
      });
    });
  }
  ngOnDestroy() {
    this.dispose();
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    /* eslint-disable @typescript-eslint/dot-notation */
    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }
    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }
    if (changes.defaultEmptyValue) {
      this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
    }
    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;
      if (previousStyling) {
        Object.keys(previousStyling).forEach(key => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }
      if (currentStyling) {
        Object.keys(currentStyling).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
    }
    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;
      if (previousClasses) {
        this.removeClasses(previousClasses);
      }
      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    }
    // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
    // `debounceTime` operator or vice-versa remove it.
    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
    /* eslint-enable @typescript-eslint/dot-notation */
  }

  addClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.addClass(this.editorElem, c);
    });
  }
  removeClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }
  writeValue(currentValue) {
    // optional fix for https://github.com/angular/angular/issues/14988
    if (this.filterNull && currentValue === null) {
      return;
    }
    this.content = currentValue;
    if (!this.quillEditor) {
      return;
    }
    const format = getFormat(this.format, this.service.config.format);
    const newValue = this.valueSetter(this.quillEditor, currentValue);
    if (this.compareValues) {
      const currentEditorValue = this.quillEditor.getContents();
      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }
    if (currentValue) {
      if (format === 'text') {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }
      return;
    }
    this.quillEditor.setText('');
  }
  setDisabledState(isDisabled = this.disabled) {
    // store initial value to set appropriate disabled status after ViewInit
    this.disabled = isDisabled;
    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
      } else {
        if (!this.readOnly) {
          this.quillEditor.enable();
        }
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      }
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }
  validate() {
    if (!this.quillEditor) {
      return null;
    }
    const err = {};
    let valid = true;
    const text = this.quillEditor.getText();
    // trim text if wanted + handle special case that an empty editor contains a new line
    const textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);
    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength
      };
      valid = false;
    }
    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength
      };
      valid = false;
    }
    if (this.required && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }
    return valid ? null : err;
  }
  addQuillEventListeners() {
    this.dispose();
    // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
    // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
    // `zone.run` when we emit an event to the parent component.
    this.zone.runOutsideAngular(() => {
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
      this.subscription.add(
      // mark model as touched if editor lost focus
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'selection-change').subscribe(([range, oldRange, source]) => {
        this.selectionChangeHandler(range, oldRange, source);
      }));
      // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
      // will be invoked upon subscription and teardown.
      let textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'text-change');
      let editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(this.quillEditor, 'editor-change');
      if (typeof this.debounceTime === 'number') {
        textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(this.debounceTime));
        editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(this.debounceTime));
      }
      this.subscription.add(
      // update model if text changes
      textChange$.subscribe(([delta, oldDelta, source]) => {
        this.textChangeHandler(delta, oldDelta, source);
      }));
      this.subscription.add(
      // triggered if selection or text changed
      editorChange$.subscribe(([event, current, old, source]) => {
        this.editorChangeHandler(event, current, old, source);
      }));
    });
  }
  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  static #_ = this.ɵfac = function QuillEditorBase_Factory(t) {
    return new (t || QuillEditorBase)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: QuillEditorBase,
    inputs: {
      format: "format",
      theme: "theme",
      modules: "modules",
      debug: "debug",
      readOnly: "readOnly",
      placeholder: "placeholder",
      maxLength: "maxLength",
      minLength: "minLength",
      required: "required",
      formats: "formats",
      customToolbarPosition: "customToolbarPosition",
      sanitize: "sanitize",
      beforeRender: "beforeRender",
      styles: "styles",
      strict: "strict",
      scrollingContainer: "scrollingContainer",
      bounds: "bounds",
      customOptions: "customOptions",
      customModules: "customModules",
      trackChanges: "trackChanges",
      preserveWhitespace: "preserveWhitespace",
      classes: "classes",
      trimOnValidation: "trimOnValidation",
      linkPlaceholder: "linkPlaceholder",
      compareValues: "compareValues",
      filterNull: "filterNull",
      debounceTime: "debounceTime",
      defaultEmptyValue: "defaultEmptyValue",
      valueGetter: "valueGetter",
      valueSetter: "valueSetter"
    },
    outputs: {
      onEditorCreated: "onEditorCreated",
      onEditorChanged: "onEditorChanged",
      onContentChanged: "onContentChanged",
      onSelectionChanged: "onSelectionChanged",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onNativeFocus: "onNativeFocus",
      onNativeBlur: "onNativeBlur"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], null, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onNativeFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onNativeBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class QuillEditorComponent extends QuillEditorBase {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵQuillEditorComponent_BaseFactory;
    return function QuillEditorComponent_Factory(t) {
      return (ɵQuillEditorComponent_BaseFactory || (ɵQuillEditorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](QuillEditorComponent)))(t || QuillEditorComponent);
    };
  }();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillEditorComponent,
    selectors: [["quill-editor"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
    }, {
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [[3, "ngIf"], ["noPreserveTpl", ""], ["quill-editor-element", "", 4, "ngIf", "ngIfElse"], ["quill-editor-element", ""]],
    template: function QuillEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillEditorComponent_ng_template_0_Template, 1, 2, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuillEditorComponent_ng_template_2_Template, 1, 2, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuillEditorComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toolbarPosition !== "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.toolbarPosition === "top");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: ["[_nghost-%COMP%]{display:inline-block}"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.Emulated,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => QuillEditorComponent)
      }],
      selector: 'quill-editor',
      template: `
    <ng-template [ngIf]="toolbarPosition !== 'top'">
      <pre quill-editor-element *ngIf="preserve; else noPreserveTpl"></pre>
    </ng-template>
    <ng-content select="[quill-editor-toolbar]"></ng-content>
    <ng-template [ngIf]="toolbarPosition === 'top'">
      <pre quill-editor-element *ngIf="preserve; else noPreserveTpl"></pre>
    </ng-template>
    <ng-template #noPreserveTpl>
      <div quill-editor-element></div>
    </ng-template>
  `,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [":host{display:inline-block}\n"]
    }]
  }], null, null);
})();
class QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }
  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    } else if (!this.theme) {
      const theme = this.service.config.theme ? this.service.config.theme : 'snow';
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    }
    if (changes.content) {
      const content = changes.content.currentValue;
      const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
      this.innerHTML = sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }
  static #_ = this.ɵfac = function QuillViewHTMLComponent_Factory(t) {
    return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillViewHTMLComponent,
    selectors: [["quill-view-html"]],
    inputs: {
      content: "content",
      theme: "theme",
      sanitize: "sanitize"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
    template: function QuillViewHTMLComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.themeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
    styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view-html{border:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.preserve = false;
    this.quillSubscription = null;
    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      let content = value;
      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
          if (sanitize) {
            value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML, value);
          }
          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }
        quillEditor.setContents(content);
      }
    };
  }
  ngOnInit() {
    this.preserve = this.preserveWhitespace;
  }
  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      return;
    }
    this.quillSubscription = this.service.getQuill().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(Quill => {
      const promises = [this.service.registerCustomModules(Quill, this.customModules)];
      const beforeRender = this.beforeRender ?? this.service.config.beforeRender;
      if (beforeRender) {
        promises.push(beforeRender());
      }
      return Promise.all(promises).then(() => Quill);
    })).subscribe(Quill => {
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      modules.toolbar = false;
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      let debug = this.debug;
      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }
      let formats = this.formats;
      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
      }
      const theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          debug: debug,
          formats: formats,
          modules,
          readOnly: true,
          strict: this.strict,
          theme
        });
      });
      this.renderer.addClass(this.editorElem, 'ngx-quill-view');
      if (this.content) {
        this.valueSetter(this.quillEditor, this.content);
      }
      // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.
      if (!this.onEditorCreated.observers.length) {
        return;
      }
      // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.
      requestAnimationFrame(() => {
        this.onEditorCreated.emit(this.quillEditor);
        this.onEditorCreated.complete();
      });
    });
  }
  ngOnDestroy() {
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }
  static #_ = this.ɵfac = function QuillViewComponent_Factory(t) {
    return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuillViewComponent,
    selectors: [["quill-view"]],
    inputs: {
      format: "format",
      theme: "theme",
      modules: "modules",
      debug: "debug",
      formats: "formats",
      sanitize: "sanitize",
      beforeRender: "beforeRender",
      strict: "strict",
      content: "content",
      customModules: "customModules",
      customOptions: "customOptions",
      preserveWhitespace: "preserveWhitespace"
    },
    outputs: {
      onEditorCreated: "onEditorCreated"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [["quill-view-element", "", 4, "ngIf"], ["quill-view-element", ""]],
    template: function QuillViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuillViewComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuillViewComponent_pre_1_Template, 1, 0, "pre", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.preserve);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.preserve);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: [".ql-container.ngx-quill-view{border:0}\n"],
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'quill-view',
      template: `
<div quill-view-element *ngIf="!preserve"></div>
<pre quill-view-element *ngIf="preserve"></pre>
`,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      styles: [".ql-container.ngx-quill-view{border:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();
class QuillModule {
  static forRoot(config) {
    return {
      ngModule: QuillModule,
      providers: [{
        provide: ngx_quill_config__WEBPACK_IMPORTED_MODULE_1__.QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
  static #_ = this.ɵfac = function QuillModule_Factory(t) {
    return new (t || QuillModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: QuillModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-quill
 */
// Re-export everything from the secondary entry-point so we can be backwards-compatible
// and don't introduce breaking changes for consumers.

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_components_common_component_module_ts.js.map