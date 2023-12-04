"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_mail_mail_module_ts"],{

/***/ 87552:
/*!********************************************************************!*\
  !*** ./src/app/components/mail/mail-inbox/mail-inbox.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailInboxComponent: () => (/* binding */ MailInboxComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_message_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/message/message.model */ 81207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/message/message.service */ 1522);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/date.service */ 50862);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_textarea_editor_textarea_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/textarea-editor/textarea-editor.component */ 29287);
/* harmony import */ var _shared_pipes_search_table_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/search-table.pipe */ 42269);










function MailInboxComponent_div_65_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 13)(1, "td", 63)(2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 65)(4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailInboxComponent_div_65_tr_52_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const message_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onSelectMail(message_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", message_r8.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.format_date(message_r8.created_at));
  }
}
function MailInboxComponent_div_65_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Prev");
  }
}
function MailInboxComponent_div_65_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Next");
  }
}
function MailInboxComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul", 40)(9, "li")(10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " None");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li")(13, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li")(16, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 41)(19, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 44)(22, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ul", 40)(26, "li")(27, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Mark as Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li")(31, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "li")(36, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ul", 53)(43, "li")(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "li")(47, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 56)(50, "table", 57)(51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, MailInboxComponent_div_65_tr_52_Template, 13, 2, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](53, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 59)(56, "ngb-pagination", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function MailInboxComponent_div_65_Template_ngb_pagination_pageChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, MailInboxComponent_div_65_ng_template_57_Template, 1, 0, "ng-template", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, MailInboxComponent_div_65_ng_template_58_Template, 1, 0, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("1 - ", ctx_r0.messages.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](53, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](54, 9, ctx_r0.messages, (ctx_r0.page - 1) * ctx_r0.config.pageSize, ctx_r0.page * ctx_r0.config.pageSize), _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", ctx_r0.messages.length)("maxSize", ctx_r0.config.maxSize)("pageSize", ctx_r0.config.pageSize)("page", ctx_r0.page);
  }
}
function MailInboxComponent_div_66_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "3 Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " View All Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 108)(9, "div", 10)(10, "div", 109)(11, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "img_01.jpg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "12kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 109)(18, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "img_02.jpg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "18kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 109)(25, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "h6", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "img_03.jpg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "small", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "21kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
}
function MailInboxComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "div", 74)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 75)(7, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 80)(12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 83)(15, "div", 84)(16, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 88)(23, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 91)(26, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Report Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Show Original");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 93)(39, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "div", 98)(51, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, MailInboxComponent_div_66_div_52_Template, 31, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 100)(54, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_message.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.format_date(ctx_r1.selected_message.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selected_message.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.selected_message.from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.format_date(ctx_r1.selected_message.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.selected_message.message, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selected_message.attachment);
  }
}
function MailInboxComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 116)(1, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailInboxComponent_ng_template_67_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const modal_r14 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r14.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 120)(7, "form")(8, "div", 121)(9, "div", 122)(10, "div", 123)(11, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div")(14, "app-input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function MailInboxComponent_ng_template_67_Template_app_input_inputModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.mail.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 123)(16, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div")(19, "app-input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function MailInboxComponent_ng_template_67_Template_app_input_inputModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.mail.subject = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 126)(21, "div", 127)(22, "textarea-editor", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("inputModelChange", function MailInboxComponent_ng_template_67_Template_textarea_editor_inputModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.mail.message = $event);
    })("inputModelChange", function MailInboxComponent_ng_template_67_Template_textarea_editor_inputModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.getEditorMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 128)(24, "nav", 129)(25, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailInboxComponent_ng_template_67_Template_button_click_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.onSend($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r3.mail.email)("placeholder", "Receipient")("inputModel", ctx_r3.mail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r3.mail.subjet)("placeholder", "Subject")("inputModel", ctx_r3.mail.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "text")("id", "message")("value", ctx_r3.mail.message)("placeholder", "Message Content")("inputModel", ctx_r3.mail.message);
  }
}
class MailInboxComponent {
  constructor(modalService, messageService, dateService, toastService) {
    this.modalService = modalService;
    this.messageService = messageService;
    this.dateService = dateService;
    this.toastService = toastService;
    this.is_mailview = false;
    this.page = 1;
    this.config = {
      currentPage: 1,
      pageSize: 10,
      maxSize: 5
    };
    this.messages = new Array();
    this.mail = new Mail();
    /**
     * Selected Message should change the view of the project
     */
    this.selected_message = new src_app_shared_services_message_message_model__WEBPACK_IMPORTED_MODULE_0__.Message();
  }
  ngOnInit() {
    this.load();
  }
  open(content) {
    this.modalService.open(content, {
      size: "xl"
    });
  }
  load() {
    let $this = this;
    this.messageService.all("inbox", function (result, status) {
      if (!result) {
        return;
      }
      $this.messages = result;
    });
  }
  /**
   *
   * @param $event
   * This receive update from the textarea-editor event on change
   */
  getEditorMessage($event) {
    this.mail.message = $event;
  }
  onSend($event) {
    console.log("Checking things:: ", this.mail.message);
    if (!this.mail.email) {
      this.toastService.info("Please, enter email receipient(s)");
      return;
    }
    if (!this.mail.subject) {
      this.toastService.info("Please, enter email subject");
      return;
    }
    if (!this.mail.message) {
      this.toastService.info("Please, email message cannot be empty");
      return;
    }
    let $this = this;
    this.messageService.create("inbox", this.mail, function (result, status) {
      console.log('Result', result, status);
      if (!result) {
        $this.toastService.error("Unable to send your email message");
        return;
      }
      $this.toastService.success("Email Successfully sent");
    });
  }
  format_date(date) {
    return this.dateService.formatEnUSWithOption(date);
  }
  onSelectMail(message) {
    this.selected_message = message;
    this.is_mailview = true;
  }
  onInboxClicked() {
    this.is_mailview = false;
  }
  getMessage(message) {
    let mes = JSON.parse(message);
    console.log(message, mes.mail.message);
    return mes.mail.message;
  }
  removeTags(str) {
    if (str === null || str === '') return false;else str = str.toString();
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
  }
  static #_ = this.ɵfac = function MailInboxComponent_Factory(t) {
    return new (t || MailInboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_message_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MailInboxComponent,
    selectors: [["app-mail-inbox"]],
    decls: 69,
    vars: 3,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-3", "col-lg-4"], [1, "card", "custom-card", "mail-container", "task-container", "overflow-hidden"], [1, ""], [1, "p-4", "border-bottom"], ["href", "javascript:;", "id", "btnCompose", 1, "btn", "btn-main-primary", "btn-block", "btn-compose", 3, "click"], [1, "card-body", "tab-list-items"], [1, "main-content-left", "main-content-left-mail"], [1, "main-mail-menu"], [1, "nav", "main-nav-column", "mg-b-20"], ["href", "javascript:;", 1, "nav-link", "active", 3, "click"], [1, "fe", "fe-mail"], ["href", "javascript:;", 1, "nav-link"], [1, "fe", "fe-star"], [1, "fe", "fe-bookmark"], [1, "fe", "fe-send"], [1, "fe", "fe-trash"], [1, "main-content-label", "main-content-label-sm"], [1, "fe", "fe-folder"], [1, "fe", "fe-folder-plus"], [1, "col-xl-9", "col-lg-8", "main-content-body-mail1"], ["class", "card custom-card mail-container task-container overflow-hidden", 4, "ngIf"], ["class", "card custom-card", 4, "ngIf"], ["content", ""], [1, "inbox-body", "p-4"], [1, "mail-option"], [1, "chk-all", "border-0"], ["ngbDropdown", "", 1, "btn-group", "mr-1"], ["ngbDropdownToggle", "", "href", "javascript:;", 1, "btn", "mini", "all"], [1, "fe", "fe-chevron-down"], ["ngbDropdownMenu", ""], [1, "btn-group", "mr-1"], ["href", "javascript:;", 1, "btn", "mini", "tooltips"], [1, "fe", "fe-refresh-cw"], ["ngbDropdown", "", 1, "btn-group", "hidden-phone", "mr-1"], ["ngbDropdownToggle", "", "href", "javascript:;", "aria-expanded", "false", 1, "btn", "mini", "blue"], [1, "fe", "fe-edit", "mr-2"], [1, "fe", "fe", "fe-slash", "mr-2"], [1, "divider"], [1, "fe", "fe-trash", "mr-2"], [1, "btn-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["search", ""], [1, "unstyled", "inbox-pagination"], ["href", "javascript:;", 1, "btn", "np-btn"], [1, "fe", "fe-chevron-right", "pagination-right"], [1, "table-responsive"], [1, "table", "table-inbox", "text-md-nowrap", "table-hover", "text-nowrap"], ["class", "", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["width", "30px", 1, "inbox-small-cells"], [1, "custom-control", "custom-checkbox", "mb-0"], ["type", "checkbox", "name", "example-checkbox2", "value", "option2", 1, "custom-control-input"], [1, "custom-control-label"], [1, "fa", "fa-star", "text-warning"], [1, "fa", "fa-bookmark"], [1, "view-message", "dont-show", "font-weight-semibold", 3, "click"], [1, "view-message", "text-right", "font-weight-semibold"], [1, "card", "custom-card"], [1, "card-body", "h-100"], [1, "email-media"], [1, "mb-4", "d-lg-flex"], [1, "ml-auto", "d-none", "d-md-flex", "fs-18"], ["href", "javascript:;", 1, "mr-3", "tx-inverse"], ["placement", "top", "ngbTooltip", "Print", 1, "fe", "fe-printer"], ["href", "javascript:;", 1, "tx-inverse"], ["placement", "top", "ngbTooltip", "Undo", 1, "fe", "fe-tag"], [1, "media", "mt-0"], [1, "main-img-user", "avatar-md", "mr-3", "online"], ["alt", "avatar", "src", "../../assets/img/users/1.jpg", 1, "rounded-circle"], [1, "media-body", "tx-inverse"], [1, "float-right", "d-none", "d-md-flex", "fs-15"], [1, "mr-2"], ["placement", "top", "ngbTooltip", "Rated", 1, "fe", "fe-star"], ["placement", "top", "ngbTooltip", "Reply", 1, "fa", "fa-reply"], ["ngbDropdown", "", 1, "mr-2"], ["href", "javascript:;", "ngbDropdownToggle", "", "role", "button"], ["placement", "top", "ngbTooltip", "View more", 1, "fe", "fe-more-horizontal", "text-dark"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "shadow"], ["ngbDropdownItem", "", "href", "javascript:;"], [1, "media-title", "font-weight-semiblod"], [1, "tx-18", "font-weight-bold"], [1, "mb-0", "text-muted"], [1, "mr-2", "d-md-none"], [1, "eamil-body"], [3, "innerHTML"], ["class", "email-attch", 4, "ngIf"], [1, "card-footer"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "mt-1", "mb-1", "mr-1"], [1, "fa", "fa-reply"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "mt-1", "mb-1"], [1, "fa", "fa-share"], [1, "email-attch"], [1, "float-right"], ["placement", "top", "ngbTooltip", "Download", 1, "fa", "fa-download", "text-dark"], [1, "emai-img"], [1, "col-sm-3"], ["src", "../../assets/img/media/18.jpg", "alt", "Generic placeholder image", 1, "w-100"], [1, "mb-3", "mt-3", "mb-lg-0"], [1, "text-muted"], ["src", "../../assets/img/media/19.jpg", "alt", "Generic placeholder image", 1, "w-100"], ["src", "../../assets/img/media/20.jpg", "alt", "Generic placeholder image", 1, "w-100"], [1, "mt-3", "mb-lg-0"], [1, "modal-header", "main-mail-compose-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "nav", 3, "click"], ["aria-hidden", "true", 1, "nav-link"], [1, "modal-body"], [1, "form-group"], [1, "main-mail-compose-body"], [1, "form-group", "mb-0"], [1, "form-label"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "row"], [1, "col-lg-12"], [1, "modal-footer"], [1, "nav", "mailLinks"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Formatting", 1, "nav-link"], [1, "fas", "fa-font"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add attachment", 1, "nav-link"], [1, "fas", "fa-paperclip"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add photo", 1, "nav-link"], [1, "far", "fa-image"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add link", 1, "nav-link"], [1, "fas", "fa-link"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Emoticons", 1, "nav-link"], [1, "far", "fa-smile"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Insert files into Drive", 1, "nav-link"], [1, "fab", "fa-google-drive"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Delete", 1, "nav-link"], [1, "far", "fa-trash-alt"], [1, "btn", "ripple", "btn-primary", "float-right", 3, "click"]],
    template: function MailInboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailInboxComponent_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.open(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "nav", 19)(26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MailInboxComponent_Template_a_click_26_listener() {
          return ctx.onInboxClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Favourites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Quotes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Feedbacks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " Trash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "nav", 19)(54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Flagged ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " Urgent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, MailInboxComponent_div_65_Template, 59, 13, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, MailInboxComponent_div_66_Template, 60, 7, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, MailInboxComponent_ng_template_67_Template, 41, 21, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.messages.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.is_mailview);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.is_mailview);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _common_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _common_textarea_editor_textarea_editor_component__WEBPACK_IMPORTED_MODULE_4__.TextAreaEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe, _shared_pipes_search_table_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterPipe],
    styles: [".dropdown-menu.show[_ngcontent-%COMP%] {\n  transform: translate(0px, 35px) !important;\n}\n\n  .modal.show.modalCusSty .modal-dialog {\n  border-radius: 5px;\n  height: 520px;\n  width: 600px;\n  max-width: 100%;\n}\n@media (max-width: 768px) {\n    .modal.show.modalCusSty .modal-dialog {\n    width: 90% !important;\n  }\n}\n@media (max-width: 360px) {\n    .nav.mailLinks {\n    width: 180px;\n  }\n}\n\n.btn-main-primary[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #8667ff;\n  border-color: #8667ff;\n}\n\n.main-mail-compose-body[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.main-mail-compose-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  border: 1px solid #eaedf7;\n  padding-left: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWlsL21haWwtaW5ib3gvbWFpbC1pbmJveC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbC9tYWlsLWluYm94L21haWwtaW5ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNEUjtBRElJO0VBQ0k7SUFDSSxxQkFBQTtFQ0ZWO0FBQ0Y7QURLSTtFQUNJO0lBQ0ksWUFBQTtFQ0hWO0FBQ0Y7O0FET0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0pKOztBRFFBO0VBQ0ksdUJBQUE7QUNMSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPQTtFQUNJLHdCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0FDSkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS5zaG93e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzNXB4KSAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbiBcclxuOjpuZy1kZWVwe1xyXG4gICAgLm1vZGFsLnNob3cubW9kYWxDdXNTdHkgLm1vZGFsLWRpYWxvZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgLm1vZGFsLnNob3cubW9kYWxDdXNTdHkgLm1vZGFsLWRpYWxvZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozNjBweCkge1xyXG4gICAgICAgIC5uYXYubWFpbExpbmtze1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLW1haW4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjY3ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM4NjY3ZmY7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1tYWlsLWNvbXBvc2UtYm9keXtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluLW1haWwtY29tcG9zZS1ib2R5IC5mb3JtLWdyb3Vwe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWRmNztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4IDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59IiwiLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzVweCkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC5zaG93Lm1vZGFsQ3VzU3R5IC5tb2RhbC1kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAubW9kYWwuc2hvdy5tb2RhbEN1c1N0eSAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICA6Om5nLWRlZXAgLm5hdi5tYWlsTGlua3Mge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuXG4uYnRuLW1haW4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY2N2ZmO1xuICBib3JkZXItY29sb3I6ICM4NjY3ZmY7XG59XG5cbi5tYWluLW1haWwtY29tcG9zZS1ib2R5IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLW1haWwtY29tcG9zZS1ib2R5IC5mb3JtLWdyb3VwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWRmNztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class Mail {}

/***/ }),

