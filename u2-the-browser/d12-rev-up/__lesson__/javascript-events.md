# Events

## Learning Objectives
- remember to add event object to each callback function
- understand the difference between native javascript and jQuery event objects are not the same
- use event delegation and its benefits

## Review
When we were previously learned about event handlers there was an event parameter that was passed
into the callback function. Does anyone know what is that event parameter?

> Tell class to goto example: http://codepen.io/anon/pen/jPgmmZ

Everything in JavaScript is an object, so an `event` is also an object.

Some useful attribute and method for event are
  * event.preventDefault()
  * event.which
  * event.currentTarget

## Event delegation
