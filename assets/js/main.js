$(document).ready(function(){
    // Owl Carousel 2
    $('.list-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });
    $('.seller-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    $('.upsell-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.event-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                center:false
            },
            600:{
                items:1,
                center:false
            },
            1000:{
                items:2
            }
        }
    });
    $('.list2-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
    $('.partner-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
    });
    $('.blog-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.best-seller-mobile').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    });
    // Show - Hide Back To Top Button
    var backtop = $('.backtop-btn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            backtop.addClass('active');
        } else {
            backtop.removeClass('active');
        }
    });
    backtop.click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
    // Show and hide specific popups such as login, cart,...
    var loginpop = $('.login-popup'),
        loginpopc = $('.login-popup--content');
    $('.login-btn').click(function(){
        loginpop.fadeIn();
        loginpopc.css('top','50%');
    });
    $('.close-login').click(function(){
        loginpop.fadeOut();
        loginpopc.css('top','30%');
    });
    $('.popup-btn').click(function(){
        $(this).next('.main-popup').fadeIn();
    });
    $('.close-pop').click(function(){
        $('.main-popup').fadeOut();
    });
    // Show and hide specific dropdowns
    var searchbtn = $('.search-left > .btn'),
        searchcontent = $('.search-left--list');
    searchbtn.click(function(e){
        e.stopPropagation();
        $(this).toggleClass('updown');
        searchcontent.toggle();
    });
    searchcontent.on('click', function(e){
        e.stopPropagation();
    });
    $(document).on('click', function(){
        searchcontent.hide();
        searchbtn.removeClass('updown');
    });
    // Show .hidden-menu
    var plusmenu = $('.plus-menu'),
        minusmenu = $('.minus-menu'),
        hiddenmenu = $('.hidden-menu > ul');
    plusmenu.click(function(){
        $(this).css('display','none');
        minusmenu.css('display','block');
        hiddenmenu.slideDown(200);
    });
    minusmenu.click(function(){
        $(this).css('display','none');
        plusmenu.css('display','block');
        hiddenmenu.slideUp(200);
    });
    // Increase/ Descrease Number input
    $('.minus,.add').on('click', function() {
        var $qty = $(this).closest('p').find('.qty'),
          currentVal = parseInt($qty.val()),
          isAdd = $(this).hasClass('add');
        !isNaN(currentVal) && $qty.val(
          isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
        );
    });
    // Product Gallery
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-for1',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // Show elements on header-top
    var content = $('.dropdown-content'),
        button = $('.dropdown-btn');
    button.click(function() {
        if (content.is(':visible')) {
            content.slideUp();
        }
        if ($(this).next('.dropdown-content').is(':visible')) {
            $(this).next('.dropdown-content').slideUp();
        } else {
            $(this).next('.dropdown-content').slideDown();
        }
    });
    // Show and hide main menu mobile
    var menulist = $('.menulist');
    $('.menubutton').click(function(){
        $(this).next('.menulist').addClass('show');
    });
    $('.menubuttonx').click(function(){
        menulist.removeClass('show');
    });
    var menucontent = $('.menu-content');
    $('.open-btn').on('click', function() {
        if (menucontent.is(':visible')) {
            menucontent.slideUp(300);
            $('.open-btn').removeClass('active');
        }
        if ($(this).next('.menu-content').is(':visible')) {
            $(this).next('.menu-content').slideUp(300);
            $(this).parent('li').find('.open-btn').removeClass('active');

        } else {
            $(this).next('.menu-content').slideDown(300);
            $(this).parent('li').find('.open-btn').addClass('active');
        }
    });
    $(document).mouseup(function(a) {
        if (!$(".menulist").is(a.target) && $(".menulist").has(a.target).length === 0) {
            $(".menulist").removeClass('show');
        }
    });
    // Show select cat
    $('.select-cat').click(function(){
        $(this).next('.product-list ul').slideToggle();
        $(this).toggleClass('active');
    });
    // Show and hide element over max height
    $('.show-more').click(function(){
        $(this).siblings('.hidden-element').addClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-less').css('display','block');
    });
    $('.show-less').click(function(){
        $(this).siblings('.hidden-element').removeClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-more').css('display','block');
    });
});
