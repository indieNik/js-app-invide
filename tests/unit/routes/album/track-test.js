import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | album/track', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:album/track');
    assert.ok(route);
  });
});
