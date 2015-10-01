/*! support.css3 - v0.0.1 - 2015-10-01
* Copyright (c) 2015 yahiousun; Licensed MIT */
;(function (factory) {
  'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($, undefined){
  'use strict';
  var prefixes = ['webkit', 'o', 'moz', 'MS', ''],
    events = ['transition', 'animation'],
    suffixes = ['start', 'end'],
    nonexistent = ['transitionstart'],
    p,
    e,
    s,
    n,
    supported = {},
    dummy = document.createElement('dummy');
  for (e = 0; e < events.length; e++) {
    for (p = 0; p < prefixes.length; p++) {
      var event;
      if (prefixes[p] === '') {
        event = events[e];
      } else {
        event = $.camelCase(prefixes[p] + '-' + events[e]);
      }
      if (typeof dummy.style[event] !== 'undefined') {  
        for (s = 0; s < suffixes.length; s++) {
          if (!supported[events[e]]) {
            supported[events[e]] = {};
          }
          for (n = 0; n < nonexistent.length; n++) {
            if ((events[e] + suffixes[s]) !== nonexistent[n]) {
              if (prefixes[p] === '') {
                supported[events[e]][suffixes[s]] = event + suffixes[s];
              } else {
                supported[events[e]][suffixes[s]] = $.camelCase(event + '-' + suffixes[s]);
              }
            }
          }
        }
      }
    }
  }
  $.extend($.support, supported);
}));