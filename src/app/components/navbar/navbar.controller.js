'use strict';

angular
  .module('oneforty')
  .controller('NavbarCtrl', ['$document', function ($document) {
    var self = this;

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
        link: 'vision',
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

    self.moveTo = function(section) {
      angular.forEach(self.navs, function(nav) {
        nav.isActive = (nav.link === section) ? true : false;
      });

      self.currentSection = angular.element(document.getElementById(section));
      $document.scrollToElementAnimated(self.currentSection);
    };
  }]);
