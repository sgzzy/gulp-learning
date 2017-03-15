/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("/**\n * Created by Administrator on 2016/11/14.\n */\n/**\n * Created by Administrator on 2016/11/14.\n */\nimport { open, close, } from './../utils/js';\nimport $ from './../libs/jquery/jquery-3.1.1.js';\nconst click = $('.lesson');\nconst list = $('.list');\nconst len = list.length;\nlet active = null;\nlet timer = null;\nfor (let i = 0; i < len; i++) {\n  click[i].addEventListener('click', onclick);\n}\n\n/**\n *\n * @param {any} event\n * @returns\n */\nfunction onclick(e) {\n  const oThis = this;\n  let target = oThis.children()[1];\n  const listHeight = $(target.children()[0]).css('height');\n  const length = target.children.length;\n  const time = 1000;\n  const closetime = 500;\n  let height,\n    result,\n    pro = 'height';\n  if (e.target != oThis && e.target != $(oThis).children()[0]) {\n    return;\n  }\n  if (active && active == oThis) {\n    close(target, closetime, pro);\n    setTimeout(function() {\n      active = null;\n    }, closetime);\n  } else if (active && active != oThis) {\n    target = $(active).children()[1];\n    close(target, closetime, pro);\n    setTimeout(function() {\n      active = oThis;\n      active.className = 'lesson active';\n      target = $(active).children()[1];\n      height = $(target).css('height');\n      result = (listHeight + 1) * length;\n      open(target, height, result, time, pro);\n    }, closetime);\n  } else if (active == null) {\n    active = oThis;\n    active.className = 'lesson active';\n    target = $(active).children()[1];\n    height = $(target).css('height');\n    result = (listHeight + 1) * length;\n    open(target, height, result, time, pro);\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvdmlld3MvaW5kZXguanM/MmYzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGVBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMTEvMTQuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMTEvMTQuXG4gKi9cbmltcG9ydCB7IG9wZW4sIGNsb3NlLCB9IGZyb20gJy4vLi4vdXRpbHMvanMnO1xuaW1wb3J0ICQgZnJvbSAnLi8uLi9saWJzL2pxdWVyeS9qcXVlcnktMy4xLjEuanMnO1xuY29uc3QgY2xpY2sgPSAkKCcubGVzc29uJyk7XG5jb25zdCBsaXN0ID0gJCgnLmxpc3QnKTtcbmNvbnN0IGxlbiA9IGxpc3QubGVuZ3RoO1xubGV0IGFjdGl2ZSA9IG51bGw7XG5sZXQgdGltZXIgPSBudWxsO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICBjbGlja1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2FueX0gZXZlbnRcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIG9uY2xpY2soZSkge1xuICBjb25zdCBvVGhpcyA9IHRoaXM7XG4gIGxldCB0YXJnZXQgPSBvVGhpcy5jaGlsZHJlbigpWzFdO1xuICBjb25zdCBsaXN0SGVpZ2h0ID0gJCh0YXJnZXQuY2hpbGRyZW4oKVswXSkuY3NzKCdoZWlnaHQnKTtcbiAgY29uc3QgbGVuZ3RoID0gdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgY29uc3QgdGltZSA9IDEwMDA7XG4gIGNvbnN0IGNsb3NldGltZSA9IDUwMDtcbiAgbGV0IGhlaWdodCxcbiAgICByZXN1bHQsXG4gICAgcHJvID0gJ2hlaWdodCc7XG4gIGlmIChlLnRhcmdldCAhPSBvVGhpcyAmJiBlLnRhcmdldCAhPSAkKG9UaGlzKS5jaGlsZHJlbigpWzBdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhY3RpdmUgJiYgYWN0aXZlID09IG9UaGlzKSB7XG4gICAgY2xvc2UodGFyZ2V0LCBjbG9zZXRpbWUsIHBybyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGFjdGl2ZSA9IG51bGw7XG4gICAgfSwgY2xvc2V0aW1lKTtcbiAgfSBlbHNlIGlmIChhY3RpdmUgJiYgYWN0aXZlICE9IG9UaGlzKSB7XG4gICAgdGFyZ2V0ID0gJChhY3RpdmUpLmNoaWxkcmVuKClbMV07XG4gICAgY2xvc2UodGFyZ2V0LCBjbG9zZXRpbWUsIHBybyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGFjdGl2ZSA9IG9UaGlzO1xuICAgICAgYWN0aXZlLmNsYXNzTmFtZSA9ICdsZXNzb24gYWN0aXZlJztcbiAgICAgIHRhcmdldCA9ICQoYWN0aXZlKS5jaGlsZHJlbigpWzFdO1xuICAgICAgaGVpZ2h0ID0gJCh0YXJnZXQpLmNzcygnaGVpZ2h0Jyk7XG4gICAgICByZXN1bHQgPSAobGlzdEhlaWdodCArIDEpICogbGVuZ3RoO1xuICAgICAgb3Blbih0YXJnZXQsIGhlaWdodCwgcmVzdWx0LCB0aW1lLCBwcm8pO1xuICAgIH0sIGNsb3NldGltZSk7XG4gIH0gZWxzZSBpZiAoYWN0aXZlID09IG51bGwpIHtcbiAgICBhY3RpdmUgPSBvVGhpcztcbiAgICBhY3RpdmUuY2xhc3NOYW1lID0gJ2xlc3NvbiBhY3RpdmUnO1xuICAgIHRhcmdldCA9ICQoYWN0aXZlKS5jaGlsZHJlbigpWzFdO1xuICAgIGhlaWdodCA9ICQodGFyZ2V0KS5jc3MoJ2hlaWdodCcpO1xuICAgIHJlc3VsdCA9IChsaXN0SGVpZ2h0ICsgMSkgKiBsZW5ndGg7XG4gICAgb3Blbih0YXJnZXQsIGhlaWdodCwgcmVzdWx0LCB0aW1lLCBwcm8pO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9qcy92aWV3cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);