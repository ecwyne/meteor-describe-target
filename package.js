Package.describe({
	name: 'ecwyne:describe-target',
	version: '0.0.2',
	summary: 'Simply specify where Meteor tests should be run',
	git: 'https://github.com/ecwyne/meteor-describe-target',
	documentation: 'README.md',
	testOnly: true
});

Npm.depends({
	ramda: '0.21.0'
});

Package.onUse(function(api) {
	api.versionsFrom('1.3');
	api.use(['ecmascript', 'practicalmeteor:mocha@2.1.0_7']);
	api.mainModule('describe-target.js');
});
