$(document).ready(function() {
	$("#moremenu").hide();
	$("#more").css('cursor', 'pointer');
	$("#more").click (function(){
		$("#moremenu").toggle(300);
	});

	$("p").hide();
	$(".see_more").css('cursor', 'pointer');
	$(".see_more").click(function(){
		$(".see_more>p").toggle(300);
	});

	$('#clickme').click(function(){
		$("#float_img>img").animate({"left": "200", "height": "900", "width": "900"});
	});

	$('#img1').click(function(){
		$(this).animate({"left": "200", "height": "400", "width": "auto"});
	});

	$('#img2').click(function(){
		$(this).animate({"left": "200", "height": "400", "width": "auto"});
	});
	$('#img3').click(function(){
		$(this).animate({"left": "200", "height": "400", "width": "auto"});
	});
	$("img").click(function(){
		if($(this).height()<399){
			$(this).animate({"height":"400", "width":"auto"});
		}
		else{
			$(this).animate({"height":"200", "width":"auto"});
		}
	});


});


	