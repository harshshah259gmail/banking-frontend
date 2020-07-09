bankApp.controller('customerController', ['$scope', 'customerService', function($scope, customerService) {

    customerService.getCustomers().then(function(data) {
        console.log(data);
        $scope.customers = data;
    });

   $scope.addCustomer=function(){
       console.log("Add",$scope.customer)
       customerService.addCustomer($scope.customer).then(function(data) {
        console.log("Customer Added Successfully");
        
    });


   } 
}]);

bankApp.controller('accountController', ['$scope', 'accountService', function($scope, accountService) {

    accountService.getAccounts().then(function(data) {
        console.log(data);
        $scope.accounts = data;
    });
    
    $scope.transferAmount = function(){
        console.log("Tarnsfer",$scope.transfer)
        accountService.transferAmount($scope.transfer).then(function(data) {
            console.log("Customer Added Successfully");
            
        });
    }


    
}]);