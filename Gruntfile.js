/* global require, module, process, __dirname */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src',
      dest: 'dist'
    },
    concat: {
      dist: {
        src: ['<%= dirs.src %>/*.js', '<%= dirs.src %>/**/*.js'],
        dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './src/css',
          src: ['*.scss'],
          dest: './dist',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      combine: {
        files: {
          '<%= dirs.dest %>/<%= pkg.name %>.min.css': ['<%= dirs.dest %>/<%= pkg.name %>.css']
        }
      }
    },

    uglify: {
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: '<%= dirs.dest %>/<%= pkg.name %>.min.js'
      }
    }
    
   
  });

  // Build task.
  grunt.registerTask('build', ['concat', 'uglify', 'sass','cssmin']);

  // Default task.
  grunt.registerTask('default', ['build']);

};
