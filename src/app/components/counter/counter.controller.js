'use strict';

angular
  .module('oneforty')
  .controller('CounterCtrl', [function() {
    var self = this;

    self.countries = [
      {
        name: 'Indonesia',
        img: 'assets/images/flags/indonesia.png',
        amount: '25'
      },
      {
        name: 'Vietnam',
        img: 'assets/images/flags/vietnam.png',
        amount: '15'
      },
      {
        name: 'Philippines',
        img: 'assets/images/flags/philippines.png',
        amount: '11'
      },
      {
        name: 'Thailand',
        img: 'assets/images/flags/thailand.png',
        amount: '7'
      }
    ];

  }]);