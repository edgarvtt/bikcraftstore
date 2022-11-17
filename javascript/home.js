
/*Geral Home*/

$(window).scroll(function () {

    var windowTop = $(this).scrollTop();
    $('.anime-tech').each(function () {

        if (windowTop > $(this).offset().top - 600) {
            $(this).addClass('anime-init');
        }
        else {
            $(this).removeClass('anime-init');
        }
    })
});

/*Galeria Fotos "escolha a sua"*/

/*photo 1*/
$(window).scroll(function () {

    var photo1 = $(this).scrollTop();
    $('.foto-animation1').each(function () {

        if (photo1 > $(this).offset().top - 600) {
            $(this).addClass('anime-photo');
        }
        else {
            $(this).removeClass('anime-photo');
        }
    })
});

/*photo 2 */
$(window).scroll(function () {

    var photo2 = $(this).scrollTop();
    $('.foto-animation2').each(function () {

        if (photo2 > $(this).offset().top - 600) {
            $(this).addClass('anime-photo');
        }
        else {
            $(this).removeClass('anime-photo');
        }
    })
});

/*photo 3 */

$(window).scroll(function () {

    var photo3 = $(this).scrollTop();
    $('.foto-animation3').each(function () {

        if (photo3 > $(this).offset().top - 600) {
            $(this).addClass('anime-photo');
        }
        else {
            $(this).removeClass('anime-photo');
        }
    })
});