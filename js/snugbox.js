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
			$(evt.target).closest(".container").trigger("click");
		});
	}


	function addClassesForBackgroundSize() {
		if( Modernizr.backgroundsize ) return;

		$("html").addClass('no-background-size');
		$(".snugbox-img").addClass('hideimg');

		// Until doc ready fired ".background-size-polyfill" doesn't exist
		ticker( 10, 500, function() {
			return ($(".container .background-size-polyfill").length === 0);
		}, function() {
			$(".snugbox-img").removeClass('hideimg');
			resizeBgSizePolyfill();
		});
	}


	/**
	 * Call this function again if changing the size of your boxes dynamically. 
	 * A resize handler is already included in the htc file.
	 */
	function resizeBgSizePolyfill() {
		if( Modernizr.backgroundsize ) return;

		$.each( $(".container .background-size-polyfill"), function(i, el) {

			// set heights, so that IE8 can render the polyfill correctly
			$(el).height( $(el).parent().height() );
			
			// triggers event handlers in polyfill on bg update
			$(el).parent().css("background-position","center center");
		});
	}

	function ticker( countMax, tickDur, ignoreWhileTrueCheck, callback ) {
		var count = 0
			,tick = tickDur
			,intv = setInterval( function() {

				// console.log( "tick", count, ignoreWhileTrueCheck() );

				// attept only up to the max amount, then abort
				if( count >= countMax ) {
					// kill the ticker
					clearInterval( intv );
					return;
				}

				count++;

				// do nothing until polyfill has kicked in
				if( ignoreWhileTrueCheck() ) return;				

				// kill the ticker
				clearInterval( intv );

				callback();
			}, tick);
	}

})(jQuery, Modernizr);