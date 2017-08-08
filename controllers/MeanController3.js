/* global angular */

(function(){
    var MeanController3 = function(){
        var vm = this;
        vm.animal = 'Doggie';
    };
    
    MeanController3.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController3', MeanController3);
}());