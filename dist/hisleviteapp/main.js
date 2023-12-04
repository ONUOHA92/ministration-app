"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _authentication_login_authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/login/authentication.component */ 2183);
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/register/register.component */ 88878);
/* harmony import */ var _authentication_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/home/home.component */ 89122);
/* harmony import */ var _shared_layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/content-layout/content-layout.component */ 29422);
/* harmony import */ var _shared_layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/full-layout/full-layout.component */ 34783);
/* harmony import */ var _shared_layouts_message_layout_message_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/message-layout/message-layout.component */ 53941);
/* harmony import */ var _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content.routes */ 52165);
/* harmony import */ var _shared_routes_full_content_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/routes/full-content.routes */ 52857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51197);











const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _authentication_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'login',
  component: _authentication_login_authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent
}, {
  path: 'register',
  component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: '',
  component: _shared_layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_4__.FullLayoutComponent,
  children: _shared_routes_full_content_routes__WEBPACK_IMPORTED_MODULE_7__.Full_Content_Routes
}, {
  path: '',
  component: _shared_layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__.ContentLayoutComponent,
  children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_6__.Content_Routes
}, {
  path: '',
  component: _shared_layouts_message_layout_message_layout_component__WEBPACK_IMPORTED_MODULE_5__.MessageLayoutComponent,
  children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_6__.Message_Routes
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
      // relativeLinkResolution: 'legacy'
    })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _shared_services_path_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/path.service */ 26537);
/* harmony import */ var _shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/request.service */ 35467);
/* harmony import */ var _shared_services_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/route.service */ 62473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 99185);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/tap-to-top/tap-to-top.component */ 55842);







class AppComponent {
  // public isSpinner = true;
  constructor(pathService, requestService, routeService, router) {
    this.pathService = pathService;
    this.requestService = requestService;
    this.routeService = routeService;
    this.router = router;
    this.title = 'feramy';
  }
  ngOnInit() {
    //   setTimeout(() => {
    //     this.isSpinner = false;
    //   },1000)
  }
  ngAfterViewInit() {
    let status = this.routeService.segment(1) == '';
    console.log("status", status);
    // this.tryCheckAuthentication(status)
  }

  tryCheckAuthentication(status) {
    if (status) {
      return;
    }
    let $this = this;
    setTimeout(() => {
      $this.checkLogin();
    }, 5000);
  }
  checkLogin() {
    let $this = this;
    this.requestService._get(this.pathService.CHECK_TOKEN_ACCESS, function (response, status) {
      if (!status) {
        $this.router.navigate(['/login']);
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_path_service__WEBPACK_IMPORTED_MODULE_0__.PathService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_route_service__WEBPACK_IMPORTED_MODULE_2__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-tap-to-top");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_4__.TapToTopComponent],
    styles: [".dropdown-toggle::after {\n  display: none !important;\n}\n  .main-header .dropdown-menu.show {\n  top: 48px !important;\n  left: auto !important;\n}\n  .side-header .main-profile-menu .dropdown-menu {\n  top: 53px !important;\n}\n  .main-header-center .form-control.ng-select {\n  width: 160px !important;\n}\n  .ng-select {\n  padding: 0;\n}\n  .ng-select .ng-select-container {\n  border: none;\n  color: #a8afc7;\n}\n  .dark-theme .ng-select.ng-select-opened > .ng-select-container {\n  background: #252542;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n  .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  color: #a8afc7;\n}\n  .ng-select .ng-select-container:hover {\n  box-shadow: none;\n}\n  .ng-select.ng-select-opened .ng-select-container,   .ng-dropdown-panel {\n  z-index: 9 !important;\n}\n  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,   .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,   .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #f8f9ff;\n  color: #4A93FE;\n}\n  .ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: none;\n  box-shadow: none;\n}\n  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,   .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label {\n  font-weight: 400;\n}\n  .rating .fas.fa-star,   .user-info-rating .far.fa-star,   .fe.fe-star,   .fa.fa-star {\n  letter-spacing: 3px;\n}\n  .accordion .card-header button {\n  width: 100%;\n  text-align: left;\n}\n  .toast-header small {\n  margin-left: 50%;\n}\n  .hljs {\n  background: none;\n  color: inherit;\n}\n  .leaflet-container {\n  z-index: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUNBUjtBREdJO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0RSO0FER0k7RUFDSSxvQkFBQTtBQ0RSO0FER0k7RUFDSSx1QkFBQTtBQ0RSO0FESUk7RUFDSSxVQUFBO0FDRlI7QURLSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDSFI7QURLSTtFQUNJLG1CQUFBO0VBQ0Esa0NBQUE7QUNIUjtBREtJO0VBQ0ksY0FBQTtBQ0hSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FES0k7O0VBRUkscUJBQUE7QUNIUjtBRE1JOzs7RUFHSSx5QkFBQTtFQUNBLGNBQUE7QUNKUjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETUk7O0VBRUksZ0JBQUE7QUNKUjtBRE1JOzs7O0VBSUksbUJBQUE7QUNKUjtBRE9JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDTFI7QURRSTtFQUNJLGdCQUFBO0FDTlI7QURVSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEV0k7RUFDSSxxQkFBQTtBQ1RSIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4taGVhZGVyIC5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgICAgIHRvcDogNDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaWRlLWhlYWRlciAubWFpbi1wcm9maWxlLW1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHRvcDogNTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1haW4taGVhZGVyLWNlbnRlciAuZm9ybS1jb250cm9sLm5nLXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nLXNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgIH1cclxuICAgIC5kYXJrLXRoZW1lIC5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjUyNTQyO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2IzYjNiMyAjY2NjICNkOWQ5ZDk7XHJcbiAgICB9XHJcbiAgICAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2E4YWZjNztcclxuICAgIH1cclxuICAgIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgLm5nLXNlbGVjdC1jb250YWluZXIsXHJcbiAgICAubmctZHJvcGRvd24tcGFuZWx7XHJcbiAgICAgICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLFxyXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkLFxyXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmY7XHJcbiAgICAgICAgY29sb3I6ICM0QTkzRkU7XHJcbiAgICB9XHJcbiAgICAubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIC5uZy1vcHRpb24tbGFiZWwsXHJcbiAgICAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5yYXRpbmcgLmZhcy5mYS1zdGFyLFxyXG4gICAgLnVzZXItaW5mby1yYXRpbmcgLmZhci5mYS1zdGFyLFxyXG4gICAgLmZlLmZlLXN0YXIsXHJcbiAgICAuZmEuZmEtc3RhcntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvcmRpb24gLmNhcmQtaGVhZGVyIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAudG9hc3QtaGVhZGVyIHNtYWxse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuaGxqc3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmxlYWZsZXQtY29udGFpbmVye1xyXG4gICAgICAgIHotaW5kZXg6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIjo6bmctZGVlcCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWFpbi1oZWFkZXIgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHRvcDogNDhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNpZGUtaGVhZGVyIC5tYWluLXByb2ZpbGUtbWVudSAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogNTNweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYWluLWhlYWRlci1jZW50ZXIgLmZvcm0tY29udHJvbC5uZy1zZWxlY3Qge1xuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2E4YWZjNztcbn1cbjo6bmctZGVlcCAuZGFyay10aGVtZSAubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMyNTI1NDI7XG4gIGJvcmRlci1jb2xvcjogI2IzYjNiMyAjY2NjICNkOWQ5ZDk7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYThhZmM3O1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCAubmctc2VsZWN0LWNvbnRhaW5lcixcbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwge1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCxcbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQsXG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZmO1xuICBjb2xvcjogIzRBOTNGRTtcbn1cbjo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIC5uZy1vcHRpb24tbGFiZWwsXG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIC5uZy1vcHRpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOjpuZy1kZWVwIC5yYXRpbmcgLmZhcy5mYS1zdGFyLFxuOjpuZy1kZWVwIC51c2VyLWluZm8tcmF0aW5nIC5mYXIuZmEtc3Rhcixcbjo6bmctZGVlcCAuZmUuZmUtc3Rhcixcbjo6bmctZGVlcCAuZmEuZmEtc3RhciB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG46Om5nLWRlZXAgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46Om5nLWRlZXAgLnRvYXN0LWhlYWRlciBzbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG46Om5nLWRlZXAgLmhsanMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbjo6bmctZGVlcCAubGVhZmxldC1jb250YWluZXIge1xuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 23380);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _authentication_login_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/login/authentication.component */ 2183);
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/register/register.component */ 88878);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 56208);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _app_shared_interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app/shared/interceptors/response.interceptor */ 4740);
/* harmony import */ var _app_shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../app/shared/interceptors/token.interceptor */ 91518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 84085);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 65364);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 4419);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51197);







// import { UsersComponent } from './components/users/users/users.component';













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
      useClass: _app_shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.TokenInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
      useClass: _app_shared_interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_5__.ResponseInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_16__.NgChartsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _authentication_login_authentication_component__WEBPACK_IMPORTED_MODULE_2__.AuthenticationComponent, _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_16__.NgChartsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule]
  });
})();

/***/ }),

/***/ 89122:
/*!*******************************************************!*\
  !*** ./src/app/authentication/home/home.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class HomeComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  navigateToLogin() {
    this.router.navigate(['/login']); // Replace '/login' with your login page route
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-authentication"]],
    decls: 8,
    vars: 0,
    consts: [[1, "page", "main-signin-wrapper"], [1, "d-flex", "justify-content-center", "align-items-center"], [3, "click"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "this is home componnent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() {
          return ctx.navigateToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2183:
/*!******************************************************************!*\
  !*** ./src/app/authentication/login/authentication.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationComponent: () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 87257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/auth.service */ 19483);
/* harmony import */ var _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cookie.service */ 78681);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);









function AuthenticationComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 26);
  }
}
function AuthenticationComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter above password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AuthenticationComponent {
  constructor(formBuilder, route, router, authentication, cookieService, toastService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authentication = authentication;
    this.cookieService = cookieService;
    this.toastService = toastService;
    this.submitted = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  Submit() {
    let $this = this;
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    this.authentication.login(username, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(data => {
      console.log(data, 'datatatatatata');
      console.log(data.token, "check for token");
      if (data.token) {
        $this.cookieService.setCookie('user_pass', JSON.stringify(data), 1);
        this.toastService.success(data.message);
        $this.router.navigate(['/dashboard']);
      }
    }, error => {
      console.log("data for login: ", error);
    });
  }
  static #_ = this.ɵfac = function AuthenticationComponent_Factory(t) {
    return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuthenticationComponent,
    selectors: [["app-authentication"]],
    decls: 42,
    vars: 4,
    consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-orange-color"], [1, "mt-5", "pt-4", "p-2", "pos-absolute"], [1, "clearfix"], [1, "text-white"], [1, "text-white", "mt-5"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-10", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-2", "mb-2"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group", "text-left"], ["formControlName", "username", "type", "text", 1, "form-control"], ["class", "tx-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", 1, "form-control"], [1, "btn", "ripple", "bg-orange-color", "text-white", "btn-block", 3, "disabled"], [1, "text-left", "mt-5", "ml-0"], [1, "mb-1", "text-orange"], ["href", "javascript:;"], [1, "tx-danger"]],
    template: function AuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "RCCG CRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "His Levite app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Admin Account Login Console. Minstration app Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 4)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthenticationComponent_Template_form_ngSubmit_21_listener() {
          return ctx.Submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Signin to Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Sign In to manage staff day to day activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AuthenticationComponent_div_30_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AuthenticationComponent_div_35_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginFormControl.username.touched || ctx.submitted) && (ctx.loginFormControl.username.errors == null ? null : ctx.loginFormControl.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginFormControl.password.touched || ctx.submitted) && (ctx.loginFormControl.password.errors == null ? null : ctx.loginFormControl.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".login-color[_ngcontent-%COMP%] {\n  background-color: rgba(77, 76, 178, 0.9019607843);\n}\n\n.tx-white-6[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.white-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n\ntext-orange[_ngcontent-%COMP%] {\n  color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGlEQUxnQjtBQ0VwQjs7QURNQTtFQUNJLCtCQVJjO0FDS2xCOztBRE1BO0VBQ0ksWUFYUztBQ1FiOztBRE1BO0VBQ0ksb0NBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEoiLCJzb3VyY2VzQ29udGVudCI6WyIkbG9naW5QcmltYXJ5Q29sb3I6ICM0RDRDQjJFNjtcbiRsb2dpbldoaXRlQ29sb3I6ICNGRkZGRkY5OTtcbiRjb2xvcldoaXRlOiAjZmZmZjtcblxuLmxvZ2luLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbG9naW5QcmltYXJ5Q29sb3I7XG59XG5cbi50eC13aGl0ZS02IHtcbiAgICBjb2xvcjogJGxvZ2luV2hpdGVDb2xvcjtcbn1cblxuLndoaXRlLWxpbmsge1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbn1cblxuLmJnLW9yYW5nZS1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufVxuXG50ZXh0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNlNTdhMmQgIWltcG9ydGFudDtcbn0iLCIubG9naW4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCA3NiwgMTc4LCAwLjkwMTk2MDc4NDMpO1xufVxuXG4udHgtd2hpdGUtNiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi53aGl0ZS1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufVxuXG50ZXh0LW9yYW5nZSB7XG4gIGNvbG9yOiAjZTU3YTJkICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88878:
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/auth.service */ 19483);
/* harmony import */ var _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cookie.service */ 78681);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);








