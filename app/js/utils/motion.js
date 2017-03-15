/**
 * Created by Administrator on 2016/11/16.
 */
import Tween from './Tween.js';
const tween = new Tween();
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
function open(target, height, result, endtime, pro) {
  let timer = null;
  let startTime;
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
    let value = Math.floor(tween.Elastic.easeOut(time, height, result, endtime));

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
  const height = target.css(pro);
  const result = -height;
  let timer = null;
  let startTime;

  /**
   *
   * @param {any} time
   */
  function end(time) {
    if (timer === null) {
      startTime = time;
    }
    time = parseFloat(time - startTime);
    let value = Math.floor(tween.Linear(time, height, result, endtime));
    if (time < endtime) {
      timer = requestAnimationFrame(end);
    } else {
      value = height + result;
      cancelAnimationFrame(timer);
      target.parentNode.className = "lesson";
    }
    target.css(pro, value + 'px');
  }

  requestAnimationFrame(end);
}

export { open, close, };
