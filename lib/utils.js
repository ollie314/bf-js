'use strict';

// will be refactor to a pure C implementation.
const CHAR_BIT = 8;
function sizeof(typ) {
  if(typ === 'int') {
    return 8;
  }
  return 4;
}

// thanks Borgar!
// http://stackoverflow.com/questions/1240408/reading-bytes-from-a-javascript-string/1242596#1242596
function stringToBytes(str) {
  let c;
  let stack;
  let reverse = [];
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    stack = [];
    do {
      stack.push( c & 0xFF );	// push byte to stack
      c = c >> 8;          	// shift value down by 1 byte
    } while (c);
    // add stack contents to result
    // done because chars have "wrong" endianness
    reverse = reverse.concat( stack.reverse() );
  }
 // return an array of bytes
  return reverse;
}

function abs(x) {
  let mask = x >> sizeof('int') * CHAR_BIT - 1;
  return (x ^ mask) - mask; 
}

module.exports = {
	stringToBytes: stringToBytes,
  abs: abs
}