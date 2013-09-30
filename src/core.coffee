###
  Shim for performance.now function
###

udefine 'performance', ['root'], (root) ->
  performance = root.performance || {}

  vendors = ['ms', 'moz', 'webkit', 'o']
  
  unless performance.now
    for x in vendors
      performance.now = performance["#{x}Now"]
      break if performance.now
      
  unless performance.now
    performance.now = -> Date.now?() || new Date().getTime()

  performance