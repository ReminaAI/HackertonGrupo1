"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rooms",{

/***/ "./components/AvailableRooms.js":
/*!**************************************!*\
  !*** ./components/AvailableRooms.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AvailableRooms; }\n/* harmony export */ });\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RequestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/rooms.module.css */ \"./styles/rooms.module.css\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GENERIC_BOOKEE = {\n    Email: \"\",\n    Username: \"\",\n    Phone: \"\",\n    Company: \"\",\n    Room: \"\",\n    Date: \"\",\n    Hour: \"\"\n};\nfunction AvailableRooms() {\n    var _this = this;\n    var changeStates = function changeStates() {\n        setClicked(false);\n    };\n    var BookRoom = function BookRoom(id1) {\n        setClicked(true);\n        setTimeout(changeStates(), 1000);\n        console.log(added);\n        function CallBack(id) {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var res;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"POST\",\n                                body: JSON.stringify(_objectSpread({}, bookee, {\n                                    Room: id\n                                }))\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        console.log(id1);\n        CallBack(id1);\n        setSend(true);\n    //setBookee(GENERIC_BOOKEE)\n    };\n    var createMenu = function createMenu(posX, posY, ele) {\n        setPos({\n            room: ele,\n            left: posX,\n            top: posY,\n            clicked: true\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        room: \"\",\n        left: 0,\n        top: 0,\n        clicked: false\n    }), pos = ref[0], setPos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(GENERIC_BOOKEE), bookee = ref1[0], setBookee = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), rooms = ref2[0], setRooms = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), send = ref3[0], setSend = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        message: \"Booking requested, please wait for admin approval.\"\n    }), added = ref4[0], setAdded = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), clicked = ref5[0], setClicked = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function CallBack() {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, json;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"GET\"\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            json = _ctx.sent;\n                            setRooms(json);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        setSend(false);\n        CallBack();\n    }, [\n        send\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            added.clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup),\n                children: added.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 82,\n                columnNumber: 34\n            }, this),\n            pos.clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setPos(_objectSpread({}, pos, {\n                        clicked: false\n                    }));\n                },\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().screen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    style: {\n                        left: pos.left,\n                        top: pos.top\n                    },\n                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RequestForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        pos: pos,\n                        bookee: bookee,\n                        setBookee: setBookee,\n                        BookRoom: BookRoom\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 87,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                    lineNumber: 86,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().backgroundRectangle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"ROOMS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().allrooms),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdown),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdownRooms),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsTop),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i < 4) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsBottom),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i > 3 && i < 8) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().auditorium),\n                                    children: rooms.map(function(ele, i) {\n                                        if (i === 8) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                onClick: function(e) {\n                                                    return createMenu(e.pageX, e.pageY, ele);\n                                                },\n                                                className: \"auditorium\",\n                                                children: ele.roomName\n                                            }, ele._id, false, {\n                                                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 44\n                                            }, _this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n};\n_s(AvailableRooms, \"e7RL9hZrqbN3vM10l2hOpBt7yN4=\");\n_c = AvailableRooms;\nvar _c;\n$RefreshReg$(_c, \"AvailableRooms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDbUMsUUFBUTsrQ0FBdEJuQyxHQUFHLENBQUNvQyxHQUFHOzs7O3FEQUFzQjt5Q0FDN0g7cUNBQ0osQ0FBQzs7Ozs7d0NBQ0E7Ozs7OztnQ0FDSjs7Ozs7NEJBQ0o7Ozs7OztvQkFDSjs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBOUd1QjFELGNBQWM7QUFBZEEsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YWlsYWJsZVJvb21zLmpzPzVmODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVxdWVzdEZvcm0gZnJvbSBcIi4vUmVxdWVzdEZvcm1cIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcm9vbXMubW9kdWxlLmNzc1wiXHJcblxyXG5jb25zdCBHRU5FUklDX0JPT0tFRSA9IHtcclxuICAgIEVtYWlsOiBcIlwiLFxyXG4gICAgVXNlcm5hbWU6IFwiXCIsXHJcbiAgICBQaG9uZTogXCJcIixcclxuICAgIENvbXBhbnk6IFwiXCIsXHJcbiAgICBSb29tOiBcIlwiLFxyXG4gICAgRGF0ZTogXCJcIixcclxuICAgIEhvdXI6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhaWxhYmxlUm9vbXMoKSB7XHJcbiAgICBjb25zdCBbcG9zLCBzZXRQb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHJvb206IFwiXCIsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgY2xpY2tlZDogZmFsc2VcclxuICAgIH0pXHJcbiAgICBjb25zdCBbYm9va2VlLCBzZXRCb29rZWVdID0gdXNlU3RhdGUoR0VORVJJQ19CT09LRUUpXHJcbiAgICBjb25zdCBbcm9vbXMsIHNldFJvb21zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3NlbmQsIHNldFNlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWRkZWQsIHNldEFkZGVkXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkJvb2tpbmcgcmVxdWVzdGVkLCBwbGVhc2Ugd2FpdCBmb3IgYWRtaW4gYXBwcm92YWwuXCIsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VTdGF0ZXMoKSB7XHJcbiAgICAgICAgc2V0Q2xpY2tlZChmYWxzZSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gQ2FsbEJhY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvcm9vbXMvJywge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFJvb21zKGpzb24pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VuZChmYWxzZSlcclxuICAgICAgICBDYWxsQmFjaygpXHJcbiAgICB9LCBbc2VuZF0pXHJcblxyXG4gICAgZnVuY3Rpb24gQm9va1Jvb20oaWQpIHtcclxuICAgICAgICBzZXRDbGlja2VkKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dChjaGFuZ2VTdGF0ZXMoKSwgMTAwMClcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGRlZClcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBDYWxsQmFjayhpZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgICcvYXBpL3Jvb21zLycsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmJvb2tlZSwgUm9vbTogaWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgQ2FsbEJhY2soaWQpXHJcbiAgICAgICAgc2V0U2VuZCh0cnVlKVxyXG4gICAgICAgIC8vc2V0Qm9va2VlKEdFTkVSSUNfQk9PS0VFKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudShwb3NYLCBwb3NZLCBlbGUpIHtcclxuICAgICAgICBzZXRQb3Moe1xyXG4gICAgICAgICAgICByb29tOiBlbGUsXHJcbiAgICAgICAgICAgIGxlZnQ6IHBvc1gsXHJcbiAgICAgICAgICAgIHRvcDogcG9zWSxcclxuICAgICAgICAgICAgY2xpY2tlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFkZGVkLmNsaWNrZWQgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+e2FkZGVkLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Bvcy5jbGlja2VkICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFBvcyh7IC4uLnBvcywgY2xpY2tlZDogZmFsc2UgfSl9IGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0gc3R5bGU9e3sgbGVmdDogcG9zLmxlZnQsIHRvcDogcG9zLnRvcCB9fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcXVlc3RGb3JtIHBvcz17cG9zfSBib29rZWU9e2Jvb2tlZX0gc2V0Qm9va2VlPXtzZXRCb29rZWV9IEJvb2tSb29tPXtCb29rUm9vbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kUmVjdGFuZ2xlfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5ST09NUzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxscm9vbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wZG93blJvb21zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vbXNUb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb29tcy5tYXAoKGVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBjcmVhdGVNZW51KGUucGFnZVgsIGUucGFnZVksIGVsZSl9IGNsYXNzTmFtZT17YHJvb20ke2kgKyAxfWB9IGtleT17ZWxlLl9pZH0+e2VsZS5yb29tTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb29tc0JvdHRvbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvb21zLm1hcCgoZWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMyAmJiBpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgb25DbGljaz17KGUpID0+IGNyZWF0ZU1lbnUoZS5wYWdlWCwgZS5wYWdlWSwgZWxlKX0gY2xhc3NOYW1lPXtgcm9vbSR7aSArIDF9YH0ga2V5PXtlbGUuX2lkfT57ZWxlLnJvb21OYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1ZGl0b3JpdW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvb21zLm1hcCgoZWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgb25DbGljaz17KGUpID0+IGNyZWF0ZU1lbnUoZS5wYWdlWCwgZS5wYWdlWSwgZWxlKX0gY2xhc3NOYW1lPXtgYXVkaXRvcml1bWB9IGtleT17ZWxlLl9pZH0+e2VsZS5yb29tTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZXF1ZXN0Rm9ybSIsInN0eWxlcyIsIkdFTkVSSUNfQk9PS0VFIiwiRW1haWwiLCJVc2VybmFtZSIsIlBob25lIiwiQ29tcGFueSIsIlJvb20iLCJEYXRlIiwiSG91ciIsIkF2YWlsYWJsZVJvb21zIiwiY2hhbmdlU3RhdGVzIiwic2V0Q2xpY2tlZCIsIkJvb2tSb29tIiwiaWQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImFkZGVkIiwiQ2FsbEJhY2siLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImJvb2tlZSIsInNldFNlbmQiLCJjcmVhdGVNZW51IiwicG9zWCIsInBvc1kiLCJlbGUiLCJzZXRQb3MiLCJyb29tIiwibGVmdCIsInRvcCIsImNsaWNrZWQiLCJwb3MiLCJzZXRCb29rZWUiLCJyb29tcyIsInNldFJvb21zIiwic2VuZCIsIm1lc3NhZ2UiLCJzZXRBZGRlZCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwb3B1cCIsIm9uQ2xpY2siLCJzY3JlZW4iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGUiLCJtZW51IiwiYmFja2dyb3VuZFJlY3RhbmdsZSIsImgxIiwidGl0bGUiLCJhbGxyb29tcyIsInRvcGRvd24iLCJ0b3Bkb3duUm9vbXMiLCJyb29tc1RvcCIsIm1hcCIsImkiLCJwYWdlWCIsInBhZ2VZIiwicm9vbU5hbWUiLCJfaWQiLCJyb29tc0JvdHRvbSIsImF1ZGl0b3JpdW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AvailableRooms.js\n");

/***/ })

});