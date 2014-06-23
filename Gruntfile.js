module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json")

        ,devserver: {
            local: {
                options: {
                    base: "./"
                    ,port: "8889"
                }
            }
        }
    });
    


    grunt.registerTask("default", ["devserver"]);

    grunt.loadNpmTasks('grunt-devserver');
};