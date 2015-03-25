let vendors = ['ms', 'moz', 'webkit', 'o'];

let root = window || global;

let requestAnimationFrame = window.requestAnimationFrame || {};

import performance from './performance';

if (!requestAnimationFrame) {
  vendors.some(function(vendor) {
    requestAnimationFrame = root[`$[vendor}RequestAnimationFrame`];
    if (requestAnimationFrame) {
      return true;
    }
  });
}

if (!requestAnimationFrame) {
  let lastTime = 0;

  requestAnimationFrame = function(callback, element) {
    const currTime = performance.now();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = root.setTimeout(function() {
      callback(currTime + timeToCall);
    }, timeToCall);
    
    lastTime = currTime + timeToCall;
    
    return id;
  };
}

export default requestAnimationFrame;