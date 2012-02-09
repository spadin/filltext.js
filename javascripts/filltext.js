(function() {

  $.fn.extend({
    filltext: function(options) {
      var returnable, settings, smallest;
      settings = {
        maxSize: 32,
        sameSize: false
      };
      settings = $.extend(settings, options);
      smallest = settings.maxSize + 1;
      returnable = this.each(function() {
        var container, filltext, maxHeight, maxWidth, originalHtml;
        container = $(this);
        originalHtml = container.html();
        container.html("<div class='filltext'>" + originalHtml + "</div>");
        maxWidth = container.width();
        maxHeight = container.height();
        filltext = $(".filltext", container);
        filltext.css({
          'line-height': '1em',
          'display': 'inline-block'
        });
        filltext.css('font-size', '2px');
        while (filltext.height() < maxHeight && (parseInt(filltext.css('font-size'), 10) < settings.maxSize)) {
          filltext.css('font-size', '+=1');
        }
        while (filltext.width() > maxWidth) {
          filltext.css('font-size', '-=1');
        }
        if (parseInt(filltext.css('font-size'), 10) < smallest) {
          return smallest = parseInt(filltext.css('font-size'), 10);
        }
      });
      if (settings.sameSize) {
        this.each(function() {
          var container, filltext;
          container = $(this);
          filltext = $(".filltext", container);
          return filltext.css('font-size', "" + smallest + "px");
        });
      }
      return returnable;
    }
  });

}).call(this);
