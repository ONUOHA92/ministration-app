"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_admin-users_admin-user_module_ts"],{

/***/ 4922:
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-users/admin-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserRoutingModule: () => (/* binding */ AdminUserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminders/reminders.component */ 8747);
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user/admin-user.component */ 57205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





// import { AdminU } from './admin-access/admin-access.component';
const routes = [{
  path: '',
  children: [{
    path: 'reminder',
    component: _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_0__.RemindersComponent
  }, {
    path: 'user',
    component: _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_1__.AdminUserComponent
  }]
}];
class AdminUserRoutingModule {
  static #_ = this.ɵfac = function AdminUserRoutingModule_Factory(t) {
    return new (t || AdminUserRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AdminUserRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminUserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 88267:
/*!*************************************************************!*\
  !*** ./src/app/components/admin-users/admin-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersModule: () => (/* binding */ AdminUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-routing.module */ 4922);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-user/admin-user.component */ 57205);
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminders/reminders.component */ 8747);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);





// import { LeafletModule } from '@asymmetrik/ngx-leaflet';











// import { AdminAccessComponent } from './admin-access/admin-access.component';
// import { as ComponentModule } from "../common/component.module";
class AdminUsersModule {
  static #_ = this.ɵfac = function AdminUsersModule_Factory(t) {
    return new (t || AdminUsersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AdminUsersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminUsersModule, {
    declarations: [_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_3__.RemindersComponent, _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_2__.AdminUserComponent],
    imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__.LeafletModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 57205:
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-users/admin-user/admin-user.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserComponent: () => (/* binding */ AdminUserComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/path.service */ 26537);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/backup.service */ 92305);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);















function AdminUserComponent_tr_67_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AdminUserComponent_tr_67_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AdminUserComponent_tr_67_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AdminUserComponent_tr_67_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AdminUserComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 39)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, AdminUserComponent_tr_67_td_7_Template, 2, 0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, AdminUserComponent_tr_67_td_8_Template, 2, 0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AdminUserComponent_tr_67_span_10_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, AdminUserComponent_tr_67_span_11_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 44)(13, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_tr_67_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.makeAdmin(data_r7._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_tr_67_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.deleteAdmin(data_r7._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_tr_67_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.onDelete(data_r7._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r7.is_Admin === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r7.is_Admin === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !data_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r7.status);
  }
}
function AdminUserComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function AdminUserComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function AdminUserComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53)(1, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_ng_template_73_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const modal_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r16.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 57)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "User Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 58)(10, "div", 59)(11, "app-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AdminUserComponent_ng_template_73_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.newUser.first_name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 59)(13, "app-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AdminUserComponent_ng_template_73_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.newUser.last_name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 59)(15, "app-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AdminUserComponent_ng_template_73_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.newUser.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 59)(17, "app-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AdminUserComponent_ng_template_73_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.newUser.password = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 59)(19, "app-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function AdminUserComponent_ng_template_73_Template_app_input_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.newUser.confirmPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 61)(21, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Select User Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminUserComponent_ng_template_73_Template_select_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.newUser.is_Admin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Regular User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, " Admin Register New User account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 66)(31, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_ng_template_73_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.createUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_ng_template_73_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const modal_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r16.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "first_name")("value", ctx_r4.newUser.first_name)("placeholder", "Enter First Name")("inputModel", ctx_r4.newUser.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "text")("id", "last_name")("value", ctx_r4.newUser.last_name)("placeholder", "Enter Last Name")("inputModel", ctx_r4.newUser.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "email")("id", "email")("value", ctx_r4.newUser.email)("placeholder", "Enter email")("inputModel", ctx_r4.newUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "password")("id", "password")("value", ctx_r4.newUser.password)("placeholder", "Enter Password")("inputModel", ctx_r4.newUser.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "password")("id", "confirmPassword")("value", ctx_r4.newUser.confirmPassword)("placeholder", "Enter Confirm Password")("inputModel", ctx_r4.newUser.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.newUser.is_Admin);
  }
}
function AdminUserComponent_ng_template_75_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 39)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td")(4, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminUserComponent_ng_template_75_tr_22_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const data_r29 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r29.value.read = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td")(6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminUserComponent_ng_template_75_tr_22_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const data_r29 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r29.value.write = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td")(8, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminUserComponent_ng_template_75_tr_22_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const data_r29 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](data_r29.value.execute = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td")(10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_ng_template_75_tr_22_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const data_r29 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.save(data_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r29.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r29.value.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r29.value.write);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r29.value.execute);
  }
}
function AdminUserComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53)(1, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_ng_template_75_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const modal_r27 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r27.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 57)(7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Assign Privilege to this user. Please, be sure you aware of the consequence of this before you proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 29)(10, "table", 30)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Privilege");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Write");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AdminUserComponent_ng_template_75_tr_22_Template, 12, 4, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.controls);
  }
}
class AdminUserComponent {
  constructor(modalService, authService, userService, pathService, requestService, backupService, songService, toastr) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.pathService = pathService;
    this.requestService = requestService;
    this.backupService = backupService;
    this.songService = songService;
    this.toastr = toastr;
    this.users = new Array();
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.searchTerm = '';
    this.filteredUsers = [];
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.controls = new Array();
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.filteredUsers = this.users;
  }
  search() {
    this.filteredUsers = this.users.filter(user => user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  ngOnInit() {
    // this.load()
    this.loadUsers();
  }
  // setControl(access) {
  //   this.controls = [];
  //   this.controls.push({ key: "chat", value: access.chat });
  //   this.controls.push({ key: "job", value: access.job });
  //   this.controls.push({ key: "assigned", value: access.assigned });
  //   this.controls.push({ key: "activity", value: access.activity });
  //   this.controls.push({ key: "calendar", value: access.calendar });
  //   this.controls.push({ key: "message", value: access.message });
  //   this.controls.push({ key: "report", value: access.report });
  //   this.controls.push({ key: "settings", value: access.settings });
  //   this.controls.push({ key: "website", value: access.website });
  //   console.log("Logger Access Check", access)
  // }
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

  createUser() {
    // Add logic to handle form submission here
    // This is where you can access newUser properties and perform actions like API calls, validation, etc.
    this.authService.registerUser(this.newUser).subscribe(response => {
      console.log(response, 'registration response here');
      // Handle the registration success here
      if (response) {
        this.toastr.success(response.message);
        // Clear the form fields after successful registration
        this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
        this.modalService.dismissAll();
        this.loadUsers();
      }
    }, error => {
      console.error('Error during registration:', error);
      // Handle the registration error here
    });
  }

  loadUsers() {
    let $this = this;
    this.backupService.getUsers().subscribe(response => {
      console.log(response, 'ceck=================');
      $this.users = response.users;
      $this.filteredUsers = $this.users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  // public ministryId: any
  onDelete(data, target) {
    this.userId = data;
    console.log(this.userId);
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
      this.backupService.deleteUserId(this.userId).subscribe(response => {
        $this.toastr.success("Request Successfully completed");
        $this.loadUsers();
      });
    }
  }
  makeAdmin(userid) {
    const userId = userid;
    let $this = this;
    this.songService.makeAdmin(userId).subscribe(response => {
      if (response) $this.toastr.success("you are now an admin");
      $this.loadUsers();
    }, error => console.error(error));
  }
  deleteAdmin(userid) {
    const userId = userid;
    let $this = this;
    this.songService.deleteAdmin(userId).subscribe(response => {
      if (response) $this.toastr.error("you have been removed as admin");
      $this.loadUsers();
    }, error => console.error(error));
  }
  static #_ = this.ɵfac = function AdminUserComponent_Factory(t) {
    return new (t || AdminUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_path_service__WEBPACK_IMPORTED_MODULE_3__.PathService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_5__.BackupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_6__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AdminUserComponent,
    selectors: [["app-access"]],
    decls: 78,
    vars: 11,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search user", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", 1, "btn", "bg-orange-color", "text-white"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["id", "page1", "aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], ["privilegeModel", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [4, "ngIf"], [1, "text-center"], ["class", "label text-danger d-flex", 4, "ngIf"], ["class", "label text-success d-flex", 4, "ngIf"], [1, "button-list"], [1, "btn", "btn-success", "text-white", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-danger", "ml-5", 3, "click"], ["href", "javascript:;", 1, "btn", "ml-5", 3, "click"], [1, "ti", "ti-trash"], [1, "label", "text-danger", "d-flex"], [1, "dot-label", "bg-danger", "mr-1", 2, "margin-top", "6px"], [1, "label", "text-success", "d-flex"], [1, "dot-label", "bg-success", "mr-1", 2, "margin-top", "6px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "col-lg-12", "mt-4"], ["for", "isAdminSelect"], ["id", "isAdminSelect", "name", "is_Admin", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
    template: function AdminUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminUserComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](74);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " Create User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div")(23, "div", 6)(24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "All Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "select", 21)(33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24)(46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminUserComponent_Template_input_ngModelChange_46_listener($event) {
          return ctx.searchTerm = $event;
        })("keyup", function AdminUserComponent_Template_input_keyup_46_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 29)(51, "table", 30)(52, "thead")(53, "tr")(54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, AdminUserComponent_tr_67_Template, 19, 7, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](68, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 32)(70, "ngb-pagination", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AdminUserComponent_Template_ngb_pagination_pageChange_70_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, AdminUserComponent_ng_template_71_Template, 1, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, AdminUserComponent_ng_template_72_Template, 1, 0, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, AdminUserComponent_ng_template_73_Template, 35, 36, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, AdminUserComponent_ng_template_75_Template, 23, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "app-alert", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onTriggerChange", function AdminUserComponent_Template_app_alert_onTriggerChange_77_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](68, 7, ctx.filteredUsers, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx.users.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationPrevious, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9hZG1pbi11c2VyL2FkbWluLXVzZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL2FkbWluLXVzZXJzL2FkbWluLXVzZXIvYWRtaW4tdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREtJOztFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7QUNGUjtBREtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUk7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0pSO0FET0k7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FDTFI7QURRSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ05SO0FEU0k7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7QUNQUjtBRFVJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ1JSO0FEV0k7RUFDSSxzQkFBQTtBQ1RSO0FEWUk7RUFDSSxhQUFBO0FDVlI7QURhSTs7RUFFSSxZQUFBO0FDWFI7O0FEZ0JBO0VBQ0ksb0NBQUE7QUNiSiIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tZG90czpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAge1xyXG5cclxuICAgIGRwLWRhdGUtcGlja2VyLFxyXG4gICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgY29sb3I6ICNhOGFmYzc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzYjQ4NjM7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xyXG4gICAgICAgIGNvbG9yOiAjM2I0ODYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XHJcbiAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmJnLW9yYW5nZS1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3YTJkICFpbXBvcnRhbnQ7XHJcbn0iLCIub3B0aW9uLWRvdHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlcixcbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYThhZmM3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jdXJyZW50LWRheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzYjQ4NjM7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOjpuZy1kZWVwIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd2Vla2RheSB7XG4gIGNvbG9yOiAjM2I0ODYzICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyIC5kcC1jYWxlbmRhci1kYXkge1xuICB3aWR0aDogMzNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcbjo6bmctZGVlcCBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5iZy1vcmFuZ2UtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3YTJkICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8747:
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-users/reminders/reminders.component.ts ***!
  \*************************************************************************/
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
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9yZW1pbmRlcnMvcmVtaW5kZXJzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9yZW1pbmRlcnMvcmVtaW5kZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjs7QURFSTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURFSTtFQUNJLHFCQUFBO0FDQ1I7O0FESVE7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtBQ0RaO0FER1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRFo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUNGWjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRlo7QURJUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0ZaO0FESVE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FDRlo7QURLUTtFQUNJLHNCQUFBO0FDSFo7QURLUTtFQUNJLGFBQUE7QUNIWjtBREtROztFQUVJLFlBQUE7QUNIWiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCAsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICBkcC1kYXRlLXBpY2tlcixcclxuICAgICAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtbmF2LWJ0bnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXHJcbiAgICAgICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLXJpZ2h0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICIsIi5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLFxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNhOGFmYzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNiNDg2Mztcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcbiAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }),

/***/ 92305:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/web/backup.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackupService: () => (/* binding */ BackupService)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 74048);



class BackupService {
  constructor(http) {
    this.http = http;
  }
  deleteBackup(ministryId, backupId) {
    const deleteUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/delete/${ministryId}/backup/${backupId}`;
    return this.http.delete(deleteUrl);
  }
  createBackup(ministryId, body) {
    const createUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/${ministryId}/backup`;
    return this.http.post(createUrl, body);
  }
  updateBackup(ministryId, body, backupId) {
    const updateUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/ministries/update/${ministryId}/backup/${backupId}`;
    return this.http.put(updateUrl, body);
  }
  getUsers() {
    const getUserURl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/users`;
    return this.http.get(getUserURl);
  }
  deleteUserId(userId) {
    const deleteUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/delete/${userId}`;
    return this.http.delete(deleteUrl);
  }
  static #_ = this.ɵfac = function BackupService_Factory(t) {
    return new (t || BackupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BackupService,
    factory: BackupService.ɵfac,
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
//# sourceMappingURL=src_app_components_admin-users_admin-user_module_ts.js.map