angular.module('sailsApp')
	.service('MainServ', function($timeout, $log, $rootScope, $http, $q, vGlobal) {

		this.params = function(method, url, datas) {
			return {
				method: method,
				url: url,
				params: datas
			};
		}

		this.httpService = function(params, success, error) {
			//var d = $q.defer();
			$http(params).success(function(datas) {
				//	d.resolve(datas);
				success(datas);
			}).error(function(error) {
				//	d.reject(err);
				error(error);
			});
			//return d.promise;
		};

	});