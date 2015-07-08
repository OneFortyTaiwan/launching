'use strict';

angular
  .module('oneforty')
  .directive('description', ['$log', function($log) {

    return {
      scope: {
        id: '@',
        title: '@',
        imageBack: '='
      },
      restrict: 'AE',
      templateUrl: '/app/components/description/description.html',
      transclude: true,
      link: function($scope, element, attrs, ctrl, transclude) {

      }
    };
  }]);