function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 31);
  }
}
function RegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 31);
  }
}
function RegisterComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 31);
  }
}
function RegisterComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", role_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](role_r7);
  }
}
function RegisterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 31);
  }
}
function RegisterComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter above password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RegisterComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter above password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class RegisterComponent {
  constructor(formBuilder, route, router, authentication, cookieService, toastService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authentication = authentication;
    this.cookieService = cookieService;
    this.toastService = toastService;
    this.submitted = false;
    this.roles = ['user', 'admin'];
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[A-Za-z ]+$')]],
      last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[A-Za-z ]+$')]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      confirmPassword: ['']
    });
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  Submit() {
    let $this = this;
    let first_name = this.registerForm.controls['first_name'].value;
    let last_name = this.registerForm.controls['last_name'].value;
    let email = this.registerForm.controls['email'].value;
    let role = this.registerForm.controls['role'].value;
    let password = this.registerForm.controls['password'].value;
    let confirmPassword = this.registerForm.controls['confirmPassword'].value;
    const payload = {
      first_name,
      last_name,
      email,
      role,
      password,
      confirmPassword
    };
    this.authentication.registerUser(payload).subscribe(response => {
      console.log(response, 'registration response here');
      // Handle the registration success here
      if (response) {
        this.toastService.success(response.message);
        $this.router.navigate(['/login']);
      }
    }, error => {
      console.error('Error during registration:', error);
      // Handle the registration error here
    });
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-authentication"]],
    decls: 62,
    vars: 9,
    consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-primary", "details"], [1, "mt-5", "pt-4", "p-2", "pos-absolute"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-10", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-0", "mb-1"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "text-left", "mb-0"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group-register", "text-left"], ["formControlName", "first_name", "type", "text", 1, "form-control"], ["class", "tx-danger", 4, "ngIf"], ["formControlName", "last_name", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "text", 1, "form-control"], ["formControlName", "role", 1, "form-control"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "password", "type", "password", 1, "form-control"], ["formControlName", "confirmPassword", "type", "password", 1, "form-control"], [1, "btn", "ripple", "mt-3", "btn-main-primary", "btn-block", 3, "disabled"], [1, "text-left", "mt-3", "ml-0"], [1, "mb-1"], ["href", "/login"], [1, "tx-danger"], [3, "value"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7)(8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Admin Account Sign up Console. Feremy User Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 4)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
          return ctx.Submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Sigup to Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Sign up to manage staff day to day activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17)(29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegisterComponent_div_32_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 22)(42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, RegisterComponent_option_44_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, RegisterComponent_div_45_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, RegisterComponent_div_50_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 17)(52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, RegisterComponent_div_55_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28)(59, "div", 29)(60, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.first_name.touched || ctx.submitted) && (ctx.registerFormControl.first_name.errors == null ? null : ctx.registerFormControl.first_name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.last_name.touched || ctx.submitted) && (ctx.registerFormControl.last_name.errors == null ? null : ctx.registerFormControl.last_name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.email.touched || ctx.submitted) && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.role.touched || ctx.submitted) && (ctx.registerFormControl.role.errors == null ? null : ctx.registerFormControl.role.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.password.touched || ctx.submitted) && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.registerFormControl.confirmPassword.touched || ctx.submitted) && (ctx.registerFormControl.confirmPassword.errors == null ? null : ctx.registerFormControl.confirmPassword.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".login-color[_ngcontent-%COMP%] {\n  background-color: rgba(77, 76, 178, 0.9019607843);\n}\n\n.tx-white-6[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGlEQUpnQjtBQ0VwQjs7QURLQTtFQUNJLCtCQVBjO0FDS2xCIiwic291cmNlc0NvbnRlbnQiOlsiJGxvZ2luUHJpbWFyeUNvbG9yOiAjNEQ0Q0IyRTY7XG4kbG9naW5XaGl0ZUNvbG9yOiAjRkZGRkZGOTk7XG5cbi5sb2dpbi1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxvZ2luUHJpbWFyeUNvbG9yO1xufVxuXG4udHgtd2hpdGUtNiB7XG4gICAgY29sb3I6ICRsb2dpbldoaXRlQ29sb3I7XG59IiwiLmxvZ2luLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNzYsIDE3OCwgMC45MDE5NjA3ODQzKTtcbn1cblxuLnR4LXdoaXRlLTYge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 701:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components-horizontal/hori-header/hori-header.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoriHeaderComponent: () => (/* binding */ HoriHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/layout.service */ 82366);
/* harmony import */ var _services_horizontal_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/horizontal-nav.service */ 4681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/fullscreen-toggle.directive */ 90933);








