# Performance shim
do (name = 'performance') ->
  unless performance?
    udefine.configure (root) ->
      udefine.inject.add name

# Animationframe
do (names = ['requestAnimationFrame', 'cancelAnimationFrame']) ->
  udefine.configure (root) ->
    for n in names
      udefine.inject.add [n.toLowerCase()],
        root: root
        name: n
        
    null