"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_dashboard_dashboard_module_ts"],{

/***/ 19464:
/*!*****************************************************************!*\
  !*** ./node_modules/leaflet-geosearch/dist/geosearch.module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgoliaProvider: () => (/* binding */ L),
/* harmony export */   BingProvider: () => (/* binding */ U),
/* harmony export */   CivilDefenseMapProvider: () => (/* binding */ q),
/* harmony export */   EsriProvider: () => (/* binding */ C),
/* harmony export */   GeoApiFrProvider: () => (/* binding */ B),
/* harmony export */   GeoSearchControl: () => (/* binding */ w),
/* harmony export */   GeoapifyProvider: () => (/* binding */ D),
/* harmony export */   GeocodeEarthProvider: () => (/* binding */ R),
/* harmony export */   GoogleProvider: () => (/* binding */ j),
/* harmony export */   HereProvider: () => (/* binding */ N),
/* harmony export */   JsonProvider: () => (/* binding */ k),
/* harmony export */   LegacyGoogleProvider: () => (/* binding */ I),
/* harmony export */   LocationIQProvider: () => (/* binding */ O),
/* harmony export */   MapBoxProvider: () => (/* binding */ _),
/* harmony export */   OpenCageProvider: () => (/* binding */ M),
/* harmony export */   OpenStreetMapProvider: () => (/* binding */ F),
/* harmony export */   PeliasProvider: () => (/* binding */ S),
/* harmony export */   SearchControl: () => (/* binding */ w),
/* harmony export */   SearchElement: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 50658);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

