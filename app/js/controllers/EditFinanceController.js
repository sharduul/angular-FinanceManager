'use strict';

financeApp.controller('EditFinanceController',

	function EditFinanceController($scope){


		$scope.SaveFinanceItem = function(event, newFinanceItemForm){

			if(newFinanceItemForm.$valid)
			{
				window.alert(event.name + " has been saved !!!");
			}
			
		}

		$scope.CancelSave = function(){
			window.location = "/FinanceDetails.html";
		}

	}



	); 