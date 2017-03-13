(function(){
	var formulaire = document.getElementById("mon-formulaire");
	var db = firebase.database();
	var list = $("#my-list");

	var query = db.ref("items").orderByKey();
	query.once("value")
		.then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var childData = childSnapshot.val();
				list.append("<li>" + childData.content + "</li>");
			})
		})

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

	db.ref('/items').on('child_added', function(snapshot) {
	   		var key = snapshot.key;
	   		var childData = snapshot.val();
			list.append("<li>" + childData.content + "</li>");
	})
	

})();