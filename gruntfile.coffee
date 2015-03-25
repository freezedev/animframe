module.exports = (grunt) ->
  require('time-grunt')(grunt)

  require('load-grunt-config') grunt,
    jitGrunt: true
  
  grunt.registerTask 'test', 'Lints and unit tests', ['jshint', 'karma']
  grunt.registerTask 'default', 'Default task', ['clean', 'babel', 'amd_tamer', 'test', 'uglify']