(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./assets/src/routes/components/feedback/Message/Basic.js":
/*!****************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/Basic.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst info = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].info('This is a normal message');\n};\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Basic\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: info\n  }, \"Display normal message\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Message/Customize.js":
/*!********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/Customize.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst success = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].success('This is a prompt message for success, and it will disappear in 10 seconds', 10);\n};\n\nconst Customize = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Customize\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: success\n  }, \"Customized display duration\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customize);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/Customize.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Message/Loading.js":
/*!******************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/Loading.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst success = () => {\n  const hide = antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].loading('Action in progress..', 0); // Dismiss manually and asynchronously\n\n  setTimeout(hide, 2500);\n};\n\nconst Loading = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Loading\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: success\n  }, \"Display a loading indicator\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/Loading.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Message/OtherType.js":
/*!********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/OtherType.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _otherType_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherType.less */ \"./assets/src/routes/components/feedback/Message/otherType.less\");\n/* harmony import */ var _otherType_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_otherType_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst success = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].success('This is a message of success');\n};\n\nconst error = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error('This is a message of error');\n};\n\nconst warning = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].warning('This is message of warning');\n};\n\nconst OtherType = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Other Type\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: success\n  }, \"Success\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: error\n  }, \"Error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: warning\n  }, \"Warning\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherType);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/OtherType.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Message/index.js":
/*!****************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/feedback/Message/Basic.js\");\n/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OtherType */ \"./assets/src/routes/components/feedback/Message/OtherType.js\");\n/* harmony import */ var _Customize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customize */ \"./assets/src/routes/components/feedback/Message/Customize.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./assets/src/routes/components/feedback/Message/Loading.js\");\n\n\n\n\n\n\n\nclass Message extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OtherType__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Customize__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/index.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Message/otherType.less":
/*!**********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Message/otherType.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./otherType.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/feedback/Message/otherType.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/otherType.less?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/feedback/Message/otherType.less":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2!./assets/src/routes/components/feedback/Message/otherType.less ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".ant-btn {\\n  margin-right: 8px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Message/otherType.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ })

}]);