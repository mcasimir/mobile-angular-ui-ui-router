module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),  

    clean: {
      dist: ["dist"]
    },
    
    concat: {
      dist: {
        files: {
          "dist/mobile-angular-ui.ui-router.js": ["src/mobile-angular-ui.ui-router.js"]
        }
      }
    },

    uglify: {
      dist: {
        options: {
          report: 'min'
        },
        files: {
          "dist/mobile-angular-ui.ui-router.min.js": ["dist/mobile-angular-ui.ui-router.js"]
        }        
      }
    },

    watch: {
      all: {
        files: "src/*",
        tasks: ["build"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.task.loadTasks("tasks");

  grunt.registerTask("build", 
                              [ "clean:dist",
                                "concat:dist",
                                "uglify:dist"
                              ]);
};
