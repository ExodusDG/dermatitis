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


/* EMAIL POPUP OPEN */

function emailPopupOpen() {
    emailPopup = $('.emailPopup');
    $('body').attr('style', 'overflow: hidden')
    emailPopup.addClass('popupOpen');
}


/* EMAIL POPUP CLOSE */

function emailPopupClose() {
    emailPopup = $('.emailPopup');
    $('body').attr('style', 'overflow-y: scroll')
    emailPopup.removeClass('popupOpen');
}

$('.emailPopupClose').click(function(){
    emailPopupClose()
})

$('.emailClose').click(function(){
    emailPopupClose()
})

$('.emailPopupInfo button').click(function(){
    emailPopupClose()
})


/* ARTICLE EMAIL CLOSE */

$('.articleEmailClose').click(function(){
    articleEmailClose()
})

function articleEmailClose() {
    $('.articleEmailBlock').attr('style', 'height: 0px')

    setTimeout(() => {
        $('.articleEmailBlock').attr('style', 'display: none')
    }, 200);
    
}