Prior to working on the coding of my project, I made sure to properly create a layout and assets to make the poster in photoshop, and the mockup can be found

I used [FlexboxFroggy](https://flexboxfroggy.com/) ro better understand how flexbox alignments work

[here](Photoshop_v8FLtt3vzv.png)

Put the three images together in a parent but they're not aligned to the bottom of the page
- Had to put "flex-end" under align items
	- This also didn't work initially..oops

- I believe this has to do with the footer, but I have stuff to put in there so I simply have to find a way to make these stretch correctly

An entirely cleaned out sink and consumed dinner later and I just realized I had to give the body a flex direction, which would have solved the problem of them being displayed incorrectly that i had for about an hour.

One of the smaller font containers, which includes multiple words messes up the content justification, trying to move the second word under to little success, I'll try and make a new class of container for it specifically.

This was done successfully, but there seems to be a gap, so I'll use the column-gap property and set it to 0px
- That didn't work initially, but I was able to get the answer to my problem from [this StackOverflow thread](https://stackoverflow.com/questions/2787310/how-to-reduce-the-space-between-p-tags)

..It seems to be fine? I adjusted the media tag so the elements scale, I think thats enough?

Added some extra text, but it can be hard to see so I wanted to apply drop shadow

So I got the idea of how to do so through [this reddit thread](https://www.reddit.com/r/SublimeText/comments/btmhsq/text_with_subtle_shadow_effect/)

[w3schools](https://www.w3schools.com/css/css_text_shadow.asp) helped me understand text shadow and make it more distinguishable