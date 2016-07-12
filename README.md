Behaviors JS
==============

# Simple javascript framework

This frame work is based on [this work](http://www.creativebloq.com/javascript/get-your-javascript-order-4135704) by Mike Byrne.

Behaviors.js is a front end js framework that provides a couple of simple utilities targeted at front end designers writing javascript. It provides a simple pattern writing javascript functions in a contained manner.

HTML
```
<div data-behavior="functionName"></div>
```
js:
```
Js.Behaviors.functionName = function(theDOMElement){
  theDOMElement.addEventListener('click', eventHandler){
    alert('You clicked me!');
  };
};

// Jquery

Js.Behaviors.functionName = function(theDOMElement) {
  $(theDOMElement).on('click', function(){
    alert('You clicked me!');
  });
};
```

This framework is friendly to all other javascript libraries and doesn't have any dependencies. (ex: no jquery, d3, etc required). 

It also has a views component. By using the data-view attribute you can pass the DOM element as a javascript object. The data-view adds a method called 'content' and by changing the value of the content object you dynamically update the view DOM. This also initializes any views and behaviors on the incoming content before its rendered on the page.

Examples 1:

HTML
```
<div data-view="viewName"></div>
```  
js:
```
Js.Views.viewName.content = "Some Content";
```
Result is: <div data-view="vieName">Some Content</div>

Examples 2:
HTML
```
<div data-view="viewName"></div>
```  
js:
```
Js.Views.viewName.content = "<div data-behavior=\"setHTML\"></div>";

Js.Behaviors.setHTML = function(container) {
  container.innherHTML = "Successfully initated behavior";
};
```
Result is: <div data-view="vieName"><div data-behavior="setHTML">Successfully initated behavior</div></div>
