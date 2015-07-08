'use strict';

angular
  .module('oneforty')
  .controller('SocialCtrl', [function() {
    var self = this;

    self.socialIcons = [
      {
        name: 'facebook',
        href: 'https://www.facebook.com/onefortytaiwan'
      },
      {
        name: 'email',
        href: 'mailto:onefortytaiwan@gmail.com?subject=[建議] 我想告訴One-Forty...&body=One-Forty您好，'
      },
      {
        name: 'instagram',
        href: 'https://instagram.com/onefortytaiwan/'
      },
      {
        name: 'google-plus',
        href: 'https://plus.google.com/u/3/116925272212501768367/posts'
      }
    ];

  }]);