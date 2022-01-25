/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/scss/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("(function($) { // Begin jQuery\n\n  /* Индекс слайда по умолчанию */\n  var slideIndex = 1;\n  showSlides(slideIndex);\n  \n  document.getElementById(\"nextSlide\").addEventListener(\"click\", plusSlide);\n  /* Функция увеличивает индекс на 1, показывает следующй слайд*/\n  function plusSlide() {\n      showSlides(slideIndex += 1);\n  }\n  \n  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/\n  function minusSlide() {\n      showSlides(slideIndex -= 1);  \n  }\n  \n  /* Устанавливает текущий слайд */\n  function currentSlide(n) {\n      showSlides(slideIndex = n);\n  }\n  \n  /* Основная функция слайдера */\n  function showSlides(n) {\n      var i;\n      var slides = document.getElementsByClassName(\"item\");\n      var dots = document.getElementsByClassName(\"slider\");\n      console.log(dots);\n      if (n > slides.length) {\n        slideIndex = 1\n      }\n      if (n < 1) {\n          slideIndex = slides.length\n      }\n      for (i = 0; i < slides.length; i++) {\n          slides[i].style.display = \"none\";\n      }\n      for (i = 0; i < dots.length; i++) {\n          dots[i].className = dots[i].className.replace(\" active\", \"\");\n      }\n      slides[slideIndex - 1].style.display = \"block\";\n      dots[slideIndex - 1].className += \" active\";\n  }\n  \n  \n  (() => {\n      let $ = el => document.querySelector(el);\n      \n      $(\".animenu__btn\").addEventListener(\"click\", function(){\n        this.classList.toggle(\"animenu__btn--active\")\n        $(\".animenu__nav\").classList.toggle(\"animenu__nav--active\")\n      });\n    })()\n    \n    \n  \n    $j(document).ready(function () {\n      size_li = $j(\"#myList li\").size();\n      x=9;\n      $j('#myList li:lt('+x+')').show();\n      $j('#loadMore').click(function () {\n          x= (x+3 <= size_li) ? x+3 : size_li;\n          $j('#myList li:lt('+x+')').show();\n      });\n  });\n  \n  function openForm() {\n      document.getElementById(\"myForm\").style.display = \"block\";\n  }\n  \n  function closeForm() {\n      document.getElementById(\"myForm\").style.display = \"none\";\n  }\n  \n  \n      $(function() { // DOM ready\n        // If a link has a dropdown, add sub menu toggle.\n        $('nav ul li a:not(:only-child)').click(function(e) {\n          $(this).siblings('.nav-dropdown').toggle();\n          // Close one dropdown when selecting another\n          $('.nav-dropdown').not($(this).siblings()).hide();\n          e.stopPropagation();\n        });\n        // Clicking away from dropdown will remove the dropdown class\n        $('html').click(function() {\n          $('.nav-dropdown').hide();\n        });\n        // Toggle open and close nav styles on click\n        $('#nav-toggle').click(function() {\n          $('nav ul').slideToggle();\n        });\n        // Hamburger to X toggle\n        $('#nav-toggle').on('click', function() {\n          this.classList.toggle('active');\n        });\n      }); // end DOM ready\n    })(jQuery); // end jQuery\n\n//# sourceURL=webpack://test/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;