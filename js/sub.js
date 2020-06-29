$(document).ready(function(){
	
	/*gnb*/
	
	$('.depth1 .depth1_li').each(function(){
		$(this).children('a').on({
			'mouseover':function(){
				if($(this).hasClass('on')==false){
				$('.depth1_li > a').removeClass('on');
			$(this).addClass('on');
				$('.depth2').hide()
				$(this).next().fadeIn()
				}
			}
		})
	})
	$('.gnb').on('mouseleave',function(){
			$('.depth2:gt(0)').fadeOut()
		$('.depth1_li > a').removeClass('on').eq(0).addClass('on');
		$('.depth1_li:eq(0)').find('.depth2').fadeIn()
	})
	
	/*lang*/
	
	$('.lang').on('click',function(e){
		e.preventDefault();
		$('.lang_select').slideToggle()
	})
	
	/*search*/

	$('.header form input').on('click',function(){
		$('.search_hint').slideDown(500)
	})
	
			$('.header form').on('mouseleave',function(){
		$('.search_hint').hide()
			})
	
	/*share*/
	
	$('.share>a').click(function(e){
		e.preventDefault();
		$('.share_list').fadeToggle()
	})
	
	/*top link*/
	
	$('.top_link').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},1000)
	})
	
	
})
