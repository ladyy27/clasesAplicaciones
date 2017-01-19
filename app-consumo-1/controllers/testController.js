angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.posts={};
	$scope.mensaje="";
	$scope.getAllMaterias = function(){
		testRequest.posts().then(function (data){//lo importa desde la factoria
      console.log("...");
      console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getMateria = function(){
		$scope.unPost={};
		testRequest.post($scope.post_id).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
  $scope.crear = function(){
    datos = {'title': $scope.a.title, 'code': $scope.a.code}
		testRequest.add_post(datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

}
