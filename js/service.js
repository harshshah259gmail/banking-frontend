
bankApp.service('customerService', function($http) {
    this.getCustomers = function(){
      var myResponseData =  $http.get(backend+'/customers').then(function (response) {
         console.log(response);
         return response.data;
       });
      return myResponseData;

    }
    this.addCustomer = function(customer){

        var myResponseData =  $http({
            url: backend+'/customers',
            method: "POST",
            data:customer,
            headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:8081'}
        })
        
        .then(function (response) {
           console.log(response);
           return response.data;
         });
        return myResponseData;
  
      }
});

bankApp.service('accountService', function($http) {
    this.getAccounts
    = function(){
      var myResponseData =  $http.get(backend+'/accounts/').then(function (response) {
         console.log(response);
         return response.data;
       });
      return myResponseData;

    }
    this.transferAmount = function(transfer) {
        var myResponseData =  $http.post(backend+'/accounts/transfer/',transfer).then(function (response) {
           console.log(response);
           return response.data;
         });
        return myResponseData;
  
      }
});


