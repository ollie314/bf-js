'use strict';

/* global describe,beforeEach,afterEach,it,require*/

const assert = require('assert');
const should = require('should');

const murmur = require('../lib/hash/murmur');

describe('should check murmur transformations', () => {

	it('should transform with no seed', () => {
		const input = 'test';
		const expected = 403862830;
		let actual = murmur.murmur(input);
		should.exist(actual);
		assert.equal(expected, actual);
	});
	it('should transform with a seed', () => {
		const input = 'test';
		const seed = 1.4934879295806507e+32;
		const expected = 403862830;
		let actual = murmur.murmur(input, seed);
		should.exist(actual);
		assert.equal(expected, actual);
	});
});

describe('uint32 manipulation check', () => {
	it('should transform uint32', () => {
		assert.equal(12851, murmur.uint32('32', 0));
	});
	it('should transform uint16', () => {
		assert.equal(13873, murmur.uint16('16', 0));
	});
	it('should transform umul32', () => {
		assert.equal(152344704, murmur.umul32(123456, 1234));
	});
});
