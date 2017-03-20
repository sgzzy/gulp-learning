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