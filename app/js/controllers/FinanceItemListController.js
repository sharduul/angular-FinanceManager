'use strict';

financeApp.controller('FinanceItemListController',

	function FinanceItemListController($scope, $location, financeData){

		$scope.financeItems = financeData.getAllEvents();
		
	}

);