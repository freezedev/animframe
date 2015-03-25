module.exports =
  options:
    namespace: '<%= package.name %>'
    base: 'dist/'
  all:
    options:
      footer: '\n//# sourceMappingURL=<%= package.name %>.js.map'
      processName: (name) -> name.toLowerCase()
      modules:
        'requestanimationframe': '[\'animframe/requestanimationframe\'], function(raf) { return raf; }'
        'cancelanimationframe': '[\'animframe/cancelanimationframe\'], function(caf) { return caf; }'
        'performance': '[\'animframe/performance\'], function(perf) { return perf; }'
    files:
      'dist/<%= package.name %>.js': 'dist/**/*.js'