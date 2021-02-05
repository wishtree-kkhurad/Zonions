(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./assets/src/routes/components/navigation/Pagination/Basic.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/Basic.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Basic Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    defaultCurrent: 1,\n    total: 50\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/Changer.js":
/*!***********************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/Changer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Changer = () => {\n  function onShowSizeChange(current, pageSize) {\n    console.log(current, pageSize);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Changer Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    showSizeChanger: true,\n    onShowSizeChange: onShowSizeChange,\n    defaultCurrent: 3,\n    total: 500\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Changer);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/Changer.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/Controlled.js":
/*!**************************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/Controlled.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nclass Controlled extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      current: 3\n    };\n\n    this.onChange = page => {\n      this.setState({\n        current: page\n      });\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: \"gx-card\",\n      title: \"Controlled Pagination\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n      current: this.state.current,\n      onChange: this.onChange,\n      total: 50\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controlled);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/Controlled.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/Jumper.js":
/*!**********************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/Jumper.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Jumper = () => {\n  function onChange(pageNumber) {\n    console.log('Page: ', pageNumber);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Jumper Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    showQuickJumper: true,\n    defaultCurrent: 2,\n    total: 500,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumper);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/Jumper.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/MiniSize.js":
/*!************************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/MiniSize.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst MiniSize = () => {\n  function showTotal(total) {\n    return `Total ${total} items`;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Mini Size Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    size: \"small\",\n    total: 50\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    size: \"small\",\n    total: 50,\n    showSizeChanger: true,\n    showQuickJumper: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    size: \"small\",\n    total: 50,\n    showTotal: showTotal\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniSize);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/MiniSize.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/More.js":
/*!********************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/More.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst More = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"More Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    defaultCurrent: 6,\n    total: 500\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (More);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/More.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/PrevAndNext.js":
/*!***************************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/PrevAndNext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nfunction itemRender(current, type, originalElement) {\n  if (type === 'prev') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"gx-link\"\n    }, \"Previous\");\n  } else if (type === 'next') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"gx-link\"\n    }, \"Next\");\n  }\n\n  return originalElement;\n}\n\nconst PrevAndNext = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Prev And Next Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    total: 500,\n    itemRender: itemRender\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrevAndNext);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/PrevAndNext.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/SimpleMode.js":
/*!**************************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/SimpleMode.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst SimpleMode = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Simple Mode Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    simple: true,\n    defaultCurrent: 2,\n    total: 50\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleMode);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/SimpleMode.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/TotalNumber.js":
/*!***************************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/TotalNumber.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst TotalNumber = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Total Number Pagination\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    total: 85,\n    showTotal: total => `Total ${total} items`,\n    pageSize: 20,\n    defaultCurrent: 1\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], {\n    total: 85,\n    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,\n    pageSize: 20,\n    defaultCurrent: 1\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TotalNumber);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/TotalNumber.js?");

/***/ }),

/***/ "./assets/src/routes/components/navigation/Pagination/index.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/navigation/Pagination/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/navigation/Pagination/Basic.js\");\n/* harmony import */ var _Changer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Changer */ \"./assets/src/routes/components/navigation/Pagination/Changer.js\");\n/* harmony import */ var _More__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./More */ \"./assets/src/routes/components/navigation/Pagination/More.js\");\n/* harmony import */ var _Jumper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Jumper */ \"./assets/src/routes/components/navigation/Pagination/Jumper.js\");\n/* harmony import */ var _MiniSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MiniSize */ \"./assets/src/routes/components/navigation/Pagination/MiniSize.js\");\n/* harmony import */ var _SimpleMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SimpleMode */ \"./assets/src/routes/components/navigation/Pagination/SimpleMode.js\");\n/* harmony import */ var _Controlled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Controlled */ \"./assets/src/routes/components/navigation/Pagination/Controlled.js\");\n/* harmony import */ var _TotalNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TotalNumber */ \"./assets/src/routes/components/navigation/Pagination/TotalNumber.js\");\n/* harmony import */ var _PrevAndNext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrevAndNext */ \"./assets/src/routes/components/navigation/Pagination/PrevAndNext.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass Pagination extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_More__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Changer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Jumper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MiniSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimpleMode__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Controlled__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TotalNumber__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrevAndNext__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\n//# sourceURL=webpack:///./assets/src/routes/components/navigation/Pagination/index.js?");

/***/ })

}]);