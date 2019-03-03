// import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
	// The name of the KeystoneJS application
	'name': 'Keystone CMS',
	// Paths to our application static files
	'static': [
		'./server/public/js/',
		'./server/public/img/',
	],
	// Keystone includes an updates framework,
	// which you can enable by setting the auto update option to true.
	// Updates provide an easy way to seed your database,
	// transition data when your models change,
	// or run transformation scripts against your database.
	'auto update': true,
	// The url for your MongoDB connection
	'mongo': `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/keystonereactcms?authSource=admin`,
	// Whether to enable built-in authentication for Keystone's Admin UI,
	'auth': true,
	// The key of the Keystone List for users, required if auth is set to true
	'user model': 'User',
	// The encryption key to use for your cookies.
	'cookie secret': process.env.KEYSTONE_COOKIE_SECRET,
	'port': 80
});

// Load your project's Models
keystone.import('./server/models');

// Load routes
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();
