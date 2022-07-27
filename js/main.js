$('.headerMobileMenu').click(function () {

    if ($('.hamburger').hasClass('is-active')) {
        $('.headerMobileMenu p').text('Menu')
    } else {
        $('.headerMobileMenu p').text('Close')
    }
    $('body').toggleClass('scrollDisabled')
    $('.hamburger').toggleClass('is-active')
    $('.mobileMenu').toggleClass('mobileMenuVisible')
})