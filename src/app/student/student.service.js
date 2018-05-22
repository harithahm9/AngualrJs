(function () {
    'use strict';

    angular
        .module('day15')
        .service('StudentService', StudentService);

    /** @ngInject */
    function StudentService($http, $q) {
        
        this.getall = function () {
            var url = 'https://api.mlab.com/api/1/databases/students/collections/marks?apiKey=alHwuwXS7ySwUO0teRHNdeilhqQO5f5S';
            var deferred = $q.defer();
            $http.get(url).then(function (response) {
              deferred.resolve(response.data);
            }).then(function (error) {
               deferred.reject(error);
            });
            return deferred.promise;

        }

        this.create = function (student) {
            var url = 'https://api.mlab.com/api/1/databases/students/collections/marks?apiKey=alHwuwXS7ySwUO0teRHNdeilhqQO5f5S';
            var deferred = $q.defer();
            $http.post(url,student).then(function (response) {
              deferred.resolve(response.data);
            }).then(function (error) {
               deferred.reject(error);
            });
            return deferred.promise;

        }
        this.update = function (student) {
            var url = 'https://api.mlab.com/api/1/databases/students/collections/marks/'+student._id.$oid+'?apiKey=alHwuwXS7ySwUO0teRHNdeilhqQO5f5S';
            delete student._id;
            var deferred = $q.defer();
            $http.put(url,student).then(function (response) {
              deferred.resolve(response.data);
            }).then(function (error) {
               deferred.reject(error);
            });
            return deferred.promise;

        }

         this.remove = function (studentid) {
            var url = 'https://api.mlab.com/api/1/databases/students/collections/marks/'+studentid+'?apiKey=alHwuwXS7ySwUO0teRHNdeilhqQO5f5S';
            var deferred = $q.defer();
            $http.delete(url).then(function (response) {
              deferred.resolve(response.data);
            }).then(function (error) {
               deferred.reject(error);
            });
            return deferred.promise;

        }

    }
})();
