"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_users_users_module_ts"],{

/***/ 66156:
/*!***************************************************************!*\
  !*** ./src/app/components/users/details/details.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/job.model */ 33132);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/date.service */ 50862);
/* harmony import */ var src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/payload.service */ 87010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);

















function DetailsComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 35);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function DetailsComponent_ng_template_37_tr_59_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_37_tr_59_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_37_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 59)(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DetailsComponent_ng_template_37_tr_59_span_18_Template, 3, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, DetailsComponent_ng_template_37_tr_59_span_19_Template, 3, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td")(21, "div", 63)(22, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r17 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r17.job.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r17.job.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r14.formatDate(data_r17.job_assigned_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.formatDate(data_r17.job.start_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.formatDate(data_r17.job.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r17.job.open_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r17.job.close_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r17.is_reminder_sent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r14.isOpen(data_r17.job.start_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.isOpen(data_r17.job.start_date));
  }
}
function DetailsComponent_ng_template_37_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function DetailsComponent_ng_template_37_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function DetailsComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 31)(3, "div", 38)(4, "div", 12)(5, "div", 39)(6, "div")(7, "div", 6)(8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "All Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 13)(11, "div", 41)(12, "div", 42)(13, "div", 43)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 44)(17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 45)(28, "div", 46)(29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 52)(35, "table", 53)(36, "thead")(37, "tr")(38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Date Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Starts At");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Ends At");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, DetailsComponent_ng_template_37_tr_59_Template, 24, 10, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](60, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 55)(62, "ngb-pagination", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function DetailsComponent_ng_template_37_Template_ngb_pagination_pageChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.assigned_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, DetailsComponent_ng_template_37_ng_template_63_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, DetailsComponent_ng_template_37_ng_template_64_Template, 1, 0, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](60, 5, ctx_r2.user.assigned, (ctx_r2.assigned_page - 1) * ctx_r2.moddal_assign_config.pageSize, ctx_r2.assigned_page * ctx_r2.moddal_assign_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r2.user.assigned.length)("maxSize", ctx_r2.moddal_assign_config.maxSize)("pageSize", ctx_r2.moddal_assign_config.pageSize)("page", ctx_r2.assigned_page);
  }
}
function DetailsComponent_ng_template_41_tr_45_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_41_tr_45_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.assignWork(data_r25, _r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Assign Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_41_tr_45_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.onRemoveAssigned(data_r25, _r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Remove Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Past");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_41_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 59)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, DetailsComponent_ng_template_41_tr_45_span_8_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, DetailsComponent_ng_template_41_tr_45_span_9_Template, 2, 0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, DetailsComponent_ng_template_41_tr_45_button_11_Template, 3, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailsComponent_ng_template_41_tr_45_button_12_Template, 3, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DetailsComponent_ng_template_41_tr_45_span_13_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, DetailsComponent_ng_template_41_tr_45_span_15_Template, 3, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, DetailsComponent_ng_template_41_tr_45_span_16_Template, 3, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r25 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r25.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r25.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r22.formatDate(data_r25.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r25.is_assigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !data_r25.is_assigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r22.isOpen(data_r25.days) && !data_r25.is_assigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r22.isOpen(data_r25.days) && data_r25.is_assigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r22.isOpen(data_r25.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r22.isOpen(data_r25.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r22.isOpen(data_r25.days));
  }
}
function DetailsComponent_ng_template_41_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function DetailsComponent_ng_template_41_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function DetailsComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 31)(3, "div", 38)(4, "div", 12)(5, "div", 39)(6, "div")(7, "div", 6)(8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 13)(11, "div", 41)(12, "div", 42)(13, "div", 43)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 44)(17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 45)(22, "div", 46)(23, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 52)(29, "table", 53)(30, "thead")(31, "tr")(32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Available On");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, DetailsComponent_ng_template_41_tr_45_Template, 17, 10, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 55)(48, "ngb-pagination", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function DetailsComponent_ng_template_41_Template_ngb_pagination_pageChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.available_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, DetailsComponent_ng_template_41_ng_template_49_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, DetailsComponent_ng_template_41_ng_template_50_Template, 1, 0, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](46, 5, ctx_r3.user.availability, (ctx_r3.available_page - 1) * ctx_r3.moddal_available_config.pageSize, ctx_r3.available_page * ctx_r3.moddal_available_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r3.user.availability.length)("maxSize", ctx_r3.moddal_available_config.maxSize)("pageSize", ctx_r3.moddal_available_config.maxSize)("page", ctx_r3.available_page);
  }
}
function DetailsComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 31)(3, "div", 38)(4, "div", 12)(5, "div", 39)(6, "div")(7, "div", 6)(8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 13)(11, "div", 82)(12, "div", 83)(13, "div", 84)(14, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Job Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 86)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 83)(20, "div", 84)(21, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 86)(24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 83)(27, "div", 84)(28, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 86)(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 83)(34, "div", 84)(35, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 86)(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 83)(41, "div", 84)(42, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Medication");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 86)(45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 83)(48, "div", 84)(49, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Allergies");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 86)(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 12)(55, "div", 39)(56, "div")(57, "div", 6)(58, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Professional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 13)(61, "div", 82)(62, "div", 83)(63, "div", 84)(64, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Paramedic Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 86)(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 83)(70, "div", 84)(71, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "National Insurance Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 86)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 12)(77, "div", 39)(78, "div")(79, "div", 6)(80, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Financial Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 13)(83, "div", 82)(84, "div", 83)(85, "div", 84)(86, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Bank name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "div", 86)(89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 83)(92, "div", 84)(93, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Sort Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 86)(96, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 83)(99, "div", 84)(100, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 86)(103, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 12)(106, "div", 39)(107, "div")(108, "div", 6)(109, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "Next Of Kin Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 13)(112, "div", 82)(113, "div", 83)(114, "div", 84)(115, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Full Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 86)(118, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 83)(121, "div", 84)(122, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "div", 86)(125, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 83)(128, "div", 84)(129, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "div", 86)(132, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "div", 83)(135, "div", 84)(136, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "div", 86)(139, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.formatDate(ctx_r4.user.profile.date_of_birth));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.medication);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.allergies);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.paramedic_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.ni_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.bank_name || "Not Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.sort_code || "Not Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.account_number || "Not Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.next_of_kin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.nok_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.nok_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.user.profile.nok_email);
  }
}
function DetailsComponent_ng_template_49_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 88)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r41.fetchImage(image_r42.name), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function DetailsComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 31)(3, "div", 38)(4, "div", 12)(5, "div", 39)(6, "div")(7, "div", 6)(8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Certificats & Lisence");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 13)(11, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailsComponent_ng_template_49_div_12_Template, 3, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.user.document);
  }
}
function DetailsComponent_ng_template_50_tr_61_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_50_tr_61_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_50_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 59)(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DetailsComponent_ng_template_50_tr_61_span_18_Template, 3, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, DetailsComponent_ng_template_50_tr_61_span_19_Template, 3, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td")(21, "div", 63)(22, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r47 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r47.job.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r47.job.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r44.formatDate(data_r47.job_assigned_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r44.formatDate(data_r47.job.start_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r44.formatDate(data_r47.job.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r47.job.open_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r47.job.close_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r47.is_reminder_sent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r44.isOpen(data_r47.job.start_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r44.isOpen(data_r47.job.start_date));
  }
}
function DetailsComponent_ng_template_50_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function DetailsComponent_ng_template_50_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function DetailsComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91)(1, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Date you are Working/Worked");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_50_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const modal_r43 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r43.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 95)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Preview of User's work schedules based on the number of days worked and the total number of hours worked each day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " based on the time clocked in to work and time clocked out of work. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 41)(14, "div", 42)(15, "div", 43)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "select", 44)(19, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 45)(30, "div", 46)(31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 52)(37, "table", 53)(38, "thead")(39, "tr")(40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Date Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Starts At");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Ends At");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, DetailsComponent_ng_template_50_tr_61_Template, 24, 10, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](62, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 55)(64, "ngb-pagination", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function DetailsComponent_ng_template_50_Template_ngb_pagination_pageChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.assigned_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, DetailsComponent_ng_template_50_ng_template_65_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, DetailsComponent_ng_template_50_ng_template_66_Template, 1, 0, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r7.selectedAssignedData.name, " Work Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](62, 6, ctx_r7.selectedAssignedData.assigned, (ctx_r7.assigned_page - 1) * ctx_r7.moddal_assign_config.pageSize, ctx_r7.assigned_page * ctx_r7.moddal_assign_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r7.selectedAvailability.length)("maxSize", ctx_r7.moddal_assign_config.maxSize)("pageSize", ctx_r7.moddal_assign_config.maxSize)("page", ctx_r7.assigned_page);
  }
}
function DetailsComponent_ng_template_52_tr_57_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_52_tr_57_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r62.assignWork(data_r57, _r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_52_tr_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Past");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_52_tr_57_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_52_tr_57_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_52_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 59)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, DetailsComponent_ng_template_52_tr_57_button_8_Template, 3, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, DetailsComponent_ng_template_52_tr_57_span_9_Template, 2, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, DetailsComponent_ng_template_52_tr_57_span_11_Template, 3, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailsComponent_ng_template_52_tr_57_span_12_Template, 3, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r57 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r57.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r57.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r57.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r54.isOpen(data_r57.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r54.isOpen(data_r57.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r54.isOpen(data_r57.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r54.isOpen(data_r57.days));
  }
}
function DetailsComponent_ng_template_52_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function DetailsComponent_ng_template_52_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function DetailsComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91)(1, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "User Scheduled Dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_52_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const modal_r53 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r53.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 95)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Date Available For Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " This shows the days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " agrees to be available for work. Admin can assign this user to work here or go to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " the calendar to choose the user and assign to job. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " will be notified when this is successfully assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 41)(20, "div", 42)(21, "div", 43)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "select", 44)(25, "option");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 45)(36, "div", 46)(37, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 52)(43, "table", 53)(44, "thead")(45, "tr")(46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Available On");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Assign to Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, DetailsComponent_ng_template_52_tr_57_Template, 13, 7, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 55)(60, "ngb-pagination", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function DetailsComponent_ng_template_52_Template_ngb_pagination_pageChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r67.available_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, DetailsComponent_ng_template_52_ng_template_61_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, DetailsComponent_ng_template_52_ng_template_62_Template, 1, 0, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r9.selectedAvailabilityData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r9.selectedAvailabilityData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](58, 7, ctx_r9.selectedAvailability, (ctx_r9.available_page - 1) * ctx_r9.moddal_available_config.pageSize, ctx_r9.available_page * ctx_r9.moddal_available_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r9.selectedAvailability.length)("maxSize", ctx_r9.moddal_available_config.maxSize)("pageSize", ctx_r9.moddal_available_config.maxSize)("page", ctx_r9.available_page);
  }
}
function DetailsComponent_ng_template_54_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 106)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "app-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function DetailsComponent_ng_template_54_div_18_Template_app_input_inputModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r72.newUser.patient_email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r69.newUser.patient_email)("placeholder", "Enter Username")("inputModel", ctx_r69.newUser.patient_email);
  }
}
function DetailsComponent_ng_template_54_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Are you sure you want to edit this user information? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " This will override any data previously created for this user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_54_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Are you sure you want to create this user? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Please also choose the right privilege for this user so they could have the right access level. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91)(1, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_54_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const modal_r68 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r68.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 95)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 98)(10, "div", 99)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function DetailsComponent_ng_template_54_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r76.newUser.patient_forename = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 99)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function DetailsComponent_ng_template_54_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r77.newUser.patient_surname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DetailsComponent_ng_template_54_div_18_Template, 4, 7, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 99)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "app-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function DetailsComponent_ng_template_54_Template_app_input_inputModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r78.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 99)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "app-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function DetailsComponent_ng_template_54_Template_app_input_inputModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r79.newUser.patient_phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, DetailsComponent_ng_template_54_small_27_Template, 4, 0, "small", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, DetailsComponent_ng_template_54_small_28_Template, 4, 0, "small", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 103)(30, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_54_Template_button_click_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r80.onCreateUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_54_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75);
      const modal_r68 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r68.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r11.is_update ? "Update" : "Create", " User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "firstname")("value", ctx_r11.newUser.patient_forename)("placeholder", "Enter First Name")("inputModel", ctx_r11.newUser.patient_forename);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r11.newUser.patient_surname)("placeholder", "Enter Last Name")("inputModel", ctx_r11.newUser.patient_surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r11.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r11.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "phone")("id", "phone")("value", ctx_r11.newUser.patient_phone)("placeholder", "Enter Phone Number")("inputModel", ctx_r11.newUser.patient_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Yes, ", ctx_r11.is_update ? "Update" : "Create", " User");
  }
}
function DetailsComponent_ng_template_56_ng_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r85.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r85.name);
  }
}
function DetailsComponent_ng_template_56_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Staff will be notified when you assign them to a task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 91)(1, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Assign User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_56_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87);
      const modal_r82 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r82.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 95)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 98)(10, "div", 106)(11, "ng-select", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function DetailsComponent_ng_template_56_Template_ng_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r88.onSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DetailsComponent_ng_template_56_ng_option_12_Template, 2, 2, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, DetailsComponent_ng_template_56_small_13_Template, 2, 0, "small", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 103)(15, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_56_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r89.onSubmitAssigned($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Yes, Assign User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailsComponent_ng_template_56_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87);
      const modal_r82 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r82.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r13.active_jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r13.is_update);
  }
}
class DetailsComponent {
  constructor(modalService, authService, userService, toastr, dateService, payloadService, route) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.toastr = toastr;
    this.dateService = dateService;
    this.payloadService = payloadService;
    this.route = route;
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.users = new Array();
    this.jobs = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserPayload();
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.available_page = 1;
    this.moddal_available_config = {
      currentPage: 1,
      pageSize: 10,
      maxSize: 10
    };
    this.assigned_page = 1;
    this.moddal_assign_config = {
      currentPage: 1,
      pageSize: 10,
      maxSize: 10
    };
    this.is_update = false;
    this.status = "success";
    /** --------------LOAD USER DATA --------------------- */
    this.user = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserRecord();
    this.active_jobs = new Array();
    this.message = "Are you sure you want to do this?";
    this.selectedAssign = new Array();
    this.selectedAvailabilityData = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserList();
    this.selectedAvailability = new Array();
    this.workDayToAssign = new src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__.Schedule();
    this.selectedAssignedData = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserList();
    this.assignNewJob = new src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__.Assigned();
  }
  ngOnInit() {
    this.load();
    this.getSelectedUser();
  }
  Select2Open(select2modal) {
    this.is_update = false;
    this.modalService.open(select2modal);
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, {
      centered: true
    });
  }
  getSelectedUser() {
    let $this = this;
    this.userid = this.route.snapshot.paramMap.get('index');
    this.payloadService.request(`user/find`, {
      where: {
        id: this.userid
      },
      limit: 1
    }, this.payloadService.TYPE_POST, function (response, status) {
      if (status) {
        $this.user = response;
      }
      console.log("Response: ", $this.user, status, response.image);
    });
  }
  fetchImage(path) {
    return `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/storage/${path}`;
  }
  load() {
    let $this = this;
    this.userService.all(function (result, status) {
      if (status) {
        $this.users = result;
      }
    });
  }
  loadJobs() {}
  formatDate(date) {
    if (!date) {
      return "Not Provided";
    }
    return this.dateService.formatEnUSWithOption(date);
  }
  // pageChanged(event) {
  //   this.config.currentPage = event;
  //   console.log("9876789")
  // }
  onCreateUser($event) {
    let $this = this;
    let target = this.is_update ? "update" : "create";
    this.userService.send(target, this.newUser, function (result, status) {
      if (status) {
        $this.load();
        $this.toastr.success("Request Successfully completed", "User record was created");
        $this.modalService.dismissAll();
      }
    });
  }
  onEdit(data, select2modal) {
    this.is_update = true;
    let names = data.name.split(" ");
    this.newUser.client_id = data.client_id;
    this.newUser.id = data.id;
    this.newUser.patient_phone = data.phone;
    this.newUser.patient_forename = names[0];
    this.newUser.patient_surname = names[1];
    this.newUser.patient_email = "";
    this.modalService.open(select2modal);
  }
  onDelete(data, select2modal) {
    this.selected = data;
    this.changingValue.next({
      status: "warning",
      message: this.message
    });
  }
  isOpen(date) {
    return this.dateService.compare(date);
  }
  delete($event) {
    let $this = this;
    let id = this.selected.id;
    let status = $event;
    if (status) {
      // send delete Request to server
      this.userService.delete(id, function (response, status) {
        if (status) {
          $this.load();
          $this.toastr.success("Request Successfully completed", "User record was deleted");
        }
      });
    }
  }
  viewAssigned(data, assignedModel) {
    console.log(data, assignedModel);
    this.selectedAssign = data.assigned;
    // fetch fresh data from online
    this.modalService.open(assignedModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  viewAvailability(data, availableModel) {
    this.selectedAvailability = data.availability;
    this.selectedAvailabilityData = data;
    // fetch nfresh dta from online
    this.payloadService.request(`user/jobs/available/days/list/${data.id}/60`, {}, this.payloadService.TYPE_GET, function (response, status) {
      console.log(status, response);
    });
    /**
     * reset the available page back to index 1
     */
    this.available_page = 1;
    this.modalService.open(availableModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  assignWork(data, assignWorkSchedule) {
    this.modalService.dismissAll();
    this.modalService.open(assignWorkSchedule);
    this.loadJobs();
    // Value that contains the data to be used - date to assign
    this.workDayToAssign = data;
  }
  viewAssignedWork(data, assignedModel) {
    // console.log("Data Search: ------------------------------------>>>>>>>>>>>>>>>>>>> ", data.assigned)
    this.selectedAssignedData = data; //this is a user
    this.modalService.open(assignedModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  onSelected($event) {
    let job_id = $event;
    this.assignNewJob.user_id = this.workDayToAssign.user_id;
    this.assignNewJob.job_id = job_id;
    this.assignNewJob.is_reminder_sent = 0;
    this.assignNewJob.status = 1;
    this.assignNewJob.job_assigned_date = this.workDayToAssign.days;
  }
  onRemoveAssigned(data, schedule) {}
  onSubmitAssigned($event) {
    let $this = this;
    // console.log($event, this.assignNewJob)
    let json = JSON.parse(JSON.stringify(this.assignNewJob));
    json.available_id = this.workDayToAssign.id;
    json.schedule_id = this.workDayToAssign.schedule_id;
    console.log("Payload To Send::", json);
  }
  static #_ = this.ɵfac = function DetailsComponent_Factory(t) {
    return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_6__.PayloadService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: DetailsComponent,
    selectors: [["app-details"]],
    decls: 63,
    vars: 3,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "row", "square"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "panel", "profile-cover"], [1, "profile-cover__img"], ["alt", "img", "style", "height: 117px;", 3, "src", 4, "ngIf"], [1, "h3"], [1, "profile-cover__action", "bg-img"], [1, "profile-cover__info"], [1, "nav"], [1, "profile-tab", "tab-menu-heading"], ["ngbNav", "", 1, "main-nav-line", "p-3", "tabs-menu", "profile-nav-line", "bg-gray-100"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["href", "javascript:;", "ngbNavLink", ""], ["ngbNavContent", ""], ["assignedModel", ""], ["availableModel", ""], ["userModel", ""], ["assignWorkSchedule", ""], [1, "row", "row-sm"], [1, "card", "custom-card", "main-content-body-profile"], [1, "tab-content"], [3, "status", "onTriggerChange"], ["alt", "img", 2, "height", "117px", 3, "src"], ["id", "gallery", 1, "main-content-body", "p-4", "border", "tab-pane", "border-top-0"], [1, "card-body", "border"], [1, "col-md-12", "col-lg-12"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], [1, "border-bottom"], [1, "text-center"], ["class", "label text-danger d-flex", 4, "ngIf"], ["class", "label text-success d-flex", 4, "ngIf"], [1, "button-list"], ["href", "javascript:;", 1, "btn"], [1, "ti", "ti-trash"], [1, "label", "text-danger", "d-flex"], [1, "dot-label", "bg-danger", "mr-1", 2, "margin-top", "6px"], [1, "label", "text-success", "d-flex"], [1, "dot-label", "bg-success", "mr-1", 2, "margin-top", "6px"], ["id", "page2", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["class", "btn ripple btn-success btn-sm", 4, "ngIf"], ["class", "btn ripple btn-primary btn-sm", 4, "ngIf"], ["class", "btn btn-sm btn-light btn-info", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-danger btn-info", 3, "click", 4, "ngIf"], ["class", "btn ripple btn-secondary btn-sm", 4, "ngIf"], [1, "btn", "ripple", "btn-success", "btn-sm"], [1, "btn", "ripple", "btn-primary", "btn-sm"], [1, "btn", "btn-sm", "btn-light", "btn-info", 3, "click"], [1, "ti", "ti-arrow-up"], [1, "btn", "btn-sm", "btn-danger", "btn-info", 3, "click"], [1, "btn", "ripple", "btn-secondary", "btn-sm"], [1, "row"], [1, "col-md-4", "col-lg-4"], [1, "form-group"], [1, ""], [1, "pos-relative"], ["class", "col-md-3 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-lg-3"], [2, "border", "1px solid #f5f5f5", "text-align", "center"], [2, "max-height", "200px", 3, "src"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "page3", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], [4, "ngIf"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], ["class", "col-lg-12 mt-4", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [1, "col-lg-12", "mt-4"], [1, "form-control", "p-0", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, DetailsComponent_img_21_Template, 1, 1, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 19)(26, "ul", 20)(27, "li")(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 21)(32, "nav", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, DetailsComponent_ng_template_37_Template, 65, 9, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](38, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Available Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, DetailsComponent_ng_template_41_Template, 51, 9, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](42, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, DetailsComponent_ng_template_45_Template, 141, 15, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](46, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, DetailsComponent_ng_template_49_Template, 13, 1, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, DetailsComponent_ng_template_50_Template, 67, 10, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, DetailsComponent_ng_template_52_Template, 63, 11, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, DetailsComponent_ng_template_54_Template, 34, 33, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, DetailsComponent_ng_template_56_Template, 19, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 31)(59, "div", 11)(60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "app-alert", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onTriggerChange", function DetailsComponent_Template_app_alert_onTriggerChange_62_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgOptionComponent, _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.SlicePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.border-bottom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0FDQVI7O0FERUk7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDQ1I7O0FERUk7RUFDSSxxQkFBQTtBQ0NSOztBRElROztFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7QUNEWjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FESVE7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0ZaO0FESVE7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDRlo7QURJUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FESVE7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7QUNGWjtBRElRO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ0ZaO0FES1E7RUFDSSxzQkFBQTtBQ0haO0FES1E7RUFDSSxhQUFBO0FDSFo7QURLUTs7RUFFSSxZQUFBO0FDSFo7O0FET0k7RUFDSSxrQkFBQTtBQ0pSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51e1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHggLCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnV7XG4gICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbiAgICB9XG5cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIGRwLWRhdGUtcGlja2VyLFxuICAgICAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgY29sb3I6ICNhOGFmYzc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjM2I0ODYzO1xuICAgICAgICB9XG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XG4gICAgICAgICAgICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gICAgICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJvcmRlci1ib3R0b20gdGQgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9IiwiLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIsXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2E4YWZjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjM2I0ODYzO1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xuICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB0ZCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 43167:
/*!**********************************************************!*\
  !*** ./src/app/components/users/users-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsRoutingModule: () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/details.component */ 66156);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 86174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





const routes = [{
  path: '',
  children: [{
    path: '/users',
    component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
  }, {
    path: ':index/details',
    component: _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent
  }]
}];
class JobsRoutingModule {
  static #_ = this.ɵfac = function JobsRoutingModule_Factory(t) {
    return new (t || JobsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: JobsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JobsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 17653:
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 43167);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 86174);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 65364);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ 66156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);


















class UsersModule {
  static #_ = this.ɵfac = function UsersModule_Factory(t) {
    return new (t || UsersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: UsersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _common_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__.NgCircleProgressModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_3__.DetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _common_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__.NgCircleProgressModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrModule]
  });
})();

/***/ }),

