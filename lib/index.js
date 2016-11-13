'use strict';

const utils = require('./utils');
const murmur = require('./hash/murmur');
const Hasher = require('./hash/hashing');
const BloomFilter = require('./bf');

// have to drop this deps when we switch to C implementation
const _ = require('lodash');

/**
 * Glue to associate a context and his related bloom filter.
 * Actually, this is only a pure test implementation to drive a deeper reflexion
 * about way of processing.
 */
class BloomContext {

	/**
	 * Default constructor.
	 *
	 * This should be review since constructing the context from meta information
	 * looks more relevant for our needs.
	 *
	 * @param {int} maxKeys 	maximum number of keys in the set.
	 */
	constructor(maxKeys) {
		this._maxKeys = maxKeys;
		this._keyCount = 0;
		this.hash = new Hasher();
		this.bloom = new BloomFilter();
	}

	estimateAccuracy() {
		return Math.pow(this._keyCount / this._maxKeys, 2);
	}

	pushContent(content) {
		this._keyCount++;
		this._content.push(content);
		return {
			fnv: this.bloom.flv(content) % this._maxKeys,
			murmur: this.bloom.murmur(content) % this._maxKeys
		};
	}

	testMembership(input) {
		return {
			fnv: this.bloom.flv(content) % this._maxKeys,
			murmur: this.bloom.murmur(content) % this._maxKeys,
			accuracy: this.estimateAccuracy()
		};
	}
}
