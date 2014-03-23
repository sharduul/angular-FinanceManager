'use strict';

financeApp.controller('FinanceController',
	function FinanceController($scope){

		$scope.comment_sort_order = '-upvote';
		$scope.mystyle_button = {color:'blue'};
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
					date: '1/1/2014',
					upvote: 0
				},
				{
					name: 'dale',
					content: 'kadhto!',
					date: '1/1/2014',
					upvote: 0
				},
				{
					name: 'tushar',
					content: 'very funny',
					date: '1/1/2014',
					upvote: 0
				},
				{
					name: 'mihir',
					content: 'naika?!',
					date: '1/1/2014',
					upvote: 0
				}
			],

			imageURL:''
		}



		$scope.upVoteComment = function(comment){
			comment.upvote++;
		};

		$scope.downVoteComment = function(comment){
			comment.upvote--;
		};

	});