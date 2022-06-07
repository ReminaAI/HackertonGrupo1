"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Admin() {\n    const { 0: requests , 1: setRequests  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function CallBack() {\n            const res = await fetch(\"/api/requests/\", {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                method: \"GET\"\n            });\n            const json = await res.json();\n            setRequests(json);\n        }\n        CallBack();\n    }, []);\n    console.log(requests);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"WE ARE THE ADMINS\",\n            requests.map((e, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: e._id\n                }, i, false, {\n                    fileName: \"/Users/bytes4future/Desktop/desafiofinal2022grupo1/pages/admin/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 24\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bytes4future/Desktop/desafiofinal2022grupo1/pages/admin/index.js\",\n        lineNumber: 22,\n        columnNumber: 13\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTJDO0FBRTVCLFNBQVNFLEtBQUssR0FBRztJQUM1QixNQUFNLEVBSFYsR0FHV0MsUUFBUSxHQUhuQixHQUdxQkMsV0FBVyxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM1Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osZUFBZUssUUFBUSxHQUFHO1lBQ3RCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ25CLGdCQUFnQixFQUFFO2dCQUNsQkMsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNEQyxNQUFNLEVBQUUsS0FBSzthQUNoQixDQUFDO1lBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFO1lBQzdCTixXQUFXLENBQUNNLElBQUksQ0FBQztTQUdwQjtRQUNETCxRQUFRLEVBQUU7S0FDYixFQUFFLEVBQUUsQ0FBQztJQUNOTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDO0lBQ3JCLHFCQUFRLDhEQUFDVSxLQUFHOztZQUFDLG1CQUVUO1lBQ0lWLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLO2dCQUNuQixxQkFBTyw4REFBQ0gsS0FBRzs4QkFBVUUsQ0FBQyxDQUFDRSxHQUFHO21CQUFURCxDQUFDOzs7O3dCQUFlO2FBQ3BDLENBQUM7Ozs7OztZQUVKLENBQUM7Q0FDViIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2tlcnRvbl9ncnVwbzEvLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcbiAgICBjb25zdCBbcmVxdWVzdHMsIHNldFJlcXVlc3RzXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIENhbGxCYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgJy9hcGkvcmVxdWVzdHMvJywge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgICBzZXRSZXF1ZXN0cyhqc29uKVxuXG5cbiAgICAgICAgfVxuICAgICAgICBDYWxsQmFjaygpXG4gICAgfSwgW10pXG4gICAgY29uc29sZS5sb2cocmVxdWVzdHMpXG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICBXRSBBUkUgVEhFIEFETUlOU1xuICAgICAgICB7XG4gICAgICAgICAgICByZXF1ZXN0cy5tYXAoKGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PntlLl9pZH08L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRtaW4iLCJyZXF1ZXN0cyIsInNldFJlcXVlc3RzIiwiQ2FsbEJhY2siLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsImUiLCJpIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.js"));
module.exports = __webpack_exports__;

})();