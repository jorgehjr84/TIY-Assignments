
$(function(){

	$('tabs li').click(function(event){
		$(this).siblings().removeClass('tab-current');

		$(this).addClaas('tab-current');

		var panelId = $(this).children('a').attr('href');
		var $panel = $(panelId);

		$mySection.addClass('content-current')
		.siblings().removeClass('content-current');

	});

});
