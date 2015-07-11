'use strict';

angular
  .module('oneforty')
  .controller('CounterCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var self = this;
    var activateDolls = activateDolls;
    var shiftDolls = shiftDolls;

    /**
     * Varibles used in view
     */
    self.people = createPeopleWall(3, 30);

    self.countries = [
      {
        name: '印尼',
        img: 'assets/images/flags/indonesia.png',
        amount: 25
      },
      {
        name: '越南',
        img: 'assets/images/flags/vietnam.png',
        amount: 15
      },
      {
        name: '菲律賓',
        img: 'assets/images/flags/philippines.png',
        amount: 11
      },
      {
        name: '泰國',
        img: 'assets/images/flags/thailand.png',
        amount: 7
      }
    ];

    self.jobs = [
      {
        name: '工廠與工地勞工',
        img: '/assets/images/jobs/factory.png',
        slug: 'factory'
      },
      {
        name: '遠洋漁船的漁工',
        img: '/assets/images/jobs/fisher.png',
        slug: 'fisher'
      },
      {
        name: '家庭幫傭與看護',
        img: '/assets/images/jobs/maid.png',
        slug: 'maid'
      }
    ];

    self.currentStage = '';
    self.elementState = {
      flags: false,
      countryDolls: false,
      amount: false,
      jobs: false
    };

    /**
     * Rendering functions used in view
     */
    self.getAmount = function(amount) {
      var arr = [];
      var num = Math.ceil(amount / 2);

      for (var i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };

    /**
     * Event handlers when window scrolls
     */
    $scope.$on('isPeople', function($evt, active, locals) {
      if(!active) return;
      self.currentStage = 'people';
    });

    $scope.$on('isCountries', function($evt, active, locals) {
      if(!active) return;
      self.currentStage = 'countries';
    });

    $scope.$on('activateDolls', function($evt, active, locals) {
      if(!active) return;
      activateDolls();
    });

    $scope.$on('shiftDolls', function($evt, active, locals) {
      if(!active) return;
      shiftDolls();
    });

    $scope.$on('showCountryDolls', function($evt, active, locals) {
      if(!active) return;
      self.elementState.countryDolls = active;
    });

    $scope.$on('showFlags', function($evt, active, locals) {
      if(!active) return;
      self.elementState.flags = active;
    });

    $scope.$on('showAmount', function($evt, active, locals) {
      if(!active) return;
      self.elementState.amount = active;
    });

    $scope.$on('showJobs', function($evt, active, locals) {
      if(!active) return;
      self.elementState.jobs = active;
    });

    /**
     * Private functions used in the controller
     */
    function createPeopleWall(row, column) {
      var arr = [];
      var random = 0;

      for(var i = 0; i < row; i++) {
        arr[i] = [];
        random = Math.floor(Math.random() * (column - 1) );

        for (var j = 0; j < column; j++) {
          if (j === random) {
            arr[i][j] = true;
          } else {
            arr[i][j] = false;
          }
        }
      }

      return arr;
    }

    function activateDolls() {
      var $elements = document.getElementsByClassName('doll-active');
      for (var i = 0, j = $elements.length; i < j; i++) {
        $elements[i].contentDocument.getElementById('doll-head').style.fill = '#FEC34D';
        $elements[i].contentDocument.getElementById('doll-body').style.fill = '#FEC34D';
      }
    }

    function shiftDolls() {
      var $doll = angular.element(document.querySelectorAll('.doll-normal'));
      var $activeDoll = angular.element(document.querySelectorAll('.doll-active'));
      var $counterPeople = angular.element(document.querySelector('.counter-people'));

      $doll.addClass('zoomOut');
      $activeDoll.removeClass('infinite pulse');
      $activeDoll.addClass('doll-left');
    }

    function returnDolls() {
      var $doll = angular.element(document.querySelectorAll('.doll-normal'));
      var $activeDoll = angular.element(document.querySelectorAll('.doll-active'));
      var $counterPeople = angular.element(document.querySelector('.counter-people'));

      $doll.removeClass('zoomOut');
      $activeDoll.addClass('infinite pulse');
      $activeDoll.removeClass('doll-left');
    }

  }]);