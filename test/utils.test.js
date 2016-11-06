'use strict';
/* global describe,beforeEach,afterEach,it,require*/

const assert = require('assert');
const should = require('should');

const utils = require('../lib/utils');

describe('Transform string to bit array', () => {
   const inputs = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
   const results = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57];
   it('Should convert correctly', () => {
      inputs.forEach((item, index) => {
         let excpected = results[index];
         let actual = utils.stringToBytes(item);
         should.exists(actual);
         assert.equal(excpected, actual);
      });
   });
});
