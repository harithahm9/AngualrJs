(function () {
  'use strict';

  angular
    .module('day15')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController(StudentService, $uibModal) {
    var vm = this;
    vm.students = [];

    getallstudents();
    function getallstudents() {
      StudentService.getall().then(function (response) {
        vm.students = response;
        calculatetotalandrank();

      }).then(function (error) {

      });
    }

      function calculatetotalandrank(){
         console.log(vm.students);
         for (var i = 0; i < vm.students.length; i++) {
        vm.students[i].total = 0;
        console.log("i",vm.students[i])
        for (var subject in vm.students[i].marks) {
            vm.students[i].total = vm.students[i].total + parseInt(vm.students[i].marks[subject])
        }
    }
    vm.students.sort(function (a, b) {
        return a.total - b.total;
    });
    vm.students.reverse();
   var rank = 1;
    var previousTotal = 0;
    var previousRank = 1;
    for (var i = 0; i < vm.students.length; i++) {
        if (previousTotal == vm.students[i].total) {
            vm.students[i].rank = previousRank;
        }
        else {
            vm.students[i].rank = rank;
            previousRank= rank;
        }
        previousTotal=vm.students[i].total;
        rank++;
    }
      }

    vm.remove = function (data) {
      var confirmremove = confirm("are you sure you want to delete the student?");
      if (!confirmremove) return;
      StudentService.remove(data._id.$oid).then(function (response) {
        getallstudents();
      }).then(function (error) {

      });
    }


    vm.openModal = function (data) {
      if (!data) {
        vm.student = { name: "", rollno: "", marks: { english: "", french: "", japanese: "", germen: "", spanish: "" } }
      }
      else {
        vm.student = JSON.parse(JSON.stringify(data));

      }

      var modalInstance = $uibModal.open({

        templateUrl: 'app/student/student-modal/student-modal.tpl.html',
        controller: 'StudentModalController',
        controllerAs: 'smc',


        resolve: {
          student: function () {
            return vm.student;
          }
        }
      });

      modalInstance.result.then(function (student) {

        if(student._id.$oid){
          updatestudent(student);
        }
        else{
          createstudent(student);
        console.log("student", student);
        }
        
        
      }, function () {

      });
    }

    function createstudent(student) {
      StudentService.create(student).then(function (response) {
        getallstudents();

      }).then(function (error) {

      });
    }
    function updatestudent(student) {
      delete student.total;
      delete student.rank;
      StudentService.update(student).then(function (response) {
        getallstudents();

      }).then(function (error) {

      });
    }


  }
})();
