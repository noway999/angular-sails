var cssFilesToInject = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/angular-material/angular-material.css',
  'bower_components/angular-loading-bar/build/loading-bar.min.css',
  'bower_components/font-awesome/css/font-awesome.min.css',
  'styles/**/*.css'
];
var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  'bower_components/jquery/dist/jquery.js',
  'bower_components/angular/angular.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-aria/angular-aria.js',
  'bower_components/angular-messages/angular-messages.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/oclazyload/dist/ocLazyLoad.min.js',
  'bower_components/angular-loading-bar/build/loading-bar.min.js',
  'bower_components/angular-material/angular-material.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/angular-translate/angular-translate.min.js',
  'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
  'js/dependencies/**/*.js',
  'js/**/*.js'
];

var templateFilesToInject = [
  'templates/**/*.html'
];


// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  return require('path').join('assets/', tplPath);
});