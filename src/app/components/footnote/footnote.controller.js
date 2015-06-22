'use strict';

angular
  .module('oneforty')
  .controller('FootnoteCtrl', [function() {
    var self = this;

    self.brand = {
      name: 'One-Forty',
      url: 'http://one-forty.org'
    };

  }]);