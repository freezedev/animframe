(function() {
  (function(name) {
    if (typeof performance === "undefined" || performance === null) {
      return udefine.configure(function(root) {
        return udefine.inject.add(name);
      });
    }
  })('performance');

  (function(names) {
    return udefine.configure(function(root) {
      var i, len, n;
      for (i = 0, len = names.length; i < len; i++) {
        n = names[i];
        udefine.inject.add([n.toLowerCase()], {
          root: root,
          name: n
        });
      }
      return null;
    });
  })(['requestAnimationFrame', 'cancelAnimationFrame']);

}).call(this);


/*
  Shim for performance.now function
 */

(function() {
  udefine('performance', ['root'], function(root) {
    var i, len, performance, vendors, x;
    performance = root.performance || {};
    vendors = ['ms', 'moz', 'webkit', 'o'];
    if (!performance.now) {
      for (i = 0, len = vendors.length; i < len; i++) {
        x = vendors[i];
        performance.now = performance[x + "Now"];
        if (performance.now) {
          break;
        }
      }
    }
    if (!performance.now) {
      performance.now = function() {
        return (typeof Date.now === "function" ? Date.now() : void 0) || new Date().getTime();
      };
    }
    return performance;
  });

}).call(this);

(function() {
  var vendors;

  vendors = ['ms', 'moz', 'webkit', 'o'];

  udefine('requestanimationframe', ['root', 'performance'], function(root, perf) {
    var i, lastTime, len, requestAnimationFrame, x;
    requestAnimationFrame = root.requestAnimationFrame;
    if (!requestAnimationFrame) {
      for (i = 0, len = vendors.length; i < len; i++) {
        x = vendors[i];
        requestAnimationFrame = root[x + "RequestAnimationFrame"];
        if (requestAnimationFrame) {
          break;
        }
      }
    }
    if (!requestAnimationFrame) {
      lastTime = 0;
      requestAnimationFrame = function(callback, element) {
        var currTime, id, timeToCall;
        currTime = perf.now();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = root.setTimeout((function() {
          return callback(currTime + timeToCall);
        }), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    return requestAnimationFrame;
  });

  udefine('cancelanimationframe', ['root'], function(root) {
    var cancelAnimationFrame, i, len, x;
    cancelAnimationFrame = root.cancelAnimationFrame;
    if (!cancelAnimationFrame) {
      for (i = 0, len = vendors.length; i < len; i++) {
        x = vendors[i];
        cancelAnimationFrame = root[x + "CancelAnimationFrame"] || root[x + "CancelRequestAnimationFrame"];
        if (cancelAnimationFrame) {
          break;
        }
      }
    }
    if (!cancelAnimationFrame) {
      cancelAnimationFrame = function(id) {
        return root.clearTimeout(id);
      };
    }
    return cancelAnimationFrame;
  });

}).call(this);
