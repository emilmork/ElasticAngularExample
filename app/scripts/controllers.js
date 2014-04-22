angular.module('ESApp.controllers',[])
.controller('searchController', function($scope, countryService, elSearch) {
        // Index countries

    $scope.search = function() {

        var searchQuery = $scope.global.search;

        //Search for countries with searchQuery
        elSearch.search(searchQuery).then(function(res) {
            $scope.countries = res.hits.hits;
        });
    };

})
.controller('countryController', function($scope, $routeParams, elSearch) {

    var countryId = $routeParams.id;

    // Get selected country from elasticsearch with id
    elSearch.get(countryId,{
        id: countryId
    }).then(function(response) {
        $scope.country = response._source;;
    });
})
.controller('indexController', function($scope, countryService) {
        
    //Index all countries
    countryService.indexCountries();
});