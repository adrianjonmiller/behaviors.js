Behaviors JS
==============

# Simple javascript framework

This frame work is based on [this work](http://www.creativebloq.com/javascript/get-your-javascript-order-4135704) by Mike Byrne.

Behaviors.js is a front end js framework that provides a couple of simple utilities targeted at front end designers writing javascript. It provides a simple pattern writing javascript functions in a contained manner.

html:
<div data-behavior="functionName"></div>

js:
Js.Behaviors.functionName = function(theDOMElement){};


This framework is friendly to all other javascript libraries and doesn't have any dependencies. (ex: no jquery, d3, etc required). 

It also has a views component. By using the data-view attribute you can pass the DOM element as a javascript object. The data-view adds a method called 'content' and by changing the value of 'content' you can dynamically update the content of the DOM element. When the content renders it also initates the views and behaviors on the content before it renders increasing JS client side performance. This applies any javascript functions or views to the element prior to rendering on the page.

Example:

html:
  <div data-view="viewName"></div>
  
js:
  Js.Views.viewName.content = "Some Content";
  
Result is: <div data-view="vieName">Some Content</div>
  
