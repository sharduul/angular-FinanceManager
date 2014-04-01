'use strict';


// Declare app level module which depends on filters, and services
var financeApp = angular.module('financeApp', ['ngRoute', 'ngResource'])
	
	// configure the route
	.config(function($routeProvider){

		$routeProvider
		.when('/newFinanceItem',
			{
				templateUrl:'templates/NewFinanceItem.html',
				controller: 'EditFinanceController'
			})
		.when('/financeItemList',
			{
				templateUrl:'templates/FinanceItemList.html',
				controller: 'FinanceItemListController'
			})
		.when('/financeItemDetails/:eventId',
			{
				templateUrl:'templates/FinanceDetails.html',
				controller: 'FinanceController'
			});

	});
