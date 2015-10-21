module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        imagemin: {
          dynamic: {
            options: {
              loops: 7,
              progressive: true
            },
            files: [{
              expand: true,
              cwd: 'img',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'dist'
            }]
          }
       }
//          responsive_images: {
//            dynamic: {
//              options: {
//                optimizatonLevel: 7,
//                progressive: true
//              },
//              files: [{
//                expand: true,
//                cwd: 'img',
//                src: ['**/*.{png,jpg,gif}'],
//                dest: 'dist'
//              }]
//            }
//          }
        });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
//  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-imagemin-jpeg-recompress');

  // Task lists
  // grunt.registerTask('test', ['imagemin', 'jshint']);


  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['imagemin'] );


};
