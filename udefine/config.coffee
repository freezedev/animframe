do (names = ['requestAnimationFrame', 'cancelAnimationFrame']) ->
  udefine.configure (root) ->
    for n in names
      root.udefine.inject.add [n.toLowerCase()],
        root: root
        name: n
        
    null