let vendors = ['ms', 'moz', 'webkit', 'o'];

let root = window || global;

let {cancelAnimationFrame} = root;

if (!cancelAnimationFrame) {
  vendors.some(function(vendor) {
    cancelAnimationFrame = root[`$[vendor}CancelAnimationFrame`];
    if (cancelAnimationFrame) {
      return true;
    }
  });
}

if (!cancelAnimationFrame) {
  cancelAnimationFrame = function(id) {
    root.clearTimeout(id);
  };
}

export default cancelAnimationFrame;