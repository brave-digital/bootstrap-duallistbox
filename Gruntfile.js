module.exports = function (grunt) {

  grunt.initConfig({

    // Import package manifest
    // pkg: grunt.file.readJSON("bootstrap-duallistbox.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      js: {
        src: ["src/material-duallistbox.js"],
        dest: "dist/material-duallistbox.js"
      },
      css: {
        src: ["src/material-duallistbox.css"],
        dest: "dist/material-duallistbox.css"
      },
      // options: {
      //   banner: "<%= meta.banner %>"
      // }
    },

    // Lint definitions
    jshint: {
      files: ["src/material-duallistbox.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      js: {
        src: ["dist/material-duallistbox.js"],
        dest: "dist/material-duallistbox.min.js"
      },
      // options: {
      //   banner: "<%= meta.banner %>"
      // }
    },

    cssmin: {
      css: {
        src: ["dist/material-duallistbox.css"],
        dest: "dist/material-duallistbox.min.css"
      },
      // options: {
      //   banner: "<%= meta.banner %>"
      // }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);

};
