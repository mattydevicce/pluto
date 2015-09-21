#Intro the Ajax

###Learning Objectives
- Introduce the concept of and AJAX
- Review HTTP verbs
- Examine AJAX on sites we already use
- Understand the basic usage of AJAX and tie it to form data

###Connection to a long term learning goal

* Almost every modern webpage we use, uses AJAX.
* Facebook chat, GMail, Reddit Upvoting are all examples of AJAX on the modern web.
* Different HTTP vocabulary will be used in all parts of back and front end interaction to pass data around.


###Materials

* Use the instructor provided API hosted for the class.
[https://github.com/mer8/hapi_restful_api/
]
###Before Class (Student Pre-work)
Have students start to read some of the documentation for jQuery's Ajax.

* [Intro to Ajax](http://learn.jquery.com/ajax/)



##Lesson Outline

###Opening - 10 Min

"Ajax" refers to the ability of JavaScript to make HTTP requests asynchronously (a.k.a. "in the background") and act on the results directly without having the browser load a new page. Just like DOM manipulation and event handling, jQuery gives us a high-level interface to the browser's Ajax capabilities through the $.ajax function.

Most Ajax interactions use the JSON data format for requests and responses

Show off an example of AJAX on the web

* Facebook - Open a chat window, and navigate a profile
* GMail - Compose window, and the ability to change inbox views
* Reddit - Clicking an upvote on a comment, will send data to the server

Open the “Network” Tab on Chrome and look at the data being sent and received. Relate this back to what AJAX.

For this segment of the class, we'll be using The AJAX

####Create Our Files
Lets start by working in a clean folder, with the following two files.
We'll be using a hosted version of jquery, and a simple script file to show an alert message when the page is loaded.


`index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="script.js"></script>
  <title>Ajax Demo</title>
</head>
<body>
  <form>

    <input type="text" id="animalName" name="anil" placeholder="Add an animal">
    <input type="text" id="animalSound" name="sound" placeholder="Add an animal sound">
    <input type="submit">

  </form>
</body>
</html>
```


`script.js`

```
$(function() {
  alert("test");
}
```

CFU:
Make sure students have no problems creating and setting up a new project form scratch. Also
__________________________________
###I DO: Introduction to AJAX Syntax 10 Min
Built into the HTTP protocol, are several types of request methods. These methods are "verbs" that we use to interact with servers.

We will be working with `get` and `post` requests this morning. If you would like, there are other types of requests that we will use

* Wikipedia: [http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

`get` is a type of HTTP verb, that does exactly what it says. GET something from a location. Most web page interactions are GETs, including search terms.

Add the following to the code, and walk through the syntax.

Introduce the idea of `promises` as being a pattern to evaluate if an asynchronous call.

```
$(function() {
  // alert("test");
  // I- DO
  $.ajax({
    url: 'http://localhost:8000/animals',
    type: 'GET',
    dataType: 'json'
  }).done(function(data,textStatus, jqXHR) {
    console.log(arguments);
  });

})
```

CFU: Show them the data begin sent and received from the animals app, in the network tab.


### I DO: AJAX Fail - 5 Min

We can even process a failure.  Let’s attempt to retrieve an animal that doesn’t exist and log the failure using the `.fail` promise:

```
.fail(function(data, textStatus, jqHXR) {
   console.log("Something went wrong",data);
 })

})
```

And the invalid request:
```
$.ajax({
   url: 'http://localhost:8000/animals/taco',
```

### I DO: AJAX Always - 5min
We can even get a promise for any action that occurs.

```
.always(function(){
-    alert("Ajax request finished");
-  })
```



__________________________________
###WE DO: AJAX in a form. - 15min

Lets briefly go over the form we added to the page. It is nothing more than a simple form. Clicking submit it on , will try to send

Using Jquery, lets add an event to the form. We will be adding an event of a `submit` against the form tag. This will help us for 2 reasons. If I choose to click the button on the form, or press enter, any code on this event will trigger.

####First Add submit event to our code
We'll use the event, `submit` against the form.

```
$('form').on('submit',function(event) {

	alert("test");

})

```
Lets try it on our form, enter a value, and an alert should pop up on enter.

Lets take it a bit farther, and have it alert us an animal value.

**Ask Question** How do we get the value of the form value?

```
var animal = $("#animalName").val();
alert(animal);
```

Lets observe the changes. Alert comes up with our value, but the page refreshes.

The page refreshes, because the form is still trying to send the data. We typically override this value, using `.preventDefault`. Notice how we passed `event` into this function. Passing in event, lets us interact with the event.

Add this to your top of your function.
```
event.preventDefault();
```

### Lets add some real data - 10 Min
Lets grab the two values from our form, and send it to your hapi api.

```
    var animal = $("#animalName").val();
    var sound = $("#animalSound").val();

    // alert(animal);

    $.ajax({
      url: 'http://localhost:8000/animals',
      type: 'POST',
      dataType: 'json',
      data: {"animal":
      {"name": animal,
      "sound": sound}
    }})
```

Lets inspect this in our console, for successful data.


__________________________________
###YOU DO: Output the data - 10min

1. Use a `.done` promise to capture the data coming back from the API and output it to the console

2. Use jQuery to insert the data onto the page. Use a new `div` and insert the data into that.
