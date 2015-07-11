'use strict';

angular
  .module('oneforty')
  .controller('CarouselCtrl', [function () {
    var self = this;

    self.slides = [
      {
        id: 1,
        img: '/assets/images/backgrounds/headfold-station.jpg',
        text1: '東南亞移工為台灣社會帶來了多元種族、文化與價值觀。',
        text2: '在他們勇敢跨越國界實踐夢想的路上，我們應該推上一把。'
      },
      {
        id: 2,
        img: '/assets/images/backgrounds/headfold-chapel.jpg',
        text1: '培養國際觀不用天天出國，只要用對的心態看待從東南亞來的移工，',
        text2: '生活周遭就是你認識世界的場域。'
      },
      {
        id: 3,
        img: '/assets/images/backgrounds/headfold-students.jpg',
        text1: '我們要的是勞動力，來的卻是人。因為是人，就有情感、',
        text2: '想要被尊重、被肯定，我們希望讓每一位東南亞移工看見自己的重要價值。'
      }
    ];
}]);