(function() {
	addClassesForBackgroundSize();
	addBtnHandlers();


	function addBtnHandlers() {
		$(".btnhit").on("click", function(evt) {

			// your click logic here
			if( console && console.log )
				console.log( "snugbox clicked" );

			evt.preventDefault();
		});

		if( Modernizr.backgroundsize ) return;

		// workaround for button not being clickable because of polyfill
		$(".snugbox-img").on("click", function(evt) {
			$(evt.target).closest(".custom-container").trigger("click");
		});
	}


	function addClassesForBackgroundSize() {
		if( Modernizr.backgroundsize ) return;

		$("html").addClass('no-background-size');

		// Until doc ready fired ".background-size-polyfill" doesn't exist
		$(document).ready( resizeBgSizePolyfill );
	}


	/**
	 * Call this function again if changing the size of your boxes dynamically. 
	 * A resize handler is already included in the htc file.
	 */
	function resizeBgSizePolyfill() {
		if( Modernizr.backgroundsize ) return;

		$.each( $(".custom-container .background-size-polyfill"), function(i, el) {

			// set heights, so that IE8 can render the polyfill correctly
			$(el).height( $(el).parent().height() );
			
			// triggers event handlers in polyfill on bg update
			$(el).parent().css("background-position","center center");
		});
	}

})(jQuery, Modernizr);