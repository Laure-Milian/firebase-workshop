var db = firebase.database();
var formulaire = document.getElementById("mon-formulaire");
var list = $("#my-list");

//var query = db.ref("items").orderByKey();

// Afficher tous les items
// query.once("value")
// 	.then(function(snapshot) {
// 		snapshot.forEach(function(childSnapshot) {
// 			var key = childSnapshot.key;
// 			var childData = childSnapshot.val();
// 			list.append("<li>" + childData.content + "</li>");
// 		})
// 	})

// Ajouter une tâche
formulaire.addEventListener('submit', function(event){
    event.preventDefault();
    var task = document.getElementById("task");
	db.ref('/items/').push({
		createdAt: Date.now(),
	 	content: task.value,
		status: "à faire"
	})
});

// Mettre à jour la liste quand une nouvelle tâche est ajoutée
db.ref('/items').on('child_added', function(snapshot) {
   		var key = snapshot.key;
   		var childData = snapshot.val();
		list.append("<li>" + childData.content + "</li>");
});
	

