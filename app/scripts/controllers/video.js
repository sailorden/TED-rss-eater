'use strict';

angular.module('tedApp')
  .controller('VideoCtrl', function ($rootScope, $scope, $stateParams) {
    console.log($stateParams);
    console.log($rootScope.feed[$stateParams.talkId]);

    $scope.url = $rootScope.feed[$stateParams.talkId].mediaGroups[0].contents[0].url;
  });
