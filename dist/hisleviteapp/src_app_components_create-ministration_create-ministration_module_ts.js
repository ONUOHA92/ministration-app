"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_create-ministration_create-ministration_module_ts"],{

/***/ 19505:
/*!*********************************************************************************!*\
  !*** ./src/app/components/create-ministration/create-ministration.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateMinstrationComponent: () => (/* binding */ CreateMinstrationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/model/pages.model */ 87316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_web_minstrytype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/minstrytype.service */ 60324);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/alerts/alert.component */ 75601);
















function CreateMinstrationComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 28)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.nameType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 3, data_r7.minDateType, "yyyy-MM-dd HH:mm:ss"));
  }
}
function CreateMinstrationComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function CreateMinstrationComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function CreateMinstrationComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Create Ministration Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_54_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const modal_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r8.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 33)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Create Ministration Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 34)(10, "div", 35)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_54_Template_ng_select_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.onNgSelectChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Sunday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Monday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Tuesday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Wednesday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Thrusday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Friday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ng-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Saturday");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 22)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Name Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_54_Template_ng_select_change_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.onNgSelectChangeService($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ng-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Sunday Srvices");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ng-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Special Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 35)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "ministration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_54_Template_app_input_inputModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.ministrationType.minDateType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 47)(41, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_54_Template_button_click_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Add Ministration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_54_Template_button_click_43_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const modal_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r8.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "datetime-local")("id", "meta_title")("value", ctx_r4.ministrationType.minDateType)("inputModel", ctx_r4.ministrationType.minDateType);
  }
}
function CreateMinstrationComponent_ng_template_56_ng_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r19.title);
  }
}
function CreateMinstrationComponent_ng_template_56_ng_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r20.label);
  }
}
function CreateMinstrationComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_56_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const modal_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r16.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 33)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "New Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 34)(10, "div", 50)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onDataModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_onDataModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.onDataModelChange($event));
    })("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.template.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 50)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Page Menu Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.template.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 35)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Page Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.template.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 50)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Page Parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ng-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateMinstrationComponent_ng_template_56_Template_ng_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.selectedParent = $event);
    })("change", function CreateMinstrationComponent_ng_template_56_Template_ng_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.onSelected($event, "parent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, CreateMinstrationComponent_ng_template_56_ng_option_26_Template, 2, 2, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 50)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Page Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_56_Template_ng_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.onSelected($event, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CreateMinstrationComponent_ng_template_56_ng_option_31_Template, 2, 2, "ng-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 35)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "SEO Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.template.seo_keyword_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 35)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.template.meta_title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 35)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Layout id");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r32.template.layout_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 35)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function CreateMinstrationComponent_ng_template_56_Template_app_input_inputModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.template.meta_description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 50)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Header Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_56_Template_ng_select_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.onSelected($event, "header_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "ng-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 50)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Footer Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_56_Template_ng_select_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.onSelected($event, "footer_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "ng-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 50)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Page Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CreateMinstrationComponent_ng_template_56_Template_ng_select_change_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.onSelected($event, "page_order"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "ng-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 47)(79, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_56_Template_button_click_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Add New Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_ng_template_56_Template_button_click_81_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const modal_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r16.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "title")("value", ctx_r6.template.title)("placeholder", "Enter Page Name")("inputModel", ctx_r6.template.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "page_label")("value", ctx_r6.template.label)("placeholder", "Enter Page Menu Label")("inputModel", ctx_r6.template.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("readonly", true)("id", "page_url")("value", ctx_r6.template.url)("placeholder", "Enter Page Url")("inputModel", ctx_r6.template.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r6.selectedParent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r6.template.seo_keyword_id)("placeholder", "seo_keyword_id")("inputModel", ctx_r6.template.seo_keyword_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r6.template.meta_title)("placeholder", "Enter Page Meta Title")("inputModel", ctx_r6.template.meta_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r6.template.layout_id)("placeholder", "Enter Page Meta Title")("inputModel", ctx_r6.template.layout_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "meta_description")("value", ctx_r6.template.meta_description)("placeholder", "Select layout")("inputModel", ctx_r6.template.meta_description);
  }
}
class CreateMinstrationComponent {
  constructor(modalService, utilService, userService, ministryTypeService, webService, toastService, songService) {
    this.modalService = modalService;
    this.utilService = utilService;
    this.userService = userService;
    this.ministryTypeService = ministryTypeService;
    this.webService = webService;
    this.toastService = toastService;
    this.songService = songService;
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.template = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
    this.levite = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Levite();
    this.ministrationType = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.MinistrationType();
    this.ministrationTypefetch = [];
    this.layout = new Array();
    this.songs = new Array();
    this.pages = new Array();
    // selectedMinistrationType: { [key: string]: boolean } = {};
    this.selectedMinistrationType = [];
    this.selectedMinistrationService = [];
    // purpose = {
    //   names: ['Sunday Services', 'Special Services',], // Example options
    //   name: '' // Initially empty; will hold the selected option
    // };
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.page = 1;
    /** ------------------------delete ------------------------ */
    // public changingValue: Subject<any> = new Subject();
    // public selectedid
    // public target
    // onDelete(data: any, target: any) {
    //   this.selectedid = data
    //   this.target = target
    //   this.changingValue.next({ status: "warning", message: "Are you sure you want to do this?" })
    // }
    // delete($event: Event) {
    //   let $this = this
    //   let status: any = $event
    //   if (status) {
    //     // send delete Request to server
    //     this.webService.delete(this.target, this.selectedid, function (response, status) {
    //       if (status) {
    //         $this.load()
    //         $this.toastService.success("Request Successfully completed", "User record was deleted")
    //       }
    //     })
    //   }
    // }
    // public changingValue: Subject<any> = new Subject();
    // public selectedid
    // public target
    // onDelete(data: any, target: any) {
    //   this.selectedid = data
    //   this.target = target
    //   this.changingValue.next({ status: "warning", message: "Are you sure you want to do this?" })
    // }
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.selectedParent = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
  }
  ngOnInit() {
    // this.load()
    // this.loadPages()
    this.loadSongs();
    this.fetchMinistryTypes();
  }
  // onSelectChange(selectedValue: string) {
  //   this.purpose.name = selectedValue; // Update the selected option 
  // }
  // onCheckboxChange(value: string) {
  //   const index = this.selectedMinistrationType.indexOf(value);
  //   if (index === -1) {
  //     // If not in the array, add it
  //     this.selectedMinistrationType.push(value);
  //   } else {
  //     // If already in the array, remove it
  //     this.selectedMinistrationType.splice(index, 1);
  //   }
  //   // Perform any other necessary actions based on the selected values
  // }
  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }
  // load() {
  //   let $this = this
  //   this.userService.all(function (result, status) {
  //     console.log(result, status)
  //     if (status) {
  //       $this.users = result
  //     }
  //   })
  // }
  // loadPages() {
  //   this.webService.list("template").subscribe(response => {
  //     if (response.status == 'success') {
  //       this.pages = response.data
  //       this.toastService.success("Request Successfully completed")
  //       this.modalService.dismissAll()
  //       console.log("Pages....", response, response.data, this.pages)
  //     }
  //   })
  // }
  // this is for ministration Type
  toggleSelection(event, type) {
    if (event.target.checked) {
      // If the checkbox is checked, add the type to the array
      this.selectedMinistrationType.push(type);
    } else {
      // If the checkbox is unchecked, remove the type from the array
      const index = this.selectedMinistrationType.indexOf(type);
      if (index !== -1) {
        this.selectedMinistrationType.splice(index, 1);
      }
    }
  }
  isSelected(type) {
    return this.selectedMinistrationType.includes(type);
  }
  // this is to Ministration Service
  toggleSelectionService(event, type) {
    if (event.target.checked) {
      // If the checkbox is checked, add the type to the array
      this.selectedMinistrationService.push(type);
    } else {
      // If the checkbox is unchecked, remove the type from the array
      const index = this.selectedMinistrationService.indexOf(type);
      if (index !== -1) {
        this.selectedMinistrationService.splice(index, 1);
      }
    }
  }
  isSelectedService(type) {
    return this.selectedMinistrationService.includes(type);
  }
  // this is coming from the selected page 
  onNgSelectChange(event) {
    const selectedValue = event; // Retrieve the selected value
    console.log(selectedValue); // Do something with the selected value
    // Assign the selected value to your model or perform further actions as needed
    this.ministrationType.days = selectedValue;
  }
  onNgSelectChangeService(event) {
    const selectedValue = event; // Retrieve the selected value
    console.log(selectedValue); // Do something with the selected value
    // Assign the selected value to your model or perform further actions as needed
    this.ministrationType.nameType = selectedValue;
  }
  loadSongs() {
    let $this = this;
    this.webService.all("all", function (result, status) {
      console.log(result, status);
      if (status) {
        console.log("Response data this is it:", result);
        $this.songs = result;
        console.log($this.songs, 'check it out');
      } else {
        console.error("Error fetching data");
      }
    });
  }
  onSubmit($vent) {
    const payload = {
      nameType: this.ministrationType.nameType,
      days: this.ministrationType.days,
      minDateType: this.ministrationType.minDateType
    };
    this.ministryTypeService.createMinistryType(payload).subscribe(data => {
      console.log(data, 'let see if the minstration is creating');
      this.toastService.success(data.message);
      this.modalService.dismissAll();
      this.fetchMinistryTypes();
      this.clearForm();
    }, error => {
      console.log(error);
    });
  }
  //Function to clear form controls
  clearForm() {
    this.ministrationType.days = '';
    this.ministrationType.nameType = "";
    this.ministrationType.minDateType = null;
  }
  // to get MinistrationType
  fetchMinistryTypes() {
    this.ministryTypeService.getSingleMinistryTypes().subscribe(data => {
      // this.ministryTypes = data.ministryTypes; 
      console.log(data, 'see data coming in');
      this.ministrationTypefetch = data.ministryTypes;
    }, error => {
      console.error(error);
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onSelected($event, target) {
    switch (target) {
      case "page_order":
        this.template.page_order = $event;
        break;
      case "layout":
        this.template.layout_id = $event;
        break;
      case "footer_position":
        this.template.footer_position = $event;
        break;
      case "header_position":
        this.template.header_position = $event;
        break;
      case "parent":
        this.template.parent = $event;
        this.glueUrl($event);
        break;
    }
  }
  onDelete(data, target) {
    this.selectedid = data;
    this.target = target;
    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?"
    });
  }
  delete($event) {
    let $this = this;
    let status = $event;
    if (status) {
      // send delete Request to server
      this.songService.deleteMinistry(this.selectedid).subscribe(response => {
        // console.log(response.message, 'introduction')
        $this.toastService.success(response.message);
        this.loadSongs();
      });
    }
  }
  glueUrl($event) {
    let pageArray = this.pages.filter(x => {
      return x.id == $event;
    });
    if (pageArray.length > 0) {
      let page = pageArray[0];
      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title);
      if (segments.length > 1) {
        segments[0] = parent;
      } else {
        segments.unshift(parent);
      }
      this.template.url = '/' + segments.join('/');
    }
  }
  onDataModelChange($event) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value);
      this.template.url = `/${url}`;
      this.template.title = $event.value;
    }
  }
  static #_ = this.ɵfac = function CreateMinstrationComponent_Factory(t) {
    return new (t || CreateMinstrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_minstrytype_service__WEBPACK_IMPORTED_MODULE_4__.MinistryTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_5__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_6__.SongService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: CreateMinstrationComponent,
    selectors: [["app-pages"]],
    decls: 59,
    vars: 10,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "btn", "ripple", "text-white", "bg-orange-color", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], [1, "form-control", "p-0", 3, "change"], ["value", "Sunday"], ["value", "Monday"], ["value", "Tuesday"], ["value", "Wednesday"], ["value", "Thrusday"], ["value", "Friday"], ["value", "Saturday"], ["value", "Sunday Services"], ["value", "Special Services"], [3, "type", "id", "value", "inputModel", "inputModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [3, "type", "readonly", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "form-control", "p-0", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "1"], ["value", "0"], ["value", "2"], ["value", "3"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], [3, "value"]],
    template: function CreateMinstrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Ministration type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateMinstrationComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](55);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Create Minstration type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div")(15, "div", 3)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "All Minstration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "select", 16)(25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 19)(38, "table", 20)(39, "thead")(40, "tr")(41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "name Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "ministration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, CreateMinstrationComponent_tr_48_Template, 9, 6, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](49, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 22)(51, "ngb-pagination", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function CreateMinstrationComponent_Template_ngb_pagination_pageChange_51_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, CreateMinstrationComponent_ng_template_52_Template, 1, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, CreateMinstrationComponent_ng_template_53_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, CreateMinstrationComponent_ng_template_54_Template, 45, 6, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, CreateMinstrationComponent_ng_template_56_Template, 83, 53, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "app-alert", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onTriggerChange", function CreateMinstrationComponent_Template_app_alert_onTriggerChange_58_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](49, 6, ctx.ministrationTypefetch, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtbWluaXN0cmF0aW9uL2NyZWF0ZS1taW5pc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1taW5pc3RyYXRpb24vY3JlYXRlLW1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBRE9JOztFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7QUNKUjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUUk7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ05SO0FEU0k7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDUFI7QURVSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEV0k7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7QUNUUjtBRFlJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ1ZSO0FEYUk7RUFDSSxzQkFBQTtBQ1hSO0FEY0k7RUFDSSxhQUFBO0FDWlI7QURlSTs7RUFFSSxZQUFBO0FDYlI7O0FEaUJBO0VBQ0ksb0NBQUE7QUNkSiIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tZG90czpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCB7XHJcblxyXG4gICAgZHAtZGF0ZS1waWNrZXIsXHJcbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzNiNDg2MztcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XHJcbiAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2UtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xyXG59IiwiLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIsXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2E4YWZjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjM2I0ODYzO1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xuICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 71986:
/*!******************************************************************************!*\
  !*** ./src/app/components/create-ministration/create-ministration.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateMinistrationModule: () => (/* binding */ CreateMinistrationModule)
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
/* harmony import */ var _create_ministration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-ministration.component */ 19505);
/* harmony import */ var _create_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-minstration.routing.module */ 47299);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _editor_admin_min_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/admin-min-editor.component */ 33718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);

