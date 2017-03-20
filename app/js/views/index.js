import { open, close, } from './../utils/motion.js';

const click = $('.lesson');
const list = $('.list');
const len = list.length;
let active = null;
// let timer = null;
for (let i = 0; i < len; i++) {
  click[i].addEventListener('click', onclick);
}

/**
 *
 * @param {any} event
 * @returns
 */
function onclick(e) {
  const oThis = this;
  let target = $($(oThis).children()[1]);
  const listHeight = parseInt($(target.children()[0]).css('height'));
  const length = target.children().length;
  const time = 1000;
  const closetime = 500;
  let height,
    result,
    pro = 'height';
  if (e.target != oThis && e.target != $(oThis).children()[0]) {
    return;
  }
  if (active && active == oThis) {
    close(target, closetime, pro);
    setTimeout(function() {
      active = null;
    }, closetime);
  } else if (active && active != oThis) {
    target = $($(active).children()[1]);
    close(target, closetime, pro);
    setTimeout(function() {
      active = oThis;
      active.className = 'lesson active';
      target = $($(active).children()[1]);
      height = parseInt(target.css('height'));
      result = (listHeight + 1) * length;
      open(target, height, result, time, pro);
    }, closetime);
  } else if (active == null) {
    active = oThis;
    active.className = 'lesson active';
    target = $($(active).children()[1]);
    height = parseInt(target.css('height'));
    result = (listHeight + 1) * length;
    open(target, height, result, time, pro);
  }
}
