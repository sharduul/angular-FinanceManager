'use strict';


// $scope is a builtin angular service
financeApp.controller('FinanceController',
	function FinanceController($scope, financeData){

		$scope.comment_sort_order = '-upvote';
		$scope.mystyle_button = {color:'blue'};
		$scope.event = financeData.event;



		$scope.upVoteComment = function(comment){
			comment.upvote++;
		};

		$scope.downVoteComment = function(comment){
			comment.upvote--;
		};

	});