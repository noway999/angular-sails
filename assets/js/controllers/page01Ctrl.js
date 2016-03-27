'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sailsApp')
	.controller('Page01Ctrl', function($scope, $rootScope, $timeout, $log, Page01Serv) {
		var params = {
			method: "POST",
			url: '/apps',
			params: {}
		};
		Page01Serv.getApps(params).then(function(results) {
			$scope.items = results;
		}, function(error) {
			console.log(error);
		});

		$scope.appDetail = function(item) {
			$rootScope.menuTitle = item.name;
		}


	});