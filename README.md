filltext.js
==========

Continously increases the font-size of text inside a block container until the
height fits the container. Essentially fits text inside of a block container.

Settings
--------

None, yet.

__Note:__ You must set the width and height of the block container.

Usage
-----

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>filltext.js</title>
      <style type="text/css" media="screen">
        #filltext-container {
          width: 400px;
          height: 200px;
        }
      </style>
      <script type="text/javascript" charset="utf-8" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
      <script type="text/javascript" charset="utf-8" src="javascripts/filltext.js"></script>
      <script type="text/javascript" charset="utf-8">
        $(function() {
          $("#filltext-container").filltext();
        });
      </script>
    </head>
    <body>
      <h1 id="filltext-container">Joe Jamboni</h1>
    </body>
    </html>
