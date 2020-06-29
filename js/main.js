$(document).ready(function(){
	
	/*header*/
	var didScroll;
	var lastScrollTop=0;
	var delta=5;
	var navHeight=$('#header_wrap').outerHeight();
	
	$(window).scroll(function(event){
		didScroll=true
	})	
	
	setInterval(function(){
		if(didScroll){
			hasScrolled()
			didScroll=false
		}
	},250)
	
	function hasScrolled(){
	var st=$(this).scrollTop()
	
	if(Math.abs(lastScrollTop-st)<=delta)return
		
	if(st>800){
		$('.visual form').addClass('ready')
	}else{
		$('.visual form').removeClass('on ready')
	}
		
		if(st>lastScrollTop&&st>navHeight){
			$('#header_wrap').removeClass('on').addClass('off');
				$('.visual form').removeClass('on')
					if(st<800&&Math.abs(lastScrollTop-st)>=60)$('.visual_wrap .scroll').trigger('click')
		}else{
			if(st+$(window).height()<$(document).height()) { $('#header_wrap').removeClass('off').addClass('on');
			if($('.visual form').hasClass('ready')==true){
				$('.visual form').addClass('on')
			}
		
	}
		}
	lastScrollTop = st;
	}
	
	
	/*gnb*/
	
	$('.depth1 .depth1_li').each(function(){
		$(this).children('a').on({
			'mouseover':function(){
				if($(this).hasClass('on')==false){
				$('.depth1_li > a').removeClass('on');
			$(this).addClass('on');
				$('.depth2').hide()
				$(this).next().slideDown()
					$('#header_wrap.on').css('height','130px')
				}
			}
		})
	})
	$('.gnb').on('mouseleave',function(){
		$('.depth1_li > a').removeClass('on');
				$('.depth2').slideUp()
		$('#header_wrap.on').css('height','80px')
	})
	
	/*lang*/
	
	$('.lang').on('click',function(e){
		e.preventDefault();
		$('.lang_select').slideToggle()
	})
	
	/*search*/

	$('.visual form input').on('click',function(){
		$('.search_hint').slideDown(500)
	})
	
		$('.visual').on('click',function(){
			$('.visual form').on('mouseleave',function(){
		$('.search_hint').slideUp(500)
			})
		})
	
	$('.visual form').on('mouseover',function(){
		if($(this).hasClass('on')==true)$(this).find('input').focus()
	})
	
	/*visual scroll*/
	
	$('.visual_wrap .scroll').click(function(){
		var main=$('.best_wrap').offset().top;
		$('html,body').animate({
			scrollTop:main
		},500)
	})
 
  
	$('.visual_wrap').on('scroll touchmove mousewheel',function(event){
  event.preventDefault();
  event.stopPropagation(); 
  $('.visual_wrap .scroll').trigger('click')
  return false;
	})
	
	/*event*/
	var eventSid=setInterval(eventAuto,3000)
	var eventNum=1
	function eventAuto(){
		$('.event_wrap').toggleClass('on')
		$('.event_now span').toggleClass('on')
	$('.event_list').animate({
		opacity:'0.2'
	},700,function(){
		$('.event_list').append($('.event_list li:first'))
		$('.event_list').animate({
		opacity:'1'
	},700)
	})
	}
	
	$('.event_wrap').on({
		mouseenter:function(){
			clearInterval(eventSid)
		},
		mouseleave:function(){
			eventSid=setInterval(eventAuto,3000)
		}
	})
	
	/*discover*/
	var over=false;
	
	$('.discover span').on({
		mouseenter:function(){
		var num=$(this).index();
		var currentNum=1;
		$('.discover_wrap').css('background','url(../images/dis_img'+num+'.png) no-repeat 50% 0,url(../images/dis_img'+currentNum+'.png) no-repeat 50% 0');
			$('.discover_li').removeClass('on').eq(num).addClass('on');
			over=true;
			currentNum=num;
	},
		mouseleave:function(){
			setTimeout(discoverOff,1500)
			over=false;
		}
		})
	
	function discoverOff(){
		if(over==false){
		$('.discover_wrap').css('background','url(../images/dis_img.png) no-repeat 50% 0');
			$('.discover_li').removeClass('on').eq(0).addClass('on');
		}return;
	}
	
	/*top link*/
	
	$('.top_link').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop:0
		},1000)
	})
	
	
})
