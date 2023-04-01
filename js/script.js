let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg)`
        minuteArrow.style = `transform: rotate(${minutes}deg)`
        hourArrow.style = `transform: rotate(${hours}deg)`
        
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        setTimeout(() => clock(),1000)
}
clock()

// Рекурсия это когда функция вызывает саму себя
// setTimeout() - создает нам задержку, время задержки указывается в миллисекундах

let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', () => {
        removeActive()
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

function removeActive() {
    for(let x = 0; x < links.length;x++) {
        links[x].classList.remove('active')
        tabs[x].classList.remove('active')
    }
}
 //-----------------------------------------------------------
let secondTime = document.querySelector('.stopwatch__seconds'),
 minuteTime = document.querySelector('.stopwatch__minutes'),
 hoursTime = document.querySelector('.stopwatch__hours'),
 timerBtn = document.querySelector('.stopwatch__btn'),
 timerspan = document.querySelector('.tabsLink__span');
timerBtn.addEventListener('click', function(){
    if(timerBtn.innerHTML == 'start') {
        timerBtn.innerHTML = 'stop'
        let n = 0
        setTimeout(() => {timer(this, n)
        },1000 );
        timerBtn.classList.add('active_clear')
    }else if(timerBtn.innerHTML == 'stop') {
        timerBtn.innerHTML = 'clear'
    }else{
                timerBtn.innerHTML = 'start'
        timerBtn.classList.remove('active')
        secondTime.innerHTML='0';
        minuteTime.innerHTML='0';
        hoursTime.innerHTML='0';
        timerspan.classList.remove('active_clear')
    }
})
function timer(btn, n){
    if(timerBtn.innerHTML=='stop'){
    if(n==59){
        n=0;
        secondTime.innerHTML=n;
        if (minuteTime.innerHTML == 59) {
            minuteTime.innerHTML = 0;
            hoursTime.innerHTML++;
        }else{
            minuteTime.innerHTML++;
        }
    }else{
        n++;
        secondTime.innerHTML = n;
    }
    setTimeout(() => {timer
        (btn, n)
    }, 1000);
    }
}


// function stopWatch(btn, i) {
// if (btnTime.innerHTML == 'stop') {
//     if (i == 59) {
//         i = 0;
//         secTime.innerHTML = i;
//         if (minTime.innerHTML == 59) {
//             minTime.innerHTML = 0;
//             hourTime.innerHTML++;
//         }else{
//             minTime.innerHTML++;
//         }
//     }else{
//         i++;
//         secTime.innerHTML = i;
//     }
//     setTimeout(() => {
//         stopWatch(btn, i)
//     }, 1000);
// }
// }


