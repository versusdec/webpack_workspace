/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);

var _accordeonMenu = __webpack_require__(39);

var accMenus = document.querySelectorAll('.accordion-menu');

for (var i = 0; i < accMenus.length; i++) {
    (0, _accordeonMenu.accordeonMenu)(accMenus[i]);
}

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordeonMenu = accordeonMenu;
function accordeonMenu(menu) {
    var menuItems = Array.from(menu.querySelectorAll('.accordion-menu__header'));
    var TRIANGLE_ACTIVE = 'triangle-enabled';
    var activeMenu = void 0;

    eventHandlers();

    function eventHandlers() {
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', function () {
                enableMenuItem(this);
            });
        }
    }

    function enableMenuItem(item) {
        toggleOff(item);
        showContent(item);
        if (activeMenu !== item) {
            activeMenu = item;
        } else {
            activeMenu = undefined;
        }
    }

    function showContent(item) {
        activateTriangle(item);
        var menuContent = item.nextElementSibling;
        if (menuContent.style.maxHeight) {
            menuContent.style.maxHeight = null;
            item.style.background = '';
        } else {
            menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
            item.style.background = '#1987b3';
        }
    }

    function activateTriangle(item) {
        var triangle = item.querySelector('.accordion-menu__header_triangle');
        triangle.classList.toggle(TRIANGLE_ACTIVE);
    }

    function toggleOff(item) {
        if (activeMenu !== undefined && activeMenu !== item) {
            showContent(activeMenu);
        }
    }
}

/***/ })

/******/ });