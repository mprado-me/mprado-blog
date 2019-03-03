var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: process.env.KEYSTONE_ADMIN_EMAIL,
		password: process.env.KEYSTONE_ADMIN_PASSWORD,
		canAccessKeystone: true,
	}).save(done);
};
