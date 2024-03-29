var bg =document.getElementsByClassName("bg")[0];
var box =document.getElementsByClassName("box")[0];

// 鼠标在dom文档移动
document.onmousemove=function(e){
    /*
    背景图初始设定为300，100
    盒子为400，180
        */
    bg.style.left = 320+((-e.pageX-960)/2)/10+"px";
    bg.style.top = 100+((-e.pageY-500)/2)/10+"px";

    box.style.left=400+(-e.pageX-970)/5+"px";
    box.style.top=170+(-e.pageY-270)/5+"px";
}
