var Behavior = window.Behavior || {};

// Loops through the data-behavior tries to execute function based the values it finds
function initializeBehaviors(context) {
  if (!context)
    context = document;
  
  var elements = Array.prototype.slice.call(context.querySelectorAll('[data-behavior]'));
  
  Array.prototype.forEach.call(elements, function(element, i){
    var behaviors = element.getAttribute('data-behavior').split(' ');
    Array.prototype.forEach.call(behaviors, function(behavior, i){
      if(!element[behavior]) {
        try {
          element[behavior] = new Behavior[behavior](element);
        } catch (e) {
          console.log(e.stack);
        }
      }
    })
  });
}

// Listen for DOM changes. Target's what changed and runs the initializeBehaviors on the child nodes
document.addEventListener('DOMSubtreeModified', function(e){initializeBehaviors(e.target);});

// Runs initializeBehaviors after dom load
ready(function(){ initializeBehaviors() });

// Ready function
function ready(fn) {
  if (document.readyState != 'loading'){ 
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
