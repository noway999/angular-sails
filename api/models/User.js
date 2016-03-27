/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'someMongodbServer',
	attributes: {
		username: {
			type: 'string',
			required: true
		},
		email: {
			type: 'email',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
		// },
		// roles: {
		// 	collection: 'Role',
		// 	via: 'users'
		// }
	},
	signup: function(inputs, cb) {
		User.create({
				username: inputs.username,
				email: inputs.email,
				password: inputs.password
			})
			.exec(cb);
	},

	login: function(inputs, cb) {
		User.findOne({
				email: inputs.email,
				password: inputs.password
			})
			.exec(cb);
	}
};