/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _motion = __webpack_require__(2);
	
	var click = $('.lesson');
	var list = $('.list');
	var len = list.length;
	var active = null;
	// let timer = null;
	for (var i = 0; i < len; i++) {
	  click[i].addEventListener('click', onclick);
	}
	
	/**
	 *
	 * @param {any} event
	 * @returns
	 */
	function onclick(e) {
	  var oThis = this;
	  var target = $($(oThis).children()[1]);
	  var listHeight = parseInt($(target.children()[0]).css('height'));
	  var length = target.children().length;
	  var time = 1000;
	  var closetime = 500;
	  var height = void 0,
	      result = void 0,
	      pro = 'height';
	  if (e.target != oThis && e.target != $(oThis).children()[0]) {
	    return;
	  }
	  if (active && active == oThis) {
	    (0, _motion.close)(target, closetime, pro);
	    setTimeout(function () {
	      active = null;
	    }, closetime);
	  } else if (active && active != oThis) {
	    target = $($(active).children()[1]);
	    (0, _motion.close)(target, closetime, pro);
	    setTimeout(function () {
	      active = oThis;
	      active.className = 'lesson active';
	      target = $($(active).children()[1]);
	      height = parseInt(target.css('height'));
	      result = (listHeight + 1) * length;
	      (0, _motion.open)(target, height, result, time, pro);
	    }, closetime);
	  } else if (active == null) {
	    active = oThis;
	    active.className = 'lesson active';
	    target = $($(active).children()[1]);
	    height = parseInt(target.css('height'));
	    result = (listHeight + 1) * length;
	    (0, _motion.open)(target, height, result, time, pro);
	  }
	}

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.close = exports.open = undefined;
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tween = new _Tween2.default();
	/**
	 *
	 *
	 * @export
	 * @param {any} target
	 * @param {any} height
	 * @param {any} result
	 * @param {any} endtime
	 * @param {any} pro
	 */
	/**
	 * Created by Administrator on 2016/11/16.
	 */
	function open(target, height, result, endtime, pro) {
	  var timer = null;
	  var startTime = void 0;
	  /**
	   *
	   *
	   * @param {any} time
	   */
	  function start(time) {
	    if (timer === null) {
	      startTime = time;
	    }
	
	    time = parseFloat(time - startTime);
	    var value = Math.floor(tween.Elastic.easeOut(time, height, result, endtime));
	
	    if (time <= endtime) {
	      timer = requestAnimationFrame(start);
	    } else if (time > endtime) {
	      value = result + height;
	      cancelAnimationFrame(timer);
	    }
	    target.css(pro, value + 'px');
	  }
	
	  requestAnimationFrame(start);
	}
	/**
	 *
	 *
	 * @export
	 * @param {any} target
	 * @param {any} endtime
	 * @param {any} pro
	 */
	function close(target, endtime, pro) {
	  var height = parseInt(target.css(pro));
	  var result = -height;
	  var timer = null;
	  var startTime = void 0;
	
	  /**
	   *
	   * @param {any} time
	   */
	  function end(time) {
	    if (timer === null) {
	      startTime = time;
	    }
	    time = parseFloat(time - startTime);
	    var value = Math.floor(tween.Linear(time, height, result, endtime));
	    if (time < endtime) {
	      timer = requestAnimationFrame(end);
	    } else {
	      value = height + result;
	      cancelAnimationFrame(timer);
	      target.parent().attr('class', 'lesson');
	    }
	    target.css(pro, value + 'px');
	  }
	
	  requestAnimationFrame(end);
	}
	
	exports.open = open;
	exports.close = close;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Quad = function () {
	  function Quad() {
	    _classCallCheck(this, Quad);
	  }
	
	  _createClass(Quad, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return -c * (t /= d) * (t - 2) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	      return -c / 2 * (--t * (t - 2) - 1) + b;
	    }
	  }]);
	
	  return Quad;
	}();
	
	var Cubic = function () {
	  function Cubic() {
	    _classCallCheck(this, Cubic);
	  }
	
	  _createClass(Cubic, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t + 2) + b;
	    }
	  }]);
	
	  return Cubic;
	}();
	
	var Quart = function () {
	  function Quart() {
	    _classCallCheck(this, Quart);
	  }
	
	  _createClass(Quart, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    }
	  }]);
	
	  return Quart;
	}();
	
	var Quint = function () {
	  function Quint() {
	    _classCallCheck(this, Quint);
	  }
	
	  _createClass(Quint, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t * t + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    }
	  }]);
	
	  return Quint;
	}();
	
	var Sine = function () {
	  function Sine() {
	    _classCallCheck(this, Sine);
	  }
	
	  _createClass(Sine, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * Math.sin(t / d * (Math.PI / 2)) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	    }
	  }]);
	
	  return Sine;
	}();
	
	var Expo = function () {
	  function Expo() {
	    _classCallCheck(this, Expo);
	  }
	
	  _createClass(Expo, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if (t == 0) return b;
	      if (t == d) return b + c;
	      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	  }]);
	
	  return Expo;
	}();
	
	var Circ = function () {
	  function Circ() {
	    _classCallCheck(this, Circ);
	  }
	
	  _createClass(Circ, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    }
	  }]);
	
	  return Circ;
	}();
	
	var Elastic = function () {
	  function Elastic() {
	    _classCallCheck(this, Elastic);
	  }
	
	  _createClass(Elastic, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d, a, p) {
	      var s = void 0;
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * .3;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else s = p / (2 * Math.PI) * Math.asin(c / a);
	      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d, a, p) {
	      var s = void 0;
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * .3;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else s = p / (2 * Math.PI) * Math.asin(c / a);
	      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d, a, p) {
	      var s = void 0;
	      if (t == 0) return b;
	      if ((t /= d / 2) == 2) return b + c;
	      if (!p) p = d * (.3 * 1.5);
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else s = p / (2 * Math.PI) * Math.asin(c / a);
	      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	    }
	  }]);
	
	  return Elastic;
	}();
	
	var Back = function () {
	  function Back() {
	    _classCallCheck(this, Back);
	  }
	
	  _createClass(Back, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	    }
	  }]);
	
	  return Back;
	}();
	
	var Bounce = function () {
	  function Bounce() {
	    _classCallCheck(this, Bounce);
	  }
	
	  _createClass(Bounce, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c - Bounce.easeOut(d - t, 0, c, d) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      if ((t /= d) < 1 / 2.75) {
	        return c * (7.5625 * t * t) + b;
	      } else if (t < 2 / 2.75) {
	        return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
	      } else if (t < 2.5 / 2.75) {
	        return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
	      } else {
	        return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
	      }
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if (t < d / 2) return Bounce.easeIn(t * 2, 0, c, d) * .5 + b;else return Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	    }
	  }]);
	
	  return Bounce;
	}();
	
	var Tween = function () {
	  _createClass(Tween, [{
	    key: "Linear",
	    value: function Linear(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }]);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    this.Back = new Back();
	    this.Bounce = new Bounce();
	    this.Circ = new Circ();
	    this.Cubic = new Cubic();
	    this.Elastic = new Elastic();
	    this.Expo = new Expo();
	    this.Quad = new Quad();
	    this.Quart = new Quart();
	    this.Quint = new Quint();
	    this.Sine = new Sine();
	  }
	
	  return Tween;
	}();
	
	exports.default = Tween;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map