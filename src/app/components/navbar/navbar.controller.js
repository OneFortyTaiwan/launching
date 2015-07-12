'use strict';

angular
  .module('oneforty')
  .controller('NavbarCtrl', ['$scope', '$window', '$document', function ($scope, $window, $document) {
    var self = this;
    var $win = angular.element($window);
    var $header = angular.element(document.getElementsByClassName('header-container')[0]);

    self.currentSection = '';
    self.navs = [
      {
        name: '關於我們',
        link: 'home',
        isActive: true
      },
      {
        name: '移工故事',
        link: 'background',
        isActive: false
      },
      {
        name: '計畫緣起',
        link: 'problem-dialog',
        isActive: false
      },
      {
        name: '三個計畫',
        link: 'solutions',
        isActive: false
      },
      {
        name: '活動記錄',
        link: 'gallery',
        isActive: false
      },
      {
        name: '加入我們',
        link: 'joinus',
        isActive: false
      }
    ];

    $win.on('scroll', function() {
      if($win.scrollTop() > 0) {
        $header.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
      }
    });

    self.moveTo = function(section) {
      angular.forEach(self.navs, function(nav) {
        nav.isActive = (nav.link === section) ? true : false;
      });

      self.currentSection = angular.element(document.getElementById(section));
      $document.scrollToElementAnimated(self.currentSection);

      $scope.navCollapsed = true;
    };
  }]);
