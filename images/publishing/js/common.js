// JavaScript Document

$(document).ready(function () {
   
    
    //2차메뉴
    $(".dp2,.dp2_bg").hide();
      $(".gnb>li").mouseenter(function () {
        $(".dp2,.dp2_bg").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".dp2,.dp2_bg").stop().slideUp();
    });
    
    
    //모바일메뉴
      $(".m_menu").click(function(){
        $(".m_wrap").animate({
            right:"0"  
        });   
      });  

 
      $(".close").click(function(){
        $(".m_wrap").animate({
            right:"100%"  
        });
      });  
    
 
      // 메인슬라이드
    $(".mv").bxSlider({
        auto: true
    });

    //2차메뉴
 $(".dp2").hide();

    $(".gnb>li").mouseenter(function () {
        $(this).children(".dp2").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(this).children(".dp2").stop().slideUp();
    }); 
    
    
       
    
    //서울특별시
$('.seoul').bxSlider({
  auto: true,
  speed: 500, pause: 4000, mode:'fade', autoControls: true, pager:true,  
  slideWidth: 650
});
    

  // 경기도    
$('.Gyeonggi').bxSlider({
  auto: true,
  speed: 500, pause: 4000, mode:'fade', autoControls: true, pager:true, 
  slideWidth: 650
});
    

    
});