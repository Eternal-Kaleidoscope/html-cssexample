const timebox = document.querySelector('.time-box');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ul = document.querySelector('ul')
for (let i=0;i<60;i++ ) {
    const lis = document.createElement('li');
    lis.setAttribute('style',`transform:rotate(${i*6}deg);`);
    if(i%5 == 0){
        lis.setAttribute('style',`transform:rotate(${i*6}deg); height:20px;`);
    }
    ul.appendChild(lis);
}
for(let j=1;j<=12;j++){
    var degs = -30;
    const div = document.createElement('div');
    div.setAttribute('class','numbers');
    div.setAttribute('style',`transform: translate(-50%,-50%)  rotate(${j*30}deg) translateY(-140px) rotate(${-30 * j}deg)`);
    div.innerHTML = j;
    timebox.appendChild(div);
}

function run(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    hours.setAttribute('style',`transform: translate(-50%,-100%) rotateZ(${hour*30 + minute/60 * 30}deg)`);
    minutes.setAttribute('style',`transform: translate(-50%,-100%) rotateZ(${minute * 6}deg)`);
    seconds.setAttribute('style',`transform: translate(-50%,-100%) rotateZ(${second * 6}deg)`);
}
setInterval(() => {
    run();
},1000);