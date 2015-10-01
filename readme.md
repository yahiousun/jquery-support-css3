# jQuery.support css3 event

> Detect css3 transition/animation event support


## Getting Started

Install with bower:

```
bower install --save jquery-support-css3
```

Or download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/yahiousun/jquery-support-css3/master/dist/jquery.support.css3.min.js
[max]: https://raw.githubusercontent.com/yahiousun/jquery-support-css3/master/dist/jquery.support.css3.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.support.css3.min.js"></script>
<script>
  jQuery(function ($) {
    if ($.support.transition) {
      $(Selector).on($.support.transition.end, function () {
         // do something
      });
    }
    if ($.support.animation) {
      $(Selector).on($.support.animation.start, function () {
         // do something
      });
      $(Selector).on($.support.animation.end, function () {
         // do something
      });
    }
  });
</script>
```

## License

MIT © yahiousun