/***/ 89635:
/*!********************************************************!*\
  !*** ./src/app/components/mail/mail-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailRoutingModule: () => (/* binding */ MailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ 87552);
/* harmony import */ var _view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-mail/view-mail.component */ 70960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





const routes = [{
  path: '',
  children: [{
    path: 'inbox',
    component: _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_0__.MailInboxComponent
  }, {
    path: 'view',
    component: _view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_1__.ViewMailComponent
  }]
}];
class MailRoutingModule {
  static #_ = this.ɵfac = function MailRoutingModule_Factory(t) {
    return new (t || MailRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MailRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MailRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 19205:
/*!************************************************!*\
  !*** ./src/app/components/mail/mail.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MailModule: () => (/* binding */ MailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ 87552);
/* harmony import */ var _view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-mail/view-mail.component */ 70960);
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-routing.module */ 89635);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/pipe.module */ 93386);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);









class MailModule {
  static #_ = this.ɵfac = function MailModule_Factory(t) {
    return new (t || MailModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MailModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__.MailRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
    // ToastrModule.forRoot(),
    _common_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MailModule, {
    declarations: [_mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_0__.MailInboxComponent, _view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_1__.ViewMailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _mail_routing_module__WEBPACK_IMPORTED_MODULE_2__.MailRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, src_app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
    // ToastrModule.forRoot(),
    _common_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule]
  });
})();