function HoriHeaderComponent_ng_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r4.name, " ");
  }
}
function HoriHeaderComponent_ng_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r5.name, " ");
  }
}
function HoriHeaderComponent_ng_option_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
  }
}
class HoriHeaderComponent {
  constructor(layoutService, horizontalNavService) {
    this.layoutService = layoutService;
    this.horizontalNavService = horizontalNavService;
    this.isCollapsed = true;
    this.isSidebar = false;
    this.toggleClass = "fe fe-maximize";
    this.categories = [{
      id: 1,
      name: 'IT Projects'
    }, {
      id: 2,
      name: 'Business Case'
    }, {
      id: 3,
      name: 'Microsoft Project'
    }, {
      id: 4,
      name: 'Risk Management'
    }, {
      id: 5,
      name: 'Team Building'
    }];
    this.sidebar = false;
  }
  ngOnInit() {}
  fullScreenToggle() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }
  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }
  toggleSidebar() {
    if (this.sidebar = !this.sidebar) {
      document.querySelector('body').classList.add('main-navbar-show');
    } else {
      document.querySelector('body').classList.remove('main-navbar-show');
    }
  }
  static #_ = this.ɵfac = function HoriHeaderComponent_Factory(t) {
    return new (t || HoriHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_horizontal_nav_service__WEBPACK_IMPORTED_MODULE_1__.HorizontalNavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HoriHeaderComponent,
    selectors: [["app-hori-header"]],
    decls: 305,
    vars: 11,
    consts: [[1, "main-header", "side-header"], [1, "container"], [1, "main-header-left"], ["href", "javascript:void(0)", "id", "mainSidebarToggle", 1, "main-header-menu-icon", "d-lg-none", 3, "click"], ["routerLink", "/dashboard", 1, "main-logo"], [1, "main-header-center"], [1, "responsive-logo"], ["routerLink", "/dashboard"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "mobile-logo"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "mobile-logo-dark"], [1, "input-group"], [1, "input-group-btn", "search-panel"], ["placeholder", "All categories", 1, "form-control", "p-0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "search", "placeholder", "Search for anything...", 1, "form-control"], [1, "btn", "#e57a2d;"], [1, "fe", "fe-search"], [1, "main-header-right"], ["ngbDropdown", "", 1, "header-search"], ["ngbDropdownToggle", "", 1, "nav-link", "icon", "header-search"], [1, "fe", "fe-search", "header-icons"], ["ngbDropdownMenu", ""], [1, "main-form-search", "p-2"], ["placeholder", "All categories", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-search"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["ngbDropdown", "", 1, "main-header-notification", "flag-dropdown"], ["ngbDropdownToggle", "", 1, "nav-link", "icon", "country-Flag"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["cx", "256", "cy", "256", "r", "256", "fill", "#f0f0f0"], ["fill", "#0052b4"], ["d", "M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z"], ["fill", "#d80027"], ["d", "M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"], ["d", "M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex"], [1, "avatar", "mr-3", "align-self-center", "bg-transparent"], ["src", "../../assets/img/flags/french_flag.jpg", "alt", "img"], [1, "d-flex"], [1, "mt-2"], ["src", "../../assets/img/flags/germany_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/italy_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/russia_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/spain_flag.jpg", "alt", "img"], [1, "dropdown", "d-md-flex"], ["href", "javascript:void(0)", "appFullscreenToggle", "", 1, "nav-link", "icon", "full-screen-link", 3, "click"], ["ngbDropdown", "", 1, "main-header-notification"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", 1, "nav-link", "icon"], [1, "fe", "fe-bell", "header-icons"], [1, "badge", "badge-danger", "nav-link-badge"], [1, "header-navheading"], [1, "main-notification-text"], [1, "badge", "badge-pill", "badge-primary", "ml-3"], [1, "main-notification-list"], [1, "media", "new"], [1, "main-img-user", "online"], ["alt", "avatar", "src", "../../assets/img/users/5.jpg"], [1, "media-body"], [1, "media"], [1, "main-img-user"], ["alt", "avatar", "src", "../../assets/img/users/2.jpg"], ["alt", "avatar", "src", "../../assets/img/users/3.jpg"], [1, "dropdown-footer"], ["href", "javascript:void(0)"], [1, "main-header-notification"], ["routerLink", "/apps/chat", 1, "nav-link", "icon"], [1, "fe", "fe-message-square", "header-icons"], [1, "badge", "badge-success", "nav-link-badge"], ["ngbDropdown", "", 1, "main-profile-menu"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", 1, "d-flex"], ["alt", "avatar", "src", "../../assets/img/users/1.jpg"], [1, "main-notification-title"], ["ngbDropdownItem", "", "routerLink", "/pages/profile", 1, "border-top"], [1, "fe", "fe-user"], ["ngbDropdownItem", "", "routerLink", "/pages/profile", 1, "dropdown-item"], [1, "fe", "fe-edit"], ["ngbDropdownItem", "", "routerLink", "/pages/profile", 1, ""], [1, "fe", "fe-settings"], [1, "fe", "fe-compass"], ["ngbDropdownItem", "", "href", "signin.html", 1, ""], [1, "fe", "fe-power"], [1, "dropdown", "d-md-flex", "header-settings"], ["href", "javascript:void(0)", 1, "nav-link", "icon", 3, "click"], [1, "fe", "fe-align-right", "header-icons"], ["type", "button", 1, "navbar-toggler", "navresponsive-toggler", 3, "click"], [1, "fe", "fe-more-vertical", "header-icons", "navbar-toggler-icon"], [1, "mobile-main-header"], [1, "mb-1", "navbar", "navbar-expand-lg", "nav", "nav-item", "navbar-nav-right", "responsive-navbar", "navbar-dark"], ["id", "navbarSupportedContent-4", 1, "collapse", "navbar-collapse", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "d-flex", "order-lg-2", "ml-auto"], [1, "dropdown"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "main-header-notification", "mt-2"], ["ngbDropdownItem", "", "routerLink", "/", 1, ""], [1, "dropdown", "header-settings"], [3, "value"]],
    template: function HoriHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_a_click_3_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HoriHeaderComponent_ng_option_15_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 17)(20, "div", 18)(21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 21)(24, "div", 22)(25, "div", 10)(26, "div", 11)(27, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HoriHeaderComponent_ng_option_28_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "circle", 25)(33, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 27)(35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "path", 34)(42, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21)(44, "a", 36)(45, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 39)(48, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 36)(51, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 39)(54, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "a", 36)(57, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 39)(60, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a", 36)(63, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 39)(66, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 36)(69, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 39)(72, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 45)(75, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_a_click_75_listener() {
          return ctx.fullScreenToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 47)(78, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 21)(83, "div", 51)(84, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "You have 1 unread notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 54)(89, "div", 55)(90, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 58)(93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Congratulate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Olivia James");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " for New template start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Oct 15 12:32pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 59)(101, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 58)(104, "p")(105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Joshua Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " New Message Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Oct 13 02:56am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 59)(111, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 58)(114, "p")(115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Elizabeth Lewis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, " added new schedule realease");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Oct 12 10:40pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 63)(121, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "View All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 65)(124, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 69)(129, "a", 70)(130, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 21)(133, "div", 51)(134, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Sonia Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " Account Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 82)(157, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_a_click_157_listener() {
          return ctx.toggleSidebarNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_button_click_159_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](164);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 87)(162, "div", 88)(163, "div", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngbCollapseChange", function HoriHeaderComponent_Template_div_ngbCollapseChange_163_listener($event) {
          return ctx.isCollapsed = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 91)(166, "div", 18)(167, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 21)(170, "div", 22)(171, "div", 10)(172, "div", 11)(173, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](174, HoriHeaderComponent_ng_option_174_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "circle", 25)(179, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 27)(181, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "path", 34)(188, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 21)(190, "a", 36)(191, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 39)(194, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "a", 36)(197, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 39)(200, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "a", 36)(203, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 39)(206, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "a", 36)(209, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 39)(212, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "a", 36)(215, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 39)(218, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 92)(221, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_a_click_221_listener() {
          return ctx.fullScreenToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 47)(224, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](225, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "div", 93)(229, "div", 51)(230, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "You have 1 unread notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 54)(235, "div", 55)(236, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 58)(239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Congratulate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Olivia James");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, " for New template start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Oct 15 12:32pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 59)(247, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 58)(250, "p")(251, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "Joshua Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, " New Message Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Oct 13 02:56am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 59)(257, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](258, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 58)(260, "p")(261, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Elizabeth Lewis");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, " added new schedule realease");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Oct 12 10:40pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 63)(267, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "View All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 94)(270, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 69)(275, "a", 70)(276, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](277, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "div", 21)(279, "div", 51)(280, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "Sonia Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](291, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, " Account Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](294, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](297, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, " Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 96)(303, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HoriHeaderComponent_Template_a_click_303_listener() {
          return ctx.toggleSidebarNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.toggleClass, " fullscreen-button fullscreen header-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.toggleClass, " fullscreen-button fullscreen header-icons");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownItem, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgOptionComponent, _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_2__.FullscreenToggleDirective],
    styles: [".mobileIcon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (min-width: 480px) and (max-width: 786px) {\n  .mobileIcon[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .deskIcon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMtaG9yaXpvbnRhbC9ob3JpLWhlYWRlci9ob3JpLWhlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzLWhvcml6b250YWwvaG9yaS1oZWFkZXIvaG9yaS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGNBQUE7RUNDTjtFRENFO0lBQ0ksYUFBQTtFQ0NOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlSWNvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzg2cHgpIHtcclxuICAgIC5tb2JpbGVJY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmRlc2tJY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIubW9iaWxlSWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzg2cHgpIHtcbiAgLm1vYmlsZUljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5kZXNrSWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 57756:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components-horizontal/horizontal-menu/horizontal-menu.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalMenuComponent: () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_horizontal_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/horizontal-nav.service */ 4681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);





const _c0 = function (a0) {
  return [a0];
};
function HorizontalMenuComponent_li_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_3_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menuItem_r1.icon, " sidemenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function HorizontalMenuComponent_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_3_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.toggleNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menuItem_r1.icon, " sidemenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
const _c1 = function () {
  return {
    exact: true
  };
};
function HorizontalMenuComponent_li_3_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_3_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const childrenItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.toggleNavActive(childrenItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenItem_r14.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, childrenItem_r14.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r14.title, " ");
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_3_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const childrenItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.toggleNavActive(childrenItem_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenItem_r14.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, childrenItem_r14.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r14.title, " ");
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenSubItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, childrenSubItem_r27.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r27.title, " ");
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const childrenSubItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.toggleNavActive(childrenSubItem_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenSubItem_r27.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r27.title, " ");
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem1_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenSubItem1_r37.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenSubItem1_r37.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem1_r37.title, "");
  }
}
const _c2 = function (a0) {
  return {
    "show": a0
  };
};
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_li_1_a_1_Template, 2, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem1_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, childrenSubItem1_r37.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem1_r37.type === "link");
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_li_1_Template, 2, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubItem_r27.children);
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_a_1_Template, 2, 6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_a_2_Template, 2, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, childrenSubItem_r27.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r27.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r27.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r27.children);
  }
}
function HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_li_1_Template, 4, 6, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r14.children);
  }
}
const _c3 = function (a0, a1) {
  return {
    active: a0,
    "show": a1
  };
};
function HorizontalMenuComponent_li_3_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_a_1_Template, 2, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_3_li_1_a_2_Template, 2, 6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_3_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, childrenItem_r14.active, childrenItem_r14.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r14.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r14.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r14.children);
  }
}
function HorizontalMenuComponent_li_3_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_3_li_1_Template, 4, 7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function HorizontalMenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_a_1_Template, 3, 7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_a_2_Template, 3, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, menuItem_r1.active, menuItem_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
class HorizontalMenuComponent {
  constructor(router, horizontalNavService, elRef) {
    this.router = router;
    this.horizontalNavService = horizontalNavService;
    this.elRef = elRef;
    this.horizontalNavService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }
  //Active NavBar State
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
  // Click Toggle menu
  toggleNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }
  ngOnInit() {}
  onWindowScroll(e) {
    if (window.pageYOffset > 60) {
      let element = document.querySelector('.sticky');
      element.classList.add('sticky-pin');
    } else {
      let element = document.querySelector('.sticky');
      element.classList.remove('sticky-pin');
    }
  }
  static #_ = this.ɵfac = function HorizontalMenuComponent_Factory(t) {
    return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_horizontal_nav_service__WEBPACK_IMPORTED_MODULE_0__.HorizontalNavService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HorizontalMenuComponent,
    selectors: [["app-horizontal-menu"]],
    hostBindings: function HorizontalMenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HorizontalMenuComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 4,
    vars: 1,
    consts: [[1, "main-navbar", "hor-menu", "sticky", 3, "scroll"], [1, "container"], [1, "nav"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "ngClass"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link with-sub", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-sub", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "nav-link", "with-sub", 3, "routerLink", "click"], [1, "nav-sub"], ["class", "nav-sub-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-sub-item", 3, "ngClass"], ["class", "nav-sub-link", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["class", "nav-sub-link with-sub", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions", "click"], ["routerLinkActive", "active", 1, "nav-sub-link", "with-sub", 3, "routerLink", "routerLinkActiveOptions", "click"], ["class", "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-sub-link with-sub", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-sub-link", "with-sub", 3, "routerLink", "click"], ["class", "nav-sub-link", 3, "routerLink", 4, "ngIf"], [1, "nav-sub-link", 3, "routerLink"]],
    template: function HorizontalMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HorizontalMenuComponent_Template_div_scroll_0_listener($event) {
          return ctx.onWindowScroll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_Template, 4, 7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68014:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 89650);


class FooterComponent {
  constructor() {
    this.today = Date.now();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 12,
    vars: 4,
    consts: [[1, "main-footer", "text-center"], [1, "container"], [1, "row", "row-sm"], [1, "col-md-12"], ["href", "javascript:void(0)"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Feramy Suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | All rights reserved. Developer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Phynix Media Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx.today, "y"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10074:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 45303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ 82366);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19483);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nav.service */ 82484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/fullscreen-toggle.directive */ 90933);










function HeaderComponent_ng_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r5.name, " ");
  }
}
function HeaderComponent_ng_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
  }
}
function HeaderComponent_h6_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.user.first_name);
  }
}
function HeaderComponent_ng_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r7.name, " ");
  }
}
class HeaderComponent {
  // public profile_image = `${environment}/profile/images/user_default.jpeg`
  constructor(layoutService, authService, navServices) {
    this.layoutService = layoutService;
    this.authService = authService;
    this.navServices = navServices;
    this.isCollapsed = true;
    this.isSidebar = false;
    this.config = {};
    this.toggleClass = "fe fe-maximize";
    this.categories = [{
      id: 1,
      name: 'Jobs'
    }, {
      id: 2,
      name: 'Users'
    }];
    this.layoutSubscription = layoutService.changeEmitted.subscribe(direction => {
      const dir = direction.direction;
    });
    this.user = this.authService.currentUser();
    console.log(this.user, 'user --------');
  }
  ngOnInit() {
    // this.profile();
  }
  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }
  toggleSidebar() {
    if (this.navServices.collapseSidebar = !this.navServices.collapseSidebar) {
      document.querySelector('.main-body').classList.add('main-sidebar-hide');
    } else {
      document.querySelector('.main-body').classList.remove('main-sidebar-hide');
    }
  }
  toggleMobileSidebar() {
    if (this.navServices.collapseSidebar = !this.navServices.collapseSidebar) {
      document.querySelector('.main-body').classList.add('main-sidebar-show');
    } else {
      document.querySelector('.main-body').classList.remove('main-sidebar-show');
    }
  }
  ngAfterViewInit() {
    const sidebar = document.querySelector('.side-menu');
    let ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](sidebar);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_3__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 261,
    vars: 13,
    consts: [[1, "main-header", "side-header", "sticky"], [1, "container-fluid"], [1, "main-header-left", "deskIcon"], ["href", "javascript:void(0)", "id", "mainSidebarToggle", 1, "main-header-menu-icon", 3, "click"], [1, "main-header-left", "mobileIcon"], [1, "main-header-center"], [1, "responsive-logo"], [1, "input-group"], [1, "input-group-btn", "search-panel"], ["placeholder", "All categories", 1, "form-control", "p-0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "search", "placeholder", "Search for anything...", 1, "form-control"], [1, "btn", "#e57a2d;"], [1, "fe", "fe-search"], [1, "main-header-right"], ["ngbDropdown", "", 1, "header-search"], ["ngbDropdownToggle", "", 1, "nav-link", "icon", "header-search"], [1, "fe", "fe-search", "header-icons"], ["ngbDropdownMenu", ""], [1, "main-form-search", "p-2"], ["placeholder", "All categories", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-search"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "dropdown", "d-md-flex"], ["href", "javascript:void (0)", "appFullscreenToggle", "", 1, "nav-link", "icon", "full-screen-link"], ["ngbDropdown", "", 1, "main-header-notification"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", 1, "nav-link", "icon"], [1, "fe", "fe-bell", "header-icons"], [1, "badge", "badge-danger", "nav-link-badge"], [1, "header-navheading"], [1, "main-notification-text"], [1, "badge", "badge-pill", "badge-primary", "ml-3"], [1, "main-notification-list"], [1, "dropdown-footer"], ["href", "javascript:void(0)"], [1, "fe", "fe-message-square", "header-icons"], [1, "badge", "badge-success", "nav-link-badge"], ["ngbDropdown", "", 1, "main-profile-menu"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", 1, "d-flex"], [1, "fe", "fe-user-plus", "style-icon"], ["class", "main-notification-title", 4, "ngIf"], ["ngbDropdownItem", "", 1, "border-top", 3, "routerLink"], [1, "fe", "fe-user"], ["ngbDropdownItem", "", "href", "", 1, ""], [1, "fe", "fe-power"], [1, "dropdown", "d-md-flex", "header-settings"], ["href", "javascript:void(0)", 1, "nav-link", "icon", 3, "click"], [1, "fe", "fe-align-right", "header-icons"], ["type", "button", 1, "navbar-toggler", "navresponsive-toggler", 3, "click"], [1, "fe", "fe-more-vertical", "header-icons", "navbar-toggler-icon"], [1, "mobile-main-header"], [1, "mb-1", "navbar", "navbar-expand-lg", "nav", "nav-item", "navbar-nav-right", "responsive-navbar", "navbar-dark"], ["id", "navbarSupportedContent-4", 1, "collapse", "navbar-collapse", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "d-flex", "order-lg-2", "ml-auto"], ["ngbDropdown", "", 1, "main-header-notification", "flag-dropdown"], ["ngbDropdownToggle", "", 1, "nav-link", "icon", "country-Flag"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512"], ["cx", "256", "cy", "256", "r", "256", "fill", "#f0f0f0"], ["fill", "#0052b4"], ["d", "M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z"], ["fill", "#d80027"], ["d", "M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z"], ["d", "M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex"], [1, "avatar", "mr-3", "align-self-center", "bg-transparent"], ["src", "../../assets/img/flags/french_flag.jpg", "alt", "img"], [1, "d-flex"], [1, "mt-2"], ["src", "../../assets/img/flags/germany_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/italy_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/russia_flag.jpg", "alt", "img"], ["src", "../../assets/img/flags/spain_flag.jpg", "alt", "img"], [1, "dropdown"], ["href", "javascript:void(0)", "appFullscreenToggle", "", 1, "nav-link", "icon", "full-screen-link"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "media", "new"], [1, "main-img-user", "online"], ["alt", "avatar", "src", "../../assets/img/users/5.jpg"], [1, "media-body"], [1, "media"], [1, "main-img-user"], ["alt", "avatar", "src", "../../assets/img/users/2.jpg"], ["alt", "avatar", "src", "../../assets/img/users/3.jpg"], ["ngbDropdown", "", 1, "main-header-notification", "mt-2"], ["alt", "avatar", "src", "../../assets/img/users/10.jpg"], ["alt", "avatar", "src", "../../assets/img/users/8.jpg"], ["alt", "avatar", "src", "../../assets/img/users/11.jpg"], ["alt", "avatar", "src", "../../assets/img/users/1.jpg"], [1, "main-notification-title"], ["ngbDropdownItem", "", "routerLink", "/pages/profile", 1, "border-top"], ["ngbDropdownItem", "", "routerLink", "/pages/profile", 1, ""], [1, "fe", "fe-edit"], [1, "fe", "fe-settings"], [1, "fe", "fe-compass"], ["ngbDropdownItem", "", "routerLink", "/", 1, ""], [1, "dropdown", "header-settings"], [1, "jumps-prevent", 2, "padding-top", "64px"], [3, "value"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() {
          return ctx.toggleMobileSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Ministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HeaderComponent_ng_option_15_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "div", 7)(26, "div", 8)(27, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, HeaderComponent_ng_option_28_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "circle", 22)(33, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24)(35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26)(38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 18)(43, "div", 30)(44, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "You have 0 unread notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 34)(50, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "No Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 26)(53, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 18)(58, "div", 30)(59, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "0 new Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 34)(63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "No Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 38)(66, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 18)(69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, HeaderComponent_h6_70_Template, 2, 1, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 46)(80, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_80_listener() {
          return ctx.toggleSidebarNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_82_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](87);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r3.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 51)(85, "div", 52)(86, "div", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngbCollapseChange", function HeaderComponent_Template_div_ngbCollapseChange_86_listener($event) {
          return ctx.isCollapsed = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 55)(89, "div", 15)(90, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 18)(93, "div", 19)(94, "div", 7)(95, "div", 8)(96, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, HeaderComponent_ng_option_97_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "circle", 22)(102, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 56)(104, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "svg", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](106, "circle", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "g", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "path", 63)(111, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 18)(113, "a", 65)(114, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 68)(117, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "a", 65)(120, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](121, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 68)(123, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "a", 65)(126, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](127, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 68)(129, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "a", 65)(132, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](133, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 68)(135, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "a", 65)(138, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 68)(141, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 74)(144, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 26)(147, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 76)(152, "div", 30)(153, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "You have 1 unread notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 33)(158, "div", 77)(159, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](160, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 80)(162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "Congratulate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "Olivia James");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, " for New template start");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Oct 15 12:32pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 81)(170, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](171, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 80)(173, "p")(174, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Joshua Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, " New Message Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "Oct 13 02:56am");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 81)(180, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 80)(183, "p")(184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Elizabeth Lewis");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, " added new schedule realease");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "Oct 12 10:40pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "div", 34)(190, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "View All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 85)(193, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](194, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "div", 18)(198, "div", 30)(199, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](200, "3 new Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "div", 33)(202, "div", 77)(203, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](204, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "div", 80)(206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207, "Paul Molive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "I'm sorry but i'm not sure how...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "div", 81)(211, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](212, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "div", 80)(214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "Sahar DaryAll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "set ! Now, time to get to you now...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 81)(219, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](220, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "div", 80)(222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "Barney Cull ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Here are some products ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "div", 34)(227, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "div", 38)(230, "a", 39)(231, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](232, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "div", 18)(234, "div", 30)(235, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "Sonia Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](240, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](241, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](243, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](246, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, " Account Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](249, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](252, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](253, " Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](255, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](256, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "div", 97)(258, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_258_listener() {
          return ctx.toggleSidebarNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](259, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](260, "div", 98);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", ctx.toggleClass, " fullscreen-button fullscreen header-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", ctx.user.id, "/details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", ctx.toggleClass, " fullscreen-button fullscreen header-icons");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownItem, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionComponent, _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_4__.FullscreenToggleDirective],
    styles: [".mobileIcon {\n  display: none;\n}\n@media screen and (min-width: 0px) and (max-width: 786px) {\n    .mobileIcon {\n    display: block;\n  }\n    .deskIcon {\n    display: none;\n  }\n}\n@media (max-width: 339px) {\n    .responsive-navbar.navbar .navbar-collapse {\n    padding-left: 0rem;\n  }\n}\n\n.style-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVI7QURHSTtFQUNJO0lBQ0ksY0FBQTtFQ0RWO0VESU07SUFDSSxhQUFBO0VDRlY7QUFDRjtBREtJO0VBQ0k7SUFDSSxrQkFBQTtFQ0hWO0FBQ0Y7O0FEVUE7RUFDSSxZQUFBO0FDUEoiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICAgLm1vYmlsZUljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzg2cHgpIHtcclxuICAgICAgICAubW9iaWxlSWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2tJY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMzOXB4KSB7XHJcbiAgICAgICAgLnJlc3BvbnNpdmUtbmF2YmFyLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLnN0eWxlLWljb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59IiwiOjpuZy1kZWVwIC5tb2JpbGVJY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDc4NnB4KSB7XG4gIDo6bmctZGVlcCAubW9iaWxlSWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgOjpuZy1kZWVwIC5kZXNrSWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMzOXB4KSB7XG4gIDo6bmctZGVlcCAucmVzcG9uc2l2ZS1uYXZiYXIubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxufVxuXG4uc3R5bGUtaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 99185:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);




function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LoaderComponent {
  constructor(router) {
    this.router = router;
    this.loader = true;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        this.loader = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
        this.loader = false;
      }
    }, () => {
      this.loader = false;
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.loader = false;
  }
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["id", "global-loader"], ["src", "../../assets/img/loader.svg", "alt", "Loader", 1, "loader-img"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 3, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87281:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/notification-sidebar/notification-sidebar.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationSidebarComponent: () => (/* binding */ NotificationSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/layout.service */ 82366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);




const _c0 = ["sidebar"];
function NotificationSidebarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7)(4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hangout With friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 11)(10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13)(12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Prepare for presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11)(18, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Prepare for presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 11)(26, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "System Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 11)(34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13)(36, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Do something more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 11)(42, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13)(44, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "System Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 11)(50, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Find an Idea");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 11)(58, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 15)(60, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Project review");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 11)(66, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 16)(70, "div", 17)(71, "div")(72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Founder & CEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 17)(79, "div")(80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 17)(87, "div")(88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Recruitment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "87");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 17)(95, "div")(96, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 17)(103, "div")(104, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class NotificationSidebarComponent {
  constructor(elRef, renderer, layoutService) {
    this.elRef = elRef;
    this.renderer = renderer;
    this.layoutService = layoutService;
    this.isOpen = false;
    this.layoutSub = layoutService.SidebarNotifyChangeEmitted.subscribe(value => {
      if (this.isOpen) {
        this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
        this.isOpen = false;
      } else {
        this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
        this.isOpen = true;
      }
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
  onClose() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }
  static #_ = this.ɵfac = function NotificationSidebarComponent_Factory(t) {
    return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NotificationSidebarComponent,
    selectors: [["app-notification-sidebar"]],
    viewQuery: function NotificationSidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidebar = _t.first);
      }
    },
    decls: 6,
    vars: 1,
    consts: [[1, "sidebar", "sidebar-right", "sidebar-animate"], ["sidebar", ""], [1, "sidebar-icon"], ["href", "javascript:void(0)", 1, "text-right", "float-right", "text-dark", "fs-20", 3, "click"], [1, "fe", "fe-x"], ["class", "sidebar-body", 4, "ngIf"], [1, "sidebar-body"], [1, "d-flex", "p-3"], [1, "ckbox"], ["checked", "", "type", "checkbox"], [1, "ml-auto"], ["placement", "top", "ngbTooltip", "Edit", 1, "fe", "fe-edit-2", "text-primary", "mr-2"], ["placement", "top", "ngbTooltip", "Delete", 1, "fe", "fe-trash-2", "text-danger", "mr-2"], [1, "d-flex", "p-3", "border-top"], ["type", "checkbox"], [1, "d-flex", "p-3", "border-top", "mb-0"], [1, "p-4"], [1, "main-traffic-detail-item"], [1, "progress"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "20", "role", "progressbar", 1, "progress-bar", "progress-bar-xs", "wd-20p"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "15", "role", "progressbar", 1, "progress-bar", "progress-bar-xs", "bg-secondary", "wd-15p"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "45", "role", "progressbar", 1, "progress-bar", "progress-bar-xs", "bg-success", "wd-45p"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "25", "role", "progressbar", 1, "progress-bar", "progress-bar-xs", "bg-info", "wd-25p"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "25", "role", "progressbar", 1, "progress-bar", "progress-bar-xs", "bg-danger", "wd-25p"]],
    template: function NotificationSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_3_listener() {
          return ctx.onClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NotificationSidebarComponent_div_5_Template, 110, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip],
    styles: [".sidebar-icon {\n  right: 36px !important;\n  top: 6px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNBUiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcclxuICAgIC5zaWRlYmFyLWljb24ge1xyXG4gICAgICAgIHJpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsIjo6bmctZGVlcCAuc2lkZWJhci1pY29uIHtcbiAgcmlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgdG9wOiA2cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37058:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidemenu/sidemenu.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidemenuComponent: () => (/* binding */ SidemenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 82484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);





function SidemenuComponent_li_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuItem_r1.headTitle);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function SidemenuComponent_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidemenuComponent_li_7_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.toggleNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15)(2, "span", 16)(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menuItem_r1.icon, " sidemenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuItem_r1.title);
  }
}
function SidemenuComponent_li_7_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge ", menuItem_r1.badgeClass, " side-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.badgeValue, " ");
  }
}
const _c1 = function (a0) {
  return {
    "d-none": a0
  };
};
function SidemenuComponent_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidemenuComponent_li_7_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.toggleNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15)(2, "span", 16)(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SidemenuComponent_li_7_a_3_span_6_Template, 2, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menuItem_r1.icon, " sidemenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", menuItem_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.badgeClass && menuItem_r1.badgeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, menuItem_r1.badgeClass));
  }
}
const _c2 = function () {
  return {
    exact: true
  };
};
function SidemenuComponent_li_7_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidemenuComponent_li_7_ul_4_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const childrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.toggleNavActive(childrenItem_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenItem_r18.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, childrenItem_r18.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r18.title, " ");
  }
}
function SidemenuComponent_li_7_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidemenuComponent_li_7_ul_4_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const childrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.toggleNavActive(childrenItem_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenItem_r18.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenItem_r18.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r18.title, " ");
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenSubItem_r31.type ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, childrenSubItem_r31.path) : null)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r31.title, " ");
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const childrenSubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.toggleNavActive(childrenSubItem_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r31.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenSubItem_r31.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r31.title, " ");
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem1_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenSubItem1_r41.type ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenSubItem1_r41.path) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem1_r41.title, "");
  }
}
const _c3 = function (a0) {
  return {
    "show": a0
  };
};
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_li_1_a_1_Template, 2, 4, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem1_r41 = ctx.$implicit;
    const childrenSubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, childrenSubItem1_r41.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem1_r41.type === "link" && childrenSubItem_r31.show);
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_li_1_Template, 2, 4, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubItem_r31.children);
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_a_1_Template, 2, 6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_a_2_Template, 3, 4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_ul_3_Template, 2, 1, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, childrenSubItem_r31.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r31.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r31.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r31.children);
  }
}
function SidemenuComponent_li_7_ul_4_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_ul_3_li_1_Template, 4, 6, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r18.children);
  }
}
function SidemenuComponent_li_7_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_a_1_Template, 2, 6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidemenuComponent_li_7_ul_4_li_1_a_2_Template, 3, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidemenuComponent_li_7_ul_4_li_1_ul_3_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, childrenItem_r18.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r18.type === "link" && childrenItem_r18.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r18.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r18.children);
  }
}
function SidemenuComponent_li_7_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_ul_4_li_1_Template, 4, 6, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
const _c4 = function (a0, a1) {
  return {
    active: a0,
    "show": a1
  };
};
function SidemenuComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidemenuComponent_li_7_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidemenuComponent_li_7_a_2_Template, 6, 7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidemenuComponent_li_7_a_3_Template, 8, 11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidemenuComponent_li_7_ul_4_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c4, menuItem_r1.active, menuItem_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.headTitle && menuItem_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link" && menuItem_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub" && menuItem_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
class SidemenuComponent {
  constructor(router, navServices, elRef) {
    this.router = router;
    this.navServices = navServices;
    this.elRef = elRef;
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }
  //Active NavBar State
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        document.querySelector('.main-body').classList.remove('main-sidebar-show');
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
  // Click Toggle menu
  toggleNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SidemenuComponent_Factory(t) {
    return new (t || SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SidemenuComponent,
    selectors: [["app-sidemenu"]],
    decls: 8,
    vars: 1,
    consts: [[1, "main-sidebar", "main-sidebar-sticky", "side-menu"], [1, "sidemenu-logo"], ["routerLink", "/dashboard", 1, "main-logo"], [1, "text-white"], [1, "main-sidebar-body"], [1, "nav"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "ngClass"], ["class", "nav-header", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link with-sub", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-sub", 4, "ngIf"], [1, "nav-header"], [1, "nav-label"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"], [1, "shape1"], [1, "shape2"], [1, "sidemenu-label"], ["routerLinkActive", "active", 1, "nav-link", "with-sub", 3, "routerLink", "click"], [3, "class", 4, "ngIf"], [1, "angle", "fe", "fe-chevron-right", 3, "ngClass"], [1, "nav-sub"], ["class", "nav-sub-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-sub-item", 3, "ngClass"], ["class", "nav-sub-link", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["class", "nav-sub-link with-sub1", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-sub1", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions", "click"], [1, "nav-sub-link", "with-sub1", 3, "routerLink", "click"], [1, "angle", "fe", "fe-chevron-right"], [1, "nav-sub1"], ["class", "nav-sub-item1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-sub-item1", 3, "ngClass"], ["class", "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-sub-link with-sub2", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-sub2", 4, "ngIf"], [1, "nav-sub-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-sub-link", "with-sub2", 3, "routerLink", "click"], [1, "nav-sub2"], ["class", "nav-sub-item2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "nav-sub-item2", 3, "ngClass"], ["class", "nav-sub-link", 3, "routerLink", 4, "ngIf"], [1, "nav-sub-link", 3, "routerLink"]],
    template: function SidemenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "RCCG CRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SidemenuComponent_li_7_Template, 5, 8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: [".main-sidebar {\n  z-index: 99 !important;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #9b6809 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0FDQVI7O0FESUE7RUFDSSxvQ0FBQTtBQ0RKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tYWluLXNpZGViYXIge1xyXG4gICAgICAgIHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2UtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliNjgwOSAhaW1wb3J0YW50O1xyXG59IiwiOjpuZy1kZWVwIC5tYWluLXNpZGViYXIge1xuICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliNjgwOSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 55842:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TapToTopComponent: () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 89650);


const _c0 = function (a0) {
  return {
    "display": a0
  };
};
class TapToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {}
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  taptotop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
  static #_ = this.ɵfac = function TapToTopComponent_Factory(t) {
    return new (t || TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TapToTopComponent,
    selectors: [["app-tap-to-top"]],
    hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 2,
    vars: 3,
    consts: [["href", "javascript:void(0)", "id", "back-to-top", 3, "ngStyle", "click"], [1, "fe", "fe-arrow-up"]],
    template: function TapToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_a_click_0_listener() {
          return ctx.taptotop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.show ? "block" : "none"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90933:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/fullscreen-toggle.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenToggleDirective: () => (/* binding */ FullscreenToggleDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);


class FullscreenToggleDirective {
  constructor(document) {
    this.document = document;
    this.fullScreen = false;
  }
  ngOnInit() {
    this.elem = document.documentElement;
    this.idata = document.documentElement.querySelector('body').querySelector('.nav-link.icon.full-screen-link').querySelector('i');
    document.addEventListener('fullscreenchange', this.exitHandler);
    document.addEventListener('webkitfullscreenchange', this.exitHandler);
    document.addEventListener('mozfullscreenchange', this.exitHandler);
    document.addEventListener('MSFullscreenChange', this.exitHandler);
  }
  onClick() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
        this.idata.classList.add('fe-minimize');
        this.idata.classList.remove('fe-maximize');
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
        this.idata.classList.add('fe-minimize');
        this.idata.classList.remove('fe-maximize');
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
        this.idata.classList.add('fe-minimize');
        this.idata.classList.remove('fe-maximize');
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
        this.idata.classList.add('fe-minimize');
        this.idata.classList.remove('fe-maximize');
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
        this.idata.classList.remove('fe-minimize');
        this.idata.classList.add('fe-maximize');
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
        this.idata.classList.remove('fe-minimize');
        this.idata.classList.add('fe-maximize');
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
        this.idata.classList.remove('fe-minimize');
        this.idata.classList.add('fe-maximize');
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
        this.idata.classList.remove('fe-minimize');
        this.idata.classList.add('fe-maximize');
      }
    }
  }
  exitHandler() {
    if (!document.fullscreenElement) {
      this.idd = document.querySelector('body').querySelector('.nav-link.icon.full-screen-link').querySelector('i');
      this.idd.classList.remove('fe-minimize');
      this.idd.classList.add('fe-maximize');
    }
  }
  static #_ = this.ɵfac = function FullscreenToggleDirective_Factory(t) {
    return new (t || FullscreenToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: FullscreenToggleDirective,
    selectors: [["", "appFullscreenToggle", ""]],
    hostBindings: function FullscreenToggleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullscreenToggleDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    }
  });
}

/***/ }),

/***/ 4419:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 19483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.authService.isLoggedIn();
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4740:
/*!*************************************************************!*\
  !*** ./src/app/shared/interceptors/response.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponseInterceptor: () => (/* binding */ ResponseInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70672);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 56997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 19483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);





