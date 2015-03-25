(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  }
})(function (exports, module) {
  "use strict";

  var vendors = ["ms", "moz", "webkit", "o"];

  var root = window || global;

  var cancelAnimationFrame = window.cancelAnimationFrame || {};

  if (!cancelAnimationFrame) {
    vendors.some(function (vendor) {
      cancelAnimationFrame = root["$[vendor}CancelAnimationFrame"];
      if (cancelAnimationFrame) {
        return true;
      }
    });
  }

  if (!cancelAnimationFrame) {
    cancelAnimationFrame = function (id) {
      root.clearTimeout(id);
    };
  }

  module.exports = cancelAnimationFrame;
});
//# sourceMappingURL=cancelAnimationFrame.js.map