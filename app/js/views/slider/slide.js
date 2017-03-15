// /**
//  * Created by Administrator on 2016/11/17.
//  */

//   define(["css", "node", "util"], function(css, node, util) {
//     function Slider(slide) {
//       this.banner = slide.banner; // slider容器
//       this.slider = slide.slider; // slider主体
//       this.autoPlay = false; // 是否自动播放
//       this.isTrigger = slide.isTrigger; // 是否需要trigger标签
//       this.sliderItem = slide.sliderItem; // 轮播图片列表
//       this.direction = slide.direction; //true为水平，false为垂直
//       this.timer = null; // 定时器
//       this.autotimer = null; // 自动播放定时器
//       this.index = slide.index; // 轮播图片数量
//       this.loop = slide.loop; // 是否循环轮播
//       this.active = null; // 当前图片
//     }

//     Slider.prototype = {
//       move: function(iTarget) { //一次动画的过程，iTarget: 需要移动到的图片的位置
//         var pro = this.unit().pro; // 所需要改动的属性
//         var oThis = this.slider; // 获取滑动主体
//         if (this.isTrigger) { //触发标签的变换
//           var index = -iTarget / this.unit().uLength; // 获取所要移动到的图片的索引值
//           var className;
//           var triggers = document.getElementsByClassName("trigger-item"); // 获取标签列表
//           if (index >= this.index) { index = 0; } // 对索引的范围检测，若超出则归零
//           if (css(this.slider, pro) == -this.unit().uLength && this.sliderItem.length == this.index + 1) { index = this.index - 1; } // 此时正好处于循环时队列多一张图片的情况
//           if (this.active && this.active != triggers[index]) { // active存在且不为目标标签清除active标签的className的‘active’部分
//             className = this.active.className;
//             this.active.className = className.replace(" active", "");
//             this.active = null;
//           }
//           if (this.active == null) { // 给目标标签设为active标签
//             triggers[index].className += " active";
//             this.active = triggers[index];
//           }
//         }
//         cancelAnimationFrame(oThis.timer);

//         function start() { // 滑动动画过程
//           var value = css(oThis, pro);
//           var iSpeed = (iTarget - value) / 10;
//           iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//           css(oThis, pro, (value + iSpeed));
//           if (css(oThis, pro) != iTarget) {
//             oThis.timer = requestAnimationFrame(start);
//           } else if (css(oThis, pro) == iTarget) {
//             cancelAnimationFrame(oThis.timer);
//           }
//         }

//         requestAnimationFrame(start);
//       },

//       unit: function() { //获取移动的距离和初始位置及动画的属性,uLength: 移动的距离， init: 初始位置， pro: 改动的属性， unit: 基准属性
//         var uLength, init;
//         if (this.direction) {
//           uLength = css(this.sliderItem[0], "width");
//           init = css(this.slider, "left");
//           return {
//             uLength: uLength,
//             init: init,
//             pro: "left",
//             unit: "width"

//           };
//         } else {
//           uLength = css(this.sliderItem[0], "height");
//           init = css(this.slider, "top");
//           return {
//             uLength: uLength,
//             init: init,
//             pro: "top",
//             unit: "height"
//           };
//         }
//       },
//       next: function() { //下一张图片
//         var pro = this.unit().pro;
//         var uLength = -this.unit().uLength;
//         var init = this.unit().init;
//         var unit = this.unit().unit;
//         init = Math.ceil(init / uLength) * uLength;
//         var iTarget = init + uLength;
//         if (this.loop) {
//           if (this.sliderItem.length == this.index + 1 && iTarget == uLength) { //在从第一张进行上一张动画后再进行下一张动画，循环
//             this.slider.removeChild(this.sliderItem[0]);
//             css(this.slider, pro, (this.index - 1) * uLength);
//             iTarget = this.index * uLength;
//           }
//           if (iTarget == this.index * uLength) { //在最后一张上进行下一张的动画，循环
//             css(this.slider, unit, -(this.index + 1) * uLength);
//             var item = document.createElement("li");
//             item = this.sliderItem[0].cloneNode(true);
//             this.slider.appendChild(item);
//           }
//           if (iTarget == (this.index + 1) * uLength) { //在上面的动画完成后的再一次下一张动画
//             css(this.slider, pro, 0);
//             iTarget = uLength;
//             this.slider.removeChild(this.sliderItem[this.index]);
//           }
//         }
//         this.move(iTarget);
//       },
//       prev: function() { //上一张图片
//         var pro = this.unit().pro;
//         var uLength = this.unit().uLength;
//         var init = this.unit().init;
//         var unit = this.unit().unit;
//         init = Math.ceil(init / uLength) * uLength;
//         var iTarget = init + uLength;
//         if (this.loop) { //多次快速点击，left最终始终为0
//           if (iTarget == uLength && this.sliderItem.length == this.index + 1) { //在第一张进行上一张动画后的又一次上一张动画
//             this.slider.removeChild(this.sliderItem[0]);
//             css(this.slider, pro, -(this.index - 1) * uLength);
//             iTarget = (this.index - 2) * (-uLength);
//           }
//           if (iTarget == -uLength * (this.index - 1) && this.sliderItem.length == this.index + 1) { //在最后一张上next后又prev
//             this.slider.removeChild(this.sliderItem[this.index]);
//             css(this.slider, pro, 0);
//             iTarget = uLength;
//           }
//           if (iTarget == uLength && this.sliderItem.length == this.index) { //在第一张进行上一张动画
//             iTarget = 0;
//             css(this.slider, unit, (this.index + 1) * uLength);
//             var item = document.createElement("li");
//             item = this.sliderItem[this.index - 1].cloneNode(true);
//             this.slider.insertBefore(item, this.sliderItem[0]);
//             css(this.slider, pro, -uLength);
//           }
//         }
//         this.move(iTarget);
//       },
//       play: function() { //播放动画
//         var oThis = this;
//         this.autotimer = setInterval(oThis.next.bind(oThis), 3000);
//       },
//       pause: function() { // 停止自动播放
//         clearInterval(this.autotimer);
//       },
//       auto: function(flag) { //自动播放
//         this.autopaly = flag;
//         if (this.autopaly) {
//           this.play();
//         }
//       },
//       trigger: function() { //生成触发标签
//         var oThis = this;
//         if (this.isTrigger) {
//           var trigger = document.createElement("ul");
//           var triggerItem;
//           trigger.className = "slider-trigger";
//           for (var i = 0; i < this.index; i++) {
//             triggerItem = document.createElement("li");
//             triggerItem.className = "trigger-item";
//             trigger.appendChild(triggerItem);
//           }
//           this.banner.appendChild(trigger);
//           var triggers = node.getTagChildNodes(trigger);
//           triggers[0].className += " active";
//           oThis.active = triggers[0];
//           var className, iTarget;
//           for (i = 0; i < this.index; i++) {
//             util.addHandler(triggers[i], "mouseover", function(event) {
//               var index = node.getIndexOfParent(this);
//               if (oThis.active && oThis.active != this) {
//                 className = oThis.active.className;
//                 oThis.active.className = className.replace(" active", "");
//                 oThis.active = null;
//               }
//               console.log(oThis.active);
//               if (oThis.active == null) {
//                 oThis.active = this;
//                 oThis.active.className += " active";
//                 iTarget = -index * oThis.unit().uLength;
//                 oThis.move(iTarget);
//               }
//             })
//           }
//         }
//       }
//     };
//     return Slider;
//   });
