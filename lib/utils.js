'use strict';
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

module.exports = {
	stringToBytes: stringToBytes
}