/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_css-loader@6.5.1@css-loader/dist/cjs.js!./src/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/_css-loader@6.5.1@css-loader/dist/cjs.js!./src/index.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/_css-loader@6.5.1@css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_5_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/_css-loader@6.5.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_5_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/_css-loader@6.5.1@css-loader/dist/runtime/getUrl.js */ \"./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_5_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./logo.png */ \"./src/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_6_5_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_6_5_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_6_5_1_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#root {\\n  width: 200px;\\n  height: 200px;\\n  font-size: 32px;\\n  font-weight: 700;\\n  color: red;\\n  background-size: cover;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/_css-loader@6.5.1@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/getUrl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/getUrl.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/noSourceMaps.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/noSourceMaps.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/_css-loader@6.5.1@css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_6_5_1_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/_css-loader@6.5.1@css-loader/dist/cjs.js!./index.css */ \"./node_modules/_css-loader@6.5.1@css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_6_5_1_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_6_5_1_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_6_5_1_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_6_5_1_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js ***!
  \****************************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/avatar.jpeg":
/*!*************************!*\
  !*** ./src/avatar.jpeg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/jpeg;base64,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\");\n\n//# sourceURL=webpack:///./src/avatar.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _avatar_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.jpeg */ \"./src/avatar.jpeg\");\n\nconsole.log('chapter1')\ndocument.write('chapter1:devserver')\n;\n\nconst img = new Image()\nimg.src = _avatar_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\ndocument.body.appendChild(img)\nconsole.log('img=>', _avatar_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03affd7dcab258a52dd3.png\";\n\n//# sourceURL=webpack:///./src/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;