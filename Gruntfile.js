module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        options: {
          sourceMap: 'dist/angularjs-string-humanize.map.js',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                  '<%= grunt.template.today("yyyy-mm-dd") %> - ' +
                  '<%= pkg.repository.url %> */'
        },
        files: {
          'dist/angularjs-string-humanize.min.js': ['src/angularjs-string-humanize.js']
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    }

  });

  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('build', ['uglify']);

  grunt.registerTask('default', ['karma:unit', 'uglify']);

};