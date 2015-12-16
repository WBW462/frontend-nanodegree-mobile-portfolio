Required project assets downloaded from https://github.com/udacity/frontend-nanodegree-mobile-portfolio.

Obtained my own picture to replace Cam's profile pic.
Cropped and resized pic using http://resizeimage.net/.
Resized and compressed pizzeria.jpg using http://resizeimage.net/.
Removed original pizzeria.jpg from source folder because of errors when optimizing images.
Changed references to Cam to Bill to personalize this portfolio.

For Google PageSpeed Insights.........see below
Created async script requests in the index.html, project-2048.html, project-mobile.html and project-webperf.html files.
Used specific media types such as print and media to strategically load our CSS.
Inlined CSS into the index.html.
Minified CSS (still to be done).
Used JavaScript to load resources after the DOM has completely loaded (check again).
Base64 encode our resources such as fonts and images and embed the code inside the HTML (need to check, don't know what this means).


For 60 FPS on Browser Scroll........see below
Modified the main.js function updatePostions, removed some variables from inside the For Loops and used getElementsByClass instead of querySelectorAll.


For Change Pizza Sizes.........see below
Modified the main.js function changePizzaSizes, remove some variables from inside the For Loop and used getElementsByClass instead of querySelectorAll.




Used grunt-contrib-imagemin to minify source images.

Tried minifying files and ran into problems.  Unable to perform PageSpeed testing, Ngrok, starting showing errors.
Unmified files and things worked ok.  

Used jscompress.com for minifying js files.
Used cleancss.com for minifying and compressing css files.



Removed views/images/pizzeria, in the source folder because of its 2,315 KB size and replaced it with a resized and compressed jpg.
 



.mover {
  position: fixed;
  width: 256 px;
  z - index: -1;
}
 views/css/style.css


Added "alt" to various images to indicate what pictures should be if images fail to load properly.
Added backface-visibility:hidden to improve paint times for 60 FPS, views/css/style.css.
Inserted Cache-Control to cache and resuse previously fetched resources to improve Performance.
