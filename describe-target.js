import R from 'ramda';
import {describe} from 'meteor/practicalmeteor:mocha';
import {Meteor} from 'meteor/meteor';

export const predicateDescribe = R.curry((pred, title, func) => {
	if (typeof pred != 'function'){
		pred = R.always(pred);
	}
	if (pred()){
		describe(title, func);
	}
});

export const serverDescribe = predicateDescribe(Meteor.isServer);
export const clientDescribe = predicateDescribe(Meteor.isClient);