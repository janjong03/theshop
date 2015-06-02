(function(){
 
 var OrdersController = function($scope, $routeParams, customersFactory) {
          var customerId = $routeParams.customerId;
          $scope.customer = null;
          function init() {
            //syncrounous call
       /* $scope.customers = customersService.getCustomers();*/
            customersFactory.getCustomer(customerId)
                .success(function(customers){
                $scope.customer = customers;
            })
                .error(function(data, status, header, config){
                console.log("Error in ordersController");
            });;
        }
        
     init();
};
OrdersController.inject = ['$scope', '$routeParams'];
    
angular.module('customersApp')
    .controller('OrdersController', OrdersController);
 
 }());