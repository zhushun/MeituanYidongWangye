
window.onload=function(){
    (function () {
        var doc = document,
            win = window,
            oBody = doc.documentElement || doc.body,
            resize = "onorientationchange" in win ? "orientationchange" : "resize";
        rem();
        addEventListener(resize, rem, false);
        function rem() {
            oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
            console.log(doc.body.clientWidth)
        }
    })();
    /*-----------------------------box-1 轮播图--------------------*/
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: 2000,
        speed:2500,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    })
    var mySwiper1 = new Swiper ('.swiper-container1', {
        //direction: 'vertical',
        loop: true,
        // 滚动条
        scrollbar: '.swiper-scrollbar',
    })
    /*----------------------------- end box-1 轮播图--------------------*/
}
