$('.dianhuaka .ul1 li').hover(function(){
	$(this).css('background','orange');
	$('.ding').hide()
//	$('.div6').css('background',bg3());
	
},function(){
	$(this).next().hide();
	$(this).css('background','gray');
	$('.ding').show();
//	$('.div6').css('background','gray');
})
//随机颜色
   function bg3(){
             var r=Math.floor(Math.random()*256);
             var g=Math.floor(Math.random()*256);
             var b=Math.floor(Math.random()*256);
             return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
         }
 $('.input1').focus(function(){
 	$('.span1').hide();
 })
 $('.input1').blur(function(){
 	$('.span1').show();
 })
 
 $('.yt ul li').hover(function(){
 	$(this).find('.da').stop().slideToggle(1000);
 });
 
 //轮播图
 
// var swiper = new Swiper('.banner',{
//	
//                  	autoplay:1000,//时间
//				        loop:true,//循环播放
//				        pagination:'.swiper-pagination',//小圆点
//				        paginationClickable:true,//小圆点动起来
//				        autoplayDisableOnInteraction:false,//自动轮播
//                      effect:"fade",
//                      speed:1500
//})
 
 var swiper1 = new Swiper('.ming1',{
	                    
                    	autoplay:6000,//时间
				        loop:true,//循环播放
				        pagination:'.swiper-pagination',//小圆点
				        paginationClickable:true,//小圆点动起来
				        autoplayDisableOnInteraction:false,//自动轮播
                        prevButton:".swiper-button-prev",
                        nextButton:".swiper-button-next"
})
 
// $('.ul4 li').hover(function(){
// 	$(this).find('.chao').animate()
// },function(){
// 	$(this).find('.chao').css('margin-top','0px');
// })
 
 
 //轮播图
var img = $('.banner .box a');
var len = img.length;
var bw = $('.banner .box').width();
var btn = $('.banner li');
var index = 0;
var next = 0;
//图片初始化
img.css('left',bw).eq(0).css('left',0);
//按钮初始化
btn.eq(0).addClass('hot');
//计时器
var t = setInterval(move,2500);
//鼠标移入移除
$(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,2500);
    });
    //左右点击效果
    $(".lunbo .prev").click(function () {
    	$(this).removeClass('colr');
    	$(this).addClass('colr');
        mover()
    })
    $(".lunbo .next").click(function () {
        move();
    })
    
  //btn.点击效果
    btn.click(function () {
        var num=$(this).index();
        if(num==next){
            return;
        }else if(num<next){
            //下一张图片准备
            img.eq(num).css({"left":-bw});
            //当前图片离开
            img.eq(index).animate({"left":bw});
            //下一张图片显示
            img.eq(num).animate({"left":0})

            //按钮颜色
            btn.eq(index).removeClass("hot");
            btn.eq(num).addClass("hot");
            index=num;
            next=num;
        }else if(num>next){
            //下一张图片准备
            img.eq(num).css({"left":bw});
            //当前图片离开
            img.eq(index).animate({"left":-bw});
            //下一张图片显示
            img.eq(num).animate({"left":0})

            //按钮颜色
            btn.eq(index).removeClass("hot");
            btn.eq(num).addClass("hot");
            index=num;
            next=num;
        }
    });
    //轮播
    function move() {
        next++;
        if(next==len){
            next=0;
        }
        //下一张图片准备
        img.eq(next).css({"left":bw});
        //当前图片离开
        img.eq(index).animate({"left":-bw});
        //下一张图片显示
        img.eq(next).animate({"left":0})

        //按钮颜色
        btn.eq(index).removeClass("hot");
        btn.eq(next).addClass("hot");

        index=next;
    }
    
    function mover() {
        next--;
        if(next==-1){
            next=len-1;
        }
        //下一张图片准备
        img.eq(next).css({"left":-bw});
        //当前图片离开
        img.eq(index).animate({"left":bw});
        //下一张图片显示
        img.eq(next).animate({"left":0})

        //按钮颜色
        btn.eq(index).removeClass("hot");
        btn.eq(next).addClass("hot");
        index=next;
    }

 
 $('.ul5 li').hover(function(){
 	$('.prev').css('color','rgba(0,0,0,0.5)');
 	$('.next').css('color','rgba(0,0,0,0.5)');
 	$('.prev').css('transition','all 2s');
 	$('.next').css('transition','all 2s');
 },function(){
 	$('.prev').css('color','rgba(0,0,0,0)');
 	$('.next').css('color','rgba(0,0,0,0)');
 })
 
 
 $('.prev').click(function(){
 	$('.div3').css('margin-left','-290px');
 	$('.div3').css('transition','all 2s');
 })
 
 $('.next').click(function(){
 	$('.div3').css('margin-left','0px');
 	$('.div3').css('transition','all 2s');
 }) 
 
 
        

 
 
