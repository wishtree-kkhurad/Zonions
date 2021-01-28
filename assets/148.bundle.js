(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./assets/src/routes/inBuiltApps/Notes/index.js":
/*!******************************************************!*\
  !*** ./assets/src/routes/inBuiltApps/Notes/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_stickies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stickies */ \"./node_modules/react-stickies/lib/react-stickies.js\");\n/* harmony import */ var react_stickies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stickies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_Auxiliary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/Auxiliary */ \"./assets/src/util/Auxiliary.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _appRedux_actions_Notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../appRedux/actions/Notes */ \"./assets/src/appRedux/actions/Notes.js\");\n\n\n\n\n\n\nclass Notes extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    this.onChange = notes => {\n      console.log(\"notes: \", notes);\n    };\n  }\n\n  componentWillMount() {\n    this.props.onGetSticky();\n  }\n\n  render() {\n    const {\n      notesList\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_Auxiliary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickies__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      notes: notesList,\n      onChange: this.onChange\n    }));\n  }\n\n}\n\nfunction mapStateToProps({\n  notes\n}) {\n  const {\n    notesList\n  } = notes;\n  return {\n    notesList\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  onGetSticky: _appRedux_actions_Notes__WEBPACK_IMPORTED_MODULE_4__[\"onGetSticky\"]\n})(Notes));\n\n//# sourceURL=webpack:///./assets/src/routes/inBuiltApps/Notes/index.js?");

/***/ })

}]);