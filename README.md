Required project assets downloaded from https://github.com/udacity/frontend-nanodegree-mobile-portfolio.

Indentified and performed optimizations to achieve a PageSpeed score above 90 for Mobile and Desktop by....

Obtaining my own picture to replace Cam's profile pic to personalize.
Cropped and resized my pic using http://resizeimage.net/.
Resized and compressed pizzeria.jpg using http://resizeimage.net/.
Removed original pizzeria.jpg from source folder because of errors when optimizing images with grunt due to size of file (2,315 KBs).
Changed references to Cam to Bill to personalize this portfolio.
Created async script requests in the index.html, project-2048.html, project-mobile.html and project-webperf.html files.
Used specific media types such as print and media to strategically load our CSS.
Base64 encode our resources such as fonts and images and embed the code inside the HTML, inlined CSS into the index.html.
Minified CSS, HTML and JS.
Used JavaScript to load resources after the DOM has completely loaded.

For 60 FPS on Browser Scroll........see below
Modified the main.js function updatePostions, removed some variables from inside the For Loops and used getElementsByClass instead of querySelectorAll.

For Change Pizza Sizes.........see below
Modified the main.js function changePizzaSizes, remove some variables from inside the For Loop and used getElementsByClass instead of querySelectorAll.

Researched, identified and used grunt to automatically perform optimization of CSS and JS and image optimizations.  Used grunt-contrib-imagemin to minify
source images, grunt-contrib-cssmin to minify css, grunt-contrib-uglify to minify js and grunt-contrib-html to minify html.

Added "alt" to various images to indicate what pictures should be if images fail to load properly.
Added "backface-visibility:hidden" to improve paint times for 60 FPS, views/css/style.css.
Inserted Cache-Control to cache and resuse previously fetched resources to improve Performance.

Application should run by opening the index.html file with a browser.
When Bill's Pizzaria is selected, a new webpage will load allowing you to choose the types of pizzas available and size.  A pizza slider lever is available to 
give an idea of the size of the pizza.
