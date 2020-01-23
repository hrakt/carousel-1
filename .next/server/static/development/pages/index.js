module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ "./components/Carousel.module.scss");
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider */ "./components/Slider.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/hrak/Desktop/code/carousel-1/components/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Carousel = () => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: shifting,
    1: setShifting
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const track = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  const slideArr = [0, 1, 2, 3];
  const upperLimit = slideArr.length - 1;

  const handleAnimation = direction => {
    console.log(direction);
    directions = direction;
  };

  const handleClick = direction => {
    cloneSlides();
    let newSlideNumber = currentSlide + direction;
    direction = direction;
    setShifting(true);
    setCurrentSlide(newSlideNumber);
    setDirection(direction);
  };

  const resetSlide = () => {
    console.log(currentSlide, "currentslide");
    console.log(upperLimit, "upperLimit");

    if (currentSlide === upperLimit + 1) {
      setShifting(false);
      setCurrentSlide(0);
    }

    if (currentSlide === 0) {
      setShifting(false);
      setCurrentSlide(0);
    }
  };

  const cloneSlides = () => {
    let children = [];

    for (let i = 0; i <= upperLimit; i++) {
      children.push(__jsx("div", {
        key: i,
        className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }, slideArr[i]));
    } // const style = window.getComputedStyle(React.findDOMNode(track));


    return children;
  };

  const className = classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.track, {
    [_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.shifting]: shifting
  });
  return __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "CurrentSlide:", currentSlide), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "direction:", direction), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bigContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: className,
    style: {
      transform: `translateX(${(currentSlide + 4) * -152}px)`
    },
    ref: track,
    onTransitionEnd: resetSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, cloneSlides(), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, slideArr[0]), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, " ", slideArr[1], " "), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, slideArr[2]), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, slideArr[3]), cloneSlides())), __jsx(_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentSlide,
    currentSlide,
    handleAnimation,
    handleClick
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/Carousel.module.scss":
/*!*****************************************!*\
  !*** ./components/Carousel.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mainContainer": "_3k0Ong6XhvjC2KNNTTsfKJ",
	"bigContainer": "_1zxPSOOrubXTkpyr2v_l6m",
	"track": "_3g4yQ3sSZ50iWup6Ndj6gI",
	"shifting": "_3BNln7vGwxMmEBGwAnYOEq",
	"box": "_3t2XQS3cCRFR7N97fGFpVU"
};

/***/ }),

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.module.scss */ "./components/Slider.module.scss");
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hrak/Desktop/code/carousel-1/components/Slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Slider = ({
  currentSlide,
  setCurrentSlide,
  handleAnimation,
  handleClick
}) => {
  return __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sliderContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.previous,
    onClick: () => handleClick(-1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "\u276E"), __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.next,
    onClick: () => handleClick(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "\u276F"));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/Slider.module.scss":
/*!***************************************!*\
  !*** ./components/Slider.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sliderContainer": "_1sXZvNUN_CFB5T1sRBw7X9",
	"previous": "mGrswJGQptZCK4fxZDcR7",
	"next": "nZ21sKtFLESMC6SCTZWri"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
var _jsxFileName = "/Users/hrak/Desktop/code/carousel-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hrak/Desktop/code/carousel-1/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map