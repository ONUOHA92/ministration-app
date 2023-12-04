(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_pages_pages_module_ts"],{

/***/ 12076:
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};

/***/ }),

/***/ 37260:
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ticky = __webpack_require__(/*! ticky */ 55001);
module.exports = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }
  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};

/***/ }),

/***/ 99257:
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var atoa = __webpack_require__(/*! atoa */ 12076);
var debounce = __webpack_require__(/*! ./debounce */ 37260);
module.exports = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) {
    thing = {};
  }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) {
        return thing;
      }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }
      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }
        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };
  return thing;
};

/***/ }),

/***/ 89497:
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ 19313);
var eventmap = __webpack_require__(/*! ./eventmap */ 79496);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}
module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}
function fabricateEvent(el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent() {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent() {
    return new customEvent(type, {
      detail: model
    });
  }
}
function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };
    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}
function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}
function unwrap(el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}
function find(el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/***/ }),

/***/ 79496:
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;
for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}
module.exports = eventmap;

/***/ }),

/***/ 19313:
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/***/ ((module) => {

var NativeCustomEvent = global.CustomEvent;
function useNative() {
  try {
    var p = new NativeCustomEvent('cat', {
      detail: {
        foo: 'bar'
      }
    });
    return 'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {}
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :
// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :
// IE <= 8
function CustomEvent(type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
};

/***/ }),

/***/ 80908:
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';
function lookupClass(className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}
function addClass(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}
function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}
module.exports = {
  add: addClass,
  rm: rmClass
};

/***/ }),

/***/ 73568:
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ 99257);
var crossvent = __webpack_require__(/*! crossvent */ 89497);
var classes = __webpack_require__(/*! ./classes */ 80908);
var doc = document;
var documentElement = doc.documentElement;
function dragula(initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) {
    o.moves = always;
  }
  if (o.accepts === void 0) {
    o.accepts = always;
  }
  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }
  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }
  if (o.isContainer === void 0) {
    o.isContainer = never;
  }
  if (o.copy === void 0) {
    o.copy = false;
  }
  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }
  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }
  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }
  if (o.direction === void 0) {
    o.direction = 'vertical';
  }
  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }
  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }
  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });
  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }
  events();
  return drake;
  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }
  function events(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }
  function eventualMovements(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }
  function movements(remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }
  function destroy() {
    events(true);
    release({});
  }
  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }
  function grab(e) {
    _moveX = e.clientX;
    _moveY = e.clientY;
    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }

    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) {
        // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved(e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }
    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);
    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;
    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }
  function canStart(item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }

    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }
    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }
    return {
      item: item,
      source: source
    };
  }
  function canMove(item) {
    return !!canStart(item);
  }
  function manualStart(item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }
  function start(context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }
    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);
    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }
  function invalidTarget() {
    return false;
  }
  function end() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }
  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }
  function release(e) {
    ungrab();
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }
  function drop(item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }
  function remove() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }
  function cancel(revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }
  function cleanup() {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }
  function isInitialPlacement(target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }
  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;
    function accepted() {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }
      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }

      return o.accepts(_item, target, _source, reference);
    }
  }
  function drag(e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;
    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';
    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }
    function over() {
      if (changed) {
        moved('over');
      }
    }
    function out() {
      if (_lastDropTarget) {
        moved('out');
      }
    }
  }
  function spillOver(el) {
    classes.rm(el, 'gu-hide');
  }
  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, 'gu-hide');
    }
  }
  function renderMirrorImage() {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }
  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }
  function getImmediateChild(dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }
  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;
    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }
    function inside() {
      // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }
    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }
  function isCopy(item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}
function touchy(el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}
function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }
  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) {
    return e.buttons;
  }
  var button = e.button;
  if (button !== void 0) {
    // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}
function getScroll(scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}
function never() {
  return false;
}
function always() {
  return true;
}
function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
  if (!el) {
    return false;
  } // no parents were editable
  if (el.contentEditable === 'false') {
    return false;
  } // stop the lookup
  if (el.contentEditable === 'true') {
    return true;
  } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl(el) {
  return el.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}
function getEventHost(e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}
function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX',
    // IE8
    pageY: 'clientY' // IE8
  };

  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}
module.exports = dragula;

/***/ }),

/***/ 40868:
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function (window, document, exportName, undefined) {
  'use strict';

  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;

  /**
   * set a timeout with a given scope
   * @param {Function} fn
   * @param {Number} timeout
   * @param {Object} context
   * @returns {number}
   */
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }

  /**
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }

  /**
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }

  /**
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */
  function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function () {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);
      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }
      return method.apply(this, arguments);
    };
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */
  var assign;
  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  } else {
    assign = Object.assign;
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */
  var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }, 'extend', 'Use `assign`.');

  /**
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */
  var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');

  /**
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */
  function inherit(child, base, properties) {
    var baseP = base.prototype,
      childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      assign(childP, properties);
    }
  }

  /**
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }

  /**
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }

  /**
   * use the val2 when val1 is undefined
   * @param {*} val1
   * @param {*} val2
   * @returns {*}
   */
  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }

  /**
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }

  /**
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }

  /**
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  /**
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }

  /**
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }

  /**
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }

  /**
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }

  /**
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }

  /**
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */
  function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }

  /**
   * get a unique id
   * @returns {number} uniqueId
   */
  var _uniqueId = 1;
  function uniqueId() {
    return _uniqueId++;
  }

  /**
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */
  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in window);
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];

  /**
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }
  Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function () {},
    /**
     * bind the events
     */
    init: function () {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    /**
     * unbind the events
     */
    destroy: function () {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };

  /**
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */
  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new Type(manager, inputHandler);
  }

  /**
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }

  /**
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }

  /**
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
      deltaTime = input.timeStamp - last.timeStamp,
      velocity,
      velocityX,
      velocityY,
      direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }

  /**
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */
  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }

  /**
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */
  function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
      y = 0,
      i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }

  /**
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }

  /**
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }

  /**
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }

  /**
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  /**
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }

  /**
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

  /**
   * Mouse events input
   * @constructor
   * @extends Input
   */
  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
  }
  inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];

      // on start we want to have the left mouse button down
      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }
      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      }

      // mouse must be down
      if (!this.pressed) {
        return;
      }
      if (eventType & INPUT_END) {
        this.pressed = false;
      }
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }
  });
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  };

  // in IE10 the pointer types is defined as an enum
  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
  };

  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

  // IE10 has prefixed support, and case-sensitive
  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }

  /**
   * Pointer events input
   * @constructor
   * @extends Input
   */
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType == INPUT_TYPE_TOUCH;

      // get index of the event in the store
      var storeIndex = inArray(store, ev.pointerId, 'pointerId');

      // start and mouse must be down
      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      }

      // it not found, so the pointer hasn't been down (so it's probably a hover)
      if (storeIndex < 0) {
        return;
      }

      // update the event in the store
      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });
      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    }
  });
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Touch events input
   * @constructor
   * @extends Input
   */
  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }
  inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

      // should we handle the touch events?
      if (type === INPUT_START) {
        this.started = true;
      }
      if (!this.started) {
        return;
      }
      var touches = normalizeSingleTouches.call(this, ev, type);

      // when done, reset the started state
      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }
  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */
  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (!touches) {
        return;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
      targetTouches,
      changedTouches = toArray(ev.changedTouches),
      changedTargetTouches = [],
      target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }

      // cleanup removed touches
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [
    // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }

  /**
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */

  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
        isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
      if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
        return;
      }

      // when we're in a touch event, record touches to  de-dupe synthetic mouse event
      if (isTouch) {
        recordTouches.call(this, inputEvent, inputData);
      } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
        return;
      }
      this.callback(manager, inputEvent, inputData);
    },
    /**
     * remove the event listeners
     */
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }
  function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];
    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.lastTouches.push(lastTouch);
      var lts = this.lastTouches;
      var removeLastTouch = function () {
        var i = lts.indexOf(lastTouch);
        if (i > -1) {
          lts.splice(i, 1);
        }
      };
      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }
  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX,
      y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x),
        dy = Math.abs(y - t.y);
      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }
    return false;
  }
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

  // magical touchAction value
  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();

  /**
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function (value) {
      // find out the touch-action by the event handlers
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    /**
     * just re-set the touchAction value
     */
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function () {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },
    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function (input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;

      // if the touch action did prevented once this session
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }
      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
      if (hasNone) {
        //do not prevent defaults if this is a tap gesture

        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;
        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }
      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }
      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    },
    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function (srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };

  /**
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */
  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }
  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }

  /**
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */
  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;

  /**
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */
  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},
    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function (options) {
      assign(this.options, options);

      // also update the touchAction, in case something changed about the directions/enabled state
      this.manager && this.manager.touchAction.update();
      return this;
    },
    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }
      return this;
    },
    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },
    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }
      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }
      return this;
    },
    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      if (index > -1) {
        this.requireFail.splice(index, 1);
      }
      return this;
    },
    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function (otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function (input) {
      var self = this;
      var state = this.state;
      function emit(event) {
        self.manager.emit(event, input);
      }

      // 'panstart' and 'panmove'
      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      }

      // panend and pancancel
      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    },
    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function (input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      // it's failing anyway
      this.state = STATE_FAILED;
    },
    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function () {
      var i = 0;
      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }
        i++;
      }
      return true;
    },
    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign({}, inputData);

      // is is enabled and allow recognizing?
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      }

      // reset when we've reached the end
      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }
      this.state = this.process(inputDataClone);

      // the recognizer has recognized a gesture
      // so trigger an event
      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },
    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function (inputData) {},
    // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function () {},
    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function () {}
  };

  /**
   * get a usable string, used as event postfix
   * @param {Const} state
   * @returns {String} state
   */
  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }

  /**
   * direction cons to string
   * @param {Const} direction
   * @returns {String}
   */
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }

  /**
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }

  /**
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
      /**
       * @type {Number}
       * @default 1
       */
      pointers: 1
    },
    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function (input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function (input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input);

      // on cancel input and we've recognized before, return STATE_CANCELLED
      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }
        return state | STATE_CHANGED;
      }
      return STATE_FAILED;
    }
  });

  /**
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function () {
      var direction = this.options.direction;
      var actions = [];
      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }
      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }
      return actions;
    },
    directionTest: function (input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;

      // lock to axis?
      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }
      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function (input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    },
    emit: function (input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function (input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function () {
      return [TOUCH_ACTION_AUTO];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input;

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function () {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }
      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });

  /**
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function () {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function (input) {
      var direction = this.options.direction;
      var velocity;
      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }
      return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function (input) {
      var direction = directionStr(input.offsetDirection);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });

  /**
   * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */
  function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function () {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();
      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      }

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }
        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;
        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }
        this._input = input;

        // if tap count matches we have recognized it,
        // else it has began recognizing...
        var tapCount = this.count % options.taps;
        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }
      return STATE_FAILED;
    },
    failTimeout: function () {
      this._timer = setTimeoutContext(function () {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }

  /**
   * @const {string}
   */
  Hammer.VERSION = '2.0.7';

  /**
   * default settings
   * @namespace
   */
  Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,
    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,
    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,
    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,
    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,
    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
    // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
    [RotateRecognizer, {
      enable: false
    }], [PinchRecognizer, {
      enable: false
    }, ['rotate']], [SwipeRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }], [PanRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],
    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: 'none',
      /**
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: 'none',
      /**
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: 'none',
      /**
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: 'none',
      /**
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: 'none',
      /**
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;

  /**
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
      var recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function (options) {
      assign(this.options, options);

      // Options that need a little more setup
      if (options.touchAction) {
        this.touchAction.update();
      }
      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }
      return this;
    },
    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function (force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },
    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      var session = this.session;
      if (session.stopped) {
        return;
      }

      // run the touch-action polyfill
      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers;

      // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`
      var curRecognizer = session.curRecognizer;

      // reset when the last recognizer is recognized
      // or when we're in a new session
      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        curRecognizer = session.curRecognizer = null;
      }
      var i = 0;
      while (i < recognizers.length) {
        recognizer = recognizers[i];

        // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.
        if (session.stopped !== FORCED_STOP && (
        // 1
        !curRecognizer || recognizer == curRecognizer ||
        // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        }

        // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer
        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }
        i++;
      }
    },
    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function (recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }
      var recognizers = this.recognizers;
      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }
      return null;
    },
    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function (recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      }

      // remove existing
      var existing = this.get(recognizer.options.event);
      if (existing) {
        this.remove(existing);
      }
      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },
    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function (recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }
      recognizer = this.get(recognizer);

      // let's make sure this recognizer exists
      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, recognizer);
        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function (events, handler) {
      if (events === undefined) {
        return;
      }
      if (handler === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },
    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function (events, handler) {
      if (events === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },
    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function (event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      }

      // no handlers, so skip it all
      var handlers = this.handlers[event] && this.handlers[event].slice();
      if (!handlers || !handlers.length) {
        return;
      }
      data.type = event;
      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };
      var i = 0;
      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },
    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function () {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };

  /**
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */
  function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
      return;
    }
    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);
      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || '';
      }
    });
    if (!add) {
      manager.oldCssProps = {};
    }
  }

  /**
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  });

  // this prevents errors when Hammer is loaded in the presence of an AMD
  //  style loader but by script tag, not by the loader.
  var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
  freeGlobal.Hammer = Hammer;
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Hammer;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, document, 'Hammer');

/***/ }),

/***/ 55001:
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/***/ ((module) => {

var si = typeof setImmediate === 'function',
  tick;
if (si) {
  tick = function (fn) {
    setImmediate(fn);
  };
} else {
  tick = function (fn) {
    setTimeout(fn, 0);
  };
}
module.exports = tick;

/***/ }),

/***/ 93032:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/dangermessage/dangermessage.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DangermessageComponent: () => (/* binding */ DangermessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class DangermessageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DangermessageComponent_Factory(t) {
    return new (t || DangermessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DangermessageComponent,
    selectors: [["app-dangermessage"]],
    decls: 16,
    vars: 0,
    consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512 512", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m491.38 157.66c-13.149-30.297-31.855-57.697-55.598-81.439-23.742-23.742-51.142-42.448-81.439-55.598-31.529-13.686-64.615-20.625-98.338-20.625s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598s-42.448 51.142-55.598 81.439c-13.686 31.529-20.625 64.615-20.625 98.338s6.939 66.809 20.625 98.338c13.15 30.297 31.856 57.697 55.598 81.439s51.142 42.448 81.439 55.598c31.529 13.686 64.615 20.625 98.338 20.625s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439c13.686-31.529 20.625-64.615 20.625-98.338s-6.939-66.809-20.625-98.338zm-235.38 334.34c-127.92 0-236-108.08-236-236s108.08-236 236-236 236 108.08 236 236-108.08 236-236 236z"], ["d", "m451.98 173.8c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.687-42.473-35.179-67.73-46.05-26.248-11.297-53.903-17.025-82.196-17.025-38.462 0-78.555 13.134-115.94 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.265 5.85 13.863 2.794 34.1-22.66 70.365-34.638 104.88-34.638 104.62 0 193 88.383 193 193s-88.383 193-193 193-193-88.383-193-193c0-34.504 11.975-70.771 34.629-104.88 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.808-1.803-13.863 2.797-24.84 37.397-37.97 77.489-37.97 115.94 0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.686 42.473 35.179 67.729 46.049 26.249 11.298 53.904 17.026 82.197 17.026s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729 11.298-26.249 17.026-53.904 17.026-82.197s-5.728-55.948-17.025-82.196z"], ["d", "m312.56 256 41.716-41.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.281 11.719l-41.719 41.719-41.719-41.719c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.278 11.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281l41.719 41.719-41.716 41.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.281-11.719l41.719-41.719 41.719 41.719c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.278-11.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281l-41.719-41.719zm27.577 84.139c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.139-5.861l-48.79-48.79c-1.953-1.953-4.512-2.929-7.071-2.929s-5.119 0.976-7.071 2.929l-48.79 48.79c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.142-5.864c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139l48.79-48.79c3.905-3.905 3.905-10.237 0-14.142l-48.793-48.793c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l48.79 48.79c3.905 3.905 10.237 3.905 14.143 0l48.79-48.791c3.779-3.778 8.8-5.86 14.138-5.86s10.359 2.082 14.142 5.864c3.777 3.775 5.858 8.795 5.858 14.136s-2.081 10.361-5.861 14.139l-48.79 48.791c-3.905 3.905-3.905 10.237 0 14.142l48.793 48.793c3.777 3.774 5.858 8.794 5.858 14.135s-2.081 10.361-5.861 14.139z"], ["d", "m114 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"], [1, "mt-4", "mb-3"], [1, "tx-18", "text-white-50"], ["routerLink", "/dashboard", 1, "btn", "btn-danger"]],
    template: function DangermessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Oops!! You tried to access a page which is not available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13300:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/emptypage/emptypage.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptypageComponent: () => (/* binding */ EmptypageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class EmptypageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function EmptypageComponent_Factory(t) {
    return new (t || EmptypageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmptypageComponent,
    selectors: [["app-emptypage"]],
    decls: 26,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "sidemenu-height"], [1, "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"]],
    template: function EmptypageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Empty Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Empty Page");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Typing Some text here.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88434:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/faqs/faqs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsComponent: () => (/* binding */ FaqsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


function FaqsComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
class FaqsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FaqsComponent_Factory(t) {
    return new (t || FaqsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FaqsComponent,
    selectors: [["app-faqs"]],
    decls: 84,
    vars: 1,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-sm-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "border"], [1, "p-4"], [1, "font-weight-semibold", "tx-16"], [1, "mb-0", "tx-14", "text-muted"], [1, "p-4", "border-top"], [1, "card", "custom-card", "accordion-faq"], ["aria-multiselectable", "true", "id", "accordion", "role", "tablist", 1, "accordion"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1", "title", "1.  How To Insert All The Plugins?"], ["ngbPanelContent", ""], ["id", "static-2", "title", "2.  How Can I contact?"], ["id", "static-3", "title", "3.  Can I use this Plugins in Another Template?"], ["id", "static-4", "title", "4.  How Can I Add another page in Template?"], ["id", "static-5", "title", "5.  It is Easy to Customizable?"], ["id", "static-6", "title", "6.  How can I download This template?"]],
    template: function FaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Faq");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Basic Faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19)(31, "div", 20)(32, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1. How To Insert All The Plugins?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2. How Can I contact?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23)(42, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3. Can I use this Plugins in Another Template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4. How Can I Add another page in Template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23)(52, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "5. It is Easy to Customizable?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23)(57, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "6. How can I download This template?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13)(62, "div", 14)(63, "div", 24)(64, "div", 16)(65, "div")(66, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Accordion Faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25)(71, "ngb-accordion", 26)(72, "ngb-panel", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, FaqsComponent_ng_template_73_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ngb-panel", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, FaqsComponent_ng_template_75_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, FaqsComponent_ng_template_77_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ngb-panel", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, FaqsComponent_ng_template_79_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ngb-panel", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, FaqsComponent_ng_template_81_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ngb-panel", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, FaqsComponent_ng_template_83_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanelContent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90758:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/gallery/gallery.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);




function GalleryComponent_li_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21)(1, "a", 22)(2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_31_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const img_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openImageModalRowDescription(img_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class GalleryComponent {
  constructor(galleryService) {
    this.galleryService = galleryService;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(2, {
      img: '../../assets/img/media/2.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(3, {
      img: '../../assets/img/media/3.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(4, {
      img: '../../assets/img/media/4.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(5, {
      img: '../../assets/img/media/5.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(6, {
      img: '../../assets/img/media/6.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(7, {
      img: '../../assets/img/media/7.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(8, {
      img: '../../assets/img/media/8.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(9, {
      img: '../../assets/img/media/9.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(10, {
      img: '../../assets/img/media/10.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(11, {
      img: '../../assets/img/media/11.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(12, {
      img: '../../assets/img/media/12.jpg',
      title: ''
    })];
    this.buttonsConfigDefault = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.DEFAULT
    };
    this.buttonsConfigSimple = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.SIMPLE
    };
    this.buttonsConfigAdvanced = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.ADVANCED
    };
    this.buttonsConfigFull = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.FULL
    };
    this.buttonsConfigCustom = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.CUSTOM,
      buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_CLOSE]
    };
    this.customPlainGalleryRowDescConfig = {
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.PlainGalleryStrategy.CUSTOM,
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(-1, true)
    };
  }
  ngOnInit() {}
  openImageModalRowDescription(image) {
    const index = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(index, true)
    });
  }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.DELETE) {
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.CUSTOM) {
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
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }
  static #_ = this.ɵfac = function GalleryComponent_Factory(t) {
    return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.GalleryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GalleryComponent,
    selectors: [["app-gallery"]],
    decls: 32,
    vars: 1,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], ["id", "lightgallery", 1, "list-unstyled", "row", "mb-0"], ["class", "col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-sm-4", "col-md-4", "col-xl-4", "mb-3"], ["href", "javascript:void(0)", 1, "wd-100p"], ["alt", "Thumb", 1, "img-responsive", 3, "src", "click"]],
    template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gallery");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Light Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A customizable, modular, responsive, gallery plugin for Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GalleryComponent_li_31_Template, 3, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.GalleryImage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94480:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/invoice/invoice.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceComponent: () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);

class InvoiceComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function InvoiceComponent_Factory(t) {
    return new (t || InvoiceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InvoiceComponent,
    selectors: [["app-invoice"]],
    decls: 146,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "d-lg-flex"], [1, "main-content-label", "mb-1"], [1, "ml-auto"], [1, "mb-1"], [1, "font-weight-bold"], [1, "mb-0"], [1, "mg-b-40"], [1, "col-lg-6"], [1, "h3"], [1, "col-lg-6", "text-right"], [1, "table-responsive", "mg-t-40"], [1, "table", "table-invoice", "table-bordered"], [1, "wd-20p"], [1, "wd-40p"], [1, "tx-center"], [1, "tx-right"], [1, "tx-12"], ["colspan", "2", "rowspan", "4", 1, "valign-middle"], [1, "invoice-notes"], [1, "main-content-label", "tx-13"], ["colspan", "2", 1, "tx-right"], [1, "tx-right", "tx-uppercase", "tx-bold", "tx-inverse"], [1, "tx-bold"], [1, "card-footer", "text-right"], ["type", "button", 1, "btn", "ripple", "btn-primary", "mb-1", "mr-1"], [1, "fe", "fe-credit-card", "mr-1"], ["type", "button", 1, "btn", "ripple", "btn-secondary", "mb-1", "mr-1"], [1, "fe", "fe-send", "mr-1"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "ripple", "btn-info", "mb-1"], [1, "fe", "fe-printer", "mr-1"]],
    template: function InvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invoice");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "#INV0678");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19)(29, "p", 20)(30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Invoice Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 01st November 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22)(34, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Due Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 01 May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13)(39, "div", 24)(40, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Invoice From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " State, City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Region, Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " yourdomain@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26)(51, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Invoice To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " State, City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Region, Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ypurdomain@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27)(62, "table", 28)(63, "thead")(64, "tr")(65, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "QNTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody")(76, "tr")(77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Logo Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Logo and business cards design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00A360.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A3120.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr")(88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Online Store Design & Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Design/Development for all popular modern browsers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00A380.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00A3240.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr")(99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "App Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Promotional mobile application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00A340.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00A340.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr")(110, "td", 34)(111, "div", 35)(112, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sub-Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u00A3400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr")(121, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr")(126, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr")(131, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Total Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 37)(134, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u00A3450.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 40)(137, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Pay Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Send Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Print Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87735:
