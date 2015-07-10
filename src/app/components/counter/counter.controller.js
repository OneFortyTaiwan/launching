'use strict';

angular
  .module('oneforty')
  .controller('CounterCtrl', ['$timeout', function($timeout) {
    var self = this;

    self.people = createPeopleWall(7, 30);

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

    self.isFirst = true;

    self.getAmount = function(amount) {
      var arr = [];
      var num = Math.ceil(amount / 2);

      for (var i = 0; i < num; i++) {
        arr.push(i);
      }

      return arr;
    };

    self.changeColor = function() {
      var $elements = document.getElementsByClassName('doll-active');
      for (var i = 0, j = $elements.length; i < j; i++) {
        $elements[i].contentDocument.getElementById('doll-head').style.fill = '#FEC34D';
        $elements[i].contentDocument.getElementById('doll-body').style.fill = '#FEC34D';
      }
    };

    self.moveLeft = function() {
      var $doll = angular.element(document.querySelectorAll('.doll-normal'));
      var $activeDoll = angular.element(document.querySelectorAll('.doll-active'));
      var $counterPeople = angular.element(document.querySelector('.counter-people'));

      $doll.addClass('zoomOut');
      $activeDoll.removeClass('infinite pulse');
      $activeDoll.addClass('doll-left');

      $timeout(function() {
        self.isFirst = false;
      }, 4000);
    };

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
  }]);