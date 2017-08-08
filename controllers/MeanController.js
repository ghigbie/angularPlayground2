/*global angular*/

(function(){
    var MeanController = function($scope){
        $scope.name = 'Bill';
    };
    
    MeanController.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController', MeanController);
    
}());