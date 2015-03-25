import {requestAnimationFrame, cancelAnimationFrame, performance} from 'animframe';

describe('performance', function () {
  it('performance is an object', function () {
    expect(performance).to.be.a('object');
  });
  return it('performance.now is a function', function () {
    expect(performance).to.have.property('now');
    expect(performance.now).to.be.a('function');
  });
});

describe('Animationframe', function () {
  it('requestAnimationFrame is available', function () {
    expect(requestAnimationFrame).to.be.a('function');
  });
  it('cancelAnimationFrame is available', function () {
    expect(cancelAnimationFrame).to.be.a('function');
  });
  it('requestAnimationFrame takes a function', function (done) {
    requestAnimationFrame(function () {
      done();
    });
  });
  it('requestAnimationFrame return value is a number', function () {
    var ret = requestAnimationFrame(function () {
    });
    expect(ret).to.be.a('number');
  });
  it('requestAnimationFrame callback parameter is a number', function (done) {
    requestAnimationFrame(function (time) {
      expect(time).to.be.a('number');
      done();
    });
  });
});

