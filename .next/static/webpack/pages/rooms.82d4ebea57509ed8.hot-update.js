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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AvailableRooms; }\n/* harmony export */ });\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RequestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/rooms.module.css */ \"./styles/rooms.module.css\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GENERIC_BOOKEE = {\n    Email: \"\",\n    Username: \"\",\n    Phone: \"\",\n    Company: \"\",\n    Room: \"\",\n    Date: \"\",\n    Hour: \"\"\n};\nfunction AvailableRooms() {\n    var _this = this;\n    var changeStates = function changeStates() {\n        setClicked(false);\n    };\n    var BookRoom = function BookRoom(id1) {\n        setClicked(true);\n        setTimeout(changeStates(), 1000);\n        function CallBack(id) {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var res;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"POST\",\n                                body: JSON.stringify(_objectSpread({}, bookee, {\n                                    Room: id\n                                }))\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        console.log(id1);\n        CallBack(id1);\n        setSend(true);\n    //setBookee(GENERIC_BOOKEE)\n    };\n    var createMenu = function createMenu(posX, posY, ele) {\n        setPos({\n            room: ele,\n            left: posX,\n            top: posY,\n            clicked: true\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        room: \"\",\n        left: 0,\n        top: 0,\n        clicked: false\n    }), pos = ref[0], setPos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(GENERIC_BOOKEE), bookee = ref1[0], setBookee = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), rooms = ref2[0], setRooms = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), send = ref3[0], setSend = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        message: \"Booking requested, please wait for admin approval.\"\n    }), added = ref4[0], setAdded = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), clicked = ref5[0], setClicked = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function CallBack() {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, json;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"GET\"\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            json = _ctx.sent;\n                            setRooms(json);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        setSend(false);\n        CallBack();\n    }, [\n        send\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup),\n                children: added.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 82,\n                columnNumber: 28\n            }, this),\n            pos.clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setPos(_objectSpread({}, pos, {\n                        clicked: false\n                    }));\n                },\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().screen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    style: {\n                        left: pos.left,\n                        top: pos.top\n                    },\n                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RequestForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        pos: pos,\n                        bookee: bookee,\n                        setBookee: setBookee,\n                        BookRoom: BookRoom\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 87,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                    lineNumber: 86,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().backgroundRectangle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"ROOMS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().allrooms),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdown),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdownRooms),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsTop),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i < 4) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsBottom),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i > 3 && i < 8) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().auditorium),\n                                    children: rooms.map(function(ele, i) {\n                                        if (i === 8) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                onClick: function(e) {\n                                                    return createMenu(e.pageX, e.pageY, ele);\n                                                },\n                                                className: \"auditorium\",\n                                                children: ele.roomName\n                                            }, ele._id, false, {\n                                                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 44\n                                            }, _this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n};\n_s(AvailableRooms, \"nHPBDGBUgtV3OPhm0PGgJhCLh/A=\");\n_c = AvailableRooms;\nvar _c;\n$RefreshReg$(_c, \"AvailableRooms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YWlsYWJsZVJvb21zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQztBQUNNO0FBQ1E7O0FBRS9DLElBQU1JLGNBQWMsR0FBRztJQUNuQkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsSUFBSSxFQUFFLEVBQUU7Q0FDWDtBQUVjLFNBQVNDLGNBQWMsR0FBRzs7UUFjNUJDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFHO1FBQ3BCQyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQ3BCO1FBbUJRQyxRQUFRLEdBQWpCLFNBQVNBLFFBQVEsQ0FBQ0MsR0FBRSxFQUFFO1FBQ2xCRixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCRyxVQUFVLENBQUNKLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQztpQkFFakJLLFFBQVEsQ0FBQ0YsRUFBRTttQkFBWEUsU0FBUTs7aUJBQVJBLFNBQVE7WUFBUkEsU0FBUSxHQUF2Qiw4TEFBd0JGLEVBQUUsRUFBRTtvQkFDbEJHLEdBQUc7Ozs7O21DQUFTQyxLQUFLLENBQ25CLGFBQWEsRUFBRTtnQ0FDZkMsT0FBTyxFQUFFO29DQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3JDO2dDQUNEQyxNQUFNLEVBQUUsTUFBTTtnQ0FDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxrQkFBS0MsTUFBTTtvQ0FBRWpCLElBQUksRUFBRU8sRUFBRTtrQ0FBRSxDQUFDOzZCQUNoRCxDQUFDOzs0QkFQSUcsR0FBRyxZQU9QOzs7Ozs7YUFDTDttQkFUY0QsU0FBUTs7UUFVdkJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixHQUFFLENBQUM7UUFDZkUsUUFBUSxDQUFDRixHQUFFLENBQUM7UUFDWmEsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNiLDJCQUEyQjtLQUM5QjtRQUNRQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTtRQUNqQ0MsTUFBTSxDQUFDO1lBQ0hDLElBQUksRUFBRUYsR0FBRztZQUNURyxJQUFJLEVBQUVMLElBQUk7WUFDVk0sR0FBRyxFQUFFTCxJQUFJO1lBQ1RNLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7S0FFTDs7SUE3REQsSUFBc0J0QyxHQUtwQixHQUxvQkEsK0NBQVEsQ0FBQztRQUMzQm1DLElBQUksRUFBRSxFQUFFO1FBQ1JDLElBQUksRUFBRSxDQUFDO1FBQ1BDLEdBQUcsRUFBRSxDQUFDO1FBQ05DLE9BQU8sRUFBRSxLQUFLO0tBQ2pCLENBQUMsRUFyQk4sR0FnQmMsR0FBWXRDLEdBS3BCLEdBTFEsRUFoQmQsTUFnQnNCLEdBQUlBLEdBS3BCLEdBTGdCO0lBTWxCLElBQTRCQSxJQUF3QixHQUF4QkEsK0NBQVEsQ0FBQ0ksY0FBYyxDQUFDLEVBdEJ4RCxNQXNCaUIsR0FBZUosSUFBd0IsR0FBdkMsRUF0QmpCLFNBc0I0QixHQUFJQSxJQUF3QixHQUE1QjtJQUN4QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXZCMUMsS0F1QmdCLEdBQWNBLElBQVksR0FBMUIsRUF2QmhCLFFBdUIwQixHQUFJQSxJQUFZLEdBQWhCO0lBQ3RCLElBQXdCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBeEIzQyxJQXdCZSxHQUFhQSxJQUFlLEdBQTVCLEVBeEJmLE9Bd0J3QixHQUFJQSxJQUFlLEdBQW5CO0lBQ3BCLElBQTBCQSxJQUV4QixHQUZ3QkEsK0NBQVEsQ0FBQztRQUMvQjRDLE9BQU8sRUFBRSxvREFBb0Q7S0FDaEUsQ0FBQyxFQTNCTixLQXlCZ0IsR0FBYzVDLElBRXhCLEdBRlUsRUF6QmhCLFFBeUIwQixHQUFJQSxJQUV4QixHQUZvQjtJQUd0QixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQTVCaEQsT0E0QmtCLEdBQWdCQSxJQUFjLEdBQTlCLEVBNUJsQixVQTRCOEIsR0FBSUEsSUFBYyxHQUFsQjtJQUkxQkMsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNHaUIsUUFBUTttQkFBUkEsU0FBUTs7aUJBQVJBLFNBQVE7WUFBUkEsU0FBUSxHQUF2QixnTUFBMEI7b0JBQ2hCQyxHQUFHLEVBT0g0QixJQUFJOzs7OzttQ0FQUTNCLEtBQUssQ0FDbkIsYUFBYSxFQUFFO2dDQUNmQyxPQUFPLEVBQUU7b0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjtpQ0FDckM7Z0NBQ0RDLE1BQU0sRUFBRSxLQUFLOzZCQUNoQixDQUFDOzs0QkFOSUgsR0FBRyxZQU1QOzttQ0FDaUJBLEdBQUcsQ0FBQzRCLElBQUksRUFBRTs7NEJBQXZCQSxJQUFJLFlBQW1COzRCQUM3QkwsUUFBUSxDQUFDSyxJQUFJLENBQUM7Ozs7OzthQUdqQjttQkFaYzdCLFNBQVE7O1FBYXZCVyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2RYLFFBQVEsRUFBRTtLQUNiLEVBQUU7UUFBQ3lCLElBQUk7S0FBQyxDQUFDO0lBOEJWLHFCQUNJLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBRTlDLDJFQUFnQjs7WUFFeEJtQyxPQUFPLGtCQUFJLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUU5Qyx1RUFBWTswQkFBRzBDLEtBQUssQ0FBQ0QsT0FBTzs7Ozs7b0JBQU87WUFFakVMLEdBQUcsQ0FBQ0QsT0FBTyxrQkFDUiw4REFBQ1UsS0FBRztnQkFBQ0ksT0FBTyxFQUFFOzJCQUFNbEIsTUFBTSxDQUFDLGtCQUFLSyxHQUFHO3dCQUFFRCxPQUFPLEVBQUUsS0FBSztzQkFBRSxDQUFDO2lCQUFBO2dCQUFFVyxTQUFTLEVBQUU5Qyx3RUFBYTswQkFDNUUsNEVBQUM2QyxLQUFHO29CQUFDSSxPQUFPLEVBQUUsU0FBQ0UsQ0FBQzsrQkFBS0EsQ0FBQyxDQUFDQyxlQUFlLEVBQUU7cUJBQUE7b0JBQUVDLEtBQUssRUFBRTt3QkFBRXBCLElBQUksRUFBRUcsR0FBRyxDQUFDSCxJQUFJO3dCQUFFQyxHQUFHLEVBQUVFLEdBQUcsQ0FBQ0YsR0FBRztxQkFBRTtvQkFBRVksU0FBUyxFQUFFOUMsc0VBQVc7OEJBQ3JHLDRFQUFDRCxvREFBVzt3QkFBQ3FDLEdBQUcsRUFBRUEsR0FBRzt3QkFBRWIsTUFBTSxFQUFFQSxNQUFNO3dCQUFFYyxTQUFTLEVBQUVBLFNBQVM7d0JBQUV6QixRQUFRLEVBQUVBLFFBQVE7Ozs7OzRCQUFJOzs7Ozt3QkFDakY7Ozs7O29CQUNKOzBCQUNWLDhEQUFDaUMsS0FBRztnQkFBQ0MsU0FBUyxFQUFFOUMscUZBQTBCOztrQ0FDdEMsOERBQUM2QyxLQUFHO2tDQUNBLDRFQUFDVyxJQUFFOzRCQUFDVixTQUFTLEVBQUU5Qyx1RUFBWTtzQ0FBRSxPQUFLOzs7OztnQ0FBSzs7Ozs7NEJBQ3JDO2tDQUNOLDhEQUFDNkMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFOUMsMEVBQWU7a0NBQzNCLDRFQUFDNkMsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFOUMseUVBQWM7OzhDQUMxQiw4REFBQzZDLEtBQUc7b0NBQUNDLFNBQVMsRUFBRTlDLDhFQUFtQjs7c0RBQy9CLDhEQUFDNkMsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFFOUMsMEVBQWU7c0RBQzFCc0MsS0FBSyxDQUFDd0IsR0FBRyxDQUFDLFNBQUNoQyxHQUFHLEVBQUVpQyxDQUFDLEVBQUs7Z0RBQ25CLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUU7b0RBQ1AscUJBQU8sOERBQUNsQixLQUFHO3dEQUFDSSxPQUFPLEVBQUUsU0FBQ0UsQ0FBQzttRUFBS3hCLFVBQVUsQ0FBQ3dCLENBQUMsQ0FBQ2EsS0FBSyxFQUFFYixDQUFDLENBQUNjLEtBQUssRUFBRW5DLEdBQUcsQ0FBQzt5REFBQTt3REFBRWdCLFNBQVMsRUFBRSxNQUFLLENBQVEsT0FBTmlCLENBQUMsR0FBRyxDQUFDLENBQUU7a0VBQWlCakMsR0FBRyxDQUFDb0MsUUFBUTt1REFBdEJwQyxHQUFHLENBQUNxQyxHQUFHOzs7OzZEQUFzQjtpREFDL0g7NkNBRUosQ0FBQzs7Ozs7Z0RBQ0E7c0RBQ04sOERBQUN0QixLQUFHOzRDQUFDQyxTQUFTLEVBQUU5Qyw2RUFBa0I7c0RBQzdCc0MsS0FBSyxDQUFDd0IsR0FBRyxDQUFDLFNBQUNoQyxHQUFHLEVBQUVpQyxDQUFDLEVBQUs7Z0RBQ25CLElBQUlBLENBQUMsR0FBRyxDQUFDLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUU7b0RBQ2hCLHFCQUFPLDhEQUFDbEIsS0FBRzt3REFBQ0ksT0FBTyxFQUFFLFNBQUNFLENBQUM7bUVBQUt4QixVQUFVLENBQUN3QixDQUFDLENBQUNhLEtBQUssRUFBRWIsQ0FBQyxDQUFDYyxLQUFLLEVBQUVuQyxHQUFHLENBQUM7eURBQUE7d0RBQUVnQixTQUFTLEVBQUUsTUFBSyxDQUFRLE9BQU5pQixDQUFDLEdBQUcsQ0FBQyxDQUFFO2tFQUFpQmpDLEdBQUcsQ0FBQ29DLFFBQVE7dURBQXRCcEMsR0FBRyxDQUFDcUMsR0FBRzs7Ozs2REFBc0I7aURBQy9IOzZDQUVKLENBQUM7Ozs7O2dEQUNBOzs7Ozs7d0NBQ0o7OENBQ04sOERBQUN0QixLQUFHO29DQUFDQyxTQUFTLEVBQUU5Qyw0RUFBaUI7OENBQzVCc0MsS0FBSyxDQUFDd0IsR0FBRyxDQUFDLFNBQUNoQyxHQUFHLEVBQUVpQyxDQUFDLEVBQUs7d0NBQ25CLElBQUlBLENBQUMsS0FBSyxDQUFDLEVBQUU7NENBQ1QscUJBQU8sOERBQUNsQixLQUFHO2dEQUFDSSxPQUFPLEVBQUUsU0FBQ0UsQ0FBQzsyREFBS3hCLFVBQVUsQ0FBQ3dCLENBQUMsQ0FBQ2EsS0FBSyxFQUFFYixDQUFDLENBQUNjLEtBQUssRUFBRW5DLEdBQUcsQ0FBQztpREFBQTtnREFBRWdCLFNBQVMsRUFBRyxZQUFVOzBEQUFrQmhCLEdBQUcsQ0FBQ29DLFFBQVE7K0NBQXRCcEMsR0FBRyxDQUFDcUMsR0FBRzs7OztxREFBc0I7eUNBQzdIO3FDQUNKLENBQUM7Ozs7O3dDQUNBOzs7Ozs7Z0NBQ0o7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0o7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtHQTlHdUIxRCxjQUFjO0FBQWRBLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFpbGFibGVSb29tcy5qcz81ZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuL1JlcXVlc3RGb3JtXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Jvb21zLm1vZHVsZS5jc3NcIlxyXG5cclxuY29uc3QgR0VORVJJQ19CT09LRUUgPSB7XHJcbiAgICBFbWFpbDogXCJcIixcclxuICAgIFVzZXJuYW1lOiBcIlwiLFxyXG4gICAgUGhvbmU6IFwiXCIsXHJcbiAgICBDb21wYW55OiBcIlwiLFxyXG4gICAgUm9vbTogXCJcIixcclxuICAgIERhdGU6IFwiXCIsXHJcbiAgICBIb3VyOiBcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByb29tOiBcIlwiLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGNsaWNrZWQ6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Jvb2tlZSwgc2V0Qm9va2VlXSA9IHVzZVN0YXRlKEdFTkVSSUNfQk9PS0VFKVxyXG4gICAgY29uc3QgW3Jvb21zLCBzZXRSb29tc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzZW5kLCBzZXRTZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2FkZGVkLCBzZXRBZGRlZF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJCb29raW5nIHJlcXVlc3RlZCwgcGxlYXNlIHdhaXQgZm9yIGFkbWluIGFwcHJvdmFsLlwiLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VTdGF0ZXMoKSB7XHJcbiAgICAgICAgc2V0Q2xpY2tlZChmYWxzZSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gQ2FsbEJhY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvcm9vbXMvJywge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFJvb21zKGpzb24pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2VuZChmYWxzZSlcclxuICAgICAgICBDYWxsQmFjaygpXHJcbiAgICB9LCBbc2VuZF0pXHJcblxyXG4gICAgZnVuY3Rpb24gQm9va1Jvb20oaWQpIHtcclxuICAgICAgICBzZXRDbGlja2VkKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dChjaGFuZ2VTdGF0ZXMoKSwgMTAwMClcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gQ2FsbEJhY2soaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9yb29tcy8nLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5ib29rZWUsIFJvb206IGlkIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIENhbGxCYWNrKGlkKVxyXG4gICAgICAgIHNldFNlbmQodHJ1ZSlcclxuICAgICAgICAvL3NldEJvb2tlZShHRU5FUklDX0JPT0tFRSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnUocG9zWCwgcG9zWSwgZWxlKSB7XHJcbiAgICAgICAgc2V0UG9zKHtcclxuICAgICAgICAgICAgcm9vbTogZWxlLFxyXG4gICAgICAgICAgICBsZWZ0OiBwb3NYLFxyXG4gICAgICAgICAgICB0b3A6IHBvc1ksXHJcbiAgICAgICAgICAgIGNsaWNrZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9PnthZGRlZC5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtwb3MuY2xpY2tlZCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRQb3MoeyAuLi5wb3MsIGNsaWNrZWQ6IGZhbHNlIH0pfSBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9IHN0eWxlPXt7IGxlZnQ6IHBvcy5sZWZ0LCB0b3A6IHBvcy50b3AgfX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXF1ZXN0Rm9ybSBwb3M9e3Bvc30gYm9va2VlPXtib29rZWV9IHNldEJvb2tlZT17c2V0Qm9va2VlfSBCb29rUm9vbT17Qm9va1Jvb219IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZFJlY3RhbmdsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Uk9PTVM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsbHJvb21zfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcGRvd25Sb29tc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb21zVG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm9vbXMubWFwKChlbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsoZSkgPT4gY3JlYXRlTWVudShlLnBhZ2VYLCBlLnBhZ2VZLCBlbGUpfSBjbGFzc05hbWU9e2Byb29tJHtpICsgMX1gfSBrZXk9e2VsZS5faWR9PntlbGUucm9vbU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vbXNCb3R0b219PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb29tcy5tYXAoKGVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDMgJiYgaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBjcmVhdGVNZW51KGUucGFnZVgsIGUucGFnZVksIGVsZSl9IGNsYXNzTmFtZT17YHJvb20ke2kgKyAxfWB9IGtleT17ZWxlLl9pZH0+e2VsZS5yb29tTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdWRpdG9yaXVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb29tcy5tYXAoKGVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBjcmVhdGVNZW51KGUucGFnZVgsIGUucGFnZVksIGVsZSl9IGNsYXNzTmFtZT17YGF1ZGl0b3JpdW1gfSBrZXk9e2VsZS5faWR9PntlbGUucm9vbU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVxdWVzdEZvcm0iLCJzdHlsZXMiLCJHRU5FUklDX0JPT0tFRSIsIkVtYWlsIiwiVXNlcm5hbWUiLCJQaG9uZSIsIkNvbXBhbnkiLCJSb29tIiwiRGF0ZSIsIkhvdXIiLCJBdmFpbGFibGVSb29tcyIsImNoYW5nZVN0YXRlcyIsInNldENsaWNrZWQiLCJCb29rUm9vbSIsImlkIiwic2V0VGltZW91dCIsIkNhbGxCYWNrIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJib29rZWUiLCJjb25zb2xlIiwibG9nIiwic2V0U2VuZCIsImNyZWF0ZU1lbnUiLCJwb3NYIiwicG9zWSIsImVsZSIsInNldFBvcyIsInJvb20iLCJsZWZ0IiwidG9wIiwiY2xpY2tlZCIsInBvcyIsInNldEJvb2tlZSIsInJvb21zIiwic2V0Um9vbXMiLCJzZW5kIiwibWVzc2FnZSIsImFkZGVkIiwic2V0QWRkZWQiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicG9wdXAiLCJvbkNsaWNrIiwic2NyZWVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0eWxlIiwibWVudSIsImJhY2tncm91bmRSZWN0YW5nbGUiLCJoMSIsInRpdGxlIiwiYWxscm9vbXMiLCJ0b3Bkb3duIiwidG9wZG93blJvb21zIiwicm9vbXNUb3AiLCJtYXAiLCJpIiwicGFnZVgiLCJwYWdlWSIsInJvb21OYW1lIiwiX2lkIiwicm9vbXNCb3R0b20iLCJhdWRpdG9yaXVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AvailableRooms.js\n");

/***/ })

});