'use strict';

financeApp.directive('financeItemThumbnail', function($compile){

	return{

		// tell angular that directive will be used like an element
		restrict: 'E',

		// directive name is not visible
		replace: true,

		templateUrl:'/templates/directives/financeItemThumbnail.html'
	}

});