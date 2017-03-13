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
