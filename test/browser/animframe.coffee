{udefine, chai} = window

{expect} = chai

{requestAnimationFrame, cancelAnimationFrame} = window

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