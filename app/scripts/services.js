angular.module('ESApp.services', [])
    .service('elasticClient', function(esFactory) {
       return esFactory({
           host: 'localhost:9200'
       })
    });