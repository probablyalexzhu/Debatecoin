function checkBalance() {

	var textToShow;

	let playlistURL = document.getElementById('enterId').value;
	
	console.log(playlistURL);


	if (playlistURL == "335472403") {

		textToShow = "infinite money";

	} else {

		textToShow = "User not found!";

	}

	document.getElementById("balance").innerHTML = textToShow;

}
