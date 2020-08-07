$(".navopen").click(function(){
    if($('.nav-sidebar').css('display','none')){
        $('.nav-sidebar').css('display','block');
    }else{
        $('.nav-sidebar').css('display','none');
    }

});

$(".close").click(function(){
    $('.nav-sidebar').css('display','none');
});