// import { AllMinstrationRoutingModule } from './all-minstration.routing.module';



// import { LeafletModule } from '@asymmetrik/ngx-leaflet';






// import { AllMinistrationComponent } from './all-ministration.component';






// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";
class CreateMinistrationModule {
  static #_ = this.ɵfac = function CreateMinistrationModule_Factory(t) {
    return new (t || CreateMinistrationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CreateMinistrationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _create_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__.CreateMinRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CreateMinistrationModule, {
    declarations: [_create_ministration_component__WEBPACK_IMPORTED_MODULE_1__.CreateMinstrationComponent, _editor_admin_min_editor_component__WEBPACK_IMPORTED_MODULE_3__.AdminMinEditorComponent],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _create_minstration_routing_module__WEBPACK_IMPORTED_MODULE_2__.CreateMinRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 47299:
/*!*************************************************************************************!*\
  !*** ./src/app/components/create-ministration/create-minstration.routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateMinRoutingModule: () => (/* binding */ CreateMinRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _create_ministration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ministration.component */ 19505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);




// import { AllMinistrationComponent } from './all-ministration.component';
// import { MinEditorComponent } from './editor/mineditor.component';
const routes = [{
  path: '',
  children: [{
    path: 'list',
    component: _create_ministration_component__WEBPACK_IMPORTED_MODULE_0__.CreateMinstrationComponent
  }
  // {
  //     path: ':index/ministration',
  //     component: MinEditorComponent
  // },
  ]
}];

class CreateMinRoutingModule {
  static #_ = this.ɵfac = function CreateMinRoutingModule_Factory(t) {
    return new (t || CreateMinRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CreateMinRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreateMinRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33718:
/*!*************************************************************************************!*\
  !*** ./src/app/components/create-ministration/editor/admin-min-editor.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMinEditorComponent: () => (/* binding */ AdminMinEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _model_class_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/class-cms */ 35302);
/* harmony import */ var _model_pages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/pages.model */ 87316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/route.service */ 62473);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/backup.service */ 92305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);




















function AdminMinEditorComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_52_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](67);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.openLyricsModal(data_r16, _r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "View Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td")(7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td")(12, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td")(15, "div", 37)(16, "a", 38)(17, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_52_Template_i_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.Select2OpenEdit(_r5, data_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_52_Template_a_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.onDelete(data_r16._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_52_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.addExistingSong(data_r16._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", data_r16.lyricslink, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r16.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", data_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function AdminMinEditorComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Prev");
  }
}
function AdminMinEditorComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Next");
  }
}
function AdminMinEditorComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_58_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const modal_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r22.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 47)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Create Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "form", 48)(10, "div", 49)(11, "div", 50)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 52)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 52)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 52)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Lyrics Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 52)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 57)(32, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_58_Template_button_click_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.createSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Add New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_58_Template_button_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const modal_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r22.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r4.createSongForm);
  }
}
function AdminMinEditorComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_60_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const modal_r27 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r27.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 47)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Edit Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "form", 48)(10, "div", 49)(11, "div", 50)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 52)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 52)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 52)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Lyric link");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 52)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 57)(32, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_60_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.updateSubmit(ctx_r30.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Save Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_60_Template_button_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const modal_r27 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r27.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r6.updateSongForm);
  }
}
function AdminMinEditorComponent_ng_template_62_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", backupName_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](backupName_r34);
  }
}
function AdminMinEditorComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "New Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_62_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const modal_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r32.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 47)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Create Back up Singer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "form", 48)(10, "div", 49)(11, "div", 50)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "select", 66)(15, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, AdminMinEditorComponent_ng_template_62_option_17_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 57)(19, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_62_Template_button_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.createBackSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Add Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_62_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const modal_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r32.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r8.createBackupFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.backupNames);
  }
}
function AdminMinEditorComponent_ng_template_64_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", backupName_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](backupName_r41);
  }
}
function AdminMinEditorComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Back Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_64_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r43);
      const modal_r39 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r39.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 47)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Edit back up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "form", 48)(10, "div", 49)(11, "div", 50)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "select", 66)(15, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, AdminMinEditorComponent_ng_template_64_option_17_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 57)(19, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_64_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.updateBackupSubmit(ctx_r44.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Save Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_64_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r43);
      const modal_r39 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r39.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r10.updateBackupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.backupNames);
  }
}
function AdminMinEditorComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Lyrics Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_66_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48);
      const modal_r46 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r46.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 47)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Song Lyrics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 57)(12, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_ng_template_66_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48);
      const modal_r46 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r46.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r12.lyricsData);
  }
}
function AdminMinEditorComponent_tr_116_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AdminMinEditorComponent_tr_116_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AdminMinEditorComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AdminMinEditorComponent_tr_116_span_4_Template, 3, 0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AdminMinEditorComponent_tr_116_span_5_Template, 3, 0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td")(7, "div", 37)(8, "a", 38)(9, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_116_Template_i_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r54);
      const data_r50 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r53.Select2OpenEditBackUp(_r9, data_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_tr_116_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r54);
      const data_r50 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.onDeleteBackup(data_r50._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](data_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", data_r50.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !data_r50.status);
  }
}
function AdminMinEditorComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Prev");
  }
}
function AdminMinEditorComponent_ng_template_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, "Next");
  }
}
;
class AdminMinEditorComponent {
  constructor(galleryService, routeService, webService, songService, backupService, modalService, toastr, route, router, utilService, requestService, formBuilder) {
    this.galleryService = galleryService;
    this.routeService = routeService;
    this.webService = webService;
    this.songService = songService;
    this.backupService = backupService;
    this.modalService = modalService;
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.utilService = utilService;
    this.requestService = requestService;
    this.formBuilder = formBuilder;
    this.submitted = false;
    // roles: string[] = ['usesr', 'admin'];
    this.backupNames = [];
    this.layout = new Array();
    this.pages = new Array();
    this.songs = new Array();
    this.backup = new Array();
    this.song = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Songs();
    this.lyricsData = '';
    this.showElement = false;
    this.timeZone = src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__.TimeZone;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    })];
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.page = 1;
    /**
     * BLOCK SECTION OF THE EDITOR
     */
    this.block = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Blocks();
    this.blocks = new Array();
    this.new_Block = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Blocks();
    /**
     * GROUPS SECTION OF THE EDITOR
     */
    /**
     * Store selected block ID
    */
    this.selected_block = new _model_class_cms__WEBPACK_IMPORTED_MODULE_1__.Block();
    this.is_block_showing = false;
    this.group = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Groups();
    this.groups = new Array();
    this.new_Group = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Groups();
    /**
    * LAYOUT SECTION OF THE EDITOR
    */
    this.nlayout = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Layout();
    this.layouts = new Array();
    /**
     * Element Create Section
     */
    this.elementPayload = new ElementPayload();
    this.element = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Elements();
    /** ------------------------delete ------------------------ */
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.selectedParent = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Template();
    console.log("Route Segment Check: ", this.routeService.segment(2));
    const ministeryId = this.routeService.segment(2);
    this.route.queryParams.subscribe(params => {
      this.purposeName = params['name'];
      // Use the 'name' value as needed in your component
    });
  }

  ngOnInit() {
    this.fetchBackupNames();
    this.loadPageSong();
    this.loadPageBackup();
    this.createSongForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      lyricslink: [''],
      intro: [''],
      link: ['']
    });
    this.createBackupFrom = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.updateSongForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      lyricslink: [''],
      link: [''],
      intro: ['']
    });
    this.updateBackupForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
  }
  updateSubmit() {
    const ministryId = this.routeService.segment(2);
    const songId = this.editData._id.toString();
    let title = this.updateSongForm.controls['title'].value;
    let lyrics = this.updateSongForm.controls['lyrics'].value;
    let link = this.updateSongForm.controls['link'].value;
    let lyricslink = this.updateSongForm.controls['lyricslink'].value;
    let intro = this.updateSongForm.controls['intro'].value;
    // Now you can use these variables as needed
    const payload = {
      title,
      lyrics,
      link,
      lyricslink,
      intro
    };
    this.songService.updateSong(ministryId, payload, songId).subscribe(response => {
      console.log('Song updated successfully', response);
      this.toastr.success('Song updated successfully');
      this.modalService.dismissAll();
      this.loadPageSong();
      // You may want to navigate to the song list or reload the updated song data here
    }, error => {
      console.error('Error updating song', error);
    });
  }
  updateBackupSubmit() {
    const ministryId = this.routeService.segment(2);
    const backupId = this.editDataBackup._id.toString();
    let name = this.updateBackupForm.controls['name'].value;
    // Now you can use these variables as needed
    const payload = {
      name
    };
    this.backupService.updateBackup(ministryId, payload, backupId).subscribe(response => {
      console.log('Song updated successfully', response);
      this.toastr.success('BackUp updated successfully');
      this.modalService.dismissAll();
      this.loadPageBackup();
      // You may want to navigate to the song list or reload the updated song data here
    }, error => {
      console.error('Error updating song', error);
    });
  }
  addExistingSong(songId) {
    const ministryId = this.routeService.segment(2);
    this.songsId = songId;
    this.songService.existingSong(ministryId, this.songsId).subscribe(response => {
      console.log('Song updated successfully', response);
      this.toastr.success(response.message);
      this.loadPageSong();
    }, error => {
      console.error('Error adding song:', error);
      // Handle error response here
    });
  }

  fetchBackupNames() {
    this.backupService.getUsers().subscribe(response => {
      if (response && Array.isArray(response.users)) {
        this.backupNames = response.users.map(user => user.first_name);
      } else {
        console.error('Invalid response structure or missing data');
      }
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  createSubmit() {
    const ministryId = this.routeService.segment(2);
    let $this = this;
    let title = this.createSongForm.controls['title'].value;
    let lyrics = this.createSongForm.controls['lyrics'].value;
    let lyricslink = this.createSongForm.controls['lyricslink'].value;
    let link = this.createSongForm.controls['link'].value;
    let intro = this.createSongForm.controls['intro'].value;
    // Now you can use these variables as needed
    const payload = {
      title,
      lyrics,
      link,
      lyricslink,
      intro
    };
    this.songService.createSong(ministryId, payload).subscribe(response => {
      console.log('Song created successfully', response);
      $this.toastr.success("Song created successfully");
      // Reset the form after successful submission
      this.createSongForm.reset();
      this.modalService.dismissAll();
      this.loadPageSong();
    }, error => {
      console.error('Error creating song', error);
    });
  }
  createBackSubmit() {
    const ministryId = this.routeService.segment(2);
    let $this = this;
    let name = this.createBackupFrom.controls['name'].value;
    const payload = {
      name
    };
    this.backupService.createBackup(ministryId, payload).subscribe(response => {
      $this.toastr.success("Back up created successfully");
      // Reset the form after successful submission
      this.createBackupFrom.reset();
      this.modalService.dismissAll();
      this.loadPageBackup();
    }, error => {
      console.error('Error creating song', error);
    });
  }
  loadPageData() {
    let $this = this;
    let body = {
      target: {
        uuid: this.route.snapshot.paramMap.get('index')
      }
    };
    this.webService.search(`template`, body).subscribe(response => {
      if (response.status == "success") {
        if (response.data.length > 0) {
          console.log("changes ------------", response);
          this.template = response.data[0];
        }
      }
    });
  }
  loadPageSong() {
    // Get the data_id parameter from the URL
    const dataId = this.routeService.segment(2);
    console.log(dataId, 'data id');
    if (dataId) {
      this.webService.getSongs(dataId).subscribe(response => {
        if (response) {
          // Handle the songs data as needed   
          this.songs = response.songs;
        }
      }, error => {
        console.error(error);
      });
    } else {
      console.error('data._id parameter is not present in the URL');
    }
  }
  loadPageBackup() {
    const dataId = this.routeService.segment(2);
    console.log(dataId, 'data id');
    if (dataId) {
      this.webService.getbackup(dataId).subscribe(response => {
        console.log(response, 'check for response');
        if (response) {
          // Handle the songs data as needed
          console.log(response.backup, 'check for response backup');
          this.backup = response.backup;
          // console.log("Songs associated with the data_id: ", this.songs);
        }
      }, error => {
        console.error(error);
      });
    } else {
      console.error('data._id parameter is not present in the URL');
    }
  }
  Select2Open(select2modal) {
    console.log(select2modal, 'check for the modal 2');
    this.modalService.open(select2modal);
  }
  SelectBackUpOpen(select2Backmodal) {
    this.modalService.open(select2Backmodal);
  }
  openLyricsModal(data, selectLyricsmodal) {
    console.log(data, 'info');
    // if (lyrics) {
    this.lyricsData = data.lyrics;
    this.modalService.open(selectLyricsmodal, {
      size: 'lg'
    });
  }
  Select2OpenEdit(select2modal2, data) {
    this.editData = data;
    if (this.editData) {
      this.updateSongForm.patchValue({
        title: this.editData.title,
        intro: this.editData.intro,
        link: this.editData.link,
        lyricslink: this.editData.lyricslink,
        lyrics: this.editData.lyrics
      });
    }
    this.modalService.open(select2modal2);
  }
  Select2OpenEditBackUp(selectBackUp2modal, data) {
    this.editDataBackup = data;
    if (this.editDataBackup) {
      this.updateBackupForm.patchValue({
        name: this.editDataBackup.name
      });
    }
    this.modalService.open(selectBackUp2modal);
  }
  // loadSongs() {
  //   let $this = this;
  //   this.webService.all("all", function (result, status) {
  //     console.log(result, status);
  //     if (status) {
  //       console.log("Response data this is it:", result);
  //       $this.songs = result;
  //       console.log($this.songs, 'check it out')
  //     } else {
  //       console.error("Error fetching data");
  //     }
  //   });
  // }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  loadLayouts() {
    let $this = this;
    this.webService.all("layout", function (result, status) {
      console.log(result, status);
      if (status) {
        $this.layout = result;
      }
    });
  }
  // openImageModalRowDescription(image: Image) {
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
  //   this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  // }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter(val => event.image && val.id !== event.image.id);
    }
  }
  onButtonAfterHook(event) {
    if (!event || !event.button) {
      return;
    }
  }
  onCustomButtonBeforeHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }
  onCustomButtonAfterHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
  }
  addRandomImage() {
    const imageToCopy = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }

  getBlocks(id) {
    this.showElement = false;
    let body = {
      target: {
        template_id: id
      },
      total: 2
    };
    console.log('Block Response:: ', body, this.template);
    this.webService.search(`block`, body).subscribe(response => {
      console.log('Block Response:: ', response.data);
      if (response.status == "success") {
        this.blocks = response.data;
      }
    });
  }
  addBlock(newBlock) {
    this.modalService.open(newBlock);
  }
  onCreateBlock($event) {
    let id = this.routeService.segment(2);
    this.new_Block.status = 1;
    this.new_Block.template_id = this.template.id;
    this.webService.create(`block`, this.new_Block).subscribe(response => {
      if (response.status == "success") {
        if (response.data) {
          this.blocks = response.data;
        }
        this.toastr.success("Request Successfully completed");
        this.modalService.dismissAll();
      }
    });
  }
  onBlockSelected($event, type) {
    switch (type) {
      case "multiple":
        this.new_Block.multiple = $event;
        break;
      case "item_max":
        this.new_Block.item_max = $event;
        break;
    }
  }
  onSelected($event, key) {
    let $key = {};
    $key[key] = $event;
    this.onSave($key);
  }
  onSave($key) {
    if (!$key.value) {
      return;
    }
    let body = {};
    body.data = $key;
    body.target = {
      "id": this.template.id
    };
    console.log("Checking payload: ", body);
    this.webService.update(`template`, body).subscribe(response => {
      if (response.status == "success") {}
    }, error => {});
  }
  onInputUpdate($key) {
    if (!$key.value || !$key.name) {
      return;
    }
    let key = $key.name;
    let value = $key.value;
    let body = {};
    body.data = {};
    body.data[key] = value;
    body.target = {
      "id": this.template.id
    };
    console.log("Checking payload: ", body);
    this.webService.update(`template`, body).subscribe(response => {
      if (response.status == "success") {}
    }, error => {});
  }
  getGroups(block) {
    this.selected_block = block;
    this.block = block;
    this.showElement = true;
    console.log("Data value: ", this.selected_block);
    let body = {
      target: {
        block_id: this.block.id
      },
      total: 2
    };
    this.webService.search(`group`, body).subscribe(response => {
      if (response.status == "success") {
        this.groups = response.data;
        this.is_block_showing = true;
      }
      console.log("Data value: ", this.groups);
    }, error => {});
  }
  /**
   *
   * @param newGroup
   * @param blockid
   * @returns
   *
   * This should trigger new window to open if the max item is less than 1
   * else create similar group for multiple group blocks
   */
  addGroup(newGroup, blockid) {
    this.new_Group.block_id = blockid;
    this.new_Group.status = 1;
    if (this.selected_block.item_max > 1) {
      this.new_Group.name = this.selected_block.block_name;
      this.onCreateGroup("");
      return;
    }
    this.modalService.open(newGroup);
  }
  onCreateGroup($event) {
    this.webService.create(`group`, this.new_Group).subscribe(response => {
      if (response.status == 'success') {
        this.selected_block.groups = response.data;
        this.groups = response.data;
        this.toastr.success("Request Successfully completed");
        this.modalService.dismissAll();
        this.getGroups(this.selected_block);
      }
    });
  }
  getLayouts() {
    let $this = this;
    this.webService.all(`layout`, function (result, status) {
      console.log(result, status);
      if (status) {
        $this.layouts = result;
      }
    });
  }
  addElement(newElement, group_id) {
    this.elementPayload.group_id = group_id;
    this.elementPayload.value = "-";
    this.modalService.open(newElement);
  }
  onCreateElement($event) {
    this.webService.create('element', this.elementPayload).subscribe(response => {
      if (response.status == "success") {
        this.toastr.success("Request successfully Completed");
        this.getGroups(this.block);
        this.modalService.dismissAll();
      }
    });
  }
  elementEditor() {}
  onElementSelected($event, type) {
    let value = $event;
    this.elementPayload.type = value;
  }
  /** ------------------------On New Methods ------------------------ */
  onReceivedUpdate($event) {
    console.log("Changes to app:", $event);
    if (!$event.group_id || !$event.value) {
      this.toastr.info("Request failed due to an invalid payload");
      return;
    }
    /**
     * send request to server, server should look
     * for the element in the group and update it
     */
    const body = {};
    body.target = {
      uuid: $event.group_uuid
    };
    body.data = $event;
    this.webService.update('group', body).subscribe(response => {
      if (response.status == "success") {}
      console.log("Response::", response);
    });
  }
  onReceivedDelete($event) {
    console.log("Delete to app:", $event);
    if (!$event.group_id || !$event.value) {
      this.toastr.info("Request failed due to an invalid payload");
      return;
    }
    /**
     * send request to server, server should look
     * for the element in the group and update it
     */
    const body = {};
    body.target = {
      uuid: $event.group_uuid
    };
    body.data = $event;
    this.webService.postDelete('element', body).subscribe(response => {
      if (response.status == "success") {
        this.getGroups(this.block);
      }
      console.log("Response::", response);
    });
  }
  // public ministryId: any
  onDelete(data, target) {
    this.songId = data;
    // this.target = target
    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?"
      // ministryId: this.ministryId // Add ministryId to the data you're passing
    });
  }

  delete($event) {
    let $this = this;
    let status = $event;
    const ministryId = this.routeService.segment(2);
    if (status) {
      // send delete Request to server
      this.songService.deleteSong(ministryId, this.songId).subscribe(response => {
        $this.toastr.success("Request Successfully completed");
        this.loadPageSong();
      });
    }
  }
  onDeleteBackup(data) {
    this.backupId = data;
    console.log(this.backupId);
    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?"
      // ministryId: this.ministryId // Add ministryId to the data you're passing
    });
  }

  backDelete($event) {
    let $this = this;
    let status = $event;
    const ministryId = this.routeService.segment(2);
    if (status) {
      // send delete Request to server
      this.backupService.deleteBackup(ministryId, this.backupId).subscribe(response => {
        $this.toastr.success("Request Successfully completed");
        this.loadPageBackup();
      });
    }
  }
  handleAlertChange(event) {
    this.delete(event);
    this.backDelete(event);
  }
  getGroupIDs() {
    // this.group_ids = [];
    // this.selected_block.groups.forEach(group => {
    //   this.group_ids.push(group.id)
    // })
    // return this.group_ids;
  }
  /**
   * This is the event received from on delete element state
   *
   * @param $event
   */
  onReceiveElementInputState($event) {
    console.log("Response Received:: --->>>>>> ", $event);
    let $this = this;
    let body = {
      target: {
        block_id: this.selected_block.id
      },
      total: 2
    };
    this.webService.search(`group`, body).subscribe(response => {
      console.log("Response Data for Groups:: onReceiveElementInputState --->>>> ", response, response.status, this.selected_block);
      if (response.status == 'success') {
        $this.selected_block.groups = $this.groups = response.data;
        $this.is_block_showing = true;
      }
    });
  }
  /**        --------------------- */
  onSelectChange($event, target) {
    let payload = {};
    switch (target) {
      case "page_order":
        payload = {
          name: 'page_order',
          value: $event
        };
        break;
      case "layout":
        payload = {
          name: 'layout_id',
          value: $event
        };
        break;
      case "footer_position":
        payload = {
          name: 'footer_position',
          value: $event
        };
        break;
      case "header_position":
        payload = {
          name: 'header_position',
          value: $event
        };
        break;
      case "parent":
        payload.parent = $event;
        break;
    }
    // send request to server
    // console.log("Checking Select Data", payload)
    this.onInputUpdate(payload);
  }
  glueUrl($event) {
    let pageArray = this.pages.filter(x => {
      return x.id == $event;
    });
    if (pageArray.length > 0) {
      let page = pageArray[0];
      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title);
      if (segments.length >= 1) {
        segments[0] = parent;
      } else {
        segments.unshift(parent);
      }
      let url = '/' + segments.join('/');
      this.template.url = url;
    }
    return this.template.url;
  }
  onDataModelChange($event) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value);
      this.template.url = `/${url}`;
      this.template.title = $event.value;
    }
  }
  static #_ = this.ɵfac = function AdminMinEditorComponent_Factory(t) {
    return new (t || AdminMinEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__.BackupService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AdminMinEditorComponent,
    selectors: [["app-editor"]],
    inputs: {
      lyricsData: "lyricsData"
    },
    decls: 122,
    vars: 20,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], ["select2modal2", ""], ["select2Backmodal", ""], ["selectBackUp2modal", ""], ["selectLyricsmodal", ""], [3, "status", "onTriggerChange"], [1, "container", "mt-3"], ["type", "button", 1, "btn", "bg-orange-color", "text-white", "btn-icon-text", "my-2", "mr-2", 3, "click"], [1, "fe", "fe-download", "mr-2"], [1, "border-bottom"], [1, "custom-button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "fa", "fa-eye"], [1, "button-list"], [1, "btn"], [1, "ti", "ti-pencil", 3, "click"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-trash"], [1, "ti", "ti-plus"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-12", "mt-2"], ["formControlName", "title", "type", "text", "value", "", "placeholder", "Enter song title", 1, "form-control"], [1, "col-lg-12", "mt-4"], ["formControlName", "intro", "type", "text", "value", "", "placeholder", "Enter intro of the song", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", "placeholder", "Enter song link", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", "placeholder", "Enter lyrics link", 1, "form-control"], ["formControlName", "lyrics", "placeholder", "Enter song lyric", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["formControlName", "title", "type", "text", "value", "", 1, "form-control"], ["formControlName", "intro", "type", "text", "value", "", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", 1, "form-control"], ["formControlName", "lyrics", 1, "form-control"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", 3, "click"], ["formControlName", "name", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, ""], [1, "text-center"], ["class", "label text-muted d-flex", 4, "ngIf"], [1, "label", "text-muted", "d-flex"], [1, "dot-label", "bg-gray-300", "mr-1"]],
    template: function AdminMinEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](59);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " New Songs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div")(15, "div", 3)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "All List of User songs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "select", 16)(25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 17)(36, "table", 18)(37, "thead")(38, "tr")(39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Lyric");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Lyric Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, AdminMinEditorComponent_tr_52_Template, 22, 4, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 20)(55, "ngb-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function AdminMinEditorComponent_Template_ngb_pagination_pageChange_55_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, AdminMinEditorComponent_ng_template_56_Template, 1, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, AdminMinEditorComponent_ng_template_57_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, AdminMinEditorComponent_ng_template_58_Template, 36, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, AdminMinEditorComponent_ng_template_60_Template, 36, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, AdminMinEditorComponent_ng_template_62_Template, 23, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, AdminMinEditorComponent_ng_template_64_Template, 23, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, AdminMinEditorComponent_ng_template_66_Template, 14, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "app-alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onTriggerChange", function AdminMinEditorComponent_Template_app_alert_onTriggerChange_68_listener($event) {
          return ctx.handleAlertChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 30)(70, "div", 0)(71, "div")(72, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Details of Back up");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](74, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 3)(76, "div", 4)(77, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminMinEditorComponent_Template_button_click_77_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](63);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.SelectBackUpOpen(_r7));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, " Backup Singer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 7)(81, "div", 8)(82, "div", 9)(83, "div", 10)(84, "div")(85, "div", 3)(86, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "All List of User Backup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 12)(89, "div", 13)(90, "div", 14)(91, "div", 15)(92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "select", 16)(95, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 17)(106, "table", 18)(107, "thead")(108, "tr")(109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "Name of backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](116, AdminMinEditorComponent_tr_116_Template, 12, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](117, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 20)(119, "ngb-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function AdminMinEditorComponent_Template_ngb_pagination_pageChange_119_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, AdminMinEditorComponent_ng_template_120_Template, 1, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](121, AdminMinEditorComponent_ng_template_121_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Details of Minstration ( ", ctx.purposeName, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](53, 12, ctx.songs, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("status", ctx.changingValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](117, 16, ctx.backup, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe],
    styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n\n.show_view_block[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 190px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n\n  border: none;\n  color: white;\n  padding: 8px 14px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition-duration: 0.4s;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: rgb(155, 104, 9) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtbWluaXN0cmF0aW9uL2VkaXRvci9hZG1pbi1taW4tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtbWluaXN0cmF0aW9uL2VkaXRvci9hZG1pbi1taW4tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUNEUjtBREtJO0VBQ0ksaUJBQUE7QUNIUjtBRE1JOzs7O0VBSUksa0NBQUE7QUNKUjs7QURRQTtFQUNJLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUNMSjs7QURRQTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTEo7O0FEUUE7RUFDSSw2Q0FBQTtBQ0xKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuXHJcbiAgICAub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5idG4uYnRuLXJvdW5kZWQuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nLXNlbGVjdCxcclxuICAgIC5uZy1zZWxlY3QgZGl2LFxyXG4gICAgLm5nLXNlbGVjdCBpbnB1dCxcclxuICAgIC5uZy1zZWxlY3Qgc3BhbiB7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItbG9jayAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MHB4LCAyNHB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hvd192aWV3X2Jsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2UtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTA0LCA5KSAhaW1wb3J0YW50O1xyXG59IiwiOjpuZy1kZWVwIC5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLmJ0bi5idG4tcm91bmRlZC5idG4tZGFuZ2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCxcbjo6bmctZGVlcCAubmctc2VsZWN0IGRpdixcbjo6bmctZGVlcCAubmctc2VsZWN0IGlucHV0LFxuOjpuZy1kZWVwIC5uZy1zZWxlY3Qgc3BhbiB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWxvY2sgLmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgsIDI0cHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLnNob3dfdmlld19ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE5MHB4O1xufVxuXG4uY3VzdG9tLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NSwgMTA0LCA5KSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class ElementPayload {
  constructor() {
    this.status = 1;
  }
}

/***/ }),

