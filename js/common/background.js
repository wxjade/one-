var background = function(ele) {
    $(".kefu").mouseover(function () {
        $(".kefu").css("color","#fff");
        $(".kefu").css("background","#000");
    })

    $(".kefu").mouseout(function () {
        $(".kefu").css("color","#000");
        $(".kefu").css("background","#fff");
    })
}

