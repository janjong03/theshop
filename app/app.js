(function () {
    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'CustomerController',
            templateUrl: 'views/customers.html'
        })
        .when('/orders/:customerId', {
            controller: 'OrdersController',
            templateUrl: 'views/orders.html'
        })
        .otherwise ( { redirectTo: '/'});
    
    });
    
}()); 