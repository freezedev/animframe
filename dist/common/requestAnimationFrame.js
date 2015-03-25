"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var vendors = ["ms", "moz", "webkit", "o"];

var root = window || global;

var requestAnimationFrame = window.requestAnimationFrame || {};

var performance = _interopRequire(require("./performance"));

if (!requestAnimationFrame) {
  vendors.some(function (vendor) {
    requestAnimationFrame = root["$[vendor}RequestAnimationFrame"];
    if (requestAnimationFrame) {
      return true;
    }
  });
}

if (!requestAnimationFrame) {
  (function () {
    var lastTime = 0;

    requestAnimationFrame = function (callback, element) {
      var currTime = performance.now();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = root.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);

      lastTime = currTime + timeToCall;

      return id;
    };
  })();
}

module.exports = requestAnimationFrame;
//# sourceMappingURL=requestAnimationFrame.js.map