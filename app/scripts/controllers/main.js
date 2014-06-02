'use strict';

angular.module('tedApp')
  .controller('MainCtrl', function ($rootScope, $scope, $resource) {
    $rootScope.feed = [];
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
        //add some id's to our feed array. so we can later reference it once we are in new view
        var counter = 0;
        data.responseData.feed.entries.forEach(function(el) {
          el.ind = counter;
          el.title = el.title.slice(4);//strip beginning where it says TED: 
          counter++;
        });

        console.log(data.responseData.feed.entries);
        $rootScope.feed = data.responseData.feed.entries;
      });

  });
