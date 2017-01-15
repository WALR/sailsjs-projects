angular.module('foobar', []);
angular.module('foobar').controller('BaseCtrl', ['$scope', function($scope){

	
	io.socket.get('/emoji', function(data){
		$scope.emojis = data;
		$scope.$apply();
	});

	io.socket.on('emoji', function(event){
		switch(event.verb){
			case 'created':
				$scope.emojis.push(event.data);
				$scope.$apply();
				break;
		}
	});

	// $http.get('/emoji').then(function(response){
	// 	$scope.emojis = response.data;
	// }).catch(function(err) {
	// 	console.log(err);
	// });

	// Fake emojis
  // $scope.emojis = [{
  //   id: 1,
  //   text: '=)'
  // },
  // {
  // 	id: 2,
  // 	text: ':-)'
  // },
  // {
  // 	id: 3,
  // 	text: '8)'
  // },
  // {
  // 	id: 4,
  // 	text: ':)'
  // }
  // ];
}]);