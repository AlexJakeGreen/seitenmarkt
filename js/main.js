
<!-- Animation WOW  -->
new WOW().init();
<!-- Scrollign  -->
$(document).on("click", "a.p-scroll", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1600);
});
<!-- Up button  -->
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.UpTop').fadeIn();
        } else {
            $('.UpTop').fadeOut();
        }
    });
    $('.UpTop').click(function () {
        $("html, body").animate({scrollTop: 0}, 2500);
        return false;
    });
});
<!-- Close bootstrap menu  -->
$(document).on('click', function () {
    $('.collapse').collapse('hide');
});

<!-- Overlay page -->
function openNav() {
    document.getElementById("warumWir").style.width = "100%";
}
function closeNav() {
    document.getElementById("warumWir").style.width = "0%";
}

function openLP() {
    document.getElementById("lanp").style.left = "0";
}

function closeLP() {
    document.getElementById("lanp").style.left = "-2500px";
}
function openOS() {
    document.getElementById("onshp").style.left = "0";
}

function closeOS() {
    document.getElementById("onshp").style.left = "-2500px";
}

function openUW() {
    document.getElementById("untw").style.left = "0";
}

function closeUW() {
    document.getElementById("untw").style.left = "-2500px";
}

function openBG() {
    document.getElementById("blog").style.left = "0";
}

function closeBG() {
    document.getElementById("blog").style.left = "-2500px";
}
function alert(){
    document.getElementById('alert').style.display = "block";
    }
<!-- slider  logo-->
$('.carousel').carousel();


