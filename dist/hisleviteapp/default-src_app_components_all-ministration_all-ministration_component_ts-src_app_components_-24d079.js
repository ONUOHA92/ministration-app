"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["default-src_app_components_all-ministration_all-ministration_component_ts-src_app_components_-24d079"],{

/***/ 35993:
/*!***************************************************************************!*\
  !*** ./src/app/components/all-ministration/all-ministration.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllMinistrationComponent: () => (/* binding */ AllMinistrationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/model/pages.model */ 84541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/alerts/alert.component */ 75601);

















function AllMinistrationComponent_tr_49_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_tr_49_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onDelete(data_r7._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/ministration", a1, "ministration"];
};
function AllMinistrationComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 26)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td")(11, "div", 27)(12, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, AllMinistrationComponent_tr_49_a_14_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.ministrationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.ministrationService);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 6, data_r7.ministrationDate, "yyyy-MM-dd "));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c0, data_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
  }
}
function AllMinistrationComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function AllMinistrationComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function AllMinistrationComponent_ng_template_54_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", name_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", name_r16, " ");
  }
}
function AllMinistrationComponent_ng_template_54_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49)(1, "label", 50)(2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_54_div_23_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const type_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.toggleSelection($event, type_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r17 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", type_r17)("name", "ministrationType" + type_r17)("checked", ctx_r14.isSelected(type_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r17, " ");
  }
}
function AllMinistrationComponent_ng_template_54_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49)(1, "label", 50)(2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_54_div_28_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const type_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.toggleSelectionService($event, type_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r20 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", type_r20)("name", "ministrationService" + type_r20)("checked", ctx_r15.isSelectedService(type_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r20, " ");
  }
}
function AllMinistrationComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Ministration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_54_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const modal_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r12.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 36)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Ministration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 37)(10, "div", 38)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Ministration Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_54_Template_select_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.onSelectChange($event.target.value));
    })("ngModelChange", function AllMinistrationComponent_ng_template_54_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.levite.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, AllMinistrationComponent_ng_template_54_option_14_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 38)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "ministration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_54_Template_app_input_inputModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.levite.ministrationDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 42)(20, "div", 43)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Ministration Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AllMinistrationComponent_ng_template_54_div_23_Template, 4, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 42)(25, "div", 43)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Ministration Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AllMinistrationComponent_ng_template_54_div_28_Template, 4, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 45)(30, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_54_Template_button_click_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Add Ministration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_54_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const modal_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r12.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.levite.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.purpose.names);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "date")("id", "meta_title")("value", ctx_r4.levite.ministrationDate)("inputModel", ctx_r4.levite.ministrationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.ministrationTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.ministrationServices);
  }
}
function AllMinistrationComponent_ng_template_56_ng_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r33.title);
  }
}
function AllMinistrationComponent_ng_template_56_ng_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r34.label);
  }
}
function AllMinistrationComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_56_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const modal_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r30.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 36)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "New Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 37)(10, "div", 42)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onDataModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_onDataModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.onDataModelChange($event));
    })("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.template.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 42)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Page Menu Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.template.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 38)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Page Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "app-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.template.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 42)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Page Parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ng-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AllMinistrationComponent_ng_template_56_Template_ng_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.selectedParent = $event);
    })("change", function AllMinistrationComponent_ng_template_56_Template_ng_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.onSelected($event, "parent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, AllMinistrationComponent_ng_template_56_ng_option_26_Template, 2, 2, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 42)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Page Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_56_Template_ng_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.onSelected($event, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AllMinistrationComponent_ng_template_56_ng_option_31_Template, 2, 2, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 38)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "SEO Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.template.seo_keyword_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 38)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r45.template.meta_title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 38)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Layout id");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.template.layout_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 38)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "app-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AllMinistrationComponent_ng_template_56_Template_app_input_inputModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.template.meta_description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 42)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Header Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_56_Template_ng_select_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.onSelected($event, "header_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 42)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Footer Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_56_Template_ng_select_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.onSelected($event, "footer_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 42)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Page Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllMinistrationComponent_ng_template_56_Template_ng_select_change_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r50.onSelected($event, "page_order"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 45)(79, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_56_Template_button_click_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Add New Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllMinistrationComponent_ng_template_56_Template_button_click_81_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const modal_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r30.close("Close click"));
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
class AllMinistrationComponent {
  constructor(modalService, utilService, userService, webService, toastService, songService, authService) {
    this.modalService = modalService;
    this.utilService = utilService;
    this.userService = userService;
    this.webService = webService;
    this.toastService = toastService;
    this.songService = songService;
    this.authService = authService;
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.template = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
    this.levite = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Levite();
    this.layout = new Array();
    this.songs = new Array();
    this.ministration = new Array();
    this.pages = new Array();
    this.ministrationTypes = ["Worship", "Praise", "Hymn"];
    this.ministrationServices = ["First Service", "Second Service"];
    // selectedMinistrationType: { [key: string]: boolean } = {};
    this.selectedMinistrationType = [];
    this.selectedMinistrationService = [];
    this.purpose = {
      names: ['Sunday Services', 'Special Services'],
      name: '' // Initially empty; will hold the selected option
    };

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
    const user = this.authService.currentUser();
    this.isAdmin = user.is_Admin === 1;
  }
  ngOnInit() {
    // this.load()
    // this.loadPages()
    this.loadSongs();
    this.loadMinistrationWithSongsBackup();
  }
  onSelectChange(selectedValue) {
    this.purpose.name = selectedValue; // Update the selected option 
  }
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
  loadMinistrationWithSongsBackup() {
    this.songService.getAllMinistration().subscribe(data => {
      this.ministration = data.allMinistries;
      console.log(this.ministration, 'load minstrations all');
    }, error => {
      console.error('Error fetching All ministration:', error);
      // Handle error here
    });
  }

