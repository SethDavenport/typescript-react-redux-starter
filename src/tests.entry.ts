'use strict';

import 'core-js/es6';
import 'core-js/es5';

import 'ts-helpers';

const testContext = (<{ context?: Function }>require)
  .context('./', true, /^(.(?!tests\.entry))*\.tsx?$/);

testContext('./index.tsx');

testContext.keys().forEach(
  key => {
    if (/\.test\.tsx?$/.test(key)) {
      testContext(key);
    }
  });

