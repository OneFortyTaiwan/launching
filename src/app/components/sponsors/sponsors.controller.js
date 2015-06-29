'use strict';

angular
  .module('oneforty')
  .controller('SponsorsCtrl', [function() {
    var self = this;

    self.sponsors = [
      {
        name: 'Agricola',
        img: '/assets/images/yeoman.png'
      },
      {
        name: 'Barista',
        img: '/assets/images/yeoman.png'
      },
      {
        name: 'Citadles',
        img: '/assets/images/yeoman.png'
      },
      {
        name: 'Daemon',
        img: '/assets/images/yeoman.png'
      },
      {
        name: 'Esta',
        img: '/assets/images/yeoman.png'
      }
    ];
  }]);