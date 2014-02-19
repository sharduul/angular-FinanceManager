'use strict';

financeApp.controller('FinanceController',
	function FinanceController($scope){
		$scope.event = {
			name: 'Ritz tiger sub',
			amount: '30',
			date: '1/1/2014',
			type: 'bill',
			paid_by:
				{
					name: 'Shardul Bagade',
					location: 'Rochester'
				},
			between_persons:['shardul', 'tushar', 'mihir', 'dale', 'ashwini'],
			comments:
			[
				{
					name: 'shardul',
					content: 'very nice sub',
					upvote: 0
				},
				{
					name: 'dale',
					content: 'kadhto!',
					upvote: 0
				},
				{
					name: 'tushar',
					content: 'very funny',
					upvote: 0
				},
				{
					name: 'mihir',
					content: 'naika?!',
					upvote: 0
				}
			]
		}



		$scope.upVoteComment = function(comment){
			comment.upvote++;
		};

		$scope.downVoteComment = function(comment){
			comment.upvote--;
		};

	});