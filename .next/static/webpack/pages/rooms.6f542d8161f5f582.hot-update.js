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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AvailableRooms; }\n/* harmony export */ });\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RequestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestForm */ \"./components/RequestForm.js\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/rooms.module.css */ \"./styles/rooms.module.css\");\n/* harmony import */ var _styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GENERIC_BOOKEE = {\n    Email: \"\",\n    Username: \"\",\n    Phone: \"\",\n    Company: \"\",\n    Room: \"\",\n    Date: \"\",\n    Hour: \"\"\n};\nfunction AvailableRooms() {\n    var _this = this;\n    var BookRoom = function BookRoom(id1) {\n        setAdded(_objectSpread({}, added, {\n            clicked: true\n        }));\n        setTimeout(setAdded(_objectSpread({}, added, {\n            clicked: false\n        })), 1000);\n        console.log(added);\n        function CallBack(id) {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n                var res;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"POST\",\n                                body: JSON.stringify(_objectSpread({}, bookee, {\n                                    Room: id\n                                }))\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        console.log(id1);\n        CallBack(id1);\n        setSend(true);\n    //setBookee(GENERIC_BOOKEE)\n    };\n    var createMenu = function createMenu(posX, posY, ele) {\n        setPos({\n            room: ele,\n            left: posX,\n            top: posY,\n            clicked: true\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        room: \"\",\n        left: 0,\n        top: 0,\n        clicked: false\n    }), pos = ref[0], setPos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(GENERIC_BOOKEE), bookee = ref1[0], setBookee = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), rooms = ref2[0], setRooms = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), send = ref3[0], setSend = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        message: \"Booking requested, please wait for admin approval.\",\n        clicked: false\n    }), added = ref4[0], setAdded = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function CallBack() {\n            return _CallBack.apply(this, arguments);\n        }\n        function _CallBack() {\n            _CallBack = _asyncToGenerator(C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, json;\n                return C_Users_affei_Desktop_hackerton_HackertonGrupo1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/rooms/\", {\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                method: \"GET\"\n                            });\n                        case 2:\n                            res = _ctx.sent;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            json = _ctx.sent;\n                            setRooms(json);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _CallBack.apply(this, arguments);\n        }\n        setSend(false);\n        CallBack();\n    }, [\n        send\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            added.clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup),\n                children: added.message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 79,\n                columnNumber: 34\n            }, this),\n            pos.clicked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return setPos(_objectSpread({}, pos, {\n                        clicked: false\n                    }));\n                },\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().screen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    onClick: function(e) {\n                        return e.stopPropagation();\n                    },\n                    style: {\n                        left: pos.left,\n                        top: pos.top\n                    },\n                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RequestForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        pos: pos,\n                        bookee: bookee,\n                        setBookee: setBookee,\n                        BookRoom: BookRoom\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 84,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                    lineNumber: 83,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 82,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().backgroundRectangle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            children: \"ROOMS\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().allrooms),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdown),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().topdownRooms),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsTop),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i < 4) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().roomsBottom),\n                                            children: rooms.map(function(ele, i) {\n                                                if (i > 3 && i < 8) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        onClick: function(e) {\n                                                            return createMenu(e.pageX, e.pageY, ele);\n                                                        },\n                                                        className: \"room\".concat(i + 1),\n                                                        children: ele.roomName\n                                                    }, ele._id, false, {\n                                                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 48\n                                                    }, _this);\n                                                }\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_styles_rooms_module_css__WEBPACK_IMPORTED_MODULE_4___default().auditorium),\n                                    children: rooms.map(function(ele, i) {\n                                        if (i === 8) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                onClick: function(e) {\n                                                    return createMenu(e.pageX, e.pageY, ele);\n                                                },\n                                                className: \"auditorium\",\n                                                children: ele.roomName\n                                            }, ele._id, false, {\n                                                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 44\n                                            }, _this);\n                                        }\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\hackerton\\\\HackertonGrupo1\\\\components\\\\AvailableRooms.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n};\n_s(AvailableRooms, \"8DJBlQqvXI3S5CVJITDm4dW6flE=\");\n_c = AvailableRooms;\nvar _c;\n$RefreshReg$(_c, \"AvailableRooms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YWlsYWJsZVJvb21zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQztBQUNNO0FBQ1E7O0FBRS9DLElBQU1JLGNBQWMsR0FBRztJQUNuQkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsSUFBSSxFQUFFLEVBQUU7Q0FDWDtBQUVjLFNBQVNDLGNBQWMsR0FBRzs7UUFnQzVCQyxRQUFRLEdBQWpCLFNBQVNBLFFBQVEsQ0FBQ0MsR0FBRSxFQUFFO1FBQ2xCQyxRQUFRLENBQUMsa0JBQUtDLEtBQUs7WUFBRUMsT0FBTyxFQUFFLElBQUk7VUFBRSxDQUFDO1FBQ3JDQyxVQUFVLENBQUNILFFBQVEsQ0FBQyxrQkFBS0MsS0FBSztZQUFFQyxPQUFPLEVBQUUsS0FBSztVQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDeERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUM7aUJBQ0hLLFFBQVEsQ0FBQ1AsRUFBRTttQkFBWE8sU0FBUTs7aUJBQVJBLFNBQVE7WUFBUkEsU0FBUSxHQUF2Qiw4TEFBd0JQLEVBQUUsRUFBRTtvQkFDbEJRLEdBQUc7Ozs7O21DQUFTQyxLQUFLLENBQ25CLGFBQWEsRUFBRTtnQ0FDZkMsT0FBTyxFQUFFO29DQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3JDO2dDQUNEQyxNQUFNLEVBQUUsTUFBTTtnQ0FDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxrQkFBS0MsTUFBTTtvQ0FBRXBCLElBQUksRUFBRUssRUFBRTtrQ0FBRSxDQUFDOzZCQUNoRCxDQUFDOzs0QkFQSVEsR0FBRyxZQU9QOzs7Ozs7YUFDTDttQkFUY0QsU0FBUTs7UUFVdkJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixHQUFFLENBQUM7UUFDZk8sUUFBUSxDQUFDUCxHQUFFLENBQUM7UUFDWmdCLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDYiwyQkFBMkI7S0FDOUI7UUFDUUMsVUFBVSxHQUFuQixTQUFTQSxVQUFVLENBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUU7UUFDakNDLE1BQU0sQ0FBQztZQUNIQyxJQUFJLEVBQUVGLEdBQUc7WUFDVEcsSUFBSSxFQUFFTCxJQUFJO1lBQ1ZNLEdBQUcsRUFBRUwsSUFBSTtZQUNUaEIsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQztLQUVMOztJQTFERCxJQUFzQmpCLEdBS3BCLEdBTG9CQSwrQ0FBUSxDQUFDO1FBQzNCb0MsSUFBSSxFQUFFLEVBQUU7UUFDUkMsSUFBSSxFQUFFLENBQUM7UUFDUEMsR0FBRyxFQUFFLENBQUM7UUFDTnJCLE9BQU8sRUFBRSxLQUFLO0tBQ2pCLENBQUMsRUFyQk4sR0FnQmMsR0FBWWpCLEdBS3BCLEdBTFEsRUFoQmQsTUFnQnNCLEdBQUlBLEdBS3BCLEdBTGdCO0lBTWxCLElBQTRCQSxJQUF3QixHQUF4QkEsK0NBQVEsQ0FBQ0ksY0FBYyxDQUFDLEVBdEJ4RCxNQXNCaUIsR0FBZUosSUFBd0IsR0FBdkMsRUF0QmpCLFNBc0I0QixHQUFJQSxJQUF3QixHQUE1QjtJQUN4QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXZCMUMsS0F1QmdCLEdBQWNBLElBQVksR0FBMUIsRUF2QmhCLFFBdUIwQixHQUFJQSxJQUFZLEdBQWhCO0lBQ3RCLElBQXdCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBeEIzQyxJQXdCZSxHQUFhQSxJQUFlLEdBQTVCLEVBeEJmLE9Bd0J3QixHQUFJQSxJQUFlLEdBQW5CO0lBQ3BCLElBQTBCQSxJQUd4QixHQUh3QkEsK0NBQVEsQ0FBQztRQUMvQjRDLE9BQU8sRUFBRSxvREFBb0Q7UUFDN0QzQixPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDLEVBNUJOLEtBeUJnQixHQUFjakIsSUFHeEIsR0FIVSxFQXpCaEIsUUF5QjBCLEdBQUlBLElBR3hCLEdBSG9CO0lBSXRCQyxnREFBUyxDQUFDLFdBQU07aUJBQ0dvQixRQUFRO21CQUFSQSxTQUFROztpQkFBUkEsU0FBUTtZQUFSQSxTQUFRLEdBQXZCLGdNQUEwQjtvQkFDaEJDLEdBQUcsRUFPSHVCLElBQUk7Ozs7O21DQVBRdEIsS0FBSyxDQUNuQixhQUFhLEVBQUU7Z0NBQ2ZDLE9BQU8sRUFBRTtvQ0FDTCxjQUFjLEVBQUUsa0JBQWtCO2lDQUNyQztnQ0FDREMsTUFBTSxFQUFFLEtBQUs7NkJBQ2hCLENBQUM7OzRCQU5JSCxHQUFHLFlBTVA7O21DQUNpQkEsR0FBRyxDQUFDdUIsSUFBSSxFQUFFOzs0QkFBdkJBLElBQUksWUFBbUI7NEJBQzdCSCxRQUFRLENBQUNHLElBQUksQ0FBQzs7Ozs7O2FBR2pCO21CQVpjeEIsU0FBUTs7UUFhdkJTLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDZFQsUUFBUSxFQUFFO0tBQ2IsRUFBRTtRQUFDc0IsSUFBSTtLQUFDLENBQUM7SUE4QlYscUJBQ0ksOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFNUMsMkVBQWdCOztZQUV4QmEsS0FBSyxDQUFDQyxPQUFPLGtCQUFJLDhEQUFDNkIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFNUMsdUVBQVk7MEJBQUdhLEtBQUssQ0FBQzRCLE9BQU87Ozs7O29CQUFPO1lBRXZFTCxHQUFHLENBQUN0QixPQUFPLGtCQUNSLDhEQUFDNkIsS0FBRztnQkFBQ0ksT0FBTyxFQUFFOzJCQUFNZixNQUFNLENBQUMsa0JBQUtJLEdBQUc7d0JBQUV0QixPQUFPLEVBQUUsS0FBSztzQkFBRSxDQUFDO2lCQUFBO2dCQUFFOEIsU0FBUyxFQUFFNUMsd0VBQWE7MEJBQzVFLDRFQUFDMkMsS0FBRztvQkFBQ0ksT0FBTyxFQUFFLFNBQUNFLENBQUM7K0JBQUtBLENBQUMsQ0FBQ0MsZUFBZSxFQUFFO3FCQUFBO29CQUFFQyxLQUFLLEVBQUU7d0JBQUVqQixJQUFJLEVBQUVFLEdBQUcsQ0FBQ0YsSUFBSTt3QkFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUNELEdBQUc7cUJBQUU7b0JBQUVTLFNBQVMsRUFBRTVDLHNFQUFXOzhCQUNyRyw0RUFBQ0Qsb0RBQVc7d0JBQUNxQyxHQUFHLEVBQUVBLEdBQUc7d0JBQUVWLE1BQU0sRUFBRUEsTUFBTTt3QkFBRVcsU0FBUyxFQUFFQSxTQUFTO3dCQUFFM0IsUUFBUSxFQUFFQSxRQUFROzs7Ozs0QkFBSTs7Ozs7d0JBQ2pGOzs7OztvQkFDSjswQkFDViw4REFBQ2lDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTVDLHFGQUEwQjs7a0NBQ3RDLDhEQUFDMkMsS0FBRztrQ0FDQSw0RUFBQ1csSUFBRTs0QkFBQ1YsU0FBUyxFQUFFNUMsdUVBQVk7c0NBQUUsT0FBSzs7Ozs7Z0NBQUs7Ozs7OzRCQUNyQztrQ0FDTiw4REFBQzJDLEtBQUc7d0JBQUNDLFNBQVMsRUFBRTVDLDBFQUFlO2tDQUMzQiw0RUFBQzJDLEtBQUc7NEJBQUNDLFNBQVMsRUFBRTVDLHlFQUFjOzs4Q0FDMUIsOERBQUMyQyxLQUFHO29DQUFDQyxTQUFTLEVBQUU1Qyw4RUFBbUI7O3NEQUMvQiw4REFBQzJDLEtBQUc7NENBQUNDLFNBQVMsRUFBRTVDLDBFQUFlO3NEQUMxQnNDLEtBQUssQ0FBQ3NCLEdBQUcsQ0FBQyxTQUFDN0IsR0FBRyxFQUFFOEIsQ0FBQyxFQUFLO2dEQUNuQixJQUFJQSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29EQUNQLHFCQUFPLDhEQUFDbEIsS0FBRzt3REFBQ0ksT0FBTyxFQUFFLFNBQUNFLENBQUM7bUVBQUtyQixVQUFVLENBQUNxQixDQUFDLENBQUNhLEtBQUssRUFBRWIsQ0FBQyxDQUFDYyxLQUFLLEVBQUVoQyxHQUFHLENBQUM7eURBQUE7d0RBQUVhLFNBQVMsRUFBRSxNQUFLLENBQVEsT0FBTmlCLENBQUMsR0FBRyxDQUFDLENBQUU7a0VBQWlCOUIsR0FBRyxDQUFDaUMsUUFBUTt1REFBdEJqQyxHQUFHLENBQUNrQyxHQUFHOzs7OzZEQUFzQjtpREFDL0g7NkNBRUosQ0FBQzs7Ozs7Z0RBQ0E7c0RBQ04sOERBQUN0QixLQUFHOzRDQUFDQyxTQUFTLEVBQUU1Qyw2RUFBa0I7c0RBQzdCc0MsS0FBSyxDQUFDc0IsR0FBRyxDQUFDLFNBQUM3QixHQUFHLEVBQUU4QixDQUFDLEVBQUs7Z0RBQ25CLElBQUlBLENBQUMsR0FBRyxDQUFDLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUU7b0RBQ2hCLHFCQUFPLDhEQUFDbEIsS0FBRzt3REFBQ0ksT0FBTyxFQUFFLFNBQUNFLENBQUM7bUVBQUtyQixVQUFVLENBQUNxQixDQUFDLENBQUNhLEtBQUssRUFBRWIsQ0FBQyxDQUFDYyxLQUFLLEVBQUVoQyxHQUFHLENBQUM7eURBQUE7d0RBQUVhLFNBQVMsRUFBRSxNQUFLLENBQVEsT0FBTmlCLENBQUMsR0FBRyxDQUFDLENBQUU7a0VBQWlCOUIsR0FBRyxDQUFDaUMsUUFBUTt1REFBdEJqQyxHQUFHLENBQUNrQyxHQUFHOzs7OzZEQUFzQjtpREFDL0g7NkNBRUosQ0FBQzs7Ozs7Z0RBQ0E7Ozs7Ozt3Q0FDSjs4Q0FDTiw4REFBQ3RCLEtBQUc7b0NBQUNDLFNBQVMsRUFBRTVDLDRFQUFpQjs4Q0FDNUJzQyxLQUFLLENBQUNzQixHQUFHLENBQUMsU0FBQzdCLEdBQUcsRUFBRThCLENBQUMsRUFBSzt3Q0FDbkIsSUFBSUEsQ0FBQyxLQUFLLENBQUMsRUFBRTs0Q0FDVCxxQkFBTyw4REFBQ2xCLEtBQUc7Z0RBQUNJLE9BQU8sRUFBRSxTQUFDRSxDQUFDOzJEQUFLckIsVUFBVSxDQUFDcUIsQ0FBQyxDQUFDYSxLQUFLLEVBQUViLENBQUMsQ0FBQ2MsS0FBSyxFQUFFaEMsR0FBRyxDQUFDO2lEQUFBO2dEQUFFYSxTQUFTLEVBQUcsWUFBVTswREFBa0JiLEdBQUcsQ0FBQ2lDLFFBQVE7K0NBQXRCakMsR0FBRyxDQUFDa0MsR0FBRzs7OztxREFBc0I7eUNBQzdIO3FDQUNKLENBQUM7Ozs7O3dDQUNBOzs7Ozs7Z0NBQ0o7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0o7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtHQTNHdUJ4RCxjQUFjO0FBQWRBLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFpbGFibGVSb29tcy5qcz81ZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuL1JlcXVlc3RGb3JtXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Jvb21zLm1vZHVsZS5jc3NcIlxyXG5cclxuY29uc3QgR0VORVJJQ19CT09LRUUgPSB7XHJcbiAgICBFbWFpbDogXCJcIixcclxuICAgIFVzZXJuYW1lOiBcIlwiLFxyXG4gICAgUGhvbmU6IFwiXCIsXHJcbiAgICBDb21wYW55OiBcIlwiLFxyXG4gICAgUm9vbTogXCJcIixcclxuICAgIERhdGU6IFwiXCIsXHJcbiAgICBIb3VyOiBcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWlsYWJsZVJvb21zKCkge1xyXG4gICAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICByb29tOiBcIlwiLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGNsaWNrZWQ6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Jvb2tlZSwgc2V0Qm9va2VlXSA9IHVzZVN0YXRlKEdFTkVSSUNfQk9PS0VFKVxyXG4gICAgY29uc3QgW3Jvb21zLCBzZXRSb29tc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzZW5kLCBzZXRTZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2FkZGVkLCBzZXRBZGRlZF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJCb29raW5nIHJlcXVlc3RlZCwgcGxlYXNlIHdhaXQgZm9yIGFkbWluIGFwcHJvdmFsLlwiLFxyXG4gICAgICAgIGNsaWNrZWQ6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBDYWxsQmFjaygpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9yb29tcy8nLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0Um9vbXMoanNvbilcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZW5kKGZhbHNlKVxyXG4gICAgICAgIENhbGxCYWNrKClcclxuICAgIH0sIFtzZW5kXSlcclxuXHJcbiAgICBmdW5jdGlvbiBCb29rUm9vbShpZCkge1xyXG4gICAgICAgIHNldEFkZGVkKHsgLi4uYWRkZWQsIGNsaWNrZWQ6IHRydWUgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KHNldEFkZGVkKHsgLi4uYWRkZWQsIGNsaWNrZWQ6IGZhbHNlIH0pLCAxMDAwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZGVkKVxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIENhbGxCYWNrKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgJy9hcGkvcm9vbXMvJywge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uYm9va2VlLCBSb29tOiBpZCB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBDYWxsQmFjayhpZClcclxuICAgICAgICBzZXRTZW5kKHRydWUpXHJcbiAgICAgICAgLy9zZXRCb29rZWUoR0VORVJJQ19CT09LRUUpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51KHBvc1gsIHBvc1ksIGVsZSkge1xyXG4gICAgICAgIHNldFBvcyh7XHJcbiAgICAgICAgICAgIHJvb206IGVsZSxcclxuICAgICAgICAgICAgbGVmdDogcG9zWCxcclxuICAgICAgICAgICAgdG9wOiBwb3NZLFxyXG4gICAgICAgICAgICBjbGlja2VkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWRkZWQuY2xpY2tlZCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfT57YWRkZWQubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cG9zLmNsaWNrZWQgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0UG9zKHsgLi4ucG9zLCBjbGlja2VkOiBmYWxzZSB9KX0gY2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfSBzdHlsZT17eyBsZWZ0OiBwb3MubGVmdCwgdG9wOiBwb3MudG9wIH19IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVxdWVzdEZvcm0gcG9zPXtwb3N9IGJvb2tlZT17Ym9va2VlfSBzZXRCb29rZWU9e3NldEJvb2tlZX0gQm9va1Jvb209e0Jvb2tSb29tfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmRSZWN0YW5nbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJPT01TPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGxyb29tc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3Bkb3duUm9vbXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb29tc1RvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvb21zLm1hcCgoZWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgb25DbGljaz17KGUpID0+IGNyZWF0ZU1lbnUoZS5wYWdlWCwgZS5wYWdlWSwgZWxlKX0gY2xhc3NOYW1lPXtgcm9vbSR7aSArIDF9YH0ga2V5PXtlbGUuX2lkfT57ZWxlLnJvb21OYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb21zQm90dG9tfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm9vbXMubWFwKChlbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAzICYmIGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsoZSkgPT4gY3JlYXRlTWVudShlLnBhZ2VYLCBlLnBhZ2VZLCBlbGUpfSBjbGFzc05hbWU9e2Byb29tJHtpICsgMX1gfSBrZXk9e2VsZS5faWR9PntlbGUucm9vbU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXVkaXRvcml1bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm9vbXMubWFwKChlbGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsoZSkgPT4gY3JlYXRlTWVudShlLnBhZ2VYLCBlLnBhZ2VZLCBlbGUpfSBjbGFzc05hbWU9e2BhdWRpdG9yaXVtYH0ga2V5PXtlbGUuX2lkfT57ZWxlLnJvb21OYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlcXVlc3RGb3JtIiwic3R5bGVzIiwiR0VORVJJQ19CT09LRUUiLCJFbWFpbCIsIlVzZXJuYW1lIiwiUGhvbmUiLCJDb21wYW55IiwiUm9vbSIsIkRhdGUiLCJIb3VyIiwiQXZhaWxhYmxlUm9vbXMiLCJCb29rUm9vbSIsImlkIiwic2V0QWRkZWQiLCJhZGRlZCIsImNsaWNrZWQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIkNhbGxCYWNrIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJib29rZWUiLCJzZXRTZW5kIiwiY3JlYXRlTWVudSIsInBvc1giLCJwb3NZIiwiZWxlIiwic2V0UG9zIiwicm9vbSIsImxlZnQiLCJ0b3AiLCJwb3MiLCJzZXRCb29rZWUiLCJyb29tcyIsInNldFJvb21zIiwic2VuZCIsIm1lc3NhZ2UiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicG9wdXAiLCJvbkNsaWNrIiwic2NyZWVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0eWxlIiwibWVudSIsImJhY2tncm91bmRSZWN0YW5nbGUiLCJoMSIsInRpdGxlIiwiYWxscm9vbXMiLCJ0b3Bkb3duIiwidG9wZG93blJvb21zIiwicm9vbXNUb3AiLCJtYXAiLCJpIiwicGFnZVgiLCJwYWdlWSIsInJvb21OYW1lIiwiX2lkIiwicm9vbXNCb3R0b20iLCJhdWRpdG9yaXVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AvailableRooms.js\n");

/***/ })

});