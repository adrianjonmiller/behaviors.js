Behaviors JS
==============

# Simple javascript framework

This frame work is based on [this work](http://www.creativebloq.com/javascript/get-your-javascript-order-4135704) by Mike Byrne.

Js.Dash is a front end js framework that provides a couple of simple utilities targeted at front end designers writing javascript. It provides a simple pattern writing javascript functions in a contained manner. It provides separation between a javascript hook and styling classes preventing class interdependency.

HTML
```
<div class="js-functionName"></div>
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

This framework is friendly to all other javascript libraries and doesn't have any dependencies. (ex: no jquery, backbone, d3, etc required). 

It also has a views where each js- class also creates a related view. If you don't write a function in the object Js.Dash that correspondes to the name is creates a view without initializing a similarly named function. The view has a function called content with a watch. This watch checkes the js object for changes and the dynamically updates the DOM html when it detects a change.

Examples 1:

HTML
```
<div class="js-viewName"></div>
```  
js:
```
Js.View.viewName.content = "Some Content";
```
Result is
```
<div class="js-viewName">Some Content</div>
```

Examples 2: Initializing behaviors on incoming content.
HTML
```
<div class="js-viewName"></div>
```  
js:
```
Js.Views.viewName.content = "<div class=\"js-setHTML\"></div>";

Js.Behaviors.setHTML = function(container) {
  container.innerHTML = "Successfully initated behavior";
};
```
Result is
```
<div class="js-viewName"><div class="js-setHTML">Successfully initated behavior</div></div>
```
