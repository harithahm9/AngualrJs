(function() {
  'use strict';

  angular
    .module('day15')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('home.student', {
        url: '/students',
        templateUrl: 'app/student/student.html',
        controller: 'StudentController',
        controllerAs: 'student'
      })
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.teacher', {
        url: '/teachers',
        templateUrl: 'app/teacher/teacher.html',
        controller: 'TeacherController',
        controllerAs: 'teacher'
      });

    $urlRouterProvider.otherwise('/students');
  }

})();
