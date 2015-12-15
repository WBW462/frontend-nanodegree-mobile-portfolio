module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // image optimization
        imagemin: {
            dynamic: {
                options: {
                    loops: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    src: ['img/*.{png,jpg,gif}', 'views/images/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        },
        // minify css
        cssmin: {
          target: {
            files: [{
              expand: true,
              src: ['css/*.*'],
              dest: 'dist',
              ext: '.min.css'
            }]
          }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Task lists
    grunt.registerTask('default', ['imagemin', 'cssmin']);
};
