"use strict";
(self['webpackChunkclient'] = self['webpackChunkclient'] || []).push([["manage/page"], {
"./src/routes/manage/index.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1736956363013
        var cssReload = (__webpack_require__("../node_modules/.pnpm/@rspack+core@1.1.8_@swc+helpers@0.5.15/node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/generateToken.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateAuthHeader: function() { return generateAuthHeader; }
});
/* ESM import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js");
/* ESM import */var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread_props.js");
/* ESM import */var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/index.js");
/* ESM import */var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



function generateAuthHeader(payload) {
    // This should match the server-side SECRET_KEY
    var SECRET_KEY = "KEfw-asdf-1234-5678-9012";
    var timestamp = Date.now().toString();
    var token = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().HmacSHA256(JSON.stringify((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_1__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_2__._)({}, payload), {
        timestamp: timestamp
    })), SECRET_KEY).toString();
    return {
        token: token,
        timestamp: timestamp
    };
}

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/routes/manage/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js");
/* ESM import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* ESM import */var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/manage/index.css");
/* ESM import */var _generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/generateToken.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




var _this = undefined;

var _s = $RefreshSig$();



/* ESM default export */ __webpack_exports__["default"] = (_s(function() {
    _s();
    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), 2), gameIdStart = _useState[0], setGameIdStart = _useState[1];
    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), 2), gameIdQuery = _useState1[0], setGameIdQuery = _useState1[1];
    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), scores = _useState2[0], setScores = _useState2[1];
    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        text: '',
        type: ''
    }), 2), message = _useState3[0], setMessage = _useState3[1];
    var showMessage = function(text, type) {
        setMessage({
            text: text,
            type: type
        });
        setTimeout(function() {
            return setMessage({
                text: '',
                type: ''
            });
        }, 3000);
    };
    var handleStartGame = /*#__PURE__*/ function() {
        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {
            var response, error;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            fetch('http://localhost:8501/start', {
                                method: 'POST',
                                headers: (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({
                                    'Content-Type': 'application/json'
                                }, (0,_generateToken__WEBPACK_IMPORTED_MODULE_3__.generateAuthHeader)({
                                    gameId: gameIdStart
                                })),
                                body: JSON.stringify({
                                    gameId: gameIdStart
                                })
                            })
                        ];
                    case 1:
                        response = _state.sent();
                        if (response.ok) {
                            showMessage('Game started successfully!', 'success');
                        } else {
                            showMessage('Failed to start game', 'error');
                        }
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        showMessage('Error starting game', 'error');
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleStartGame() {
            return _ref.apply(this, arguments);
        };
    }();
    var handleQueryScores = /*#__PURE__*/ function() {
        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {
            var response, data, error;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            fetch("http://localhost:8501/scores/".concat(gameIdQuery), {
                                headers: (0,_generateToken__WEBPACK_IMPORTED_MODULE_3__.generateAuthHeader)({
                                    gameId: gameIdQuery
                                })
                            })
                        ];
                    case 1:
                        response = _state.sent();
                        return [
                            4,
                            response.json()
                        ];
                    case 2:
                        data = _state.sent();
                        if (response.ok) {
                            setScores(data);
                            if (data.length === 0) {
                                showMessage('No scores found for this game', 'error');
                            }
                        } else {
                            showMessage('Failed to fetch scores', 'error');
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        showMessage('Error fetching scores', 'error');
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleQueryScores() {
            return _ref.apply(this, arguments);
        };
    }();
    var handleClearData = /*#__PURE__*/ function() {
        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {
            var response, error;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!window.confirm('Are you sure you want to clear all data?')) {
                            return [
                                2
                            ];
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            fetch('http://localhost:8501/clear', {
                                method: 'POST',
                                headers: (0,_generateToken__WEBPACK_IMPORTED_MODULE_3__.generateAuthHeader)({})
                            })
                        ];
                    case 2:
                        response = _state.sent();
                        if (response.ok) {
                            setScores([]);
                            showMessage('Data cleared successfully', 'success');
                        } else {
                            showMessage('Failed to clear data', 'error');
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        showMessage('Error clearing data', 'error');
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleClearData() {
            return _ref.apply(this, arguments);
        };
    }();
    if (!localStorage.getItem("color-game-token")) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "manage-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "manage-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        children: "Start Game"
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "manage-form",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                type: "text",
                                className: "manage-input",
                                value: gameIdStart,
                                onChange: function(e) {
                                    return setGameIdStart(e.target.value);
                                },
                                placeholder: "Enter Game ID"
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                className: "manage-button",
                                onClick: handleStartGame,
                                children: "Start Game"
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "manage-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        children: "Query Scores"
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "manage-form",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                type: "text",
                                className: "manage-input",
                                value: gameIdQuery,
                                onChange: function(e) {
                                    return setGameIdQuery(e.target.value);
                                },
                                placeholder: "Enter Game ID"
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                className: "manage-button",
                                onClick: handleQueryScores,
                                children: "Query Scores"
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, _this),
                    scores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
                        className: "score-table",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                                            children: "Player Name"
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                                            children: "Score"
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                                children: scores.map(function(score, index) {
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                                                children: score.playerName
                                            }, void 0, false, {
                                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                                                children: score.score
                                            }, void 0, false, {
                                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, index, true, {
                                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, _this);
                                })
                            }, void 0, false, {
                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "manage-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        children: "Clear Data"
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: "manage-button danger",
                        onClick: handleClearData,
                        children: "Clear All Data"
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, _this),
            message.text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "".concat(message.type, "-message"),
                children: message.text
            }, void 0, false, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/manage/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, _this);
}, "fPpkoY3cMxF9WhoS/mlboAKx2AI="));

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"?e100": (function () {
/* (ignored) */

}),

}]);
//# sourceMappingURL=page.js.map