/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/attractionsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/8 0008.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 471], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function AttractionsPage() {

    var nodeID = document.getElementById("attractions-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="attractions-0" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-1" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-2" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-3" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-4" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-5" class="contain">' + '<img src=""/>' + '</div>' + '<div id="attractions-6" class="contain">' + '<img src=""/>' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {

            var node = this.layout.querySelector('#attractions-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/attractions/' + i + '.jpg';
        }
    }
}

AttractionsPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};



/***/ }),

/***/ "./resources/assets/js/charmGDPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharmGDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 471], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function CharmGDPage() {
    var nodeID = document.getElementById("charmGD-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="charmGD-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="charmGD-6" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {
            var node = this.layout.querySelector('#charmGD-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/charmGD/' + i + '.jpg';
        }
    }
}

CharmGDPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/childrenPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function ChildrenPage() {
    var nodeID = document.getElementById("children-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="children-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="children-8" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 9; ++i) {
            var node = this.layout.querySelector('#children-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/children/' + i + '.jpg';
        }
    }
}

ChildrenPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/eduPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EduPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/8 0008.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [449, 471], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function EduPage() {

    var nodeID = document.getElementById("edu-100");
    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="edu-100" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-101" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-102" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-103" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-104" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-105" class="contain">' + '<img src=""/>' + '</div>' + '<div id="edu-106" class="contain">' + '<img src=""/>' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {

            var node = this.layout.querySelector('#edu-10' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/edu/' + i + '.jpg';
        }
    }
}

EduPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};



/***/ }),

/***/ "./resources/assets/js/foodPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/16 0016.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [213, 307], [213, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function FoodPage() {
    var nodeID = document.getElementById("food-0");

    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="food-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-8" class="contain">' + '<img src="" />' + '</div>' + '<div id="food-9" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 10; ++i) {
            var node = this.layout.querySelector('#food-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/food/' + i + '.jpg';
        }
    }
}
FoodPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};


/***/ }),

/***/ "./resources/assets/js/girlPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GirlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function GirlPage() {
    var nodeID = document.getElementById("girl-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="girl-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="girl-8" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 9; ++i) {
            var node = this.layout.querySelector('#girl-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/girl/' + i + '.jpg';
        }
    }
}

GirlPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/membersPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/16 0016.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function MembersPage() {
    var nodeID = document.getElementById("members-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="members-0" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-1" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-2" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-3" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-4" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-5" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-6" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-7" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-8" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-9" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-10" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-11" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-12" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-13" class="contain img-font">' + '<img src="" />' + '</div>' + '<div id="members-14" class="contain img-font">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 15; ++i) {
            var node = this.layout.querySelector('#members-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/members/' + i + '.png';
        }
    }
}
MembersPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 10;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 14:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        break;
                    case 10:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 14;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 5:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 10:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 14:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 10;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 14;
                        owner.setSelected(owner.current);
                        break;
                    case 10:
                        break;
                    case 11:
                        break;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};


/***/ }),

/***/ "./resources/assets/js/morePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function MorePage() {
    var nodeID = document.getElementById("more-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="more-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-8" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-9" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-10" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-11" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-12" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-13" class="contain">' + '<img src="" />' + '</div>' + '<div id="more-14" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 15; ++i) {
            var node = this.layout.querySelector('#more-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/more/' + i + '.jpg';
        }
    }
}
MorePage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 10;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 14:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        break;
                    case 10:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 14;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 5:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 10:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 11:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 12:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 13:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 14:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 10;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 11;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 12;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 13;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 14;
                        owner.setSelected(owner.current);
                        break;
                    case 10:
                        break;
                    case 11:
                        break;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};


/***/ }),

