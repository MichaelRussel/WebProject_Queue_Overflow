$(document).ready(function () {
    var $cekName = /^([a-zA-Z]{4,16})$/;
    $('.name').on('keypress keydown keyup', function () {
        if (!$(this).val().match($cekName) ) {
            // there is a mismatch, hence show the error message
            $('.registerName .emsg').removeClass('hidden');
            $('.registerName .emsg').show();
        }
        else {
            // else, do not display message
            $('.registerName .emsg').addClass('hidden');
        }
    });

    var $emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $('.email').on('keypress keydown keyup', function () {
        if (!$(this).val().match($emailReg)) {
            // there is a mismatch, hence show the error message
            $('.emsg').removeClass('hidden');
            $('.emsg').show();
        }
        else {
            // else, do not display message
            $('.emsg').addClass('hidden');
        }
    });

    var $cekPassword = /^(?=[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    $('.password').on('keypress keydown keyup', function () {
        if (!$(this).val().match($cekPassword) ) {
            // there is a mismatch, hence show the error message
            $('.registerPassword .emsg').removeClass('hidden');
            $('.registerPassword .emsg').show();
        }
        else {
            // else, do not display message
            $('.registerPassword .emsg').addClass('hidden');
        }
    });

    var $cekPhone = /^[0-9]*$/;
    $('.phone').on('keypress keydown keyup', function () {
        if (!$(this).val().match($cekPhone) ) {
            // there is a mismatch, hence show the error message
            $('.registerPhone .emsg').removeClass('hidden');
            $('.registerPhone .emsg').show();
        }
        else {
            // else, do not display message
            $('.registerPhone .emsg').addClass('hidden');
        }
    });
});