/***/ }),

/***/ 70960:
/*!******************************************************************!*\
  !*** ./src/app/components/mail/view-mail/view-mail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewMailComponent: () => (/* binding */ ViewMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


function ViewMailComponent_ng_template_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewMailComponent_ng_template_185_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 90)(7, "form")(8, "div", 91)(9, "div", 92)(10, "div", 93)(11, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 93)(16, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 98)(23, "nav", 99)(24, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class ViewMailComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {}
  open(content) {
    this.modalService.open(content, {
      backdrop: 'static',
      windowClass: 'modalCusSty'
    });
  }
  static #_ = this.ɵfac = function ViewMailComponent_Factory(t) {
    return new (t || ViewMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ViewMailComponent,
    selectors: [["app-view-mail"]],
    decls: 187,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-4", "col-xl-3", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, ""], ["href", "javascript:;", "id", "btnCompose", 1, "btn", "ripple", "btn-main-primary", "btn-compose", "btn-block", 3, "click"], [1, "main-mail-menu", "pd-r-0", "mg-t-20"], [1, "nav", "main-nav-column", "mg-b-20"], ["href", "javascript:;", 1, "nav-link", "active"], [1, "fe", "fe-mail"], [1, "badge", "badge-light"], ["href", "javascript:;", 1, "nav-link"], [1, "fe", "fe-star"], [1, "badge", "badge-primary"], [1, "fe", "fe-bookmark"], [1, "badge", "badge-secondary"], [1, "fe", "fe-send"], [1, "badge", "badge-success"], [1, "fe", "fe-edit-2"], [1, "badge", "badge-danger"], [1, "fe", "fe-disc"], [1, "badge", "badge-warning"], [1, "fe", "fe-trash-2"], [1, "badge", "badge-info"], [1, "main-content-label", "main-content-label-sm"], [1, "nav", "main-nav-column"], [1, "fe", "fe-folder"], [1, "col-lg-8", "col-xl-9", "col-md-12"], [1, "card-body", "h-100"], [1, "email-media"], [1, "mb-4", "d-lg-flex"], [1, "ml-auto", "d-none", "d-md-flex", "fs-18"], ["href", "javascript:;", 1, "mr-3", "tx-inverse"], ["placement", "top", "ngbTooltip", "Print", 1, "fe", "fe-printer"], ["href", "javascript:;", 1, "tx-inverse"], ["placement", "top", "ngbTooltip", "Undo", 1, "fe", "fe-tag"], [1, "media", "mt-0"], [1, "main-img-user", "avatar-md", "mr-3", "online"], ["alt", "avatar", "src", "../../assets/img/users/1.jpg", 1, "rounded-circle"], [1, "media-body", "tx-inverse"], [1, "float-right", "d-none", "d-md-flex", "fs-15"], [1, "mr-2"], ["placement", "top", "ngbTooltip", "Rated", 1, "fe", "fe-star"], ["placement", "top", "ngbTooltip", "Reply", 1, "fa", "fa-reply"], ["ngbDropdown", "", 1, "mr-2"], ["href", "javascript:;", "ngbDropdownToggle", "", "role", "button"], ["placement", "top", "ngbTooltip", "View more", 1, "fe", "fe-more-horizontal", "text-dark"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "shadow"], ["ngbDropdownItem", "", "href", "javascript:;"], [1, "media-title", "font-weight-semiblod"], [1, "tx-18", "font-weight-bold"], [1, "mb-0", "text-muted"], [1, "mr-2", "d-md-none"], [1, "eamil-body"], [1, "mb-3"], [1, "mb-0"], [1, "email-attch"], [1, "float-right"], ["placement", "top", "ngbTooltip", "Download", 1, "fa", "fa-download", "text-dark"], [1, "emai-img"], [1, "col-sm-3"], ["src", "../../assets/img/media/18.jpg", "alt", "Generic placeholder image", 1, "w-100"], [1, "mb-3", "mt-3", "mb-lg-0"], [1, "text-muted"], ["src", "../../assets/img/media/19.jpg", "alt", "Generic placeholder image", 1, "w-100"], ["src", "../../assets/img/media/20.jpg", "alt", "Generic placeholder image", 1, "w-100"], [1, "mt-3", "mb-lg-0"], [1, "card-footer"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "mt-1", "mb-1", "mr-1"], [1, "fa", "fa-reply"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "mt-1", "mb-1"], [1, "fa", "fa-share"], ["content", ""], [1, "modal-header", "main-mail-compose-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "nav", 3, "click"], ["aria-hidden", "true", 1, "nav-link"], [1, "modal-body"], [1, "form-group"], [1, "main-mail-compose-body"], [1, "form-group", "mb-0"], [1, "form-label"], ["placeholder", "", "type", "text", 1, "form-control"], ["type", "text", 1, "form-control"], ["placeholder", "", "rows", "12", 1, "form-control"], [1, "modal-footer"], [1, "nav", "mailLinks"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Formatting", 1, "nav-link"], [1, "fas", "fa-font"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add attachment", 1, "nav-link"], [1, "fas", "fa-paperclip"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add photo", 1, "nav-link"], [1, "far", "fa-image"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Add link", 1, "nav-link"], [1, "fas", "fa-link"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Emoticons", 1, "nav-link"], [1, "far", "fa-smile"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Insert files into Drive", 1, "nav-link"], [1, "fab", "fa-google-drive"], ["data-toggle", "tooltip", "href", "javascript:;", "title", "", "data-original-title", "Delete", 1, "nav-link"], [1, "far", "fa-trash-alt"], [1, "btn", "ripple", "btn-primary", "float-right"]],
    template: function ViewMailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View-Mail");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewMailComponent_Template_a_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](186);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19)(29, "nav", 20)(30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Starred ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Important ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sent Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Drafts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Spam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Trash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nav", 38)(68, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Promotions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Updates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40)(84, "div", 15)(85, "div", 41)(86, "div", 42)(87, "div", 43)(88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Congratulations on your goal you achieved ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 44)(91, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 49)(96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 52)(99, "div", 53)(100, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Nov 2, 2020 12:45 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 57)(107, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 60)(110, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Report Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Show Original");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 62)(123, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Sonia Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "sonai@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "small", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Nov 2, 2020 12:45 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "small", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "small", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 66)(134, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Hi Sir/Madam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Thanking you Sir/Madam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 69)(148, "div", 70)(149, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "3 Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " View All Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 72)(156, "div", 13)(157, "div", 73)(158, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "img_01.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "12kb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 73)(165, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "img_02.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "18kb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 73)(172, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h6", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "img_03.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "small", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "21kb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 80)(179, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](185, ViewMailComponent_ng_template_185_Template, 40, 0, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbTooltip],
    styles: [".modal.show.modalCusSty .modal-dialog {\n  border-radius: 5px;\n  height: 520px;\n  width: 600px;\n  max-width: 100%;\n}\n@media (max-width: 768px) {\n    .modal.show.modalCusSty .modal-dialog {\n    width: 90% !important;\n  }\n}\n@media (max-width: 360px) {\n    .nav.mailLinks {\n    width: 180px;\n  }\n}\n\n.btn-main-primary[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #8667ff;\n  border-color: #8667ff;\n}\n\n.main-mail-compose-body[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.main-mail-compose-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  border: 1px solid #eaedf7;\n  padding-left: 5px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWlsL3ZpZXctbWFpbC92aWV3LW1haWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL21haWwvdmlldy1tYWlsL3ZpZXctbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRFI7QURJSTtFQUNJO0lBQ0kscUJBQUE7RUNGVjtBQUNGO0FES0k7RUFDSTtJQUNJLFlBQUE7RUNIVjtBQUNGOztBRE9BO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURRQTtFQUNJLHVCQUFBO0FDTEo7O0FET0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSx3QkFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcHtcclxuICAgIC5tb2RhbC5zaG93Lm1vZGFsQ3VzU3R5IC5tb2RhbC1kaWFsb2d7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgICAgIC5tb2RhbC5zaG93Lm1vZGFsQ3VzU3R5IC5tb2RhbC1kaWFsb2d7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuICAgICAgICAubmF2Lm1haWxMaW5rc3tcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1tYWluLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY2N2ZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODY2N2ZmO1xyXG59XHJcblxyXG5cclxuLm1haW4tbWFpbC1jb21wb3NlLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWFpbi1tYWlsLWNvbXBvc2UtYm9keSAuZm9ybS1ncm91cHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVkZjc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCA7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5e1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSIsIjo6bmctZGVlcCAubW9kYWwuc2hvdy5tb2RhbEN1c1N0eSAubW9kYWwtZGlhbG9nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUyMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLm1vZGFsLnNob3cubW9kYWxDdXNTdHkgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgOjpuZy1kZWVwIC5uYXYubWFpbExpbmtzIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn1cblxuLmJ0bi1tYWluLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2NjdmZjtcbiAgYm9yZGVyLWNvbG9yOiAjODY2N2ZmO1xufVxuXG4ubWFpbi1tYWlsLWNvbXBvc2UtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1tYWlsLWNvbXBvc2UtYm9keSAuZm9ybS1ncm91cCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVkZjc7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93386:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipeModule: () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _search_table_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-table.pipe */ 42269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);




class PipeModule {
  static #_ = this.ɵfac = function PipeModule_Factory(t) {
    return new (t || PipeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PipeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipeModule, {
    declarations: [_search_table_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_search_table_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe]
  });
})();

/***/ }),

/***/ 42269:
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/search-table.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class FilterPipe {
  transform(value, args) {
    let v = args.value;
    if (v) {
      return value.filter(item => JSON.stringify(item).toLowerCase().includes(v.toLowerCase()));
    } else {
      return value;
    }
  }
  static #_ = this.ɵfac = function FilterPipe_Factory(t) {
    return new (t || FilterPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "filter",
    type: FilterPipe,
    pure: true
  });
}

/***/ }),

/***/ 81207:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/message/message.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
class Message {}
// "status":"success",
// "message":"Message request successfully completed"
// "data": ""
// }

/***/ }),

/***/ 1522:
/*!************************************************************!*\
  !*** ./src/app/shared/services/message/message.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class MessageService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(target, callback) {
    this.get(`cms/pages/fetch/enquiry`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  create(target, body = {}, callback) {
    console.log(body);
    this.post(`cms/emails/send-mail`, body).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
      console.log(response.data, '-----info');
    }, error => callback(error, false));
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵMessageService_BaseFactory;
    return function MessageService_Factory(t) {
      return (ɵMessageService_BaseFactory || (ɵMessageService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MessageService)))(t || MessageService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MessageService,
    factory: MessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_mail_mail_module_ts.js.map