module.exports = {

	signup: function(req, res) {
		User.signup(req.body, function(err, user) {
			if (err) return res.negotiate(err);
			if (req.wantsJSON) {
				return res.ok('Signup successful!');
			}
		});
	}

};