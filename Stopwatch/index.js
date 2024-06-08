const time = document.getElementById('time')
const play = document.getElementById('play')
const reset = document.getElementById('reset')

let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds
let leadingMinutes
let leadingHours

let timerInterval = null
let status = "stopped"

play.addEventListener('click', function(){
    if(status == "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000)
        status = "running"
        play.src = "https://img.icons8.com/?size=20&id=q0nxNdfpbYVl&format=png&color=000000"
    }
    else{
        window.clearInterval(timerInterval)
        status = "stopped"
        play.src = "https://img.icons8.com/?size=20&id=fjx0LfGCNuZb&format=png&color=000000"
    }
    
})

reset.addEventListener('click', function(){
    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0
    time.innerHTML = "00:00:00"
})

function stopWatch(){
    seconds++
    if(seconds/60 == 1){
        seconds = 0
        minutes++

        if(minutes/60 == 1){
            minutes = 0
            hours++
        }
    }

    if(seconds<10)
        leadingSeconds = 0 + seconds.toString()
    else
        leadingSeconds = seconds

    if(minutes<10)
        leadingMinutes = 0 + minutes.toString()
    else
        leadingMinutes = minutes

    if(hours<10)
        leadingHours = 0 + hours.toString()
    else
        leadingHours = hours

    time.innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}