(function(){
    var CustomerController = function($scope, customersFactory, appSettings)
    {
    
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.appSettings = appSettings;
            
    $scope.customers = [];
        
        function init() {
            //syncrounous call
       /* $scope.customers = customersService.getCustomers();*/
            customersFactory.getCustomers()
                .success(function(customers){
                $scope.customers = customers;
            })
                .error(function(data, status, header, config){
                console.log('Error in customersController');
            });;
        }
        init();
        
    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !this.reverse;
    };
    };
    
    CustomerController.$inject =['$scope','customersFactory', 'appSettings'];
    
    angular.module('customersApp')
    .controller('CustomerController', CustomerController);
}());