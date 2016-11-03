jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top - 10 && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
        var $second = $('section:eq(1)');
        var elTop = $second.offset().top -10 ;


        if( scroll > elTop) {
            $('.navbar').css({"background-color": "gray", "opacity": "0.7"});
        }

        else if( scroll < $(document).height()) {
            $('.navbar').css("background-color", "transparent");
        }

    });




});


$("#menu").on("click",'a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

});

$("#scroll").on("click",'a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

});


$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});



//
// $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
//
// if(!$.browser.chrome){
//
//
// }

var isChromium = window.chrome,
    vendorName = window.navigator.vendor,
    isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
    isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;

if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {

} else {
    $(function() {
        $('#menu > li').each(function(){
            wid = $(this).width() + 20;
            $(this).css('width', wid+'px');
        });
    });
}



