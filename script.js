"use strict";
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let millisecond = document.getElementById('millisecond');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
stop.disabled = true;
reset.disabled = true;
let interval = function (){
    let timer = 
    setInterval(function (){
        millisecond.innerHTML = parseInt(millisecond.innerHTML) + 1;
        if (millisecond.innerHTML == 100){
            millisecond.innerHTML = 0;
            second.innerHTML = parseInt(second.innerHTML) + 1;
            if (second.innerHTML == 60){
                second.innerHTML = 0;
                minute.innerHTML = parseInt(minute.innerHTML) + 1;
            }
        }
    }
    ,10);
    stop.addEventListener('click', function (){
        clearInterval(timer);
        stop.disabled = true;
        reset.disabled = false;
    }
    );
    reset.addEventListener('click', function (){
        clearInterval(timer);
        stop.disabled = true;
        reset.disabled = true;
        start.disabled = false;
        millisecond.innerHTML = "00";
        second.innerHTML = "00";
        minute.innerHTML = 0;
    }
    );
}
start.addEventListener('click', interval);
start.addEventListener('click', function (){
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
});