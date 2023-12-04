"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["common"],{

/***/ 33132:
/*!********************************************!*\
  !*** ./src/app/shared/models/job.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Assigned: () => (/* binding */ Assigned),
/* harmony export */   Job: () => (/* binding */ Job),
/* harmony export */   JobAssignedPayload: () => (/* binding */ JobAssignedPayload),
/* harmony export */   Schedule: () => (/* binding */ Schedule)
/* harmony export */ });
/* harmony import */ var _auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.models */ 11811);
/**
 * ALL JOB RELATED INTERFACES HERE
 */

class Assigned {
  constructor() {
    this.job = new Job();
    this.user = new _auth_models__WEBPACK_IMPORTED_MODULE_0__.UserList();
  }
}
class Schedule {}
/**
 * ALL JOB RELATED CLASSES
 */
class Job {}
class JobAssignedPayload {}

/***/ }),

/***/ 50862:
/*!*************************************************!*\
  !*** ./src/app/shared/services/date.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateService: () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class DateService {
  compare(first_date, second_date) {
    let first = new Date();
    if (first_date != undefined) {
      first = new Date(first_date);
    }
    let second = new Date();
    if (second_date != undefined) {
      first = new Date(second_date);
    }
    if (new Date(first).getTime() >= new Date(second).getTime()) {
      return true;
    }
    return false;
  }
  isSameDay(date1, date2) {
    return date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  getSeparatorBody(date) {
    if (this.isSameDay(date, new Date())) {
      return 'Today';
    }
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (this.isSameDay(date, yesterday)) {
      return 'Yesterday';
    }
    return date.toISOString();
  }
  getDateOrTime(date) {
    if (this.isSameDay(date, new Date())) {
      return this.formatDate(date);
    }
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (this.isSameDay(date, yesterday)) {
      return this.formatDate(yesterday);
    }
    return date.toISOString();
  }
  formatDate(date) {
    var d = new Date(date);
    return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;
  }
  formatTime(date) {
    var d = new Date(date);
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var dd = "am";
    var h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = "pm";
    }
    if (h == 0) {
      h = 12;
    }
    let m = mm < 10 ? "0" + mm : mm;
    let s = ss < 10 ? "0" + ss : ss;
    return `${h}:${m} ${dd}`;
  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    let hhs = hours ? hours : 12; // the hour '0' should be '12'
    let mms = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hhs + ':' + mms + ' ' + ampm;
    return strTime;
  }
  formatEnUSWithOption(_date) {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    var date = new Date(_date);
    // console.log(date.toLocaleDateString("en-US")); // 9/17/2016
    // console.log(date.toLocaleDateString("en-US", options));
    return date.toLocaleDateString("en-US", options);
  }
  static #_ = this.ɵfac = function DateService_Factory(t) {
    return new (t || DateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DateService,
    factory: DateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 87010:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/requests/payload.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayloadService: () => (/* binding */ PayloadService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class PayloadService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  constructor() {
    super(...arguments);
    this.TYPE_POST = "post";
    this.TYPE_GET = "get";
  }
  request(path, data = {}, type, callback) {
    if (type == this.TYPE_GET) {
      this.get(path).subscribe(response => {
        let status = false;
        if (response.status == "success") {
          status = true;
        }
        callback(response.data, status);
      }, error => callback(error, false));
    } else {
      this.post(path, data).subscribe(response => {
        let status = false;
        if (response.status == "success") {
          status = true;
        }
        callback(response.data, status);
      }, error => callback(error, false));
    }
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵPayloadService_BaseFactory;
    return function PayloadService_Factory(t) {
      return (ɵPayloadService_BaseFactory || (ɵPayloadService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PayloadService)))(t || PayloadService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PayloadService,
    factory: PayloadService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60324:
/*!************************************************************!*\
  !*** ./src/app/shared/services/web/minstrytype.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinistryTypeService: () => (/* binding */ MinistryTypeService)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 74048);



class MinistryTypeService {
  constructor(http) {
    this.http = http;
  }
  // Function to create a new MinistryType
  createMinistryType(body) {
    const createMinsTypeUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/create/ministry-types`;
    return this.http.post(createMinsTypeUrl, body);
  }
  // Function to fetch all MinistryTypes
  getSingleMinistryTypes() {
    const getMinsTypeUrl = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/get/ministry-types`;
    return this.http.get(getMinsTypeUrl);
  }
  static #_ = this.ɵfac = function MinistryTypeService_Factory(t) {
    return new (t || MinistryTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MinistryTypeService,
    factory: MinistryTypeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map