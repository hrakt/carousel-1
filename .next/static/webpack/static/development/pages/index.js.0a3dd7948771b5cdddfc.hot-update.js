webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.module.scss */ "./components/Carousel.module.scss");
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider */ "./components/Slider.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/hrak/Desktop/code/carousel-1/components/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Carousel = function Carousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      shifting = _useState3[0],
      setShifting = _useState3[1];

  var track = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  var slideArr = [0, 1, 2, 3];
  var upperLimit = slideArr.length - 1;

  var handleAnimation = function handleAnimation(direction) {
    console.log(direction);
    directions = direction;
  };

  var handleClick = function handleClick(direction) {
    cloneSlides();
    var newSlideNumber = currentSlide + direction;
    direction = direction;
    setShifting(true);

    if (newSlideNumber === -1) {
      newSlideNumber = upperLimit;
    }

    setCurrentSlide(newSlideNumber);
    setDirection(direction);
  };

  var resetSlide = function resetSlide() {
    console.log(currentSlide);
    console.log(upperLimit);

    if (currentSlide === upperLimit + 1) {
      setShifting(false);
      setCurrentSlide(0);
    }
  };

  var cloneSlides = function cloneSlides() {
    if (currentSlide === 1 || currentSlide === 2 || currentSlide === 3) {
      var newChild = document.createElement("div");
      newChild.className = "".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box);
      newChild.innerHTML = "".concat(slideArr[currentSlide - 1]);
      track.current.appendChild(newChild);
    } else if (currentSlide === -1 || currentSlide === -2 || currentSlide === -3) {
      var _newChild = document.createElement("div");

      _newChild.className = "".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box);
      _newChild.innerHTML = "".concat(slideArr[currentSlide - 1]);
      track.current.appendChild(_newChild);
    }
  };

  var className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.track, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.shifting, shifting));
  return __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mainContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "CurrentSlide:", currentSlide), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "direction:", direction), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bigContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: className,
    style: {
      transform: "translateX(".concat(currentSlide * -152, "px)")
    },
    ref: track,
    onTransitionEnd: resetSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, direction === -1 && cloneSlides(), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, slideArr[0]), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " ", slideArr[1], " "), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, slideArr[2]), __jsx("div", {
    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, slideArr[3]), direction === 1 && cloneSlides())), __jsx(_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setCurrentSlide: setCurrentSlide,
    currentSlide: currentSlide,
    handleAnimation: handleAnimation,
    handleClick: handleClick
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

})
//# sourceMappingURL=index.js.0a3dd7948771b5cdddfc.hot-update.js.map