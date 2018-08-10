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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(34);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Light = function () {
    function Light(target) {
        _classCallCheck(this, Light);

        this.target = target;
        this.lamp = null;
        this.trigger = null;
        this.active = false;
    }

    _createClass(Light, [{
        key: 'activate',
        value: function activate(btn) {
            btn.classList.add('btn-active');
            btn.previousSibling.classList.add('light-active');
            this.active = true;
            btn.textContent = 'OFF';
        }
    }, {
        key: 'deactivate',
        value: function deactivate(btn) {
            btn.classList.remove('btn-active');
            btn.previousSibling.classList.remove('light-active');
            this.active = false;
            btn.textContent = 'ON';
        }
    }, {
        key: 'controls',
        value: function controls(btn) {
            if (!this.active) {
                this.activate(btn);
            } else {
                this.deactivate(btn);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            this.light = document.createElement('div');
            this.lamp = document.createElement('div');
            this.trigger = document.createElement('div');

            this.light.classList.add('light');
            this.lamp.classList.add('light__lamp');
            this.trigger.classList.add('light__trigger');
            this.trigger.textContent = 'ON';
            this.trigger.addEventListener('click', function () {
                _this.controls(_this.trigger);
            });

            this.target.appendChild(this.light);
            this.light.appendChild(this.lamp);
            this.light.appendChild(this.trigger);
        }
    }]);

    return Light;
}();

var Controls = function () {
    function Controls() {
        var _this2 = this;

        _classCallCheck(this, Controls);

        this.lights = [];
        this.activeLights = [];
        this.target = document.querySelector('.container');
        this.addBtn = document.querySelector('.add');
        this.toggle = document.querySelector('.toggle');
        this.addBtn.addEventListener('click', function () {
            _this2.addLight();
        });
        this.toggle.addEventListener('click', function () {
            _this2.toggleAdd();
        });
        this.target.onmousedown = this.target.onselectstart = function () {
            return false;
        };
    }

    _createClass(Controls, [{
        key: 'addLight',
        value: function addLight() {
            var newLight = new Light(this.target);
            newLight.render(this.target);
            this.lights.push(newLight);
        }
    }, {
        key: 'toggleAdd',
        value: function toggleAdd() {
            this.activeLights = this.lights.filter(function (light) {
                if (light.active === true) return light;
            });
            this.activeLights.forEach(function (light) {
                light.deactivate(light.trigger);
            });
            if (this.activeLights.length == 0) {
                this.lights.forEach(function (light) {
                    light.activate(light.trigger);
                });
            }
        }
    }]);

    return Controls;
}();

var controls = new Controls();

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });