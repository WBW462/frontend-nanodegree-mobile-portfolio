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
                    src: ['img/*.{png,jpg,gif}', 'views/images/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //  grunt.loadNpmTasks('grunt-responsive-images');

    // Task lists
    // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', ['imagemin']);
};
