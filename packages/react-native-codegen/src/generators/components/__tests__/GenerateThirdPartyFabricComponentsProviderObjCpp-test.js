/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */

'use strict';

const fixtures = require('../__test_fixtures__/fixtures.js');
const generator = require('../GenerateThirdPartyFabricComponentsProviderObjCpp.js');

describe('GenerateThirdPartyFabricComponentsProviderObjCpp', () => {
  it(`can generate fixtures`, () => {
    expect(generator.generate(fixtures)).toMatchSnapshot();
  });
});