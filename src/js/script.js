$(document).ready(function () {
    var fixHeight = function () {
        $('.navbar-nav').css(
            'max-height',
            document.documentElement.clientHeight - 150
        );
    };
    fixHeight();
    $(window).resize(function () {
        fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function () {
        fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function () {
        $('.mobileMenu, .overlay').toggleClass('open');
        $('.navbar .navbar-toggler span').toggleClass('fa fa-times fa-lg pl-1 pr-2 navbar-toggler-icon');
    });
});
