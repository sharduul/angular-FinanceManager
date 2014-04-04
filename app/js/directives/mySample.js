'use strict';

financeApp.directive('mySample', function($compile){

	return{
		

		link: function(scope, element, attrs, controller){
			var markup = "<input type='text' ng-model='sampleData' />{{sampleData}}<br/>";
			angular.element(element).html($compile(markup)(scope));
		}
	}

});


financeApp.directive('mySampleElement', function($compile){

	return{

		// tell angular that directive will be used like an element
		restrict: 'E',

		// if you use template. then no need of link and all that hassle.
		template: "<input type='text' ng-model='sampleData' />{{sampleData}}<br/>"
	}

});


financeApp.directive('mySampleClass', function($compile){

	return{

		// tell angular that directive will be used like an class
		restrict: 'C',

		// if you use template. then no need of link and all that hassle.
		template: "<input type='text' ng-model='sampleData' />{{sampleData}}<br/>"
	}

});