/*!*************************************************************!*\
  !*** ./src/app/components/pages/page-msg-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageMsgRoutingModule: () => (/* binding */ PageMsgRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dangermessage/dangermessage.component */ 93032);
/* harmony import */ var _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successmessage/successmessage.component */ 40028);
/* harmony import */ var _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warningmessage/warningmessage.component */ 63181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);






const routes = [{
  path: '',
  children: [{
    path: 'success-message',
    component: _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_1__.SuccessmessageComponent
  }, {
    path: 'warning-message',
    component: _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_2__.WarningmessageComponent
  }, {
    path: 'danger-message',
    component: _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_0__.DangermessageComponent
  }]
}];
class PageMsgRoutingModule {
  static #_ = this.ɵfac = function PageMsgRoutingModule_Factory(t) {
    return new (t || PageMsgRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PageMsgRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageMsgRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 3752:
/*!**********************************************************!*\
  !*** ./src/app/components/pages/pages-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _website_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../website/blogs/blogs.component */ 21423);
/* harmony import */ var _website_enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../website/enquiry/enquiry.component */ 92728);
/* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emptypage/emptypage.component */ 13300);
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs/faqs.component */ 88434);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ 90758);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice.component */ 94480);
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/editor/editor.component */ 18731);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.component */ 348);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ 57666);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 74212);
/* harmony import */ var _all_ministration_all_ministration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../all-ministration/all-ministration.component */ 35993);
/* harmony import */ var _all_ministration_editor_mineditor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../all-ministration/editor/mineditor.component */ 57071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 51197);















const routes = [{
  path: '',
  children: [{
    path: 'list',
    component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__.PageComponent
  }, {
    path: ':index/page',
    component: _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__.EditorComponent
  }, {
    path: 'list',
    component: _all_ministration_all_ministration_component__WEBPACK_IMPORTED_MODULE_10__.AllMinistrationComponent
  }, {
    path: 'index/minstration',
    component: _all_ministration_editor_mineditor_component__WEBPACK_IMPORTED_MODULE_11__.MinEditorComponent
  }, {
    path: 'blogs',
    component: _website_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__.WebsiteBlogComponent
  }, {
    path: 'enquiry',
    component: _website_enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__.EnquiryComponent
  }, {
    path: 'empty-page',
    component: _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_2__.EmptypageComponent
  }, {
    path: 'faqs',
    component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent
  }, {
    path: 'gallery',
    component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent
  }, {
    path: 'invoice',
    component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__.InvoiceComponent
  }, {
    path: 'pricing',
    component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__.PricingComponent
  }, {
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent
  }]
}];
class PagesRoutingModule {
  static #_ = this.ɵfac = function PagesRoutingModule_Factory(t) {
    return new (t || PagesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: PagesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 69592:
/*!**************************************************!*\
  !*** ./src/app/components/pages/pages.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 74212);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/invoice.component */ 94480);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing/pricing.component */ 57666);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 90758);
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs/faqs.component */ 88434);
/* harmony import */ var _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./successmessage/successmessage.component */ 40028);
/* harmony import */ var _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dangermessage/dangermessage.component */ 93032);
/* harmony import */ var _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warningmessage/warningmessage.component */ 63181);
/* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emptypage/emptypage.component */ 13300);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages-routing.module */ 3752);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ 40868);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mousetrap */ 99882);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-msg-routing.module */ 87735);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/editor/editor.component */ 18731);
/* harmony import */ var _all_ministration_editor_mineditor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../all-ministration/editor/mineditor.component */ 57071);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pages.component */ 348);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-dragula */ 17175);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-quill */ 86882);
/* harmony import */ var _elements_elements_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../elements/elements.module */ 13918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 51197);






























class PagesModule {
  static #_ = this.ɵfac = function PagesModule_Factory(t) {
    return new (t || PagesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: PagesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__.PageMsgRoutingModule,
    //GalleryModule.forRoot(),
    ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule.forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_16__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_24__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_25__.DragulaModule.forRoot(), ngx_quill__WEBPACK_IMPORTED_MODULE_26__.QuillModule.forRoot(), _elements_elements_module__WEBPACK_IMPORTED_MODULE_17__.ElementsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_pages_component__WEBPACK_IMPORTED_MODULE_15__.PageComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__.EditorComponent, _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__.PricingComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent, _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__.FaqsComponent, _all_ministration_editor_mineditor_component__WEBPACK_IMPORTED_MODULE_14__.MinEditorComponent, _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_5__.SuccessmessageComponent, _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_6__.DangermessageComponent, _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_7__.WarningmessageComponent, _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__.EmptypageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__.PageMsgRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_16__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_24__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_25__.DragulaModule, ngx_quill__WEBPACK_IMPORTED_MODULE_26__.QuillModule, _elements_elements_module__WEBPACK_IMPORTED_MODULE_17__.ElementsModule]
  });
})();

/***/ }),

/***/ 18731:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/pages/editor/editor.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorComponent: () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _model_class_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/class-cms */ 72749);
/* harmony import */ var _model_pages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/pages.model */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/route.service */ 62473);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/backup.service */ 92305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/alerts/alert.component */ 75601);
/* harmony import */ var _common_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/alert/alert.component */ 3427);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-quill */ 86882);






















function EditorComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td")(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_tr_52_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](67);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.openLyricsModal(data_r16, _r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "View Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td")(7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td")(12, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td")(15, "div", 37)(16, "a", 38)(17, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_tr_52_Template_i_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.Select2OpenEdit(_r5, data_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_tr_52_Template_a_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const data_r16 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.onDelete(data_r16._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](data_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("href", data_r16.lyricslink, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](data_r16.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("href", data_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function EditorComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Prev");
  }
}
function EditorComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Next");
  }
}
function EditorComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_58_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23);
      const modal_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r21.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Create Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "form", 47)(10, "div", 48)(11, "div", 49)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 51)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 51)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 51)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Lyrics Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 51)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "quill-editor", 55)(31, "div", 56)(32, "span", 57)(33, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "option", 59)(35, "option", 60)(36, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "option", 63)(39, "option", 59)(40, "option", 64)(41, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "button", 66)(44, "button", 67)(45, "button", 68)(46, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "select", 70)(49, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "button", 72)(52, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "option", 59)(55, "option", 75)(56, "option", 76)(57, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "button", 78)(60, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 80)(62, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_58_Template_button_click_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.createSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Add New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_58_Template_button_click_64_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23);
      const modal_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r21.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r4.createSongForm);
  }
}
function EditorComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_60_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const modal_r26 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r26.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Edit Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "form", 47)(10, "div", 48)(11, "div", 49)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Ttile");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 51)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 51)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 51)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Lyric link");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 51)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "quill-editor", 55)(31, "div", 56)(32, "span", 57)(33, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "option", 59)(35, "option", 60)(36, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "option", 63)(39, "option", 59)(40, "option", 64)(41, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "button", 66)(44, "button", 67)(45, "button", 68)(46, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "select", 70)(49, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "button", 72)(52, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "option", 59)(55, "option", 75)(56, "option", 76)(57, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "button", 78)(60, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 80)(62, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_60_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r29.updateSubmit(ctx_r29.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Save Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_60_Template_button_click_64_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const modal_r26 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r26.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r6.updateSongForm);
  }
}
function EditorComponent_ng_template_62_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", backupName_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](backupName_r33);
  }
}
function EditorComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_62_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const modal_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r31.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Create Back up Singer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "form", 47)(10, "div", 48)(11, "div", 49)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "select", 88)(15, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, EditorComponent_ng_template_62_option_17_Template, 2, 2, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 80)(19, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_62_Template_button_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.createBackSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Add Back up");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_62_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const modal_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r31.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r8.createBackupFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r8.backupNames);
  }
}
function EditorComponent_ng_template_64_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const backupName_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", backupName_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](backupName_r40);
  }
}
function EditorComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Back Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_64_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const modal_r38 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r38.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Edit back up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "form", 47)(10, "div", 48)(11, "div", 49)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "select", 88)(15, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Select backup name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, EditorComponent_ng_template_64_option_17_Template, 2, 2, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 80)(19, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_64_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.updateBackupSubmit(ctx_r43.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Save backup");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_64_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const modal_r38 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r38.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r10.updateBackupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r10.backupNames);
  }
}
function EditorComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Lyrics Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_66_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      const modal_r45 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r45.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 46)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Song Lyrics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 93)(10, "quill-editor", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function EditorComponent_ng_template_66_Template_quill_editor_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.lyricsData = $event);
    })("onContentChanged", function EditorComponent_ng_template_66_Template_quill_editor_onContentChanged_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r49.logChange($event, "content"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 56)(12, "span", 57)(13, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "option", 59)(15, "option", 60)(16, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "option", 63)(19, "option", 59)(20, "option", 64)(21, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "button", 66)(24, "button", 67)(25, "button", 68)(26, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "select", 70)(29, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "button", 72)(32, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "option", 59)(35, "option", 75)(36, "option", 76)(37, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "button", 78)(40, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 80)(42, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_ng_template_66_Template_button_click_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r47);
      const modal_r45 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r45.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r12.lyricsData);
  }
}
function EditorComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td")(4, "div", 37)(5, "a", 38)(6, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_tr_115_Template_i_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const data_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.Select2OpenEditBackUp(_r9, data_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_tr_115_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const data_r51 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.onDeleteBackup(data_r51._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](data_r51.name);
  }
}
function EditorComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Prev");
  }
}
function EditorComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Next");
  }
}
;
class EditorComponent {
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
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__.Image(1, {
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
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
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
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      lyricslink: [''],
      intro: [''],
      link: ['']
    });
    this.createBackupFrom = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
    });
    this.updateSongForm = this.formBuilder.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      lyrics: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      lyricslink: [''],
      link: [''],
      intro: ['']
    });
    this.updateBackupForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__.ButtonType.DELETE) {
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__.ButtonType.CUSTOM) {
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
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
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
  static #_ = this.ɵfac = function EditorComponent_Factory(t) {
    return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_12__.GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_web_backup_service__WEBPACK_IMPORTED_MODULE_6__.BackupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_7__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: EditorComponent,
    selectors: [["app-editor"]],
    inputs: {
      lyricsData: "lyricsData"
    },
    decls: 121,
    vars: 21,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], ["select2modal2", ""], ["select2Backmodal", ""], ["selectBackUp2modal", ""], ["selectLyricsmodal", ""], [3, "status", "onTriggerChange"], [1, "container", "mt-3"], ["type", "button", 1, "btn", "bg-orange-color", "text-white", "btn-icon-text", "my-2", "mr-2", 3, "click"], [1, "fe", "fe-download", "mr-2"], [1, "border-bottom"], [1, "custom-button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "fa", "fa-eye"], [1, "button-list"], [1, "btn"], [1, "ti", "ti-pencil", 3, "click"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-12", "mt-2"], ["formControlName", "title", "type", "text", "value", "", "placeholder", "Enter song title", 1, "form-control"], [1, "col-lg-12", "mt-4"], ["formControlName", "intro", "type", "text", "value", "", "placeholder", "Enter intro of the song", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", "placeholder", "Enter song link", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", "placeholder", "Enter lyrics link", 1, "form-control"], ["formControlName", "lyrics"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "text-white", "bg-orange-color", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["formControlName", "title", "type", "text", "value", "", 1, "form-control"], ["formControlName", "intro", "type", "text", "value", "", 1, "form-control"], ["formControlName", "link", "type", "text", "value", "", 1, "form-control"], ["formControlName", "lyricslink", "type", "text", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", 3, "click"], ["formControlName", "name", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], [1, "", 2, "background", "white", "padding", "30px"], [3, "ngModel", "ngModelChange", "onContentChanged"]],
    template: function EditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](59);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " New Songs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div")(15, "div", 3)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "All List of User songs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "select", 16)(25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 17)(36, "table", 18)(37, "thead")(38, "tr")(39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Lyric");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Lyric Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, EditorComponent_tr_52_Template, 20, 4, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](53, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 20)(55, "ngb-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function EditorComponent_Template_ngb_pagination_pageChange_55_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, EditorComponent_ng_template_56_Template, 1, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, EditorComponent_ng_template_57_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, EditorComponent_ng_template_58_Template, 66, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, EditorComponent_ng_template_60_Template, 66, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, EditorComponent_ng_template_62_Template, 23, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, EditorComponent_ng_template_64_Template, 23, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, EditorComponent_ng_template_66_Template, 44, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "app-alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onTriggerChange", function EditorComponent_Template_app_alert_onTriggerChange_68_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "app-alerts", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onTriggerChange", function EditorComponent_Template_app_alerts_onTriggerChange_69_listener($event) {
          return ctx.backDelete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div", 30)(71, "div", 0)(72, "div")(73, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "Details of Back up");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](75, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 3)(77, "div", 4)(78, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](63);
          return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.SelectBackUpOpen(_r7));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80, " Backup Singer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 7)(82, "div", 8)(83, "div", 9)(84, "div", 10)(85, "div")(86, "div", 3)(87, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "All List of User Backup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "div", 12)(90, "div", 13)(91, "div", 14)(92, "div", 15)(93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "select", 16)(96, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "div", 17)(107, "table", 18)(108, "thead")(109, "tr")(110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "Name of backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](115, EditorComponent_tr_115_Template, 9, 1, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](116, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "div", 20)(118, "ngb-pagination", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function EditorComponent_Template_ngb_pagination_pageChange_118_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, EditorComponent_ng_template_119_Template, 1, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, EditorComponent_ng_template_120_Template, 1, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Details of Minstration ( ", ctx.purposeName, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](53, 13, ctx.songs, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("status", ctx.changingValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("status", ctx.changingValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](116, 17, ctx.backup, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent, _common_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__.AlertComponents, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, ngx_quill__WEBPACK_IMPORTED_MODULE_19__.QuillEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.SlicePipe],
    styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n\n.show_view_block[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 190px;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  \n\n  border: none;\n  color: white;\n  padding: 8px 14px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition-duration: 0.4s;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUNEUjtBREtJO0VBQ0ksaUJBQUE7QUNIUjtBRE1JOzs7O0VBSUksa0NBQUE7QUNKUjs7QURRQTtFQUNJLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUNMSjs7QURRQTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTEo7O0FEUUE7RUFDSSxvQ0FBQTtBQ0xKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuXHJcbiAgICAub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5idG4uYnRuLXJvdW5kZWQuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nLXNlbGVjdCxcclxuICAgIC5uZy1zZWxlY3QgZGl2LFxyXG4gICAgLm5nLXNlbGVjdCBpbnB1dCxcclxuICAgIC5uZy1zZWxlY3Qgc3BhbiB7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItbG9jayAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MHB4LCAyNHB4KSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hvd192aWV3X2Jsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5iZy1vcmFuZ2UtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xyXG59IiwiOjpuZy1kZWVwIC5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLmJ0bi5idG4tcm91bmRlZC5idG4tZGFuZ2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCxcbjo6bmctZGVlcCAubmctc2VsZWN0IGRpdixcbjo6bmctZGVlcCAubmctc2VsZWN0IGlucHV0LFxuOjpuZy1kZWVwIC5uZy1zZWxlY3Qgc3BhbiB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWxvY2sgLmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgsIDI0cHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuLnNob3dfdmlld19ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE5MHB4O1xufVxuXG4uY3VzdG9tLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG4uYmctb3JhbmdlLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2EyZCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class ElementPayload {
  constructor() {
    this.status = 1;
  }
}

/***/ }),

/***/ 72749:
/*!******************************************************************!*\
  !*** ./src/app/components/pages/pages/editor/model/class-cms.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 348:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/pages/pages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageComponent: () => (/* binding */ PageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/model/pages.model */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/songs.service */ 48451);
