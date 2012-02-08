$.fn.extend
  filltext: () ->
    @each ->
      container = $(@)
      originalHtml = container.html()
      container.html("<div class='filltext'>#{originalHtml}</div>")

      filltext = $(".filltext", container)
      filltext.css('font-size', '+=1') while(filltext.height() < container.height())
      filltext.css('font-size', '-=1')