'use strict';

// DND = do not delete

// $scope is a builtin angular service
financeApp.controller('FinanceController',

	// $route is used to access custom route properties
	function FinanceController($scope, financeData, $routeParams, $route){

		$scope.comment_sort_order = '-upvote';
		$scope.mystyle_button = {color:'blue'};

		
		console.log($routeParams.eventId);

		$scope.event = financeData.getFinanceEvent($routeParams.eventId);
		$scope.event.then(
				function(event){ console.log(event); $scope.event = event; },
				function(response){ console.log(response); }
			);


		// DND. access custom route property
		// console.log($route.current.foo);
		
		// reload page. but do not reload entire app. set page to default.
		$scope.reload = function(){

			$route.reload();

		}



		$scope.upVoteComment = function(comment){
			comment.upvote++;
		};

		$scope.downVoteComment = function(comment){
			comment.upvote--;
		};

	});