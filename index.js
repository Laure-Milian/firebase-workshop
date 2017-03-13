(function(){
	var formulaire = document.getElementById("mon-formulaire");
	var db = firebase.database();
	var list = $("#my-list");

	formulaire.addEventListener('submit', function(event){
	    event.preventDefault();
	    var task = document.getElementById("task");
	    console.log(task);
		db.ref('/items/').push({
			createdAt: Date.now(),
		 	content: task.value,
			status: "à faire"
		})
	});

	db.ref('/items').on('value', function(snapshot) {
	 	snapshot.forEach(function(childSnapshot) {
	   		var key = childSnapshot.key;
	   		var childData = childSnapshot.val();
			list.append("<li>" + childData.content + "</li>");
	   	})
	})
	

})();