module.exports = (grunt) ->
  
  sourceOrigin = 'src/**/*.coffee'
  
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    coffeelint:
      source: ['src/**/*.coffee']
      tests: ['test/**/*.coffee']
    coffee:
      compile:
        files:
          'dist/<%= pkg.name %>.js': ['udefine/*.coffee', 'src/*.coffee']
      tests:
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['**/*.coffee'],
          dest: 'test/',
          ext: '.js'
        }]
    uglify:
      options:
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        report: 'gzip'
      dist:
        files:
          'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
    mocha:
      options:
        reporter: 'Spec'
        run: true
      all: ['test/browser/*.html']
    template:
      all:
        src: 'test/templates/browsertest.html'
        dest: 'test/browser/animframe.html'
        engine: 'handlebars'
        variables:
          title: 'Animation Frame Test Suite'
          script: 'animframe.js'
        

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  
  grunt.registerTask 'test', 'Lints and unit tests', ['coffeelint', 'template', 'mocha']
  grunt.registerTask 'default', 'Default task', ['coffee', 'test', 'uglify']