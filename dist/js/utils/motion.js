'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _Tween = require('./Tween.js');

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