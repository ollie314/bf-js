'use strict';

//via https://gist.github.com/588423
//thanks github.com/raycmorgan!
function murmur(str, seed) {
  let m = 0x5bd1e995;
  let r = 24;
  let h = seed ^ str.length;
  let length = str.length;
  let currentIndex = 0;
  
  while (length >= 4) {
    let k = uint32(str, currentIndex);
    
    k = umul32(k, m);
    k ^= k >>> r;
    k = umul32(k, m);

    h = umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }
  
  switch (length) {
  case 3:
    h ^= uint16(str, currentIndex);
    h ^= str.charCodeAt(currentIndex + 2) << 16;
    h = umul32(h, m);
    break;
    
  case 2:
    h ^= uint16(str, currentIndex);
    h = umul32(h, m);
    break;
    
  case 1:
    h ^= str.charCodeAt(currentIndex);
    h = umul32(h, m);
    break;
  }

  h ^= h >>> 13;
  h = umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function uint32(str, pos) {
  return (str.charCodeAt(pos++)) +
         (str.charCodeAt(pos++) << 8) +
         (str.charCodeAt(pos++) << 16) +
         (str.charCodeAt(pos) << 24);
}

function uint16(str, pos) {
  return (str.charCodeAt(pos++)) +
         (str.charCodeAt(pos++) << 8);
}

function umul32(n, m) {
  n = n | 0;
  m = m | 0;
  let nlo = n & 0xffff;
  let nhi = n >>> 16;
  let res = ((nlo * m) + (((nhi * m) & 0xffff) << 16)) | 0;
  return res;
}

function getBucket(str, buckets) {
  let hash = murmur(str, str.length);
  let bucket = hash % buckets;
  return bucket;
}

module.exports = {
	murmur: murmur,
	uint32: uint32,
	uint16: uint16,
	umul32: umul32,
	getBucket: getBucket
};