class ResponseInterceptor {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  intercept(request, next) {
    // Response
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if ([422, 401, 403, 203].indexOf(error.status) !== -1) {
        // Sign out
        this.authService.logout();
        this.router.navigate(['/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function ResponseInterceptor_Factory(t) {
    return new (t || ResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ResponseInterceptor,
    factory: ResponseInterceptor.ɵfac
  });
}

/***/ }),

/***/ 91518:
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptor: () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 19483);


class TokenInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    // console.log("Interceptore check:: ")
    if (!this.validate(request)) {
      const headers = request.headers.set("Authorization", `Bearer ${this.authService.token()}`);
      const newRequest = request.clone({
        headers
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
  validate(request) {
    if (!request.url.endsWith('login') || request.url.indexOf("signup") != -1 || request.url.indexOf("forgot-password") != -1 || request.url.indexOf("reset-password") != -1) {
      return false;
    }
    return true;
  }
  static #_ = this.ɵfac = function TokenInterceptor_Factory(t) {
    return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TokenInterceptor,
    factory: TokenInterceptor.ɵfac
  });
}

/***/ }),

/***/ 99641:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/layouts-horizontal/hori-full-layout/hori-full-layout.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoriFullLayoutComponent: () => (/* binding */ HoriFullLayoutComponent)
/* harmony export */ });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 45303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer/footer.component */ 68014);
/* harmony import */ var _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/notification-sidebar/notification-sidebar.component */ 87281);
/* harmony import */ var _components_horizontal_hori_header_hori_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components-horizontal/hori-header/hori-header.component */ 701);
/* harmony import */ var _components_horizontal_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components-horizontal/horizontal-menu/horizontal-menu.component */ 57756);







class HoriFullLayoutComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    // document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="main-navbar-backdrop"></div>');
    // DEMO Swticher Base
    $('.demo_changer .demo-icon').click(function () {
      if ($('.demo_changer').hasClass("active")) {
        $('.demo_changer').animate({
          "right": "-290px"
        }, function () {
          $('.demo_changer').toggleClass("active");
        });
      } else {
        $('.demo_changer').animate({
          "right": "0px"
        }, function () {
          $('.demo_changer').toggleClass("active");
        });
      }
    });
  }
  ngAfterViewInit() {
    new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"]('.sidebar-right1', {
      useBothWheelAxes: true,
      suppressScrollX: true
    });
  }
  static #_ = this.ɵfac = function HoriFullLayoutComponent_Factory(t) {
    return new (t || HoriFullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HoriFullLayoutComponent,
    selectors: [["app-hori-full-layout"]],
    decls: 9,
    vars: 0,
    consts: [[1, "horizontalmenu"], [1, "page"], [1, "main-content", "pt-0"], [1, "container"]],
    template: function HoriFullLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-hori-header")(3, "app-horizontal-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-footer")(8, "app-notification-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.NotificationSidebarComponent, _components_horizontal_hori_header_hori_header_component__WEBPACK_IMPORTED_MODULE_3__.HoriHeaderComponent, _components_horizontal_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29422:
/*!***************************************************************************!*\
  !*** ./src/app/shared/layouts/content-layout/content-layout.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentLayoutComponent: () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class ContentLayoutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContentLayoutComponent_Factory(t) {
    return new (t || ContentLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentLayoutComponent,
    selectors: [["app-content-layout"]],
    decls: 2,
    vars: 0,
    consts: [[1, "main-body", "leftmenu"]],
    template: function ContentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90275:
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/error-layout/error-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLayoutComponent: () => (/* binding */ ErrorLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/footer/footer.component */ 68014);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ 10074);
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidemenu/sidemenu.component */ 37058);
/* harmony import */ var _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/notification-sidebar/notification-sidebar.component */ 87281);







