
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('markdown-html', 'helper:markdown-html', {
  integration: true
});

test('it parses markdown', function(assert) {
  this.set('inputValue', 'This is a **bold** message');

  this.render(hbs`{{markdown-html inputValue}}`);

  assert.equal(this.$().html().trim(), '<p>This is a <strong>bold</strong> message</p>');
});

// TODO: add test for options
