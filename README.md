# Snug Box

## Description
Using CSS, creates a fixed height box that encapsulates an image and text area and resizes the image area automatically, based on the remaining space after text has been placed. Includes a polyfill for "background-size" in IE8 and some JS workarounds to make it work with scalable heights on the image container. JS is only used for IE8 support.

## Dependencies
At the moment using jQuery (1.11.0) and Modernizr, but these could easily be replaced.
Polyfill for ie8 "background-size" relies on this resource: https://github.com/louisremi/background-size-polyfill

## Gotchas
- The polyfill will stop you from being able to use the image area as a button.
- Apache servers will require the .htaccess file included, so that .htc files are accepted.
- The polyfill picks up ie9 as well, for some reason, even though IE9 is fine with "background-size:cover". So the IE8 specific css should be included with IE conditional comments.