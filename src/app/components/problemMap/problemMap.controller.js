'use strict';

angular
  .module('oneforty')
  .controller('ProblemMapCtrl', ['$scope', function($scope) {
    var self = this;

    self.mapShown = false;

    $scope.$on('mapStart', function($evt, active, locals) {
      if(!active) return;
      self.mapShown = active;
    });

    $scope.$on('mapEnd', function($evt, active, locals) {
      if(!active) return;
      self.mapShown = !active;
    });

  }]);