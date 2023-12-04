"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_settings_settings_module_ts"],{

/***/ 89813:
/*!****************************************************************!*\
  !*** ./src/app/components/settings/access/access.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessComponent: () => (/* binding */ AccessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/path.service */ 26537);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);











function AccessComponent_tr_63_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccessComponent_tr_63_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccessComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 38)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AccessComponent_tr_63_span_7_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AccessComponent_tr_63_span_8_Template, 3, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "div", 42)(11, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_tr_63_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](72);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.onEdit(data_r7, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Privilege");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !data_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r7.status);
  }
}
function AccessComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Prev");
  }
}
function AccessComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Next");
  }
}
function AccessComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49)(1, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_ng_template_69_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const modal_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r12.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 53)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 54)(10, "div", 55)(11, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function AccessComponent_ng_template_69_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.newUser.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 55)(13, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function AccessComponent_ng_template_69_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.newUser.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 55)(15, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function AccessComponent_ng_template_69_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.newUser.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 55)(17, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function AccessComponent_ng_template_69_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 55)(19, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function AccessComponent_ng_template_69_Template_app_input_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.newUser.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Admin Register New User account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 57)(23, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_ng_template_69_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const modal_r12 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r12.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "text")("id", "firstname")("value", ctx_r4.newUser.firstName)("placeholder", "Enter First Name")("inputModel", ctx_r4.newUser.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r4.newUser.lastName)("placeholder", "Enter Last Name")("inputModel", ctx_r4.newUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r4.newUser.email)("placeholder", "Enter Username")("inputModel", ctx_r4.newUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r4.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r4.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "phone")("id", "phone")("value", ctx_r4.newUser.phone)("placeholder", "Enter Phone Number")("inputModel", ctx_r4.newUser.phone);
  }
}
function AccessComponent_ng_template_71_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 38)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AccessComponent_ng_template_71_tr_22_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const data_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](data_r23.value.read = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AccessComponent_ng_template_71_tr_22_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const data_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](data_r23.value.write = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AccessComponent_ng_template_71_tr_22_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const data_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](data_r23.value.execute = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_ng_template_71_tr_22_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const data_r23 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.save(data_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r23.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", data_r23.value.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", data_r23.value.write);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", data_r23.value.execute);
  }
}
function AccessComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49)(1, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_ng_template_71_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const modal_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r21.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 53)(7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Assign Privilege to this user. Please, be sure you aware of the consequence of this before you proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 29)(10, "table", 30)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Privilege");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Write");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AccessComponent_ng_template_71_tr_22_Template, 12, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.controls);
  }
}
class AccessComponent {
  constructor(modalService, authService, userService, pathService, requestService, toastr) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.pathService = pathService;
    this.requestService = requestService;
    this.toastr = toastr;
    this.users = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.controls = new Array();
  }
  ngOnInit() {
    this.load();
  }
  setControl(access) {
    this.controls = [];
    this.controls.push({
      key: "chat",
      value: access.chat
    });
    this.controls.push({
      key: "job",
      value: access.job
    });
    this.controls.push({
      key: "assigned",
      value: access.assigned
    });
    this.controls.push({
      key: "activity",
      value: access.activity
    });
    this.controls.push({
      key: "calendar",
      value: access.calendar
    });
    this.controls.push({
      key: "message",
      value: access.message
    });
    this.controls.push({
      key: "report",
      value: access.report
    });
    this.controls.push({
      key: "settings",
      value: access.settings
    });
    this.controls.push({
      key: "website",
      value: access.website
    });
    console.log("Logger Access Check", access);
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
  load() {
    let $this = this;
    this.userService.all(function (result, status) {
      if (status) {
        $this.users = result;
      }
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onEdit(data, priviledgeModel) {
    this.modalService.open(priviledgeModel);
    let $this = this;
    this.selected_user = data.id;
    this.requestService._get(this.pathService.LIST_PRIVILEGES + '/' + this.selected_user, function (result, status) {
      let access = $this.authService.parseAccess(result);
      $this.setControl(access);
    });
  }
  static #_ = this.ɵfac = function AccessComponent_Factory(t) {
    return new (t || AccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__.PathService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AccessComponent,
    selectors: [["app-access"]],
    decls: 73,
    vars: 9,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], ["privilegeModel", ""], [1, "border-bottom"], [1, "text-center"], ["class", "label text-danger d-flex", 4, "ngIf"], ["class", "label text-success d-flex", 4, "ngIf"], [1, "button-list"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-pencil"], [1, "label", "text-danger", "d-flex"], [1, "dot-label", "bg-danger", "mr-1", 2, "margin-top", "6px"], [1, "label", "text-success", "d-flex"], [1, "dot-label", "bg-success", "mr-1", 2, "margin-top", "6px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
    template: function AccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccessComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](70);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Assign Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div")(23, "div", 6)(24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "All Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "select", 21)(33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 29)(51, "table", 30)(52, "thead")(53, "tr")(54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AccessComponent_tr_63_Template, 14, 4, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 32)(66, "ngb-pagination", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function AccessComponent_Template_ngb_pagination_pageChange_66_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AccessComponent_ng_template_67_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, AccessComponent_ng_template_68_Template, 1, 0, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, AccessComponent_ng_template_69_Template, 27, 35, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, AccessComponent_ng_template_71_Template, 23, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](64, 5, ctx.users, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", ctx.users.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9hY2Nlc3MvYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9hY2Nlc3MvYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjs7QURFSTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURFSTtFQUNJLHFCQUFBO0FDQ1I7O0FESVE7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtBQ0RaO0FER1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRFo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUNGWjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0ZaO0FESVE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FDRlo7QURLUTtFQUNJLHNCQUFBO0FDSFo7QURLUTtFQUNJLGFBQUE7QUNIWjtBREtROztFQUVJLFlBQUE7QUNIWiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCAsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICBkcC1kYXRlLXBpY2tlcixcclxuICAgICAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICIsIi5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLFxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNhOGFmYzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNiNDg2Mztcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcbiAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 19178:
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/admin-access/admin-access.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAccessComponent: () => (/* binding */ AdminAccessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/path.service */ 26537);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);












function AdminAccessComponent_tr_57_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminAccessComponent_tr_57_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminAccessComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 28)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AdminAccessComponent_tr_57_td_11_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AdminAccessComponent_tr_57_td_12_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.user.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.ministrationService);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.ministrationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r7.user.is_Admin === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r7.user.is_Admin === 0);
  }
}
function AdminAccessComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Prev");
  }
}
function AdminAccessComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Next");
  }
}
function AdminAccessComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminAccessComponent_ng_template_63_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r10.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 34)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 35)(10, "div", 36)(11, "app-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function AdminAccessComponent_ng_template_63_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.newUser.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 36)(13, "app-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function AdminAccessComponent_ng_template_63_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.newUser.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 36)(15, "app-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function AdminAccessComponent_ng_template_63_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.newUser.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 36)(17, "app-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function AdminAccessComponent_ng_template_63_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 36)(19, "app-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function AdminAccessComponent_ng_template_63_Template_app_input_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.newUser.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Admin Register New User account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 38)(23, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminAccessComponent_ng_template_63_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r10.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "firstname")("value", ctx_r4.newUser.firstName)("placeholder", "Enter First Name")("inputModel", ctx_r4.newUser.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r4.newUser.lastName)("placeholder", "Enter Last Name")("inputModel", ctx_r4.newUser.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r4.newUser.email)("placeholder", "Enter Username")("inputModel", ctx_r4.newUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r4.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r4.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "phone")("id", "phone")("value", ctx_r4.newUser.phone)("placeholder", "Enter Phone Number")("inputModel", ctx_r4.newUser.phone);
  }
}
function AdminAccessComponent_ng_template_65_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 28)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td")(4, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AdminAccessComponent_ng_template_65_tr_22_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const data_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r21.value.read = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AdminAccessComponent_ng_template_65_tr_22_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const data_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r21.value.write = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AdminAccessComponent_ng_template_65_tr_22_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const data_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](data_r21.value.execute = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminAccessComponent_ng_template_65_tr_22_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const data_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.save(data_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r21.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r21.value.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r21.value.write);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r21.value.execute);
  }
}
function AdminAccessComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminAccessComponent_ng_template_65_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r19.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 34)(7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Assign Privilege to this user. Please, be sure you aware of the consequence of this before you proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 19)(10, "table", 20)(11, "thead")(12, "tr")(13, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AdminAccessComponent_ng_template_65_tr_22_Template, 12, 4, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.controls);
  }
}
class AdminAccessComponent {
  constructor(modalService, authService, userService, pathService, songService, requestService, toastr) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.pathService = pathService;
    this.songService = songService;
    this.requestService = requestService;
    this.toastr = toastr;
    this.users = new Array();
    this.ministriesList = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.controls = new Array();
  }
  ngOnInit() {
    // this.load()
    this.getAllMinistries();
  }
  setControl(access) {
    this.controls = [];
    this.controls.push({
      key: "chat",
      value: access.chat
    });
    this.controls.push({
      key: "job",
      value: access.job
    });
    this.controls.push({
      key: "assigned",
      value: access.assigned
    });
    this.controls.push({
      key: "activity",
      value: access.activity
    });
    this.controls.push({
      key: "calendar",
      value: access.calendar
    });
    this.controls.push({
      key: "message",
      value: access.message
    });
    this.controls.push({
      key: "report",
      value: access.report
    });
    this.controls.push({
      key: "settings",
      value: access.settings
    });
    this.controls.push({
      key: "website",
      value: access.website
    });
    console.log("Logger Access Check", access);
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
  getAllMinistries() {
    this.songService.allMin().subscribe(response => {
      console.log(response, 'check for ministry'); // Handle the response as needed
      // Assuming your response has a 'ministries' property
      this.ministriesList = response.ministries;
    }, error => {
      console.error(error); // Handle errors
    });
  }

  makeAdmin(userid) {
    const userId = userid;
    let $this = this;
    this.songService.makeAdmin(userId).subscribe(response => {
      if (response) $this.toastr.success("you are now an admin");
      this.getAllMinistries();
    }, error => console.error(error));
  }
  deleteAdmin(userid) {
    const userId = userid;
    let $this = this;
    this.songService.deleteAdmin(userId).subscribe(response => {
      if (response) $this.toastr.error("you have been removed as admin");
      this.getAllMinistries();
    }, error => console.error(error));
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onEdit(data, priviledgeModel) {
    this.modalService.open(priviledgeModel);
    let $this = this;
    this.selected_user = data.id;
    this.requestService._get(this.pathService.LIST_PRIVILEGES + '/' + this.selected_user, function (result, status) {
      let access = $this.authService.parseAccess(result);
      $this.setControl(access);
    });
  }
  static #_ = this.ɵfac = function AdminAccessComponent_Factory(t) {
    return new (t || AdminAccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__.PathService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_4__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AdminAccessComponent,
    selectors: [["app-access"]],
    decls: 67,
    vars: 9,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], ["privilegeModel", ""], [1, "border-bottom"], [4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
    template: function AdminAccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Admin Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div")(16, "div", 6)(17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "All Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "select", 16)(26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 19)(39, "table", 20)(40, "thead")(41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Minstration Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Minstration Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, AdminAccessComponent_tr_57_Template, 13, 7, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](58, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 22)(60, "ngb-pagination", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function AdminAccessComponent_Template_ngb_pagination_pageChange_60_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, AdminAccessComponent_ng_template_61_Template, 1, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, AdminAccessComponent_ng_template_62_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, AdminAccessComponent_ng_template_63_Template, 27, 35, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, AdminAccessComponent_ng_template_65_Template, 23, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](58, 5, ctx.ministriesList, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx.users.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: rgb(155, 104, 9) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9hZG1pbi1hY2Nlc3MvYWRtaW4tYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9hZG1pbi1hY2Nlc3MvYWRtaW4tYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FES0k7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtBQ0ZSO0FES0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSFI7QURNSTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDSlI7QURPSTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUNMUjtBRFFJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDTlI7QURTSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ1BSO0FEVUk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FDUlI7QURXSTtFQUNJLHNCQUFBO0FDVFI7QURZSTtFQUNJLGFBQUE7QUNWUjtBRGFJOztFQUVJLFlBQUE7QUNYUjs7QURlQTtFQUNJLDZDQUFBO0FDWkoiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIHtcclxuXHJcbiAgICBkcC1kYXRlLXBpY2tlcixcclxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjYThhZmM3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjM2I0ODYzO1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyIC5kcC1jYWxlbmRhci1kYXkge1xyXG4gICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJnLW9yYW5nZS1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxMDQsIDkpICFpbXBvcnRhbnQ7XHJcbn0iLCIub3B0aW9uLWRvdHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlcixcbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYThhZmM3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzYjQ4NjM7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XG4gIGNvbG9yOiAjM2I0ODYzICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyIC5kcC1jYWxlbmRhci1kYXkge1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5iZy1vcmFuZ2UtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxMDQsIDkpICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78032:
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/reminders/reminders.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemindersComponent: () => (/* binding */ RemindersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var src_app_shared_models_job_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/job.model */ 33132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/textarea/textarea.component */ 15782);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);











function RemindersComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Prev");
  }
}
function RemindersComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Next");
  }
}
function RemindersComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "New Reminder");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RemindersComponent_ng_template_97_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r4.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46)(7, "div", 47)(8, "div", 48)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Reminder Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function RemindersComponent_ng_template_97_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.form.callouts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 50)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function RemindersComponent_ng_template_97_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.form.technicians = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 51)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "app-textarea", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function RemindersComponent_ng_template_97_Template_app_textarea_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.form.event_staff = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 53)(21, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RemindersComponent_ng_template_97_Template_button_click_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Create Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RemindersComponent_ng_template_97_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r4.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "name")("value", ctx_r3.form.callouts)("placeholder", "...")("inputModel", ctx_r3.form.callouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r3.number)("id", "name")("value", ctx_r3.form.technicians)("placeholder", "0")("inputModel", ctx_r3.form.technicians);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "name")("value", ctx_r3.form.event_staff)("placeholder", "Enter Job Name")("inputModel", ctx_r3.form.event_staff);
  }
}
class RemindersComponent {
  constructor(modalService, authService, userService) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.users = new Array();
    this.jobs = new Array();
    this.modalValue = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
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
  onSubmit() {}
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
  static #_ = this.ɵfac = function RemindersComponent_Factory(t) {
    return new (t || RemindersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RemindersComponent,
    selectors: [["app-reminders"]],
    decls: 99,
    vars: 3,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [3, "status"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], [1, "border-bottom"], [1, "button-list"], ["href", "javascript:;", 1, "btn"], [1, "ti", "ti-pencil"], [1, "ti", "ti-trash"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-9", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "col-lg-3", "mt-4"], [1, "col-lg-12", "mt-4"], [3, "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"]],
    template: function RemindersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RemindersComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](98);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.Select2Open(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " New Reminder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "app-alert", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "div")(24, "div", 6)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "All Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "select", 22)(34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 23)(45, "div", 24)(46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 30)(52, "table", 31)(53, "thead")(54, "tr")(55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "sn");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "second");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "created");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "tbody")(72, "tr", 32)(73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Gregor Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "2022-03-09");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "td")(88, "div", 33)(89, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 37)(94, "ngb-pagination", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function RemindersComponent_Template_ngb_pagination_pageChange_94_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, RemindersComponent_ng_template_95_Template, 1, 0, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, RemindersComponent_ng_template_96_Template, 1, 0, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, RemindersComponent_ng_template_97_Template, 25, 20, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.modalValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx.reports.length)("page", ctx.page);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__.TextAreaComponent, _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9yZW1pbmRlcnMvcmVtaW5kZXJzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9yZW1pbmRlcnMvcmVtaW5kZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjs7QURFSTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURFSTtFQUNJLHFCQUFBO0FDQ1I7O0FESVE7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtBQ0RaO0FER1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRFo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUNGWjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0ZaO0FESVE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FDRlo7QURLUTtFQUNJLHNCQUFBO0FDSFo7QURLUTtFQUNJLGFBQUE7QUNIWjtBREtROztFQUVJLFlBQUE7QUNIWiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCAsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICBkcC1kYXRlLXBpY2tlcixcclxuICAgICAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICIsIi5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLFxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNhOGFmYzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNiNDg2Mztcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcbiAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class Form {}

