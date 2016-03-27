angular
  .module('sailsApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngMaterial',
    'ngAnimate',
    'pascalprecht.translate'
  ])
  .value('vGlobal', {
    server: 'http://huang:1337',
    getStorage: function(key) {
      return window.localStorage.getItem(key);
    },
    setStorage: function(key, val) {
      window.localStorage.setItem(key, val);
    },
    log: function(str) {
      console.log(str);
    }
  })
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $translateProvider) {

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('kr');
    $translateProvider.useStaticFilesLoader({
      prefix: 'js/i18n/',
      suffix: '.json'
    });

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });
    $urlRouterProvider.otherwise('/main/page01');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sailsApp',
              files: [
                'js/controllers/mainCtrl.js',
                'js/services/mainServ.js',
                'js/directives/navDire.js'
              ]
            })
          }
        }
      })
      .state('main.page01', { //메인 화면
        url: '/page01',
        templateUrl: 'templates/page01/page01.html',
        controller: 'Page01Ctrl',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sailsApp',
              files: [
                'js/controllers/page01Ctrl.js',
                'js/services/page01Serv.js'
              ]
            })
          }
        }
      })

    .state('main.page02', { //메인 화면
      url: '/page02',
      templateUrl: 'templates/page02/page02.html',
      controller: 'Page02Ctrl',
      resolve: {
        loadMyFiles: function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'sailsApp',
            files: [
              'js/controllers/page02Ctrl.js',
              'js/services/page02Serv.js'
            ]
          })
        }
      }
    })

  }]);