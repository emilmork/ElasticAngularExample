angular.module('ESApp.services', [])
    .service('elasticClient', function(esFactory) {
       return esFactory({
           host: 'localhost:9200'
       })
    })
    .service('elSearch', function(elasticClient) {

        var elSearch = {};

        elSearch.search = function(searchQuery) {
            //Searching with elasticClient. Returning search promis
            return elasticClient.search({
                q : searchQuery
            });
        };

        elSearch.get = function(id) {
            return elasticClient.get({
                index: 'countries',
                type: 'country',
                id: id
            });
        }

        return elSearch;

    });