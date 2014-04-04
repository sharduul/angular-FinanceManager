// creating custom service

// financeData is the name of the service
financeApp.factory('financeData', function($resource, $q){
	
	var resource = $resource('/data/event/:id', {id: '@id'});
	return {

		getFinanceEvent: function(eventID){

			//var deferred = $q.defer();

			//return ;

			var deferred = $q.defer();

			//$resource('/data/event/:id.json', {id:'@id'})
				resource.get({id:eventID},
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
		},


		getAllEvents: function(){

			console.log("1111");
			return resource.query();
			console.log("2222");
		}

		

	};
});