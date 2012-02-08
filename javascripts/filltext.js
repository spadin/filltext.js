(function() {

  $.fn.extend({
    filltext: function() {
      return this.each(function() {
        var container, filltext, originalHtml;
        container = $(this);
        originalHtml = container.html();
        container.html("<div class='filltext'>" + originalHtml + "</div>");
        filltext = $(".filltext", container);
        while (filltext.height() < container.height()) {
          filltext.css('font-size', '+=1');
        }
        return filltext.css('font-size', '-=1');
      });
    }
  });

}).call(this);
