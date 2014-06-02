'use strict';

angular.module('tedApp')
  .directive('dynamicUrl', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.attr('src', scope.url);
      }
    };
  });
