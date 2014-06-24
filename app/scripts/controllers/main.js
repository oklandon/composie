'use strict';

/**
 * @ngdoc function
 * @name composieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the composieApp
 */
angular.module('composieApp')
  .controller('MainCtrl', function ($scope) {
   // $scope.instruments = ['Guitar','Drums','Bass', 'Piano'];
    $scope.instruments = ['Jazzmaster', 'P Bass', 'Rhodes Piano', 'Microkorg', 'EMX Electribe', 'EM1 Electribe', 'ES1 Electribe', 'Drum Kit', 'Volca Keys', 'Casio CZ-101', 'Kaossilator', 'Fenghuangqin', 'Clarinet', 'Poly 800', 'PT Casio', 'Gameboy', 'AY3'];
    $scope.majmin=['Major','Minor'];
    $scope.keys= ['A','B','C','D','E','F','G','Ab','Bb','C#','Eb','Gb'];
    $scope.play = ' ';
    $scope.temp= [];
    $scope.chords= ['i','ii','iii', 'iv','v','vi','vii', 'I', 'II', 'III', 'IV', 'V', 'VI','VII'];
    $scope.progression = [];
    $scope.prog = ' ';
    $scope.showResults = true;
    $scope.addInstrument= function(){
    	$scope.instruments.push($scope.instrument);
    	$scope.instrument= '';
    };
    $scope.removeInstrument= function(index){
    	$scope.instruments.splice(index, 1);
    };
    $scope.createsong= function(){
    $scope.instrumentation=[];
    $scope.progression=[];
    if($scope.instruments.length < 4){
        $scope.play = 'ERROR!  You must have at least four instruments to continue';
        return 0;
    }
    for(var i=0; i <= 3; i++)
    	{   
            var rand= Math.floor(Math.random()* $scope.instruments.length);
            while($scope.instruments[rand] === $scope.instrumentation[i-1] || $scope.instruments[rand] === $scope.instrumentation[i-2] || $scope.instruments[rand] === $scope.instrumentation[i-3]){
                rand = Math.floor(Math.random()* $scope.instruments.length);
            }
    		$scope.instrumentation.push($scope.instruments[rand]);  
        }
    //var progressionLength = Math.floor(Math.random()* 6);
    for(var k=0; k<=3; k++)
    {
        var rando= Math.floor(Math.random()* $scope.chords.length);
        while($scope.chords[rando] === $scope.progression[k-1])
        {
            rando = Math.floor(Math.random()* $scope.instruments.length);
        }
        $scope.progression.push($scope.chords[rando]);
    }
    $scope.showResults = false;
    $scope.mm =   $scope.majmin[Math.floor(Math.random()* $scope.majmin.length)];

    if ($scope.mm === 'Major'){
        $scope.progression[0] = 'I';
    }else{
        $scope.progression[0] = 'i';
    }
    $scope.tonic= $scope.keys[Math.floor(Math.random()* $scope.keys.length)];
    $scope.play = $scope.instrumentation.join(', ');
    $scope.prog = $scope.progression.join(' - ');
    };
    
  });
