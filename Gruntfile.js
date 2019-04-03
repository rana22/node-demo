module.exports = function(grunt) {
    grunt.initConfig({
        mkdir: {
            build: {
                options: {
                    create: ["build"]
                }
            }
        },
        clean: {
            build: ['build/**']
        },
        ts: {
            default : {
                tsconfig: true
            }
        }
    });
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["clean", "mkdir", "ts"]);
};