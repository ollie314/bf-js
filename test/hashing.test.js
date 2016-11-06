'use strict';

const assert = require('assert');
const should = require('should');

const Hash = require('../lib/hash/hashing');

describe('Hash information', () => {
	const seed1 = 1.8818279113925778e+32;
	const seed2 = 2.271891354810851e+30;
	let hash = new Hash();

	it('Should hash correctly', () => {
		const hashKey = 1234;
		const expected = 1839450424;
		let actual = hash.hash(seed1, seed2, hashKey);
		should.exist(actual);
		assert.equal(expected, actual);
	});
});