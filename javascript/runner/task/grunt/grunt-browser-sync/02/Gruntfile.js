module.exports = function(grunt) {
  'use strict';

  grunt.log.writeln('\nloading grunt plugins and configs...');
  require('load-grunt-config')(grunt, {configPath: __dirname+'/helpers/grunt/config'});
  grunt.log.writeln('...done\n');

  // load custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld
  //grunt.task.run('helloworld');

  //--- @begin: grunt tasks

  grunt.registerTask('build', ['clean', 'less:dev']);

  grunt.registerTask('default', ['jshint', 'build', 'browserSync', 'watch']);

  //--- @end: grunt tasks

};
