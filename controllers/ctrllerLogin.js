var app = angular.module('login', []);
app.controller('loginCtrl',['$scope', '$http', '$window', function($scope, $http, $window){

console.log('Connected to angular login successful');

var showForm = false;

// change between login and join us
$scope.showLogin = function(){
	$scope.showForm = true;
}

// change between join us and login
$scope.showRegister = function(){
	$scope.showForm = false;
}

// start session by login
$scope.starSession = function(user, userPwd){
	console.log(user, userPwd);
	var loginConvoker = {
		user: user,
		pwd: userPwd
	}

	$http({method:'POST', url:'/login', data:{loginConvoker} }).success(function(data, status, headers, config){
		if(data){
			$window.location.href = '/app/dashboard/' + data[0]._id;
		} else {
			console.log('error login Convoker');
		}
	});

};

// register new user on join us
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