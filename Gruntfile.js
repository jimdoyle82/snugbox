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

        ,sass: {
            dist: {
                options: {
                    style: "expanded"
                }
                ,files: [{
                    expand: true
                    ,cwd: "scss"
                    ,src: ["*.scss"]
                    ,dest: "./css"
                    ,ext: ".css"
                }]
            }
        }
    });
    


    grunt.registerTask("default", ["sass"]);
    grunt.registerTask("local", ["devserver"]);

    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-contrib-sass');
};