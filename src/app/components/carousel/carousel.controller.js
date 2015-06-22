'use strict';

angular
  .module('oneforty')
  .controller('CarouselCtrl', [function () {
    var self = this;

    self.myInterval = 2000;
    self.slides = [];

    self.addSlide = function() {
      var newWidth = 600 + self.slides.length + 1;
      self.slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][self.slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][self.slides.length % 4]
      });
    };

    for (var i=0; i<4; i++) {
      self.addSlide();
    }
}]);