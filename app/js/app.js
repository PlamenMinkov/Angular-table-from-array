var app = angular.module('tableFromArrayFields', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newItem', {
            templateUrl: 'templates/newItem.html',
            controller: 'NewItemController'
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/allAds.html',
            controller: 'AllItemsController'
        });
        $routeProvider.when('/edit/:id', {
            templateUrl: 'templates/newItem.html',
            controller: 'EditItemController'
        });
    });

    
app.value("items",[
   {
     firstName: 'Akira',
     lastName: 'Kurosawa',
     country: 'Japan',
     occupation: 'producer'
   },
   {      
     firstName: 'Jimi',
     lastName: 'Hendrix',
     country: 'US',
     occupation: 'singer'
   },
   {
     firstName: 'Tom',
     lastName: 'Hardy',
     country: 'England',
     occupation: 'actor'
   },
   {
     firstName: 'David',
     lastName: 'Bowie',
     country: 'England',
     occupation: 'singer'
   },
   {
     firstName: 'Leonardo',
     lastName: 'DiCaprio',
     country: 'US',
     occupation: 'actor'
   },
   {
     firstName: 'Michael',
     lastName: 'Bay',
     country: 'US',
     occupation: 'producer'
   }
]);


