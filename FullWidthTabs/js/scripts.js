$(document).ready(function() {


$('.tabs nav ul li').on('click',function(){

	//figure out which panel to show
	var tabToShow = $(this).attr('rel');
	//hide current panel
	$('.tabs .content-current').hide(function(){
		$('' + tabToShow).show(function(){
			$(this).addClass('content-current');
		});


	});
	//show new panel


});




});






  // $('.tabs li').on('click', function() {
	//
	// 	$('.tabs li.content-current').removeClass('content-current');
	// 	$(this).addClass('content-current');
	//
	// 	// //figure out which panel to show
  //    var panelToShow = $(this).attr('rel');
	//
	// 	// // Hide current panel
  //    $('.tabs .content-current').hide(0,(showNextTab);
	//
	// 	  function showNextTab(){
	// 	 	$(this).removeClass('content-current');
  //      //Show new panel
  //      $('section' + panelToShow).show(function(){
  //        $(this).addClass('.content-current');
	// 		});//End of showNextTab
	//
	//  		});//End of hide function
	//
	//
	// 		});//End of click function
	//
	// 	}); // End document ready function
	//
	//
	//
  //   // Show New Panel







//
// //Shop Tab
// $("a.icons-shop").click(function(){
//
// })
//
//
//
// //Drinks Tab
// $("a.icon-cup").click(function(){
// 	$("#section-2");
// })
//
// //Food Tab
// $("a.icon-food").click(function(){
// 	console.log('Food');
//
// })
//
//
//
// //Lab Tab
// $("a.icon-lab").click(function(){
// 	console.log('lab');
//
// })
//
//
//
// //Order Tab
// $("a.icon-truck").click(function(){
// 	console.log('truck');
//
// })
