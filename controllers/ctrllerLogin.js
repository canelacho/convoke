var app = angular.module('login', []);
app.controller('loginCtrl',['$scope', '$http', function($scope, $http){

	console.log('Connected to angular login successful');

var showForm = false;

$scope.showLogin = function(){
	$scope.showForm = true;
	console.log(showForm); 
}

$scope.showRegister = function(){
	$scope.showForm = false;
	console.log(showForm); 

}

$scope.starSession = function(user, userPwd){
	console.log(user, userPwd);
};

$scope.registerNewUser = function(nickName, email, pwd){
	console.log(nickName, email, pwd);
	var newRegister = {
		nickName: nickName,
		email: email,
		pwd: pwd
	}


$http({method:'POST', url:'/register', data:{newRegister} }).success(function(data, status, headers, config){
	if(data){
		console.log('User registered, redirecting to dashboard');
		console.log(data);
	} else {
		console.log('error registering new master of convoke user')
	}
});





};

}]);