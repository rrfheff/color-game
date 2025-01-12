"use strict";
(self['webpackChunkclient'] = self['webpackChunkclient'] || []).push([["page"], {
"../node_modules/.pnpm/@rspack+core@1.1.8_@swc+helpers@0.5.15/node_modules/@rspack/core/dist/cssExtractHmr.js": (function (module) {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/runtime/cssExtractHmr.ts
var cssExtractHmr_exports = {};
__export(cssExtractHmr_exports, {
  cssReload: () => cssReload,
  normalizeUrl: () => normalizeUrl
});
module.exports = __toCommonJS(cssExtractHmr_exports);
function normalizeUrl(url) {
  const urlString = url.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  const protocol = urlString.indexOf("//") !== -1 ? `${urlString.split("//")[0]}//` : "";
  const components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  const host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  const path = components.reduce((accumulator, item) => {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, []).join("/");
  return protocol + host + path;
}
var srcByModuleId = /* @__PURE__ */ Object.create(null);
var noDocument = typeof document === "undefined";
var { forEach } = Array.prototype;
function debounce(fn, time) {
  let timeout = 0;
  return function(...args) {
    const self = this;
    const functionCall = function functionCall2() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {
}
function getCurrentScriptUrl(moduleId) {
  let src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      ({ src } = document.currentScript);
    } else {
      const scripts = document.getElementsByTagName("script");
      const lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        ({ src } = lastScriptTag);
      }
    }
    srcByModuleId[moduleId] = src;
  }
  return (fileMap) => {
    if (!src) {
      return null;
    }
    const splitResult = src.match(/([^\\/]+)\.js$/);
    const filename = splitResult && splitResult[1];
    if (!filename || !fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map((mapRule) => {
      const reg = new RegExp(`${filename}\\.js$`, "g");
      return normalizeUrl(
        src.replace(reg, `${mapRule.replace(/{fileName}/g, filename)}.css`)
      );
    });
  };
}
function updateCss(el, url) {
  let normalizedUrl;
  if (!url) {
    if (!el.href) {
      return;
    }
    normalizedUrl = el.href.split("?")[0];
  } else {
    normalizedUrl = url;
  }
  if (!isUrlRequest(normalizedUrl)) {
    return;
  }
  if (el.isLoaded === false) {
    return;
  }
  if (!normalizedUrl || !(normalizedUrl.indexOf(".css") > -1)) {
    return;
  }
  el.visited = true;
  const newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", () => {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  newEl.addEventListener("error", () => {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  newEl.href = `${normalizedUrl}?${Date.now()}`;
  const parent = el.parentNode;
  if (!parent) {
    return;
  }
  if (el.nextSibling) {
    parent.insertBefore(newEl, el.nextSibling);
  } else {
    parent.appendChild(newEl);
  }
}
function getReloadUrl(href, src) {
  let ret = "";
  const normalizedHref = normalizeUrl(href);
  src.some((url) => {
    if (normalizedHref.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  const elements = document.querySelectorAll("link");
  let loaded = false;
  forEach.call(elements, (el) => {
    if (!el.href) {
      return;
    }
    const url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  const elements = document.querySelectorAll("link");
  forEach.call(elements, (el) => {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}
function isUrlRequest(url) {
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}
function cssReload(moduleId, options) {
  if (noDocument) {
    console.log("[HMR] No `window.document` found, CSS HMR disabled");
    return noop;
  }
  const getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    const src = getScriptSrc(options.filename);
    const reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local CSS Modules. Reload all CSS");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] CSS reload %s", src && src.join(" "));
    } else {
      console.log("[HMR] Reload all CSS");
      reloadAll();
    }
  }
  return debounce(update, 50);
}
// Annotate the CommonJS export names for ESM import in node:
0 && 0;


}),
"./src/routes/index.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1736678353479
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
"./src/routes/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* ESM import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/index.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var _this = undefined;

var _s = $RefreshSig$();


var COLORS = [
    {
        name: 'Red',
        value: '#FF0000'
    },
    {
        name: 'Green',
        value: '#008000'
    },
    {
        name: 'Blue',
        value: '#0000FF'
    },
    {
        name: 'Yellow',
        value: '#FFD700'
    },
    {
        name: 'Black',
        value: '#000000'
    },
    {
        name: 'White',
        value: '#FFFFFF'
    },
    {
        name: 'Purple',
        value: '#800080'
    },
    {
        name: 'Pink',
        value: '#FFC0CB'
    },
    {
        name: 'Gray',
        value: '#808080'
    }
];
var MAX_ERRORS = 3;
var MAX_INTERVAL = 5000; // 5 seconds
var MIN_INTERVAL = 3000; // 3 seconds
var INTERVAL_DECREASE = 200; // Decrease by 200ms each round
var Index = function() {
    _s();
    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), playerName = _useState[0], setPlayerName = _useState[1];
    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), currentWord = _useState1[0], setCurrentWord = _useState1[1];
    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), displayColor = _useState2[0], setDisplayColor = _useState2[1];
    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), previousColor = _useState3[0], setPreviousColor = _useState3[1];
    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), options = _useState4[0], setOptions = _useState4[1];
    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('welcome'), 2), gamePhase = _useState5[0], setGamePhase = _useState5[1];
    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), score = _useState6[0], setScore = _useState6[1];
    var _useState7 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), errorCount = _useState7[0], setErrorCount = _useState7[1];
    var _useState8 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), errorType = _useState8[0], setErrorType = _useState8[1];
    var _useState9 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), roundCount = _useState9[0], setRoundCount = _useState9[1];
    var _useState10 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MAX_INTERVAL), 2), currentInterval = _useState10[0], setCurrentInterval = _useState10[1];
    var _useState11 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), remainingTime = _useState11[0], setRemainingTime = _useState11[1];
    var handleStartGame = function(e) {
        e.preventDefault();
        if (playerName.trim()) {
            generateRound();
            setGamePhase('display');
        }
    };
    // Add reset game function
    var resetGame = function() {
        setScore(0);
        setErrorCount(0);
        setErrorType(null);
        setRoundCount(0);
        setCurrentInterval(MAX_INTERVAL);
        generateRound();
        setGamePhase('display');
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
        var shuffledColors = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(COLORS).filter(function(c) {
            return c !== correctColor;
        }).sort(function() {
            return Math.random() - 0.5;
        }).slice(0, 2);
        var allOptions = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(shuffledColors).concat([
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
        if (gamePhase === 'display') {
            setRemainingTime(currentInterval / 1000);
            var mainTimer = setTimeout(function() {
                setPreviousColor(displayColor);
                generateOptions(displayColor);
                generateRound();
                setGamePhase('question');
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
        } else if (gamePhase === 'question') {
            setRemainingTime(currentInterval / 1000);
            var mainTimer1 = setTimeout(function() {
                setErrorType('timeout');
                setErrorCount(function(prev) {
                    return prev + 1;
                });
                setGamePhase('error');
                setTimeout(function() {
                    if (errorCount + 1 >= MAX_ERRORS) {
                        setGamePhase('gameOver');
                    } else {
                        setRoundCount(0);
                        setCurrentInterval(MAX_INTERVAL);
                        generateRound();
                        setGamePhase('display');
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
            setErrorType('wrong');
            setErrorCount(function(prev) {
                return prev + 1;
            });
            setGamePhase('error');
            setTimeout(function() {
                if (errorCount + 1 >= MAX_ERRORS) {
                    setGamePhase('gameOver');
                } else {
                    setRoundCount(0); // Reset round count on error
                    setCurrentInterval(MAX_INTERVAL); // Reset interval on error
                    generateRound();
                    setGamePhase('display');
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
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                lineNumber: 177,
                columnNumber: 19
            }, _this));
        }
        for(var i1 = remainingHearts; i1 < MAX_ERRORS; i1++){
            hearts.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "heart empty",
                children: "\uD83D\uDDA4"
            }, i1, false, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                lineNumber: 180,
                columnNumber: 19
            }, _this));
        }
        return hearts;
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-box",
        children: gamePhase === 'welcome' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "welcome-screen",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                    children: "Welcome to Color Memory Game!"
                }, void 0, false, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "game-rules",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            children: "How to Play:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "A colored word will be shown for 5 seconds"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "Then you'll see a new word and must remember the ",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                                            children: "color"
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 68
                                        }, _this),
                                        " of the previous word"
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "Select the correct color from the options within the time limit"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: "You have 3 lives (❤️❤️❤️) - game ends if you make 3 mistakes"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 198,
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
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Time decreases by 0.2 seconds each round"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Minimum time: 3 seconds"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 199,
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
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    children: "Don't answer within the time limit"
                                                }, void 0, false, {
                                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                    children: [
                                        "After any mistake:",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: "Time resets to 5 seconds"
                                            }, void 0, false, {
                                                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            type: "submit",
                            className: "start-button",
                            children: "Start Game"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, _this)
            ]
        }, void 0, true, {
            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
            lineNumber: 189,
            columnNumber: 9
        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "stats",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "Player:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: "player-name",
                            children: playerName
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 238,
                            columnNumber: 33
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "HP:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: "hearts",
                            children: renderHearts()
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 239,
                            columnNumber: 29
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: "Score:"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            children: score
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 240,
                            columnNumber: 32
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, _this),
                gamePhase === 'display' && currentWord && displayColor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "color-word",
                    style: {
                        color: displayColor.value
                    },
                    children: currentWord.name
                }, void 0, false, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 244,
                    columnNumber: 13
                }, _this),
                gamePhase === 'question' && currentWord && displayColor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "color-word",
                            style: {
                                color: displayColor.value
                            },
                            children: currentWord.name
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 254,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "question-phase",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "question",
                                    children: "What was the color of the previous word?"
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 261,
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
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 264,
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
                                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 21
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 260,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true),
                gamePhase === 'error' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "error-message",
                    children: [
                        errorType === 'timeout' ? "Time's up! The correct color was " : "Wrong answer! The correct color was ",
                        previousColor === null || previousColor === void 0 ? void 0 : previousColor.name
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 283,
                    columnNumber: 13
                }, _this),
                gamePhase === 'gameOver' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "game-over",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                "Game Over! Final Score: ",
                                score
                            ]
                        }, void 0, true, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 293,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            onClick: resetGame,
                            className: "play-again-button",
                            children: "Play Again"
                        }, void 0, false, {
                            fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                            lineNumber: 294,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                    lineNumber: 292,
                    columnNumber: 13
                }, _this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, _this);
};
_s(Index, "Ek55gBsq6OZt/WXOuBWWn5WjMZM=");
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

}]);
//# sourceMappingURL=page.js.map