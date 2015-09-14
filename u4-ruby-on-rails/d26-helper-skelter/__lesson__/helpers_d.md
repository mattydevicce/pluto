# Rails Helpers

## SWBAT
  * Explain Helpers as a concept
  * Utilize Rails helpers, get more done and write less code
  * Write their own helpers

## Intro - I do - _(3m)_

A huge benefit of using a framework like Rails as we have been experiencing is being able to take advantage of a higher level of abstraction. This allows us to build things faster with less work.

In Ruby, helpers are usually namespaced in modules. What do you think these helpers do?

## Activity - You Do _(5m)_

Check out this [Gist](https://gist.github.com/CentroDL/482f95774677566dabf9)

# Thought Helper

Take a look at the helper code and try to think about what code is inside.

```rb
nytimes_headlines   = NewsHelper::NYTimes.get_headlines
the_onion_headlines = NewsHelper::TheOnion.get_headlines
cnn_headlines       = NewsHelper::CNN.get_headlines
abc_headlines       = NewsHelper::ABC.get_headlines
nbc_headlines       = NewsHelper::NBC.get_headlines
```
Answer the following questions in a `helpers.md` file in today's `student` folder.

1. What's the module here?
1. What are the submodules/classes? Are they more likely one over the other(module or class)? Does it matter?
1. What are the module methods doing?
1. If NBC's services all of a sudden go down, which module would I know to change?
1. Write a hypothetical helper module you'd like to write in the future.

## Discuss Answers - We Do - _(10min)_

1. NewsHelper - modules are toolboxes and we can compartmentalize them by 'submoduling' code
1. The submodules are collections of methods to get headlines from different news sources.
   They can be either module or class, but since we don't see any instantiation they are likely only modules.
1. Getting headlines from their respective news sources.
1. If NBC goes down, you'd know to fix the NBC part of your code. This is a form of damage control, to make sure that you know what to fix, and where, WHEN it breaks. Especially in the case of data that comes from other sources, that can potentially crash. It also means you can bake in error handling inside the class instead of bloating your main code for any single feature, and allow you to focus on the more general picture in your main code.
1. WDInstagram::DatabaseHelper, CatTinder::DatabaseHelper


## I Do - Discuss where this fits into Rails _(3-5min)_

Modules can be included inside classes, so when you include a module its methods are given to the class. Since Rails is trying to abstract away a lot of the pains of web app development, there are a ridiculous amount of helpers included in it. Since the bulk of our server side code lives in our models, views, and controllers let's take a look inside each.

(Ask: What do our models inherit from?)
In your Models, if you look into the [ActiveRecord::Base docs](http://apidock.com/rails/ActiveRecord/Base), and search for 'included modules', you'll see a list of helpers that just contain prebuilt methods that we've been enjoying the luxury of this whole time(Ask: Which ones have we used?). 

All controllers inherit from ApplicationController, which in turn inherits from [ActionController](http://api.rubyonrails.org/classes/ActionController/Base.html)(show the included modules) - Pick someone to identify a method that they've used or would be useful.

Today's focus is largely going to be working with View Helpers. Here's the main reference for this morning's work [ActionView](http://guides.rubyonrails.org/action_view_overview.html)

## Activity: Set up Existing Rails App - _(5m)_

- Pull from upstream master
- How to configure a fresh rails App
  - bundle install
  - rake db:setup
    - rake db:create
    - rake db:migrate
    - rake db:seed

# BREAK _(10-15min)_

## I do

## Explore Some Helpers _(5m)_

### Show sample of Facebook website

path helpers
date helpers
time helpers
image helpers

http://api.rubyonrails.org/classes/ActionController/Base.html
Here is a list of Rails helpers

> NOTE: Unless you need to do something very specific you probably don't need to write a helper.

http://api.rubyonrails.org/classes/ActionView/Helpers.html
