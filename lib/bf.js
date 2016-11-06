'use strict';
// from source :
// The Jenkins 96 bit mix function:
// http://www.concentric.net/~Ttwang/tech/inthash.htm
// stolen from Google Chromium's bloom filter
// http://www.google.com/codesearch/p#OAMlx_jo-ck/src/chrome/browser/safe_browsing/bloom_filter.cc&exact_package=chromium
// thanks dudes!
//

// see http://billmill.org/bloomfilter-tutorial/ for original source.
// see http://github.com/llimllib for original author

const utils = require('./utils');
const murmur = require('./hash/murmur');
const Hasher = require('./hash/hashing');

class BloomFilter {

   _createSeed() {
      return Math.floor(Math.random() * 2e32);
   }

   constructor() {
      this.seed1 = this._createSeed();
      this.seed2 = this._createSeed();
      this.hash = new Hasher();
   }

   _hashMix(hashKey) {
      return hash.hash(this.seed1, this.seed2, hashKey);
   }

   fnv(str) {
     let bytes = utils.stringToBytes(str);
     let hash = BloomFilter.FNVINIT;
     for (var i=0; i < bytes.length; i++) {
       hash *= BloomFilter.FNVPRIME;
       hash ^= bytes[i];
     }
     return Math.abs(hash);
   }

   murmur(str, seed) {
      return murmur.murmur(str, seed);
   }
}

BloomFilter.FNVPRIME = 0x01000193;
BloomFilter.FNVINIT = 0x811c9dc5;

module.exports = BloomFilter;