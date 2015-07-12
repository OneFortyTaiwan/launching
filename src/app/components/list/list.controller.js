'use strict';

angular
  .module('oneforty')
  .controller('ListCtrl', [function() {
    var self = this;

    self.solutions = [
      {
        title: 'Halo Halo 派對',
        titleEng: '（Halo Halo Party）',
        subtitle: '創造台灣人與東南亞朋友的第一次接觸',
        text: '我們定期舉辦各式各樣的街頭活動，邀請移工與所有關心多元文化的台灣人一同參與，創造一個能夠輕鬆交流與分享的管道，讓東南亞朋友們有機會認識真正友善的台灣人，也讓台灣人能夠從生活周遭就開始培養貨真價實的國際觀。',
        img: '/assets/images/solutions/fun-event.png'
      },
      {
        title: '移工商學院',
        titleEng: '（Migrant Bussiness School）',
        subtitle: '移工返鄉創業前的最後一哩路',
        text: '我們專為東南亞移工設計一系列3個月共8堂課的創業育成課程，減低回國經營小本生意的風險，更培養移工勇於改變的創業家精神。有別於傳統教科書式的知識傳授，我們以個案討論、角色扮演、工作坊、桌遊、街頭實戰演練等參與式教育，創造實質改變。',
        img: '/assets/images/solutions/business-school.png'
      },
      {
        title: '四十分之一角落',
        titleEng: '（One-Forty Corner）',
        subtitle: '為移工而設計的友善空間計畫',
        text: '我們運用以人為本的設計流程，讓各種專業背景的台灣人與東南亞移工一起參與社會設計工作坊，從田野調查、腦力激盪到原型試做等步驟，解決移工在台灣所面臨的問題，例如公共空間不友善、職場災害、偏見與歧視等，希望為移工打造出更適合工作與生活的環境。',
        img: '/assets/images/solutions/social-design.png',
        note: '(即將上線，敬請期待)'
      }
    ];
  }]);