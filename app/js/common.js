function blocktimer(idtimer, timetimes, timesnows, member) {
    var timetimes = timetimes;
    timetimes = timetimes.split(", ");
    var timesnows = timesnows;
    var ts = new Date(timetimes[0], timetimes[1], timetimes[2]);
    if ((new Date()) > ts) {
        ts = (new Date()).getTime() + timesnows;
    }
    $(idtimer).countdown({
        timestamp: ts,
        callback: function (hours, minutes, seconds) {
        }
    });
}

$(document).ready(function () {
    blocktimer('#countdown', '2020, 1, 1', 150 * 5 * 60 * 1000);
});

$('.btn-maps').click(function (e) {
    e.preventDefault();
    $('.maps').removeClass('maps-active');
    var selectTab = $(this).attr("href");
    $(selectTab).addClass('maps-active');
});

$('.question-box__item').click(function () {
    $(this).toggleClass('open').siblings('.answer').fadeToggle();
});

$(".form").submit(function (e) {
    e.preventDefault();
    var phone_input = $('[name="phone"]').val();


    if (phone_input.length != 11) {
        $(".error").removeClass("n0ne");

    } else {
        $(".error").addClass("n0ne");

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn();
            $('#modal-thanks').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            $(".form").trigger("reset");
        });
        return false;
    }
});


$(".form2").submit(function (e) {
    e.preventDefault();
    var phone_input = $('[name="phone2"]').val();
    if (phone_input.length != 11) {
        $(".error").removeClass("n0ne");
    } else {
        $(".error").addClass("n0ne");

        $.ajax({
            type: "POST",
            url: "programm.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn();

            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            });

            $('#modal-thanks').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            $(".form").trigger("reset");
        });
        return false;
    }
});
// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-yes');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


$('.question-box h3').click(function () {
    $(this).toggleClass('close').siblings('.answer').fadeToggle();
});

$('.btn-burger').click(function () {
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$(".go_to").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top - 140}, 500);

    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});