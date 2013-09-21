{udefine, chai} = window

{expect} = chai

{requestAnimationFrame, cancelAnimationFrame} = window

describe 'Animationframe', ->
  
  it 'requestAnimationFrame is available', ->
    expect(requestAnimationFrame).to.be.a('function')
    
  it 'cancelAnimationFrame is available', ->
    expect(cancelAnimationFrame).to.be.a('function')