'use strict';

angular
  .module('oneforty')
  .factory('PhotoWallService', ['$http', function($http) {

    var flickrConifg = {
      api_key: 'e74c6912e6b099654805b6d1e77fafb1',
      method: 'flickr.photosets.getPhotos',
      photoset_id: '72157655602161821',
      extras: 'url_sq,url_s, url_m, url_o',
      format: 'json'
    };

    var albumPhotosUrl = 'https://api.flickr.com/services/rest/?jsoncallback=JSON_CALLBACK';
    angular.forEach(flickrConifg, function(value, key) {
      albumPhotosUrl += '&' + key + '=' + value;
    });

    return {
      getPhotos: function() {
        return $http.jsonp(albumPhotosUrl);
      }
    };
  }]);

