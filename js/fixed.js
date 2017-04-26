$('#fixed>ul>li').click(function() {
	$('.box').hide();
	$(this).children('.box').show();
	$(this).css('background', 'url(img/images1/contact_bg1.png)').siblings().css('background', 'url(img/images1/contact_bg.png)');
});
$('.close').click(function(event) {
	event.stopPropagation();
	$(this).parents('.box').hide();
	$(this).parents('li').css('background', 'url(img/images1/contact_bg.png)');
});
/*返回顶部*/
$(window).scroll(function(event) {
	if($(document).scrollTop()<=$(document).height()-$(window).height()-$('.bottom').height()){
		$('#top').css('position', 'fixed');
	}else {
		$('#top').css('position', 'absolute');
	}
	if($(document).scrollTop()>$(window).height()/4){
		$('#top').show();
	}else {
		$('#top').hide();
	}
});
$('#top').click(function(event) {
	$('html,body').stop().animate({scrollTop:0}, "slow");
});