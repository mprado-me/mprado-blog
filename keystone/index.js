const nconf = require('nconf');

// import keystone
var keystone = require('keystone');

// Setting dev or prod configs
nconf.env().argv().required(['NODE_ENV']);
if(nconf.get('NODE_ENV') == 'prod'){
    nconf.file({file: "configs/prod.json"});
}
else if(nconf.get('NODE_ENV') == 'dev') {
    nconf.file({file: "configs/dev.json"});
}
else {
    throw Error("NODE_ENV deve pertencer a ['dev', 'prod']");
}

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
	'mongo': `mongodb://${nconf.get('MONGO_INITDB_ROOT_USERNAME')}:${nconf.get('MONGO_INITDB_ROOT_PASSWORD')}@${nconf.get("mongoHost")}:27017/keystonereactcms?authSource=admin`,
	// Whether to enable built-in authentication for Keystone's Admin UI,
	'auth': true,
	// The key of the Keystone List for users, required if auth is set to true
	'user model': 'User',
	// The encryption key to use for your cookies.
	'cookie secret': nconf.get('KEYSTONE_COOKIE_SECRET'),
	'port': nconf.get('port')
});

// Load your project's Models
keystone.import('./server/models');

// Load routes
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();
