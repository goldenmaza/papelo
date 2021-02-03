/*
	Filename:	foundation.js
	Author:		Mats Richard Hellstrand (Sweden)
	Website:	www.SITE.com
	Date:		February 3rd, 2021
	Comment:	This JS-file is used for the menu bar and the swiping motion.
*/

// Once the browser has finished loading then lay the foundation.
document.onreadystatechange = function () {
    "use strict";

	var email 		= 	"FILL_IN",
		linkedin 	= 	"FILL_IN",
		facebook 	= 	"FILL_IN",
		twitter 	= 	"FILL_IN",
		instagram 	= 	"FILL_IN";

    if (document.readyState === "interactive") {
		// Prepare copyright details...
		var finalResult = null,
			currentYear = new Date().getFullYear().toString(),
			createdYear = "2018";

		if (createdYear.localeCompare(currentYear) !== 0) {
			finalResult = document.createTextNode(createdYear + " - " + currentYear);
		} else {
			finalResult = document.createTextNode(createdYear);
		}
		document.getElementById("current__year").appendChild(finalResult);

		// Prepare social media accounts and e-mail address...
		document.getElementById("current__email").href = "mailto:" + email;
		document.getElementById("current__linkedin").href = "https://www.linkedin.com/in/" + linkedin;
		document.getElementById("current__facebook").href = "https://www.facebook.com/" + facebook;
		document.getElementById("current__twitter").href = "https://www.twitter.com/" + twitter;
		document.getElementById("current__instagram").href = "https://www.instragram.com/" + instagram;
    }
};

// Toggle the menu bar.
function toggleTarget() {
    "use strict";

    if (document.getElementById("handler__toggle").classList.contains("showing") === true) {
        document.getElementById("handler__toggle").classList.remove("showing");
        document.getElementById("handler__navigation").classList.remove("showing");
    }
    else {
        document.getElementById("handler__toggle").classList.add("showing");
        document.getElementById("handler__navigation").classList.add("showing");
    }
}
