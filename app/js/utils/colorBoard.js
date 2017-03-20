/**
 * Created by Administrator on 2016/12/8.
 */

// 创建画板类
export default class ColorBoard {
  /**
   * Creates an instance of ColorBoard.
   * @param {any} {ctx, width, height}
   *
   * @memberOf ColorBoard
   */
  constructor({ ctx, width, height, }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.imageData = this.ctx.createImageData(this.width, this.height);
  }

  /**
   * setDate
   * @param imageData
   * @param {Number} x
   * @param {Number} y
   * @param {Array} value
   */
  setData(imageData, x, y, value) {
    imageData.data[(y * (imageData.width * 4) + (x * 4)) + 0] = value[0];
    imageData.data[(y * (imageData.width * 4) + (x * 4)) + 1] = value[1];
    imageData.data[(y * (imageData.width * 4) + (x * 4)) + 2] = value[2];
    imageData.data[(y * (imageData.width * 4) + (x * 4)) + 3] = value[3];
  }

  /**
   *
   * @param imageDate
   */
  drawImageconst() {
    const context = this;
    const radius = context.width / 200;
    const angle = -Math.PI / 180;
    for (let i = 100; i >= 0; i--) {
      for (let j = 0; j < 360; j++) {
        const pixel = context.hsvToRgb(j, i / 100, 1);
        const rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) + ')';
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
  drawColorconst(r, startAngle, rgb) {
    const context = this;
    const ctx = context.ctx;
    const radius = context.width / 2;
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
  drawLightconst(h, s) {
    const context = this;
    const imageData = context.imageData;
    for (let i = 0; i < 360; i++) {
      for (let j = 0; j < 40; j++) {
        const pixel = context.hsvToRgb(h, s, (360 - i) / 360);
        context.setData(imageData, j, i, [
          Math.ceil(pixel.r),
          Math.ceil(pixel.g),
          Math.ceil(pixel.b),
          255,
        ]);
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
  hsvToRgbconst(h, s, v) {
    let r, g, b;
    if (s == 0) {
      v = Math.floor(v * 255);
      return {
        r: v,
        g: v,
        b: v,
      };
    }
    h /= 60;
    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
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
      b: b * 255,
    };
  }

  /**
   * colorHex
   * @param rgb
   * @returns {string}
   */
  colorHexconst(rgb) {
    const that = rgb;
    const regR = /^(rgb|RGB)/;
    const regI = /(?:\(|\)|rgb|RGB)*/g;
    let hex = '#', strHex;
    if (regR.test(that)) {
      const rgbN = that.replace(regI, '').split(',');
      for (let i = 0; i < rgbN.length; i++) {
        const num = Number(rgbN[i]);
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
  colorRgbconst(hex) {
    const that = hex.toLowerCase();
    const reg = /^#([0-9a-f]{3}|[0-9a-f]{6})$/;
    let rgb = 'RGB(';
    if (that && reg.test(that)) {
      let hexN = that.replace('#', '');
      if (hexN.length == 3) {
        hexN = hexN.split('');
        for (let i = 0; i < 3; i++) {
          hexN[i] += hexN[i];
        }
      } else if (hexN.length == 6) {
        hexN = hexN.match(/[0-9a-f]{2}/g);
      }
      for (let i = 0; i < 3; i++) {
        hexN[i] = parseInt('0x' + hexN[i], 10);
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
  rgbToHsvconst(r, g, b) {
    r = parseFloat(r + 1) / 256;
    g = parseFloat(g + 1) / 256;
    b = parseFloat(b + 1) / 256;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, v;
    v = max;
    switch (max) {
    case min:
      h = 0;
      break;
    case r:
      h = g < b ? (60 * ((g - b) / (max - min)) + 360) : (60 * ((g - b) / (max - min)));
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
      v: v,
    };
  }

}
