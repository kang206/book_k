$(function(){
	$('#slider-1>#page-btns>div').click(function(){
		var $this = $(this);
		var index = $this.index();
    
		$this.addClass('active');
    	$this.siblings('.active').removeClass('active');
    
    	var $slider = $this.parent().parent();
    
		var $current = $slider.find('#slide>li.active');
    
		var $post = $slider.find('#slide>li').eq(index);
    
		$current.removeClass('active');
    	$post.addClass('active');
	
		if(index == 0){
		  $("#sliderup").css({"backgroundColor": "#fece0c"});
		} else if(index == 1){
		  $("#sliderup").css({"backgroundColor": "#fff"});
		} else if(index == 2){
		  $("#sliderup").css({"backgroundColor": "#24e8c1"});
		} else if(index == 3){
		  $("#sliderup").css({"backgroundColor": "#fff"});
		} else if(index == 4){
		  $("#sliderup").css({"backgroundColor": "#f4f4f4"});
		} else{
		  $("#sliderup").css({"backgroundColor": "#fff"});
		} 
		
	});

// 좌/우 버튼 추가 슬라이더
$('#slider-1>#side-btns>div').click(function(){
    var $this = $(this);
    var $slider = $this.closest('#slider-1');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find('#page-btns>div.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find('#page-btns>div:last-child');
        }
        else {
            $post = $slider.find('#page-btns>div:first-child');
        }
    };
    
    $post.click();
});

setInterval(function(){
    $('#slider-1>#side-btns>div').eq(1).click();
}, 5000);

});