/*!
 * global-prefix <https://github.com/xyx650/global-prefix>
 *
 * Copyright (c) 2026 Cho ning Luk.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const prefix = require('./');

describe('prefix', () => {
  it('should resolve the path to the windows global prefix', () => {
    if (process.platform === 'win32') {
      assert.equal(prefix, path.dirname(process.execPath) || path.join(process.env.APPDATA, 'npm'));
    }
  });

  it('should resolve the path to the global prefix', () => {
    assert(fs.existsSync(prefix));
  });
});
