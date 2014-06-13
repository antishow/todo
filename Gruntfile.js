module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['library/js/src/**/*.js', '!library/js/src/plugins.js']
    },
    concat: {
      debug: {
        src: ['library/js/plugins/**/*.js', 'library/js/src/**/*.js'],
        dest: 'library/js/tmp/all.js'
      }
    },
    ngmin: {
      options: {
        expand: true
      },
      debug: {
        src: ['library/js/tmp/all.js'],
        dest: 'library/js/app.js'
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        preserveComments: 'none'
      },
      'library/js/app.min.js': ['library/js/app.js']
    },
    compass: {
      options: {
        require: "susy",
        sassDir: 'library/sass',
        cssDir: 'library/css/tmp'
      },
      debug: {}
    },
    cssc: {
      debug: {
        files: { 'library/css/tmp/style.css': 'library/css/tmp/style.css' }
      }
    },
    cmq: {
      debug: {
        files: { 'library/css/tmp': ['library/css/tmp/style.css'] }
      }
    },
    cssmin: {
      debug: {
        keepSpecialComments: 0,
        expand: true,
        cwd: 'library/css/tmp/',
        src: ['*.css'],
        dest: 'library/css',
        ext: '.css'
      }
    },
    clean: ["library/**/tmp"],
    watch: {      
      options: { livereload: true },
      scripts: {
        files: ['library/js/plugins/*.js', 'library/js/src/**/*.js'],
        tasks: ['js', 'clean']
      },
      css: {
        files: 'library/sass/*.scss',
        tasks: ['css', 'clean']
      },
      html: {
        files: '*.html',
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-cssc');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('js', ['jshint', 'concat', 'ngmin', 'uglify']);
  grunt.registerTask('css', ['compass', 'cssc', 'cmq', 'cssmin'])
  grunt.registerTask('default', ['js', 'css', 'clean']);
}