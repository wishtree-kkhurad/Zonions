(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./assets/src/routes/components/dataEntry/InputNumber/Basic.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/Basic.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Basic = () => {\n  function onChange(value) {\n    console.log('changed', value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Basic\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    min: 1,\n    max: 10,\n    defaultValue: 3,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/Decimal.js":
/*!***********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/Decimal.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Decimal = () => {\n  function onChange(value) {\n    console.log('changed', value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Decimal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    min: 0,\n    max: 10,\n    step: 0.1,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Decimal);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/Decimal.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/Disabled.js":
/*!************************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/Disabled.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nclass Disabled extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      disabled: true\n    };\n\n    this.toggle = () => {\n      this.setState({\n        disabled: !this.state.disabled\n      });\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: \"gx-card\",\n      title: \"Disabled\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n      min: 1,\n      max: 10,\n      disabled: this.state.disabled,\n      defaultValue: 3\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        marginTop: 20\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: this.toggle,\n      type: \"primary\"\n    }, \"Toggle disabled\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disabled);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/Disabled.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/Formatter.js":
/*!*************************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/Formatter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Formatter = () => {\n  function onChange(value) {\n    console.log('changed', value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Formatter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    className: \"gx-mb-3\",\n    defaultValue: 1000,\n    formatter: value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','),\n    parser: value => value.replace(/\\$\\s?|(,*)/g, ''),\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    className: \"gx-mb-3\",\n    defaultValue: 100,\n    min: 0,\n    max: 100,\n    formatter: value => `${value}%`,\n    parser: value => value.replace('%', ''),\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formatter);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/Formatter.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/Size.js":
/*!********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/Size.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _size_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size.less */ \"./assets/src/routes/components/dataEntry/InputNumber/size.less\");\n/* harmony import */ var _size_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_size_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Size = () => {\n  function onChange(value) {\n    console.log('changed', value);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Size\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    className: \"gx-mb-3\",\n    size: \"large\",\n    min: 1,\n    max: 100000,\n    defaultValue: 3,\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    className: \"gx-mb-3\",\n    min: 1,\n    max: 100000,\n    defaultValue: 3,\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"InputNumber\"], {\n    className: \"gx-mb-3\",\n    size: \"small\",\n    min: 1,\n    max: 100000,\n    defaultValue: 3,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Size);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/Size.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/index.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/dataEntry/InputNumber/Basic.js\");\n/* harmony import */ var _Size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Size */ \"./assets/src/routes/components/dataEntry/InputNumber/Size.js\");\n/* harmony import */ var _Formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Formatter */ \"./assets/src/routes/components/dataEntry/InputNumber/Formatter.js\");\n/* harmony import */ var _Decimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Decimal */ \"./assets/src/routes/components/dataEntry/InputNumber/Decimal.js\");\n/* harmony import */ var _Disabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Disabled */ \"./assets/src/routes/components/dataEntry/InputNumber/Disabled.js\");\n\n\n\n\n\n\n\n\nclass InputNumber extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Size__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Formatter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Decimal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Disabled__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputNumber);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/index.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/InputNumber/size.less":
/*!**********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/InputNumber/size.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./size.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/dataEntry/InputNumber/size.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./size.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/dataEntry/InputNumber/size.less\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./size.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/dataEntry/InputNumber/size.less\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/size.less?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/dataEntry/InputNumber/size.less":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2!./assets/src/routes/components/dataEntry/InputNumber/size.less ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".ant-input-number {\\n  margin-right: 10px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/InputNumber/size.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ })

}]);