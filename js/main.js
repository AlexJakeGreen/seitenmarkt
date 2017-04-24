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
    $('#warumWir').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}
function closeNav() {
    document.getElementById("warumWir").style.width = "0%";
}

function openLP() {
    document.getElementById("lanp").style.left = "0";
    $('#lanp').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}

function closeLP() {
    document.getElementById("lanp").style.left = "-2500px";
}
function openOS() {
    document.getElementById("onshp").style.left = "0";
    $('#onshp').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}

function closeOS() {
    document.getElementById("onshp").style.left = "-2500px";
}

function openUW() {
    document.getElementById("untw").style.left = "0";
    $('#untw').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}

function closeUW() {
    document.getElementById("untw").style.left = "-2500px";
}

function openBG() {
    document.getElementById("blog").style.left = "0";
    $('#blog').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}

function closeBG() {
    document.getElementById("blog").style.left = "-2500px";
}
function openDT() {
    document.getElementById("date").style.left = "0";
    $('#blog').bind('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;
        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }
        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });
}

function closeDT() {
    document.getElementById("date").style.left = "-2500px";

}


function openKFB() {
    document.getElementById('blog').style.left = "-2500px";
    document.location.href = "#kontaktformular";

}
function openKFU() {
    document.getElementById('untw').style.left = "-2500px";
    document.location.href = "#kontaktformular";

}
function openKFO() {
    document.getElementById('onshp').style.left = "-2500px";
    document.location.href = "#kontaktformular";

}
function openKFLP() {
    document.getElementById('lanp').style.left = "-2500px";
    document.location.href = "#kontaktformular";

}


<!-- slider  logo-->
$('.carousel').carousel();

<!-- portofolio-->
$('.tabs:nth-child(2)').click(function () {
    if ($('#webs').is(":visible")) {
        $('#webs').hide();
        $('#logos').show();
    }
    else
        $('#logos').show();

});

$('.tabs:nth-child(3)').click(function () {
    if ($('#logos').is(":visible")) {
        $('#logos').hide();
        $('#webs').show()
    }
    else
        $('#webs').show()
});

$('.tabs:nth-child(4)').click(function () {
    $('#logos').show();
    $('#webs').show();

});

// Contact Me
$(document).ready(function () {
    $('form#contact_form').submit(function (event) {

        // get values from FORM
        var name = $("input[name=first_name]").val();
        var email = $("input[name=email]").val();
        var phone = $("input[name=phone]").val();
        var message = $("textarea[name=comment]").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
        }

        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'https://seitenmarkt.de/contact_us', // the url where we want to POST
            data: {
                name: name,
                phone: phone,
                email: email,
                comment: message
            },
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
            cache: false,
            success: function () {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                $('#success > .alert-success').append("<strong>Ihre Nachricht wurde gesendet. Unser Vertriebsmitarbeiter wird Sie bald kontaktieren.</strong>");
                $('#success > .alert-success').append('</div>');
                //clear all fields
                $('form#contact_form').trigger("reset");
            },
            error: function (message) {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                $('#success > .alert-danger').append("<strong>Entschuldige bitte, bitte das Formular ausfüllen und fehlende Felder füllen.</strong>");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('form#contact_form').trigger("reset");
            }
        });
        // .done(function(data) { console.log(name, phone, email, message); });

        event.preventDefault();
    })
});

