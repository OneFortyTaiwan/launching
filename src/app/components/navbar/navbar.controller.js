'use strict';

angular
  .module('oneforty')
  .controller('NavbarCtrl', ['$window', '$document', function ($window, $document) {
    var self = this;
    var $win = angular.element($window);
    var $nav = angular.element(document.getElementById('navbar'));

    self.currentSection = '';
    self.navs = [
      {
        name: '關於我們',
        link: 'home',
        isActive: true
      },
      {
        name: '了解移工',
        link: 'background',
        isActive: false
      },
      {
        name: '計畫緣起',
        link: 'problems',
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
      if ($win.scrollTop() >= $nav.offset().top) {
        $nav.addClass('is-fixed');
      } else {
        $nav.removeClass('is-fixed');
      }
    });

    self.moveTo = function(section) {
      angular.forEach(self.navs, function(nav) {
        nav.isActive = (nav.link === section) ? true : false;
      });

      self.currentSection = angular.element(document.getElementById(section));
      $document.scrollToElementAnimated(self.currentSection);
    };
  }]);
