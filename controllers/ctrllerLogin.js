var app = angular.module('login', []);
app.controller('loginCtrl',['$scope', '$http', '$window', function($scope, $http, $window){

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
	var loginConvoker = {
		user: user,
		pwd: userPwd
	}

	$http({method:'POST', url:'/login', data:{loginConvoker} }).success(function(data, status, headers, config){
		if(data){
			$window.location.href = '/dashboard/' + data[0]._id;
		} else {
			console.log('error login Convoker');
		}
	});

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
			$window.location.href = '/dashboard';
		} else {
			console.log('error registering new master of convoke user');
			$scope.errMsg = "Invalid e-mail ... ";
		}
	});

};


}]);