vendors = ['ms', 'moz', 'webkit', 'o']

define 'requestanimationframe', ['root'], (root) ->
  {requestAnimationFrame} = root

  unless requestAnimationFrame
    for x in vendors
      requestAnimationFrame = root["#{x}RequestAnimationFrame"]
      break if requestAnimationFrame

  unless requestAnimationFrame
    lastTime = 0
  
    requestAnimationFrame = (callback, element) ->
      currTime = performance.now() ? Date.now()
      timeToCall = Math.max 0, 16 - (currTime - lastTime)
      id = root.setTimeout((-> callback(currTime + timeToCall)), timeToCall)
      lastTime = currTime + timeToCall
      id

  requestAnimationFrame

define 'cancelanimationframe', ['root'], (root) ->
  {cancelAnimationFrame} = root

  unless cancelAnimationFrame
    for x in vendors
      cancelAnimationFrame = root["#{x}CancelAnimationFrame"] or
        root["#{x}CancelRequestAnimationFrame"]
      break if cancelAnimationFrame

  unless cancelAnimationFrame
    cancelAnimationFrame = (id) -> root.clearTimeout id

  cancelAnimationFrame