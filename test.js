'use strict';
var assert = require('assert');
var rdStartups = require('./');

it('should return a list of startups', function () {
	assert.strictEqual(Object.keys(rdStartups).length > 1000, true);
});
