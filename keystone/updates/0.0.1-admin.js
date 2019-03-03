var keystone = require('keystone');
var User = keystone.list('User');
const nconf = require('nconf');

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: nconf.get('KEYSTONE_ADMIN_EMAIL'),
		password: nconf.get('KEYSTONE_ADMIN_PASSWORD'),
		canAccessKeystone: true,
	}).save(done);
};
