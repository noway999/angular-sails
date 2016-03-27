'use strict';
/**
 * @ngdoc function
 * @name sailsApp.services:Page01Serv
 * @description
 * # Page01Serv
 * services of the sailsApp
 */
angular.module('sailsApp')
	.service('Page01Serv', function($timeout, $log, $q, $rootScope, vGlobal, MainServ) {
		this.getApps = function(params) {
			var d = $q.defer();
			MainServ.httpService(params, function(results) {
				d.resolve(results);
			}, function(error) {
				d.reject(error);
			});
			return d.promise;
		}
	});