function dayOfWeek() {
	let day = "";
	switch (new Date().getDay()) {
		case 0:
			day = "superb Sunday";
			break;
		case 1:
			day = "marvelous Monday";
			break;
		case 2:
			day = "terrifc Tuesday";
			break;
		case 3:
			day = "wonderful Wednesday";
			break;
		case 4:
			day = "thrilling Thursday";
			break;
		case 5:
			day = "fantastic Friday";
			break;
		case 6:
			day = "splendid Saturday";
			break;		
	}
	document.getElementById("main-greeting").innerHTML = "We hope you're having a "+day+"!";

}
