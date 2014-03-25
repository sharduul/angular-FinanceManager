'use strict';

financeApp.controller('EditFinanceController',

	function EditFinanceController($scope, financeData){

		$scope.event = {};

		$scope.SaveFinanceItem = function(event, newFinanceItemForm){

			if(newFinanceItemForm.$valid)
			{
				financeData.save($scope.event)
					.then(
							function(response) { console.log('success', response); },
							function(response) { console.log('failure', response); }
						);
			}
			
		}

		$scope.CancelSave = function(){
			window.location = "/FinanceDetails.html";
		}

	}



	); 