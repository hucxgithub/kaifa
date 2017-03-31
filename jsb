var main={
    init:(function(){
        $(".sec1 .btn").on('touchend',function(){
            $(".sec1").fadeOut();
            $(".sec2").fadeIn();
        })
        $(".sec2 .rBtn").on('touchend',function(){
            $(".sec2").fadeOut();
            $(".sec3").fadeIn();
        })
        $(".sec3 .return").on('touchend',function(){
            $(".sec3").fadeOut();
            $(".sec2").fadeIn();
        })
        $(".sec3 .area .btn").on('touchend',function(){
            $(".success").fadeIn();
            $(".sec3 .area textarea").val('')
        })
        $(".success").on('touchend',function(){
            $(".success").fadeOut();
        })
    }())
}
