
$(document).ready(function() {
    $('select').selectpicker();
});

$(document).ready(function() {
    $('.slider-review').slick({});
});

$(document).ready(function() {
    $('.promo-product').slick({
        dots: true
    });
});

if (document.getElementById("myTabNavigation")) {
  // start fix navigation
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("myTabNavigation");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  // end fix navigation  
}

$('.mobile-menu').click(function(){
    $(this).toggleClass("active");
});

$(document).ready(function(){
    $('#forget-password').click(function(){
        $("#user-login").addClass('hidden');
        $("#recover-step1").addClass('visible');
    });
});

$(document).ready(function(){
    $('#user-login-next').click(function(){
        $("#recover-step1").addClass('hidden');
        $("#recover-step2").addClass('visible');
    });
});

jQuery(document).ready(function($){
    var $lateral_cart = $('.favourite-side'),
        $shadow_layer = $('.favourite-side__shadow');

    //close lateral cart or lateral menu
    $shadow_layer.on('click', function(){
        $lateral_cart.removeClass('speed-in');
        // $menu_navigation.removeClass('speed-in');
        $shadow_layer.removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
    });

    function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
        if( $lateral_panel.hasClass('speed-in') ) {
            $lateral_panel.removeClass('speed-in');
            $background_layer.removeClass('is-visible');
            $body.removeClass('overflow-hidden');
        } else {
            $lateral_panel.addClass('speed-in');
            $background_layer.addClass('is-visible');
            $body.addClass('overflow-hidden');
        }
    }

    //open cart
    $('#favourite-side__trigger1').on('click', function(event){
        event.preventDefault();
        //close lateral menu (if it's open)
        // $menu_navigation.removeClass('speed-in');
        toggle_panel_visibility($('#favourite-side1'), $shadow_layer, $('body'));
    });
    $('#favourite-side__trigger2').on('click', function(event){
        event.preventDefault();
        //close lateral menu (if it's open)
        // $menu_navigation.removeClass('speed-in');
        toggle_panel_visibility($('#favourite-side2'), $shadow_layer, $('body'));
    });
    $('#favourite-side__trigger3').on('click', function(event){
        event.preventDefault();
        //close lateral menu (if it's open)
        // $menu_navigation.removeClass('speed-in');
        toggle_panel_visibility($('#favourite-side3'), $shadow_layer, $('body'));
    });
    $('#favourite-side__trigger4').on('click', function(event){
        event.preventDefault();
        //close lateral menu (if it's open)
        // $menu_navigation.removeClass('speed-in');
        toggle_panel_visibility($('#favourite-side4'), $shadow_layer, $('body'));
    });
});

var ps = new PerfectScrollbar('.scrollbar');

function buttonUp(){
    var valux = $('.sb-search-input').val();
    valux = $.trim(valux).length;
    if(valux !== 0){
        $('.sb-search-submit').css('z-index','99');
    } else{
        $('.sb-search-input').val('');
        $('.sb-search-submit').css('z-index','-999');
    }
}

$(document).ready(function(){
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;

    $(document).mouseup(function(){
        if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
        }
    });

    submitIcon.mouseup(function(){
        return false;
    });

    searchBox.mouseup(function(){
        return false;
    });

    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('sb-search-open');
            $('.nav--header').addClass('nav--none');
            isOpen = true;
        } else {
            searchBox.removeClass('sb-search-open');
            $('.nav--header').removeClass('nav--none');
            isOpen = false;
        }
    });

    submitInput.click(function(){
        searchBox.addClass('sb-search-open');
        $('.nav--header').addClass('nav--none');
        isOpen = true;
    });

    $('.sb-search__nav').click(function(){
        searchBox.removeClass('sb-search-open');
        $('.nav--header').removeClass('nav--none');
        isOpen = false;
    });
});

(function() {
    $(".input__wrapper").on("focus", ".input:not(.focus)", function(e) {
        e.stopPropagation();
        $(this).addClass("focus");
        return $(e.delegateTarget).addClass("focus");
    }).on("click", ".input__clear", function(e) {
        e.stopPropagation();
        console.log(e, $(this).siblings('.input'));
        return $(this).siblings('.input').val("").focus();
    });

}).call(this);
