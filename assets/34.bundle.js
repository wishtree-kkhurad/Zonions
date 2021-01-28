(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./assets/src/routes/components/feedback/Alert/Banner.js":
/*!***************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/Banner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Banner = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Banner\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning text\",\n    banner: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Very long warning text warning text text text text text text text\",\n    banner: true,\n    closable: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    showIcon: false,\n    message: \"Warning text without icon\",\n    banner: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    type: \"error\",\n    message: \"Error text\",\n    banner: true\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/Banner.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/Basic.js":
/*!**************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/Basic.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _basic_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.less */ \"./assets/src/routes/components/feedback/Alert/basic.less\");\n/* harmony import */ var _basic_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_basic_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Basic\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Success Text\",\n    type: \"success\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/Closeable.js":
/*!******************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/Closeable.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst onClose = function (e) {\n  console.log(e, 'I was closed.');\n};\n\nconst Closeable = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Closeable\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text\",\n    type: \"warning\",\n    closable: true,\n    onClose: onClose\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Error Text\",\n    description: \"Error Description Error Description Error Description Error Description Error Description Error Description\",\n    type: \"error\",\n    closable: true,\n    onClose: onClose\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Closeable);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/Closeable.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/Description.js":
/*!********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/Description.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Description = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Description\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Success Text\",\n    description: \"Success Description Success Description Success Description\",\n    type: \"success\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Info Text\",\n    description: \"Info Description Info Description Info Description Info Description\",\n    type: \"info\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning Text\",\n    description: \"Warning Description Warning Description Warning Description Warning Description\",\n    type: \"warning\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Error Text\",\n    description: \"Error Description Error Description Error Description Error Description\",\n    type: \"error\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/Description.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/Icon.js":
/*!*************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/Icon.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Icon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Icon\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Success Tips\",\n    type: \"success\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Informational Notes\",\n    type: \"info\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning\",\n    type: \"warning\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Error\",\n    type: \"error\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Success Tips\",\n    description: \"Detailed description and advices about successful copywriting.\",\n    type: \"success\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Informational Notes\",\n    description: \"Additional description and informations about copywriting.\",\n    type: \"info\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning\",\n    description: \"This is a warning notice about copywriting.\",\n    type: \"warning\",\n    showIcon: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Error\",\n    description: \"This is an error message about copywriting.\",\n    type: \"error\",\n    showIcon: true\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/Icon.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/MoreType.js":
/*!*****************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/MoreType.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst MoreType = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"More Type\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Success Text\",\n    type: \"success\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Info Text\",\n    type: \"info\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Warning Text\",\n    type: \"warning\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n    message: \"Error Text\",\n    type: \"error\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreType);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/MoreType.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/SmoothlyUnmount.js":
/*!************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/SmoothlyUnmount.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nclass SmoothlyUnmount extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      visiable: true\n    };\n\n    this.handleClose = () => {\n      this.setState({\n        visiable: false\n      });\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      title: \"Smoothly Unmount\",\n      className: \"gx-card\"\n    }, this.state.visiable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n      message: \"Alert Message Text\",\n      type: \"success\",\n      closable: true,\n      afterClose: this.handleClose\n    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"placeholder text here\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmoothlyUnmount);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/SmoothlyUnmount.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/basic.less":
/*!****************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/basic.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/less-loader/dist/cjs.js??ref--7-2!./basic.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/feedback/Alert/basic.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/basic.less?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Alert/index.js":
/*!**************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Alert/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/feedback/Alert/Basic.js\");\n/* harmony import */ var _MoreType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MoreType */ \"./assets/src/routes/components/feedback/Alert/MoreType.js\");\n/* harmony import */ var _Closeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Closeable */ \"./assets/src/routes/components/feedback/Alert/Closeable.js\");\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Description */ \"./assets/src/routes/components/feedback/Alert/Description.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ \"./assets/src/routes/components/feedback/Alert/Icon.js\");\n/* harmony import */ var _SmoothlyUnmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SmoothlyUnmount */ \"./assets/src/routes/components/feedback/Alert/SmoothlyUnmount.js\");\n/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Banner */ \"./assets/src/routes/components/feedback/Alert/Banner.js\");\n\n\n\n\n\n\n\n\n\n\nconst Alert = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 12,\n    md: 12,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmoothlyUnmount__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MoreType__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 12,\n    md: 12,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Banner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Closeable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alert);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js?!./assets/src/routes/components/feedback/Alert/basic.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2!./assets/src/routes/components/feedback/Alert/basic.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".ant-alert {\\n  margin-bottom: 16px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Alert/basic.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js??ref--7-2");

/***/ })

}]);