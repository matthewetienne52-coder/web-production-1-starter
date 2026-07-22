Had an idea for a special state that only exists around the time we go on break

Utlized [This tool](https://gml.noaa.gov/grad/solcalc/) to figure out the different timings for the character forms, tied to sunrise, sunset, etc.


Made sun assets for the intended centerpiece of the page, grabbed font themed after the show the chaarcter is from to match the theme.


Went in Photoshop to propertly format a site, created a mockup and it looks like this:

![Photoshop Mockup](photoshop_mockup_png.png)

I grabbed sprites to represent the character at different times of day, time to get the site's basic functionality down so there's actually a point to it.

I wanted to replicate the look for the text that I made in the mockup, and the main way of applying stroke didn't look good, so I got help from [This article](https://blog.logrocket.com/create-beautiful-stroked-text-css/#non-standard-webkit-text-stroke-property), hopefully it works

The lines of code appear to be formatted correctly, but the text isn't appearing, gotta get to the bottom of that.
- I forgot parenthesis after the iff statements, curly braces, and that equality in an iff statement is '==', not '='

IT WORKED!!!! but i need to reduce the time it takes to update to be more instant

Tried adding a background within the smae iff statements that worked and uhhhhh the text disappeared
	- I cross referenced notes and examples from class and I had indents and brackets done incorrectly. Oops.

Back to the background, still having issues, trying several fixes from the internet and it still refuses to work.
    - According to [this thread](https://stackoverflow.com/questions/57112739/uncaught-referenceerror-url-is-not-defined-javascript-error, I have to remove the quotes from the file name
         - aaaand it became an unexpected identifier bro im crine
    - Enclosing the entire thing in '' seems to have worked. Thread wasn't completely useless, but god what a headache.


  Text won't go to the middle, it's imperative that it does because another asset needs to go there as well.

  Ok so funny lil thing I did. When I commented to pivot back to percentages I took the semicolon with me. I was confused when the heigh and margin properties were colored. Haha. Hahahahahaha. HAHAHAHAA

  I am very sleep deprived.

  On the topic of the middle elements, I had struggled to put the sun image in as it caused the background to disappear..but it was a syntax error. I didn't put quotes around the "sunAndMoon" id.

  I managed to stack the images within the divs on top of each other using absolute positioning as instructed by [This StackOverflow Thread](https://stackoverflow.com/questions/1909648/stacking-divs-on-top-of-each-other)

  With this, there is a functional version of the website. However, there is now two elements that I'm only SLIGHTLY concerned about, mostly because of the time I have left to replicate the mockup. it is what it is though. 

  [Flexbox Froggy](https://flexboxfroggy.com/) always comes in clutch with learning to align things

  Yeah had trouble as expected. The progress bar wasn't aligned to the bottom, but instead to the middle until i broke body and html apart in CSS and applied display: flex to every div

  hopefully the stuff in [this thread](https://stackoverflow.com/questions/59316816/how-to-force-a-div-to-expand-or-resize-only-in-one-direction-in-css-jquery) will let me  expand the progress bar from the left only

  It did nooooott!

  FINALLY SOME PROGRESS HOLY #### this [reddit thread](https://www.reddit.com/r/webdev/comments/wng6zr/changing_the_width_of_an_image_changes_the_height/) showed me why my width was changing the heigh of the progress bar, how to figure out how to left align it..

  Adding the left property again did not work.

  Screw making this progress bar expand from the left, from the center it goes..

  [This](https://stackoverflow.com/questions/10118172/setting-div-width-and-height-in-javascript) showed me how to do css math for width in javascript

  After fixing some issues I FINALLY got a working progress bar. hooly HELL. In the Javascript/CSS equation I used I was referencing an ID i changed everywhere except for the actual html. Had to fix the order of parenthesis and reference [this thread](https://stackoverflow.com/questions/45084227/using-css-calc-in-javascript-with-a-variable) to figure out how to format the quotes.

  I'll put the different forms of escanor somewhere when i have time.
      - Also got a recording of the program working successfully. Check it:

  ![Here](chrome_xnqzXgSevM.mp4)

 ## If that didn't work the file's somewhere in here, tell presenting Matthew to look for it.