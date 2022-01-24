$(function(){
	
	/*top배너*/
	$('#close').click(function(){
		$('#topbanner').hide();
	});
	
	
	
	/*마이페이지*/
	$('.mypage').hover(function(){
		$('#my_down').hide();
		$('#my_up').show();
		$('.mypagesub').show();
	}, function(){
		$('#my_down').show();
		$('#my_up').hide();
		$('.mypagesub').hide();
	});
	
	
	
	/*전체 카테고리*/
	$('#allmenu').click(function(){
		if($('#i-up1').css('display')=='none'){
			$('#i-up1').show();
			$('#i-down1').hide();
			$('#sub').slideDown();
		}else{
			$('#i-up1').hide();
			$('#i-down1').show();
			$('#sub').slideUp();
		}
	});
	$('.sub_x').click(function(){
		$('#sub').slideUp();
		$('#i-up1').hide();
		$('#i-down1').show();
	});
	
	
	
	/*slide 왼쪽 마우스 호버*/
	$('.sl_imgbox1').mouseenter(function(){
		if($('#left_hover').css("display")=="none"){
			$('#left_hover').animate({
				width:"toggle",
				height:"toggle",
				opacity:'1'
			},'slow');
		}
	});
	
	$('#close1').click(function(){
		$('#left_hover').animate({
			width:"toggle",
			height:"toggle",
			opacity:"0"
		},'slow');
	});
	$('#close2').click(function(){
		$('#left_hover').animate({
			width:"toggle",
			height:"toggle",
			opacity:"0"
		},'slow');
	});

	
	
	/*베스트 셀러*/
	$('.w_lank').hide();
	$('#day').mouseover(function(){
		$('.w_lank').hide();
		$('.d_lank').show();
		$('#week').css({"border-bottom":"1px solid #b3b3b3"});
		$('#day').css({"border-bottom":"none"});
	});
	$('#week').mouseover(function(){
		$('.d_lank').hide();
		$('.w_lank').show();
		$('#day').css({"border-bottom":"1px solid #b3b3b3"});
		$('#week').css({"border-bottom":"none"});
	});
	

	
 	//검색창 완성글 없애기//
        $('input').focus(function () {
        	$('input').removeAttr('placeholder');
        }).blur(function () {
        	$('input').attr('placeholder', "뒤에 올 여성들을 위해!");
        });
	
})