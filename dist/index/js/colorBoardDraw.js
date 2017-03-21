/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// /**
	//  * Created by Administrator on 2016/12/8.
	//  */
	// var DrawImage = require('drawColor');
	// var Util = require('util');
	// var can = document.getElementById('can'); // 画布
	// var ctx = can.getContext('2d'); // 2d画布对象
	// var lightBar = document.getElementById('lightBar'); // 单一颜色明亮显示条
	// var lCtx = lightBar.getContext('2d');
	// var rgbColor = document.getElementsByClassName('rgb-color')[0]; // 显示rgb值的文本框
	// var hexColor = document.getElementsByClassName('hex-color')[0]; // 显示hex值的文本框
	// var colorBoard = document.getElementById('colorBoard');
	// var rgb, hex;
	// var obj = { // 画板对象
	//   ctx : ctx,
	//   width: can.width,
	//   height: can.height
	// };
	// var light = { // 明亮条对象
	//   ctx: lCtx,
	//   width: lightBar.width,
	//   height: lightBar.height
	// };
	// var draw = new DrawImage(obj); // 初始化画板
	// var lightDraw = new DrawImage(light); // 初始化明亮条
	// draw.drawImage(); // 给画板上色
	
	// Util.addHandler(can, 'click', canClick);
	// Util.addHandler(lightBar, 'click', lightClick);
	// function canClick(event){
	//   event = Util.getEvent(event);
	//   var x = event.offsetX;
	//   var y = event.offsetY;
	//   x -= can.width/2;
	//   y = can.width/2 - y;
	//   var hs = toHSV(x,y);
	//   console.log(hs.h);
	//   console.log(hs.s);
	//   var pixel = draw.hsvToRgb(hs.h,hs.s,1);
	//   console.log(pixel);
	//   rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) +')';
	//   hex = draw.colorHex(rgb);
	//   lightBar.style.background = hex;
	//   rgbColor.value = rgb;
	//   rgbColor.style.backgroundColor = hex;
	//   hexColor.value = hex;
	//   hexColor.style.backgroundColor = hex;
	//   lightDraw.drawLight(x,y);
	// }
	
	// function lightClick(event){
	//   event = Util.getEvent(event);
	//   var rgbC = rgbColor.value;
	//   var regI = /(?:\(|\)|rgb|RGB)*/g;
	//   var rgbN = rgbC.replace(regI, '').split(',');
	//   var r = Number(rgbN[0]);
	//   var g = Number(rgbN[1]);
	//   var b = Number(rgbN[2]);
	//   var hsv = draw.rgbToHsv(r, g, b);
	//   var y = event.offsetY;
	//   hsv.v = parseFloat(100-y) / 100;
	//   var pixel = draw.hsvToRgb(hsv.h, hsv.s, hsv.v);
	//   rgb = 'RGB(' + Math.floor(pixel.r) + ',' + Math.floor(pixel.g) + ',' + Math.floor(pixel.b) +')';
	//   hex = draw.colorHex(rgb);
	//   rgbColor.value = rgb;
	//   rgbColor.style.backgroundColor = hex;
	//   hexColor.value = hex;
	//   hexColor.style.backgroundColor = hex;
	// }
	// function toHSV(x,y){
	//   var h,s;
	//   h = Math.floor(Math.asin(y/Math.sqrt(x*x + y*y))*180/Math.PI);
	//   s = Math.sqrt(x*x + y*y)*2/can.width;
	//   return {
	//     h: h,
	//     s: s
	//   }
	// }
	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=colorBoardDraw.js.map