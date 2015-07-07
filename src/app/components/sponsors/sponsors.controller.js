'use strict';

angular
  .module('oneforty')
  .controller('SponsorsCtrl', [function() {
    var self = this;

    self.sponsors = [
      {
        name: 'Career for Change',
        slug: 'cfc',
        img: '/assets/images/sponsors/career_for_change.png'
      },
      {
        name: 'Give & Take',
        slug: 'gat',
        img: '/assets/images/sponsors/give_and_take.png'
      },
      {
        name: '燦爛時光',
        slug: 'selib',
        img: '/assets/images/sponsors/southeastliberary.png'
      },
      {
        name: 'Citron',
        slug: 'citron',
        img: '/assets/images/sponsors/citron.png'
      },
      {
        name: '不鳥穀',
        slug: 'forgood',
        img: '/assets/images/sponsors/for_good.png'
      },
      {
        name: 'Impact Hub',
        slug: 'ih',
        img: '/assets/images/sponsors/impact_hub.png'
      }
    ];
  }]);