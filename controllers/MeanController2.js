/* global angular */

(function(){
    var MeanController2 = function(){
        var vm = this;
        vm.animal = 'Kitty';
    };
    
    MeanController2.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController2', MeanController2);
}());