/* harmony import */ var src_app_shared_services_web_minstrytype_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/web/minstrytype.service */ 60324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);

















const _c0 = function (a1) {
  return ["/pages", a1, "page"];
};
const _c1 = function (a0) {
  return {
    name: a0
  };
};
function PageComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 28)(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td")(13, "div", 29)(14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_tr_54_Template_a_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.onDelete(data_r7._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.userMinistries.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.ministrationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7.ministrationService);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 7, data_r7.ministrationDate, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c0, data_r7._id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c1, data_r7.name));
  }
}
function PageComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Prev");
  }
}
function PageComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "Next");
  }
}
function PageComponent_ng_template_60_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", name_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", name_r15, " ");
  }
}
function PageComponent_ng_template_60_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", date_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, date_r16, "medium"), " ");
  }
}
function PageComponent_ng_template_60_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "label", 52)(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_60_div_24_Template_input_change_2_listener($event) {
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
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", type_r17)("name", "ministrationType" + type_r17)("checked", ctx_r13.isSelected(type_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r17, " ");
  }
}
function PageComponent_ng_template_60_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "label", 52)(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_60_div_29_Template_input_change_2_listener($event) {
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
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", type_r20)("name", "ministrationService" + type_r20)("checked", ctx_r14.isSelectedService(type_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r20, " ");
  }
}
function PageComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Ministration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_60_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r10.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 38)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Ministration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 39)(10, "div", 40)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Ministration Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_60_Template_select_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.onSelectChange($event.target.value));
    })("ngModelChange", function PageComponent_ng_template_60_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.levite.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, PageComponent_ng_template_60_option_14_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 40)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Ministration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function PageComponent_ng_template_60_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.selectedDate = $event);
    })("change", function PageComponent_ng_template_60_Template_select_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.onSelectChangeInfo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, PageComponent_ng_template_60_option_19_Template, 3, 5, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 44)(21, "div", 45)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Ministration Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, PageComponent_ng_template_60_div_24_Template, 4, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 44)(26, "div", 45)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Ministration Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, PageComponent_ng_template_60_div_29_Template, 4, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 47)(31, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_60_Template_button_click_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Add Ministration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_60_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const modal_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r10.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.levite.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.purpose.names);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.selectedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.minisDate.minsdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.ministrationTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.ministrationServices);
  }
}
function PageComponent_ng_template_62_ng_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r34.title);
  }
}
function PageComponent_ng_template_62_ng_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", data_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r35.label);
  }
}
function PageComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "New Songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_62_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const modal_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r31.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 38)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "New Songs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 39)(10, "div", 44)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onDataModelChange", function PageComponent_ng_template_62_Template_app_input_onDataModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.onDataModelChange($event));
    })("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.template.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 44)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Page Menu Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.template.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 40)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Page Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.template.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 44)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Page Parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ng-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function PageComponent_ng_template_62_Template_ng_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.selectedParent = $event);
    })("change", function PageComponent_ng_template_62_Template_ng_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.onSelected($event, "parent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, PageComponent_ng_template_62_ng_option_26_Template, 2, 2, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 44)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Page Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_62_Template_ng_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.onSelected($event, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, PageComponent_ng_template_62_ng_option_31_Template, 2, 2, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 40)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "SEO Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "app-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r45.template.seo_keyword_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 40)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "app-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.template.meta_title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 40)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Layout id");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "app-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.template.layout_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 40)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "app-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_62_Template_app_input_inputModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.template.meta_description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 44)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Header Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_62_Template_ng_select_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.onSelected($event, "header_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 44)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Footer Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_62_Template_ng_select_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r50.onSelected($event, "footer_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 44)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Page Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PageComponent_ng_template_62_Template_ng_select_change_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.onSelected($event, "page_order"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "ng-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "ng-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "ng-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 47)(79, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_62_Template_button_click_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Add New Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_ng_template_62_Template_button_click_81_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const modal_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r31.close("Close click"));
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
class PageComponent {
  constructor(modalService, utilService, userService, webService, toastService, songService, minstryService) {
    this.modalService = modalService;
    this.utilService = utilService;
    this.userService = userService;
    this.webService = webService;
    this.toastService = toastService;
    this.songService = songService;
    this.minstryService = minstryService;
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.template = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
    this.levite = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Levite();
    this.layout = new Array();
    this.songs = new Array();
    this.pages = new Array();
    this.ministrationTypes = ["Worship", "Praise", "Hymn"];
    this.ministrationServices = ["First Service", "Second Service"];
    // selectedMinistrationType: { [key: string]: boolean } = {};
    this.selectedMinistrationType = [];
    this.selectedMinistrationService = [];
    // purpose = {
    //   names: ['Sunday Services', 'Special Services',], // Example options
    //   name: '' // Initially empty; will hold the selected option
    // };
    this.purpose = {
      names: [],
      name: '' // Initially empty; will hold the selected option
    };

    this.minisDate = {
      minsdate: [],
      ministrationDate: null // Initially empty; will hold the selected option
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
    // this.ministrationTypes.forEach(type => {
    //   this.selectedMinistrationType[type] = false;
    // })
    // this.ministrationServices.forEach(type => {
    //   this.selectedMinistrationService[type] = false;
    // })
    // this.levite.ministrationType = ["Worship", "Praise", "Hymn"];
    // this.levite.ministrationService = ["First Service", "Second Service"]
  }

  ngOnInit() {
    //  this.load()
    // this.loadPages()
    this.loadSongs(), this.fetchMinistryTypes();
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
  fetchMinistryTypes() {
    this.minstryService.getSingleMinistryTypes().subscribe(data => {
      // this.ministryTypes = data.ministryTypes; 
      const nameTypes = data.ministryTypes.map(item => item.nameType);
      this.purpose = {
        names: nameTypes,
        name: '' // Initially empty; will hold the selected option
      };

      const dateinfo = data.ministryTypes.map(item => item.minDateType);
      this.minisDate = {
        minsdate: dateinfo,
        ministrationDate: null // Initially empty; will hold the selected option
      };
    }, error => {
      console.error(error);
    });
  }
  onSelectChangeInfo(date) {
    this.selectedDate = date; // Update selectedDate when the dropdown changes
    // You might want to assign this.selectedDate to the appropriate property in your data model
    this.levite.ministrationDate = new Date(this.selectedDate);
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
  static #_ = this.ɵfac = function PageComponent_Factory(t) {
    return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_songs_service__WEBPACK_IMPORTED_MODULE_5__.SongService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_web_minstrytype_service__WEBPACK_IMPORTED_MODULE_6__.MinistryTypeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: PageComponent,
    selectors: [["app-pages"]],
    decls: 65,
    vars: 10,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "d-flex"], [1, "justify-content-center"], [1, "btn", "ripple", "text-white", "bg-orange-color", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [1, "button-list"], [1, "btn", 3, "routerLink", "queryParams"], [1, "ti", "ti-pencil"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], ["id", "title", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "col-lg-6", "mt-4"], [1, "form-group"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "bg-orange-color", "text-white", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [3, "value"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 3, "id", "name", "checked", "change"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [3, "type", "readonly", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "form-control", "p-0", 3, "ngModel", "ngModelChange", "change"], [1, "form-control", "p-0", 3, "change"], ["value", "1"], ["value", "0"], ["value", "2"], ["value", "3"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"]],
    template: function PageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Ministration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PageComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](61);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.Select2Open(_r3));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " New Minstration ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Ministration Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Ministration Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Ministration Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "ministration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, PageComponent_tr_54_Template, 18, 14, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 22)(57, "ngb-pagination", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function PageComponent_Template_ngb_pagination_pageChange_57_listener($event) {
          return ctx.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, PageComponent_ng_template_58_Template, 1, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, PageComponent_ng_template_59_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, PageComponent_ng_template_60_Template, 35, 6, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, PageComponent_ng_template_62_Template, 83, 53, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "app-alert", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onTriggerChange", function PageComponent_Template_app_alert_onTriggerChange_64_listener($event) {
          return ctx.delete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](55, 6, ctx.songs, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx.changingValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationPrevious, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
    styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n\n.bg-orange-color[_ngcontent-%COMP%] {\n  background-color: #e57a2d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL0xldml0ZUZyb250ZW5kJTIwMi9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURPSTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FDSlI7QURPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRFFJO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNOUjtBRFNJO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQ1BSO0FEVUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNSUjtBRFdJO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0FDVFI7QURZSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUNWUjtBRGFJO0VBQ0ksc0JBQUE7QUNYUjtBRGNJO0VBQ0ksYUFBQTtBQ1pSO0FEZUk7O0VBRUksWUFBQTtBQ2JSOztBRGlCQTtFQUNJLG9DQUFBO0FDZEoiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uLWRvdHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAge1xyXG5cclxuICAgIGRwLWRhdGUtcGlja2VyLFxyXG4gICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgY29sb3I6ICNhOGFmYzc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY3VycmVudC1kYXkge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkzRkUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzYjQ4NjM7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13cmFwcGVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdlZWtkYXkge1xyXG4gICAgICAgIGNvbG9yOiAjM2I0ODYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XHJcbiAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLW5hdi1idG5zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItbGVmdCxcclxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmctb3JhbmdlLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTdhMmQgIWltcG9ydGFudDtcclxufSIsIi5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLFxuOjpuZy1kZWVwIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNhOGFmYzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNiNDg2Mztcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46Om5nLWRlZXAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcbiAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxuOjpuZy1kZWVwIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJnLW9yYW5nZS1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTdhMmQgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 57666:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pricing/pricing.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingComponent: () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);


function PricingComponent_ng_template_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70)(1, "div", 13)(2, "div", 71)(3, "div", 72)(4, "div", 73)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75)(8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76)(11, "ul", 77)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 80)(38, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 82)(41, "div", 72)(42, "div", 73)(43, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 75)(46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A399");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 76)(49, "ul", 77)(50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 80)(76, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 82)(79, "div", 72)(80, "div", 73)(81, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 75)(84, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A3199");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 76)(87, "ul", 77)(88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 80)(114, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 82)(117, "div", 72)(118, "div", 73)(119, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Enterprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 75)(122, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00A3299");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76)(125, "ul", 77)(126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 80)(152, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
function PricingComponent_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89)(1, "div", 13)(2, "div", 71)(3, "div", 72)(4, "div", 73)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75)(8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76)(11, "ul", 77)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 80)(38, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 82)(41, "div", 72)(42, "div", 73)(43, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 75)(46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A315");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 76)(49, "ul", 77)(50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 80)(76, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 82)(79, "div", 72)(80, "div", 73)(81, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 75)(84, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A325");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 76)(87, "ul", 77)(88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 80)(114, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 82)(117, "div", 72)(118, "div", 73)(119, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Enterprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 75)(122, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00A335");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76)(125, "ul", 77)(126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 80)(152, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
class PricingComponent {
  constructor() {
    this.active = 1;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PricingComponent_Factory(t) {
    return new (t || PricingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PricingComponent,
    selectors: [["app-pricing"]],
    decls: 371,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-3", "col-md-6", "col-sm-12", "col-lg-3"], [1, "card", "custom-card", "pricingTable2"], [1, "pricingTable2-header"], [1, "pricing-plans", "bg-primary"], [1, "price-value1"], [1, "fa", "fa-usd"], [1, "month"], [1, "pricingContent2"], [1, "pricingTable2-sign-up"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-primary"], [1, "pricing-plans", "bg-danger"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-danger"], [1, "pricing-plans", "bg-success"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-success"], [1, "card", "custom-card", "pricingTable2", "info"], [1, "pricing-plans"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-info"], [1, "col-lg-3", "col-sm-6"], [1, "card", "card-pricing", "custom-card"], [1, "bg-transparent", "border-0"], [1, "pricing-title"], ["data-pricing-value", "30", 1, "h1", "font-weight-normal", "text-center", "mb-0"], [1, "price"], [1, "h6", "text-muted", "ml-2"], [1, "card-body", "pt-0", "text-center"], [1, "list-unstyled", "mb-4"], ["href", "javascript:;", 1, "btn", "ripple", "btn-light", "mb-2"], [1, "card", "card-pricing2", "custom-card"], [1, "pricing-title", "text-primary"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "mb-2"], [1, "card", "card-pricing3", "custom-card"], ["data-pricing-value", "30", 1, "h1", "font-weight-normal", "mb-0"], [1, "card", "card-pricing4", "custom-card"], [1, "col-sm-12", "col-md-4"], [1, "card", "custom-card", "card-pricing"], [1, "price-img", "text-primary", "price-1", "text-center"], [1, "fas", "fa-car", "bg-primary-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-primary", "mb-3"], [1, "price-img", "text-secondary", "price-1", "text-center"], [1, "fas", "fa-plane", "bg-pink-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-secondary", "mb-3"], [1, "price-img", "text-info", "price-1", "text-center"], [1, "fas", "fa-rocket", "bg-info-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-info", "mb-3"], [1, "col-xl-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted"], [1, "pricing-tabs"], [1, "text-center"], [1, "pri-tabs-heading"], ["ngbNav", "", 1, "nav-price"], ["href", "javascript:;", "ngbNavLink", ""], ["ngbNavContent", ""], [1, "tab-content"], ["id", "year", 1, "tab-pane", "active", "show"], [1, "col-sm-6", "col-lg-3"], [1, "card", "overflow-hidden"], [1, "text-center", "card-pricing", "pricing1"], [1, "p-2", "text-white", "bg-primary", "fs-20"], [1, "p-3", "font-weight-normal", "mb-0"], [1, "card-body", "text-center", "pt-0"], [1, "list-unstyled", "mb-0"], [1, "fe", "fe-check", "mr-2", "text-success"], [1, "fe", "fe-x", "mr-2", "text-danger"], [1, "card-footer", "text-center"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "btn-block"], [1, "col-sm-6", "col-lg-3", "mg-t-10", "mg-lg-t-0"], [1, "p-2", "text-white", "bg-secondary", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "btn-block"], [1, "p-2", "text-white", "bg-info", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-info", "btn-block"], [1, "p-2", "text-white", "bg-success", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-success", "btn-block"], ["id", "month", 1, "tab-pane"]],
    template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pricing ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21)(37, "ul")(38, "li")(39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Ad posting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Featured Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Custome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22)(59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14)(62, "div", 15)(63, "div", 16)(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24)(69, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21)(76, "ul")(77, "li")(78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Ad posting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Featured Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Custome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22)(98, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 14)(101, "div", 15)(102, "div", 16)(103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Silver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26)(108, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 21)(115, "ul")(116, "li")(117, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Ad posting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li")(121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Featured Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li")(125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li")(129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Custome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li")(133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22)(137, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 14)(140, "div", 28)(141, "div", 16)(142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 29)(147, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "/month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 21)(154, "ul")(155, "li")(156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Ad posting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li")(160, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Featured Listings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li")(164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Secure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li")(168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Custome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li")(172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 22)(176, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 13)(179, "div", 31)(180, "div", 32)(181, "div", 33)(182, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h1", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "/MO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 38)(191, "ul", 39)(192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "10 Free Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "15 One-Click Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "10 Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Money BackGuarntee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 31)(205, "div", 41)(206, "div", 33)(207, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h1", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "/MO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 38)(216, "ul", 39)(217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "12 Free Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "20 One-Click Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "15 Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Money BackGuarntee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 31)(230, "div", 44)(231, "div", 33)(232, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "69");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "/MO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 38)(241, "ul", 39)(242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "15 Free Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "25 One-Click Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "20 Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Money BackGuarntee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 31)(255, "div", 46)(256, "div", 33)(257, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "/MO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 38)(266, "ul", 39)(267, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "20 Free Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "30 One-Click Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "15 Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Money BackGuarntee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 13)(280, "div", 47)(281, "div", 48)(282, "div", 33)(283, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 38)(292, "ul", 39)(293, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "10GB Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "3 Domain Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "20 Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "No Live Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Purchase Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 47)(304, "div", 48)(305, "div", 33)(306, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 38)(315, "ul", 39)(316, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "10GB Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "3 Domain Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "20 Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "No Live Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Purchase Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 47)(327, "div", 48)(328, "div", 33)(329, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 38)(338, "ul", 39)(339, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Unlimited Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "50 Domain Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Unlimited Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Live Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Purchase Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 13)(350, "div", 58)(351, "div", 59)(352, "div", 60)(353, "div")(354, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Tabs Pricing Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Below is the Using tabs year & month pricing Tables example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 63)(359, "div", 64)(360, "div", 65)(361, "ul", 66)(362, "li")(363, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](365, PricingComponent_ng_template_365_Template, 154, 0, "ng-template", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li")(367, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](369, PricingComponent_ng_template_369_Template, 154, 0, "ng-template", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavLinkBase],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74212:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70997);








function ProfileComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BIOdata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hi I'm Petey Cruiser,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 43)(8, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 45)(11, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Lead designer / Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "websitename.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "2010-2015");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 47)(21, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Senior Graphic Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "coderthemes.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p")(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2007-2009");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 40)(32, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 52)(35, "div", 53)(36, "div", 54)(37, "div", 55)(38, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 58)(41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " +245 354 654 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 53)(46, "div", 54)(47, "div", 55)(48, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 58)(51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Slack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " @spruko.w ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 47)(56, "div", 54)(57, "div", 55)(58, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 58)(61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Current Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " San Francisco, CA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 40)(67, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 63)(70, "div", 64)(71, "div", 65)(72, "div", 55)(73, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 58)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "github.com/spruko");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 64)(81, "div", 65)(82, "div", 55)(83, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 58)(86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "twitter.com/spruko.me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 64)(91, "div", 65)(92, "div", 55)(93, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 58)(96, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "linkedin.com/in/spruko");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 64)(101, "div", 65)(102, "div", 55)(103, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 58)(106, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "My Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "spruko.com/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function ProfileComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 74)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 75)(8, "div", 35)(9, "div", 76)(10, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 75)(15, "div", 35)(16, "div", 76)(17, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 75)(22, "div", 35)(23, "div", 76)(24, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 75)(29, "div", 35)(30, "div", 76)(31, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 75)(36, "div", 35)(37, "div", 76)(38, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 75)(45, "div", 35)(46, "div", 76)(47, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "(required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 75)(54, "div", 35)(55, "div", 76)(56, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 75)(61, "div", 35)(62, "div", 76)(63, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 75)(68, "div", 35)(69, "div", 76)(70, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 78)(73, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "San Francisco, CA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Social Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 75)(78, "div", 35)(79, "div", 76)(80, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 75)(85, "div", 35)(86, "div", 76)(87, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 75)(92, "div", 35)(93, "div", 76)(94, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Google+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 75)(99, "div", 35)(100, "div", 76)(101, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Linked in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 75)(106, "div", 35)(107, "div", 76)(108, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "About Yourself");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 75)(115, "div", 35)(116, "div", 76)(117, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Biographical Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 78)(120, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Email Preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 94)(125, "div", 35)(126, "div", 76)(127, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Verified User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 78)(130, "div", 95)(131, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Accept to receive post or page notification emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Accept to receive email sent to multiple recipients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 99)(140, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
}
function ProfileComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "div", 104)(3, "div", 105)(4, "div", 35)(5, "div", 106)(6, "div", 107)(7, "div", 108)(8, "div", 55)(9, "div", 109)(10, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 58)(13, "h6", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 114)(18, "div", 115)(19, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 118)(22, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16)(29, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35)(32, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 122)(34, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 124)(36, "div", 109)(37, "div", 125)(38, "div", 126)(39, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 58)(52, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 114)(55, "div", 134)(56, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 107)(63, "div", 108)(64, "div", 55)(65, "div", 109)(66, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 58)(69, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 114)(74, "div", 115)(75, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 118)(78, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 141)(85, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35)(88, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 142)(90, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 124)(92, "div", 109)(93, "div", 125)(94, "div", 126)(95, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 58)(108, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 114)(111, "div", 134)(112, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 107)(119, "div", 108)(120, "div", 55)(121, "div", 109)(122, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 58)(125, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 114)(130, "div", 115)(131, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 118)(134, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 141)(141, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 124)(144, "div", 109)(145, "div", 125)(146, "div", 126)(147, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 58)(160, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 114)(163, "div", 134)(164, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 149)(171, "div", 108)(172, "div", 55)(173, "div", 109)(174, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 58)(177, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 114)(182, "div", 115)(183, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 118)(186, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 141)(193, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 35)(196, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 150)(198, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 124)(200, "div", 109)(201, "div", 125)(202, "div", 126)(203, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 58)(216, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 114)(219, "div", 134)(220, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
  }
}
function ProfileComponent_ng_template_71_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 158)(1, "a", 159)(2, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_ng_template_71_li_4_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const img_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.openImageModalRowDescription(img_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r7.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return {
    downloadable: true
  };
};
function ProfileComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 153)(1, "div", 72)(2, "div", 154)(3, "ul", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_ng_template_71_li_4_Template, 3, 1, "li", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ks-modal-gallery", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.GalleryImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 1)("modalImages", ctx_r3.GalleryImage)("plainGalleryConfig", ctx_r3.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("buttonsConfig", ctx_r3.buttonsConfigCustom);
  }
}
function ProfileComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 35)(3, "div", 163)(4, "div", 164)(5, "div", 165)(6, "div", 166)(7, "div", 167)(8, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 170)(11, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Socrates Itumay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 163)(31, "div", 164)(32, "div", 165)(33, "div", 166)(34, "div", 179)(35, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 170)(38, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Reynante Labares");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 163)(58, "div", 164)(59, "div", 165)(60, "div", 166)(61, "div", 179)(62, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 170)(65, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Owen Bongcaras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "App Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 163)(85, "div", 164)(86, "div", 165)(87, "div", 166)(88, "div", 179)(89, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 170)(92, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Stephen Metcalfe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 163)(112, "div", 164)(113, "div", 165)(114, "div", 166)(115, "div", 179)(116, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 170)(119, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Socrates Itumay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 163)(139, "div", 164)(140, "div", 165)(141, "div", 166)(142, "div", 179)(143, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 170)(146, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Reynante Labares");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 163)(166, "div", 164)(167, "div", 165)(168, "div", 166)(169, "div", 179)(170, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 170)(173, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Owen Bongcaras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "App Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 163)(193, "div", 164)(194, "div", 165)(195, "div", 166)(196, "div", 179)(197, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 170)(200, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Stephen Metcalfe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
function ProfileComponent_ng_template_79_ng_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timezone_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", timezone_r11.name, " ");
  }
}
function ProfileComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 183)(1, "div", 72)(2, "form", 74)(3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 75)(6, "div", 35)(7, "div", 76)(8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 75)(13, "div", 35)(14, "div", 76)(15, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 75)(20, "div", 186)(21, "div", 76)(22, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 78)(25, "ng-select", 187)(26, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "US English");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Arabic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Korean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 75)(33, "div", 186)(34, "div", 76)(35, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Timezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 78)(38, "ng-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProfileComponent_ng_template_79_ng_option_39_Template, 2, 1, "ng-option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 75)(41, "div", 35)(42, "div", 190)(43, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 191)(46, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Security Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 75)(61, "div", 35)(62, "div", 76)(63, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Login Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 78)(66, "a", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Setup Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 75)(69, "div", 35)(70, "div", 76)(71, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Password Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 78)(74, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Require Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 75)(79, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 78)(82, "a", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 99)(87, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.timeZone);
  }
}
class ProfileComponent {
  constructor(galleryService) {
    this.galleryService = galleryService;
    this.timeZone = src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__.TimeZone;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(2, {
      img: '../../assets/img/media/2.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(3, {
      img: '../../assets/img/media/3.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(4, {
      img: '../../assets/img/media/4.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(5, {
      img: '../../assets/img/media/5.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(6, {
      img: '../../assets/img/media/6.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(7, {
      img: '../../assets/img/media/7.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(8, {
      img: '../../assets/img/media/8.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(9, {
      img: '../../assets/img/media/9.jpg',
      title: ''
    })];
    this.buttonsConfigDefault = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
    };
    this.buttonsConfigSimple = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
    };
    this.buttonsConfigAdvanced = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
    };
    this.buttonsConfigFull = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
    };
    this.buttonsConfigCustom = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
      buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE]
    };
    this.customPlainGalleryRowDescConfig = {
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
    };
  }
  ngOnInit() {}
  openImageModalRowDescription(image) {
    const index = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true)
    });
  }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.DELETE) {
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
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
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
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 84,
    vars: 0,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "square"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "panel", "profile-cover"], [1, "profile-cover__img"], ["src", "../../assets/img/users/1.jpg", "alt", "img"], [1, "h3"], [1, "btn-profile"], [1, "btn", "btn-rounded", "btn-danger"], [1, "fa", "fa-plus"], [1, "ml-2"], [1, "btn", "btn-rounded", "btn-success"], [1, "fa", "fa-comment"], [1, "profile-cover__action", "bg-img"], [1, "profile-cover__info"], [1, "nav"], [1, "profile-tab", "tab-menu-heading"], ["ngbNav", "", 1, "main-nav-line", "p-3", "tabs-menu", "profile-nav-line", "bg-gray-100"], ["ngbNavItem", ""], ["href", "javascript:;", "ngbNavLink", ""], ["ngbNavContent", ""], [1, "row", "row-sm"], [1, "card", "custom-card", "main-content-body-profile"], [1, "tab-content"], ["id", "about", 1, "main-content-body", "tab-pane", "p-4", "border-top-0", "active"], [1, "card-body", "p-0", "border", "p-0", "rounded-10"], [1, "p-4"], [1, "tx-15", "text-uppercase", "mb-3"], [1, "m-b-5"], [1, "m-t-30"], [1, "tx-15", "text-uppercase", "mt-3"], [1, "p-t-10"], [1, "text-primary", "m-b-5", "tx-14"], [1, ""], [1, "text-muted", "tx-13", "m-b-0"], [1, "text-muted", "tx-13", "mb-0"], [1, "border-top"], [1, "main-content-label", "tx-13", "mg-b-20"], [1, "d-sm-flex"], [1, "mg-sm-r-20", "mg-b-10"], [1, "main-profile-contact-list"], [1, "media"], [1, "media-icon", "bg-primary-transparent", "text-primary"], [1, "icon", "ion-md-phone-portrait"], [1, "media-body"], [1, "media-icon", "bg-success-transparent", "text-success"], [1, "icon", "ion-logo-slack"], [1, "media-icon", "bg-info-transparent", "text-info"], [1, "icon", "ion-md-locate"], [1, "d-md-flex"], [1, "mg-md-r-20", "mg-b-10"], [1, "main-profile-social-list"], [1, "icon", "ion-logo-github"], [1, "icon", "ion-logo-twitter"], [1, "icon", "ion-logo-linkedin"], [1, "media-icon", "bg-danger-transparent", "text-danger"], [1, "icon", "ion-md-link"], ["id", "edit", 1, "main-content-body", "tab-pane", "p-4", "border-top-0"], [1, "card-body", "border"], [1, "mb-4", "main-content-label"], [1, "form-horizontal"], [1, "form-group"], [1, "col-md-3"], [1, "form-label"], [1, "col-md-9"], ["type", "text", "placeholder", "User Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "First Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "Nick Name", "value", "Spruha", 1, "form-control"], ["type", "text", "placeholder", "Designation", "value", "Web Designer", 1, "form-control"], ["type", "text", "placeholder", "Email", "value", "info@Spruha.in", 1, "form-control"], ["type", "text", "placeholder", "Website", "value", "@spruko.w", 1, "form-control"], ["type", "text", "placeholder", "phone number", "value", "+245 354 654", 1, "form-control"], ["name", "example-textarea-input", "rows", "2", "placeholder", "Address", 1, "form-control"], ["type", "text", "placeholder", "twitter", "value", "twitter.com/spruko.me", 1, "form-control"], ["type", "text", "placeholder", "facebook", "value", "https://www.facebook.com/Spruha", 1, "form-control"], ["type", "text", "placeholder", "google", "value", "spruko.com", 1, "form-control"], ["type", "text", "placeholder", "linkedin", "value", "linkedin.com/in/spruko", 1, "form-control"], ["type", "text", "placeholder", "github", "value", "github.com/sprukos", 1, "form-control"], ["name", "example-textarea-input", "rows", "4", "placeholder", "", 1, "form-control"], [1, "form-group", "mb-0"], [1, "custom-controls-stacked"], [1, "ckbox", "mg-b-10-f"], ["checked", "", "type", "checkbox"], [1, "ckbox"], [1, "mt-4"], ["type", "button", 1, "btn", "btn-primary", "mr-2"], ["type", "button", 1, "btn", "btn-danger"], ["id", "timeline", 1, "main-content-body", "tab-pane", "border-top-0"], [1, "border", "p-4"], [1, "main-content-body", "main-content-body-profile"], [1, "main-profile-body", "p-0"], [1, "col-12"], [1, "card", "mg-b-20", "border"], [1, "card-header", "p-4"], [1, "media-user", "mr-2"], [1, "main-img-user", "avatar-md"], ["alt", "", "src", "../../assets/img/users/6.jpg", 1, "rounded-circle"], [1, "mb-0", "mg-t-2", "ml-2"], [1, "text-primary", "ml-2"], [1, "ml-auto"], ["ngbDropdown", "", 1, "show"], ["href", "JavaScript:void(0);", "ngbDropdownToggle", "", 1, "new", "option-dots2"], [1, "fas", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "shadow"], ["href", "javascript:;", 1, "dropdown-item"], [1, "mg-t-0"], [1, "col"], ["alt", "img", "src", "../../assets/img/media/1.jpg", 1, "wd-200", "mr-4"], ["alt", "img", "src", "../../assets/img/media/2.jpg", 1, "wd-200"], [1, "media", "mg-t-15", "profile-footer"], [1, "demo-avatar-group"], [1, "demo-avatar-group", "main-avatar-list-stacked"], [1, "main-img-user"], ["alt", "", "src", "../../assets/img/users/12.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/3.jpg", 1, "rounded-circle"], [1, "main-img-user", "online"], ["alt", "", "src", "../../assets/img/users/5.jpg", 1, "rounded-circle"], [1, "main-avatar"], [1, "mb-0", "mg-t-10"], [1, "dropdown", "show"], ["href", "JavaScript:void(0);", 1, "new"], [1, "far", "fa-heart", "mr-3"], [1, "far", "fa-comment", "mr-3"], [1, "far", "fa-share-square"], [1, "mb-0", "ml-2", "mg-t-3"], [1, "text-muted", "ml-2"], [1, "card-body", "h-100"], ["alt", "img", "src", "../../assets/img/media/4.jpg", 1, "wd-200", "mr-4"], ["alt", "img", "src", "../../assets/img/media/5.jpg", 1, "wd-200"], ["alt", "", "src", "../../assets/img/users/7.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/2.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/9.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/10.jpg", 1, "rounded-circle"], [1, "card", "border"], ["alt", "img", "src", "../../assets/img/media/4.jpg", 1, "wd-200", "mr-3"], ["alt", "img", "src", "../../assets/img/media/7.jpg", 1, "wd-200"], ["alt", "", "src", "../../assets/img/users/11.jpg", 1, "rounded-circle"], ["id", "gallery", 1, "main-content-body", "p-4", "border", "tab-pane", "border-top-0"], [1, "demo-gallery"], ["id", "lightgallery", 1, "list-unstyled", "row", "row-sm"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], [1, "col-sm-6", "col-lg-4"], ["href", "javascript:void(0)", 1, "wd-100p"], ["alt", "Thumb", 1, "img-responsive", "mb-4", "wd-100p", 3, "src", "click"], ["id", "friends", 1, "main-content-body", "tab-pane", "border-top-0"], [1, "card-body", "border", "pd-b-10"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-3"], [1, "card", "custom-card", "border"], [1, "card-body", "text-center"], [1, "user-lock", "text-center"], ["ngbDropdown", "", 1, "dropdown", "text-right"], ["href", "javascript:;", "ngbDropdownToggle", "", 1, "option-dots"], [1, "fe", "fe-more-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "shadow"], [1, "fe", "fe-message-square", "mr-2"], [1, "fe", "fe-edit-2", "mr-2"], [1, "fe", "fe-eye", "mr-2"], [1, "fe", "fe-trash-2", "mr-2"], ["alt", "avatar", "src", "../../assets/img/users/2.jpg", 1, "rounded-circle"], [1, "mb-1", "mt-3", "main-content-label"], [1, "mb-2", "mt-1", "tx-inverse"], [1, "text-muted", "text-center", "mt-1"], ["ngbDropdown", "", 1, "text-right"], ["alt", "avatar", "src", "../../assets/img/users/3.jpg", 1, "rounded-circle"], ["alt", "avatar", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["alt", "avatar", "src", "../../assets/img/users/8.jpg", 1, "rounded-circle"], ["id", "settings", 1, "main-content-body", "tab-pane", "p-4", "border-top-0"], ["type", "text", "placeholder", "User Name", "value", "Sonia Taylor", 1, "form-control"], ["type", "text", "placeholder", "Email", "value", "info@SoniaTaylor.in", 1, "form-control"], [1, "row"], ["placeholder", "Select Language", 1, "form-control", "p-0"], ["placeholder", "Select TimeZone", 1, "form-control", "p-0"], [4, "ngFor", "ngForOf"], [1, "col-md-3", "col"], [1, "col-md-9", "col"], ["type", "checkbox"], ["href", "javascript:;", 1, ""], ["href", "javascript:;", 1, "mg-r-20"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sonia Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21)(31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 28)(41, "ul", 29)(42, "li")(43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "136");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30)(55, "nav", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](56, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ProfileComponent_ng_template_59_Template, 110, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ProfileComponent_ng_template_63_Template, 144, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ProfileComponent_ng_template_67_Template, 226, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](68, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ProfileComponent_ng_template_71_Template, 6, 7, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](72, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, ProfileComponent_ng_template_75_Template, 219, 0, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](76, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ProfileComponent_ng_template_79_Template, 91, 1, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 35)(81, "div", 14)(82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLinkBase, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9MZXZpdGVGcm9udGVuZCUyMDIvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0FDRFI7QURLSztFQUNJLGlCQUFBO0FDSFQ7QURNSztFQUNJLGtDQUFBO0FDSlQ7O0FEUUE7RUFDSSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FDTEo7O0FEUUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FDTEoiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXB7XHJcblxyXG4gICAgLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgIH1cclxuXHJcblxyXG4gICAgIC5idG4uYnRuLXJvdW5kZWQuYnRuLWRhbmdlcntcclxuICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgfVxyXG5cclxuICAgICAubmctc2VsZWN0LCAubmctc2VsZWN0IGRpdiwgLm5nLXNlbGVjdCBpbnB1dCwgLm5nLXNlbGVjdCBzcGFue1xyXG4gICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxufVxyXG5cclxuLnVzZXItbG9jayAuZHJvcGRvd24tbWVudXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMjFweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lZGlhIC5zaGFkb3cuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49Ym90dG9tXXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTBweCwgMjRweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuIH1cclxuIiwiOjpuZy1kZWVwIC5vcHRpb24tZG90czpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLmJ0bi5idG4tcm91bmRlZC5idG4tZGFuZ2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46Om5nLWRlZXAgLm5nLXNlbGVjdCwgOjpuZy1kZWVwIC5uZy1zZWxlY3QgZGl2LCA6Om5nLWRlZXAgLm5nLXNlbGVjdCBpbnB1dCwgOjpuZy1kZWVwIC5uZy1zZWxlY3Qgc3BhbiB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWxvY2sgLmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgsIDI0cHgpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 40028:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/successmessage/successmessage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessmessageComponent: () => (/* binding */ SuccessmessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class SuccessmessageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SuccessmessageComponent_Factory(t) {
    return new (t || SuccessmessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SuccessmessageComponent,
    selectors: [["app-successmessage"]],
    decls: 14,
    vars: 0,
    consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512 512", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m491.38 157.66c-13.15-30.297-31.856-57.697-55.598-81.439s-51.142-42.448-81.439-55.598c-31.529-13.686-64.615-20.625-98.338-20.625s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598s-42.448 51.142-55.598 81.439c-13.686 31.529-20.625 64.615-20.625 98.338s6.939 66.809 20.625 98.338c13.149 30.297 31.855 57.697 55.598 81.439 23.742 23.742 51.142 42.448 81.439 55.598 31.529 13.686 64.615 20.625 98.338 20.625s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439c13.686-31.529 20.625-64.615 20.625-98.338s-6.939-66.809-20.625-98.338zm-235.38 334.34c-127.92 0-236-108.08-236-236s108.08-236 236-236 236 108.08 236 236-108.08 236-236 236z"], ["d", "m451.98 173.8c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.686-42.473-35.179-67.729-46.049-26.249-11.298-53.904-17.026-82.197-17.026-38.462 0-78.555 13.134-115.94 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.264 5.85 13.863 2.794 34.1-22.66 70.365-34.638 104.88-34.638 104.62 0 193 88.383 193 193s-88.383 193-193 193-193-88.383-193-193c0-34.504 11.975-70.771 34.629-104.88 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.807-1.803-13.863 2.797-24.84 37.397-37.97 77.489-37.97 115.94 0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.687 42.473 35.179 67.73 46.05 26.248 11.297 53.903 17.025 82.196 17.025s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729 11.298-26.249 17.026-53.904 17.026-82.197s-5.728-55.948-17.025-82.196z"], ["d", "m115 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"], ["d", "m374.28 177.72c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.281 11.719l-91.719 91.719-31.719-31.719c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.278 11.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281l60 60c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.281-11.719l120-120c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281zm-14.142 42.42-120 120c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.139-5.861l-60.003-60.003c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l45.861 45.861 105.86-105.86c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.142 5.864c3.777 3.775 5.858 8.795 5.858 14.136s-2.081 10.361-5.861 14.139z"], [1, "mt-4", "mb-3"], ["routerLink", "/dashboard", 1, "btn", "btn-success"]],
    template: function SuccessmessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 63181:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/warningmessage/warningmessage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningmessageComponent: () => (/* binding */ WarningmessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);


class WarningmessageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WarningmessageComponent_Factory(t) {
    return new (t || WarningmessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarningmessageComponent,
    selectors: [["app-warningmessage"]],
    decls: 18,
    vars: 0,
    consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512.044 512.044", "viewBox", "0 0 512.044 512.044", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m502.026 376.697-52.051-90.685c-2.75-4.79-8.862-6.445-13.651-3.695-4.79 2.749-6.444 8.861-3.695 13.651l52.058 90.696c9.784 16.992 9.766 37.271-.048 54.246s-27.379 27.109-46.987 27.109h-363.261c-19.608 0-37.173-10.134-46.987-27.109-9.813-16.975-9.831-37.253-.048-54.246l181.63-315.448c9.804-17.027 27.387-27.192 47.035-27.192s37.231 10.166 47.05 27.219l84.792 146.239c2.77 4.778 8.889 6.405 13.667 3.635s6.405-8.889 3.635-13.667l-84.777-146.213c-13.417-23.301-37.479-37.213-64.367-37.213s-50.95 13.912-64.367 37.213l-181.629 315.448c-13.389 23.253-13.365 51.005.066 74.235 13.43 23.23 37.468 37.099 64.301 37.099h363.261c26.833 0 50.871-13.869 64.301-37.099 13.429-23.229 13.454-50.981.072-74.223z"], ["d", "m409.761 255.712c1.601 3.843 5.556 6.383 9.729 6.165 4.119-.215 7.757-3.004 9.021-6.93 1.242-3.859-.02-8.222-3.166-10.793-3.285-2.684-8.015-2.983-11.62-.758-4.106 2.534-5.819 7.862-3.964 12.316z"], ["d", "m256.022 81.531c-12.106 0-22.939 6.264-28.98 16.755l-167.217 290.414c-6.028 10.47-6.018 22.965.029 33.424s16.87 16.704 28.951 16.704h334.433c12.082 0 22.904-6.244 28.951-16.704 6.047-10.459 6.058-22.954.029-33.424l-167.216-290.414c-6.041-10.491-16.874-16.755-28.98-16.755zm178.853 330.583c-2.467 4.267-6.709 6.714-11.637 6.714h-334.433c-4.928 0-9.17-2.447-11.637-6.714-2.466-4.267-2.471-9.163-.012-13.434l167.216-290.414c2.428-4.217 6.783-6.734 11.648-6.734s9.22 2.518 11.648 6.734l167.216 290.414c2.461 4.27 2.457 9.167-.009 13.434z"], ["d", "m222.219 229.104-32.592 62.531c-4.19 8.039-3.885 17.467.816 25.219s12.92 12.38 21.986 12.38h18.548l-1.229 59.605c-.09 4.357 2.653 8.271 6.779 9.674 1.058.36 2.143.533 3.217.533 3.116 0 6.131-1.46 8.054-4.07l56.463-76.669c5.784-7.854 6.644-18.142 2.244-26.848-4.4-8.705-13.194-14.114-22.948-14.114h-4.557l28.788-46.833c1.897-3.086 1.977-6.955.21-10.117-1.768-3.161-5.107-5.12-8.729-5.12h-54.248c-9.618 0-18.356 5.299-22.802 13.829zm30.379 53.004c-1.897 3.086-1.977 6.956-.21 10.117 1.768 3.161 5.106 5.12 8.729 5.12h22.441c3.171 0 4.622 2.193 5.099 3.136s1.382 3.412-.499 5.965l-37.763 51.278.789-38.284c.055-2.688-.974-5.284-2.854-7.204-1.881-1.92-4.456-3.002-7.144-3.002h-28.757c-2.904 0-4.384-1.924-4.886-2.751s-1.523-3.029-.181-5.603l32.592-62.531c.988-1.895 2.929-3.073 5.067-3.073h36.363z"], [1, "mt-4", "mb-3"], [1, "tx-18", "text-white-50"], ["routerLink", "/dashboard", 1, "btn", "btn-warning"]],
    template: function WarningmessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5)(6, "g")(7, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6)(9, "path", 7)(10, "path", 8)(11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Oops!! You tried to access a page which is not available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 17175:
/*!***********************************************************!*\
  !*** ./node_modules/ng2-dragula/fesm2022/ng2-dragula.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragulaDirective: () => (/* binding */ DragulaDirective),
/* harmony export */   DragulaModule: () => (/* binding */ DragulaModule),
/* harmony export */   DragulaService: () => (/* binding */ DragulaService),
/* harmony export */   DrakeFactory: () => (/* binding */ DrakeFactory),
/* harmony export */   EventTypes: () => (/* binding */ EventTypes),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   MockDrake: () => (/* binding */ MockDrake),
/* harmony export */   MockDrakeFactory: () => (/* binding */ MockDrakeFactory),
/* harmony export */   dragula: () => (/* binding */ dragula)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13045);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ 73568);





