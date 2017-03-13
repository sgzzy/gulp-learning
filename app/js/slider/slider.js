import $ from './../jquery/jquery-3.1.1.js';

class Slider {

  constructor(slider) {
    this.banner = slide.banner; // slider容器
    this.slider = slide.slider; // slider主体
    this.autoPlay = false; // 是否自动播放
    this.isTrigger = slide.isTrigger; // 是否需要trigger标签
    this.sliderItem = slide.sliderItem; // 轮播图片列表
    this.direction = slide.direction; //true为水平，false为垂直
    this.timer = null; // 定时器
    this.autotimer = null; // 自动播放定时器
    this.index = slide.index; // 轮播图片数量
    this.loop = slide.loop; // 是否循环轮播
    this.active = null; // 当前图片
  }

}

cancelAnimationFrame(oThis.timer);

function start() { // 滑动动画过程
  var value = css(oThis, pro);
  var iSpeed = (iTarget - value) / 10;
  iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
  css(oThis, pro, (value + iSpeed));
  if (css(oThis, pro) != iTarget) {
    oThis.timer = requestAnimationFrame(start);
  } else if (css(oThis, pro) == iTarget) {
    cancelAnimationFrame(oThis.timer);
  }
}

requestAnimationFrame(start);


function move() {
  requestAnimationFrame(function(time) {

  })
}
