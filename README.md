# Snug Box

## Description
Using CSS, creates a fixed height box that encapsulates an image and text area and resizes the image area automatically, based on the remaining space after text has been placed. Includes a polyfill for "background-size" in IE8 and some JS workarounds to make it work with scalable heights on the image container. JS is only used for IE8 support.

## Gruntfile
The grunt setup is just to run a local server. The IE8 .htc polyfill won't work without a server. <br>
Run `grunt`  and then go to `localhost:8889/instance.html` in a browser to run it.

## Dependencies
- If you're running the local sever, you need NodeJS and GruntJS installed, then do `npm install` to fetch the NPM dependencies.
- If you don't care about ie8 support, then you can leave out the "snugbox-ie8.css" file and all the javascript.
- Otherwise, jQuery (1.11.0) and Modernizr are used. These could easily be replaced if you're not using them for anything else in your project.
- Polyfill for ie8 "background-size" relies on the .htc file from this resource: https://github.com/louisremi/background-size-polyfill

## Gotchas
- The polyfill will stop you from being able to use the image area as a button and "cursor: pointer" also doen't seem to work. See "snugbox.js -> addBtnHandlers()" for a workaround. 
- Apache servers will require the .htaccess file included, so that .htc files are accepted.
- The polyfill picks up ie9 as well, for some reason, even though IE9 is fine with "background-size:cover". So the IE8 specific css should be included with IE conditional comments.

## Live demo
http://demos.jimdoyle.com.au/bitbucket/jimdoyle82/snugbox/