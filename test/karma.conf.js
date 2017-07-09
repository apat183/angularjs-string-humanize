/*global module */
module.exports = function ( config ) {
  'use strict';

  var files = [
    '../bower_components/angular/angular.js',
    '../bower_components/angular-mocks/angular-mocks.js',
    '../src/angularjs-string-humanize.js',
    '../test/unit/angularjs-string-humanize.spec.js'
  ];

  config.set({
    files : files,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,
    singleRun: false,
    colors: true
  });
};