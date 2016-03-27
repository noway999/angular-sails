/**
 * OneSignalControllerController
 *
 * @description :: Server-side logic for managing Onesignalcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	apps: function(req, res) {
		OneSignalService.apps(req, res);
	}
};