/***/ }),

/***/ 32747:
/*!****************************************************************!*\
  !*** ./src/app/components/settings/settings-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutingModule: () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminders/reminders.component */ 78032);
/* harmony import */ var _access_access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access/access.component */ 89813);
/* harmony import */ var _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-access/admin-access.component */ 19178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);






const routes = [{
  path: '',
  children: [{
    path: 'reminder',
    component: _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_0__.RemindersComponent
  }, {
    path: 'access',
    component: _access_access_component__WEBPACK_IMPORTED_MODULE_1__.AccessComponent
  }, {
    path: 'admin-access',
    component: _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_2__.AdminAccessComponent
  }]
}];
class SettingsRoutingModule {
  static #_ = this.ɵfac = function SettingsRoutingModule_Factory(t) {
    return new (t || SettingsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SettingsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 87994:
/*!********************************************************!*\
  !*** ./src/app/components/settings/settings.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 32747);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _access_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access/access.component */ 89813);
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminders/reminders.component */ 78032);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-access/admin-access.component */ 19178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);





// import { LeafletModule } from '@asymmetrik/ngx-leaflet';












// import { as ComponentModule } from "../common/component.module";
class SettingsModule {
  static #_ = this.ɵfac = function SettingsModule_Factory(t) {
    return new (t || SettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__.LeafletModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_access_access_component__WEBPACK_IMPORTED_MODULE_2__.AccessComponent, _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_3__.RemindersComponent, _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_4__.AdminAccessComponent],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__.LeafletModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_15__.NgCircleProgressModule]
  });
})();

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
//# sourceMappingURL=src_app_components_settings_settings_module_ts.js.map