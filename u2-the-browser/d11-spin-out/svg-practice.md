# SVG Morning Exercise

Good Morning Pluto!  Back in the day, the internet was covered in this fancy technology created by a now-defuct company named, Macromedia.  You most likely remember using it!

Well, those days are gone - the iPhone pretty much killed Macromedia (later Adobe) Flash.  The tech industry is pretty brutal, I guess.

Today we are going to create a spinner using SVG and Velocity.js. Before we can do that though, we need to be familiar with SVG, short for Scalable Vector Graphics is a markup language based on XML/HTML.

```html
<svg>
	<rect x="10" y="10" width="100" height="100" fill="#000000" />
</svg>
```

The code above will draw a 100x100 black rectangle onto the screen... Yay!?

Go ahead and try it!

In modern browsers, you can embed `<svg>` tags directly into your HTML:

```html
<html>
  <head>...</head>
  <body>
  	<h1>Melville - A Whale of a Tale!</h1>

  	<svg>
  		<!-- Draw a rectangle -->
			<rect id="rect1" x="10" y="10" width="100" height="100" fill="#000000" />
			<!-- Draw a circle -->
			<circle id="circle2" cx="100" cy="100" r="50" fill="#FFFFFF" stroke="#000000" />
		</svg>

	</body>
</html>
```

Writing SVG is really easy, once you get the hang of the tags and attributes.
