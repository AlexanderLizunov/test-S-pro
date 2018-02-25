$('.button-join-now').on('click', function () {
    $('body, html').animate({scrollTop: $('input').offset().top - 350}, 900);
});


$(document).ready(function () {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $('body').addClass('platform-ios');
    }
});

boundModal.init('boundModal');
// document.addEventListener("DOMContentLoaded", boundModal.show());
// document.addEventListener("DOMContentLoaded", showModal());
//
function showModal() {
    boundModal.show();
}



// document.addEventListener('DOMContentLoaded', function(){
//
//       setTimeout( function () {
//          var play = document.getElementsByClassName('vp-player-layout');
//         console.log(play)
//         play.setAttribute('style','top: 0;left: 0; right: 0; bottom: 0;')
//     }, 5000)
// });