  onSubmit($vent) {
    const payload = {
      name: this.levite.name,
      ministrationType: this.selectedMinistrationType,
      ministrationDate: this.levite.ministrationDate,
      ministrationService: this.selectedMinistrationService,
      backup: this.levite.backup,
      songs: this.levite.songs
    };
    console.log(payload);
    this.webService.create('ministries', payload).subscribe(response => {
      console.log(response);
      if (response.status_code) {
        this.toastService.success(response.message);
        this.modalService.dismissAll();
        this.clearForm();
        this.loadSongs();
      }
    });
  }
  //Function to clear form controls
  clearForm() {
    this.levite.name = '';
    this.selectedMinistrationType = [];
    this.levite.ministrationDate = null;
    this.selectedMinistrationService = [];
    this.levite.backup = [];
    this.levite.songs = [];
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
        this.loadMinistrationWithSongsBackup();
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
  static #_ = this.ɵfac = function AllMinistrationComponent_Factory(t) {
    return new (t || AllMinistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AllMinistrationComponent,
    selectors: [["app-pages"]],
    decls: 59,
    vars: 6,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [1, "button-list"], [1, "btn", 3, "routerLink"], ["href", "javascript:;", "class", "btn", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], ["id", "title", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "type", "id", "value", "inputModel", "inputModelChange"], [1, "col-lg-6", "mt-4"], [1, "form-group"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [3, "value"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 3, "id", "name", "checked", "change"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [3, "type", "readonly", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "form-control", "p-0", 3, "ngModel", "ngModelChange", "change"], [1, "form-control", "p-0", 3, "change"], ["value", "1"], ["value", "0"], ["value", "2"], ["value", "3"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"]],
    template: function AllMinistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " All Users Ministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div")(12, "div", 3)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "All Users Minstration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "select", 14)(22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 17)(35, "table", 18)(36, "thead")(37, "tr")(38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Ministration Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Ministration Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Ministration Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "ministration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, AllMinistrationComponent_tr_49_Template, 15, 11, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 20)(51, "ngb-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AllMinistrationComponent_Template_ngb_pagination_pageChange_51_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, AllMinistrationComponent_ng_template_52_Template, 1, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, AllMinistrationComponent_ng_template_53_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, AllMinistrationComponent_ng_template_54_Template, 34, 10, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, AllMinistrationComponent_ng_template_56_Template, 83, 53, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "app-alert", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onTriggerChange", function AllMinistrationComponent_Template_app_alert_onTriggerChange_58_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ministration);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbGwtbWluaXN0cmF0aW9uL2FsbC1taW5pc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2FsbC1taW5pc3RyYXRpb24vYWxsLW1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBRE9JOztFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7QUNKUjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUUk7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ05SO0FEU0k7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDUFI7QURVSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEV0k7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7QUNUUjtBRFlJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ1ZSO0FEYUk7RUFDSSxzQkFBQTtBQ1hSO0FEY0k7RUFDSSxhQUFBO0FDWlI7QURlSTs7RUFFSSxZQUFBO0FDYlI7O0FEaUJBO0VBQ0ksb0NBQUE7QUNkSiIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tZG90czpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCB7XHJcblxyXG4gICAgZHAtZGF0ZS1waWNrZXIsXHJcbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzNiNDg2MztcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XHJcbiAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcclxuICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2UtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xyXG59IiwiLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIsXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2E4YWZjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjM2I0ODYzO1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xuICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 57071:
/*!***************************************************************************!*\
  !*** ./src/app/components/all-ministration/editor/mineditor.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinEditorComponent: () => (/* binding */ MinEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _model_class_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/class-cms */ 19410);
/* harmony import */ var _model_pages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/pages.model */ 84541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/route.service */ 62473);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/backup.service */ 92305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-quill */ 86882);
/* harmony import */ var _elements_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/accordion/accordion.component */ 88656);























function MinEditorComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_17_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Create Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "form", 35)(10, "div", 36)(11, "div", 37)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 39)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 39)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 39)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Lyrics Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 39)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 44)(32, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_17_Template_button_click_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.createSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Add New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_17_Template_button_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r13.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.createSongForm);
  }
}
function MinEditorComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_19_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const modal_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r18.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Edit Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "form", 35)(10, "div", 36)(11, "div", 37)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 39)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 39)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 39)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Lyric link");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 39)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "quill-editor", 51)(31, "div", 52)(32, "span", 53)(33, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "option", 55)(35, "option", 56)(36, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "option", 59)(39, "option", 55)(40, "option", 60)(41, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "button", 62)(44, "button", 63)(45, "button", 64)(46, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "select", 66)(49, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "button", 68)(52, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "option", 55)(55, "option", 71)(56, "option", 72)(57, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "button", 74)(60, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 44)(62, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_19_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.updateSubmit(ctx_r21.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Save Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_19_Template_button_click_64_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const modal_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r18.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r3.updateSongForm);
  }
}
function MinEditorComponent_ng_template_21_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", backupName_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", backupName_r25, " ");
  }
}
function MinEditorComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_21_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const modal_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r23.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Create Back up Singer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "form", 35)(10, "div", 36)(11, "div", 37)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "select", 77)(15, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, MinEditorComponent_ng_template_21_option_17_Template, 2, 2, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 44)(19, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_21_Template_button_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r28.createBackSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Add Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_21_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const modal_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r23.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r5.createBackupFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r5.backupNames);
  }
}
function MinEditorComponent_ng_template_23_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", backupName_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", backupName_r32, " ");
  }
}
function MinEditorComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Back Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_23_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const modal_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r30.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Edit back up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "form", 35)(10, "div", 36)(11, "div", 37)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "select", 77)(15, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, MinEditorComponent_ng_template_23_option_17_Template, 2, 2, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 44)(19, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_23_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.updateBackupSubmit(ctx_r35.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Save Backup");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_23_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const modal_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r30.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r7.updateBackupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r7.backupNames);
  }
}
function MinEditorComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Lyrics Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_25_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const modal_r37 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r37.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Song Lyrics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 44)(12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_ng_template_25_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const modal_r37 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r37.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r9.lyricsData);
  }
}
function MinEditorComponent_tr_70_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 87)(1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_tr_70_a_5_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45);
      const data_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r44.Select2OpenEditBackUp(_r6, data_r41));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function MinEditorComponent_tr_70_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MinEditorComponent_tr_70_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r49);
      const data_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r47.onDeleteBackup(data_r41._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function MinEditorComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 83)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td")(4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, MinEditorComponent_tr_70_a_5_Template, 2, 0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MinEditorComponent_tr_70_a_6_Template, 2, 0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r41 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r41.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
  }
}
function MinEditorComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, "Prev");
  }
}
function MinEditorComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, "Next");
  }
}
;
class MinEditorComponent {
  constructor(galleryService, routeService, webService, songService, backupService, modalService, toastr, route, router, utilService, requestService, formBuilder, authService) {
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
    this.authService = authService;
    this.submitted = false;
    // roles: string[] = ['usesr', 'admin'];
    this.backupNames = [];
    this.layout = new Array();
    this.pages = new Array();
    this.songs = new Array();
    this.backup = new Array();
    this.song = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Songs();
    this.lyricsData = '';
    this.songsDetail = [];
    this.backupDetail = [];
    this.showElement = false;
    this.timeZone = src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__.TimeZone;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__.Image(1, {
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
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.selectedParent = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Template();
    console.log("Route Segment Check: ", this.routeService.segment(2));
    const ministeryId = this.routeService.segment(2);
    const user = this.authService.currentUser();
    this.isAdmin = user.is_Admin === 1;
  }
  ngOnInit() {
    this.fetchBackupNames();
    // this.loadPageSong()
    // this.loadPageBackup()
    this.ministrationId = this.routeService.segment(2);
    if (this.ministrationId) {
      this.getSongsAndBackup(this.ministrationId);
    }
    this.createSongForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      lyricslink: [''],
      intro: [''],
      link: ['']
    });
    this.createBackupFrom = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
    });
    this.updateSongForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      lyricslink: [''],
      link: [''],
      intro: ['']
    });
    this.updateBackupForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
    });
  }
  getSongsAndBackup(ministrationId) {
    this.songService.getSongsBackup(ministrationId).subscribe(data => {
      this.songsDetail = data.songs;
      this.backupDetail = data.backup;
      console.log(this.backupDetail, this.songsDetail, 'each songs and backup');
    });
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
      // this.loadPageSong()
      // You may want to navigate to the song list or reload the updated song data here
    }, error => {
      console.error('Error updating song', error);
    });
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
      this.getSongsAndBackup(ministryId);
      // You may want to navigate to the song list or reload the updated song data here
    }, error => {
      console.error('Error updating song', error);
    });
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__.ButtonType.DELETE) {
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__.ButtonType.CUSTOM) {
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
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
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
        this.getSongsAndBackup(ministryId);
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
  static #_ = this.ɵfac = function MinEditorComponent_Factory(t) {
    return new (t || MinEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_13__.GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__.BackupService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: MinEditorComponent,
    selectors: [["app-editor"]],
    inputs: {
      lyricsData: "lyricsData"
    },
    decls: 76,
    vars: 11,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [3, "accordionData"], ["select2modal", ""], ["select2modal2", ""], ["select2Backmodal", ""], ["selectBackUp2modal", ""], ["selectLyricsmodal", ""], [3, "status", "onTriggerChange"], [1, "container", "mt-3"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-12", "mt-2"], ["formControlName", "title", "type", "text", "value", "", "placeholder", "Enter song title", 1, "form-control"], [1, "col-lg-12", "mt-4"], ["formControlName", "intro", "type", "text", "value", "", "placeholder", "Enter intro of the song", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", "placeholder", "Enter song link", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", "placeholder", "Enter lyrics link", 1, "form-control"], ["formControlName", "lyrics", "placeholder", "Enter song lyric", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["formControlName", "title", "type", "text", "value", "", 1, "form-control"], ["formControlName", "intro", "type", "text", "value", "", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", 1, "form-control"], ["formControlName", "lyrics"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", 3, "click"], ["formControlName", "name", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", 1, "btn", "ripple", "text-white", "bg-orange-color", 3, "click"], [1, ""], [1, "border-bottom"], [1, "button-list"], ["class", "btn", 4, "ngIf"], ["href", "javascript:;", "class", "btn", 3, "click", 4, "ngIf"], [1, "btn"], [1, "ti", "ti-pencil", 3, "click"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-trash"]],
    template: function MinEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Details of All Minstration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div")(12, "div", 3)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "All List of User songs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "app-accordion", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, MinEditorComponent_ng_template_17_Template, 36, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, MinEditorComponent_ng_template_19_Template, 66, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, MinEditorComponent_ng_template_21_Template, 23, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, MinEditorComponent_ng_template_23_Template, 23, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, MinEditorComponent_ng_template_25_Template, 14, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "app-alert", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onTriggerChange", function MinEditorComponent_Template_app_alert_onTriggerChange_27_listener($event) {
          return ctx.handleAlertChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 18)(29, "div", 0)(30, "div")(31, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Details of Back up");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 5)(37, "div", 6)(38, "div", 7)(39, "div", 8)(40, "div")(41, "div", 3)(42, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "All List of User Backup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 10)(45, "div", 19)(46, "div", 20)(47, "div", 21)(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "select", 22)(51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 23)(62, "table", 24)(63, "thead")(64, "tr")(65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Name of backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](70, MinEditorComponent_tr_70_Template, 7, 3, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](71, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 26)(73, "ngb-pagination", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function MinEditorComponent_Template_ngb_pagination_pageChange_73_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, MinEditorComponent_ng_template_74_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](75, MinEditorComponent_ng_template_75_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("accordionData", ctx.songsDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("status", ctx.changingValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](71, 7, ctx.backupDetail, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_10__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, ngx_quill__WEBPACK_IMPORTED_MODULE_20__.QuillEditorComponent, _elements_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__.AccordionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.SlicePipe],
    styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n\n.show_view_block[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 190px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n\n  border: none;\n  color: white;\n  padding: 8px 14px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition-duration: 0.4s;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbGwtbWluaXN0cmF0aW9uL2VkaXRvci9taW5lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2FsbC1taW5pc3RyYXRpb24vZWRpdG9yL21pbmVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0FDRFI7QURLSTtFQUNJLGlCQUFBO0FDSFI7QURNSTs7OztFQUlJLGtDQUFBO0FDSlI7O0FEUUE7RUFDSSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FDTEo7O0FEUUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRFFBO0VBQ0ksb0NBQUE7QUNMSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcblxyXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYnRuLmJ0bi1yb3VuZGVkLmJ0bi1kYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZy1zZWxlY3QsXHJcbiAgICAubmctc2VsZWN0IGRpdixcclxuICAgIC5uZy1zZWxlY3QgaW5wdXQsXHJcbiAgICAubmctc2VsZWN0IHNwYW4ge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLWxvY2sgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAyMXB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVkaWEgLnNoYWRvdy5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1ib3R0b21dIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTBweCwgMjRweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNob3dfdmlld19ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTkwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYmctb3JhbmdlLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTdhMmQgIWltcG9ydGFudDtcclxufSIsIjo6bmctZGVlcCAub3B0aW9uLWRvdHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuOjpuZy1kZWVwIC5idG4uYnRuLXJvdW5kZWQuYnRuLWRhbmdlciB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QsXG46Om5nLWRlZXAgLm5nLXNlbGVjdCBkaXYsXG46Om5nLWRlZXAgLm5nLXNlbGVjdCBpbnB1dCxcbjo6bmctZGVlcCAubmctc2VsZWN0IHNwYW4ge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1sb2NrIC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAyMXB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwJTtcbiAgbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4ubWVkaWEgLnNoYWRvdy5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1ib3R0b21dIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MHB4LCAyNHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93X3ZpZXdfYmxvY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOTBweDtcbn1cblxuLmN1c3RvbS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLmJnLW9yYW5nZS1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTdhMmQgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class ElementPayload {
  constructor() {
    this.status = 1;
  }
}

/***/ }),

/***/ 19410:
/*!***********************************************************************!*\
  !*** ./src/app/components/all-ministration/editor/model/class-cms.ts ***!
  \***********************************************************************/
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

/***/ 84541:
/*!*************************************************************************!*\
  !*** ./src/app/components/all-ministration/editor/model/pages.model.ts ***!
  \*************************************************************************/
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
/* harmony export */   Songs: () => (/* binding */ Songs),
/* harmony export */   Template: () => (/* binding */ Template)
/* harmony export */ });
class Template {}
class Layout {}
class Blocks {}
class Groups {}
class Elements {}
class Images {}
class Levite {}
class Songs {}
class Backup {}

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_all-ministration_all-ministration_component_ts-src_app_components_-24d079.js.map