/* Script code belongs to digital clock application */

// Set up time on the display
function displayCurrentTime(attributeName, handName) {
	if (handName < 10) {

		// adding string 0 to the number less than 10 to display
		document.getElementById(attributeName).innerHTML = '0' + handName;
	} else {
		document.getElementById(attributeName).innerHTML = handName;
	}
}


// Get current time from the system/computer
function getCurrentTime() {
	var getDate, getHour, getMinute, getSecond;
	getDate = new Date();	// holds date object
	getHour = getDate.getHours();	// holds hours value
	getMinute = getDate.getMinutes();	// holds minutes value
	getSecond = getDate.getSeconds();	// holds seconds value

	// displaying above values for the start point of clock
	displayCurrentTime("hour", getHour);
	displayCurrentTime("minute", getMinute);
	displayCurrentTime("second", getSecond);
}


// Get display time from the browser and calculating time to display
var timeToBeDisplayed = function() {
	var getDisplaySeconds, // holds seconds value as string
		convertToIntegerSeconds, // holds seconds value as integer
		getDisplayMinutes, // holds minutes value as string
		convertToIntegerMinutes, // holds minutes value as integer
		getDispalyHours, // holds hours value as string
		convertToIntegerHours; // holds hours value as integer

	// get seconds value from the browser
	getDisplaySeconds = document.getElementById("second").innerHTML;

	// get minutes value from the browser
	getDisplayMinutes = document.getElementById("minute").innerHTML;

	// get hours value from the browser
	getDispalyHours = document.getElementById("hour").innerHTML;

	// Converting time from strings to integers for the increment purpose
	convertToIntegerSeconds = parseInt(getDisplaySeconds);
	convertToIntegerMinutes = parseInt(getDisplayMinutes);
	convertToIntegerHours = parseInt(getDispalyHours);
	convertToIntegerSeconds = convertToIntegerSeconds + 1;

	// Setting seconds value to zero when seconds cycle completed
	if (convertToIntegerSeconds > 59) {
		convertToIntegerSeconds = 0;
	} else {}
	if (convertToIntegerSeconds === 0) {
		convertToIntegerMinutes = convertToIntegerMinutes + 1;

		// Setting minutes value to zero when minutes cycle completed
		if (convertToIntegerMinutes > 59) {
			convertToIntegerMinutes = 0;
		} else {}
		displayCurrentTime("minute", convertToIntegerMinutes);
		if (convertToIntegerMinutes === 0) {
			convertToIntegerHours = convertToIntegerHours + 1;

			// Setting hours value to zero when hours cycle completed
			if (convertToIntegerHours > 23) {
				convertToIntegerHours = 0;
			} else {}
			displayCurrentTime("hour", convertToIntegerHours);
		}
	}
	displayCurrentTime("second", convertToIntegerSeconds);
}


// Set time interval for every second
setInterval(timeToBeDisplayed, 1000);