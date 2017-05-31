(function () {
    'use strict';

    angular
        .module('geradorReferenciasApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
