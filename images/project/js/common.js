$(document).ready(function () {

    
    //슬라이드배너코드
$('.mv').bxSlider({
    auto: true
    
});

 $(".dp2").hide();

    $(".gnb>li").mouseenter(function () {
        $(this).children(".dp2").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(this).children(".dp2").stop().slideUp();
    });
    
    
        //배너
    var slider = $(".util_list").bxSlider({
        auto: true,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 240,
        pager: false
    });
    
    
});