(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module", "./requestAnimationFrame", "./cancelAnimationFrame", "./performance"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module, require("./requestAnimationFrame"), require("./cancelAnimationFrame"), require("./performance"));
  }
})(function (exports, module, _requestAnimationFrame, _cancelAnimationFrame, _performance) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var requestAnimationFrame = _interopRequire(_requestAnimationFrame);

  var cancelAnimationFrame = _interopRequire(_cancelAnimationFrame);

  var performance = _interopRequire(_performance);

  module.exports = { requestAnimationFrame: requestAnimationFrame, cancelAnimationFrame: cancelAnimationFrame, performance: performance };
});
//# sourceMappingURL=index.js.map