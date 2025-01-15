"use strict";
(self['webpackChunkclient'] = self['webpackChunkclient'] || []).push([["game/page"], {
"./src/routes/game/index.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1736956767742
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
"./src/routes/game/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js");
/* ESM import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* ESM import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* ESM import */var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs");
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/game/index.css");
/* ESM import */var _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/.pnpm/react-router-dom@6.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js");
/* ESM import */var _generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/generateToken.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





var _this = undefined;

var _s = $RefreshSig$();




var COLORS = [
    {
        name: "Red",
        value: "#FF0000"
    },
    {
        name: "Green",
        value: "#008000"
    },
    {
        name: "Blue",
        value: "#0000FF"
    },
    {
        name: "Yellow",
        value: "#FFD700"
    },
    {
        name: "Black",
        value: "#000000"
    },
    {
        name: "White",
        value: "#FFFFFF"
    },
    {
        name: "Purple",
        value: "#800080"
    },
    {
        name: "Pink",
        value: "#FFC0CB"
    },
    {
        name: "Gray",
        value: "#808080"
    }
];
var MAX_ERRORS = 3;
var MAX_INTERVAL = 5000; // 5 seconds
var MIN_INTERVAL = 3000; // 3 seconds
var INTERVAL_DECREASE = 200; // Decrease by 200ms each round
var Index = function() {
    _s();
    var _useSearchParams = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)(), 1), searchParams = _useSearchParams[0];
    var gameId = searchParams.get("gameId");
    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isWaiting = _useState[0], setIsWaiting = _useState[1];
    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), 2), playerName = _useState1[0], setPlayerName = _useState1[1];
    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentWord = _useState2[0], setCurrentWord = _useState2[1];
    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), displayColor = _useState3[0], setDisplayColor = _useState3[1];
    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), previousColor = _useState4[0], setPreviousColor = _useState4[1];
    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), options = _useState5[0], setOptions = _useState5[1];
    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("welcome"), 2), gamePhase = _useState6[0], setGamePhase = _useState6[1];
    var _useState7 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), score = _useState7[0], setScore = _useState7[1];
    var _useState8 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), errorCount = _useState8[0], setErrorCount = _useState8[1];
    var _useState9 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), errorType = _useState9[0], setErrorType = _useState9[1];
    var _useState10 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), roundCount = _useState10[0], setRoundCount = _useState10[1];
    var _useState11 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MAX_INTERVAL), 2), currentInterval = _useState11[0], setCurrentInterval = _useState11[1];
    var _useState12 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), remainingTime = _useState12[0], setRemainingTime = _useState12[1];
    var handleStartGame = /*#__PURE__*/ function() {
        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function(e) {
            var eventSource;
            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {
                e.preventDefault();
                if (!playerName.trim()) {
                    return [
                        2
                    ];
                }
                // if gameId is not provided, start a offline game
                if (!gameId) {
                    generateRound();
                    setGamePhase("display");
                    return [
                        2
                    ];
                }
                setIsWaiting(true);
                eventSource = new EventSource("http://localhost:8501/listen/".concat(gameId, "?userName=").concat(playerName));
                eventSource.onmessage = function(event) {
                    if (event.data === "ready") {
                        setIsWaiting(false);
                        generateRound();
                        setGamePhase("display");
                    }
                };
                return [
                    2
                ];
            });
        });
        return function handleStartGame(e) {
            return _ref.apply(this, arguments);
        };
    }();
    // Add reset game function
    var resetGame = function() {
        setScore(0);
        setErrorCount(0);
        setErrorType(null);
        setRoundCount(0);
        setCurrentInterval(MAX_INTERVAL);
        generateRound();
        setGamePhase("display");
    };
    // Generate random colors for display
    var generateRound = function() {
        var wordColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        var textColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        setCurrentWord(wordColor);
        setDisplayColor(textColor);
    };
    // Generate answer options
    var generateOptions = function(correctColor) {
        var shuffledColors = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8__._)(COLORS).filter(function(c) {
            return c !== correctColor;
        }).sort(function() {
            return Math.random() - 0.5;
        }).slice(0, 2);
        var allOptions = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_8__._)(shuffledColors).concat([
            correctColor
        ]).sort(function() {
            return Math.random() - 0.5;
        });
        setOptions(allOptions);
    };
    // Start new round
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        generateRound();
    }, []);
    // Add function to calculate interval based on round count
    var calculateInterval = function(round) {
        var newInterval = MAX_INTERVAL - round * INTERVAL_DECREASE;
        return Math.max(newInterval, MIN_INTERVAL);
    };
    // Modified useEffect for timer with countdown
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (gamePhase === "display") {
            setRemainingTime(currentInterval / 1000);
            var mainTimer = setTimeout(function() {
                setPreviousColor(displayColor);
                generateOptions(displayColor);
                generateRound();
                setGamePhase("question");
            }, currentInterval);
            // Add countdown timer
            var countdownInterval = setInterval(function() {
                setRemainingTime(function(prev) {
                    return Math.max(0, prev - 0.1);
                });
            }, 100);
            return function() {
                clearTimeout(mainTimer);
                clearInterval(countdownInterval);
            };
        } else if (gamePhase === "question") {
            setRemainingTime(currentInterval / 1000);
            var mainTimer1 = setTimeout(function() {
                setErrorType("timeout");
                setErrorCount(function(prev) {
                    return prev + 1;
                });
                setGamePhase("error");
                setTimeout(function() {
                    if (errorCount + 1 >= MAX_ERRORS) {
                        setGamePhase("gameOver");
                    } else {
                        setRoundCount(0);
                        setCurrentInterval(MAX_INTERVAL);
                        generateRound();
                        setGamePhase("display");
                    }
                }, 2000);
            }, currentInterval);
            // Add countdown timer
            var countdownInterval1 = setInterval(function() {
                setRemainingTime(function(prev) {
                    return Math.max(0, prev - 0.1);
                });
            }, 100);
            return function() {
                clearTimeout(mainTimer1);
                clearInterval(countdownInterval1);
            };
        }
    }, [
        gamePhase,
        displayColor,
        errorCount,
        currentInterval
    ]);
    // Modified handleAnswer
    var handleAnswer = function(selectedColor) {
        if (selectedColor === previousColor) {
            setScore(score + 1);
            setRoundCount(function(prev) {
                return prev + 1;
            });
            var newInterval = calculateInterval(roundCount + 1);
            setCurrentInterval(newInterval);
            setPreviousColor(displayColor);
            generateOptions(displayColor);
            generateRound();
        } else {
            setErrorType("wrong");
            setErrorCount(function(prev) {
                return prev + 1;
            });
            setGamePhase("error");
            setTimeout(function() {
                if (errorCount + 1 >= MAX_ERRORS) {
                    setGamePhase("gameOver");
                } else {
                    setRoundCount(0); // Reset round count on error
                    setCurrentInterval(MAX_INTERVAL); // Reset interval on error
                    generateRound();
                    setGamePhase("display");
                }
            }, 2000);
        }
    };
    // Helper function to render hearts
    var renderHearts = function() {
        var hearts = [];
        var remainingHearts = MAX_ERRORS - errorCount;
        for(var i = 0; i < remainingHearts; i++){
            hearts.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "heart",
                children: "❤️"
            }, i, false, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, _this));
        }
        for(var i1 = remainingHearts; i1 < MAX_ERRORS; i1++){
            hearts.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "heart empty",
                children: "\uD83D\uDDA4"
            }, i1, false, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, _this));
        }
        return hearts;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (gamePhase === "gameOver" && gameId) {
            fetch("http://localhost:8501/record", {
                method: "POST",
                headers: (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__._)({
                    "Content-Type": "application/json"
                }, (0,_generateToken__WEBPACK_IMPORTED_MODULE_3__.generateAuthHeader)({
                    gameId: gameId,
                    userName: playerName,
                    score: score
                })),
                body: JSON.stringify({
                    gameId: gameId,
                    userName: playerName,
                    score: score
                })
            });
        }
    }, [
        gamePhase
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-box",
        children: gamePhase === "welcome" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "welcome-screen",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                    children: "Welcome to Color Memory Game!"
                }, void 0, false, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "game-rules",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            children: "How to Play:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "A colored word will be shown for 5 seconds"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "Then you'll see a new word and must remember the",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                                            children: "color"
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, _this),
                                        " of the previous word"
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "Select the correct color from the options within the time limit"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "You have 3 lives (❤️❤️❤️) - game ends if you make 3 mistakes"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "The game gets faster as you progress:",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Starting time: 5 seconds"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Time decreases by 0.2 seconds each round"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Minimum time: 3 seconds"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "Mistakes happen when you:",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Choose the wrong color"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Don't answer within the time limit"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "After any mistake:",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: "Time resets to 5 seconds"
                                            }, void 0, false, {
                                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, _this),
                !isWaiting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                    onSubmit: handleStartGame,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                            type: "text",
                            value: playerName,
                            onChange: function(e) {
                                return setPlayerName(e.target.value);
                            },
                            placeholder: "Enter your name",
                            className: "name-input",
                            maxLength: 20,
                            required: true
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 287,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            type: "submit",
                            className: "start-button",
                            children: "Start Game"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 296,
                            columnNumber: 15
                        }, _this),
                        !gameId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "offline-hint",
                            children: "No game ID detected - you'll be playing in offline mode"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 300,
                            columnNumber: 17
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 286,
                    columnNumber: 13
                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "waiting-screen",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            children: "Waiting for game to start..."
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 307,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: [
                                "Game ID: ",
                                gameId
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 308,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            onClick: function() {
                                return setIsWaiting(false);
                            },
                            className: "cancel-button",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 309,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 306,
                    columnNumber: 13
                }, _this)
            ]
        }, void 0, true, {
            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
            lineNumber: 244,
            columnNumber: 9
        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "stats",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "Player:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: "player-name",
                            children: playerName
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "HP:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: "hearts",
                            children: renderHearts()
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "Score:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: score
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 326,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, _this),
                gamePhase === "display" && currentWord && displayColor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "color-word",
                    style: {
                        color: displayColor.value
                    },
                    children: currentWord.name
                }, void 0, false, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 330,
                    columnNumber: 13
                }, _this),
                gamePhase === "question" && currentWord && displayColor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "color-word",
                            style: {
                                color: displayColor.value
                            },
                            children: currentWord.name
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 337,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "question-phase",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "question",
                                    children: "What was the color of the previous word?"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "timer-display",
                                    children: [
                                        "Time remaining: ",
                                        remainingTime.toFixed(1),
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "options",
                                    children: options.map(function(color, index) {
                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                            onClick: function() {
                                                return handleAnswer(color);
                                            },
                                            className: "option-button",
                                            children: [
                                                String.fromCharCode(65 + index),
                                                ": ",
                                                color.name
                                            ]
                                        }, color.name, true, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 340,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true),
                gamePhase === "error" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "error-message",
                    children: [
                        errorType === "timeout" ? "Time's up! The correct color was " : "Wrong answer! The correct color was ",
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                            children: previousColor === null || previousColor === void 0 ? void 0 : previousColor.name
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 367,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 363,
                    columnNumber: 13
                }, _this),
                gamePhase === "gameOver" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "game-over",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                "Game Over! Final Score: ",
                                score
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 373,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            onClick: resetGame,
                            className: "play-again-button",
                            children: "Play Again"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                            lineNumber: 374,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
                    lineNumber: 372,
                    columnNumber: 13
                }, _this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/game/page.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, _this);
};
_s(Index, "Lp7Df1RavbTlLBiFsfP278Ws+gA=", false, function() {
    return [
        _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_5__.useSearchParams
    ];
});
_c = Index;
/* ESM default export */ __webpack_exports__["default"] = (Index);
var _c;
$RefreshReg$(_c, "Index");

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