angular.module('ESApp',
    ['elasticsearch','ESApp.controllers', 'ESApp.services', 'ESApp.factories','ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/search', {
                    templateUrl: 'partials/search.html',
                    controller: 'searchController'
                }).
                when('/country/:id', {
                    templateUrl: 'partials/country.html',
                    controller: 'countryController'
                }).
                when('/index', {
                    templateUrl: 'partials/indexing.html',
                    controller: 'indexController'
                }).
                otherwise({
                    redirectTo: '/search'
                });
        }]);
