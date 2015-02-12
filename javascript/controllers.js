'use strict';

/* Controllers */

var peopleApp = angular.module('angularApp', []);
var api = 'http://tinder-api.herokuapp.com/people';

peopleApp.controller('PeopleListCtrl', function ($scope, $http) {
  $http.get(api).success(function(data) {

    // Data contains ajax response from API
    $scope.people = data;

    data.forEach(function(person) {
      var latitude = person.latitude;
      var longitude = person.longitude;
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true_or_false';

      // Ajax call to Google API to get address
      Tinder.ajax(url, {}, function(response) {
        // Extract City from response
        try {
          person.city = response.results[0].address_components[3].long_name
        } catch(e) {
          person.city = "Unknown";
        }
        // Refresh view with Angular
        $scope.$apply();
      });
    });

  });
});
