module.exports =
  options:
    sourceMap: true
  dist_amd:
    options:
      modules: 'amd'
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js'],
      dest: 'tmp/'
    }]
  dist_common:
    options:
      modules: 'common'
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js'],
      dest: 'dist/common/'
    }]