//Tools
var YRTOOLS = YRTOOLS ? YRTOOLS : function() {

	/*
	 * Allows only a numeric value. If a non-numeric value key is pressed, dismiss it.
	 */
	function AllowOnlyNumeric(evt) {
		var key;

		// Get the ASCII value of the key that the user entered
		if (window.event) {
			key = window.event.keyCode;
		} else if (evt) {
			key = evt.which;
		}

		// Verify if the key entered was a numeric character (0-9) or a decimal (.)
		if ((key > 47 && key < 58) || key < 32)
			// If it was, then allow the entry to continue
			return;
		else
			// If it was not, then dispose the key and continue with entry
			return false;
	}

	/*
	 * Allows only an alphanumeric value.
	 * If a non-alphanumeric value key is pressed, dismiss it.
	 */
	function AllowAlphaNumeric(evt) {
		var key;

		// Get the ASCII value of the key that the user entered
		if (window.event) {
			key = window.event.keyCode;
		} else if (evt) {
			key = evt.which;
		}

		// Verify if the key entered was a :
		// - numeric character (0-9)
		// - or a space
		// - or a uppercase
		// - or a lowercase
		if ((key > 47 && key < 58) ||
				key <= 32 ||
				(key > 64 && key < 91) ||
				(key > 96 && key < 123))
			// If it was, then allow the entry to continue
			return;
		else
			// If it was not, then dispose the key and continue with entry
			return false;
	}


	var oPublic =
	{
		AllowOnlyNumeric: AllowOnlyNumeric,
		AllowAlphaNumeric: AllowAlphaNumeric
	};

	return oPublic;
}();