/***/ "./resources/assets/js/recommended.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavPage", function() { return getNavPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePage", function() { return hidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recommendedMenu__ = __webpack_require__("./resources/assets/js/recommendedMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommendedNav__ = __webpack_require__("./resources/assets/js/recommendedNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendedPage__ = __webpack_require__("./resources/assets/js/recommendedPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membersPage__ = __webpack_require__("./resources/assets/js/membersPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foodPage__ = __webpack_require__("./resources/assets/js/foodPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recreationPage__ = __webpack_require__("./resources/assets/js/recreationPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attractionsPage__ = __webpack_require__("./resources/assets/js/attractionsPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__childrenPage__ = __webpack_require__("./resources/assets/js/childrenPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__girlPage__ = __webpack_require__("./resources/assets/js/girlPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sportsPage__ = __webpack_require__("./resources/assets/js/sportsPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eduPage__ = __webpack_require__("./resources/assets/js/eduPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopPage__ = __webpack_require__("./resources/assets/js/shopPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ticketPage__ = __webpack_require__("./resources/assets/js/ticketPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__charmGDPage__ = __webpack_require__("./resources/assets/js/charmGDPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__morePage__ = __webpack_require__("./resources/assets/js/morePage.js");
/**
 * Created by Administrator on 2018/1/8 0008.
 */



















var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();

function getNavPage(current) {
    //切换new Page

    switch (current) {
        case 0:
            if (recommendedPage == null) {
                recommendedPage = new __WEBPACK_IMPORTED_MODULE_3__recommendedPage__["a" /* RecommendedPage */]();
            }
            currentIndex = recommendedPage.current;
            break;
        case 1:
            if (membersPage == null) {
                membersPage = new __WEBPACK_IMPORTED_MODULE_4__membersPage__["a" /* MembersPage */]();
            }
            MembersCurrentIndex = membersPage.current;
            break;
        case 2:
            if (foodPage == null) {
                foodPage = new __WEBPACK_IMPORTED_MODULE_5__foodPage__["a" /* FoodPage */]();
            }
            FoodCurrentIndex = foodPage.current;
            break;
        case 3:
            if (recreationPage == null) {
                recreationPage = new __WEBPACK_IMPORTED_MODULE_6__recreationPage__["a" /* RecreationPage */]();
            }
            RecreationCurrentIndex = recreationPage.current;
            break;
        case 4:
            if (attractionsPage == null) {
                attractionsPage = new __WEBPACK_IMPORTED_MODULE_7__attractionsPage__["a" /* AttractionsPage */]();
            }
            AttractionsCurrentIndex = attractionsPage.current;
            break;
        case 5:
            if (childrenPage == null) {
                childrenPage = new __WEBPACK_IMPORTED_MODULE_8__childrenPage__["a" /* ChildrenPage */]();
            }
            ChildrenCurrentIndex = childrenPage.current;
            break;
        case 6:
            if (girlPage == null) {
                girlPage = new __WEBPACK_IMPORTED_MODULE_9__girlPage__["a" /* GirlPage */]();
            }
            GirlPageCurrentIndex = girlPage.current;
            break;
        case 7:
            if (sportsPage == null) {
                sportsPage = new __WEBPACK_IMPORTED_MODULE_10__sportsPage__["a" /* SportsPage */]();
            }
            SportsCurrentIndex = sportsPage.current;
            break;
        case 8:
            if (eduPage == null) {
                eduPage = new __WEBPACK_IMPORTED_MODULE_11__eduPage__["a" /* EduPage */]();
            }
            EduCurrentIndex = eduPage.current;
            break;
        case 9:
            if (shopPage == null) {
                shopPage = new __WEBPACK_IMPORTED_MODULE_12__shopPage__["a" /* ShopPage */]();
            }
            ShopCurrentIndex = shopPage.current;
            break;
        case 10:
            if (ticketPage == null) {
                ticketPage = new __WEBPACK_IMPORTED_MODULE_13__ticketPage__["a" /* TicketPage */]();
            }
            TicketCurrentIndex = ticketPage.current;
            break;
        case 11:
            if (charmGDPage == null) {
                charmGDPage = new __WEBPACK_IMPORTED_MODULE_14__charmGDPage__["a" /* CharmGDPage */]();
            }
            CharmGDCurrentIndex = charmGDPage.current;
            break;
        case 12:
            if (morePage == null) {
                morePage = new __WEBPACK_IMPORTED_MODULE_15__morePage__["a" /* MorePage */]();
            }
            MoreCurrentIndex = morePage.current;
            break;
    }
}

function hidePage(NavCurrentIndex) {
    navIndex = NavCurrentIndex;
    var node = document.body.querySelectorAll(".contain-div");

    for (var i = 0; i < node.length; i++) {
        if (NavCurrentIndex == i) {
            node[i].style.display = "block";
        } else {
            node[i].style.display = "none";
        }
    }
}

function hideNavBorder() {
    var items = [];
    var nav = document.getElementById("index-nav");
    if (items.length > 1) {} else {
        for (var i = 0; i < 13; ++i) {
            var _node = nav.querySelector('#nav-' + i);
            items.push(_node);
        }
    }
    var node = items[navIndex];
    node.className = "nav-toggle";
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            recommendedMenu.hide();
            recommendedNav.show(recommendedNav.current, onNavKey);
            break;
    }
}

function onNavKey(key) {
    //添加显示模块
    switch (key) {
        case keyCode.up:
            recommendedNav.hide();
            recommendedMenu.show(recommendedMenu.current, onMenuKey);
            hideNavBorder();
            break;
        case keyCode.down:
            switch (NavCurrentIndex) {
                case 0:
                    recommendedNav.hide();
                    recommendedPage.show(recommendedPage.current, onPageKey);
                    hideNavBorder();
                    break;
                case 1:
                    recommendedNav.hide();
                    membersPage.show(membersPage.current, onMembersPageKey);
                    hideNavBorder();
                    break;
                case 2:
                    recommendedNav.hide();
                    foodPage.show(foodPage.current, onFoodPageKey);
                    hideNavBorder();
                    break;
                case 3:
                    recommendedNav.hide();
                    recreationPage.show(recreationPage.current, onRecreationPageKey);
                    hideNavBorder();
                    break;
                case 4:
                    recommendedNav.hide();
                    attractionsPage.show(attractionsPage.current, onAttractionsPageKey);
                    hideNavBorder();
                    break;
                case 5:
                    recommendedNav.hide();
                    childrenPage.show(childrenPage.current, onChildrenPageKey);
                    hideNavBorder();
                    break;
                case 6:
                    recommendedNav.hide();
                    girlPage.show(girlPage.current, onGirlPageKey);
                    hideNavBorder();
                    break;
                case 7:
                    recommendedNav.hide();
                    sportsPage.show(sportsPage.current, onSportsPageKey);
                    hideNavBorder();
                    break;
                case 8:
                    recommendedNav.hide();
                    eduPage.show(eduPage.current, onEduPageKey);
                    hideNavBorder();
                    break;
                case 9:
                    recommendedNav.hide();
                    shopPage.show(shopPage.current, onShopPageKey);
                    hideNavBorder();
                    break;
                case 10:
                    recommendedNav.hide();
                    ticketPage.show(ticketPage.current, onTicketPageKey);
                    hideNavBorder();
                    break;
                case 11:
                    recommendedNav.hide();
                    charmGDPage.show(charmGDPage.current, onCharmGDPageKey);
                    hideNavBorder();
                    break;
                case 12:
                    recommendedNav.hide();
                    morePage.show(morePage.current, onMorePageKey);
                    hideNavBorder();
                    break;
            }
            break;
    }
    NavCurrentIndex = recommendedNav.current;
}

function onPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (currentIndex) {
                case 0:
                case 1:
                case 6:
                    recommendedPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    currentIndex = recommendedPage.current;
}

function onMembersPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (MembersCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    membersPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    MembersCurrentIndex = membersPage.current;
}

function onFoodPageKey(key) {

    switch (key) {
        case keyCode.up:
            switch (FoodCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 9:
                    foodPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    FoodCurrentIndex = foodPage.current;
}

function onRecreationPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (RecreationCurrentIndex) {
                case 0:
                case 1:
                case 8:
                    recreationPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    RecreationCurrentIndex = recreationPage.current;
}

function onAttractionsPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (AttractionsCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    attractionsPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    AttractionsCurrentIndex = attractionsPage.current;
}

function onChildrenPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (ChildrenCurrentIndex) {
                case 0:
                case 1:
                case 8:
                    childrenPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    ChildrenCurrentIndex = childrenPage.current;
}

function onGirlPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (GirlPageCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    girlPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    GirlPageCurrentIndex = girlPage.current;
}

function onSportsPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (SportsCurrentIndex) {
                case 0:
                case 1:
                case 6:
                case 7:
                    sportsPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    SportsCurrentIndex = sportsPage.current;
}

function onEduPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (EduCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    eduPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    EduCurrentIndex = eduPage.current;
}

function onShopPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (ShopCurrentIndex) {
                case 0:
                case 1:
                case 6:
                    shopPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    ShopCurrentIndex = shopPage.current;
}

function onTicketPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (TicketCurrentIndex) {
                case 0:
                case 1:
                case 6:
                    ticketPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    TicketCurrentIndex = ticketPage.current;
}

function onCharmGDPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (CharmGDCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    charmGDPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    CharmGDCurrentIndex = charmGDPage.current;
}

function onMorePageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (MoreCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    morePage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    MoreCurrentIndex = morePage.current;
}

var recommendedMenu = void 0;
var recommendedNav = void 0;
var recommendedPage = void 0;
var membersPage = void 0;
var foodPage = void 0;
var recreationPage = void 0;
var attractionsPage = void 0;
var childrenPage = void 0;
var girlPage = void 0;
var sportsPage = void 0;
var eduPage = void 0;
var shopPage = void 0;
var ticketPage = void 0;
var charmGDPage = void 0;
var morePage = void 0;

var currentIndex = void 0;
var NavCurrentIndex = void 0;
var MembersCurrentIndex = void 0;
var FoodCurrentIndex = void 0;
var RecreationCurrentIndex = void 0;
var AttractionsCurrentIndex = void 0;
var ChildrenCurrentIndex = void 0;
var GirlPageCurrentIndex = void 0;
var SportsCurrentIndex = void 0;
var EduCurrentIndex = void 0;
var ShopCurrentIndex = void 0;
var TicketCurrentIndex = void 0;
var CharmGDCurrentIndex = void 0;
var MoreCurrentIndex = void 0;
var navIndex = 0;

window.onload = function () {

    recommendedMenu = new __WEBPACK_IMPORTED_MODULE_1__recommendedMenu__["a" /* RecommendedMenu */]();
    recommendedNav = new __WEBPACK_IMPORTED_MODULE_2__recommendedNav__["a" /* RecommendedNav */]();
    recommendedPage = new __WEBPACK_IMPORTED_MODULE_3__recommendedPage__["a" /* RecommendedPage */]();
    recommendedNav.show(recommendedNav.current, onNavKey);

    currentIndex = recommendedPage.current;
    NavCurrentIndex = recommendedNav.current;
};



/***/ }),

/***/ "./resources/assets/js/recommendedMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/15 0015.
 */
/**
 * Created by Administrator on 2018/1/8 0008.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

function RecommendedMenu() {

    this.layoutLogo = document.createElement("div");
    this.layout = document.createElement("div");

    document.body.appendChild(this.layoutLogo);
    document.body.appendChild(this.layout);

    this.layoutLogo.className = 'index-logo';
    this.layoutLogo.id = 'index-logo';

    this.layout.className = 'index-menu';
    this.layout.id = 'index-menu';

    this.layoutLogo.innerHTML = '<img src="images/index_LOGO.png" />';
    this.layout.innerHTML = '<div id="menu-btn0" class="menu-btn"><img src="" /><p>话费充值</p></div>' + '<div id="menu-btn1" class="menu-btn"><img src="" /><p>个人中心</p></div>';

    this.items = [];
    for (var i = 0; i < 2; i++) {
        var node = this.layout.querySelector("#menu-btn" + i);
        this.items.push(node);

        var img = node.querySelector('img');
        img.src = 'images/icon/nav_' + i + '_0.png';
    }
}

RecommendedMenu.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {

        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];
        node.className = focus ? 'menu-btn-focus' : 'menu-btn';

        var img = node.querySelector('img');
        var p = node.querySelector('p');

        if (focus) {
            img.src = 'images/icon/nav_' + current + '_1.png';
            p.style.color = '#fff';
            p.style.fontWeight = 'bold';
        } else {
            img.src = 'images/icon/nav_' + current + '_0.png';
            p.style.fontWeight = 'normal';
            p.style.color = '#fff';
        }
    },
    setSelected: function setSelected(current) {
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },

    handleKey: function handleKey(e) {
        //顶部菜单
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                if (owner.current > 0) {
                    owner.current--;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.right:
                if (owner.current < 1) {
                    owner.current++;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.ok:
                if (owner.current == 0) {}
                if (owner.current == 1) {}
                break;
            case keyCode.esc:
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};



/***/ }),

/***/ "./resources/assets/js/recommendedNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recommended__ = __webpack_require__("./resources/assets/js/recommended.js");
/**
 * Created by Administrator on 2018/1/8 0008.
 */





var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

function RecommendedNav() {

    this.layout = document.createElement("div");

    document.body.appendChild(this.layout);

    this.layout.className = 'index-nav';
    this.layout.id = 'index-nav';

    this.layout.innerHTML = '<ul>' + '<li id="nav-0" class="nav-01 nav-activity">推荐</li>' + '<li id="nav-1" class="nav-02">会员专享</li>' + '<li id="nav-2" class="nav-03">美食</li>' + '<li id="nav-3" class="nav-04">娱乐</li>' + '<li id="nav-4" class="nav-05">游玩</li>' + '<li id="nav-5" class="nav-06">亲子</li>' + '<li id="nav-6" class="nav-07">丽人</li>' + '<li id="nav-7" class="nav-08">运动</li>' + '<li id="nav-8" class="nav-09">教育</li>' + '<li id="nav-9" class="nav-10">购物</li>' + '<li id="nav-10" class="nav-11">票务</li>' + '<li id="nav-11" class="nav-12">魅力广东</li>' + '<li id="nav-12" class="nav-13">更多</li>' + '</ul>';

    this.items = [];
    for (var i = 0; i < 13; ++i) {
        var node = this.layout.querySelector('#nav-' + i);
        this.items.push(node);
    }
}

RecommendedNav.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {

        var owner = this;
        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    hidePage: function hidePage(current, focus) {},
    _setFocus: function _setFocus(current, focus) {

        var node = this.items[current];
        node.className = focus ? 'nav-activity' : 'nav-nofocus';

        if (focus) {
            node.className = "nav-activity";
        } else {
            node.className = "nav-nofocus";
        }
    },

    setSelected: function setSelected(current) {
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        //顶部菜单
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                if (owner.current > 0) {
                    owner.current--;
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__recommended__["getNavPage"])(owner.current);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__recommended__["hidePage"])(owner.current);
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.right:
                if (owner.current < 12) {
                    owner.current++;
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__recommended__["getNavPage"])(owner.current);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__recommended__["hidePage"])(owner.current);
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.ok:
                if (owner.current == 0) {}
                if (owner.current == 1) {}

                break;
            case keyCode.esc:
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/recommendedPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/8 0008.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 471], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function RecommendedPage() {

    var nodeID = document.getElementById("contain-100");
    if (nodeID) {} else {
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="contain-100" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-101" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-102" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-103" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-104" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-105" class="contain">' + '<img src=""/>' + '</div>' + '<div id="contain-106" class="contain">' + '<img src=""/>' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {

            var node = this.layout.querySelector('#contain-10' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/recommended/' + i + '.jpg';
        }
    }
}

RecommendedPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};



/***/ }),

/***/ "./resources/assets/js/recreationPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function RecreationPage() {
    var nodeID = document.getElementById("recreation-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="recreation-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="recreation-8" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 9; ++i) {
            var node = this.layout.querySelector('#recreation-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/recreation/' + i + '.jpg';
        }
    }
}

RecreationPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        break;
                    case 7:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/shopPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 307], [449, 471], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function ShopPage() {
    var nodeID = document.getElementById("shop-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="shop-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="shop-6" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {
            var node = this.layout.querySelector('#shop-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/shop/' + i + '.jpg';
        }
    }
}

ShopPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/sportsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 471], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function SportsPage() {
    var nodeID = document.getElementById("sports-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="sports-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-6" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-7" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-8" class="contain">' + '<img src="" />' + '</div>' + '<div id="sports-9" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 10; ++i) {
            var node = this.layout.querySelector('#sports-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/sports/' + i + '.jpg';
        }
    }
}

SportsPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 7;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current = 8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current = 9;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/ticketPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */
/**
 * Created by Administrator on 2018/1/17 0017.
 */


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[449, 471], [449, 307], [213, 143], [213, 143], [213, 143], [213, 143], [213, 143]];

function TicketPage() {
    var nodeID = document.getElementById("ticket-0");
    if (nodeID) {} else {
        this.layout = document.createElement("div");
        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML = '<div id="ticket-0" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-1" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-2" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-3" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-4" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-5" class="contain">' + '<img src="" />' + '</div>' + '<div id="ticket-6" class="contain">' + '<img src="" />' + '</div>';

        this.items = [];
        for (var i = 0; i < 7; ++i) {
            var node = this.layout.querySelector('#ticket-' + i);
            this.items.push(node);

            var img = node.querySelector('img');
            img.src = 'images/ticket/' + i + '.jpg';
        }
    }
}

TicketPage.prototype = {
    current: 0,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        var owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        var size = itemSize[current];
        var img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 0;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current = 3;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 2:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current = 1;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current = 6;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                        break;
                    case 1:
                        owner.current = 2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        break;
                    case 5:
                        owner.current = 4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current = 5;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/toodo/_keycodes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getKeyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCodes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");


function getKeyCodes() {
    var keyMap = {};

    if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gxgd) {
        keyMap = { // 广西广电
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 400, // f1 //红
            f2: 401, // f2 //蓝
            f3: 403, // f3 //黄
            f4: 402, // f4 //绿
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0
            mute: 518, // 静音
            back: 399, // 返回
            track: 406, // 声道？ //声道键
            volUp: 517, // 增大音量
            volDown: 516, // 减小音量
            fav: 404, // 喜欢
            playBack: 521, // 回放  //点播键
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 515, // 菜单
            esc: 514, //退出
            home: 520
        };
    } else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].hnyx) {
        //keyMap = { // 河南有线 linux
        //    up: 65362,
        //    down: 65364,
        //    left: 65361,
        //    right: 65363,
        //    ok: 65293,
        //    f1: 32,
        //    f2: 33,
        //    f3: 34,
        //    f4: 35,
        //    num1: 49,
        //    num2: 50,
        //    num3: 51,
        //    num4: 52,
        //    num5: 53,
        //    num6: 54,
        //    num7: 55,
        //    num8: 56,
        //    num9: 57,
        //    num0: 48,
        //    mute: 63563,
        //    back: 65367,
        //    track: 65307,
        //    volUp: 63561,
        //    volDown: 63562,
        //    fav: 36,
        //    playBack: 72,
        //    pageUp: 25,
        //    pageDown: 26,
        //    menu: 65360,
        //    esc: 27,
        //    home: 65360
        //};
        keyMap = { // 河南有线 android
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 112, // f1
            f2: 113, // f2
            f3: 114, // f3
            f4: 115, // f4
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0 //数字0 返回
            mute: 77, // 静音
            back: 8, // 返回
            track: 82, // 声道？
            volUp: 190, // 增大音量
            volDown: 188, // 减小音量
            fav: 84, // 喜欢
            playBack: 80, // 回放
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    } else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gdgd) {
        keyMap = { // 广东广电
            up: 87, // 上 W键
            down: 83, // 下 S键
            left: 65, // 左 A键
            right: 68, // 右 D键
            ok: 13, // 确定
            f1: 400, // f1 //红
            f2: 401, // f2 //蓝
            f3: 402, // f3 //黄
            f4: 403, // f4 //绿
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0
            mute: 67, // 静音
            back: 8, // 返回
            track: 86, // 声道？ //声道键
            volUp: 61, // 增大音量
            volDown: 45, // 减小音量
            fav: 76, // 喜欢
            playBack: 521, // 回放  //点播键
            pageUp: 306, // 上一页
            pageDown: 307, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    } else {
        // windows 键码
        keyMap = {
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 112, // f1
            f2: 113, // f2
            f3: 114, // f3
            f4: 115, // f4
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0 //数字0 返回
            mute: 77, // 静音
            back: 8, // 返回
            track: 82, // 声道？
            volUp: 190, // 增大音量
            volDown: 188, // 减小音量
            fav: 84, // 喜欢
            playBack: 80, // 回放
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    }
    return keyMap;
}

function getEvent(evt) {
    return evt || window.event;
}

function getKey(evt) {
    //支持IE、FF
    evt = getEvent(evt);
    return evt.keyCode || evt.which || evt.charCode;
}

function getCodes() {
    var keyMap = getKeyCodes();
    var codes = [];
    for (var code in keyMap) {
        if (keyMap.hasOwnProperty(code)) {
            codes.push(keyMap[code]);
        }
    }
    return codes;
}



/***/ }),

