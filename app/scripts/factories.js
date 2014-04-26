angular.module('ESApp.factories', [])
    .factory('countryService', function($http) {

        var countryFactory = {};

        // fetch countries from json file
        countryFactory.fetchCountries = function() {
            return $http.get('files/countries.json');
        };
        // index countries
        countryFactory.indexCountries = function() {
            this.fetchCountries()
                .success(function(countries) {
                    countries.forEach(function(country,index) {
                        countryFactory.indexCountry(index, country);
                    })
                });
        };
        // index one country in elasticsearch db
        countryFactory.indexCountry = function(index, country) {
           return $http.post('http://localhost:9200/countries/country/'+index , country);
        };


        return countryFactory;
})
    .service('elSearch', function(elasticClient) {

        var elSearch = {};

        //Searching with elasticClient. Returning search promis
        elSearch.search = function(searchQuery) {
            return elasticClient.search({
                q : searchQuery
            });
        };

        //Get object from id. Returning promis
        elSearch.get = function(id) {
            return elasticClient.get({
                index: 'countries',
                type: 'country',
                id: id
            });
        }

        return elSearch;

    });