var YRPW = YRPW ? YRPW : function() {

	function match(txt, m, rulenr) {
		var n = txt.match(m);
		var $el = $("li#pw-rule-" + rulenr).eq(0);
		if (n) {
			$el.addClass("text-success font-weight-bold");
			$el = $el.children().eq(0);
			$el.removeClass('fa-circle');
			$el.addClass('fa-check-circle');
		} else {
			$el.removeClass("text-success font-weight-bold");
			$el = $el.children().eq(0);
			$el.addClass('fa-circle');
			$el.removeClass('fa-check-circle');
		}
		return n;
	};

	var validatePW = function(txt) {
		match(txt, /^([^\s]*[!,",#,$,%,&,',(,),\*,+,\-,.,/,:,;,<,=,>,?,@,[,\\,\],^,_,`,{,|,},~][^\s]*)$/, 1);
		match(txt, /[a-z]/, 2);
		match(txt, /[A-Z]/, 3);
		match(txt, /[0-9]/, 4);
		match(txt, /^(.{8,32})$/, 5);
	};

	var oPublic =
	{
		validatePW: validatePW
	};

	return oPublic;

}();