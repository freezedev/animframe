do (root = @) ->
  root.udefine.globals['requestanimationframe'] = root.requestAnimationFrame
  root.udefine.globals['cancelanimationframe'] = root.cancelAnimationFrame