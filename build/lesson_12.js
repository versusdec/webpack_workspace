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

var _accordionMenuCreator = __webpack_require__(39);

var _handler = __webpack_require__(40);

var accMenu = document.querySelectorAll('.accordion-menu');

var myArr = [{
    title: "Item 1",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
}, {
    title: "Item 2",
    content: "Aliquam quidem quod odio dolore voluptatibus deleniti minus unde"
}, {
    title: "Item 3",
    content: "facere ab, quasi possimus, ipsa officiis, nostrum illo recusandae ratione. "
}, {
    title: "Item 4",
    content: "Fugiat, praesentium animi?"
}];

accMenu.forEach(function (item) {
    (0, _accordionMenuCreator.accordionMenuCreator)(item, myArr);
    (0, _handler.accordionHandler)(item);
});

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
exports.accordionMenuCreator = accordionMenuCreator;
function accordionMenuCreator(place, arr) {
    var ACCORDION_MENU_CLASS = 'accordion-menu';
    var MENU_ITEM_CLASS = ACCORDION_MENU_CLASS + '-item';
    var MENU_HEADER_CLASS = ACCORDION_MENU_CLASS + '__header';
    var MENU_CONTENT_CLASS = ACCORDION_MENU_CLASS + '__content';
    var arrowDown = '<i class="arrow material-icons md-48">keyboard_arrow_down</i>';

    function render(arr) {
        var menuItem = document.createElement('div');
        var menuHeader = document.createElement('div');
        var menuContent = document.createElement('div');
        menuItem.classList.add(MENU_ITEM_CLASS);
        menuHeader.classList.add(MENU_HEADER_CLASS);
        menuHeader.textContent = arr.title;
        menuHeader.innerHTML = arr.title + arrowDown;
        menuContent.classList.add(MENU_CONTENT_CLASS);
        menuContent.textContent = arr.content;

        place.appendChild(menuItem);
        menuItem.appendChild(menuHeader);
        menuItem.appendChild(menuContent);
    }

    arr.forEach(function (element) {
        render(element);
    });
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordionHandler = accordionHandler;
function accordionHandler(menu) {
    var menuItems = Array.from(menu.querySelectorAll('.accordion-menu__header'));
    var TRIANGLE_ACTIVE = 'arrow-enabled';
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
            menuContent.style.paddingTop = '';
            menuContent.style.paddingBottom = '';
        } else {
            menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
            menuContent.style.paddingTop = '30px';
            menuContent.style.paddingBottom = '30px';
        }
    }

    function activateTriangle(item) {
        var triangle = item.querySelector('.arrow');
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