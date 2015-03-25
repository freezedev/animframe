module.exports =
  options:
    banner: '/*! <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    report: 'gzip'
  dist:
    files:
      'dist/amd/<%= package.name %>.min.js': 'dist/amd/<%= package.name %>.js'