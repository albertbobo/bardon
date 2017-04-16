//伸缩式搜索框
$(function(){
    $(".search_ico").click(function(){
        $(".input").focus();
        $(".search_bar").toggleClass('search_open');
        var keys = $("#search").val();
        if(keys.length>2){
            $("#search").val('');
            $("#myform").submit();
        }else{
            return false;
        }
    });
});



//点击按钮滑出侧边框菜单
window.onload=function(){    //用原生态的onload方法解决Chrome浏览器有时获取height为0的问题
    $("#sideBox").height($(".banner").height());
    //点击滑出
    $("#appearBtn").click(function(){
        $("#appearBtn").delay(300).animate({right:'-200'});
        $("#sideBox").delay(300).animate({right:'0'});
    });

    //点击收缩
    $("#hiddenBtn").click(function(){
        $("#appearBtn").delay(300).animate({right:'10'});
        $("#sideBox").delay(300).animate({right:'-480'});
    });
};







