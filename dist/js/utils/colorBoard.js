'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2016/12/8.
 */

// 创建画板类
var ColorBoard = function () {
  /**
   * Creates an instance of ColorBoard.
   * @param {any} {ctx, width, height}
   *
   * @memberOf ColorBoard
   */
  function ColorBoard(_ref) {
    var ctx = _ref.ctx,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, ColorBoard);

    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.imageData = this.ctx.createImageData(this.width, this.height);
  }

  /**
   * setDate 给imageData的元像素上色value为rgba值的数组
   * @param imageData image对象
   * @param {Number} x x坐标
   * @param {Number} y y坐标
   * @param {Array} value rgba值
   */


  _createClass(ColorBoard, [{
    key: 'setData',
    value: function setData(imageData, x, y, value) {
      imageData.data[y * (imageData.width * 4) + x * 4 + 0] = value[0];
      imageData.data[y * (imageData.width * 4) + x * 4 + 1] = value[1];
      imageData.data[y * (imageData.width * 4) + x * 4 + 2] = value[2];
      imageData.data[y * (imageData.width * 4) + x * 4 + 3] = value[3];
    }

    /**
     * 给画板按hsv上色
     * @param imageDate
     */

  }, {
    key: 'drawImage',
    value: function drawImage() {
      var context = this;
      var radius = context.width / 200;
      var angle = -Math.PI / 180;
      for (var i = 100; i >= 0; i--) {
        for (var j = 0; j < 360; j++) {
          var pixel = context.hsvToRgb(j, i / 100, 1);
          var rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) + ')';
          if (i == 0) {
            context.drawColor(1, j * angle, rgb);
          } else {
            context.drawColor(i * radius, j * angle, rgb);
          }
        }
      }
    }

    /**
     *
     * @param r
     * @param startAngle
     * @param rgb
     */

  }, {
    key: 'drawColor',
    value: function drawColor(r, startAngle, rgb) {
      var context = this;
      var ctx = context.ctx;
      var radius = context.width / 2;
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.fillStyle = rgb;
      ctx.arc(radius, radius, r, startAngle, startAngle - Math.PI / 180, true);
      ctx.fill();
      ctx.closePath();
    }

    /**
     *
     *
     * @param {any} h
     * @param {any} s
     */

  }, {
    key: 'drawLight',
    value: function drawLight(h, s) {
      var context = this;
      var imageData = context.imageData;
      for (var i = 0; i < 360; i++) {
        for (var j = 0; j < 40; j++) {
          var pixel = context.hsvToRgb(h, s, (360 - i) / 360);
          context.setData(imageData, j, i, [Math.ceil(pixel.r), Math.ceil(pixel.g), Math.ceil(pixel.b), 255]);
        }
      }
      context.ctx.putImageData(imageData, 0, 0);
    }

    /**
     * HSVToRGB
     * @param h
     * @param s
     * @param v
     * @returns {*}
     */

  }, {
    key: 'hsvToRgb',
    value: function hsvToRgb(h, s, v) {
      var r = void 0,
          g = void 0,
          b = void 0;
      if (s == 0) {
        v = Math.floor(v * 255);
        return {
          r: v,
          g: v,
          b: v
        };
      }
      h /= 60;
      var i = Math.floor(h);
      var f = h - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        default:
          r = v;
          g = p;
          b = q;
          break;
      }
      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    }

    /**
     * colorHex
     * @param rgb
     * @returns {string}
     */

  }, {
    key: 'colorHex',
    value: function colorHex(rgb) {
      var that = rgb;
      var regR = /^(rgb|RGB)/;
      var regI = /(?:\(|\)|rgb|RGB)*/g;
      var hex = '#',
          strHex = void 0;
      if (regR.test(that)) {
        var rgbN = that.replace(regI, '').split(',');
        for (var i = 0; i < rgbN.length; i++) {
          var num = Number(rgbN[i]);
          if (num < 0 || num > 255) {
            throw new RangeError('The RGB number is out of range.');
          } else {
            strHex = num.toString(16);
            strHex = Number(num) < 16 ? '0' + strHex : strHex;
          }
          hex += strHex;
        }
        if (hex.length != 7) {
          throw new RangeError('The RGB numbers is not three.');
        } else {
          return hex;
        }
      }
    }

    /**
     * colorRgb
     * @param hex
     * @returns {string}
     */

  }, {
    key: 'colorRgb',
    value: function colorRgb(hex) {
      var that = hex.toLowerCase();
      var reg = /^#([0-9a-f]{3}|[0-9a-f]{6})$/;
      var rgb = 'RGB(';
      if (that && reg.test(that)) {
        var hexN = that.replace('#', '');
        if (hexN.length == 3) {
          hexN = hexN.split('');
          for (var i = 0; i < 3; i++) {
            hexN[i] += hexN[i];
          }
        } else if (hexN.length == 6) {
          hexN = hexN.match(/[0-9a-f]{2}/g);
        }
        for (var _i = 0; _i < 3; _i++) {
          hexN[_i] = parseInt('0x' + hexN[_i], 10);
        }
        rgb += hexN[0] + ', ' + hexN[1] + ', ' + hexN[2] + ')';
        return rgb;
      } else {
        throw new Error('The colorHex\'s  format is warn.');
      }
    }

    /**
     *
     * @param r
     * @param g
     * @param b
     * @returns {{h: *, s: *, v: (number|*)}}
     */

  }, {
    key: 'rgbToHsv',
    value: function rgbToHsv(r, g, b) {
      r = parseFloat(r + 1) / 256;
      g = parseFloat(g + 1) / 256;
      b = parseFloat(b + 1) / 256;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h = void 0,
          s = void 0,
          v = void 0;
      v = max;
      switch (max) {
        case min:
          h = 0;
          break;
        case r:
          h = g < b ? 60 * ((g - b) / (max - min)) + 360 : 60 * ((g - b) / (max - min));
          break;
        case g:
          h = 60 * (b - r) / (max - min) + 120;
          break;
        case b:
          h = 60 * (r - g) / (max - min) + 240;
          break;
      }
      if (max == 0) {
        s = 0;
      } else {
        s = 1 - min / max;
      }
      return {
        h: h,
        s: s,
        v: v
      };
    }
  }]);

  return ColorBoard;
}();

exports.default = ColorBoard;