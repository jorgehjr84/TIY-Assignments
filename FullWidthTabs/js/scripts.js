$(document).ready(function() {


$('.tabs nav ul li').on('click',function(){

	//figure out which panel to show
	var tabToShow = $(this).attr('rel');//I dont understand the attr feature
	//hide current panel
	$('li').removeClass('tab-current');
	$(this).addClass('tab-current');
	$('.tabs .content-current').hide(0,function(){
		$(this).removeClass('content-current');
		$('' + tabToShow).show(0,function(){
			$(this).addClass('content-current');



			});

$(function(){

	$('tabs li').click(function(event){
		$(this).siblings().removeClass('tab-current');

		$(this).addClaas('tab-current');

		var panelId = $(this).children('a').attr('href');
		var $panel = $(panelId);

		$mySection.addClass('content-current')
		.siblings().removeClass('content-current');

	});
