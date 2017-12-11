
var rootRef = firebase.database().ref().child("LAPORAN JEMAAH SAKIT");

rootRef.on("child_added", snap =>{

		var name = snap.child("NAME").val();
		var sick = snap.child("SICK").val();
		

		$("#table_body").append("<tr><td>"+ name + "</td><td>" + sick + 
			"</td></tr>");
});
