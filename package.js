Package.describe({
	name: 'ecwyne:describe-target',
	version: '0.0.1',
	summary: '',
	git: 'https://github.com/ecwyne/meteor-describe-target',
	documentation: 'README.md'
});

Npm.depends({
	ramda: '0.21.0'
});

Package.onUse(function(api) {
	api.versionsFrom('1.3');
	api.use(['ecmascript', 'practicalmeteor:mocha', 'ramda:ramda']);
	api.mainModule('describe-target.js');
});
