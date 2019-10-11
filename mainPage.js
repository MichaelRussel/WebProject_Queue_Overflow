$(document).ready(function(){ // document ready pada saat sudah selesai semua document baru load js nya
    var slideCount = $(".slide").length;
    var slideWidth = $(".slide").width();
    var slideHeight = $(".slide").height();
    var total = (slideCount * slideWidth);

    $("#slider").css({width: slideWidth, height:slideHeight})
    $("#slides").css({width: total,marginLeft:-slideWidth})

    $("#left").click(function(){
        $("#slides").animate({
            left: -slideWidth
        },1000,function(){ // kasih durasi disini
            $(".slide:first-child").appendTo("#slides") // posisi image pertama di oper ke belkang
            $("#slides").css("left",0)
        }) 
    })
    $("#right").click(function(){
        $("#slides").animate({
            left: slideWidth
        },1000,function(){ // kasih durasi disini
            $(".slide:last-child").prependTo("#slides") // posisi image pertama di oper ke belkang
            $("#slides").css("left",0)
        }) 
    })
})