class ErrorLayoutComponent {
  constructor() {}
  ngOnInit() {}
  hoverEffect($event) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'main-sidebar-open' : '';
  }
  static #_ = this.ɵfac = function ErrorLayoutComponent_Factory(t) {
    return new (t || ErrorLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ErrorLayoutComponent,
    selectors: [["app-error-layout"]],
    decls: 11,
    vars: 1,
    consts: [[1, "wrapper"], [1, "main-body", "leftmenu", 3, "ngClass"], [1, "page"], [3, "mouseover", "mouseout"], [1, "main-content", "side-content", "pt-0", "error-bg"], [1, "container-fluid"], [1, "inner-body"]],
    template: function ErrorLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-sidemenu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function ErrorLayoutComponent_Template_app_sidemenu_mouseover_3_listener($event) {
          return ctx.hoverEffect($event);
        })("mouseout", function ErrorLayoutComponent_Template_app_sidemenu_mouseout_3_listener($event) {
          return ctx.hoverEffect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-footer")(10, "app-notification-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.mainSidebarOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__.SidemenuComponent, _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.NotificationSidebarComponent],
    styles: [".main-footer {\n  display: block;\n  bottom: 0px !important;\n  position: absolute;\n  right: 0;\n  width: 100%;\n  margin-bottom: -48px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xheW91dHMvZXJyb3ItbGF5b3V0L2Vycm9yLWxheW91dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2Vycm9yLWxheW91dC9lcnJvci1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNBUiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcclxuICAgIC5tYWluLWZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTQ4cHg7XHJcbiAgICB9XHJcbn0iLCI6Om5nLWRlZXAgLm1haW4tZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAtNDhweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 34783:
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/full-layout/full-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullLayoutComponent: () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/footer/footer.component */ 68014);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ 10074);
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidemenu/sidemenu.component */ 37058);
/* harmony import */ var _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/notification-sidebar/notification-sidebar.component */ 87281);







class FullLayoutComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  hoverEffect($event) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'main-sidebar-open' : '';
  }
  clickonBody() {
    document.querySelector('.main-body').classList.remove('main-sidebar-show');
  }
  static #_ = this.ɵfac = function FullLayoutComponent_Factory(t) {
    return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FullLayoutComponent,
    selectors: [["app-full-layout"]],
    decls: 10,
    vars: 1,
    consts: [[1, "main-body", "leftmenu", 3, "ngClass"], [1, "page"], [3, "mouseover", "mouseout"], [1, "main-content", "side-content", "pt-0"], [1, "container-fluid"], [1, "inner-body", 3, "click"]],
    template: function FullLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-sidemenu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function FullLayoutComponent_Template_app_sidemenu_mouseover_2_listener($event) {
          return ctx.hoverEffect($event);
        })("mouseout", function FullLayoutComponent_Template_app_sidemenu_mouseout_2_listener($event) {
          return ctx.hoverEffect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_6_listener() {
          return ctx.clickonBody();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-footer")(9, "app-notification-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.mainSidebarOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__.SidemenuComponent, _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.NotificationSidebarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53941:
/*!***************************************************************************!*\
  !*** ./src/app/shared/layouts/message-layout/message-layout.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageLayoutComponent: () => (/* binding */ MessageLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class MessageLayoutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MessageLayoutComponent_Factory(t) {
    return new (t || MessageLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MessageLayoutComponent,
    selectors: [["app-message-layout"]],
    decls: 3,
    vars: 0,
    consts: [[1, "main-body", "leftmenu"], [1, "page", "main-signin-wrapper", "bg-primary", "br-0-f"]],
    template: function MessageLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7822:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/search-date.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchDatePipe: () => (/* binding */ SearchDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class SearchDatePipe {
  transform(value) {
    let result = [];
    for (let i = 1; i <= 31; i++) {
      result.push(i);
    }
    return result;
  }
  static #_ = this.ɵfac = function SearchDatePipe_Factory(t) {
    return new (t || SearchDatePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "searchDate",
    type: SearchDatePipe,
    pure: true
  });
}

/***/ }),

/***/ 52165:
/*!*************************************************!*\
  !*** ./src/app/shared/routes/content.routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content_Routes: () => (/* binding */ Content_Routes),
/* harmony export */   Message_Routes: () => (/* binding */ Message_Routes)
/* harmony export */ });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
const Content_Routes = [{
  path: 'custom',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_custom_custom_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/custom/custom.module */ 62348)).then(m => m.CustomModule)
}];
const Message_Routes = [{
  path: 'alert-pages',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("default-src_app_components_elements_elements_module_ts"), __webpack_require__.e("default-node_modules_ks89_angular-modal-gallery_fesm2015_ks89-angular-modal-gallery_js-src_ap-266e86"), __webpack_require__.e("default-src_app_components_all-ministration_all-ministration_component_ts-src_app_components_-24d079"), __webpack_require__.e("default-src_app_components_pages_pages_editor_model_pages_model_ts-src_app_components_website-a4ecf1"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/pages/pages.module */ 69592)).then(m => m.PagesModule)
}, {
  path: 'custom-pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_custom_custom_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/custom/custom.module */ 62348)).then(m => m.CustomModule)
}];

/***/ }),

/***/ 52857:
/*!******************************************************!*\
  !*** ./src/app/shared/routes/full-content.routes.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Full_Content_Routes: () => (/* binding */ Full_Content_Routes)
/* harmony export */ });
//Route for content layout with sidebar, navbar and footer.
const Full_Content_Routes = [{
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/dashboard/dashboard.module */ 51010)).then(m => m.DashboardModule)
}, {
  path: 'users',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/users/users.module */ 17653)).then(m => m.UsersModule)
}, {
  path: 'settings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/settings/settings.module */ 87994)).then(m => m.SettingsModule)
}, {
  path: 'all-songs',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("src_app_components_all-songs_songs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/all-songs/songs.module */ 12779)).then(m => m.SongsModule)
}, {
  path: 'reviews',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_reviews_reviews_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/reviews/reviews.module */ 85382)).then(m => m.ReviewsModule)
}, {
  path: 'website',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("default-src_app_components_pages_pages_editor_model_pages_model_ts-src_app_components_website-a4ecf1"), __webpack_require__.e("src_app_components_website_website_module_ts-src_app_shared_models_auth_models_ts-src_app_sha-2617ca")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/website/website.module */ 903)).then(m => m.WebsiteModule)
}, {
  path: 'admin',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_admin-users_admin-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/admin-users/admin-user.module */ 88267)).then(m => m.AdminUsersModule)
}, {
  path: 'charts',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_charts_charts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/charts/charts.module */ 79848)).then(m => m.ChartModule)
}, {
  path: 'elements',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-src_app_components_elements_elements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/elements/elements.module */ 13918)).then(m => m.ElementsModule)
}, {
  path: 'mail',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_mail_mail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/mail/mail.module */ 19205)).then(m => m.MailModule)
}, {
  path: 'maps',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("src_app_components_maps_maps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/maps/maps.module */ 47190)).then(m => m.MapsModule)
}, {
  path: 'pages',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("default-src_app_components_elements_elements_module_ts"), __webpack_require__.e("default-node_modules_ks89_angular-modal-gallery_fesm2015_ks89-angular-modal-gallery_js-src_ap-266e86"), __webpack_require__.e("default-src_app_components_all-ministration_all-ministration_component_ts-src_app_components_-24d079"), __webpack_require__.e("default-src_app_components_pages_pages_editor_model_pages_model_ts-src_app_components_website-a4ecf1"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/pages/pages.module */ 69592)).then(m => m.PagesModule)
}, {
  path: 'ministration',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("default-src_app_components_elements_elements_module_ts"), __webpack_require__.e("default-node_modules_ks89_angular-modal-gallery_fesm2015_ks89-angular-modal-gallery_js-src_ap-266e86"), __webpack_require__.e("default-src_app_components_all-ministration_all-ministration_component_ts-src_app_components_-24d079"), __webpack_require__.e("src_app_components_all-ministration_all-ministration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/all-ministration/all-ministration.module */ 20832)).then(m => m.AllMinistrationModule)
}, {
  path: 'create-ministration',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("default-node_modules_asymmetrik_ngx-leaflet_fesm2022_asymmetrik-ngx-leaflet_mjs"), __webpack_require__.e("default-src_app_components_common_component_module_ts"), __webpack_require__.e("default-node_modules_ks89_angular-modal-gallery_fesm2015_ks89-angular-modal-gallery_js-src_ap-266e86"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_create-ministration_create-ministration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/create-ministration/create-ministration.module */ 71986)).then(m => m.CreateMinistrationModule)
}, {
  path: 'tables',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/tables/tables.module */ 8160)).then(m => m.TablesModule)
}, {
  path: 'utilities',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-circle-progress_fesm2020_ng-circle-progress_mjs"), __webpack_require__.e("src_app_components_utilities_utilities_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/utilities/utilities.module */ 89348)).then(m => m.UtilitiesModule)
}, {
  path: 'custom-error',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_custom_custom_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/custom/custom.module */ 62348)).then(m => m.CustomModule)
}];

/***/ }),

/***/ 57473:
/*!************************************************!*\
  !*** ./src/app/shared/services/app.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70672);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ 57337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 31159);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 56997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 19483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 82454);








class AppService {
  constructor(http, authService, router) {
    this.http = http;
    this.authService = authService;
    this.router = router;
    this.subjectSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /**
   *
   * @param fn
   * @param retryNumb
   */
  httpRequestStrategy(fn, retryNumb = 0) {
    return fn.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(retryNumb), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError.bind(this)));
  }
  /**
   *
   * @param error
   */
  handleError(error) {
    let toastMessage = 'Unable to complete request';
    if (error && error.error && error.error.message) {
      toastMessage = error.error.message;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error || []);
  }
  /**
   * provide access to observable
   */
  get getObs() {
    return this.subjectSource$.asObservable();
  }
  //   BASE REQUEST METHODS, GET AND POST
  /**
   *
   * @param url
   * @param options
   * @param headers
   */
  get(url, options = {}) {
    return this.http.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${this.authService.token()}`
      }
    });
  }
  /**
   *
   * @param url
   * @param options
   * @param headers
   */
  post(url, options = {}) {
    return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/${url}`, options, {
      headers: {
        Authorization: `Bearer ${this.authService.token()}`
      }
    });
  }
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19483:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Access: () => (/* binding */ Access),
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService),
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13045);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cookie.service */ 78681);





