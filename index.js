firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;

    if(user != null){

	const database = firebase.database()
	
  	var userEmail = document.getElementById("email_field").value;
  	var userPass = document.getElementById("password_field").value;
	var userLoc = document.getElementById("location_field").value;
	var leadsRef = database.ref(userEmail).child(userPass);


	leadsRef.on('value', function(snapshot) {
    	snapshot.forEach(function(childSnapshot) {
     	var childData = childSnapshot.val();
	document.getElementById("user_para").innerHTML = "Welcome "+ userEmail;

	//window.alert("Data : " + String(childData));

	if(String(childData)==userLoc)
	window.location.href = "https://kibreaker.github.io/kibreaker/welcome.html";
    });
});

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


function login(){

    var userEmail = "paulami3112@gmail.com";
    var userPass = "testing";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);


  });

    // ...

}

function logout(){
  firebase.auth().signOut();
}
