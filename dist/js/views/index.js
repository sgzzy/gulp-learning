'use strict';

var _js = require('./../utils/js');

var _jquery = require('./../libs/jquery/jquery-3.1.1.js');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2016/11/14.
 */
/**
 * Created by Administrator on 2016/11/14.
 */
var click = (0, _jquery2.default)('.lesson');
var list = (0, _jquery2.default)('.list');
var len = list.length;
var active = null;
var timer = null;
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
  var target = oThis.children()[1];
  var listHeight = (0, _jquery2.default)(target.children()[0]).css('height');
  var length = target.children.length;
  var time = 1000;
  var closetime = 500;
  var height = void 0,
      result = void 0,
      pro = 'height';
  if (e.target != oThis && e.target != (0, _jquery2.default)(oThis).children()[0]) {
    return;
  }
  if (active && active == oThis) {
    (0, _js.close)(target, closetime, pro);
    setTimeout(function () {
      active = null;
    }, closetime);
  } else if (active && active != oThis) {
    target = (0, _jquery2.default)(active).children()[1];
    (0, _js.close)(target, closetime, pro);
    setTimeout(function () {
      active = oThis;
      active.className = 'lesson active';
      target = (0, _jquery2.default)(active).children()[1];
      height = (0, _jquery2.default)(target).css('height');
      result = (listHeight + 1) * length;
      (0, _js.open)(target, height, result, time, pro);
    }, closetime);
  } else if (active == null) {
    active = oThis;
    active.className = 'lesson active';
    target = (0, _jquery2.default)(active).children()[1];
    height = (0, _jquery2.default)(target).css('height');
    result = (listHeight + 1) * length;
    (0, _js.open)(target, height, result, time, pro);
  }
}