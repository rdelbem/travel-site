/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundled.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ \"./app/assets/styles/styles.scss\");\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/RevealOnScroll */ \"./app/assets/scripts/modules/RevealOnScroll.js\");\n/* harmony import */ var _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/StickyHeader */ \"./app/assets/scripts/modules/StickyHeader.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nnew _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nnew _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"](document.querySelectorAll(\".feature-item\"), 75);\r\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"](document.querySelectorAll(\".testimonial\"), 60);\r\n\r\nlet modal;\r\n\r\ndocument.querySelectorAll(\".open-modal\").forEach((el) => {\r\n  el.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (typeof modal == \"undefined\") {\r\n      Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./modules/Modal */ \"./app/assets/scripts/modules/Modal.js\"))\r\n        .then((x) => {\r\n          modal = new x.default();\r\n          setTimeout(() => modal.openTheModal(), 20);\r\n        })\r\n        .catch(() => console.log(\"err\"));\r\n    } else {\r\n      modal.openTheModal();\r\n    }\r\n  });\r\n});\r\n\r\nif (false) {}\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MobileMenu {\r\n  constructor() {\r\n    this.menuIcon = document.querySelector(\".site-header__menu-icon\");\r\n\r\n    this.menuContent = document.querySelector(\".site-header__menu-content\");\r\n\r\n    this.siteHeader = document.querySelector(\".site-header\");\r\n\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    this.menuIcon.addEventListener(\"click\", () => this.toggleTheMenu());\r\n  }\r\n\r\n  toggleTheMenu() {\r\n    this.menuContent.classList.toggle(\"site-header__menu-content--is-visible\");\r\n    this.siteHeader.classList.toggle(\"site-header--is-expanded\");\r\n    this.menuIcon.classList.toggle(\"site-header__menu-icon--close-x\");\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/RevealOnScroll.js":
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/RevealOnScroll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass RevealOnScroll {\r\n  constructor(els, thresholdPercent) {\r\n    this.thresholdPercent = thresholdPercent;\r\n    this.itemsToReveal = els;\r\n    this.browserHeight = window.innerHeight;\r\n    this.hideInitially();\r\n    this.scrollThrottle = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.calcCaller, 200).bind(this);\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    window.addEventListener(\"scroll\", this.scrollThrottle);\r\n    window.addEventListener(\r\n      \"resize\",\r\n      lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => {\r\n        console.log(\"Resize just ran\");\r\n        this.browserHeight = window.innerHeight;\r\n      }, 333)\r\n    );\r\n  }\r\n\r\n  calcCaller() {\r\n    console.log(\"Scroll function ran\");\r\n    this.itemsToReveal.forEach((el) => {\r\n      if (el.isRevealed == false) {\r\n        this.calculateIfScrolledTo(el);\r\n      }\r\n    });\r\n  }\r\n\r\n  calculateIfScrolledTo(el) {\r\n    if (window.scrollY + this.browserHeight > el.offsetTop) {\r\n      console.log(\"Element was calculated\");\r\n      let scrollPercent =\r\n        (el.getBoundingClientRect().top / this.browserHeight) * 100;\r\n      if (scrollPercent < this.thresholdPercent) {\r\n        el.classList.add(\"reveal-item--is-visible\");\r\n        el.isRevealed = true;\r\n        if (el.isLastItem) {\r\n          window.removeEventListener(\"scroll\", this.scrollThrottle);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  hideInitially() {\r\n    this.itemsToReveal.forEach((el) => {\r\n      el.classList.add(\"reveal-item\");\r\n      el.isRevealed = false;\r\n    });\r\n    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RevealOnScroll);\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/RevealOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/StickyHeader.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/StickyHeader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass StickyHeader {\r\n  constructor() {\r\n    this.siteHeader = document.querySelector(\".site-header\");\r\n    this.pageSections = document.querySelectorAll(\".page-section\");\r\n    this.browserHeight = window.innerHeight;\r\n    this.previousScrollY = window.scrollY;\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    window.addEventListener(\r\n      \"scroll\",\r\n      lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(() => this.runOnScroll(), 200)\r\n    );\r\n    window.addEventListener(\r\n      \"resize\",\r\n      lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => {\r\n        this.browserHeight = window.innerHeight;\r\n      }, 333)\r\n    );\r\n  }\r\n\r\n  runOnScroll() {\r\n    this.determineScrollDirection();\r\n\r\n    if (window.scrollY > 60) {\r\n      this.siteHeader.classList.add(\"site-header--dark\");\r\n    } else {\r\n      this.siteHeader.classList.remove(\"site-header--dark\");\r\n    }\r\n\r\n    this.pageSections.forEach((el) => this.calcSection(el));\r\n  }\r\n\r\n  determineScrollDirection() {\r\n    if (window.scrollY > this.previousScrollY) {\r\n      this.scrollDirection = \"down\";\r\n    } else {\r\n      this.scrollDirection = \"up\";\r\n    }\r\n    this.previousScrollY = window.scrollY;\r\n  }\r\n\r\n  calcSection(el) {\r\n    if (\r\n      window.scrollY + this.browserHeight > el.offsetTop &&\r\n      window.scrollY < el.offsetTop + el.offsetHeight\r\n    ) {\r\n      let scrollPercent =\r\n        (el.getBoundingClientRect().top / this.browserHeight) * 100;\r\n      if (\r\n        (scrollPercent < 18 &&\r\n          scrollPercent > -0.1 &&\r\n          this.scrollDirection == \"down\") ||\r\n        (scrollPercent < 33 && this.scrollDirection == \"up\")\r\n      ) {\r\n        let matchingLink = el.getAttribute(\"data-matching-link\");\r\n        document\r\n          .querySelectorAll(`.primary-nav a:not(${matchingLink})`)\r\n          .forEach((el) => el.classList.remove(\"is-current-link\"));\r\n        document.querySelector(matchingLink).classList.add(\"is-current-link\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StickyHeader);\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/StickyHeader.js?");

/***/ }),

/***/ "./app/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./app/assets/styles/styles.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack:///./app/assets/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(window, factory) {\n\tvar lazySizes = factory(window, window.document, Date);\n\twindow.lazySizes = lazySizes;\n\tif( true && module.exports){\n\t\tmodule.exports = lazySizes;\n\t}\n}(typeof window != 'undefined' ?\n      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost\n\t'use strict';\n\t/*jshint eqnull:true */\n\n\tvar lazysizes, lazySizesCfg;\n\n\t(function(){\n\t\tvar prop;\n\n\t\tvar lazySizesDefaults = {\n\t\t\tlazyClass: 'lazyload',\n\t\t\tloadedClass: 'lazyloaded',\n\t\t\tloadingClass: 'lazyloading',\n\t\t\tpreloadClass: 'lazypreload',\n\t\t\terrorClass: 'lazyerror',\n\t\t\t//strictClass: 'lazystrict',\n\t\t\tautosizesClass: 'lazyautosizes',\n\t\t\tsrcAttr: 'data-src',\n\t\t\tsrcsetAttr: 'data-srcset',\n\t\t\tsizesAttr: 'data-sizes',\n\t\t\t//preloadAfterLoad: false,\n\t\t\tminSize: 40,\n\t\t\tcustomMedia: {},\n\t\t\tinit: true,\n\t\t\texpFactor: 1.5,\n\t\t\thFac: 0.8,\n\t\t\tloadMode: 2,\n\t\t\tloadHidden: true,\n\t\t\tricTimeout: 0,\n\t\t\tthrottleDelay: 125,\n\t\t};\n\n\t\tlazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};\n\n\t\tfor(prop in lazySizesDefaults){\n\t\t\tif(!(prop in lazySizesCfg)){\n\t\t\t\tlazySizesCfg[prop] = lazySizesDefaults[prop];\n\t\t\t}\n\t\t}\n\t})();\n\n\tif (!document || !document.getElementsByClassName) {\n\t\treturn {\n\t\t\tinit: function () {},\n\t\t\tcfg: lazySizesCfg,\n\t\t\tnoSupport: true,\n\t\t};\n\t}\n\n\tvar docElem = document.documentElement;\n\n\tvar supportPicture = window.HTMLPictureElement;\n\n\tvar _addEventListener = 'addEventListener';\n\n\tvar _getAttribute = 'getAttribute';\n\n\t/**\n\t * Update to bind to window because 'this' becomes null during SSR\n\t * builds.\n\t */\n\tvar addEventListener = window[_addEventListener].bind(window);\n\n\tvar setTimeout = window.setTimeout;\n\n\tvar requestAnimationFrame = window.requestAnimationFrame || setTimeout;\n\n\tvar requestIdleCallback = window.requestIdleCallback;\n\n\tvar regPicture = /^picture$/i;\n\n\tvar loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];\n\n\tvar regClassCache = {};\n\n\tvar forEach = Array.prototype.forEach;\n\n\tvar hasClass = function(ele, cls) {\n\t\tif(!regClassCache[cls]){\n\t\t\tregClassCache[cls] = new RegExp('(\\\\s|^)'+cls+'(\\\\s|$)');\n\t\t}\n\t\treturn regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];\n\t};\n\n\tvar addClass = function(ele, cls) {\n\t\tif (!hasClass(ele, cls)){\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);\n\t\t}\n\t};\n\n\tvar removeClass = function(ele, cls) {\n\t\tvar reg;\n\t\tif ((reg = hasClass(ele,cls))) {\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));\n\t\t}\n\t};\n\n\tvar addRemoveLoadEvents = function(dom, fn, add){\n\t\tvar action = add ? _addEventListener : 'removeEventListener';\n\t\tif(add){\n\t\t\taddRemoveLoadEvents(dom, fn);\n\t\t}\n\t\tloadEvents.forEach(function(evt){\n\t\t\tdom[action](evt, fn);\n\t\t});\n\t};\n\n\tvar triggerEvent = function(elem, name, detail, noBubbles, noCancelable){\n\t\tvar event = document.createEvent('Event');\n\n\t\tif(!detail){\n\t\t\tdetail = {};\n\t\t}\n\n\t\tdetail.instance = lazysizes;\n\n\t\tevent.initEvent(name, !noBubbles, !noCancelable);\n\n\t\tevent.detail = detail;\n\n\t\telem.dispatchEvent(event);\n\t\treturn event;\n\t};\n\n\tvar updatePolyfill = function (el, full){\n\t\tvar polyfill;\n\t\tif( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){\n\t\t\tif(full && full.src && !el[_getAttribute]('srcset')){\n\t\t\t\tel.setAttribute('srcset', full.src);\n\t\t\t}\n\t\t\tpolyfill({reevaluate: true, elements: [el]});\n\t\t} else if(full && full.src){\n\t\t\tel.src = full.src;\n\t\t}\n\t};\n\n\tvar getCSS = function (elem, style){\n\t\treturn (getComputedStyle(elem, null) || {})[style];\n\t};\n\n\tvar getWidth = function(elem, parent, width){\n\t\twidth = width || elem.offsetWidth;\n\n\t\twhile(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){\n\t\t\twidth =  parent.offsetWidth;\n\t\t\tparent = parent.parentNode;\n\t\t}\n\n\t\treturn width;\n\t};\n\n\tvar rAF = (function(){\n\t\tvar running, waiting;\n\t\tvar firstFns = [];\n\t\tvar secondFns = [];\n\t\tvar fns = firstFns;\n\n\t\tvar run = function(){\n\t\t\tvar runFns = fns;\n\n\t\t\tfns = firstFns.length ? secondFns : firstFns;\n\n\t\t\trunning = true;\n\t\t\twaiting = false;\n\n\t\t\twhile(runFns.length){\n\t\t\t\trunFns.shift()();\n\t\t\t}\n\n\t\t\trunning = false;\n\t\t};\n\n\t\tvar rafBatch = function(fn, queue){\n\t\t\tif(running && !queue){\n\t\t\t\tfn.apply(this, arguments);\n\t\t\t} else {\n\t\t\t\tfns.push(fn);\n\n\t\t\t\tif(!waiting){\n\t\t\t\t\twaiting = true;\n\t\t\t\t\t(document.hidden ? setTimeout : requestAnimationFrame)(run);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\trafBatch._lsFlush = run;\n\n\t\treturn rafBatch;\n\t})();\n\n\tvar rAFIt = function(fn, simple){\n\t\treturn simple ?\n\t\t\tfunction() {\n\t\t\t\trAF(fn);\n\t\t\t} :\n\t\t\tfunction(){\n\t\t\t\tvar that = this;\n\t\t\t\tvar args = arguments;\n\t\t\t\trAF(function(){\n\t\t\t\t\tfn.apply(that, args);\n\t\t\t\t});\n\t\t\t}\n\t\t;\n\t};\n\n\tvar throttle = function(fn){\n\t\tvar running;\n\t\tvar lastTime = 0;\n\t\tvar gDelay = lazySizesCfg.throttleDelay;\n\t\tvar rICTimeout = lazySizesCfg.ricTimeout;\n\t\tvar run = function(){\n\t\t\trunning = false;\n\t\t\tlastTime = Date.now();\n\t\t\tfn();\n\t\t};\n\t\tvar idleCallback = requestIdleCallback && rICTimeout > 49 ?\n\t\t\tfunction(){\n\t\t\t\trequestIdleCallback(run, {timeout: rICTimeout});\n\n\t\t\t\tif(rICTimeout !== lazySizesCfg.ricTimeout){\n\t\t\t\t\trICTimeout = lazySizesCfg.ricTimeout;\n\t\t\t\t}\n\t\t\t} :\n\t\t\trAFIt(function(){\n\t\t\t\tsetTimeout(run);\n\t\t\t}, true)\n\t\t;\n\n\t\treturn function(isPriority){\n\t\t\tvar delay;\n\n\t\t\tif((isPriority = isPriority === true)){\n\t\t\t\trICTimeout = 33;\n\t\t\t}\n\n\t\t\tif(running){\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\trunning =  true;\n\n\t\t\tdelay = gDelay - (Date.now() - lastTime);\n\n\t\t\tif(delay < 0){\n\t\t\t\tdelay = 0;\n\t\t\t}\n\n\t\t\tif(isPriority || delay < 9){\n\t\t\t\tidleCallback();\n\t\t\t} else {\n\t\t\t\tsetTimeout(idleCallback, delay);\n\t\t\t}\n\t\t};\n\t};\n\n\t//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html\n\tvar debounce = function(func) {\n\t\tvar timeout, timestamp;\n\t\tvar wait = 99;\n\t\tvar run = function(){\n\t\t\ttimeout = null;\n\t\t\tfunc();\n\t\t};\n\t\tvar later = function() {\n\t\t\tvar last = Date.now() - timestamp;\n\n\t\t\tif (last < wait) {\n\t\t\t\tsetTimeout(later, wait - last);\n\t\t\t} else {\n\t\t\t\t(requestIdleCallback || run)(run);\n\t\t\t}\n\t\t};\n\n\t\treturn function() {\n\t\t\ttimestamp = Date.now();\n\n\t\t\tif (!timeout) {\n\t\t\t\ttimeout = setTimeout(later, wait);\n\t\t\t}\n\t\t};\n\t};\n\n\tvar loader = (function(){\n\t\tvar preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;\n\n\t\tvar eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;\n\n\t\tvar regImg = /^img$/i;\n\t\tvar regIframe = /^iframe$/i;\n\n\t\tvar supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));\n\n\t\tvar shrinkExpand = 0;\n\t\tvar currentExpand = 0;\n\n\t\tvar isLoading = 0;\n\t\tvar lowRuns = -1;\n\n\t\tvar resetPreloading = function(e){\n\t\t\tisLoading--;\n\t\t\tif(!e || isLoading < 0 || !e.target){\n\t\t\t\tisLoading = 0;\n\t\t\t}\n\t\t};\n\n\t\tvar isVisible = function (elem) {\n\t\t\tif (isBodyHidden == null) {\n\t\t\t\tisBodyHidden = getCSS(document.body, 'visibility') == 'hidden';\n\t\t\t}\n\n\t\t\treturn isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');\n\t\t};\n\n\t\tvar isNestedVisible = function(elem, elemExpand){\n\t\t\tvar outerRect;\n\t\t\tvar parent = elem;\n\t\t\tvar visible = isVisible(elem);\n\n\t\t\teLtop -= elemExpand;\n\t\t\teLbottom += elemExpand;\n\t\t\teLleft -= elemExpand;\n\t\t\teLright += elemExpand;\n\n\t\t\twhile(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){\n\t\t\t\tvisible = ((getCSS(parent, 'opacity') || 1) > 0);\n\n\t\t\t\tif(visible && getCSS(parent, 'overflow') != 'visible'){\n\t\t\t\t\touterRect = parent.getBoundingClientRect();\n\t\t\t\t\tvisible = eLright > outerRect.left &&\n\t\t\t\t\t\teLleft < outerRect.right &&\n\t\t\t\t\t\teLbottom > outerRect.top - 1 &&\n\t\t\t\t\t\teLtop < outerRect.bottom + 1\n\t\t\t\t\t;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn visible;\n\t\t};\n\n\t\tvar checkElements = function() {\n\t\t\tvar eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,\n\t\t\t\tbeforeExpandVal, defaultExpand, preloadExpand, hFac;\n\t\t\tvar lazyloadElems = lazysizes.elements;\n\n\t\t\tif((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){\n\n\t\t\t\ti = 0;\n\n\t\t\t\tlowRuns++;\n\n\t\t\t\tfor(; i < eLlen; i++){\n\n\t\t\t\t\tif(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}\n\n\t\t\t\t\tif(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}\n\n\t\t\t\t\tif(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){\n\t\t\t\t\t\telemExpand = currentExpand;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!defaultExpand) {\n\t\t\t\t\t\tdefaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?\n\t\t\t\t\t\t\tdocElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :\n\t\t\t\t\t\t\tlazySizesCfg.expand;\n\n\t\t\t\t\t\tlazysizes._defEx = defaultExpand;\n\n\t\t\t\t\t\tpreloadExpand = defaultExpand * lazySizesCfg.expFactor;\n\t\t\t\t\t\thFac = lazySizesCfg.hFac;\n\t\t\t\t\t\tisBodyHidden = null;\n\n\t\t\t\t\t\tif(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){\n\t\t\t\t\t\t\tcurrentExpand = preloadExpand;\n\t\t\t\t\t\t\tlowRuns = 0;\n\t\t\t\t\t\t} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){\n\t\t\t\t\t\t\tcurrentExpand = defaultExpand;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tcurrentExpand = shrinkExpand;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif(beforeExpandVal !== elemExpand){\n\t\t\t\t\t\teLvW = innerWidth + (elemExpand * hFac);\n\t\t\t\t\t\telvH = innerHeight + elemExpand;\n\t\t\t\t\t\telemNegativeExpand = elemExpand * -1;\n\t\t\t\t\t\tbeforeExpandVal = elemExpand;\n\t\t\t\t\t}\n\n\t\t\t\t\trect = lazyloadElems[i].getBoundingClientRect();\n\n\t\t\t\t\tif ((eLbottom = rect.bottom) >= elemNegativeExpand &&\n\t\t\t\t\t\t(eLtop = rect.top) <= elvH &&\n\t\t\t\t\t\t(eLright = rect.right) >= elemNegativeExpand * hFac &&\n\t\t\t\t\t\t(eLleft = rect.left) <= eLvW &&\n\t\t\t\t\t\t(eLbottom || eLright || eLleft || eLtop) &&\n\t\t\t\t\t\t(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&\n\t\t\t\t\t\t((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){\n\t\t\t\t\t\tunveilElement(lazyloadElems[i]);\n\t\t\t\t\t\tloadedSomething = true;\n\t\t\t\t\t\tif(isLoading > 9){break;}\n\t\t\t\t\t} else if(!loadedSomething && isCompleted && !autoLoadElem &&\n\t\t\t\t\t\tisLoading < 4 && lowRuns < 4 && loadMode > 2 &&\n\t\t\t\t\t\t(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&\n\t\t\t\t\t\t(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){\n\t\t\t\t\t\tautoLoadElem = preloadElems[0] || lazyloadElems[i];\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif(autoLoadElem && !loadedSomething){\n\t\t\t\t\tunveilElement(autoLoadElem);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar throttledCheckElements = throttle(checkElements);\n\n\t\tvar switchLoadingClass = function(e){\n\t\t\tvar elem = e.target;\n\n\t\t\tif (elem._lazyCache) {\n\t\t\t\tdelete elem._lazyCache;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tresetPreloading(e);\n\t\t\taddClass(elem, lazySizesCfg.loadedClass);\n\t\t\tremoveClass(elem, lazySizesCfg.loadingClass);\n\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass);\n\t\t\ttriggerEvent(elem, 'lazyloaded');\n\t\t};\n\t\tvar rafedSwitchLoadingClass = rAFIt(switchLoadingClass);\n\t\tvar rafSwitchLoadingClass = function(e){\n\t\t\trafedSwitchLoadingClass({target: e.target});\n\t\t};\n\n\t\tvar changeIframeSrc = function(elem, src){\n\t\t\ttry {\n\t\t\t\telem.contentWindow.location.replace(src);\n\t\t\t} catch(e){\n\t\t\t\telem.src = src;\n\t\t\t}\n\t\t};\n\n\t\tvar handleSources = function(source){\n\t\t\tvar customMedia;\n\n\t\t\tvar sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);\n\n\t\t\tif( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){\n\t\t\t\tsource.setAttribute('media', customMedia);\n\t\t\t}\n\n\t\t\tif(sourceSrcset){\n\t\t\t\tsource.setAttribute('srcset', sourceSrcset);\n\t\t\t}\n\t\t};\n\n\t\tvar lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){\n\t\t\tvar src, srcset, parent, isPicture, event, firesLoad;\n\n\t\t\tif(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){\n\n\t\t\t\tif(sizes){\n\t\t\t\t\tif(isAuto){\n\t\t\t\t\t\taddClass(elem, lazySizesCfg.autosizesClass);\n\t\t\t\t\t} else {\n\t\t\t\t\t\telem.setAttribute('sizes', sizes);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tsrcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);\n\t\t\t\tsrc = elem[_getAttribute](lazySizesCfg.srcAttr);\n\n\t\t\t\tif(isImg) {\n\t\t\t\t\tparent = elem.parentNode;\n\t\t\t\t\tisPicture = parent && regPicture.test(parent.nodeName || '');\n\t\t\t\t}\n\n\t\t\t\tfiresLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));\n\n\t\t\t\tevent = {target: elem};\n\n\t\t\t\taddClass(elem, lazySizesCfg.loadingClass);\n\n\t\t\t\tif(firesLoad){\n\t\t\t\t\tclearTimeout(resetPreloadingTimer);\n\t\t\t\t\tresetPreloadingTimer = setTimeout(resetPreloading, 2500);\n\t\t\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass, true);\n\t\t\t\t}\n\n\t\t\t\tif(isPicture){\n\t\t\t\t\tforEach.call(parent.getElementsByTagName('source'), handleSources);\n\t\t\t\t}\n\n\t\t\t\tif(srcset){\n\t\t\t\t\telem.setAttribute('srcset', srcset);\n\t\t\t\t} else if(src && !isPicture){\n\t\t\t\t\tif(regIframe.test(elem.nodeName)){\n\t\t\t\t\t\tchangeIframeSrc(elem, src);\n\t\t\t\t\t} else {\n\t\t\t\t\t\telem.src = src;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif(isImg && (srcset || isPicture)){\n\t\t\t\t\tupdatePolyfill(elem, {src: src});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(elem._lazyRace){\n\t\t\t\tdelete elem._lazyRace;\n\t\t\t}\n\t\t\tremoveClass(elem, lazySizesCfg.lazyClass);\n\n\t\t\trAF(function(){\n\t\t\t\t// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)\n\t\t\t\tvar isLoaded = elem.complete && elem.naturalWidth > 1;\n\n\t\t\t\tif( !firesLoad || isLoaded){\n\t\t\t\t\tif (isLoaded) {\n\t\t\t\t\t\taddClass(elem, 'ls-is-cached');\n\t\t\t\t\t}\n\t\t\t\t\tswitchLoadingClass(event);\n\t\t\t\t\telem._lazyCache = true;\n\t\t\t\t\tsetTimeout(function(){\n\t\t\t\t\t\tif ('_lazyCache' in elem) {\n\t\t\t\t\t\t\tdelete elem._lazyCache;\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 9);\n\t\t\t\t}\n\t\t\t\tif (elem.loading == 'lazy') {\n\t\t\t\t\tisLoading--;\n\t\t\t\t}\n\t\t\t}, true);\n\t\t});\n\n\t\tvar unveilElement = function (elem){\n\t\t\tif (elem._lazyRace) {return;}\n\t\t\tvar detail;\n\n\t\t\tvar isImg = regImg.test(elem.nodeName);\n\n\t\t\t//allow using sizes=\"auto\", but don't use. it's invalid. Use data-sizes=\"auto\" or a valid value for sizes instead (i.e.: sizes=\"80vw\")\n\t\t\tvar sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));\n\t\t\tvar isAuto = sizes == 'auto';\n\n\t\t\tif( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}\n\n\t\t\tdetail = triggerEvent(elem, 'lazyunveilread').detail;\n\n\t\t\tif(isAuto){\n\t\t\t\t autoSizer.updateElem(elem, true, elem.offsetWidth);\n\t\t\t}\n\n\t\t\telem._lazyRace = true;\n\t\t\tisLoading++;\n\n\t\t\tlazyUnveil(elem, detail, isAuto, sizes, isImg);\n\t\t};\n\n\t\tvar afterScroll = debounce(function(){\n\t\t\tlazySizesCfg.loadMode = 3;\n\t\t\tthrottledCheckElements();\n\t\t});\n\n\t\tvar altLoadmodeScrollListner = function(){\n\t\t\tif(lazySizesCfg.loadMode == 3){\n\t\t\t\tlazySizesCfg.loadMode = 2;\n\t\t\t}\n\t\t\tafterScroll();\n\t\t};\n\n\t\tvar onload = function(){\n\t\t\tif(isCompleted){return;}\n\t\t\tif(Date.now() - started < 999){\n\t\t\t\tsetTimeout(onload, 999);\n\t\t\t\treturn;\n\t\t\t}\n\n\n\t\t\tisCompleted = true;\n\n\t\t\tlazySizesCfg.loadMode = 3;\n\n\t\t\tthrottledCheckElements();\n\n\t\t\taddEventListener('scroll', altLoadmodeScrollListner, true);\n\t\t};\n\n\t\treturn {\n\t\t\t_: function(){\n\t\t\t\tstarted = Date.now();\n\n\t\t\t\tlazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);\n\t\t\t\tpreloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);\n\n\t\t\t\taddEventListener('scroll', throttledCheckElements, true);\n\n\t\t\t\taddEventListener('resize', throttledCheckElements, true);\n\n\t\t\t\taddEventListener('pageshow', function (e) {\n\t\t\t\t\tif (e.persisted) {\n\t\t\t\t\t\tvar loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);\n\n\t\t\t\t\t\tif (loadingElements.length && loadingElements.forEach) {\n\t\t\t\t\t\t\trequestAnimationFrame(function () {\n\t\t\t\t\t\t\t\tloadingElements.forEach( function (img) {\n\t\t\t\t\t\t\t\t\tif (img.complete) {\n\t\t\t\t\t\t\t\t\t\tunveilElement(img);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\tif(window.MutationObserver){\n\t\t\t\t\tnew MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );\n\t\t\t\t} else {\n\t\t\t\t\tdocElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);\n\t\t\t\t\tdocElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);\n\t\t\t\t\tsetInterval(throttledCheckElements, 999);\n\t\t\t\t}\n\n\t\t\t\taddEventListener('hashchange', throttledCheckElements, true);\n\n\t\t\t\t//, 'fullscreenchange'\n\t\t\t\t['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){\n\t\t\t\t\tdocument[_addEventListener](name, throttledCheckElements, true);\n\t\t\t\t});\n\n\t\t\t\tif((/d$|^c/.test(document.readyState))){\n\t\t\t\t\tonload();\n\t\t\t\t} else {\n\t\t\t\t\taddEventListener('load', onload);\n\t\t\t\t\tdocument[_addEventListener]('DOMContentLoaded', throttledCheckElements);\n\t\t\t\t\tsetTimeout(onload, 20000);\n\t\t\t\t}\n\n\t\t\t\tif(lazysizes.elements.length){\n\t\t\t\t\tcheckElements();\n\t\t\t\t\trAF._lsFlush();\n\t\t\t\t} else {\n\t\t\t\t\tthrottledCheckElements();\n\t\t\t\t}\n\t\t\t},\n\t\t\tcheckElems: throttledCheckElements,\n\t\t\tunveil: unveilElement,\n\t\t\t_aLSL: altLoadmodeScrollListner,\n\t\t};\n\t})();\n\n\n\tvar autoSizer = (function(){\n\t\tvar autosizesElems;\n\n\t\tvar sizeElement = rAFIt(function(elem, parent, event, width){\n\t\t\tvar sources, i, len;\n\t\t\telem._lazysizesWidth = width;\n\t\t\twidth += 'px';\n\n\t\t\telem.setAttribute('sizes', width);\n\n\t\t\tif(regPicture.test(parent.nodeName || '')){\n\t\t\t\tsources = parent.getElementsByTagName('source');\n\t\t\t\tfor(i = 0, len = sources.length; i < len; i++){\n\t\t\t\t\tsources[i].setAttribute('sizes', width);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(!event.detail.dataAttr){\n\t\t\t\tupdatePolyfill(elem, event.detail);\n\t\t\t}\n\t\t});\n\t\tvar getSizeElement = function (elem, dataAttr, width){\n\t\t\tvar event;\n\t\t\tvar parent = elem.parentNode;\n\n\t\t\tif(parent){\n\t\t\t\twidth = getWidth(elem, parent, width);\n\t\t\t\tevent = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});\n\n\t\t\t\tif(!event.defaultPrevented){\n\t\t\t\t\twidth = event.detail.width;\n\n\t\t\t\t\tif(width && width !== elem._lazysizesWidth){\n\t\t\t\t\t\tsizeElement(elem, parent, event, width);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar updateElementsSizes = function(){\n\t\t\tvar i;\n\t\t\tvar len = autosizesElems.length;\n\t\t\tif(len){\n\t\t\t\ti = 0;\n\n\t\t\t\tfor(; i < len; i++){\n\t\t\t\t\tgetSizeElement(autosizesElems[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tvar debouncedUpdateElementsSizes = debounce(updateElementsSizes);\n\n\t\treturn {\n\t\t\t_: function(){\n\t\t\t\tautosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);\n\t\t\t\taddEventListener('resize', debouncedUpdateElementsSizes);\n\t\t\t},\n\t\t\tcheckElems: debouncedUpdateElementsSizes,\n\t\t\tupdateElem: getSizeElement\n\t\t};\n\t})();\n\n\tvar init = function(){\n\t\tif(!init.i && document.getElementsByClassName){\n\t\t\tinit.i = true;\n\t\t\tautoSizer._();\n\t\t\tloader._();\n\t\t}\n\t};\n\n\tsetTimeout(function(){\n\t\tif(lazySizesCfg.init){\n\t\t\tinit();\n\t\t}\n\t});\n\n\tlazysizes = {\n\t\tcfg: lazySizesCfg,\n\t\tautoSizer: autoSizer,\n\t\tloader: loader,\n\t\tinit: init,\n\t\tuP: updatePolyfill,\n\t\taC: addClass,\n\t\trC: removeClass,\n\t\thC: hasClass,\n\t\tfire: triggerEvent,\n\t\tgW: getWidth,\n\t\trAF: rAF,\n\t};\n\n\treturn lazysizes;\n}\n));\n\n\n//# sourceURL=webpack:///./node_modules/lazysizes/lazysizes.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/lodash/debounce.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/throttle.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./app/assets/scripts/App.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/assets/scripts/App.js */\"./app/assets/scripts/App.js\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/scripts/App.js?");

/***/ })

/******/ });