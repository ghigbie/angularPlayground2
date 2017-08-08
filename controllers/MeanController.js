/*global angular*/

(function(){
    var MeanController = function(){
        var vm = this;
        vm.name = 'Bill';
        vm.number = 0;
        
        vm.increment = function(){
            vm.number = vm.number + 1;
        };
        
        vm.decrement = function(){
            vm.number = vm.number -1;
        };
    };
    
    MeanController.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController', MeanController);
    
}());