'use strict';

const utils = require('./utils');
const murmur = require('./hash/murmur');
const Hasher = require('./hash/hashing');
const BloomFilter = require('./bf');

// have to drop this deps when we switch to C implementation
const _ = require('lodash');
// for future usage, implement a

class BloomContext {

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
