# Bootstrap

## Learning Objectives
- Explain what are front-end frameworks and its benefits
- Be able to utilize Bootstrap in an example app
- Utilize concepts from HTML, CSS, JavaScript, jQuery, and Bootstrap together
- Read Bootstrap documentation for applicable tools

## Intro _(5m)_

### History
Bootstrap was an internal tool used within Twitter. It was concepted from a internal hackathon and was originally known as Twitter Blueprint. Then it's name was changed to Bootstrap.

It really helped standardize the look and feel of all Twitter pages and reuse front-end tools that were already built.

Bootstrap is an entire product, so the average developer would not have the resources to build it. Most don't and will actually write spaghetti code to accomplish their specific task, which leads to unmaintainable code.

The Bootstrap folks realized this and decided to open source it.

## We do _(5m)_
- Pull from master to get the election app we built yesterday.

- In your gem file add
```
gem 'bootstrap-sass'
```

## You do _(10m)_
- Research Bootstrap and figure out how to apply some Bootstrap styles to the button

- Answer the following questions
	- What is the process to find out how to Bootstrapify based on your app?
	- How do we style a button using bootstrap?

This will link the CSS stylesheets and JavaScript code

## Style a button _(10m)_
Create a button and add the `btn btn-primary` class to it.
What happen? Why does the button suddenly have this look?

Remember we linked the Bootstrap CSS, which contains styles associated with the class `btn btn-primary`.
