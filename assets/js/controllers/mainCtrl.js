'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sailsApp')
	.controller('MainCtrl', function($scope, $rootScope, $timeout, $mdSidenav, $translate, $log, MainServ) {
		$scope.toggleLeft = buildToggler('left'); //buildDelayedToggler('left');
		$scope.toggleRight = buildToggler('right');
		$scope.isOpenLeft = function() {
			return $mdSidenav('left').isOpen();
		};
		/**
		 * Supplies a function that will continue to operate until the
		 * time is up.
		 */
		function debounce(func, wait, context) {
			var timer;
			return function debounced() {
				var context = $scope,
					args = Array.prototype.slice.call(arguments);
				$timeout.cancel(timer);
				timer = $timeout(function() {
					timer = undefined;
					func.apply(context, args);
				}, wait || 10);
			};
		}
		/**
		 * Build handler to open/close a SideNav; when animation finishes
		 * report completion in console
		 */
		function buildDelayedToggler(navID) {
			return debounce(function() {
				$mdSidenav(navID)
					.toggle()
					.then(function() {
						$log.debug("toggle " + navID + " is done");
					});
			}, 200);
		}

		function buildToggler(navID) {
			return function() {
				$mdSidenav(navID)
					.toggle()
					.then(function() {
						$log.debug("toggle " + navID + " is done");
					});
			}
		}

		$scope.close = function(pos) {
			$mdSidenav(pos).close()
				.then(function() {
					$log.debug("close " + pos + " is done");
				});
		};

		//메뉴 타이틀
		$rootScope.menuTitle = $translate.instant('100003');

	});