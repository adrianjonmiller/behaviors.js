var Js = window.Js || {};
Js.Dash = {};


// Ready function
Js.Ready = function(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


// HTTP Request
Js._request = function(type, url, cb) {
  var request = new XMLHttpRequest();
  request.open(type, url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      if( typeof cb === 'function' ) {
        cb(request.responseText);
      }
    } else {
      console.log(request);
    }
  };

  request.onerror = function(errorMsg) {
    console.log(errorMsg);
  };

  request.send();
}


// Loops through the data-behavior creates a instance of a function based the values it finds
Js._init = function (context) {
  if (!context) {
    context = document;
  }

  // Views Loop
  var views = context.querySelectorAll('[class*="view-"]');
  if(views.length != 0) {
    for(i=0; i<views.length; i++) {
      var view = views[i];
      var states = view.getAttribute('class').split(' ');
      for(j=0; j<states.length; j++) {
        var state = states[j];
        if(state.startsWith("view-")) {
          window[state.substring("view-".length)] = Js._view(view);
        }
      }
    }
  }

  // Elements Loop
  var elements = context.querySelectorAll('[class*="js-"]');
  if(elements.length != 0) {
    for(i=0; i<elements.length; i++) {
      var element = elements[i];
      var behaviors = element.getAttribute('class').split(' ');
      for(j=0; j<behaviors.length; j++) {
        var behavior = behaviors[j];
        if(behavior.startsWith("js-")) {
          behavior = behavior.substring("js-".length);

          if(!element[behavior]) {
            try {
              if(Js.Dash[behavior]) {
                element[behavior] = new Js.Dash[behavior](element);
              }
            } catch (e) {
              console.log(e.stack);
            }
          }
        }
      }
    }
  }
}

// View container
Js._view = function(view) {
  view.content = "";
  view.history = [];
  view.watch('content', function(id, oldval, newval){
    if(view.history[view.history.length - 1] !== newval) {
      view.history.push(oldval);
    }
    Js._render(view, newval);
    return newval;
  });

  return view;
}

// Render content
Js._render = function(view, d){
  if(d) {
    var range = document.createRange();
    var frag = range.createContextualFragment(d);
    Js._init(frag);

    if(view.hasChildNodes())
      view.innerHTML = "";

    view.appendChild(frag);
  }
}

// Returns true if it is a DOM element
function _isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}


// Runs Init after DOM Ready
Js.Ready(function(){
  var start = +new Date();
  Js._init();
  var end =  +new Date();  // log end timestamp
  var diff = end - start;
  console.log("Scripts executed in " + diff/1000 + " seconds.");
});

// Listen for DOM changes. Target's what changed and runs the initializeBehaviors on the child nodes
// document.addEventListener('DOMSubtreeModified', function(e){
//   if(_isElement(e.target)) {
//     Js._init(e.target);
//   }
// });
