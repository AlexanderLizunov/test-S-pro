
$('.slider-buttons_image').on('click', function () {
    console.log("slide")
    var slideNo = $(this).index();
    console.log(slideNo)
    $('.slider-main_image').eq(slideNo).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
    // $('.details_content-text').eq(slideNo).addClass('list-item__active').siblings().removeClass('list-item__active');
});


$('.slider-button-left').on('click', function () {
    WorksPrev()
})

$('.slider-button-right').on('click', function () {
    WorksNext()
})

function WorksNext() {
    var n = $('.slider-main_image__active').index();
    var m = $('.details_slider').children('img').length;
    if (n == m - 1) {
        $('.slider-main_image').eq(0).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(0).addClass('list-item__active').siblings().removeClass('list-item__active');
    } else if (n == m - 2) {
        $('.slider-main_image').eq(n + 1).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(n + 1).addClass('list-item__active').siblings().removeClass('list-item__active');
    } else {
        $('.slider-main_image').eq(n + 1).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(n + 1).addClass('list-item__active').siblings().removeClass('list-item__active');
    }
}

function WorksPrev() {
    var n = $('.slider-main_image__active').index();
    var m = $('.details_slider').children('img').length;
    if (n == 0) {
        $('.slider-main_image').eq(m - 1).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(m - 1).addClass('list-item__active').siblings().removeClass('list-item__active');
    } else if (n == 1) {
        $('.slider-main_image').eq(n - 1).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(n - 1).addClass('list-item__active').siblings().removeClass('list-item__active');
    } else {
        $('.slider-main_image').eq(n - 1).addClass('slider-main_image__active').siblings().removeClass('slider-main_image__active');
        // $('.details_content-text').eq(n - 1).addClass('list-item__active').siblings().removeClass('list-item__active');
        $('.slider-buttons_image').eq(n - 1).addClass('slider-buttons_image__active').siblings().removeClass('slider-buttons_image__active');
    }
}

// SLIDER_SWIPE


$(document).ready(function () {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $('body').addClass('platform-ios');
    }
});
// $('#myModal').modal('show');
function detectswipe(el, func) {
    swipe_det = new Object();
    swipe_det.sX = 0;
    swipe_det.eX = 0;
    var min_x = 30;  //min x swipe for horizontal swipe
    var max_x = 30;  //max x difference for vertical swipe
    var direc = "";
    ele = document.getElementById(el);
    ele.addEventListener('touchstart', function (e) {
        var t = e.touches[0];
        swipe_det.sX = t.screenX;
    }, false);
    ele.addEventListener('touchmove', function (e) {
        var t = e.touches[0];
        swipe_det.eX = t.screenX;
    }, false);
    ele.addEventListener('touchend', function (e) {
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && (swipe_det.eX > 0))) {
            if (swipe_det.eX > swipe_det.sX) direc = "r";
            else direc = "l";
        }
        if (direc != "") {
            if (typeof func == 'function') func(el, direc);
        }
        direc = "";
        swipe_det.sX = 0;
        swipe_det.sY = 0;
        swipe_det.eX = 0;
        swipe_det.eY = 0;
    }, false);
}

function myfunction(el, d) {
    if (d == "l") {

        WorksNext();
    } else {
        WorksPrev();
    }
}

detectswipe('slider-swipe', myfunction);