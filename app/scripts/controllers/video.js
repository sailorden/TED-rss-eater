'use strict';

angular.module('tedApp')
  .controller('VideoCtrl', function ($rootScope, $scope, $state, $stateParams) {
    $scope.feed = $rootScope.feed[$stateParams.talkId];
    $scope.url = $scope.feed.mediaGroups[0].contents[0].url;

    $scope.removeHandler = function() {
      $state.go('home');
    };
  });
