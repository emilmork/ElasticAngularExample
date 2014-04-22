angular.module('ESApp.services', [])
    .service('elasticClient', function(esFactory) {
       return esFactory({
           host: 'localhost:9200'
       })
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