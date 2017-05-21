$(document).ready(function(){



	// HEADER
	// Add fixed class to header

	$(window).scroll(function(){ 

	 	if ( $(window).scrollTop() >= 280 ) {	

	 		$("header").addClass("fixed");
			$("form#research").addClass("fixed");			

	 	} else { 

	 		if ( $("header").hasClass("stayfixed") ) {

	 		} else {

	 			$("header").removeClass("fixed");
				$("form#research").removeClass("fixed");
	 			
	 		}
			

	 	}

	});



	// POPIN
	// Account

	$("#signin, #vote, #become, #profile-contact, .booking").click(function(){

		$("#overlay-account").fadeIn();

	});

	$(".close").click(function(){

		$(".overlay").fadeOut();

	});

	$("#signup").click(function(){

		$(this).text("See you soon !");
		$(email).text("");

	});

	$("bouton.paypal-bouton").text("Book with Paypal");


/*

	// MENU
	// show/hide menu on small devices

	$("#menu").click(function(){

		if ( $("#menu").hasClass("on") ) {

			$("nav").fadeOut();
			$(this).removeClass("on");

		} else {

			$("nav").fadeIn();
			$(this).addClass("on");

		}

	});




	// HOVER
	// show/hide the description

	$(".project-glimpse").hover(

	  	function() {

	    	$(this).find("img").animate({
	   	 		top: "-95",
			}, 500, function() {
			});

			$(this).find("figcaption").animate({
	   	 		bottom: "0",
			}, 500, function() {
			});

	  	}, function() {

	    	$(this).find("img").animate({
	   	 		top: "0",
			}, 500, function() {
			});

			$(this).find("figcaption").animate({
	   	 		bottom: "-95",
			}, 500, function() {
			});

	  	}

	);




	// SCROLL
	// Fixe "aside" to the top when scroll exceed 140px

	if ( $(window).width() > 1070 ) {

		$(window).scroll(function(){ 

		 	if ( $(window).scrollTop() >= 140 ) {	

				$(".project aside").css("position", "fixed");
				$(".project aside").css("top", "0");

		 	} else {

				$(".project aside").css("position", "absolute");
				$(".project aside").css("top", "14rem");

		 	}

		});

	} else {

		$(".project aside").css("position", "relative");
		$(".project aside").css("top", "0");

	}


*/


	/* - - - - WHEN RESIZE - - - - */
	
	/*
	$(window).resize(function(){


		// MENU
		// show/hide menu on small devices

		if ( $(window).width() > 800 ) {

			$("nav").show();

	 	}

	 	
		// SCROLL
		// Fixe "aside" to the top when scroll exceed 140px

		if ( $(window).width() > 1070 ) {
	
			$(window).scroll(function(){ 

			 	if ( $(window).scrollTop() >= 140 ) {	

					$(".project aside").css("position", "fixed");
					$(".project aside").css("top", "0");

			 	} else {

					$(".project aside").css("position", "absolute");
					$(".project aside").css("top", "14rem");

			 	}

			});

		} else {

			$(window).scroll(function(){ 

			 	if ( $(window).scrollTop() >= 140 ) {	

					$(".project aside").css("position", "relative");
					$(".project aside").css("top", "0");

			 	} else {

					$(".project aside").css("position", "relative");
					$(".project aside").css("top", "0");

			 	}

			});

		}
 

    });
	
*/

});
