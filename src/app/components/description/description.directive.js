'use strict';

angular
  .module('oneforty')
  .directive('description', ['$log', function($log) {

    return {
      scope: {
        sectionId: '@',
        title: '@',
        imageBack: '='
      },
      restrict: 'AE',
      replace: true,
      templateUrl: '/app/components/description/description.html',
      transclude: true,
      link: function($scope, element, attrs, ctrl, transclude) {

      }
    };
  }]);