var aviWidth = document.getElementById('canvas').width = screen.availWidth
var aviHeight = document.getElementById('canvas').height = screen.availHeight

const ctx = document.getElementById('canvas');
ctx.getContext("2d")
const arr = Array(Math.floor(aviWidth/10)).fill("");
const str = "abcdefghijklmnopqrstuvwxyz"+"1234567890".split("")
ctx.font= "10px 微软雅黑"
function rain(){
    ctx.fillStyle="rgba(0,0,20,0.05)";
    ctx.fillRect(0,0,aviWidth,aviHeight);
    ctx.fillStyle="#8cb1e4";
    arr.forEach(function(value,index){
        ctx.fillText(str[Math.floor(Math.random()*str.length)],index*10,value+10);
    });
}
setInterval(rain,30)