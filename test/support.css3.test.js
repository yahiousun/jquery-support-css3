(function ($) {
  'use strict';
  var events = ['transition', 'animation'],
      e = 0;
  module(':jquery.support.css3', {
    setup: function () {
      this.support = $.support;
    }
  });

  test('is css3 event support', function (assert) {
    expect(events.length);
    for (; e < events.length; e++) {
      if (typeof(this.support[events[e]]) !== 'undefined') {
        assert.ok(true, 'event ' + events[e] + ' pass');
      } else {
        assert.notOk(false, 'event ' + events[e] + ' not pass');
      }
    }
  });
}(jQuery));
