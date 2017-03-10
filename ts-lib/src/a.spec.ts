import 'mocha';
import { assert } from 'chai';

import { A } from './a';

describe('A suite', () => {
    it('should be okaaay', () => {
        const a = new A();
        assert.strictEqual(a.c, 'hello4');
    });
});
