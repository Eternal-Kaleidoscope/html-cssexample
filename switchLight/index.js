
function handleInput(){
    // 这俩获取之后都是数组
    const inputDom = document.getElementsByTagName('input')[0];
    const containerDom = document.getElementsByClassName("container")[0];
    if(inputDom.checked){
        containerDom.setAttribute("class","container on");
    }else{
        containerDom.setAttribute("class","container");
    }
}
