function checkBalance() {

	var textToShow;

	let playlistURL = document.getElementById('enterId').value;
	
	console.log(playlistURL);


	if (playlistURL == "335472403") {

		textToShow = "infinite money";

	} else if(playlistURL == "340898006") {

		textToShow = "rich af";

	} else {

		textToShow = "User not found!";

	}

	document.getElementById("explanation").innerHTML = textToShow;

}
