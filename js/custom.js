/*================================================
					Services
==================================================*/

// $(document).ready(function){});
$(function(){
		//animate on scroll
		new WOW().init();
});

/*================================================
					Work
==================================================*/

$(function(){

	$("#work").magnificPopup({
			  delegate: 'a', // child items selector, by clicking on it popup will open
			  type: 'image',
			  // other options
			   gallery:{
						    enabled:true
						  }
	});
});


/*================================================
					TEAM
==============================================*/

$(function(){
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
		});
});

/*================================================
					Testimonials
==============================================*/

$(function(){
	$("#customer-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
		});
});