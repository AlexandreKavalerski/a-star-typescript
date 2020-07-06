!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AStarPuzzleSolver=t():e.AStarPuzzleSolver=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.operations=void 0,function(e){e.up="UP_OPERATION",e.right="RIGHT_OPERATION",e.down="DOWN_OPERATION",e.left="LEFT_OPERATION",e.none="NONE"}(t.operations||(t.operations={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){this.line=e,this.col=t};t.default=o},function(e,t,n){"use strict";function o(e,t){for(var n in e)for(var o in e)if(e[n][o]!=t[n][o])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.isSolvable=t.readState=t.includes=t.areEqual=void 0,t.areEqual=o,t.includes=function(e,t){for(var n=0,r=t;n<r.length;n++){if(o(r[n],e))return!0}return!1},t.isSolvable=function(e){return function(e){var t=function(e){var t=[];for(var n in e)for(var o in e[n])0!==e[n][o]&&t.push(e[n][o]);return t}(e),n=0;for(var o in t)for(var r=Number(o)+1;r<t.length;r++)t[o]>t[r]&&n++;return n}(e)%2==0},t.readState=function(e){console.log("---------");for(var t=0,n=e;t<n.length;t++){var o=n[t];console.log(o)}console.log("---------")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.solvePuzzle=void 0;var o=n(0),r=n(4),u=n(2);t.solvePuzzle=function(e,t){var n=t||[[1,2,3],[4,5,6],[7,8,0]];if(!u.isSolvable(e))throw new Error("Initial state is not solvable");!function(e,t,n){var o=t.shift();if(o){for(;!u.areEqual(o.state,e);){for(var i=r.generateNodeList(o,e),a=0,l=i;a<l.length;a++){var f=l[a];u.includes(f.state,n)||(u.isSolvable(f.state)&&t.push(f),n.push(o.state))}t.sort((function(e,t){return e.evaluationFunctionValue.f<t.evaluationFunctionValue.f||e.evaluationFunctionValue.f===t.evaluationFunctionValue.f&&e.evaluationFunctionValue.h<t.evaluationFunctionValue.h?-1:1}));var c=t.shift();if(!c)throw new Error("Empty frontier");o=c}}}(n,[r.generateNode(e,o.operations.none,n,0)],[])}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.readNode=t.generateNode=t.generateNodeList=void 0;var r=n(0),u=n(5),i=n(6),a=n(7),l=o(n(8)),f=n(2);function c(e,t,n,o){var r=a.applyOperation(t.state,e);return r?s(r,e,n,o+1,t):null}function s(e,t,n,o,r){var a=i.calcHValue(e,n),f=new l.default(o,a,o+a);return r&&f.h>r.evaluationFunctionValue.h&&r.evaluationFunctionValue.f>f.f&&(f.f=r.evaluationFunctionValue.f),new u.NodeInfo(f,t,e,r)}t.generateNodeList=function(e,t){var n=[],o=c(r.operations.up,e,t,e.evaluationFunctionValue.g);o&&n.push(o);var u=c(r.operations.right,e,t,e.evaluationFunctionValue.g);u&&n.push(u);var i=c(r.operations.down,e,t,e.evaluationFunctionValue.g);i&&n.push(i);var a=c(r.operations.left,e,t,e.evaluationFunctionValue.g);return a&&n.push(a),n},t.generateNode=s,t.readNode=function e(t){return f.readState(t.state),t.previousNode?e(t.previousNode):t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeInfo=void 0;var o=function(e,t,n,o){this.evaluationFunctionValue=e,this.operation=t,this.state=n,this.previousNode=o};t.NodeInfo=o},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.calcDistanceOfItem=t.calcHValue=void 0;var r=o(n(1));function u(e,t,n){for(var o in n){var r=n[o].indexOf(e);if(r>-1)return Math.abs(t.line-Number(o))+Math.abs(t.col-r)}return 10}t.calcHValue=function(e,t){var n=0;for(var o in e)for(var i in e[o]){var a=new r.default(Number(o),Number(i));n+=u(e[o][i],a,t)}return n},t.calcDistanceOfItem=u},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getPositionOfBlankItem=t.moveLeftOperation=t.moveDownOperation=t.moveRightOperation=t.moveUpOperation=t.applyOperation=void 0;var r=n(0),u=o(n(1));function i(e){var t=c(e),n=t.line-1;return n>=0?s(t,new u.default(n,t.col),e):null}function a(e){var t=c(e),n=t.col+1;return n<=2?s(t,new u.default(t.line,n),e):null}function l(e){var t=c(e),n=t.line+1;return n<=2?s(t,new u.default(n,t.col),e):null}function f(e){var t=c(e),n=t.col-1;return n>=0?s(t,new u.default(t.line,n),e):null}function c(e){for(var t in e){var n=e[t].indexOf(0);if(n>-1)return new u.default(Number(t),Number(n))}throw new Error("Error: null item not found on state")}function s(e,t,n){var o=function(e){var t=[[0,0,0],[0,0,0],[0,0,0]];for(var n in e)for(var o in e)t[n][o]=e[n][o];return t}(n),r=n[t.line][t.col];return o[t.line][t.col]=0,o[e.line][e.col]=r,o}t.applyOperation=function(e,t){switch(t){case r.operations.up:return i(e);case r.operations.right:return a(e);case r.operations.down:return l(e);case r.operations.left:return f(e)}},t.moveUpOperation=i,t.moveRightOperation=a,t.moveDownOperation=l,t.moveLeftOperation=f,t.getPositionOfBlankItem=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){this.g=e,this.h=t,this.f=n};t.default=o}])}));