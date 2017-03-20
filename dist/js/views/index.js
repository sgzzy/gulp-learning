'use strict';

var _motion = require('./../utils/motion.js');

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