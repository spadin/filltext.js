$.fn.extend
  filltext: (options) ->
    settings =
      maxSize: 32
      sameSize: false

    # Merge default settings with options.
    settings = $.extend settings, options
    smallest = settings.maxSize + 1
    returnable = @each ->
      container = $(@)
      originalHtml = container.html()
      container.html("<div class='filltext'>#{originalHtml}</div>")
      maxWidth  = container.width()
      maxHeight = container.height()

      filltext = $(".filltext", container)
      filltext.css
        'line-height' :'1em'
        'display'     : 'inline-block'
      filltext.css('font-size', '2px')
      filltext.css('font-size', '+=1') while(filltext.height() < maxHeight and (parseInt(filltext.css('font-size'),10) < settings.maxSize))
      filltext.css('font-size', '-=1') while(filltext.width() > maxWidth)
      filltext.css('font-size', '-=1') while(filltext.height() > maxHeight and (parseInt(filltext.css('font-size'),10) < settings.maxSize))
      smallest = parseInt(filltext.css('font-size'),10) if parseInt(filltext.css('font-size'),10) < smallest

    if(settings.sameSize)
      @each ->
        container = $(@)
        filltext  = $(".filltext", container)
        filltext.css('font-size', "#{smallest}px")

    return returnable