class AuthenticationService {
  constructor(http, cookieService) {
    this.http = http;
    this.cookieService = cookieService;
    this.USER_ACCESS = "user";
    this.CHAT_ACCESS = "chat";
    this.JOB_ACCESS = "job";
    this.MESSAGE_ACCESS = "message";
    this.REPORT_ACCESS = "report";
    this.SETTINGS_ACCESS = "settings";
    this.WEBSITE_ACCESS = "website";
    this.CALENDAR_ACCESS = "calendar";
    this.ACTIVITY_ACCESS = "activity";
    this.ASSIGNED_ACCESS = "assigned";
    this.access = this.setAccess();
  }
  check(key) {
    let user = this.currentUser();
    return this.control(user, key);
  }
  control(user, key) {
    try {
      let role = user.user.roles[key];
      if (role) {
        return role;
      }
      return new Control();
    } catch (e) {
      return {
        read: false,
        write: false,
        execute: false
      };
    }
  }
  parseAccess(user) {
    let access = new Access();
    let param = {};
    param.user = {};
    param.user.roles = user;
    console.log("Result Parser: ", param, user);
    access.activity = this.control(param, this.ACTIVITY_ACCESS);
    access.assigned = this.control(param, this.ASSIGNED_ACCESS);
    access.calendar = this.control(param, this.CALENDAR_ACCESS);
    access.chat = this.control(param, this.CHAT_ACCESS);
    access.job = this.control(param, this.JOB_ACCESS);
    access.message = this.control(param, this.MESSAGE_ACCESS);
    access.report = this.control(param, this.REPORT_ACCESS);
    access.settings = this.control(param, this.SETTINGS_ACCESS);
    access.user = this.control(param, this.USER_ACCESS);
    access.website = this.control(param, this.WEBSITE_ACCESS);
    // console.log("Priviledges", user, access)
    return access;
  }
  // ACCESS_CONTROLLED = this.MENUITEMS;
  setAccess() {
    let access = new Access();
    access.activity = this.check(this.ACTIVITY_ACCESS);
    access.assigned = this.check(this.ASSIGNED_ACCESS);
    access.calendar = this.check(this.CALENDAR_ACCESS);
    access.chat = this.check(this.CHAT_ACCESS);
    access.job = this.check(this.JOB_ACCESS);
    access.message = this.check(this.MESSAGE_ACCESS);
    access.report = this.check(this.REPORT_ACCESS);
    access.settings = this.check(this.SETTINGS_ACCESS);
    access.user = this.check(this.USER_ACCESS);
    access.website = this.check(this.WEBSITE_ACCESS);
    return access;
  }
  /**
   * Returns the current user
   */
  currentUser() {
    if (!this.user) {
      this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    }
    this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    return this.user;
  }
  /** Registration serveice */
  registerUser(userData) {
    return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/signup`, userData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      console.log(data, 'this is registrarion data');
      if (data.user && data.token) {
        return data; // Return the response data if it contains user and token
      } else {
        throw new Error('Registration response is missing user or token');
      }
    }));
  }
  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email, password) {
    return this.http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/user/login`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      //  console.log("Logg response here::", data.data, data.data.access_token)
      console.log("Logg response here::", data, data.user, data.token);
      // login successful if there's a jwt token in the response
      if (!data.user) {
        return;
      }
      let response = data;
      if (response.token) {
        this.cookieService.setCookie('token', response.token, 1);
      }
      if (response.user) {
        this.user = response.user;
        this.cookieService.setCookie('currentUser', JSON.stringify(response.user), 1);
      }
      return response;
    }));
  }
  isLoggedIn() {
    return !!this.token();
  }
  token() {
    let response = this.cookieService.getCookie("user_pass");
    if (!response) {
      return false;
    }
    let access = JSON.parse(response);
    if (!access) {
      return false;
    }
    return access.token;
  }
  identifier() {
    try {
      let response = this.cookieService.getCookie("user_pass");
      if (!response) {
        return false;
      }
      let access = JSON.parse(response);
      if (!access) {
        return false;
      }
      return access.user.identifier;
    } catch (e) {
      return false;
    }
  }
  imageExists(url, callback) {
    var img = new Image();
    img.onload = function () {
      callback(true);
    };
    img.onerror = function () {
      callback(false);
    };
    img.src = url;
  }
  /**
   * Logout the user
   */
  logout() {
    // remove user from local storage to log user out
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }
  static #_ = this.ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
}
class Access {
  is_Admin(is_Admin) {
    throw new Error('Method not implemented.');
  }
}
class Control {
  constructor() {
    this.read = false;
    this.write = false;
    this.execute = false;
  }
}

/***/ }),

