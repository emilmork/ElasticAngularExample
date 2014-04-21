angular.module('ESApp.controllers',[])
.controller('searchController', function($scope, countryService, elasticClient) {
        // Index countries

    $scope.search = function() {

        var searchQuery = $scope.global.search;

        elasticClient.search({
            q : searchQuery
        }).then(function(res) {
              $scope.countries = res.hits.hits;
        });

    };

})
.controller('countryController', function($scope, $routeParams, elasticClient) {
    var countryId = $routeParams.id;
    // Get selected country from elasticsearch with id

        elasticClient.get({
            index: 'countries',
            type: 'country',
            id: countryId
        }, function (error, response) {
            console.log(response);

            var country = response._source;

            $scope.country = country;
            $scope.spellings = country.altSpellings;
            $scope.borders = country.borders;
            $scope.currency = country.currency;
        });

//    $http.get('http://localhost:9200/countries/country/' + countryId)
//        .success(function(country) {
//            $scope.country = country._source;
//            $scope.spellings = country.altSpellings;
//            $scope.borders = country.borders;
//            $scope.currency = country.currency;
//        });

})
.controller('indexController', function($scope, countryService) {
    //Index all countries
    countryService.indexCountries();
});