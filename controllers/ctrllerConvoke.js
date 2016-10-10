var app = angular.module('registerUsers', []);
app.controller('register', ['$scope', '$http', '$window', function($scope, $http, $window, $cookiesProvider) {
    
  // console.log("Connected to Angular OK..."); 

  var cacheGuest = $('#cache').text();
  var listIdLoad = $('#listIdLoad').text();
  
  var sessionUser = "Pedro";

  $scope.editUser = function(cacheFound, ownerName){
    // console.log("cacheFound: "+ cacheFound+" y cacheGuest: " + cacheGuest);
    // console.log("propietario: " + ownerName);
    if(cacheFound == cacheGuest || ownerName == sessionUser){
      return true;
    } else {
      return false;
    }
  }
  

  var loadList = function(listIdLoad){
    $http({method:'GET',url:'/list/' + listIdLoad }).success(function(data,status,headers,config) {
      if(data){
        // console.log('Finded: ' + (JSON.stringify(data, null, 4)) );
        $scope.activeList = data;
        $scope.totalUsers = data[0].users.length;

        if(data[0].users.length > data[0].maxuserslist){
          $scope.waitingUsers = data[0].users.length - data[0].maxuserslist;
        } else {
          $scope.waitingUsers = 0
        }

      }else{
        console.log('error cargando lista')
      }
    });
  };


  $scope.addUser = function(userName, listId) {
    // console.log(userName + " - " + listId + " - " + cacheGuest);
    // $scope.totalUsers = userList.users.length;
    // $scope.waitingUsers = waiting();

    $http({method:'PUT',url:'/list/user/', data:{name:userName, listid: listId, cacheguest: cacheGuest } }).success(function(data,status,headers,config) {
      if(data){
        // console.log('User added and saved');
        // console.log(data);
        $scope.userName = '';
        loadList(listIdLoad);
      }else{
        console.log('error adding new user')
      }
    });

  };

  $scope.deleteUser = function(userName, listId){
    // console.log(userName + " - " + listId);
    $http({method:'DELETE',url:'/list/user/', params:{name:userName, listid: listId} }).success(function(data,status,headers,config) {
      if(data){
        // console.log('User deleted');
        // console.log(data);
        loadList(listIdLoad);
      }else{
        console.log('error deleting user')
      }
    });

  };

loadList(listIdLoad);
    
}]);