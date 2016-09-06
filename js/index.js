jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var navHeight = $('.navbar-js').height();
        var top  = $(el).offset().top-150;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
    })
});


$("#menu").on("click",'a', function (event) {
    var navHeight = $('.navbar-js').height();
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top-navHeight;
    $('body,html').animate({scrollTop: top}, 1500);

});


