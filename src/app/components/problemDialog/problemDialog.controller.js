'use strict';

angular
  .module('oneforty')
  .controller('ProblemDialogCtrl', ['$scope', function ($scope) {
    var self = this;

    self.problems = [
      {
        id: 1,
        title: '少了平等的對待與理解',
        text: '我常常覺得自己低人一等，被周圍的人用不一樣的眼光對待。如果台灣人能更了解我，就會知道其實我們都一樣。'
      },
      {
        id: 2,
        title: '少了管道可以友善交流',
        text: '來臺灣很多年，我認識的台灣朋友很少，只有工廠的老闆與家裡的雇主。我希望能更認識這片土地，也能夠得到更多台灣朋友的友善支持'
      },
      {
        id: 3,
        title: '缺乏足夠的基礎商業知識',
        text: '我年紀輕輕就被迫出國，沒有機會接受完整的正規教育，也不了解如何經營一家小店，如果回國開店，失敗風險很高。'
      },
      {
        id: 4,
        title: '缺乏創業家精神與自信',
        text: '我害怕與別人分享我的夢想，也害怕失敗不敢嘗試，在台灣的日常工作總是聽人使喚，很懷疑自己有能力改變未來。'
      }
    ];

    self.problemsShown = false;

    $scope.$on('dialogStart', function($evt, active, locals) {
      if(!active) return;
      self.problemsShown = active;
    });

    $scope.$on('dialogEnd', function($evt, active, locals) {
      if(!active) return;
      self.problemsShown = !active;
    });
}]);