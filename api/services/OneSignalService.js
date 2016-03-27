var onesignal = require('node-opensignal-api');
var onesignal_client = onesignal.createClient();

var userAuthKey = 'NTlhOWI3NjUtNGVhMy00NjE5LTgwNzAtOTkwZWMyNmIxMWI0';

var restApiKey = 'MWFlN2UwMGItY2E2MS00YTFjLWJkZmQtMTMzZWJmNWU3NmFj';

module.exports = {

	apps: function(req, res) {
		onesignal_client.apps.viewall(userAuthKey, function(err, response) {
			if (err) {
				//console.log('Encountered error', err);
				return res.json(err);
			} else {
				//console.log(response);
				return res.json(response);
			}
		});
	},
	sendNoti: function(req, res) {
		var datas = req.body;
		var app_id = datas.appId;
		var params = {
			app_id: app_id,
			contents: {
				'en': 'Notification body',
				'es': 'Cuerpo de la notificación'
			},
			tags: [{
				"key": "custom_tag",
				"relation": "=",
				"value": "custom_value"
			}]
		};
		onesignal_client.notifications.create(restApiKey, params, function(err, response) {
			if (err) {
				console.log('Encountered error', err);
			} else {
				console.log(response);
			}
		});
	}

};