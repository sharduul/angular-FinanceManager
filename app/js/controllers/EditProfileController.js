'use strict';

financeApp.controller('EditProfileController', 

	function EditProfileController($scope, UserProfileData){


		$scope.user = {};

		$scope.getProfileUrl = function(){
			return UserProfileData.buildProfileImage();
		};
}


);