'use strict';

const assert = require('assert');
const should = require('should');

const BloomFilter = require('../lib/bf');

describe('Test bloom filter behavior', () => {

	let bloom;

	beforeEach(() => {
		bloom = new BloomFilter();
	});

	afterEach(() => {
		bloom = null;
	});

	it('Should apply fnv1s correctly', () => {
		const input = 'test';
		const expected = 207522360;
		let actual = bloom.fnv(input);
		should.exist(actual);
		assert.equal(expected, actual);
	});

	it('Should apply murmur correctly', () => {
		const input = 'test';
		const seed = 1.4934879295806507e+32;
		const expected = 403862830;
		let actual = bloom.murmur(input, seed);
		should.exist(actual);
		assert.equal(expected, actual);
	});
});