jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
        var $second = $('section:eq(1)');
        var elTop = $second.offset().top;


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

$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

