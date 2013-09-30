(function() {
  var cancelAnimationFrame, chai, expect, requestAnimationFrame, udefine;

  udefine = window.udefine, chai = window.chai;

  expect = chai.expect;

  requestAnimationFrame = window.requestAnimationFrame, cancelAnimationFrame = window.cancelAnimationFrame;

  describe('Animationframe', function() {
    it('requestAnimationFrame is available', function() {
      return expect(requestAnimationFrame).to.be.a('function');
    });
    it('cancelAnimationFrame is available', function() {
      return expect(cancelAnimationFrame).to.be.a('function');
    });
    it('requestAnimationFrame takes a function', function(done) {
      return requestAnimationFrame(function() {
        return done();
      });
    });
    it('requestAnimationFrame return value is a number', function() {
      var ret;
      ret = requestAnimationFrame(function() {});
      return expect(ret).to.be.a('number');
    });
    return it('requestAnimationFrame callback parameter is a number', function(done) {
      return requestAnimationFrame(function(time) {
        expect(time).to.be.a('number');
        return done();
      });
    });
  });

}).call(this);