/***/ 78681:
/*!***************************************************!*\
  !*** ./src/app/shared/services/cookie.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieService: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class CookieService {
  constructor() {}
  /**
   * Returns the cookie value by name
   * @param name cookie name
   */
  getCookie(name) {
    if (!name) {
      return null;
    }
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  /**
   * Deletes the cookie with given name
   * @param name cookie name
   * @param path path of the domain
   */
  deleteCookie(name) {
    this.setCookie(name, '', -1);
  }
  /**
   * Creates/sets the cookie
   * @param name name of cookie
   * @param value cookie value
   * @param days validity in days
   */
  setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  static #_ = this.ɵfac = function CookieService_Factory(t) {
    return new (t || CookieService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CookieService,
    factory: CookieService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4681:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/horizontal-nav.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalNavService: () => (/* binding */ HorizontalNavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class HorizontalNavService {
  constructor() {
    this.MENUITEMS = [{
      path: '/dashboard',
      title: 'Dashboard',
      type: 'link',
      icon: 'ti-home',
      active: true
    }, {
      title: 'Crypto Currencies',
      icon: 'ti-wallet',
      type: 'sub',
      active: false,
      children: [{
        path: '/crypto/crypto-dashboard',
        title: 'Dashboard',
        type: 'link'
      }, {
        path: '/crypto/marketcap',
        title: 'Marketcap',
        type: 'link'
      }, {
        path: '/crypto/currency-exchange',
        title: 'Currency Exchange',
        type: 'link'
      }, {
        path: '/crypto/buy-sell',
        title: 'Buy & Sell',
        type: 'link'
      }, {
        path: '/crypto/wallet',
        title: 'Wallet',
        type: 'link'
      }, {
        path: '/crypto/transactions',
        title: 'Transactions',
        type: 'link'
      }]
    }, {
      title: 'E-Commerce',
      icon: 'ti-shopping-cart-full',
      type: 'sub',
      active: false,
      children: [{
        path: '/ecommerce/ecommerce-dashboard',
        title: 'Dashboard',
        type: 'link'
      }, {
        path: '/ecommerce/products',
        title: 'Products',
        type: 'link'
      }, {
        path: '/ecommerce/products-details',
        title: 'Products Details',
        type: 'link'
      }, {
        path: '/ecommerce/cart',
        title: 'Cart',
        type: 'link'
      }, {
        path: '/ecommerce/checkout',
        title: 'Checkout',
        type: 'link'
      }, {
        path: '/ecommerce/orders',
        title: 'Orders',
        type: 'link'
      }, {
        path: '/ecommerce/account',
        title: 'Account',
        type: 'link'
      }]
    }, {
      title: 'Apps',
      icon: 'ti-write',
      type: 'sub',
      active: false,
      children: [{
        path: '/apps/chat',
        title: 'Chat',
        type: 'link'
      }, {
        path: '/apps/cards',
        title: 'Cards',
        type: 'link'
      }, {
        path: '/apps/calendar',
        title: 'Calendar',
        type: 'link'
      }, {
        path: '/apps/contacts',
        title: 'Contacts',
        type: 'link'
      }, {
        path: '/mail/mail-inbox',
        title: 'Inbox',
        type: 'link'
      }, {
        path: '/mail/view-mail',
        title: 'View-Mail',
        type: 'link'
      }, {
        path: '/widgets',
        title: 'Widgets',
        type: 'link'
      }]
    }, {
      title: 'Components',
      icon: 'ti-package',
      type: 'sub',
      active: false,
      children: [{
        title: 'Elements',
        type: 'sub',
        active: false,
        children: [{
          path: '/elements/alerts',
          title: 'Alerts',
          type: 'link'
        }, {
          path: '/elements/avatar',
          title: 'Avatars',
          type: 'link'
        }, {
          path: '/elements/breadcrumb',
          title: 'Breadcrumb',
          type: 'link'
        }, {
          path: '/elements/buttons',
          title: 'Buttons',
          type: 'link'
        }, {
          path: '/elements/badge',
          title: 'Badge',
          type: 'link'
        }, {
          path: '/elements/dropdown',
          title: 'Dropdown',
          type: 'link'
        }, {
          path: '/elements/thumbnails',
          title: 'Thumbnails',
          type: 'link'
        }, {
          path: '/elements/listgroup',
          title: 'List Group',
          type: 'link'
        }, {
          path: '/elements/navigation',
          title: 'Navigation',
          type: 'link'
        }, {
          path: '/elements/pagination',
          title: 'Pagination',
          type: 'link'
        }, {
          path: '/elements/popover',
          title: 'Popover',
          type: 'link'
        }, {
          path: '/elements/progress',
          title: 'Progress',
          type: 'link'
        }, {
          path: '/elements/spinners',
          title: 'Spinners',
          type: 'link'
        }, {
          path: '/elements/media-objects',
          title: 'Media Object',
          type: 'link'
        }, {
          path: '/elements/typhography',
          title: 'Typhography',
          type: 'link'
        }, {
          path: '/elements/tooltips',
          title: 'Tooltips',
          type: 'link'
        }, {
          path: '/elements/toast',
          title: 'Toast',
          type: 'link'
        }, {
          path: '/elements/tags',
          title: 'Tags',
          type: 'link'
        }]
      }, {
        title: 'Maps',
        type: 'sub',
        active: false,
        children: [{
          path: '/maps/leaflet',
          title: 'Leaflet Maps',
          type: 'link'
        }, {
          path: '/maps/google',
          title: 'Google Maps',
          type: 'link'
        }]
      }, {
        title: 'Tables',
        type: 'sub',
        active: false,
        children: [{
          path: '/tables/basic',
          title: 'Basic Tables',
          type: 'link'
        }, {
          path: '/tables/data',
          title: 'Data Tables',
          type: 'link'
        }]
      }, {
        title: 'Advanced UI',
        type: 'sub',
        active: false,
        children: [{
          path: '/advanced-ui/accordion',
          title: 'Accordion',
          type: 'link'
        }, {
          path: '/advanced-ui/carousel',
          title: 'Carousel',
          type: 'link'
        }, {
          path: '/advanced-ui/collapse',
          title: 'Collapse',
          type: 'link'
        }, {
          path: '/advanced-ui/modals',
          title: 'Modals',
          type: 'link'
        }, {
          path: '/advanced-ui/timeline',
          title: 'Timeline',
          type: 'link'
        }, {
          path: '/advanced-ui/draggable-cards',
          title: 'Draggable-Cards',
          type: 'link'
        }, {
          path: '/advanced-ui/sweet-alerts',
          title: 'Sweet Alerts',
          type: 'link'
        }, {
          path: '/advanced-ui/ratings',
          title: 'Ratings',
          type: 'link'
        }, {
          path: '/advanced-ui/search',
          title: 'Search',
          type: 'link'
        }, {
          path: '/advanced-ui/userlist',
          title: 'Userlist',
          type: 'link'
        }, {
          path: '/advanced-ui/blog',
          title: 'Blog',
          type: 'link'
        }]
      }, {
        title: 'Charts',
        type: 'sub',
        active: false,
        children: [{
          path: '/charts/apex',
          title: 'Apex',
          type: 'link'
        }, {
          path: '/charts/chartjs',
          title: 'Chart.js',
          type: 'link'
        }, {
          path: '/charts/echart',
          title: 'Echart',
          type: 'link'
        }, {
          path: '/charts/chartlist',
          title: 'Chartist',
          type: 'link'
        }]
      }, {
        title: 'Submenus',
        type: 'sub',
        active: false,
        children: [{
          title: 'Level 1',
          type: 'sub',
          children: [{
            title: 'Level 1.0',
            type: 'link'
          }, {
            title: 'Level 1.1',
            type: 'link'
          }, {
            title: 'Level 1.2',
            type: 'link'
          }]
        }, {
          title: 'Level 2',
          type: 'link'
        }, {
          title: 'Level 3',
          type: 'link'
        }]
      }]
    }, {
      title: 'Forms',
      icon: 'ti-receipt',
      type: 'sub',
      badgeClass: 'badge-info',
      badgeValue: '6',
      active: false,
      children: [{
        path: '/forms/elements',
        title: 'Form Elements',
        type: 'link'
      }, {
        path: '/forms/advanced',
        title: 'Advanced Forms',
        type: 'link'
      }, {
        path: '/forms/layouts',
        title: 'Form Layouts',
        type: 'link'
      }, {
        path: '/forms/validation',
        title: 'Form Validation',
        type: 'link'
      }, {
        path: '/forms/wizards',
        title: 'Form Wizards',
        type: 'link'
      }, {
        path: '/forms/editors',
        title: 'Form Editors',
        type: 'link'
      }]
    }, {
      title: 'Utilities',
      icon: 'ti-shield',
      type: 'sub',
      active: false,
      children: [{
        path: '/utilities/background',
        title: 'Background',
        type: 'link'
      }, {
        path: '/utilities/border',
        title: 'Border',
        type: 'link'
      }, {
        path: '/utilities/display',
        title: 'Display',
        type: 'link'
      }, {
        path: '/utilities/flex',
        title: 'Flex',
        type: 'link'
      }, {
        path: '/utilities/height',
        title: 'Height',
        type: 'link'
      }, {
        path: '/utilities/margin',
        title: 'Margin',
        type: 'link'
      }, {
        path: '/utilities/padding',
        title: 'Padding',
        type: 'link'
      }, {
        path: '/utilities/position',
        title: 'Position',
        type: 'link'
      }, {
        path: '/utilities/width',
        title: 'Width',
        type: 'link'
      }, {
        path: '/utilities/extras',
        title: 'Extras',
        type: 'link'
      }]
    }, {
      title: 'Icons',
      icon: 'ti-face-smile',
      type: 'sub',
      active: false,
      children: [{
        path: '/icons/font-awesome',
        title: 'Font Awesome',
        type: 'link'
      }, {
        path: '/icons/material-design',
        title: 'Material Design Icons',
        type: 'link'
      }, {
        path: '/icons/simple-line',
        title: 'Simple Line Icons',
        type: 'link'
      }, {
        path: '/icons/feather',
        title: 'Feather Icons',
        type: 'link'
      }, {
        path: '/icons/ionic',
        title: 'Ionic Icons',
        type: 'link'
      }, {
        path: '/icons/flag',
        title: 'Flag Icons',
        type: 'link'
      }, {
        path: '/icons/pe7',
        title: 'Pe7 Icons',
        type: 'link'
      }, {
        path: '/icons/themify',
        title: 'Themify Icons',
        type: 'link'
      }, {
        path: '/icons/typicons',
        title: 'Typicons Icons',
        type: 'link'
      }, {
        path: '/icons/weather',
        title: 'Weather Icons',
        type: 'link'
      }, {
        path: '/icons/material',
        title: 'Material SVG',
        type: 'link'
      }]
    }, {
      title: 'Pages',
      icon: 'ti-palette',
      type: 'sub',
      active: false,
      children: [{
        path: '/pages/profile',
        title: 'Profile',
        type: 'link'
      }, {
        path: '/pages/invoice',
        title: 'Invoice',
        type: 'link'
      }, {
        path: '/pages/pricing',
        title: 'Pricing',
        type: 'link'
      }, {
        path: '/pages/gallery',
        title: 'Gallery',
        type: 'link'
      }, {
        path: '/pages/faqs',
        title: 'Faqs',
        type: 'link'
      }, {
        title: 'Alert Pages',
        type: 'sub',
        active: false,
        children: [{
          path: '/alert-pages/success-message',
          title: 'Success Message',
          type: 'link'
        }, {
          path: '/alert-pages/danger-message',
          title: 'Danger Message',
          type: 'link'
        }, {
          path: '/alert-pages/warning-message',
          title: 'Warning Message',
          type: 'link'
        }]
      }, {
        path: '/pages/empty-page',
        title: 'Empty Page',
        type: 'link'
      }, {
        path: '/custom/signin',
        title: 'Sign In',
        type: 'link'
      }, {
        path: '/custom/signup',
        title: 'Sign Up',
        type: 'link'
      }, {
        path: '/custom/forgot-password',
        title: 'Forgot Password',
        type: 'link'
      }, {
        path: '/custom/reset-password',
        title: 'Reset Password',
        type: 'link'
      }, {
        path: '/custom/lockscreen',
        title: 'Lock Screen',
        type: 'link'
      }, {
        path: '/custom-pages/under-construction',
        title: 'Under Construction',
        type: 'link'
      }, {
        path: '/custom-pages/404-Error',
        title: '404 Error',
        type: 'link'
      }, {
        path: '/custom-error/500-Error',
        title: '500 Error',
        type: 'link'
      }]
    }];
    //array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.MENUITEMS);
  }
  static #_ = this.ɵfac = function HorizontalNavService_Factory(t) {
    return new (t || HorizontalNavService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HorizontalNavService,
    factory: HorizontalNavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82366:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class LayoutService {
  constructor() {
    this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.changeEmitted = this.emitChangeSource.asObservable();
    //Sidebar Notification
    this.emitSidebarNofitSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.SidebarNotifyChangeEmitted = this.emitSidebarNofitSource.asObservable();
  }
  emitChange(change) {
    this.emitChangeSource.next(change);
  }
  emitSidebarNotifyChange(change) {
    this.emitSidebarNofitSource.next(change);
  }
  static #_ = this.ɵfac = function LayoutService_Factory(t) {
    return new (t || LayoutService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LayoutService,
    factory: LayoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82484:
/*!************************************************!*\
  !*** ./src/app/shared/services/nav.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavService: () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 47530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 34155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 92887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 21077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 19483);





class NavService {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.screenWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(window.innerWidth);
    this.megaMenu = false;
    this.megaMenuCollapse = window.innerWidth < 1199 ? true : false;
    this.collapseSidebar = window.innerWidth < 991 ? true : false;
    // this.authService.access.website.read
    this.MENUITEMS = [{
      headTitle: 'dashboard'
    }, {
      path: '/dashboard',
      title: 'Dashboard',
      type: 'link',
      icon: 'ti-home',
      active: false,
      show: true
    }, {
      path: '/ministration/list',
      title: 'All Ministration',
      type: 'link',
      icon: 'ti-settings',
      active: false,
      show: true
    }, {
      path: '/pages/list',
      icon: 'ti-envelope',
      title: 'My Minstration',
      type: 'link',
      show: true
    }, {
      path: '/all-songs/songs',
      title: 'All songs',
      type: 'link',
      icon: 'ti-settings',
      active: false,
      show: true
    }, {
      path: '/create-ministration/list',
      title: 'Minstration type',
      type: 'link',
      icon: 'ti-settings',
      active: false,
      show: true
    }];
    //array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.MENUITEMS);
    this.authService.setAccess();
    console.log(this.authService.user, 'this --------> auth service');
    console.log("Access -------->, ", this.authService.access);
    console.log('User:', this.authService.user);
    console.log("'is_Admin' in user:", 'is_Admin' in this.authService.user);
    // console.log('user.is_Admin:', this.authService.user.is_Admin);
    this.setScreenWidth(window.innerWidth);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscriber)).subscribe(evt => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerwidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }
      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      });
    }
    if (this.authService.user && this.authService.user.is_Admin === 1) {
      // this.MENUITEMS.push({
      //   path: '/settings/admin-access',
      //   title: 'View Users',
      //   type: 'link',
      //   icon: 'ti-settings',
      //   active: false,
      //   show: true
      // });
      this.MENUITEMS.push({
        path: '/admin/user',
        title: 'Users',
        type: 'link',
        icon: 'ti-user',
        active: false,
        show: true
      });
      // this.MENUITEMS.push({
      //   path: '/admin-ministration/list',
      //   title: 'Admin All ministration',
      //   type: 'link',
      //   icon: 'ti-user',
      //   active: false,
      //   show: true
      // });
      // { path: '/admin/user', title: 'Users', type: 'link', icon: 'user-settings', active: false, show: true },
    }
  }

  setScreenWidth(width) {
    this.screenWidth.next(width);
  }
  ngOnDestroy() {
    this.unsubscriber.next({});
    this.unsubscriber.complete();
  }
  static #_ = this.ɵfac = function NavService_Factory(t) {
    return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: NavService,
    factory: NavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 26537:
/*!*************************************************!*\
  !*** ./src/app/shared/services/path.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathService: () => (/* binding */ PathService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class PathService {
  constructor() {
    this.CHECK_TOKEN_ACCESS = `auth/check/access`;
    this.SERVICE_SEARCH_RECORD = `report/search/reports`;
    this.CREATE_EQUIPMENT_RECORD = `report/create/equipment`;
    this.CREATE_HOSPITAL_RECORD = `report/create/hospital`;
    this.CREATE_RECORDS = `report/create/items`;
    this.SERVICE_LIST_RECORD_ITEMS = 'report/fetch/items';
    this.SERVICE_LIST_EQUIPMENTS = 'report/fetch/equipment';
    this.SERVICE_LIST_HOSPITALS = 'report/fetch/hospital';
    this.LIST_ALL_USERS = 'user/list';
    this.SEND_REPORTING_SERVICE = 'report/send/project/service/record';
    this.LIST_PRIVILEGES = 'auth/admin/privileges';
  }
  static #_ = this.ɵfac = function PathService_Factory(t) {
    return new (t || PathService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PathService,
    factory: PathService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35467:
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestService: () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class RequestService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  /**
  *
  * @param path
  * @param callback
  */
  _get(path, callback) {
    this.get(path, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status, response);
    }, error => callback(error, false));
  }
  /**
   *
   * @param path
   * @param body
   * @param callback
   */
  _post(path, body, callback) {
    this.post(path, body).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status, response);
    }, error => callback(error, false));
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵRequestService_BaseFactory;
    return function RequestService_Factory(t) {
      return (ɵRequestService_BaseFactory || (ɵRequestService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RequestService)))(t || RequestService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RequestService,
    factory: RequestService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62473:
/*!**************************************************!*\
  !*** ./src/app/shared/services/route.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteService: () => (/* binding */ RouteService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class RouteService {
  segment(index) {
    try {
      let url = document.location.href;
      if (index >= 1) {
        let key = 2 + index;
        let i = url.split("/");
        return i[key];
      }
    } catch (e) {
      return null;
    }
  }
  static #_ = this.ɵfac = function RouteService_Factory(t) {
    return new (t || RouteService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RouteService,
    factory: RouteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer/footer.component */ 68014);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 10074);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ 99185);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 55842);
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidemenu/sidemenu.component */ 37058);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification-sidebar/notification-sidebar.component */ 87281);
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ 34783);
/* harmony import */ var _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/content-layout/content-layout.component */ 29422);
/* harmony import */ var _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/fullscreen-toggle.directive */ 90933);
/* harmony import */ var _layouts_message_layout_message_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/message-layout/message-layout.component */ 53941);
/* harmony import */ var _layouts_error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/error-layout/error-layout.component */ 90275);
/* harmony import */ var _pipes_search_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/search-date.pipe */ 7822);
/* harmony import */ var _layouts_horizontal_hori_full_layout_hori_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts-horizontal/hori-full-layout/hori-full-layout.component */ 99641);
/* harmony import */ var _components_horizontal_hori_header_hori_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components-horizontal/hori-header/hori-header.component */ 701);
/* harmony import */ var _components_horizontal_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components-horizontal/horizontal-menu/horizontal-menu.component */ 57756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 51197);




















class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_3__.TapToTopComponent, _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_4__.SidemenuComponent, _components_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.NotificationSidebarComponent, _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_6__.FullLayoutComponent, _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__.ContentLayoutComponent, _directives_fullscreen_toggle_directive__WEBPACK_IMPORTED_MODULE_8__.FullscreenToggleDirective, _layouts_message_layout_message_layout_component__WEBPACK_IMPORTED_MODULE_9__.MessageLayoutComponent, _layouts_error_layout_error_layout_component__WEBPACK_IMPORTED_MODULE_10__.ErrorLayoutComponent, _pipes_search_date_pipe__WEBPACK_IMPORTED_MODULE_11__.SearchDatePipe, _layouts_horizontal_hori_full_layout_hori_full_layout_component__WEBPACK_IMPORTED_MODULE_12__.HoriFullLayoutComponent, _components_horizontal_hori_header_hori_header_component__WEBPACK_IMPORTED_MODULE_13__.HoriHeaderComponent, _components_horizontal_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__.HorizontalMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule],
    exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_3__.TapToTopComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_6__.FullLayoutComponent, _layouts_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_7__.ContentLayoutComponent, _pipes_search_date_pipe__WEBPACK_IMPORTED_MODULE_11__.SearchDatePipe]
  });
})();

/***/ }),

/***/ 57337:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  // apiUrl: 'https://salientcleaningandhealthcareservices.org/',
  // apiUrl: (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'https://salientcleaningandhealthcareservices.org/' : 'https://salientcleaningandhealthcareservices.org/',
  apiUrl: location.hostname === "localhost" || location.hostname === "127.0.0.1" ? 'https://rccgapi.onrender.com' : 'https://rccgapi.onrender.com'
  // socket: ""
};
// https://staging.jrfarmsafrica.com

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 23380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map