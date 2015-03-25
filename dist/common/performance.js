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
//# sourceMappingURL=performance.js.map