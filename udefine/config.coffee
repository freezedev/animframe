do (root = @) ->
  root.udefine.globals['requestanimationframe'] = undefined
  root.udefine.globals['cancelanimationframe'] = undefined
  
  root.udefine.inject['requestanimationframe'] =
    root: root
    name: 'requestAnimationFrame'
  
  root.udefine.inject['cancelanimationframe'] =
    root: root
    name: 'cancelAnimationFrame'