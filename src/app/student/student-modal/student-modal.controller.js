(function () {
    'use strict';

    angular
        .module('day15')
        .controller('StudentModalController', StudentModalController);

    /** @ngInject */
    function StudentModalController($uibModalInstance,student) {

        var vm = this;
       vm.student=student;
    
        vm.ok = function () {
            $uibModalInstance.close(vm.student);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
})();