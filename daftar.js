
var rootRef = firebase.database().ref().child("DAFTAR JEMAAH");

rootRef.on("child_added", snap =>{

		var name = snap.child("NAME").val();
		var ic = snap.child("IC").val();
		var nb = snap.child("BILIK").val();
		var np = snap.child("TELEFON").val();
		

		$("#table_body").append("<tr><td>"+ name + "</td><td>" + ic + 
			"</td><td>" + nb + "</td><td>" + np + "</td></tr>");
});
