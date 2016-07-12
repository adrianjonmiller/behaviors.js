Js.Behaviors.test = function(container) {
	// console.log("success");
}

Js.Behaviors.success = function(container) {
	console.log("it worked!");
}

Js.Behaviors.success2 = function(container) {
	console.log("it worked again!");
}

Js.Behaviors.back = function(container) {
	$(container).on('click', function(){
		console.log(Js.Views.test.back());
	})
}

Js.Behaviors.change = function(container) {

	$(container).on('click', function(){
		Js._request('GET', "/template.html", function(result){
			Js.Views.test.content = result;
		})
	});
}


Js.Behaviors.changeAgain = function(container) {

	$(container).on('click', function(){
		Js._request('GET', "/template2.html", function(result){
			Js.Views.test.content = result;
		})
	});
}
