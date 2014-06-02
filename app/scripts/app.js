'use strict';

angular
  .module('tedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home' ,{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('home.video' ,{
        url: 'video/{talkId:[0-9]}',
        //templateUrl: 'views/main.video.html',
        //controller: 'VideoCtrl',
        views: {
          '': {
            templateUrl: 'views/main.video.html',
            controller: 'VideoCtrl'
          }
        }
      });

  });
