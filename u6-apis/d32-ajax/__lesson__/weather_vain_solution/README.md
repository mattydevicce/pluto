# Weather Vain

Today, you began your exploration of AJAX. Now, put it to use with forms!

You'll edit a form to be able to search a city name and retrieve it's weather data from an external API.

## Exercise Objective

- Get comfortable using AJAX to dynamically retrieve information from a server
- Practice using event listeners and manipulating the DOM
- Shake off that javascript rust!

## Setup

Not much to set up, you'll be working primarily with jQuery in `scripts/main.js`, and sifting through the relevant documentation. **This assignment only works if you have internet.**

## Completion

Completion for this assignment is up to( and including) part 4. As always, more is better, healthy living is AJAX.

### Part 1 - Research City Data

We need to find out the relevant information about our data source and the tools to get it. We will be retrieving data from the [OpenWeatherMap API](http://www.openweathermap.org/api). **Do not worry about registering for API keys**. Take a look at the docs and find out what **endpoint**(route) to hit to get the temperature of a city. Let's start with "milwaukee" as our test city.

Try visiting the route in your browser to get the weather data for Milwaukee. The response on this route is in JSON. Your browsers currently do not render JSON nicely. We suggest you install the `JSONView` extension to make your lives a little easier. Identifying what the query parameters are will inform your AJAX call's data parameters.

#### Part 1b - units

Go back to the main docs page and look up how to get the temperature of Milwaukee in farenheit.

### Part 2 - Enter the AJAX

Add an event listener to your form so that when it's **submitted**, an AJAX request fires to OpenWeatherMap and get's the current weather for Milwaukee. Remember that this is a form, and the point of AJAX is to get data without reloading the page. If only there was a way to *prevent the default behavior* of the form submission...

Perhaps fire off the AJAX request in terminal first before tying it to the submission event handler. Once it's good, you can save your data object into a variable.

### Part 3 - Parse Yo'self Before You Wreck Yo'self

Time to "parse" the data, or access what you want from the JSON that got returned from the API. Figure out how to take out the name of the city, and the temperature from your `data` object. **Suggestion:** put a `debugger` call in your `success` callback. This'll freeze the data for you to poke around in. Fo

Now that you how to access to the correct data, edit your `success` callback to add the text "In Milwaukee it's 65.7 degrees Farenheit" to the paragraph tag with id of "forecast".

### Part 4 - Now Make it Dynamic!

Once you're able to display the information for Milwaukee, make the ajax call dynamic, so that users can enter a city name in the input field, and the ajax call gets the temperature data for that city and changes the display appropriately.

## Bonus Line

### Part 5 - Moment of your time Please

We've included [moment.js]() into your `index.html`.
