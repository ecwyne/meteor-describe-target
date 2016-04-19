# Describe Target
The new `meteor test` command is AWESOME! It automatically finds your test code and runs it. However, unless you manually specify WHERE the tests should be run, Meteor will try to run them on both the client and the server.
# Old Way
Until now, there was only two ways to specify the target of your tests.
1. Separate test files into separate `client` and `server` directories. (As they did in the [Todos App](https://github.com/meteor/todos/tree/da6f66eb1785d23eeba57299bf2a41872688b5ae/imports/ui/components))
2. Wrap your tests in a `Meteor.isClient` or `Meteor.isServer` block, which just doesn't feel very awesome.

# New Way
`meteor add ecwyne:describe-target`

With this package, you are now able to just change the name of the `describe` function you call and everything works seamlessly!
### example.test.js
```javascript
import {expect} from 'praticalmeteor:chai';
import {clientDescribe, serverDescribe, predicateDescribe} from 'ecwyne:describe-target';
import {Meteor} from 'meteor/meteor';

// runs only on the server
serverDescribe('example server test', function(){
	it('only runs on the server', function(){
		expect(Meteor.isServer).to.equal(true);
	});
});

// runs only on the client
clientDescribe('example client test', function(){
	it('only runs on the client', function(){
		expect(Meteor.isClient).to.equal(true);
	});
});

// runs everywhere
describe('example global test', function(){
	it('runs everywhere', function(){
		expect(true).to.equal(true);
	});
});

// custom predicate - only runs on Sundays!!
const sundayDescribe = predicateDescribe(() => new Date().getDay() == 0);
sundayDescribe('example sunday test', function(){
	it('only runs on Sunday', function(){
		expect(new Date().getDay()).to.equal(0);
	});
});
```