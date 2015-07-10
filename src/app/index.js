'use strict';

angular
  .module('oneforty', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'duScroll', 'angular-carousel'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .value('duScrollDuration', 1000)
  .value('duScrollOffset', 0)
;
