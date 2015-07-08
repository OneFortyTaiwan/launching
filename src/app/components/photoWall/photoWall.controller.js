'use strict';

angular
  .module('oneforty')
  .controller('PhotoWallCtrl', ['PhotoWallService', '$http', function(PhotoWallService, $http) {
    var self = this;

    self.photos = [];
    PhotoWallService.getPhotos().success(function(data) {
      self.photos = data.photoset.photo;
    });

  }]);