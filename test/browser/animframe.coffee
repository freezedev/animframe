{udefine, chai} = window

{expect} = chai

{requestAnimationFrame, cancelAnimationFrame, performance} = window

describe 'performance', ->
  it 'performance is an object', ->
    expect(performance).to.be.a('object')
    
  it 'performance.now is a function', ->
    expect(performance).to.have.property('now')
    expect(performance.now).to.be.a('function')

describe 'Animationframe', ->
  
  it 'requestAnimationFrame is available', ->
    expect(requestAnimationFrame).to.be.a('function')
    
  it 'cancelAnimationFrame is available', ->
    expect(cancelAnimationFrame).to.be.a('function')
    
  it 'requestAnimationFrame takes a function', (done) ->
    requestAnimationFrame -> done()

  it 'requestAnimationFrame return value is a number', ->
    ret = requestAnimationFrame ->
    expect(ret).to.be.a('number')

  it 'requestAnimationFrame callback parameter is a number', (done) ->
    requestAnimationFrame (time) ->
      expect(time).to.be.a('number')
      done()