function e() {
  return e = Object.assign ? Object.assign.bind() : function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, e.apply(this, arguments);
}
function r(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e);
}
function n(t, e) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, n(t, e);
}
function o() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}
function i(t, e, r) {
  return i = o() ? Reflect.construct.bind() : function (t, e, r) {
    var o = [null];
    o.push.apply(o, e);
    var i = new (Function.bind.apply(t, o))();
    return r && n(i, r.prototype), i;
  }, i.apply(null, arguments);
}
function s(t, e, r, n) {
  void 0 === e && (e = ""), void 0 === n && (n = {});
  var o = document.createElement(t);
  return e && (o.className = e), Object.keys(n).forEach(function (t) {
    if ("function" == typeof n[t]) {
      var e = 0 === t.indexOf("on") ? t.substr(2).toLowerCase() : t;
      o.addEventListener(e, n[t]);
    } else "html" === t ? o.innerHTML = n[t] : "text" === t ? o.innerText = n[t] : o.setAttribute(t, n[t]);
  }), r && r.appendChild(o), o;
}
function a(t) {
  t.preventDefault(), t.stopPropagation();
}
var l = function () {
  return [].slice.call(arguments).filter(Boolean).join(" ").trim();
};
function c(t, e) {
  t && t.classList && (Array.isArray(e) ? e : [e]).forEach(function (e) {
    t.classList.contains(e) || t.classList.add(e);
  });
}
function u(t, e) {
  t && t.classList && (Array.isArray(e) ? e : [e]).forEach(function (e) {
    t.classList.contains(e) && t.classList.remove(e);
  });
}
var h,
  p = 13,
  d = 40,
  f = 38,
  v = [p, 27, d, f, 37, 39],
  m = /*#__PURE__*/function () {
    function t(t) {
      var e = this,
        r = t.handleSubmit,
        n = t.searchLabel,
        o = t.classNames,
        i = void 0 === o ? {} : o;
      this.container = void 0, this.form = void 0, this.input = void 0, this.handleSubmit = void 0, this.hasError = !1, this.container = s("div", l("geosearch", i.container)), this.form = s("form", ["", i.form].join(" "), this.container, {
        autocomplete: "none",
        onClick: a,
        onDblClick: a,
        touchStart: a,
        touchEnd: a
      }), this.input = s("input", ["glass", i.input].join(" "), this.form, {
        type: "text",
        placeholder: n || "search",
        onInput: this.onInput,
        onKeyUp: function (t) {
          return e.onKeyUp(t);
        },
        onKeyPress: function (t) {
          return e.onKeyPress(t);
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: function () {
          e.input.focus(), e.input.dispatchEvent(new Event("focus"));
        }
      }), this.handleSubmit = r;
    }
    var e = t.prototype;
    return e.onFocus = function () {
      c(this.form, "active");
    }, e.onBlur = function () {
      u(this.form, "active");
    }, e.onSubmit = function (t) {
      try {
        var e = this;
        return a(t), u(r = e.container, "error"), c(r, "pending"), Promise.resolve(e.handleSubmit({
          query: e.input.value
        })).then(function () {
          u(e.container, "pending");
        });
      } catch (t) {
        return Promise.reject(t);
      }
      var r;
    }, e.onInput = function () {
      this.hasError && (u(this.container, "error"), this.hasError = !1);
    }, e.onKeyUp = function (t) {
      27 === t.keyCode && (u(this.container, ["pending", "active"]), this.input.value = "", document.body.focus(), document.body.blur());
    }, e.onKeyPress = function (t) {
      t.keyCode === p && this.onSubmit(t);
    }, e.setQuery = function (t) {
      this.input.value = t;
    }, t;
  }(),
  g = /*#__PURE__*/function () {
    function t(t) {
      var e = this,
        r = t.handleClick,
        n = t.classNames,
        o = void 0 === n ? {} : n,
        i = t.notFoundMessage;
      this.handleClick = void 0, this.selected = -1, this.results = [], this.container = void 0, this.resultItem = void 0, this.notFoundMessage = void 0, this.onClick = function (t) {
        if ("function" == typeof e.handleClick) {
          var r = t.target;
          if (r && e.container.contains(r) && r.hasAttribute("data-key")) {
            var n = Number(r.getAttribute("data-key"));
            e.handleClick({
              result: e.results[n]
            });
          }
        }
      }, this.handleClick = r, this.notFoundMessage = i ? s("div", l(o.notfound), void 0, {
        html: i
      }) : void 0, this.container = s("div", l("results", o.resultlist)), this.container.addEventListener("click", this.onClick, !0), this.resultItem = s("div", l(o.item));
    }
    var e = t.prototype;
    return e.render = function (t, e) {
      var r = this;
      void 0 === t && (t = []), this.clear(), t.forEach(function (t, n) {
        var o = r.resultItem.cloneNode(!0);
        o.setAttribute("data-key", "" + n), o.innerHTML = e({
          result: t
        }), r.container.appendChild(o);
      }), t.length > 0 ? (c(this.container.parentElement, "open"), c(this.container, "active")) : this.notFoundMessage && (this.container.appendChild(this.notFoundMessage), c(this.container.parentElement, "open")), this.results = t;
    }, e.select = function (t) {
      return Array.from(this.container.children).forEach(function (e, r) {
        return r === t ? c(e, "active") : u(e, "active");
      }), this.selected = t, this.results[t];
    }, e.count = function () {
      return this.results ? this.results.length : 0;
    }, e.clear = function () {
      for (this.selected = -1; this.container.lastChild;) this.container.removeChild(this.container.lastChild);
      u(this.container.parentElement, "open"), u(this.container, "active");
    }, t;
  }(),
  y = {
    position: "topleft",
    style: "button",
    showMarker: !0,
    showPopup: !1,
    popupFormat: function (t) {
      return "" + t.result.label;
    },
    resultFormat: function (t) {
      return "" + t.result.label;
    },
    marker: {
      icon: leaflet__WEBPACK_IMPORTED_MODULE_0__ && leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon ? new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon.Default() : void 0,
      draggable: !1
    },
    maxMarkers: 1,
    maxSuggestions: 5,
    retainZoomLevel: !1,
    animateZoom: !0,
    searchLabel: "Enter address",
    clearSearchLabel: "Clear search",
    notFoundMessage: "",
    messageHideDelay: 3e3,
    zoomLevel: 18,
    classNames: {
      container: "leaflet-bar leaflet-control leaflet-control-geosearch",
      button: "leaflet-bar-part leaflet-bar-part-single",
      resetButton: "reset",
      msgbox: "leaflet-bar message",
      form: "",
      input: "",
      resultlist: "",
      item: "",
      notfound: "leaflet-bar-notfound"
    },
    autoComplete: !0,
    autoCompleteDelay: 250,
    autoClose: !1,
    keepResult: !1,
    updateMap: !0
  },
  b = "Leaflet must be loaded before instantiating the GeoSearch control",
  E = {
    options: e({}, y),
    classNames: e({}, y.classNames),
    initialize: function (r) {
      var n,
        o,
        i,
        a,
        l = this;
      if (!leaflet__WEBPACK_IMPORTED_MODULE_0__) throw new Error(b);
      if (!r.provider) throw new Error("Provider is missing from options");
      this.options = e({}, y, r), this.classNames = e({}, this.classNames, r.classNames), this.markers = new leaflet__WEBPACK_IMPORTED_MODULE_0__.FeatureGroup(), this.classNames.container += " leaflet-geosearch-" + this.options.style, this.searchElement = new m({
        searchLabel: this.options.searchLabel,
        classNames: {
          container: this.classNames.container,
          form: this.classNames.form,
          input: this.classNames.input
        },
        handleSubmit: function (t) {
          return l.onSubmit(t);
        }
      }), this.button = s("a", this.classNames.button, this.searchElement.container, {
        title: this.options.searchLabel,
        href: "#",
        onClick: function (t) {
          return l.onClick(t);
        }
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.button), this.resetButton = s("button", this.classNames.resetButton, this.searchElement.form, {
        text: "×",
        "aria-label": this.options.clearSearchLabel,
        onClick: function () {
          "" === l.searchElement.input.value ? l.close() : l.clearResults(null, !0);
        }
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.resetButton), this.options.autoComplete && (this.resultList = new g({
        handleClick: function (t) {
          var e = t.result;
          l.searchElement.input.value = e.label, l.onSubmit({
            query: e.label,
            data: e
          });
        },
        classNames: {
          resultlist: this.classNames.resultlist,
          item: this.classNames.item,
          notfound: this.classNames.notfound
        },
        notFoundMessage: this.options.notFoundMessage
      }), this.searchElement.form.appendChild(this.resultList.container), this.searchElement.input.addEventListener("keyup", (n = function (t) {
        return l.autoSearch(t);
      }, void 0 === (o = this.options.autoCompleteDelay) && (o = 250), void 0 === i && (i = !1), function () {
        var t = [].slice.call(arguments);
        a && clearTimeout(a), a = setTimeout(function () {
          a = null, i || n.apply(void 0, t);
        }, o), i && !a && n.apply(void 0, t);
      }), !0), this.searchElement.input.addEventListener("keydown", function (t) {
        return l.selectResult(t);
      }, !0), this.searchElement.input.addEventListener("keydown", function (t) {
        return l.clearResults(t, !0);
      }, !0)), this.searchElement.form.addEventListener("click", function (t) {
        t.preventDefault();
      }, !1);
    },
    onAdd: function (e) {
      var r = this.options,
        n = r.showMarker,
        o = r.style;
      if (this.map = e, n && this.markers.addTo(e), "bar" === o) {
        var i = e.getContainer().querySelector(".leaflet-control-container");
        this.container = s("div", "leaflet-control-geosearch leaflet-geosearch-bar"), this.container.appendChild(this.searchElement.form), i.appendChild(this.container);
      }
      return leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.searchElement.form), this.searchElement.container;
    },
    onRemove: function () {
      var t;
      return null == (t = this.container) || t.remove(), this;
    },
    open: function () {
      var t = this.searchElement,
        e = t.input;
      c(t.container, "active"), e.focus();
    },
    close: function () {
      u(this.searchElement.container, "active"), this.clearResults();
    },
    onClick: function (t) {
      t.preventDefault(), t.stopPropagation(), this.searchElement.container.classList.contains("active") ? this.close() : this.open();
    },
    selectResult: function (t) {
      if (-1 !== [p, d, f].indexOf(t.keyCode)) if (t.preventDefault(), t.keyCode !== p) {
        var e = this.resultList.count() - 1;
        if (!(e < 0)) {
          var r = this.resultList.selected,
            n = t.keyCode === d ? r + 1 : r - 1,
            o = this.resultList.select(n < 0 ? e : n > e ? 0 : n);
          this.searchElement.input.value = o.label;
        }
      } else {
        var i = this.resultList.select(this.resultList.selected);
        this.onSubmit({
          query: this.searchElement.input.value,
          data: i
        });
      }
    },
    clearResults: function (t, e) {
      if (void 0 === e && (e = !1), !t || 27 === t.keyCode) {
        var r = this.options,
          n = r.autoComplete;
        !e && r.keepResult || (this.searchElement.input.value = "", this.markers.clearLayers()), n && this.resultList.clear();
      }
    },
    autoSearch: function (t) {
      try {
        var e = this;
        if (v.indexOf(t.keyCode) > -1) return Promise.resolve();
        var r = t.target.value,
          n = e.options.provider,
          o = function () {
            if (r.length) return Promise.resolve(n.search({
              query: r
            })).then(function (t) {
              t = t.slice(0, e.options.maxSuggestions), e.resultList.render(t, e.options.resultFormat);
            });
            e.resultList.clear();
          }();
        return Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
      } catch (t) {
        return Promise.reject(t);
      }
    },
    onSubmit: function (t) {
      try {
        var e = this;
        return e.resultList.clear(), Promise.resolve(e.options.provider.search(t)).then(function (r) {
          r && r.length > 0 && e.showResult(r[0], t);
        });
      } catch (t) {
        return Promise.reject(t);
      }
    },
    showResult: function (t, e) {
      var r = this.options,
        n = r.autoClose,
        o = r.updateMap,
        i = this.markers.getLayers();
      i.length >= this.options.maxMarkers && this.markers.removeLayer(i[0]);
      var s = this.addMarker(t, e);
      o && this.centerMap(t), this.map.fireEvent("geosearch/showlocation", {
        location: t,
        marker: s
      }), n && this.closeResults();
    },
    closeResults: function () {
      var t = this.searchElement.container;
      t.classList.contains("active") && u(t, "active"), this.clearResults();
    },
    addMarker: function (e, r) {
      var n = this,
        o = this.options,
        i = o.marker,
        s = o.showPopup,
        a = o.popupFormat,
        l = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker([e.y, e.x], i),
        c = e.label;
      return "function" == typeof a && (c = a({
        query: r,
        result: e
      })), l.bindPopup(c), this.markers.addLayer(l), s && l.openPopup(), i.draggable && l.on("dragend", function (t) {
        n.map.fireEvent("geosearch/marker/dragend", {
          location: l.getLatLng(),
          event: t
        });
      }), l;
    },
    centerMap: function (e) {
      var r = this.options,
        n = r.retainZoomLevel,
        o = r.animateZoom,
        i = e.bounds ? new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds(e.bounds) : new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(e.y, e.x).toBounds(10),
        s = i.isValid() ? i : this.markers.getBounds();
      !n && i.isValid() && !e.bounds || n || !i.isValid() ? this.map.setView(s.getCenter(), this.getZoom(), {
        animate: o
      }) : this.map.fitBounds(s, {
        animate: o
      });
    },
    getZoom: function () {
      var t = this.options,
        e = t.zoomLevel;
      return t.retainZoomLevel ? this.map.getZoom() : e;
    }
  };
function w() {
  if (!leaflet__WEBPACK_IMPORTED_MODULE_0__) throw new Error(b);
  var e = leaflet__WEBPACK_IMPORTED_MODULE_0__.Control.extend(E);
  return i(e, [].slice.call(arguments));
}
!function (t) {
  t[t.SEARCH = 0] = "SEARCH", t[t.REVERSE = 1] = "REVERSE";
}(h || (h = {}));
var x,
  k = /*#__PURE__*/function () {
    function t(t) {
      void 0 === t && (t = {}), this.options = void 0, this.options = t;
    }
    var r = t.prototype;
    return r.getParamString = function (t) {
      void 0 === t && (t = {});
      var r = e({}, this.options.params, t);
      return Object.keys(r).map(function (t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(r[t]);
      }).join("&");
    }, r.getUrl = function (t, e) {
      return t + "?" + this.getParamString(e);
    }, r.search = function (t) {
      try {
        var e = this,
          r = e.endpoint({
            query: t.query,
            type: h.SEARCH
          });
        return Promise.resolve(fetch(r)).then(function (t) {
          return Promise.resolve(t.json()).then(function (t) {
            return e.parse({
              data: t
            });
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, t;
  }(),
  L = /*#__PURE__*/function (t) {
    function n() {
      return t.apply(this, arguments) || this;
    }
    r(n, t);
    var o = n.prototype;
    return o.endpoint = function () {
      return "https://places-dsn.algolia.net/1/places/query";
    }, o.findBestMatchLevelIndex = function (t) {
      var e = t.find(function (t) {
        return "full" === t.matchLevel;
      }) || t.find(function (t) {
        return "partial" === t.matchLevel;
      });
      return e ? t.indexOf(e) : 0;
    }, o.getLabel = function (t) {
      var e, r, n, o;
      return [null == (e = t.locale_names) ? void 0 : e.default[this.findBestMatchLevelIndex(t._highlightResult.locale_names.default)], null == (r = t.city) ? void 0 : r.default[this.findBestMatchLevelIndex(t._highlightResult.city.default)], t.administrative[this.findBestMatchLevelIndex(t._highlightResult.administrative)], null == (n = t.postcode) ? void 0 : n[this.findBestMatchLevelIndex(t._highlightResult.postcode)], null == (o = t.country) ? void 0 : o.default].filter(Boolean).join(", ");
    }, o.parse = function (t) {
      var e = this;
      return t.data.hits.map(function (t) {
        return {
          x: t._geoloc.lng,
          y: t._geoloc.lat,
          label: e.getLabel(t),
          bounds: null,
          raw: t
        };
      });
    }, o.search = function (t) {
      var r = t.query;
      try {
        var n = this,
          o = "string" == typeof r ? {
            query: r
          } : r;
        return Promise.resolve(fetch(n.endpoint(), {
          method: "POST",
          body: JSON.stringify(e({}, n.options.params, o))
        })).then(function (t) {
          return Promise.resolve(t.json()).then(function (t) {
            return n.parse({
              data: t
            });
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, n;
  }(k),
  U = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://dev.virtualearth.net/REST/v1/Locations", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          q: e
        } : e;
      return r.jsonp = t.jsonp, this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return 0 === t.data.resourceSets.length ? [] : t.data.resourceSets[0].resources.map(function (t) {
        return {
          x: t.point.coordinates[1],
          y: t.point.coordinates[0],
          label: t.address.formattedAddress,
          bounds: [[t.bbox[0], t.bbox[1]], [t.bbox[2], t.bbox[3]]],
          raw: t
        };
      });
    }, n.search = function (t) {
      var e,
        r,
        n,
        o = t.query;
      try {
        var i = this,
          a = "BING_JSONP_CB_" + Date.now();
        return Promise.resolve((e = i.endpoint({
          query: o,
          jsonp: a
        }), r = a, n = s("script", null, document.body), n.setAttribute("type", "text/javascript"), new Promise(function (t) {
          window[r] = function (e) {
            n.remove(), delete window[r], t(e);
          }, n.setAttribute("src", e);
        }))).then(function (t) {
          return i.parse({
            data: t
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  C = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          text: e
        } : e;
      return r.f = "json", this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return t.data.locations.map(function (t) {
        return {
          x: t.feature.geometry.x,
          y: t.feature.geometry.y,
          label: t.name,
          bounds: [[t.extent.ymin, t.extent.xmin], [t.extent.ymax, t.extent.xmax]],
          raw: t
        };
      });
    }, e;
  }(k),
  S = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return void 0 === e && (e = {}), (r = t.call(this, e) || this).host = void 0, r.host = e.host || "http://localhost:4000", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return t.type === h.REVERSE ? this.getUrl(this.host + "/v1/reverse", "string" == typeof e ? {} : e) : this.getUrl(this.host + "/v1/autocomplete", "string" == typeof e ? {
        text: e
      } : e);
    }, n.parse = function (t) {
      return t.data.features.map(function (t) {
        var e = {
          x: t.geometry.coordinates[0],
          y: t.geometry.coordinates[1],
          label: t.properties.label,
          bounds: null,
          raw: t
        };
        return Array.isArray(t.bbox) && 4 === t.bbox.length && (e.bounds = [[t.bbox[1], t.bbox[0]], [t.bbox[3], t.bbox[2]]]), e;
      });
    }, e;
  }(k),
  R = /*#__PURE__*/function (t) {
    function e(e) {
      return void 0 === e && (e = {}), e.host = "https://api.geocode.earth", t.call(this, e) || this;
    }
    return r(e, t), e;
  }(S),
  P = function t(e, r) {
    if (e === r) return !0;
    if (e && r && "object" == typeof e && "object" == typeof r) {
      if (e.constructor !== r.constructor) return !1;
      var n, o, i;
      if (Array.isArray(e)) {
        if ((n = e.length) != r.length) return !1;
        for (o = n; 0 != o--;) if (!t(e[o], r[o])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if ((n = (i = Object.keys(e)).length) !== Object.keys(r).length) return !1;
      for (o = n; 0 != o--;) if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
      for (o = n; 0 != o--;) {
        var s = i[o];
        if (!t(e[s], r[s])) return !1;
      }
      return !0;
    }
    return e != e && r != r;
  };
!function (t) {
  t[t.INITIALIZED = 0] = "INITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILURE = 3] = "FAILURE";
}(x || (x = {}));
class A {
  constructor({
    apiKey: t,
    authReferrerPolicy: e,
    channel: r,
    client: n,
    id: o = "__googleMapsScriptId",
    language: i,
    libraries: s = [],
    mapIds: a,
    nonce: l,
    region: c,
    retries: u = 3,
    url: h = "https://maps.googleapis.com/maps/api/js",
    version: p
  }) {
    if (this.CALLBACK = "__googleMapsCallback", this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = t, this.authReferrerPolicy = e, this.channel = r, this.client = n, this.id = o || "__googleMapsScriptId", this.language = i, this.libraries = s, this.mapIds = a, this.nonce = l, this.region = c, this.retries = u, this.url = h, this.version = p, A.instance) {
      if (!P(this.options, A.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(A.instance.options)}`);
      return A.instance;
    }
    A.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    return this.errors.length ? x.FAILURE : this.done ? x.SUCCESS : this.loading ? x.LOADING : x.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let t = this.url;
    return t += `?callback=${this.CALLBACK}`, this.apiKey && (t += `&key=${this.apiKey}`), this.channel && (t += `&channel=${this.channel}`), this.client && (t += `&client=${this.client}`), this.libraries.length > 0 && (t += `&libraries=${this.libraries.join(",")}`), this.language && (t += `&language=${this.language}`), this.region && (t += `&region=${this.region}`), this.version && (t += `&v=${this.version}`), this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (t += `&auth_referrer_policy=${this.authReferrerPolicy}`), t;
  }
  deleteScript() {
    const t = document.getElementById(this.id);
    t && t.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((t, e) => {
      this.loadCallback(r => {
        r ? e(r.error) : t(window.google);
      });
    });
  }
  loadCallback(t) {
    this.callbacks.push(t), this.execute();
  }
  setScript() {
    if (document.getElementById(this.id)) return void this.callback();
    const t = this.createUrl(),
      e = document.createElement("script");
    e.id = this.id, e.type = "text/javascript", e.src = t, e.onerror = this.loadErrorCallback.bind(this), e.defer = !0, e.async = !0, this.nonce && (e.nonce = this.nonce), document.head.appendChild(e);
  }
  reset() {
    this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t) {
    if (this.errors.push(t), this.errors.length <= this.retries) {
      const t = this.errors.length * Math.pow(2, this.errors.length);
      console.log(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, t);
    } else this.onerrorEvent = t, this.callback();
  }
  setCallback() {
    window.__googleMapsCallback = this.callback.bind(this);
  }
  callback() {
    this.done = !0, this.loading = !1, this.callbacks.forEach(t => {
      t(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), this.done) this.callback();else {
      if (window.google && window.google.maps && window.google.maps.version) return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), void this.callback();
      this.loading || (this.loading = !0, this.setCallback(), this.setScript());
    }
  }
}
var j = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return (r = t.call(this, e) || this).loader = null, r.geocoder = null, "undefined" != typeof window && (r.loader = new A(e).load().then(function (t) {
        var e = new t.maps.Geocoder();
        return r.geocoder = e, e;
      })), r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      throw new Error("Method not implemented.");
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        var e = t.geometry.location.toJSON(),
          r = e.lat,
          n = e.lng,
          o = t.geometry.viewport.toJSON();
        return {
          x: n,
          y: r,
          label: t.formatted_address,
          bounds: [[o.south, o.west], [o.north, o.east]],
          raw: t
        };
      });
    }, n.search = function (t) {
      try {
        var e = function (e) {
            if (!e) throw new Error("GoogleMaps GeoCoder is not loaded. Are you trying to run this server side?");
            return Promise.resolve(e.geocode({
              address: t.query
            }, function (t) {
              return {
                results: t
              };
            }).catch(function (t) {
              return "ZERO_RESULTS" !== t.code && console.error(t.code + ": " + t.message), {
                results: []
              };
            })).then(function (t) {
              return r.parse({
                data: t
              });
            });
          },
          r = this,
          n = r.geocoder;
        return Promise.resolve(n ? e(n) : Promise.resolve(r.loader).then(e));
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  I = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://maps.googleapis.com/maps/api/geocode/json", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(this.searchUrl, "string" == typeof e ? {
        address: e
      } : e);
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        return {
          x: t.geometry.location.lng,
          y: t.geometry.location.lat,
          label: t.formatted_address,
          bounds: [[t.geometry.viewport.southwest.lat, t.geometry.viewport.southwest.lng], [t.geometry.viewport.northeast.lat, t.geometry.viewport.northeast.lng]],
          raw: t
        };
      });
    }, e;
  }(k),
  N = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://geocode.search.hereapi.com/v1/autosuggest", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(this.searchUrl, "string" == typeof e ? {
        q: e
      } : e);
    }, n.parse = function (t) {
      return t.data.items.filter(function (t) {
        return void 0 !== t.position;
      }).map(function (t) {
        return {
          x: t.position.lng,
          y: t.position.lat,
          label: t.address.label,
          bounds: null,
          raw: t
        };
      });
    }, e;
  }(k),
  F = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://nominatim.openstreetmap.org";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = t.type,
        n = "string" == typeof e ? {
          q: e
        } : e;
      return n.format = "json", this.getUrl(r === h.REVERSE ? this.reverseUrl : this.searchUrl, n);
    }, n.parse = function (t) {
      return (Array.isArray(t.data) ? t.data : [t.data]).map(function (t) {
        return {
          x: Number(t.lon),
          y: Number(t.lat),
          label: t.display_name,
          bounds: [[parseFloat(t.boundingbox[0]), parseFloat(t.boundingbox[2])], [parseFloat(t.boundingbox[1]), parseFloat(t.boundingbox[3])]],
          raw: t
        };
      });
    }, e;
  }(k),
  O = /*#__PURE__*/function (t) {
    function n(r) {
      return t.call(this, e({}, r, {
        searchUrl: "https://locationiq.org/v1/search.php",
        reverseUrl: "https://locationiq.org/v1/reverse.php"
      })) || this;
    }
    return r(n, t), n.prototype.parse = function (e) {
      return e.data.error ? [] : t.prototype.parse.call(this, e);
    }, n;
  }(F),
  M = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://api.opencagedata.com/geocode/v1/json", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          q: e
        } : e;
      return r.format = "json", this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        return {
          x: t.geometry.lng,
          y: t.geometry.lat,
          label: t.formatted,
          bounds: [[t.bounds.southwest.lat, t.bounds.southwest.lng], [t.bounds.northeast.lat, t.bounds.northeast.lng]],
          raw: t
        };
      });
    }, n.search = function (e) {
      try {
        return Promise.resolve(e.query.length < 2 ? [] : t.prototype.search.call(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  q = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://civildefense.fit.vutbr.cz";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = t.type,
        n = "string" == typeof e ? {
          q: e
        } : e;
      return n.format = "json", this.getUrl(r === h.REVERSE ? this.reverseUrl : this.searchUrl, n);
    }, n.parse = function (t) {
      return (Array.isArray(t.data) ? t.data : [t.data]).map(function (t) {
        return {
          x: Number(t.lon),
          y: Number(t.lat),
          label: t.display_name,
          bounds: [[parseFloat(t.boundingbox[0]), parseFloat(t.boundingbox[2])], [parseFloat(t.boundingbox[1]), parseFloat(t.boundingbox[3])]],
          raw: t
        };
      });
    }, e;
  }(k),
  _ = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.searchUrl = e.searchUrl || "https://a.tiles.mapbox.com/v4/geocode/mapbox.places/", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      return this.getUrl("" + this.searchUrl + t.query + ".json");
    }, n.parse = function (t) {
      return (Array.isArray(t.data.features) ? t.data.features : []).map(function (t) {
        var e = null;
        return t.bbox && (e = [[parseFloat(t.bbox[1]), parseFloat(t.bbox[0])], [parseFloat(t.bbox[3]), parseFloat(t.bbox[2])]]), {
          x: Number(t.center[0]),
          y: Number(t.center[1]),
          label: t.place_name ? t.place_name : t.text,
          bounds: e,
          raw: t
        };
      });
    }, e;
  }(k),
  B = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://api-adresse.data.gouv.fr";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(t.type === h.REVERSE ? this.reverseUrl : this.searchUrl, "string" == typeof e ? {
        q: e
      } : e);
    }, n.parse = function (t) {
      return t.data.features.map(function (t) {
        return {
          x: t.geometry.coordinates[0],
          y: t.geometry.coordinates[1],
          label: t.properties.label,
          bounds: null,
          raw: t
        };
      });
    }, e;
  }(k),
  D = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://api.geoapify.com/v1/geocode";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = t.type,
        n = "string" == typeof e ? {
          text: e
        } : e;
      return n.format = "json", this.getUrl(r === h.REVERSE ? this.reverseUrl : this.searchUrl, n);
    }, n.parse = function (t) {
      return (Array.isArray(t.data.results) ? t.data.results : [t.data.results]).map(function (t) {
        return {
          x: Number(t.lon),
          y: Number(t.lat),
          label: t.formatted,
          bounds: [[parseFloat(t.bbox.lat1), parseFloat(t.bbox.lon1)], [parseFloat(t.bbox.lat2), parseFloat(t.bbox.lon2)]],
          raw: t
        };
      });
    }, e;
  }(k);


/***/ }),

/***/ 40509:
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 39107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }]
}];
class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 51010:
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 39107);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 40509);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-circle-progress */ 95000);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _maps_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maps/map/map.component */ 18062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);











class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__.NgCircleProgressModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _maps_map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 39107:
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/date.service */ 50862);
/* harmony import */ var src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/requests/payload.service */ 87010);
/* harmony import */ var src_app_shared_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/statistics.service */ 40432);







class DashboardComponent {
  constructor(
  // private chatService: ChatService,
  http, authService, userService, dateService, requestService, statisticsService) {
    this.http = http;
    this.authService = authService;
    this.userService = userService;
    this.dateService = dateService;
    this.requestService = requestService;
    this.statisticsService = statisticsService;
    this.total_jobs = 0;
    this.jobs = new Array();
    this.total_users = 0;
    this.users = new Array();
    this.statistics = new Array();
  }
  ngOnInit() {
    // console.log("Token Data: ", this.authService.token())
    // this.loadJobs();
    // this.loadUsers();
    // this.loadStatistics()
    this.access = this.authService.check(this.authService.USER_ACCESS);
  }
  // loadJobs() {
  // }
  // loadStatistics() {
  //   let $this = this
  //   this.statisticsService.all(`page-visits`, function (result, status) {
  //     console.log(result, 'result')
  //     if (status) {
  //       $this.static = result
  //       $this.today_visit = result && result.today_visits ? result.today_visits : 0;
  //       $this.percentage_change = result && result.percentage_change ? result.percentage_change : 0;
  //       $this.previous_month_visits = result && result?.previous_month_visits ? result?.previous_month_visits : 0;
  //     }
  //   })
  // }
  // loadUsers() {
  //   let $this = this
  //   this.userService.all(function (result, status) {
  //     if (status) {
  //       $this.users = result
  //       $this.total_users = result.length || 0
  //     }
  //   })
  // }
  formatToday() {
    let date = new Date();
    return this.dateService.formatEnUSWithOption(date);
  }
  formatDate(date) {
    // var d = new Date(date);
    return this.dateService.formatDate(date);
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_3__.PayloadService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__.StatisticsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 169,
    vars: 6,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "row-sm"], [1, "col-sm-12", "col-lg-12", "col-xl-8"], [1, "row", "row-sm", "mt-lg-4"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "card", "bg-secondary", "custom-card", "card-box"], [1, "card-body", "p-4"], [1, "row", "align-items-center"], [1, "offset-xl-3", "offset-sm-6", "col-xl-8", "col-sm-6", "col-12"], [1, "d-flex", "mb-3"], [1, "font-weight-bold", "text-white"], [1, "tx-white-7", "mb-1"], ["src", "../../assets/img/pngs/work3.png", "alt", "user-img", 1, "wd-200"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "card-item"], [1, "card-item-icon", "card-icon"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "text-orange", "orange-icon"], ["height", "14", "opacity", ".3", "width", "14", "x", "5", "y", "5"], ["fill", "none", "height", "24", "width", "24"], ["d", "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"], ["height", "5", "width", "2", "x", "7", "y", "12"], ["height", "10", "width", "2", "x", "15", "y", "7"], ["height", "3", "width", "2", "x", "11", "y", "14"], ["height", "2", "width", "2", "x", "11", "y", "10"], [1, "card-item-title", "mb-2"], [1, "main-content-label", "tx-13", "font-weight-bold", "mb-1"], [1, "d-block", "tx-12", "mb-0", "text-muted"], [1, "card-item-body"], [1, "card-item-stat"], [1, "font-weight-bold"], [1, "text-success"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "text-orange", "orange-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z", "opacity", ".3"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"], [1, "row"], [1, "col-lg-12"], [1, "card", "custom-card", "mg-b-20"], [1, "card-header", "border-bottom-0", "pt-0", "pl-0", "pr-0", "d-flex"], [1, "main-content-label", "mb-2"], [1, "d-block", "tx-12", "mb-3", "text-muted"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-header", "border-bottom-0"], [1, "card-body", "pl-0"], [1, ""], [1, "container"], [1, "col-sm-12", "col-lg-12", "col-xl-4", "mt-xl-4"], [1, "card-body", "beautiful-card"], [1, "card-item-title", "mb-2", 2, "margin-top", "250px"], [1, "col-6"], [1, "card-item-title"], [1, "main-content-label", "tx-13", "font-weight-bold", "mb-2"], [1, "mb-0", "tx-24", "mt-2"], [2, "color", "#e57a2d"], ["href", "javascript:;", 1, "text-muted"], ["src", "../../assets/img/pngs/work.png", "alt", "image", 1, "best-emp"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Website Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "h4", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Ministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Doing more than just a CMS. Read contacts, Reply to mail and gain insight into how users interact with your website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6)(25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "svg", 23)(31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "path", 26)(37, "rect", 27)(38, "rect", 28)(39, "rect", 29)(40, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 31)(42, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Today's Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Previous month vs this months");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 34)(47, "div", 35)(48, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "small")(51, "b", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " higher");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 18)(55, "div", 19)(56, "div", 20)(57, "div", 21)(58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "path", 39)(61, "path", 40)(62, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 31)(64, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Previous Month Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Employees joined this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 34)(69, "div", 35)(70, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "small")(73, "b", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " Increased");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 18)(77, "div", 19)(78, "div", 20)(79, "div", 21)(80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "svg", 23)(82, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "path", 26)(88, "rect", 27)(89, "rect", 28)(90, "rect", 29)(91, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 31)(93, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Current month visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Previous month vs this months");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 34)(98, "div", 35)(99, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 18)(102, "div", 19)(103, "div", 20)(104, "div", 21)(105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "path", 39)(108, "path", 40)(109, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 31)(111, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 34)(114, "div", 35)(115, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 42)(118, "div", 43)(119, "div", 44)(120, "div", 20)(121, "div", 45)(122, "div")(123, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Countries where visitors are viewing your website");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 6)(128, "div", 9)(129, "div", 48)(130, "div", 49)(131, "div")(132, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Visitor Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Visit count against the average click per session - monthly analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 50)(137, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](138, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 53)(140, "div", 19)(141, "div", 54)(142, "div", 21)(143, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "path", 39)(146, "path", 40)(147, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 55)(149, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "div", 19)(154, "div", 20)(155, "div", 6)(156, "div", 56)(157, "div", 57)(158, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "Total Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "23 jobs or event launched");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "p", 59)(163, "b", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "2 in Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "12 active as at 12 Monday, Oct 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](168, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.today_visits);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.percentage_change, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.previous_month_visits);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.current_month_visits);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.percentage_change, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.formatToday());
      }
    },
    styles: [".forth.circle svg {\n  margin: 0 auto;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n}\n  .btn-primary:hover {\n  color: #fff !important;\n  background-color: #403fad !important;\n  border-color: #403fad !important;\n}\n  .dropdown-menu-right.dropdown-menu {\n  transform: translate(-101px, 40px) !important;\n}\n  .dropdown-menu {\n  z-index: 9 !important;\n}\n\n.ml-auto.show.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n}\n\n.beautiful-card[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  min-height: 350px;\n  background: linear-gradient(to bottom, rgba(83, 105, 248, 0.6), rgba(37, 35, 59, 0.9)), url('dashboard.jpg');\n  background-size: cover;\n  color: white !important;\n}\n.beautiful-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .beautiful-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\ntext-orange[_ngcontent-%COMP%] {\n  color: #e57a2d !important;\n}\n\n.orange-icon[_ngcontent-%COMP%] {\n  fill: #e57a2d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RaO0FES0k7RUFDSSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUNIUjtBRE1JO0VBQ0ksNkNBQUE7QUNKUjtBRE9JO0VBQ0kscUJBQUE7QUNMUjs7QURVQTtFQUNJLDZDQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDUEo7QURTSTs7RUFFSSx1QkFBQTtBQ1BSOztBRFdBO0VBQ0kseUJBQUE7QUNSSjs7QURZQTtFQUNJLGFBQUE7QUNUSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgICAuZm9ydGguY2lyY2xlIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDNmYWQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MDNmYWQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAxcHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tbC1hdXRvLnNob3cuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmVhdXRpZnVsLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoODMsIDEwNSwgMjQ4LCAwLjYpLCByZ2IoMzcsIDM1LCA1OSwgMC45KSksIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVkaWEvZGFzaGJvYXJkLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICBsYWJlbCxcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG50ZXh0LW9yYW5nZSB7XHJcbiAgICBjb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm9yYW5nZS1pY29uIHtcclxuICAgIGZpbGw6ICNlNTdhMmQ7XHJcbn0iLCI6Om5nLWRlZXAgLmZvcnRoLmNpcmNsZSBzdmcge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZmFkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzQwM2ZhZCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LXJpZ2h0LmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAxcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1hdXRvLnNob3cuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5iZWF1dGlmdWwtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoODMsIDEwNSwgMjQ4LCAwLjYpLCByZ2JhKDM3LCAzNSwgNTksIDAuOSkpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL21lZGlhL2Rhc2hib2FyZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJlYXV0aWZ1bC1jYXJkIGxhYmVsLFxuLmJlYXV0aWZ1bC1jYXJkIHNwYW4ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxudGV4dC1vcmFuZ2Uge1xuICBjb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufVxuXG4ub3JhbmdlLWljb24ge1xuICBmaWxsOiAjZTU3YTJkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 18062:
/*!******************************************************!*\
  !*** ./src/app/components/maps/map/map.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 50658);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-geosearch */ 19464);


// import "leaflet/dist/leaflet.css";


class MapComponent {
  constructor() {
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.location = {
      x: -3.9747177,
      y: 56.1187003,
      label: 'Dumbarton, Stiling City, Scotland'
    };
  }
  ngOnInit() {
    this.initMap();
    // console.log("Map Initialized here");
  }

  ngAfterViewInit() {
    // this.tracking.subscribe(v => { 
    //   switch(v.key){
    //       case "status":
    //         if(v.value){
    //           // setTimeout(() => this.initMap(), 200);
    //         }
    //       break;
    //       case "address":
    //           if(v.value){
    //               console.log("Address Entered:", v.value)
    //               this.address = v.value;
    //               setTimeout(() => this.initMap(), 200);
    //           }
    //       break;
    //   }
    // });
  }
  initMap() {
    // refresh map id
    document.getElementById("contain-map").innerHTML = `<div id='map' style='width: 100%; height: 100%;'></div>`;
    // init map
    const map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map("map", {
      // Set latitude and longitude of the map center (required)
      center: [this.location.y, this.location.x],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 13
    });
    // add icon
    leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
      iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Chartreuse-icon.png",
      // shadowUrl: 'assets/images/icons/Blank.png',
      iconSize: [25, 41],
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [9, 40],
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });

    leaflet__WEBPACK_IMPORTED_MODULE_0__.control.scale().addTo(map);
    // Create a Tile Layer and add it to the map
    leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
    }).addTo(map);
    // add search control https://github.com/smeijer/leaflet-geosearch
    const provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__.OpenStreetMapProvider();
    const searchControl = (0,leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__.GeoSearchControl)({
      provider: provider,
      autoClose: true
    });
    // map.addControl(searchControl);
    /**
     * Set address on the map
     */
    this.getAddress(provider, map);
    // popover
    // let marker = L.marker([this.location.y, this.location.x], { draggable: true })
    //   .addTo(map)
    //   // .bindPopup(this.location.label)
    //   .openPopup();
    //   marker.on('click', function(e) {
    //     alert("Label clicked!");
    //  })
    // handler
    // map.on("geosearch/showlocation", e => {
    //   if (this.marker) {
    //     // check
    //     map.removeLayer(this.marker); // remove
    //   }
    //   this.marker = new L.Marker([e.location.y, e.location.x], { draggable: true })
    //     .addTo(map)
    //     .bindPopup(e.location.label)
    //     .openPopup();
    // });
    let $this = this;
    map.on('click', function (e) {
      // console.log(e.location.label)
      $this.onChange(e);
      // $this.inputModel = $this.latlng;
      if (this.marker) {
        // check
        map.removeLayer(this.marker); // remove
      }
      // this.marker = new L.Marker(e.latlng, { draggable: true })
      // .addTo(map)
      // // .bindPopup('<p>New Location Selected</p>')
      // .openPopup();
      // var popLocation= e.latlng;
      // var popup = L.popup()
      // .setLatLng(popLocation)
      // .setContent('<p>Hello world!<br />This is a nice popup.</p>')
      // .openOn(map);        
    });
  }

  onChange(e) {
    let data = e.latlng;
    console.log(e);
    this.inputModelChange.emit(data);
  }
  getAddress(provider, map) {
    if (this.address) {
      var query_promise = provider.search({
        query: `${this.address}`
      });
      console.log(this.address, query_promise);
      query_promise.then(value => {
        for (let i = 0; i < value.length; i++) {
          var x_coor = value[i].x;
          var y_coor = value[i].y;
          var label = value[i].label;
          // Create a marker for the found coordinates
          this.marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([y_coor, x_coor], {
            draggable: true
          }).addTo(map); // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
          // Add a popup to said marker with the address found by geosearch (not the one from the user)
          this.marker.bindPopup("<b>Found location</b><br>" + label).openPopup();
          /**
           * Emit event change to parent view
           */
          this.onChange({
            latlng: {
              lat: y_coor,
              lng: x_coor
            }
          });
          break;
        }
        ;
      }, reason => {
        console.log(reason); // Error!
      });
    }
  }
  static #_ = this.ɵfac = function MapComponent_Factory(t) {
    return new (t || MapComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MapComponent,
    selectors: [["app-mapx"]],
    inputs: {
      tracking: "tracking",
      inputModel: "inputModel"
    },
    outputs: {
      inputModelChange: "inputModelChange"
    },
    decls: 2,
    vars: 0,
    consts: [[1, "container"], ["id", "contain-map", 1, "m-auto", 2, "position", "relative", "height", "380px", "width", "100% !important"]],
    template: function MapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    styles: [".leaflet-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL21hcHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LWxheWVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTtcbn0iLCIubGVhZmxldC1sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 40432:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/statistics.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsService: () => (/* binding */ StatisticsService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);


class StatisticsService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(target, callback) {
    this.get(`cms/statistics/${target}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵStatisticsService_BaseFactory;
    return function StatisticsService_Factory(t) {
      return (ɵStatisticsService_BaseFactory || (ɵStatisticsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](StatisticsService)))(t || StatisticsService);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StatisticsService,
    factory: StatisticsService.ɵfac,
    providedIn: 'root'
  });
}

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
//# sourceMappingURL=src_app_components_dashboard_dashboard_module_ts.js.map