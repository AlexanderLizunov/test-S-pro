/**
 * Created by BogdanKootz on 22.02.17.
 */
var hideCover = document.createElement('div'),
    insert = document.getElementById('boundModal');
hideCover.className = 'bound-modal__inner';
hideCover.setAttribute('data-dissmiss', 'boundModal');
insert.insertBefore(hideCover, insert.firstChild);

var boundModal = {
    modal: document.getElementById('boundModal'),
    body: document.getElementsByTagName('body')[0],
    closeButtons: document.querySelectorAll('[data-dissmiss]'),
    init: function (id) {
        this.modal = document.getElementById(id);
        // this.closeButtons.forEach(function (item) {
        //     item.addEventListener("click", function () {
        //         boundModal.hide()
        //     }, false);
        // });
    },
    resize: function () {
        var h = window.innerHeight,
            el = document.getElementById('modal-body'),
            elHeight = el.offsetHeight,
            elWidth = el.offsetWidth;
        console.log(elHeight)
        el.style.marginLeft = "-" + elWidth / 2 + "px";
        el.style.maxHeight = 0.95 * h + "px";
        if (0.95 * h < elHeight) {
            el.style.overflow = "scroll";
            el.style.marginTop = "-" + 0.9 * h / 2 + "px";
            console.log("works")
        } else {
            el.style.overflow = "auto";
            el.style.marginTop = "-" + 0.9*h / 2 + "px";
            console.log(el.style.marginTop)
        }
    },
    show: function () {
        this.modal.classList.add("active");
        this.body.classList.add("backdrop");
        if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            this.body.classList.add('platform-ios');
        }
        //::toDo add element
        boundModal.resize()
        // document.querySelector('.backdrop').addEventListener("click", function(){boundModal.hide()}, false);
    },
    hide: function () {
        this.modal.classList.remove("active");
        this.body.classList.remove("backdrop");

    }
};

boundModal.init('boundModal');
window.onresize = function () {
    boundModal.resize()
};


$('.bound-modal__inner').on("click", function () {
    boundModal.hide()
});
$('.close-button-top').on("click", function () {
    boundModal.hide()
});