/***/ 86174:
/*!***********************************************************!*\
  !*** ./src/app/components/users/users/users.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/job.model */ 33132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/date.service */ 50862);
/* harmony import */ var src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/payload.service */ 87010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);
















function UsersComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.Select2Open(_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Create New User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_tr_63_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_tr_63_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td")(6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 44)(9, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_tr_63_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const data_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.viewAssignedWork(data_r15, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UsersComponent_tr_63_span_13_Template, 3, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UsersComponent_tr_63_span_14_Template, 3, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td")(16, "div", 49)(17, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_tr_63_Template_a_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const data_r15 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.onEdit(data_r15, _r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_tr_63_Template_a_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const data_r15 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.onDelete(data_r15, _r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatDate(data_r15.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r15.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !data_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", data_r15.id, "/details");
  }
}
function UsersComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Prev");
  }
}
function UsersComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Next");
  }
}
function UsersComponent_ng_template_69_tr_61_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_69_tr_61_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_69_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UsersComponent_ng_template_69_tr_61_span_18_Template, 3, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, UsersComponent_ng_template_69_tr_61_span_19_Template, 3, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td")(21, "div", 49)(22, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r26 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r26.job.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r26.job.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r23.formatDate(data_r26.job_assigned_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r23.formatDate(data_r26.job.start_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r23.formatDate(data_r26.job.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r26.job.open_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r26.job.close_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r26.is_reminder_sent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r23.isOpen(data_r26.job.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r23.isOpen(data_r26.job.end_date));
  }
}
function UsersComponent_ng_template_69_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Prev");
  }
}
function UsersComponent_ng_template_69_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Next");
  }
}
function UsersComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Date you are Working/Worked");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_69_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const modal_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r22.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 63)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Preview of User's work schedules based on the number of days worked and the total number of hours worked each day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " based on the time clocked in to work and time clocked out of work. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 16)(14, "div", 17)(15, "div", 18)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "select", 19)(19, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 27)(37, "table", 28)(38, "thead")(39, "tr")(40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Date Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Starts At");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Ends At");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Opening");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Closing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, UsersComponent_ng_template_69_tr_61_Template, 24, 10, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](62, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 30)(64, "ngb-pagination", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function UsersComponent_ng_template_69_Template_ngb_pagination_pageChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.assigned_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, UsersComponent_ng_template_69_ng_template_65_Template, 1, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, UsersComponent_ng_template_69_ng_template_66_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r6.selectedAssignedData.name, " Work Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](62, 6, ctx_r6.selectedAssignedData.assigned, (ctx_r6.assigned_page - 1) * ctx_r6.moddal_assign_config.pageSize, ctx_r6.assigned_page * ctx_r6.moddal_assign_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r6.selectedAvailability.length)("maxSize", ctx_r6.moddal_assign_config.maxSize)("pageSize", ctx_r6.moddal_assign_config.maxSize)("page", ctx_r6.assigned_page);
  }
}
function UsersComponent_ng_template_71_tr_57_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_71_tr_57_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const data_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](76);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.assignWork(data_r36, _r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_71_tr_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Past");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_71_tr_57_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_71_tr_57_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_71_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UsersComponent_ng_template_71_tr_57_button_8_Template, 3, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UsersComponent_ng_template_71_tr_57_span_9_Template, 2, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UsersComponent_ng_template_71_tr_57_span_11_Template, 3, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UsersComponent_ng_template_71_tr_57_span_12_Template, 3, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r36 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r36.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r36.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r36.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r33.isOpen(data_r36.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r33.isOpen(data_r36.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r33.isOpen(data_r36.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r33.isOpen(data_r36.days));
  }
}
function UsersComponent_ng_template_71_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Prev");
  }
}
function UsersComponent_ng_template_71_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Next");
  }
}
function UsersComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "User Scheduled Dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_71_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const modal_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r32.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 63)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Date Available For Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " This shows the days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " agrees to be available for work. Admin can assign this user to work here or go to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " the calendar to choose the user and assign to job. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " will be notified when this is successfully assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "select", 19)(25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 27)(43, "table", 28)(44, "thead")(45, "tr")(46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Available On");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Assign to Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, UsersComponent_ng_template_71_tr_57_Template, 13, 7, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 30)(60, "ngb-pagination", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function UsersComponent_ng_template_71_Template_ngb_pagination_pageChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.available_page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, UsersComponent_ng_template_71_ng_template_61_Template, 1, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, UsersComponent_ng_template_71_ng_template_62_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.selectedAvailabilityData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.selectedAvailabilityData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](58, 7, ctx_r8.selectedAvailability, (ctx_r8.available_page - 1) * ctx_r8.moddal_available_config.pageSize, ctx_r8.available_page * ctx_r8.moddal_available_config.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r8.selectedAvailability.length)("maxSize", ctx_r8.moddal_available_config.maxSize)("pageSize", ctx_r8.moddal_available_config.maxSize)("page", ctx_r8.available_page);
  }
}
function UsersComponent_ng_template_73_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 77)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function UsersComponent_ng_template_73_div_18_Template_app_input_inputModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.newUser.patient_email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r48.newUser.patient_email)("placeholder", "Enter Username")("inputModel", ctx_r48.newUser.patient_email);
  }
}
function UsersComponent_ng_template_73_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Are you sure you want to edit this user information? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " This will override any data previously created for this user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_73_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Are you sure you want to create this user? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Please also choose the right privilege for this user so they could have the right access level. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_73_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const modal_r47 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r47.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 63)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 69)(10, "div", 70)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "app-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function UsersComponent_ng_template_73_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.newUser.patient_forename = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 70)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function UsersComponent_ng_template_73_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.newUser.patient_surname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UsersComponent_ng_template_73_div_18_Template, 4, 7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 70)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "app-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function UsersComponent_ng_template_73_Template_app_input_inputModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 70)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "app-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function UsersComponent_ng_template_73_Template_app_input_inputModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.newUser.patient_phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, UsersComponent_ng_template_73_small_27_Template, 4, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, UsersComponent_ng_template_73_small_28_Template, 4, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 74)(30, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_73_Template_button_click_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.onCreateUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_73_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const modal_r47 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r47.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r10.is_update ? "Update" : "Create", " User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "firstname")("value", ctx_r10.newUser.patient_forename)("placeholder", "Enter First Name")("inputModel", ctx_r10.newUser.patient_forename);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r10.newUser.patient_surname)("placeholder", "Enter Last Name")("inputModel", ctx_r10.newUser.patient_surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r10.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r10.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "phone")("id", "phone")("value", ctx_r10.newUser.patient_phone)("placeholder", "Enter Phone Number")("inputModel", ctx_r10.newUser.patient_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.is_update);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Yes, ", ctx_r10.is_update ? "Update" : "Create", " User");
  }
}
function UsersComponent_ng_template_75_ng_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", data_r64.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r64.name);
  }
}
function UsersComponent_ng_template_75_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Once this assign user process is successfully completed, we will notify the user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Assign User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_75_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const modal_r61 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r61.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 63)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 69)(10, "div", 77)(11, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UsersComponent_ng_template_75_Template_ng_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r67.onSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UsersComponent_ng_template_75_ng_option_12_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UsersComponent_ng_template_75_small_13_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 74)(15, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_75_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r68.onSubmitAssigned($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Yes, Assign User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UsersComponent_ng_template_75_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const modal_r61 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r61.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.jobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r12.is_update);
  }
}
class UsersComponent {
  constructor(modalService, authService, userService, toastr, dateService, payloadService, route) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.toastr = toastr;
    this.dateService = dateService;
    this.payloadService = payloadService;
    this.route = route;
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.users = new Array();
    this.jobs = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserPayload();
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.available_page = 1;
    this.moddal_available_config = {
      currentPage: 1,
      pageSize: 10,
      maxSize: 10
    };
    this.assigned_page = 1;
    this.moddal_assign_config = {
      currentPage: 1,
      pageSize: 10,
      maxSize: 10
    };
    this.is_update = false;
    this.status = "success";
    this.message = "Are you sure you want to do this?";
    this.selectedAssign = new Array();
    this.selectedAvailabilityData = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserList();
    this.selectedAvailability = new Array();
    this.workDayToAssign = new src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__.Schedule();
    this.selectedAssignedData = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.UserList();
    this.assignNewJob = new src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__.Assigned();
  }
  ngOnInit() {
    this.access = this.authService.access.user;
    this.load();
  }
  Select2Open(select2modal) {
    this.is_update = false;
    this.modalService.open(select2modal);
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, {
      centered: true
    });
  }
  load() {
    let $this = this;
    this.userService.all(function (result, status) {
      if (status) {
        $this.users = result;
      }
    });
  }
  loadJobs() {}
  formatDate(date) {
    return this.dateService.formatEnUSWithOption(date);
  }
  // pageChanged(event) {
  //   this.config.currentPage = event;
  //   console.log("9876789")
  // }
  onCreateUser($event) {
    let $this = this;
    let target = this.is_update ? "update" : "create";
    this.userService.send(target, this.newUser, function (result, status) {
      if (status) {
        $this.load();
        $this.toastr.success("Request Successfully completed", "User record was created");
        $this.modalService.dismissAll();
      }
    });
  }
  onViewDetails(data) {
    // routerLink="/users/{{data.id}}/details"
  }
  onEdit(data, select2modal) {
    this.is_update = true;
    let names = data.name.split(" ");
    this.newUser.client_id = data.client_id;
    this.newUser.id = data.id;
    this.newUser.patient_phone = data.phone;
    this.newUser.patient_forename = names[0];
    this.newUser.patient_surname = names[1];
    this.newUser.patient_email = "";
    this.modalService.open(select2modal);
  }
  onDelete(data, select2modal) {
    this.selected = data;
    this.changingValue.next({
      status: "warning",
      message: this.message
    });
  }
  isOpen(date) {
    return this.dateService.compare(date);
  }
  delete($event) {
    let $this = this;
    let id = this.selected.id;
    let status = $event;
    if (status) {
      // send delete Request to server
      this.userService.delete(id, function (response, status) {
        if (status) {
          $this.load();
          $this.toastr.success("Request Successfully completed", "User record was deleted");
        }
      });
    }
  }
  viewAssigned(data, assignedModel) {
    console.log(data, assignedModel);
    this.selectedAssign = data.assigned;
    // fetch fresh data from online
    this.modalService.open(assignedModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  viewAvailability(data, availableModel) {
    this.selectedAvailability = data.availability;
    this.selectedAvailabilityData = data;
    // fetch nfresh dta from online
    this.payloadService.request(`user/jobs/available/days/list/${data.id}/60`, {}, this.payloadService.TYPE_GET, function (response, status) {
      console.log(status, response);
    });
    /**
     * reset the available page back to index 1
     */
    this.available_page = 1;
    this.modalService.open(availableModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  assignWork(data, assignWorkSchedule) {
    this.modalService.dismissAll();
    this.modalService.open(assignWorkSchedule);
    this.loadJobs();
    // Value that contains the data to be used - date to assign
    this.workDayToAssign = data;
  }
  viewAssignedWork(data, assignedModel) {
    // console.log("Data Search: ------------------------------------>>>>>>>>>>>>>>>>>>> ", data.assigned)
    this.selectedAssignedData = data; //this is a user
    this.modalService.open(assignedModel, {
      scrollable: true,
      size: 'xl'
    });
  }
  onSelected($event) {
    let job_id = $event;
    this.assignNewJob.user_id = this.workDayToAssign.user_id;
    this.assignNewJob.job_id = job_id;
    this.assignNewJob.is_reminder_sent = 0;
    this.assignNewJob.status = 1;
    this.assignNewJob.job_assigned_date = this.workDayToAssign.days;
  }
  onSubmitAssigned($event) {}
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_5__.PayloadService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 78,
    vars: 12,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", "class", "btn btn-white btn-icon-text my-2 mr-2", 4, "ngIf"], ["class", "btn ripple btn-info", 3, "click", 4, "ngIf"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["assignedModel", ""], ["availableModel", ""], ["userModel", ""], ["assignWorkSchedule", ""], [3, "status", "onTriggerChange"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "border-bottom"], [1, "text-center"], [1, "btn", "btn-sm", "btn-light", "btn-info", 3, "click"], [1, "ti", "ti-arrow-up"], ["class", "label text-danger d-flex", 4, "ngIf"], ["class", "label text-success d-flex", 4, "ngIf"], [1, "button-list"], ["href", "javascript:;", 1, "btn", 3, "routerLink"], [1, "ti", "ti-eye"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-pencil"], [1, "ti", "ti-trash"], [1, "label", "text-danger", "d-flex"], [1, "dot-label", "bg-danger", "mr-1", 2, "margin-top", "6px"], [1, "label", "text-success", "d-flex"], [1, "dot-label", "bg-success", "mr-1", 2, "margin-top", "6px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "page3", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["href", "javascript:;", 1, "btn"], ["id", "page2", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["class", "btn btn-sm btn-light btn-info", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], ["class", "col-lg-12 mt-4", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [1, "col-lg-12", "mt-4"], [1, "form-control", "p-0", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UsersComponent_button_12_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UsersComponent_button_13_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div")(19, "div", 6)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 18)(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "select", 19)(29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 20)(40, "div", 21)(41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 27)(47, "table", 28)(48, "thead")(49, "tr")(50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, UsersComponent_tr_63_Template, 23, 6, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](64, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 30)(66, "ngb-pagination", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function UsersComponent_Template_ngb_pagination_pageChange_66_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, UsersComponent_ng_template_67_Template, 1, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, UsersComponent_ng_template_68_Template, 1, 0, "ng-template", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, UsersComponent_ng_template_69_Template, 67, 10, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, UsersComponent_ng_template_71_Template, 63, 11, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, UsersComponent_ng_template_73_Template, 34, 33, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, UsersComponent_ng_template_75_Template, 19, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "app-alert", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onTriggerChange", function UsersComponent_Template_app_alert_onTriggerChange_77_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.access.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.access.write);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](64, 8, ctx.users, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx.users.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionComponent, _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSOztBREVJO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBQ0NSOztBREVJO0VBQ0kscUJBQUE7QUNDUjs7QURJUTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNGWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQ0ZaO0FESVE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNGWjtBRElRO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0FDRlo7QURJUTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUNGWjtBREtRO0VBQ0ksc0JBQUE7QUNIWjtBREtRO0VBQ0ksYUFBQTtBQ0haO0FES1E7O0VBRUksWUFBQTtBQ0haIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4ICwgNDBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLFxyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYThhZmM3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNDg2MztcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcclxuICAgICAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIiwiLm9wdGlvbi1kb3RzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIsXG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2E4YWZjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLW5hdi1oZWFkZXItYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjM2I0ODYzO1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xuICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhciAuZHAtY2FsZW5kYXItZGF5IHtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

/***/ })

}]);
//# sourceMappingURL=src_app_components_users_users_module_ts.js.map