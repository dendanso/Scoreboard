var play = document.querySelector('.play')
var play_button = play.querySelector('img')
var sec = document.querySelector('#sec')
var bool = true
var time_interval
var time = 1000

bool=!bool;

play.onclick = function(){

    if(bool=!bool){
        //bool is true
        play_button.setAttribute('src','/images/pause.png')
        timer()
    }else{
        //bool is false
        play_button.setAttribute("src","/images/play-button-arrowhead.png")
        clearInterval(time_interval)
    }   
        
    
}

function timer(){
    var set_seconds = Number(sec.textContent)

    
    set_seconds=60;

    time_interval=setInterval(function(){

        if(set_seconds ==0){
            set_seconds--

            if(set_seconds == -1){
                set_seconds=59
            }
        }else{
            set_seconds = Number(sec.textContent)
            set_seconds--

            if(set_seconds == -1){
                set_seconds=59
            }
        }

        
        
       

        if(set_seconds<10){
            sec.textContent = "0"+set_seconds
        }else{
            sec.textContent = set_seconds
        }

        
    },time)
}
