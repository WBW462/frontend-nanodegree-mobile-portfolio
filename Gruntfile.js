module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
          responsive_images: {
            dynamic: {
              options: {
                optimizatonLevel: 3,
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
//          compress: {
//            dynamic: {
//              options: {
//                loops: 3,
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

//var Imagemin = require('imagemin');
//var imageminJpegRecompress = require('imagemin-jpeg-recompress');

//new Imagemin()
//    .src('view/images/*.jpg')
//    .dest('view/rebuildimages')
//    .use(imageminJpegRecompress({loops: 3}))
//    .run();
       // Files array format
        // files: [
          // { src: ['src/**/*.js'], dest: 'dist/<%= pkg.name %>.js' },
          // { src: ['plugins/*.js'], dest: 'dist/plugins.js' },
        // ]
      // }
      // }
    // }
  // });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
//  grunt.loadNpmTasks('grunt-imagemin-jpeg-recompress');

  // Task lists
  // grunt.registerTask('test', ['imagemin', 'jshint']);


  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['responsive_images']);


};
