(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./assets/src/routes/documents/ChangeLogs/ChangeLogItem.js":
/*!*****************************************************************!*\
  !*** ./assets/src/routes/documents/ChangeLogs/ChangeLogItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst ActivityItem = ({\n  changeLog\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Timeline\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"gx-text-truncate\"\n  }, changeLog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"gx-fs-sm\"\n  }, changeLog.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, changeLog.logs.map((log, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: index,\n    className: \"gx-fs-sm gx-text-grey\"\n  }, log.type !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"gx-badge gx-mb-1 gx-text-white gx-badge-red\"\n  }, log.type) : null, \" \", log.description))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityItem);\n\n//# sourceURL=webpack:///./assets/src/routes/documents/ChangeLogs/ChangeLogItem.js?");

/***/ }),

/***/ "./assets/src/routes/documents/ChangeLogs/data.js":
/*!********************************************************!*\
  !*** ./assets/src/routes/documents/ChangeLogs/data.js ***!
  \********************************************************/
/*! exports provided: changeLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLogs\", function() { return changeLogs; });\nconst changeLogs = [{\n  id: 1,\n  title: 'Initial Release',\n  date: \"Jan 21, 2019\",\n  logs: [{\n    description: 'Initial release version 1.3'\n  }]\n}, {\n  id: 2,\n  title: 'V-1.4 ',\n  date: \"Jan 22, 2019\",\n  logs: [{\n    description: 'Added 2 Starter Templates'\n  }]\n}, {\n  id: 3,\n  title: 'V-1.5 ',\n  date: \"Jan 26, 2019\",\n  logs: [{\n    description: 'Updated to CRA-2'\n  }]\n}, {\n  id: 4,\n  title: 'V-1.6 ',\n  date: \"Mar 30, 2019\",\n  logs: [{\n    type: 'add',\n    description: 'Added jwt Auth starter-template'\n  }, {\n    type: 'add',\n    description: 'Added Sticky app'\n  }]\n}, {\n  id: 5,\n  title: 'V-1.7 ',\n  date: \"Apr 2, 2019\",\n  logs: [{\n    type: 'add',\n    description: 'Added Firebase CRUD with redux-thunk'\n  }, {\n    type: 'add',\n    description: 'Added HTML version'\n  }]\n}];\n\n//# sourceURL=webpack:///./assets/src/routes/documents/ChangeLogs/data.js?");

/***/ }),

/***/ "./assets/src/routes/documents/ChangeLogs/index.js":
/*!*********************************************************!*\
  !*** ./assets/src/routes/documents/ChangeLogs/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Widget */ \"./assets/src/components/Widget/index.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./assets/src/routes/documents/ChangeLogs/data.js\");\n/* harmony import */ var _ChangeLogItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChangeLogItem */ \"./assets/src/routes/documents/ChangeLogs/ChangeLogItem.js\");\n\n\n\n\n\n\n\nconst ChangeLogs = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Widget__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      id: \"sidebar.documents.changelog\"\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Timeline\"], null, _data__WEBPACK_IMPORTED_MODULE_4__[\"changeLogs\"].map((changeLog, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChangeLogItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    key: index,\n    changeLog: changeLog\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeLogs);\n\n//# sourceURL=webpack:///./assets/src/routes/documents/ChangeLogs/index.js?");

/***/ })

}]);