/***/ 35302:
/*!**************************************************************************!*\
  !*** ./src/app/components/create-ministration/editor/model/class-cms.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Block: () => (/* binding */ Block),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
class Page {
  constructor() {
    this.blocks = new Array();
  }
}
class Block {
  constructor() {
    this.groups = new Array();
  }
}
class Group {
  constructor() {
    this.elements = new Array();
  }
}
class Element {}

/***/ }),

/***/ 87316:
/*!****************************************************************************!*\
  !*** ./src/app/components/create-ministration/editor/model/pages.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backup: () => (/* binding */ Backup),
/* harmony export */   Blocks: () => (/* binding */ Blocks),
/* harmony export */   Elements: () => (/* binding */ Elements),
/* harmony export */   Groups: () => (/* binding */ Groups),
/* harmony export */   Images: () => (/* binding */ Images),
/* harmony export */   Layout: () => (/* binding */ Layout),
/* harmony export */   Levite: () => (/* binding */ Levite),
/* harmony export */   MinistrationType: () => (/* binding */ MinistrationType),
/* harmony export */   Songs: () => (/* binding */ Songs),
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
class Template {}
class Layout {}
class Blocks {}
class Groups {}
class Elements {}
class Images {}
class MinistrationType {}
class Levite {}
class Songs {}
class Backup {}

/***/ })

}]);
//# sourceMappingURL=src_app_components_create-ministration_create-ministration_module_ts.js.map