class Group {
  constructor(name, drake, options) {
    this.name = name;
    this.drake = drake;
    this.options = options;
    this.initEvents = false;
  }
}
var EventTypes;
(function (EventTypes) {
  EventTypes["Cancel"] = "cancel";
  EventTypes["Cloned"] = "cloned";
  EventTypes["Drag"] = "drag";
  EventTypes["DragEnd"] = "dragend";
  EventTypes["Drop"] = "drop";
  EventTypes["Out"] = "out";
  EventTypes["Over"] = "over";
  EventTypes["Remove"] = "remove";
  EventTypes["Shadow"] = "shadow";
  EventTypes["DropModel"] = "dropModel";
  EventTypes["RemoveModel"] = "removeModel";
})(EventTypes || (EventTypes = {}));
const AllEvents = Object.keys(EventTypes).map(k => EventTypes[k]);
const dragula = dragula__WEBPACK_IMPORTED_MODULE_0__ || /*#__PURE__*/ (dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(dragula__WEBPACK_IMPORTED_MODULE_0__, 2)));
class DrakeFactory {
  constructor(build = dragula) {
    this.build = build;
  }
}
const filterEvent = (eventType, filterDragType, projector) => input => {
  return input.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
    event,
    name
  }) => {
    return event === eventType && (filterDragType === undefined || name === filterDragType);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    name,
    args
  }) => projector(name, args)));
};
const elContainerSourceProjector = (name, [el, container, source]) => ({
  name,
  el,
  container,
  source
});
class DragulaService {
  constructor(drakeFactory) {
    this.drakeFactory = drakeFactory;
    this.groups = {};
    this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.elContainerSource = eventType => groupName => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
    /* https://github.com/bevacqua/dragula#drakeon-events */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.cancel = this.elContainerSource(EventTypes.Cancel);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.remove = this.elContainerSource(EventTypes.Remove);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.shadow = this.elContainerSource(EventTypes.Shadow);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.over = this.elContainerSource(EventTypes.Over);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.out = this.elContainerSource(EventTypes.Out);
    this.drag = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({
      name,
      el,
      source
    })));
    this.dragend = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({
      name,
      el
    })));
    this.drop = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
      return {
        name,
        el,
        target,
        source,
        sibling
      };
    }));
    this.cloned = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
      return {
        name,
        clone,
        original,
        cloneType
      };
    }));
    this.dropModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
      return {
        name,
        el,
        target,
        source,
        sibling,
        item,
        sourceModel,
        targetModel,
        sourceIndex,
        targetIndex
      };
    }));
    this.removeModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
      return {
        name,
        el,
        container,
        source,
        item,
        sourceModel,
        sourceIndex
      };
    }));
    if (this.drakeFactory === null || this.drakeFactory === undefined) {
      this.drakeFactory = new DrakeFactory();
    }
  }
  /** Public mainly for testing purposes. Prefer `createGroup()`. */
  add(group) {
    const existingGroup = this.find(group.name);
    if (existingGroup) {
      throw new Error('Group named: "' + group.name + '" already exists.');
    }
    this.groups[group.name] = group;
    this.handleModels(group);
    this.setupEvents(group);
    return group;
  }
  find(name) {
    return this.groups[name];
  }
  destroy(name) {
    const group = this.find(name);
    if (!group) {
      return;
    }
    group.drake && group.drake.destroy();
    delete this.groups[name];
  }
  /**
   * Creates a group with the specified name and options.
   *
   * Note: formerly known as `setOptions`
   */
  createGroup(name, options) {
    return this.add(new Group(name, this.drakeFactory.build([], options), options));
  }
  handleModels({
    name,
    drake,
    options
  }) {
    let dragElm;
    let dragIndex;
    let dropIndex;
    drake.on('remove', (el, container, source) => {
      if (!drake.models) {
        return;
      }
      let sourceModel = drake.models[drake.containers.indexOf(source)];
      sourceModel = sourceModel.slice(0); // clone it
      const item = sourceModel.splice(dragIndex, 1)[0];
      this.dispatch$.next({
        event: EventTypes.RemoveModel,
        name,
        args: [el, container, source, item, sourceModel, dragIndex]
      });
    });
    drake.on('drag', (el, source) => {
      if (!drake.models) {
        return;
      }
      dragElm = el;
      dragIndex = this.domIndexOf(el, source);
    });
    drake.on('drop', (dropElm, target, source, sibling) => {
      if (!drake.models || !target) {
        return;
      }
      dropIndex = this.domIndexOf(dropElm, target);
      let sourceModel = drake.models[drake.containers.indexOf(source)];
      let targetModel = drake.models[drake.containers.indexOf(target)];
      let item;
      if (target === source) {
        sourceModel = sourceModel.slice(0);
        item = sourceModel.splice(dragIndex, 1)[0];
        sourceModel.splice(dropIndex, 0, item);
        // this was true before we cloned and updated sourceModel,
        // but targetModel still has the old value
        targetModel = sourceModel;
      } else {
        const isCopying = dragElm !== dropElm;
        item = sourceModel[dragIndex];
        if (isCopying) {
          if (!options.copyItem) {
            throw new Error('If you have enabled `copy` on a group, you must provide a `copyItem` function.');
          }
          item = options.copyItem(item);
        }
        if (!isCopying) {
          sourceModel = sourceModel.slice(0);
          sourceModel.splice(dragIndex, 1);
        }
        targetModel = targetModel.slice(0);
        targetModel.splice(dropIndex, 0, item);
        if (isCopying) {
          try {
            target.removeChild(dropElm);
            // eslint-disable-next-line no-empty
          } catch (e) {}
        }
      }
      this.dispatch$.next({
        event: EventTypes.DropModel,
        name,
        args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
      });
    });
  }
  setupEvents(group) {
    if (group.initEvents) {
      return;
    }
    group.initEvents = true;
    const name = group.name;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const emitter = event => {
      switch (event) {
        case EventTypes.Drag:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Drop:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.DragEnd:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Cancel:
        case EventTypes.Remove:
        case EventTypes.Shadow:
        case EventTypes.Over:
        case EventTypes.Out:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Cloned:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.DropModel:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.RemoveModel:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        default:
          break;
      }
    };
    AllEvents.forEach(emitter);
  }
  domIndexOf(child, parent) {
    if (parent) {
      return Array.prototype.indexOf.call(parent.children, child);
    }
  }
  static #_ = this.ɵfac = function DragulaService_Factory(t) {
    return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DrakeFactory, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DragulaService,
    factory: DragulaService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: DrakeFactory,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, null);
})();
class DragulaDirective {
  get container() {
    return this.el && this.el.nativeElement;
  }
  constructor(el, dragulaService) {
    this.el = el;
    this.dragulaService = dragulaService;
    this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes && changes.dragula) {
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragula;
      const hadPreviousValue = !!prev;
      const hasNewValue = !!current;
      // something -> null       =>  teardown only
      // something -> something  =>  teardown, then setup
      //      null -> something  =>  setup only
      //
      //      null -> null (precluded by fact of change being present)
      if (hadPreviousValue) {
        this.teardown(prev);
      }
      if (hasNewValue) {
        this.setup();
      }
    } else if (changes && changes.dragulaModel) {
      // this code only runs when you're not changing the group name
      // because if you're changing the group name, you'll be doing setup or teardown
      // it also only runs if there is a group name to attach to.
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragulaModel;
      const drake = this.group?.drake;
      if (this.dragula && drake) {
        drake.models = drake.models || [];
        const prevIndex = drake.models.indexOf(prev);
        if (prevIndex !== -1) {
          // delete the previous
          drake.models.splice(prevIndex, 1);
          // maybe insert a new one at the same spot
          if (current) {
            drake.models.splice(prevIndex, 0, current);
          }
        } else if (current) {
          // no previous one to remove; just push this one.
          drake.models.push(current);
        }
      }
    }
  }
  // call ngOnInit 'setup' because we want to call it in ngOnChanges
  // and it would otherwise run twice
  setup() {
    const checkModel = group => {
      if (this.dragulaModel) {
        if (group.drake?.models) {
          group.drake?.models?.push(this.dragulaModel);
        } else {
          if (group.drake) {
            group.drake.models = [this.dragulaModel];
          }
        }
      }
    };
    // find or create a group
    if (!this.dragula) {
      return;
    }
    let group = this.dragulaService.find(this.dragula);
    if (!group) {
      const options = {};
      group = this.dragulaService.createGroup(this.dragula, options);
    }
    // ensure model and container element are pushed
    checkModel(group);
    group.drake?.containers.push(this.container);
    this.subscribe(this.dragula);
    this.group = group;
  }
  subscribe(name) {
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.subs.add(this.dragulaService.dropModel(name).subscribe(({
      source,
      target,
      sourceModel,
      targetModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      } else if (target === this.el.nativeElement) {
        this.dragulaModelChange.emit(targetModel);
      }
    }));
    this.subs.add(this.dragulaService.removeModel(name).subscribe(({
      source,
      sourceModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      }
    }));
  }
  teardown(groupName) {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    const group = this.dragulaService.find(groupName);
    if (group) {
      const itemToRemove = group.drake?.containers.indexOf(this.el.nativeElement);
      if (itemToRemove !== -1) {
        group.drake?.containers.splice(itemToRemove, 1);
      }
      if (this.dragulaModel && group.drake && group.drake.models) {
        const modelIndex = group.drake.models.indexOf(this.dragulaModel);
        if (modelIndex !== -1) {
          group.drake.models.splice(modelIndex, 1);
        }
      }
    }
  }
  ngOnDestroy() {
    if (!this.dragula) {
      return;
    }
    this.teardown(this.dragula);
  }
  static #_ = this.ɵfac = function DragulaDirective_Factory(t) {
    return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragulaService));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: DragulaDirective,
    selectors: [["", "dragula", ""]],
    inputs: {
      dragula: "dragula",
      dragulaModel: "dragulaModel"
    },
    outputs: {
      dragulaModelChange: "dragulaModelChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[dragula]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: DragulaService
    }];
  }, {
    dragula: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragulaModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragulaModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();
class DragulaModule {
  static forRoot() {
    return {
      ngModule: DragulaModule,
      providers: [DragulaService]
    };
  }
  static #_ = this.ɵfac = function DragulaModule_Factory(t) {
    return new (t || DragulaModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: DragulaModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [DragulaService]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      exports: [DragulaDirective],
      declarations: [DragulaDirective],
      providers: [DragulaService]
    }]
  }], null, null);
})();
const MockDrakeFactory = new DrakeFactory((containers, options) => {
  return new MockDrake(containers, options);
});
/** You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
class MockDrake {
  /**
   * @param containers A list of container elements.
   * @param options These will NOT be used. At all.
   * @param models Nonstandard, but useful for testing using `new MockDrake()` directly.
   *               Note, default value is undefined, like a real Drake. Don't change that.
   */
  constructor(containers = [], options = {}, models) {
    this.containers = containers;
    this.options = options;
    this.models = models;
    // Basic but fully functional event emitter shim
    this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    /* Doesn't represent anything meaningful. */
    this.dragging = false;
  }
  on(event, callback) {
    this.subs.add(this.emitter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
      eventType
    }) => eventType === event)).subscribe(({
      eventType,
      args
    }) => {
      if (eventType === EventTypes.Drag) {
        const argument = Array.from(args);
        const el = argument[0];
        const source = argument[1];
        //@ts-ignore
        callback(el, source);
        return;
      }
      if (eventType === EventTypes.Drop) {
        const argument = Array.from(args);
        const el = argument[0];
        const target = argument[1];
        const source = argument[2];
        const sibling = argument[3];
        //@ts-ignore
        callback(el, target, source, sibling);
        return;
      }
      if (eventType === EventTypes.Remove) {
        const argument = Array.from(args);
        const el = argument[0];
        const container = argument[1];
        const source = argument[2];
        //@ts-ignore
        callback(el, container, source);
        return;
      }
      callback(args);
    }));
  }
  /* Does nothing useful. */
  start(item) {
    this.dragging = true;
  }
  /* Does nothing useful. */
  end() {
    this.dragging = false;
  }
  cancel(revert) {
    this.dragging = false;
  }
  /* Does nothing useful. */
  canMove(item) {
    return this.options.accepts ? this.options.accepts(item) : false;
  }
  /* Does nothing useful. */
  remove() {
    this.dragging = false;
  }
  destroy() {
    this.subs.unsubscribe();
  }
  /**
   * This is the most useful method. You can use it to manually fire events that would normally
   * be fired by a real drake.
   *
   * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
   * DragulaService uses to implement [dragulaModel].
   *
   * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
   *
   * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
   */
  emit(eventType, ...args) {
    this.emitter$.next({
      eventType,
      args
    });
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_pages_pages_module_ts.js.map