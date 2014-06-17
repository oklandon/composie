'use strict';

/**
 * @ngdoc function
 * @name composieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the composieApp
 */
angular.module('composieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
