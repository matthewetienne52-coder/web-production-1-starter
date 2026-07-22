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

   