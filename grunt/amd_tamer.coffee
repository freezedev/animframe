module.exports =
  options:
    namespace: '<%= package.name %>'
    base: 'dist/'
  all:
    options:
      footer: '\n//# sourceMappingURL=<%= package.name %>.js.map'
      processName: (name) -> name.toLowerCase()
    files:
      'dist/<%= package.name %>.all.js': 'dist/**/*.js'