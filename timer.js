const startButton = document.querySelector('[data-action = "start"]');
const stopButton  = document.querySelector('[data-action =  "stop"]');  
const resetButton = document.querySelector('[data-action = "reset"]') ;
const minutes     = document.querySelector('.minutes');
const seconds     = document.querySelector('.seconds');
let audio         = document.querySelector('.audio');
let timerTime     = 0;
let interval;
let isRunning =  false;




function startTimer() {
    if(isRunning) return

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    isRunning  = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    noAnimate();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function animate(){
    seconds.classList.add("infinite", "bounce"); 
}

function noAnimate(){
    seconds.classList.remove("infinite", "bounce"); 
}

function incrementTimer() {
    animate();
    timerTime++;
    
    const numOfMinutes = Math.floor( timerTime / 60 ); 
    const numOfSeconds = timerTime % 60;
        
    minutes.innerText = pad( numOfMinutes );
    seconds.innerText = pad( timerTime );
}

function pad(number) {
    return number < 10 ? '0'  + number : number;
}


 startButton.addEventListener('click', startTimer);
 stopButton.addEventListener('click', stopTimer);
 resetButton.addEventListener('click', resetTimer);
 bottonGo.addEventListener('click', startTimer);
 