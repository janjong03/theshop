(function() {
    var customersService = function(){
        var customers =  [
              {
                  id: 1,
                  name: 'John', 
                  city: 'Toronto',
                  orders: [
                      {
                          id: 5,
                          product: 'Kincect',
                          total: '100.99'
                      }
                      ]
              }, 
              {
                  id: 2,
                  name: 'Michelle', 
                  city: 'Courtice',
                  orders: [
                      {
                          id: 1,
                          product: 'Macbook',
                          total: '1399.99'
                      }
                      ]
              }, 
              {
                  id: 3,
                  name: 'Tony', 
                  city: 'San Pablo',
                  orders: [
                      {
                          id: 2,
                          product: 'Camcoder',
                          total: '359.99'
                      }
                      ]
              }, 
              {
                  id: 4,
                  name: 'George', 
                  city: 'Kawit',
                  orders: [
                      {
                          id: 3,
                          product: 'Chair',
                          total: '299.99'
                      }
                      ]
              }
          ];
       
        this.getCustomers = function() {
            return customers;
    };
        this.getCustomer = function(customerId)
        { 
            for (var i=0, len = customers.length; i<len; i++)
            {
                if(customers[i].id === parseInt(customerId)){
               return customers[i];
                }
            }
            return {};
        }
        
      
}
      angular.module('customersApp').service('customersService',customersService);
}());