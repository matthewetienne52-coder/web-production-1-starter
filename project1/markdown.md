# My process

I've always been interested in fictional stories and novels, though my attention span is usually too short to read a hardcover book, so I'm usually forced to resort to listening to audio books.

There's always been a story I've been interested in making into something greater, and I decided to use this project to draft it out in case I ever go further with it.

Several hours were spent on trying to formulate an introduction that would be simultaneously intriguing and make sense in the context of the story, whether it goes past such a point is a different matter.

```
For the programming, I made the three index.html sites where I would split the first chapter into three parts

I then made the style.css, where I could place the background that I made, along with defining the style that each of the three sites would follow for consistency
```
```
Ran into problems with the title of the series, as the text within the <title> tags on the first index.html won't appear
```
```
Seems titles usually appear in the window header and not on the page. Oops. Guess I could thank:
```
-[This Stack Overflow Thread for the help](https://stackoverflow.com/questions/27083353/html-why-doesnt-my-title-show)

Pasting the title within the body under the "h1" tag and moving the chapter name to "h2"

Could someone please tell me why I had the font sizes on the style sheet in quotes until now and noticed nothing?

Ran into problems with my background's size, had to go to [w3schools](https://www.w3schools.com/cssref/css3_pr_background-size.php) for help

Shifted from auto to cover after text wasn't large enough
```
The paragraphs were hard to distinguish, so I separated them using 2 breaks in between each paragraph. We've likely learned a more efficient way of doing this using a property I'm missing, but it works. Margin doesn't though.
```
Trying to align the arrows to move between pages to the left and right using "right" and "left" properties i found on [w3schools](https://www.w3schools.com/cssref/pr_pos_right.php), I don't understand how it works so I'm finding little success.

I found another [Stack Overflow](https://stackoverflow.com/questions/19263524/how-to-position-an-element-to-the-right-side) thread that resolved my problems by using the float property instead.

Float seems to be working differently between the left and right values. Joy.
- I just decided to ditch the width property for both. With my current understanding it's just inconsistent and confusing. The arrows can hug the corners, they're easy to see there. 

Wanted to color the footer, so I took from ANOTHER Stack Overflow [thread](https://stackoverflow.com/questions/30302335/why-my-footer-background-color-doesnt-work). Loving that site.

Learned how to center images from [w3schools](https://www.w3schools.com/howto/howto_css_image_center.asp). Should be the only elements missing at this point.

Tried following advice to put the position property with the "fixed" value, but it makes the footer disappear?

Fixed it using this [StackOverflow thread](https://stackoverflow.com/questions/70553619/why-does-this-footer-element-just-disappear-when-it-has-fixed-positioning)

Added margin bottom to footer and made it so it reaches both sides of the screen by setting padding and margins on html tag to [0](https://stackoverflow.com/questions/70553619/why-does-this-footer-element-just-disappear-when-it-has-fixed-positioning)

In my notes it says to "Add padding to the intros" But I forgot what this means or what it was referring to. Oops.
