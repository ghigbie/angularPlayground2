/*global angular*/

(function(){
    var MeanController = function($scope){
        $scope.name = 'Bill';
        $scope.number = 0;
        
        $scope.increment = function(){
            $scope.number = $scope.number + 1;
        };
        
        $scope.decrement = function(){
            $scope.number = $scope.number -1;
        };
    };
    
    MeanController.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController', MeanController);
    
}());