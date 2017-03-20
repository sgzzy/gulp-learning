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
	//  * Created by Administrator on 2016/12/1.
	//  */
	// var Slider =require('slider');
	// var slider = document.getElementsByClassName('slider-list')[0];
	// var prev = document.getElementsByClassName('pre')[0];
	// var next = document.getElementsByClassName('next')[0];
	// var banner = document.getElementsByClassName("slider-content")[0];
	// var sliderItem = document.getElementsByClassName('slider-list-item');
	// var index = sliderItem.length;
	// var slide =  {
	//   "banner" : banner,
	//   "slider" : slider,
	//   "sliderItem" : sliderItem,
	//   "index" : index,
	//   "isTrigger" : true,
	//   "direction" : false,
	//   "loop" : true
	// };
	// var obj = new Slider(slide);
	// obj.trigger();
	// prev.onclick = function (){
	//   obj.pause();
	//   obj.prev();
	// };
	// next.onclick = function (){
	//   obj.pause();
	//   obj.next();
	// };
	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=slider.js.map