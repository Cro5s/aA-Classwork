!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){console.log("hello")}]);/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__ (!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'moving_object.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\n//# sourceURL=webpack:///./src/index.js?");
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'moving_objects'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'moving_objects,js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'moving_objects.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './moving_objects.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './moving_objects'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n  console.log(mo)\n\nmodule.exports = mo\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moving_object__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log(_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"mo\"])\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n    console.log(\"is loaded\")\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n    \n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n    document.getElementById('game-canvas')\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const elm = document.getElementById('game-canvas');\n    elm.getContext('2d')\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas').getContext('2d');\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObect.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = this.color;\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx)\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = this.color;\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.strokeStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.strokeStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    // ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.strokeStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]]\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    window.object = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    ctx.clearRect(this.pos[0], this.pos[1]);\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    ctx.clearRect(this.pos[0], this.pos[1], this.radius * 2, this.radius * 2);\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    ctx.clearRect(this.pos[0] -  this.radius, this.pos[1] -  this.radius, this.radius * 2, this.radius * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    ctx.clearRect(this.pos[0], this.pos[1], this.radius * 2, this.radius * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    ctx.clearRect(this.pos[0] -  this.radius, this.pos[1] -  this.radius, this.radius * 2, this.radius * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.strokeRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 25,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.clear(ctx)\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.clear(ctx);\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("// MovingObject.prototype.move\n\n// MovingObject.prototype.draw(ctx)\n\n// MovingObject.prototype.isCollidedWith(otherMovingObject)\n\nfunction MovingObject(options){\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.clear(ctx);\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];\n    this.draw(ctx);\n}\n\nMovingObject.prototype.clear = function(ctx){\n    const boundingBox = this.radius +1;\n    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);\n}\n\n// bounding box \n// pos x,y = center\n// x - radius, y - radius = top left corner\n// \n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    const aster = new Asteroid({ pos: [30, 30] });\n    aster.draw(ctx)\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Spacerock. It inherits from MovingObject\nconst Util = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './util.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n  Util.inherits(this, MovingObject);\n  MovingObject.call(this, {pos: options[\"pos\"], color: '#808080', radius: 20});\n\n}\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    const aster = new Asteroid({ pos: [30, 30] });\n    aster.draw(ctx)\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n    const aster = new Asteroid({ pos: [30, 30] });\n    aster.draw(ctx)\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n})\n\n//# sourceURL=webpack:///./src/index.js?");
eval("// Spacerock. It inherits from MovingObject\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n  Util.inherits(this, MovingObject);\n  MovingObject.call(this, {pos: options[\"pos\"], color: '#808080', radius: 20});\n\n}\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Spacerock. It inherits from MovingObject\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n//   debugger;\n  MovingObject.call(this, {pos: options[\"pos\"], color: '#808080', radius: 20});\n  \n}\nUtil.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects\n\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\nfunction Game(dim_x,dim_y, num_asteroids){\n    this.dim_x = dim_x;\n    this.dim_y = dim_y;\n    this.num_asteroids = num_asteroids;\n    this.asteroids = [];\n    // this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function(){\n    for (let i = 0; i < this.num_asteroids; i++) {\n        // debugger;\n        this.asteroids.push(new Asteroid({pos:[this.randomPosition(this.dim_x),this.randomPosition(this.dim_y)]}))\n    }\n}\n\nGame.prototype.randomPosition = function(max_value) {\n    min = Math.ceil(0);\n    max = Math.floor(max_value);\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nGame.prototype.draw = function(ctx){\n    this.clear(ctx);\n    this.asteroids.forEach( function(asteroid) {\n        asteroid.draw(ctx)\n    })\n}\n\nGame.prototype.moveObjects = function() {\n    this.asteroids.forEach( function(asteroid) {\n        asteroid.move()\n    })\n}\n\nGame.prototype.clear = function(ctx){\n    ctx.clearRect(0,0,this.dim_x, this.dim_y)\n}\n\nGame.prototype.warp = function () {\n  \n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './gameview.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const game = new Game(300,150,5)\n    game.addAsteroids()\n    game.draw(ctx)\n    setInterval( () => {\n      game.moveObjects()\n      game.draw(ctx)\n    },500)\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n    window.game = game;\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util\n\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\n//# sourceURL=webpack:///./src/utils.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const game = new Game(300,150,5)\n    game.addAsteroids()\n    const gv = new GameView(ctx, game);\n    gv.start;\n  \n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n    window.game = game;\n    window.gv = gv;\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d')\n\n    const game = new Game(300,150,5)\n    game.addAsteroids()\n    const gv = new GameView(ctx, game);\n    gv.start();\n  \n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n      });\n    \n    mo.draw(ctx) \n\n\n    // todo – remove\n    window.ctx = ctx;\n    window.mo = mo;\n    window.game = game;\n    window.gv = gv;\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
