module.exports =
  options:
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    report: 'gzip'
  dist:
    files:
      'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'