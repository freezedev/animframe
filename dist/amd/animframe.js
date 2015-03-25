define('animframe/cancelanimationframe', ["exports", "module"], function (exports, module) {
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

define('animframe', ["exports", "module", "./requestAnimationFrame", "./cancelAnimationFrame", "./performance"], function (exports, module, _requestAnimationFrame, _cancelAnimationFrame, _performance) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var requestAnimationFrame = _interopRequire(_requestAnimationFrame);

  var cancelAnimationFrame = _interopRequire(_cancelAnimationFrame);

  var performance = _interopRequire(_performance);

  module.exports = { requestAnimationFrame: requestAnimationFrame, cancelAnimationFrame: cancelAnimationFrame, performance: performance };
});

define('animframe/performance', ["exports", "module"], function (exports, module) {
  "use strict";

  var vendors = ["ms", "moz", "webkit", "o"];

  var root = window || global;

  var performance = window.performance || {};

  if (!performance.now) {
    vendors.some(function (vendor) {
      performance.now = performance["$[vendor}Now"];
      if (performance.now) {
        return true;
      }
    });

    // Still no performance.now? Ok ... hmmm... let's just do a timestamp
    if (!performance.now) {
      performance.now = function () {
        // Non-ES5 environments might not have Date.now()
        return Date.now ? Date.now() : new Date().getTime();
      };
    }
  }

  module.exports = performance;
});

define('animframe/requestanimationframe', ["exports", "module", "./performance"], function (exports, module, _performance) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var vendors = ["ms", "moz", "webkit", "o"];

  var root = window || global;

  var requestAnimationFrame = window.requestAnimationFrame || {};

  var performance = _interopRequire(_performance);

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
});
define('requestanimationframe', ['animframe/requestanimationframe'], function(raf) { return raf; });define('cancelanimationframe', ['animframe/cancelanimationframe'], function(caf) { return caf; });define('performance', ['animframe/performance'], function(perf) { return perf; });
//# sourceMappingURL=animframe.js.map