/***/ "./resources/assets/js/toodo/_retail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retail; });
/* unused harmony export getRetailId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retailId; });
var retail = {
    gxgd: '96335',
    hnyx: '96266',
    gdgd: '96956',
    none: '1000'
};

function getRetailId() {
    try {
        //广西广电
        if (guangxi && iPanel) {
            return retail.gxgd;
        }
    } catch (e) {}
    try {
        //河南有线
        var System = window.System;
        if (System && System.stbID) {
            return retail.hnyx;
        }
    } catch (e) {}
    try {
        //广东广电
        if (CA && StorageService && FileSystem) {
            return retail.gdgd;
        }
        //var storageList = StorageService.getStorageInfos();
        //if (storageList && storageList != 'undefined') {
        //    var partitionPathList = storageList[0].getPartitionsInfo()[0];
        //    var partitionPath = partitionPathList.path;
        //    var dir = FileSystem.getDirectory(partitionPath);
        //    var flist = dir.fileList;
        //
        //    for (var i in flist) {
        //        if (flist[i].name.substring(0, 6) == "cacard") {
        //            var cardNo = "96956" + flist[i].name.substring(6, 12);
        //        }
        //    }
        //}
    } catch (e) {}
    return retail.none;
}

var retailId = getRetailId();


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/recommended.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDFlYjJjYWYwMmFlNDEyMjE0NzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hdHRyYWN0aW9uc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jaGFybUdEUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NoaWxkcmVuUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2VkdVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9mb29kUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2dpcmxQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWVtYmVyc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tb3JlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JlY29tbWVuZGVkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcmVjb21tZW5kZWRNZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcmVjb21tZW5kZWROYXYuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yZWNvbW1lbmRlZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yZWNyZWF0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3BQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3BvcnRzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3RpY2tldFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fa2V5Y29kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIl0sIm5hbWVzIjpbImtleUNvZGUiLCJnZXRLZXlDb2RlcyIsInByZUNvZGVzIiwiZ2V0Q29kZXMiLCJpdGVtU2l6ZSIsIkF0dHJhY3Rpb25zUGFnZSIsIm5vZGVJRCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsYXlvdXQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiaWQiLCJpbm5lckhUTUwiLCJpdGVtcyIsImkiLCJub2RlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpbWciLCJzcmMiLCJwcm90b3R5cGUiLCJjdXJyZW50Iiwib25LZXlEb3duIiwic2hvdyIsIm93bmVyIiwic2V0U2VsZWN0ZWQiLCJvbmtleWRvd24iLCJlIiwiaGFuZGxlS2V5IiwiaGlkZSIsIl9zZXRGb2N1cyIsImZvY3VzIiwic3R5bGUiLCJ6SW5kZXgiLCJzaXplIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImxlbmd0aCIsImdldEV2ZW50IiwiY3VyS2V5IiwiZ2V0S2V5IiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwicmlnaHQiLCJ1cCIsImRvd24iLCJDaGFybUdEUGFnZSIsIkNoaWxkcmVuUGFnZSIsIkVkdVBhZ2UiLCJGb29kUGFnZSIsIkdpcmxQYWdlIiwiTWVtYmVyc1BhZ2UiLCJNb3JlUGFnZSIsImdldE5hdlBhZ2UiLCJyZWNvbW1lbmRlZFBhZ2UiLCJjdXJyZW50SW5kZXgiLCJtZW1iZXJzUGFnZSIsIk1lbWJlcnNDdXJyZW50SW5kZXgiLCJmb29kUGFnZSIsIkZvb2RDdXJyZW50SW5kZXgiLCJyZWNyZWF0aW9uUGFnZSIsIlJlY3JlYXRpb25DdXJyZW50SW5kZXgiLCJhdHRyYWN0aW9uc1BhZ2UiLCJBdHRyYWN0aW9uc0N1cnJlbnRJbmRleCIsImNoaWxkcmVuUGFnZSIsIkNoaWxkcmVuQ3VycmVudEluZGV4IiwiZ2lybFBhZ2UiLCJHaXJsUGFnZUN1cnJlbnRJbmRleCIsInNwb3J0c1BhZ2UiLCJTcG9ydHNDdXJyZW50SW5kZXgiLCJlZHVQYWdlIiwiRWR1Q3VycmVudEluZGV4Iiwic2hvcFBhZ2UiLCJTaG9wQ3VycmVudEluZGV4IiwidGlja2V0UGFnZSIsIlRpY2tldEN1cnJlbnRJbmRleCIsImNoYXJtR0RQYWdlIiwiQ2hhcm1HREN1cnJlbnRJbmRleCIsIm1vcmVQYWdlIiwiTW9yZUN1cnJlbnRJbmRleCIsImhpZGVQYWdlIiwiTmF2Q3VycmVudEluZGV4IiwibmF2SW5kZXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGlkZU5hdkJvcmRlciIsIm5hdiIsIm9uTWVudUtleSIsImtleSIsInJlY29tbWVuZGVkTWVudSIsInJlY29tbWVuZGVkTmF2Iiwib25OYXZLZXkiLCJvblBhZ2VLZXkiLCJvbk1lbWJlcnNQYWdlS2V5Iiwib25Gb29kUGFnZUtleSIsIm9uUmVjcmVhdGlvblBhZ2VLZXkiLCJvbkF0dHJhY3Rpb25zUGFnZUtleSIsIm9uQ2hpbGRyZW5QYWdlS2V5Iiwib25HaXJsUGFnZUtleSIsIm9uU3BvcnRzUGFnZUtleSIsIm9uRWR1UGFnZUtleSIsIm9uU2hvcFBhZ2VLZXkiLCJvblRpY2tldFBhZ2VLZXkiLCJvbkNoYXJtR0RQYWdlS2V5Iiwib25Nb3JlUGFnZUtleSIsIndpbmRvdyIsIm9ubG9hZCIsIlJlY29tbWVuZGVkTWVudSIsImxheW91dExvZ28iLCJwIiwiY29sb3IiLCJmb250V2VpZ2h0Iiwib2siLCJlc2MiLCJSZWNvbW1lbmRlZE5hdiIsIlJlY29tbWVuZGVkUGFnZSIsIlJlY3JlYXRpb25QYWdlIiwiU2hvcFBhZ2UiLCJTcG9ydHNQYWdlIiwiVGlja2V0UGFnZSIsImtleU1hcCIsInJldGFpbElkIiwicmV0YWlsIiwiZ3hnZCIsImYxIiwiZjIiLCJmMyIsImY0IiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsIm51bTUiLCJudW02IiwibnVtNyIsIm51bTgiLCJudW05IiwibnVtMCIsIm11dGUiLCJiYWNrIiwidHJhY2siLCJ2b2xVcCIsInZvbERvd24iLCJmYXYiLCJwbGF5QmFjayIsInBhZ2VVcCIsInBhZ2VEb3duIiwibWVudSIsImhvbWUiLCJobnl4IiwiZ2RnZCIsImV2dCIsImV2ZW50Iiwid2hpY2giLCJjaGFyQ29kZSIsImNvZGVzIiwiY29kZSIsImhhc093blByb3BlcnR5Iiwibm9uZSIsImdldFJldGFpbElkIiwiZ3Vhbmd4aSIsImlQYW5lbCIsIlN5c3RlbSIsInN0YklEIiwiQ0EiLCJTdG9yYWdlU2VydmljZSIsIkZpbGVTeXN0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hFQTtBQUFBOzs7QUFHQTs7O0FBR0E7O0FBR0EsSUFBSUEsVUFBVSwyRkFBQUMsRUFBZDtBQUNBLElBQUlDLFdBQVcsd0ZBQUFDLEVBQWY7O0FBRUEsSUFBSUMsV0FBVyxDQUNYLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FEVyxFQUVYLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FGVyxFQUdYLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FIVyxFQUlYLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FKVyxFQUtYLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FMVyxFQU1YLENB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WEMsVUFBTSxPQURLO0FBRVgwQixVQUFNLE9BRks7QUFHWEMsVUFBTSxPQUhLO0FBSVhRLFVBQU07QUFKSyxDQUFmOztBQU9BLFNBQVNDLFdBQVQsR0FBdUI7QUFDbkIsUUFBSTtBQUFDO0FBQ0QsWUFBSUMsV0FBV0MsTUFBZixFQUF1QjtBQUNuQixtQkFBT3ZDLE9BQU9DLElBQWQ7QUFDSDtBQUNKLEtBSkQsQ0FJRSxPQUFPbEcsQ0FBUCxFQUFVLENBQ1g7QUFDRCxRQUFJO0FBQUM7QUFDRCxZQUFJeUksU0FBU3pELE9BQU95RCxNQUFwQjtBQUNBLFlBQUlBLFVBQVVBLE9BQU9DLEtBQXJCLEVBQTRCO0FBQ3hCLG1CQUFPekMsT0FBTzJCLElBQWQ7QUFDSDtBQUNKLEtBTEQsQ0FLRSxPQUFPNUgsQ0FBUCxFQUFVLENBQ1g7QUFDRCxRQUFJO0FBQUM7QUFDRCxZQUFJMkksTUFBTUMsY0FBTixJQUF3QkMsVUFBNUIsRUFBd0M7QUFDcEMsbUJBQU81QyxPQUFPNEIsSUFBZDtBQUNIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQWpCRCxDQWlCRSxPQUFPN0gsQ0FBUCxFQUFVLENBQ1g7QUFDRCxXQUFPaUcsT0FBT29DLElBQWQ7QUFDSDs7QUFFRCxJQUFJckMsV0FBV3NDLGFBQWYiLCJmaWxlIjoianMvcmVjb21tZW5kZWQuYWEzYjQ5YzNlZjUxODgwMmEwODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxZWIyY2FmMDJhZTQxMjIxNDc2IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzggMDAwOC5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5sZXQga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmxldCBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5sZXQgaXRlbVNpemUgPSBbXHJcbiAgICBbNDQ5LCA0NzFdLFxyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBBdHRyYWN0aW9uc1BhZ2UoKSB7XHJcblxyXG4gICAgbGV0IG5vZGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0cmFjdGlvbnMtMFwiKTtcclxuICAgIGlmIChub2RlSUQpe1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmNsYXNzTmFtZSA9ICdjb250YWluLWRpdic7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImF0dHJhY3Rpb25zLTBcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYXR0cmFjdGlvbnMtMVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJhdHRyYWN0aW9ucy0yXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImF0dHJhY3Rpb25zLTNcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYXR0cmFjdGlvbnMtNFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJhdHRyYWN0aW9ucy01XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImF0dHJhY3Rpb25zLTZcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgKytpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNhdHRyYWN0aW9ucy0nKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL2F0dHJhY3Rpb25zLycrIGkgKycuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQXR0cmFjdGlvbnNQYWdlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG5cclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGxldCBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1nLWZvY3VzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7QXR0cmFjdGlvbnNQYWdlfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXR0cmFjdGlvbnNQYWdlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcbmxldCBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxubGV0IHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbmxldCBpdGVtU2l6ZSA9IFtcclxuICAgIFs0NDksIDQ3MV0sXHJcbiAgICBbNDQ5LCAzMDddLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIENoYXJtR0RQYWdlKCkge1xyXG4gICAgbGV0IG5vZGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcm1HRC0wXCIpO1xyXG4gICAgaWYgKG5vZGVJRCkge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sYXlvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnY29udGFpbi1kaXYgJztcclxuICAgICAgICB0aGlzLmxheW91dC5pZCA9ICdjb250YWluLWRpdic7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiY2hhcm1HRC0wXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjaGFybUdELTFcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoYXJtR0QtMlwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiY2hhcm1HRC0zXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjaGFybUdELTRcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoYXJtR0QtNVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiY2hhcm1HRC02XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjY2hhcm1HRC0nICsgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9jaGFybUdELycgKyBpICsgJy5qcGcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQ2hhcm1HRFBhZ2UucHJvdG90eXBlID0ge1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuXHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/ICcxJyA6ICcwJztcclxuICAgICAgICBsZXQgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcImltZy1mb2N1c1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgbGV0IGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge0NoYXJtR0RQYWdlfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY2hhcm1HRFBhZ2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5sZXQga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmxldCBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5sZXQgaXRlbVNpemUgPSBbXHJcbiAgICBbNDQ5LCAzMDddLFxyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIENoaWxkcmVuUGFnZSgpIHtcclxuICAgIGxldCBub2RlSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoaWxkcmVuLTBcIik7XHJcbiAgICBpZihub2RlSUQpe1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2ICc7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTBcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTFcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTJcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTNcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTRcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTVcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTZcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLTdcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImNoaWxkcmVuLThcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjY2hpbGRyZW4tJysgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9jaGlsZHJlbi8nKyBpICsnLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5DaGlsZHJlblBhZ2UucHJvdG90eXBlID0ge1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuXHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/ICcxJyA6ICcwJztcclxuICAgICAgICBsZXQgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcImltZy1mb2N1c1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgbGV0IGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD03O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge0NoaWxkcmVuUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NoaWxkcmVuUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS84IDAwMDguXHJcbiAqL1xyXG5pbXBvcnQge2dldEtleUNvZGVzLCBnZXRFdmVudCwgZ2V0S2V5LCBnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxubGV0IGl0ZW1TaXplID0gW1xyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFs0NDksIDQ3MV0sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRWR1UGFnZSgpIHtcclxuXHJcbiAgICBsZXQgbm9kZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHUtMTAwXCIpO1xyXG4gICAgaWYgKG5vZGVJRCl7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2JztcclxuICAgICAgICB0aGlzLmxheW91dC5pZCA9ICdjb250YWluLWRpdic7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZWR1LTEwMFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJlZHUtMTAxXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImVkdS0xMDJcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZWR1LTEwM1wiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJlZHUtMTA0XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImVkdS0xMDVcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZWR1LTEwNlwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI2VkdS0xMCcrIGkpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWFnZXMvZWR1LycrIGkgKycuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuRWR1UGFnZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuXHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/ICcxJyA6ICcwJztcclxuICAgICAgICBsZXQgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcImltZy1mb2N1c1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgbGV0IGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7RWR1UGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2VkdVBhZ2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNiAwMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtnZXRLZXlDb2RlcywgZ2V0RXZlbnQsIGdldEtleSwgZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxubGV0IGl0ZW1TaXplID0gW1xyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFsyMTMsIDMwN10sXHJcbiAgICBbMjEzLCAzMDddLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRm9vZFBhZ2UoKSB7XHJcbiAgICBsZXQgbm9kZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb29kLTBcIik7XHJcblxyXG4gICAgaWYgKG5vZGVJRCl7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2ICc7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImZvb2QtMFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZm9vZC0xXCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJmb29kLTJcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImZvb2QtM1wiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZm9vZC00XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJmb29kLTVcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImZvb2QtNlwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZm9vZC03XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJmb29kLThcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImZvb2QtOVwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjZm9vZC0nKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL2Zvb2QvJysgaSArJy5qcGcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5Gb29kUGFnZS5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuXHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/ICcxJyA6ICcwJztcclxuICAgICAgICBsZXQgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcImltZy1mb2N1c1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgbGV0IGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD00O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7Rm9vZFBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9mb29kUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5sZXQga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmxldCBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5sZXQgaXRlbVNpemUgPSBbXHJcbiAgICBbNDQ5LCAzMDddLFxyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIEdpcmxQYWdlKCkge1xyXG4gICAgbGV0IG5vZGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lybC0wXCIpO1xyXG4gICAgaWYobm9kZUlEKXtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmNsYXNzTmFtZSA9ICdjb250YWluLWRpdiAnO1xyXG4gICAgICAgIHRoaXMubGF5b3V0LmlkID0gJ2NvbnRhaW4tZGl2JztcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJnaXJsLTBcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImdpcmwtMVwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZ2lybC0yXCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJnaXJsLTNcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImdpcmwtNFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZ2lybC01XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJnaXJsLTZcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImdpcmwtN1wiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiZ2lybC04XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI2dpcmwtJysgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9naXJsLycrIGkgKycuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkdpcmxQYWdlLnByb3RvdHlwZSA9IHtcclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcblxyXG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gZm9jdXMgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgbGV0IHNpemUgPSBpdGVtU2l6ZVtjdXJyZW50XTtcclxuICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1zaXplWzBdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAtc2l6ZVsxXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJpbWctZm9jdXNcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL25vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIGxldCBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7R2lybFBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9naXJsUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE2IDAwMTYuXHJcbiAqL1xyXG5pbXBvcnQge2dldEtleUNvZGVzLCBnZXRFdmVudCwgZ2V0S2V5LCBnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxubGV0IGl0ZW1TaXplID0gW1xyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNZW1iZXJzUGFnZSgpIHtcclxuICAgIGxldCBub2RlSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnMtMFwiKTtcclxuICAgIGlmIChub2RlSUQpe1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmNsYXNzTmFtZSA9ICdjb250YWluLWRpdiAnO1xyXG4gICAgICAgIHRoaXMubGF5b3V0LmlkID0gJ2NvbnRhaW4tZGl2JztcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtZW1iZXJzLTBcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMVwiIGNsYXNzPVwiY29udGFpbiBpbWctZm9udFwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibWVtYmVycy0yXCIgY2xhc3M9XCJjb250YWluIGltZy1mb250XCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtZW1iZXJzLTNcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtNFwiIGNsYXNzPVwiY29udGFpbiBpbWctZm9udFwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibWVtYmVycy01XCIgY2xhc3M9XCJjb250YWluIGltZy1mb250XCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtZW1iZXJzLTZcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtN1wiIGNsYXNzPVwiY29udGFpbiBpbWctZm9udFwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibWVtYmVycy04XCIgY2xhc3M9XCJjb250YWluIGltZy1mb250XCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtZW1iZXJzLTlcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMTBcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMTFcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMTJcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMTNcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1lbWJlcnMtMTRcIiBjbGFzcz1cImNvbnRhaW4gaW1nLWZvbnRcIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI21lbWJlcnMtJysgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9tZW1iZXJzLycrIGkgKycucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbk1lbWJlcnNQYWdlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG5cclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGxldCBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1nLWZvY3VzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTEzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxuXHJcbn07XHJcbmV4cG9ydCB7TWVtYmVyc1BhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tZW1iZXJzUGFnZS5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5sZXQga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmxldCBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5sZXQgaXRlbVNpemUgPSBbXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vcmVQYWdlKCkge1xyXG4gICAgbGV0IG5vZGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9yZS0wXCIpO1xyXG4gICAgaWYgKG5vZGVJRCl7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2ICc7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1vcmUtMFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xXCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtb3JlLTJcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1vcmUtM1wiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS00XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtb3JlLTVcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1vcmUtNlwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS03XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJtb3JlLThcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cIm1vcmUtOVwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xMFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xMVwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xMlwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xM1wiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwibW9yZS0xNFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjbW9yZS0nKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL21vcmUvJysgaSArJy5qcGcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuTW9yZVBhZ2UucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcblxyXG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gZm9jdXMgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgbGV0IHNpemUgPSBpdGVtU2l6ZVtjdXJyZW50XTtcclxuICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1zaXplWzBdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAtc2l6ZVsxXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJpbWctZm9jdXNcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL25vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIGxldCBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG5cclxufTtcclxuZXhwb3J0IHtNb3JlUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21vcmVQYWdlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvOCAwMDA4LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXN9IGZyb20gJy4vdG9vZG8vX2tleWNvZGVzJztcclxuXHJcbmltcG9ydCB7UmVjb21tZW5kZWRNZW51fSBmcm9tICcuL3JlY29tbWVuZGVkTWVudSc7XHJcbmltcG9ydCB7UmVjb21tZW5kZWROYXZ9IGZyb20gJy4vcmVjb21tZW5kZWROYXYnO1xyXG5pbXBvcnQge1JlY29tbWVuZGVkUGFnZX0gZnJvbSAnLi9yZWNvbW1lbmRlZFBhZ2UnO1xyXG5pbXBvcnQge01lbWJlcnNQYWdlfSBmcm9tICcuL21lbWJlcnNQYWdlJztcclxuaW1wb3J0IHtGb29kUGFnZX0gZnJvbSAnLi9mb29kUGFnZSc7XHJcbmltcG9ydCB7UmVjcmVhdGlvblBhZ2V9IGZyb20gJy4vcmVjcmVhdGlvblBhZ2UnO1xyXG5pbXBvcnQge0F0dHJhY3Rpb25zUGFnZX0gZnJvbSAnLi9hdHRyYWN0aW9uc1BhZ2UnO1xyXG5pbXBvcnQge0NoaWxkcmVuUGFnZX0gZnJvbSAnLi9jaGlsZHJlblBhZ2UnO1xyXG5pbXBvcnQge0dpcmxQYWdlfSBmcm9tICcuL2dpcmxQYWdlJztcclxuaW1wb3J0IHtTcG9ydHNQYWdlfSBmcm9tICcuL3Nwb3J0c1BhZ2UnO1xyXG5pbXBvcnQge0VkdVBhZ2V9IGZyb20gJy4vZWR1UGFnZSc7XHJcbmltcG9ydCB7U2hvcFBhZ2V9IGZyb20gJy4vc2hvcFBhZ2UnO1xyXG5pbXBvcnQge1RpY2tldFBhZ2V9IGZyb20gJy4vdGlja2V0UGFnZSc7XHJcbmltcG9ydCB7Q2hhcm1HRFBhZ2V9IGZyb20gJy4vY2hhcm1HRFBhZ2UnO1xyXG5pbXBvcnQge01vcmVQYWdlfSBmcm9tICcuL21vcmVQYWdlJztcclxuXHJcbmxldCBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuXHJcbmZ1bmN0aW9uIGdldE5hdlBhZ2UoY3VycmVudCkgey8v5YiH5o2ibmV3IFBhZ2VcclxuXHJcbiAgICBzd2l0Y2ggKGN1cnJlbnQpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGlmIChyZWNvbW1lbmRlZFBhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kZWRQYWdlID0gbmV3IFJlY29tbWVuZGVkUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IHJlY29tbWVuZGVkUGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGlmIChtZW1iZXJzUGFnZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzUGFnZSA9IG5ldyBNZW1iZXJzUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE1lbWJlcnNDdXJyZW50SW5kZXggPSBtZW1iZXJzUGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGlmIChmb29kUGFnZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb29kUGFnZSA9IG5ldyBGb29kUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEZvb2RDdXJyZW50SW5kZXggPSBmb29kUGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGlmIChyZWNyZWF0aW9uUGFnZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZWNyZWF0aW9uUGFnZSA9IG5ldyBSZWNyZWF0aW9uUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJlY3JlYXRpb25DdXJyZW50SW5kZXggPSByZWNyZWF0aW9uUGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGlmIChhdHRyYWN0aW9uc1BhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmFjdGlvbnNQYWdlID0gbmV3IEF0dHJhY3Rpb25zUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEF0dHJhY3Rpb25zQ3VycmVudEluZGV4ID0gYXR0cmFjdGlvbnNQYWdlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuUGFnZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblBhZ2UgPSBuZXcgQ2hpbGRyZW5QYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ2hpbGRyZW5DdXJyZW50SW5kZXggPSBjaGlsZHJlblBhZ2UuY3VycmVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBpZiAoZ2lybFBhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZ2lybFBhZ2UgPSBuZXcgR2lybFBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHaXJsUGFnZUN1cnJlbnRJbmRleCA9IGdpcmxQYWdlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgaWYgKHNwb3J0c1BhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3BvcnRzUGFnZSA9IG5ldyBTcG9ydHNQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU3BvcnRzQ3VycmVudEluZGV4ID0gc3BvcnRzUGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgIGlmIChlZHVQYWdlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGVkdVBhZ2UgPSBuZXcgRWR1UGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEVkdUN1cnJlbnRJbmRleCA9IGVkdVBhZ2UuY3VycmVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICBpZiAoc2hvcFBhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2hvcFBhZ2UgPSBuZXcgU2hvcFBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTaG9wQ3VycmVudEluZGV4ID0gc2hvcFBhZ2UuY3VycmVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgaWYgKHRpY2tldFBhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGlja2V0UGFnZSA9IG5ldyBUaWNrZXRQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVGlja2V0Q3VycmVudEluZGV4ID0gdGlja2V0UGFnZS5jdXJyZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICBpZiAoY2hhcm1HRFBhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcm1HRFBhZ2UgPSBuZXcgQ2hhcm1HRFBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDaGFybUdEQ3VycmVudEluZGV4ID0gY2hhcm1HRFBhZ2UuY3VycmVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgaWYgKG1vcmVQYWdlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG1vcmVQYWdlID0gbmV3IE1vcmVQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTW9yZUN1cnJlbnRJbmRleCA9IG1vcmVQYWdlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVBhZ2UoTmF2Q3VycmVudEluZGV4KSB7XHJcbiAgICBuYXZJbmRleCA9IE5hdkN1cnJlbnRJbmRleDtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW4tZGl2XCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChOYXZDdXJyZW50SW5kZXggPT0gaSkge1xyXG4gICAgICAgICAgICBub2RlW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTmF2Qm9yZGVyKCkge1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleC1uYXZcIik7XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSl7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtJyArIGkpO1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBub2RlID0gaXRlbXNbbmF2SW5kZXhdO1xyXG4gICAgbm9kZS5jbGFzc05hbWUgPSBcIm5hdi10b2dnbGVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gb25NZW51S2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgcmVjb21tZW5kZWRNZW51LmhpZGUoKTtcclxuICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbk5hdktleShrZXkpIHsvL+a3u+WKoOaYvuekuuaooeWdl1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LmhpZGUoKTtcclxuICAgICAgICAgICAgcmVjb21tZW5kZWRNZW51LnNob3cocmVjb21tZW5kZWRNZW51LmN1cnJlbnQsIG9uTWVudUtleSk7XHJcbiAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgIHN3aXRjaCAoTmF2Q3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkUGFnZS5zaG93KHJlY29tbWVuZGVkUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyc1BhZ2Uuc2hvdyhtZW1iZXJzUGFnZS5jdXJyZW50LCBvbk1lbWJlcnNQYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2Qm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvb2RQYWdlLnNob3coZm9vZFBhZ2UuY3VycmVudCwgb25Gb29kUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdkJvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWNyZWF0aW9uUGFnZS5zaG93KHJlY3JlYXRpb25QYWdlLmN1cnJlbnQsIG9uUmVjcmVhdGlvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmFjdGlvbnNQYWdlLnNob3coYXR0cmFjdGlvbnNQYWdlLmN1cnJlbnQsIG9uQXR0cmFjdGlvbnNQYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2Qm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuUGFnZS5zaG93KGNoaWxkcmVuUGFnZS5jdXJyZW50LCBvbkNoaWxkcmVuUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdkJvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBnaXJsUGFnZS5zaG93KGdpcmxQYWdlLmN1cnJlbnQsIG9uR2lybFBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvcnRzUGFnZS5zaG93KHNwb3J0c1BhZ2UuY3VycmVudCwgb25TcG9ydHNQYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2Qm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkdVBhZ2Uuc2hvdyhlZHVQYWdlLmN1cnJlbnQsIG9uRWR1UGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdkJvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wUGFnZS5zaG93KHNob3BQYWdlLmN1cnJlbnQsIG9uU2hvcFBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tldFBhZ2Uuc2hvdyh0aWNrZXRQYWdlLmN1cnJlbnQsIG9uVGlja2V0UGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5hdkJvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcm1HRFBhZ2Uuc2hvdyhjaGFybUdEUGFnZS5jdXJyZW50LCBvbkNoYXJtR0RQYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTmF2Qm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb3JlUGFnZS5zaG93KG1vcmVQYWdlLmN1cnJlbnQsIG9uTW9yZVBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVOYXZCb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIE5hdkN1cnJlbnRJbmRleCA9IHJlY29tbWVuZGVkTmF2LmN1cnJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEluZGV4ID0gcmVjb21tZW5kZWRQYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWVtYmVyc1BhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgc3dpdGNoIChNZW1iZXJzQ3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyc1BhZ2UuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LnNob3cocmVjb21tZW5kZWROYXYuY3VycmVudCwgb25OYXZLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIE1lbWJlcnNDdXJyZW50SW5kZXggPSBtZW1iZXJzUGFnZS5jdXJyZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvb2RQYWdlS2V5KGtleSkge1xyXG5cclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKEZvb2RDdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBmb29kUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBGb29kQ3VycmVudEluZGV4ID0gZm9vZFBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25SZWNyZWF0aW9uUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKFJlY3JlYXRpb25DdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICByZWNyZWF0aW9uUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBSZWNyZWF0aW9uQ3VycmVudEluZGV4ID0gcmVjcmVhdGlvblBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25BdHRyYWN0aW9uc1BhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgc3dpdGNoIChBdHRyYWN0aW9uc0N1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJhY3Rpb25zUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBBdHRyYWN0aW9uc0N1cnJlbnRJbmRleCA9IGF0dHJhY3Rpb25zUGFnZS5jdXJyZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNoaWxkcmVuUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKENoaWxkcmVuQ3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5QYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5zaG93KHJlY29tbWVuZGVkTmF2LmN1cnJlbnQsIG9uTmF2S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIENoaWxkcmVuQ3VycmVudEluZGV4ID0gY2hpbGRyZW5QYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uR2lybFBhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgc3dpdGNoIChHaXJsUGFnZUN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGdpcmxQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5zaG93KHJlY29tbWVuZGVkTmF2LmN1cnJlbnQsIG9uTmF2S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIEdpcmxQYWdlQ3VycmVudEluZGV4ID0gZ2lybFBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TcG9ydHNQYWdlS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoU3BvcnRzQ3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BvcnRzUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBTcG9ydHNDdXJyZW50SW5kZXggPSBzcG9ydHNQYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRWR1UGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKEVkdUN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGVkdVBhZ2UuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkTmF2LnNob3cocmVjb21tZW5kZWROYXYuY3VycmVudCwgb25OYXZLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgRWR1Q3VycmVudEluZGV4ID0gZWR1UGFnZS5jdXJyZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblNob3BQYWdlS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoU2hvcEN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5zaG93KHJlY29tbWVuZGVkTmF2LmN1cnJlbnQsIG9uTmF2S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFNob3BDdXJyZW50SW5kZXggPSBzaG9wUGFnZS5jdXJyZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblRpY2tldFBhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgc3dpdGNoIChUaWNrZXRDdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICB0aWNrZXRQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZE5hdi5zaG93KHJlY29tbWVuZGVkTmF2LmN1cnJlbnQsIG9uTmF2S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFRpY2tldEN1cnJlbnRJbmRleCA9IHRpY2tldFBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DaGFybUdEUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKENoYXJtR0RDdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjaGFybUdEUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBDaGFybUdEQ3VycmVudEluZGV4ID0gY2hhcm1HRFBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3JlUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKE1vcmVDdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBtb3JlUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWROYXYuc2hvdyhyZWNvbW1lbmRlZE5hdi5jdXJyZW50LCBvbk5hdktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgTW9yZUN1cnJlbnRJbmRleCA9IG1vcmVQYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmxldCByZWNvbW1lbmRlZE1lbnU7XHJcbmxldCByZWNvbW1lbmRlZE5hdjtcclxubGV0IHJlY29tbWVuZGVkUGFnZTtcclxubGV0IG1lbWJlcnNQYWdlO1xyXG5sZXQgZm9vZFBhZ2U7XHJcbmxldCByZWNyZWF0aW9uUGFnZTtcclxubGV0IGF0dHJhY3Rpb25zUGFnZTtcclxubGV0IGNoaWxkcmVuUGFnZTtcclxubGV0IGdpcmxQYWdlO1xyXG5sZXQgc3BvcnRzUGFnZTtcclxubGV0IGVkdVBhZ2U7XHJcbmxldCBzaG9wUGFnZTtcclxubGV0IHRpY2tldFBhZ2U7XHJcbmxldCBjaGFybUdEUGFnZTtcclxubGV0IG1vcmVQYWdlO1xyXG5cclxubGV0IGN1cnJlbnRJbmRleDtcclxubGV0IE5hdkN1cnJlbnRJbmRleDtcclxubGV0IE1lbWJlcnNDdXJyZW50SW5kZXg7XHJcbmxldCBGb29kQ3VycmVudEluZGV4O1xyXG5sZXQgUmVjcmVhdGlvbkN1cnJlbnRJbmRleDtcclxubGV0IEF0dHJhY3Rpb25zQ3VycmVudEluZGV4O1xyXG5sZXQgQ2hpbGRyZW5DdXJyZW50SW5kZXg7XHJcbmxldCBHaXJsUGFnZUN1cnJlbnRJbmRleDtcclxubGV0IFNwb3J0c0N1cnJlbnRJbmRleDtcclxubGV0IEVkdUN1cnJlbnRJbmRleDtcclxubGV0IFNob3BDdXJyZW50SW5kZXg7XHJcbmxldCBUaWNrZXRDdXJyZW50SW5kZXg7XHJcbmxldCBDaGFybUdEQ3VycmVudEluZGV4O1xyXG5sZXQgTW9yZUN1cnJlbnRJbmRleDtcclxubGV0IG5hdkluZGV4ID0gMDtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmVjb21tZW5kZWRNZW51ID0gbmV3IFJlY29tbWVuZGVkTWVudSgpO1xyXG4gICAgcmVjb21tZW5kZWROYXYgPSBuZXcgUmVjb21tZW5kZWROYXYoKTtcclxuICAgIHJlY29tbWVuZGVkUGFnZSA9IG5ldyBSZWNvbW1lbmRlZFBhZ2UoKTtcclxuICAgIHJlY29tbWVuZGVkTmF2LnNob3cocmVjb21tZW5kZWROYXYuY3VycmVudCwgb25OYXZLZXkpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IHJlY29tbWVuZGVkUGFnZS5jdXJyZW50O1xyXG4gICAgTmF2Q3VycmVudEluZGV4ID0gcmVjb21tZW5kZWROYXYuY3VycmVudDtcclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtnZXROYXZQYWdlLCBoaWRlUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JlY29tbWVuZGVkLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTUgMDAxNS5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzggMDAwOC5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gUmVjb21tZW5kZWRNZW51KCkge1xyXG5cclxuICAgIHRoaXMubGF5b3V0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dExvZ28pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcblxyXG4gICAgdGhpcy5sYXlvdXRMb2dvLmNsYXNzTmFtZSA9ICdpbmRleC1sb2dvJztcclxuICAgIHRoaXMubGF5b3V0TG9nby5pZCA9ICdpbmRleC1sb2dvJztcclxuXHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaW5kZXgtbWVudSc7XHJcbiAgICB0aGlzLmxheW91dC5pZCA9ICdpbmRleC1tZW51JztcclxuXHJcblxyXG4gICAgdGhpcy5sYXlvdXRMb2dvLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cImltYWdlcy9pbmRleF9MT0dPLnBuZ1wiIC8+JztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjBcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIiAvPjxwPuivnei0ueWFheWAvDwvcD48L2Rpdj4nK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4xXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCIgLz48cD7kuKrkurrkuK3lv4M8L3A+PC9kaXY+JztcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICBmb3IgKGxldCBpPTA7aTwyO2krKyl7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIgKyBpKTtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL2ljb24vbmF2XycrIGkgKydfMC5wbmcnO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuUmVjb21tZW5kZWRNZW51LnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuXHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBmb2N1cyA/ICdtZW51LWJ0bi1mb2N1cycgOiAnbWVudS1idG4nO1xyXG5cclxuICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBsZXQgcCA9IG5vZGUucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cclxuICAgICAgICBpZiAoZm9jdXMpe1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9pY29uL25hdl8nICsgY3VycmVudCArICdfMS5wbmcnO1xyXG4gICAgICAgICAgICBwLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgICAgICBwLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWFnZXMvaWNvbi9uYXZfJyArIGN1cnJlbnQgKyAnXzAucG5nJztcclxuICAgICAgICAgICAgcC5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XHJcbiAgICAgICAgICAgIHAuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHsvL+mhtumDqOiPnOWNlVxyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIGxldCBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQge1JlY29tbWVuZGVkTWVudX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JlY29tbWVuZGVkTWVudS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzggMDAwOC5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcbmltcG9ydCB7Z2V0TmF2UGFnZX0gZnJvbSAnLi9yZWNvbW1lbmRlZCc7XHJcbmltcG9ydCB7aGlkZVBhZ2V9IGZyb20gJy4vcmVjb21tZW5kZWQnO1xyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlY29tbWVuZGVkTmF2KCkge1xyXG5cclxuICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaW5kZXgtbmF2JztcclxuICAgIHRoaXMubGF5b3V0LmlkID0gJ2luZGV4LW5hdic7XHJcblxyXG4gICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAnPHVsPicgK1xyXG4gICAgICAgICc8bGkgaWQ9XCJuYXYtMFwiIGNsYXNzPVwibmF2LTAxIG5hdi1hY3Rpdml0eVwiPuaOqOiNkDwvbGk+JyArXHJcbiAgICAgICAgJzxsaSBpZD1cIm5hdi0xXCIgY2xhc3M9XCJuYXYtMDJcIj7kvJrlkZjkuJPkuqs8L2xpPicgK1xyXG4gICAgICAgICc8bGkgaWQ9XCJuYXYtMlwiIGNsYXNzPVwibmF2LTAzXCI+576O6aOfPC9saT4nICtcclxuICAgICAgICAnPGxpIGlkPVwibmF2LTNcIiBjbGFzcz1cIm5hdi0wNFwiPuWoseS5kDwvbGk+JyArXHJcbiAgICAgICAgJzxsaSBpZD1cIm5hdi00XCIgY2xhc3M9XCJuYXYtMDVcIj7muLjnjqk8L2xpPicgK1xyXG4gICAgICAgICc8bGkgaWQ9XCJuYXYtNVwiIGNsYXNzPVwibmF2LTA2XCI+5Lqy5a2QPC9saT4nICtcclxuICAgICAgICAnPGxpIGlkPVwibmF2LTZcIiBjbGFzcz1cIm5hdi0wN1wiPuS4veS6ujwvbGk+JyArXHJcbiAgICAgICAgJzxsaSBpZD1cIm5hdi03XCIgY2xhc3M9XCJuYXYtMDhcIj7ov5Dliqg8L2xpPicgK1xyXG4gICAgICAgICc8bGkgaWQ9XCJuYXYtOFwiIGNsYXNzPVwibmF2LTA5XCI+5pWZ6IKyPC9saT4nICtcclxuICAgICAgICAnPGxpIGlkPVwibmF2LTlcIiBjbGFzcz1cIm5hdi0xMFwiPui0reeJqTwvbGk+JyArXHJcbiAgICAgICAgJzxsaSBpZD1cIm5hdi0xMFwiIGNsYXNzPVwibmF2LTExXCI+56Wo5YqhPC9saT4nICtcclxuICAgICAgICAnPGxpIGlkPVwibmF2LTExXCIgY2xhc3M9XCJuYXYtMTJcIj7prYXlipvlub/kuJw8L2xpPicgK1xyXG4gICAgICAgICc8bGkgaWQ9XCJuYXYtMTJcIiBjbGFzcz1cIm5hdi0xM1wiPuabtOWkmjwvbGk+JyArXHJcbiAgICAgICAgJzwvdWw+JztcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyArK2kpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtJyArIGkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVjb21tZW5kZWROYXYucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG5cclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZVBhZ2U6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG5cclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBmb2N1cyA/ICduYXYtYWN0aXZpdHknIDogJ25hdi1ub2ZvY3VzJztcclxuXHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gXCJuYXYtYWN0aXZpdHlcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IFwibmF2LW5vZm9jdXNcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7Ly/pobbpg6joj5zljZVcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBnZXROYXZQYWdlKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQYWdlKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50IDwgMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TmF2UGFnZShvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUGFnZShvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZXNjOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7UmVjb21tZW5kZWROYXZ9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yZWNvbW1lbmRlZE5hdi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzggMDAwOC5cclxuICovXHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsIGdldEV2ZW50LCBnZXRLZXksIGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5sZXQga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmxldCBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5sZXQgaXRlbVNpemUgPSBbXHJcbiAgICBbNDQ5LCA0NzFdLFxyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBSZWNvbW1lbmRlZFBhZ2UoKSB7XHJcblxyXG4gICAgbGV0IG5vZGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbi0xMDBcIik7XHJcbiAgICBpZiAobm9kZUlEKXtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sYXlvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnY29udGFpbi1kaXYnO1xyXG4gICAgICAgIHRoaXMubGF5b3V0LmlkID0gJ2NvbnRhaW4tZGl2JztcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwMFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwMVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwMlwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwM1wiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwNFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwNVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJjb250YWluLTEwNlwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIi8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI2NvbnRhaW4tMTAnKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL3JlY29tbWVuZGVkLycrIGkgKycuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuUmVjb21tZW5kZWRQYWdlLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG5cclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGxldCBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1nLWZvY3VzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQge1JlY29tbWVuZGVkUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JlY29tbWVuZGVkUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2dldEtleUNvZGVzLCBnZXRFdmVudCwgZ2V0S2V5LCBnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxubGV0IGl0ZW1TaXplID0gW1xyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFs0NDksIDMwN10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBSZWNyZWF0aW9uUGFnZSgpIHtcclxuICAgIGxldCBub2RlSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY3JlYXRpb24tMFwiKTtcclxuICAgIGlmKG5vZGVJRCl7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sYXlvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnY29udGFpbi1kaXYgJztcclxuICAgICAgICB0aGlzLmxheW91dC5pZCA9ICdjb250YWluLWRpdic7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicmVjcmVhdGlvbi0wXCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJyZWNyZWF0aW9uLTFcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInJlY3JlYXRpb24tMlwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicmVjcmVhdGlvbi0zXCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJyZWNyZWF0aW9uLTRcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInJlY3JlYXRpb24tNVwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicmVjcmVhdGlvbi02XCIgY2xhc3M9XCJjb250YWluXCI+JytcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJyZWNyZWF0aW9uLTdcIiBjbGFzcz1cImNvbnRhaW5cIj4nK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInJlY3JlYXRpb24tOFwiIGNsYXNzPVwiY29udGFpblwiPicrXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JytcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNyZWNyZWF0aW9uLScrIGkpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWFnZXMvcmVjcmVhdGlvbi8nKyBpICsnLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5SZWNyZWF0aW9uUGFnZS5wcm90b3R5cGUgPSB7XHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG5cclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGxldCBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1nLWZvY3VzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gob3duZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD02O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9ODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKG93bmVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50PTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD03O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7UmVjcmVhdGlvblBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yZWNyZWF0aW9uUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2dldEtleUNvZGVzLCBnZXRFdmVudCwgZ2V0S2V5LCBnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxubGV0IGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5sZXQgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxubGV0IGl0ZW1TaXplID0gW1xyXG4gICAgWzQ0OSwgMzA3XSxcclxuICAgIFs0NDksIDQ3MV0sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XHJcbiAgICBsZXQgbm9kZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wLTBcIik7XHJcbiAgICBpZiAobm9kZUlEKSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0LmNsYXNzTmFtZSA9ICdjb250YWluLWRpdiAnO1xyXG4gICAgICAgIHRoaXMubGF5b3V0LmlkID0gJ2NvbnRhaW4tZGl2JztcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzaG9wLTBcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNob3AtMVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwic2hvcC0yXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzaG9wLTNcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNob3AtNFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwic2hvcC01XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzaG9wLTZcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNzaG9wLScgKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL3Nob3AvJyArIGkgKyAnLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TaG9wUGFnZS5wcm90b3R5cGUgPSB7XHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG5cclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gJzEnIDogJzAnO1xyXG4gICAgICAgIGxldCBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiaW1nLWZvY3VzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9ub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICBsZXQgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtTaG9wUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3BQYWdlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtnZXRLZXlDb2RlcywgZ2V0RXZlbnQsIGdldEtleSwgZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmxldCBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxubGV0IHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbmxldCBpdGVtU2l6ZSA9IFtcclxuICAgIFs0NDksIDQ3MV0sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIFNwb3J0c1BhZ2UoKSB7XHJcbiAgICBsZXQgbm9kZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcG9ydHMtMFwiKTtcclxuICAgIGlmIChub2RlSUQpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2ICc7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNwb3J0cy0wXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzcG9ydHMtMVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwic3BvcnRzLTJcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNwb3J0cy0zXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzcG9ydHMtNFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwic3BvcnRzLTVcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNwb3J0cy02XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJzcG9ydHMtN1wiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwic3BvcnRzLThcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInNwb3J0cy05XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI3Nwb3J0cy0nICsgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltYWdlcy9zcG9ydHMvJyArIGkgKyAnLmpwZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TcG9ydHNQYWdlLnByb3RvdHlwZSA9IHtcclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcblxyXG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gZm9jdXMgPyAnMScgOiAnMCc7XHJcbiAgICAgICAgbGV0IHNpemUgPSBpdGVtU2l6ZVtjdXJyZW50XTtcclxuICAgICAgICBsZXQgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSAqIDEuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IC1zaXplWzBdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAtc2l6ZVsxXSAqIDAuMDMgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJpbWctZm9jdXNcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL25vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIGxldCBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtTcG9ydHNQYWdlfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3BvcnRzUGFnZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMTcgMDAxNy5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxOC8xLzE3IDAwMTcuXHJcbiAqL1xyXG4vKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8xNyAwMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtnZXRLZXlDb2RlcywgZ2V0RXZlbnQsIGdldEtleSwgZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmxldCBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxubGV0IHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbmxldCBpdGVtU2l6ZSA9IFtcclxuICAgIFs0NDksIDQ3MV0sXHJcbiAgICBbNDQ5LCAzMDddLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M10sXHJcbiAgICBbMjEzLCAxNDNdLFxyXG4gICAgWzIxMywgMTQzXSxcclxuICAgIFsyMTMsIDE0M11cclxuXTtcclxuXHJcbmZ1bmN0aW9uIFRpY2tldFBhZ2UoKSB7XHJcbiAgICBsZXQgbm9kZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aWNrZXQtMFwiKTtcclxuICAgIGlmIChub2RlSUQpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2NvbnRhaW4tZGl2ICc7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuaWQgPSAnY29udGFpbi1kaXYnO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInRpY2tldC0wXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJ0aWNrZXQtMVwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwidGlja2V0LTJcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInRpY2tldC0zXCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJ0aWNrZXQtNFwiIGNsYXNzPVwiY29udGFpblwiPicgK1xyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCJcIiAvPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwidGlja2V0LTVcIiBjbGFzcz1cImNvbnRhaW5cIj4nICtcclxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiXCIgLz4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cInRpY2tldC02XCIgY2xhc3M9XCJjb250YWluXCI+JyArXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIlwiIC8+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjdGlja2V0LScgKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1hZ2VzL3RpY2tldC8nICsgaSArICcuanBnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblRpY2tldFBhZ2UucHJvdG90eXBlID0ge1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuXHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/ICcxJyA6ICcwJztcclxuICAgICAgICBsZXQgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIGxldCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAzICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMyArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcImltZy1mb2N1c1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgbGV0IGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge1RpY2tldFBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90aWNrZXRQYWdlLmpzIiwiaW1wb3J0IHtyZXRhaWwscmV0YWlsSWR9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEtleUNvZGVzKCkge1xyXG4gICAgbGV0IGtleU1hcCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/6KW/5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMywgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMiwgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA1MTgsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDM5OSwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDQwNiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNTE3LCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNTE2LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNDA0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA1MTUsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDUxNCwgICAgICAgIC8v6YCA5Ye6XHJcbiAgICAgICAgICAgIGhvbWU6IDUyMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkge1xyXG4gICAgICAgIC8va2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gbGludXhcclxuICAgICAgICAvLyAgICB1cDogNjUzNjIsXHJcbiAgICAgICAgLy8gICAgZG93bjogNjUzNjQsXHJcbiAgICAgICAgLy8gICAgbGVmdDogNjUzNjEsXHJcbiAgICAgICAgLy8gICAgcmlnaHQ6IDY1MzYzLFxyXG4gICAgICAgIC8vICAgIG9rOiA2NTI5MyxcclxuICAgICAgICAvLyAgICBmMTogMzIsXHJcbiAgICAgICAgLy8gICAgZjI6IDMzLFxyXG4gICAgICAgIC8vICAgIGYzOiAzNCxcclxuICAgICAgICAvLyAgICBmNDogMzUsXHJcbiAgICAgICAgLy8gICAgbnVtMTogNDksXHJcbiAgICAgICAgLy8gICAgbnVtMjogNTAsXHJcbiAgICAgICAgLy8gICAgbnVtMzogNTEsXHJcbiAgICAgICAgLy8gICAgbnVtNDogNTIsXHJcbiAgICAgICAgLy8gICAgbnVtNTogNTMsXHJcbiAgICAgICAgLy8gICAgbnVtNjogNTQsXHJcbiAgICAgICAgLy8gICAgbnVtNzogNTUsXHJcbiAgICAgICAgLy8gICAgbnVtODogNTYsXHJcbiAgICAgICAgLy8gICAgbnVtOTogNTcsXHJcbiAgICAgICAgLy8gICAgbnVtMDogNDgsXHJcbiAgICAgICAgLy8gICAgbXV0ZTogNjM1NjMsXHJcbiAgICAgICAgLy8gICAgYmFjazogNjUzNjcsXHJcbiAgICAgICAgLy8gICAgdHJhY2s6IDY1MzA3LFxyXG4gICAgICAgIC8vICAgIHZvbFVwOiA2MzU2MSxcclxuICAgICAgICAvLyAgICB2b2xEb3duOiA2MzU2MixcclxuICAgICAgICAvLyAgICBmYXY6IDM2LFxyXG4gICAgICAgIC8vICAgIHBsYXlCYWNrOiA3MixcclxuICAgICAgICAvLyAgICBwYWdlVXA6IDI1LFxyXG4gICAgICAgIC8vICAgIHBhZ2VEb3duOiAyNixcclxuICAgICAgICAvLyAgICBtZW51OiA2NTM2MCxcclxuICAgICAgICAvLyAgICBlc2M6IDI3LFxyXG4gICAgICAgIC8vICAgIGhvbWU6IDY1MzYwXHJcbiAgICAgICAgLy99O1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGFuZHJvaWRcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/kuJzlub/nlLVcclxuICAgICAgICAgICAgdXA6IDg3LCAgICAgICAgLy8g5LiKIFfplK5cclxuICAgICAgICAgICAgZG93bjogODMsICAgICAgLy8g5LiLIFPplK5cclxuICAgICAgICAgICAgbGVmdDogNjUsICAgICAgLy8g5bemIEHplK5cclxuICAgICAgICAgICAgcmlnaHQ6IDY4LCAgICAgLy8g5Y+zIETplK5cclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDIsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDMsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNjcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4NiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNjEsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA0NSwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDc2LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMDYsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzA3LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSB7IC8vIHdpbmRvd3Mg6ZSu56CBXHJcbiAgICAgICAga2V5TWFwID0ge1xyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleU1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZ0KSB7XHJcbiAgICByZXR1cm4gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5KGV2dCkge1xyXG4gICAgLy/mlK/mjIFJReOAgUZGXHJcbiAgICBldnQgPSBnZXRFdmVudChldnQpO1xyXG4gICAgcmV0dXJuIGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaCB8fCBldnQuY2hhckNvZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvZGVzKCkge1xyXG4gICAgY29uc3Qga2V5TWFwID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBjb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiBrZXlNYXApIHtcclxuICAgICAgICBpZiAoa2V5TWFwLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgIGNvZGVzLnB1c2goa2V5TWFwW2NvZGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzIiwiY29uc3QgcmV0YWlsID0ge1xyXG4gICAgZ3hnZDogJzk2MzM1JyxcclxuICAgIGhueXg6ICc5NjI2NicsXHJcbiAgICBnZGdkOiAnOTY5NTYnLFxyXG4gICAgbm9uZTogJzEwMDAnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZXRhaWxJZCgpIHtcclxuICAgIHRyeSB7Ly/lub/opb/lub/nlLVcclxuICAgICAgICBpZiAoZ3Vhbmd4aSAmJiBpUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5neGdkO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/msrPljZfmnInnur9cclxuICAgICAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgICAgICBpZiAoU3lzdGVtICYmIFN5c3RlbS5zdGJJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmhueXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+W5v+S4nOW5v+eUtVxyXG4gICAgICAgIGlmIChDQSAmJiBTdG9yYWdlU2VydmljZSAmJiBGaWxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ2RnZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgc3RvcmFnZUxpc3QgPSBTdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlSW5mb3MoKTtcclxuICAgICAgICAvL2lmIChzdG9yYWdlTGlzdCAmJiBzdG9yYWdlTGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoTGlzdCA9IHN0b3JhZ2VMaXN0WzBdLmdldFBhcnRpdGlvbnNJbmZvKClbMF07XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGggPSBwYXJ0aXRpb25QYXRoTGlzdC5wYXRoO1xyXG4gICAgICAgIC8vICAgIHZhciBkaXIgPSBGaWxlU3lzdGVtLmdldERpcmVjdG9yeShwYXJ0aXRpb25QYXRoKTtcclxuICAgICAgICAvLyAgICB2YXIgZmxpc3QgPSBkaXIuZmlsZUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICBmb3IgKHZhciBpIGluIGZsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmIChmbGlzdFtpXS5uYW1lLnN1YnN0cmluZygwLCA2KSA9PSBcImNhY2FyZFwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgY2FyZE5vID0gXCI5Njk1NlwiICsgZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoNiwgMTIpO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldGFpbC5ub25lO1xyXG59XHJcblxyXG52YXIgcmV0YWlsSWQgPSBnZXRSZXRhaWxJZCgpO1xyXG5leHBvcnQge3JldGFpbCxnZXRSZXRhaWxJZCxyZXRhaWxJZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==