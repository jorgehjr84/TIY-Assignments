$(document).ready(function(){

	$('.tabs li').on('click', function(){

			//figure out which panel to show
			var panelToShow = $(this).attr('a');
			// Hide current panel
			$('.tabs .content-current').hide(function(){

				$('#' + panelToShow).show();
			});

			// Show New Panel



	});



});




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
