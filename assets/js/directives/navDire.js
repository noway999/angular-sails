'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sailsApp')
	.directive('sideNav', function() {
		return {
			templateUrl: 'templates/nav/nav.html',
			restrict: 'E',
			replace: true,
		}
	});