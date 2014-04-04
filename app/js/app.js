'use strict';


// Declare app level module which depends on filters, and services
var financeApp = angular.module('financeApp', ['ngRoute', 'ngResource'])
	
	// configure the route
	.config(function($routeProvider, $locationProvider){

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

		//'eventID' param can be accessed by controller using routeparams
		.when('/financeItemDetails/:eventId',
			{
				// you can also create custom route property
				//foo: 'value',

				templateUrl:'templates/FinanceDetails.html',
				controller: 'FinanceController'
			})

		// routing to sample user defined directive
		.when('/sampleDirective',
			{
				// you can also create custom route property
				//foo: 'value',

				templateUrl:'templates/SampleDirective.html',
				controller: 'SampleDirectiveController'
			})
		.otherwise({ redirectTo: '/newFinanceItem'});


		// get rid of hash signs. is not working. check this.
		// $locationProvider.html5Mode(true);
	});
