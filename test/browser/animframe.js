(function() {
  var cancelAnimationFrame, chai, expect, requestAnimationFrame, udefine;

  udefine = window.udefine, chai = window.chai;

  expect = chai.expect;

  requestAnimationFrame = window.requestAnimationFrame, cancelAnimationFrame = window.cancelAnimationFrame;

  describe('Animationframe', function() {
    it('requestAnimationFrame is available', function() {
      return expect(requestAnimationFrame).to.be.a('function');
    });
    return it('cancelAnimationFrame is available', function() {
      return expect(cancelAnimationFrame).to.be.a('function');
    });
  });

}).call(this);
