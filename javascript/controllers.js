'use strict';

/* Controllers */

var peopleApp = angular.module('angularApp', []);

peopleApp.controller('PeopleListCtrl', function ($scope, $http) {
  $http.get('http://tinder-api.herokuapp.com/people').success(function(data) {

    $scope.people = data;

  });
});