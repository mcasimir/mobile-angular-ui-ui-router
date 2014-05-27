module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),  

    clean: {
      dist: ["dist"]
    },
    
    concat: {
      dist: {
        files: {
          "dist/mobile-angular-ui.ui-router.js": ["src/js/mobile-angular-ui.ui-router.js"]
        }
      }
    },

    uglify: {
      options: {
        report: 'min'
      },
      files: {
        "dist/mobile-angular-ui.ui-router.min.js": ["dist/js/mobile-angular-ui.ui-router.js"]
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
