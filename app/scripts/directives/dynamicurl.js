'use strict';

//http://stackoverflow.com/questions/21292114/external-resource-not-being-loaded-by-angularjs

angular.module('tedApp')
  .directive('dynamicUrl', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.attr('src', scope.url);
      }
    };
  });
