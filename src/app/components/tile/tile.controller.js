'use strict';

angular
  .module('oneforty')
  .controller('TileCtrl', [function() {
    var self = this;

    self.tiles = [
      {
        title: '個人支持',
        img: '/assets/images/icons/join-public.png',
        text: [
          '找到一個與東南亞朋友產生連結的方式，',
          '從身邊就開始認識世界。你可以成為One-Forty 長期夥伴、',
          '專長協助、短期志工或是有任何天馬行空的點子想與我們聊聊'
        ],
        link: 'https://docs.google.com/forms/d/1V1DNYSv8ne_zrSKH_yqyNMsCwnOyRKaATFbTw0dVziM/viewform',
        btn: '加入我們'
      },
      {
        title: '組織合作',
        img: '/assets/images/icons/join-inc.png',
        text: [
          '加入 Support for One-Forty 行動倡議，',
          '發動組織力量展現善意。你可以提供上課場地支持、',
          '贊助系列課程與街頭活動、媒體協力宣傳與其他合作方式'
        ],
        link: 'https://docs.google.com/forms/d/1gjJR0nUNOLhsIKea00a5f8uHih8kpWWMfF9Qc70j1mA/viewform',
        btn: '加入我們'
      }
    ];
  }]);