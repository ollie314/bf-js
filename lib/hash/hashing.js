'use strict';

/**
 * Simple hash implementation.
 *
 * May evolve according to project needs.
 */
class Hash {

	/**
	 * Create a hash representation of to seeds.
	 * 
	 * author: bill mill (http://github.com/llimllib)
	 * see here for explanation http://www.burtleburtle.net/bob/hash/doobs.html
	 */
	hash(seed1, seed2, hashKey) {
		let a = seed1;
		let b = seed2;
		let c = hashKey;
		a -= (b + c);
		a ^= (c >> 13);
		b -= (c + a);
		b ^= (a << 8);
		c -= (a + b);
		c ^= (b >> 13);
		a -= (b + c);
		a ^= (c >> 12);
		b -= (c + a);
		b ^= (a << 16);
		c -= (a + b);
		c ^= (b >> 5);
		a -= (b + c);
		a ^= (c >> 3);
		b -= (c + a);
		b ^= (a << 10);
		c -= (a + b);
		c ^= (b >> 15);
		return Math.abs(c);
	}
}

module.exports = Hash;