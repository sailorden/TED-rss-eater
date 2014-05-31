'use strict';

angular.module('tedApp')
  .controller('MainCtrl', function ($scope, $resource) {
    $scope.feed = [];
    var Feed = $resource('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A//feeds.feedburner.com/TEDTalks_video',
      {}, {
        fetch: {
          method: 'JSONP',
          params: {
            v: '1.0',
            callback: 'JSON_CALLBACK'
          }
        }
      }
    );

    Feed.fetch()
      .$promise.then(function(data) {
        console.log(data.responseData.feed.entries);
        $scope.feed = data.responseData.feed.entries;
      });

  });
