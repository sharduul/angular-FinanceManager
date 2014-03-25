// creating custom service

// financeData is the name of the service
financeApp.factory('financeData', function($resource, $q){
	
	var resource = $resource('/data/event/:id', {id: '@id'});
	return {

		getFinanceEvent: function(){

			//var deferred = $q.defer();

			//return ;

			var deferred = $q.defer();

			//$resource('/data/event/:id.json', {id:'@id'})
				resource.get({id:1},
					function(event){
						deferred.resolve(event);
					},
					function(response){
						deferred.reject(response);
					});


			//console.log(deferred.promise);
			return deferred.promise;
		},

		save: function(event) {

			var deferred = $q.defer();
			event.id = 999;

			resource.save(event,
					function(response) { deferred.resolve(response); },
					function(response) { deferred.reject(response); }
				);

			return deferred.promise;
		}

		

	};
});