//variables here...
var min = document.querySelector('.min')
var sec = document.querySelector('.sec')
var play_button = document.querySelector('.pause_play_button')
var play_button_img = play_button.querySelector('img')
var reset_button = document.querySelector('.reset_button')
var time= 1000
var timer
var bool = false
var buzzer = new Audio('/audio/buzzer.wav')
var countDown = new Audio('/audio/female_countdown.wav')

reset_button.onclick=function(){
    var mins = Number(min.textContent) 
    var secs = Number(sec.textContent)
    clearInterval(timer)
    mins=0
    secs=0

    if(bool=!bool){
        play_button_img.setAttribute('src','/images/play.png')
        
    }else{
        play_button_img.setAttribute('src','/images/pause.png')
        
    }

    if(secs < 10){
        sec.textContent = "0"+secs
    }else{
        sec.textContent = secs
    }

    if(mins < 10){
        min.textContent = "0"+mins
    }else{
        min.textContent = mins
    }
    
}


bool=!bool;
function playTimer(){
    
    

    if(bool=!bool){
        play_button_img.setAttribute('src','/images/play.png')
        clearInterval(timer)
    }else{
        play_button_img.setAttribute('src','/images/pause.png')
        startTimer()
    }

}

//Timer Function codes here...
function startTimer(){
    var mins = Number(min.textContent) 
    var secs
    if(sec.textContent == "00" || Number(sec.textContent) > 60){
        secs=60

        if(mins >0){
            mins--
        }

        timer = setInterval(function(){
       
            secs--

            if(secs==0){
                if(mins==0){
                    buzzer.play()
                    if(bool=!bool){
                        play_button_img.setAttribute('src','/images/play.png')
                        
                    }else{
                        play_button_img.setAttribute('src','/images/pause.png')
                        
                    }
                }
                
            }
            
            if(secs == -1){
                secs=59

                if(mins==0){
                    buzzer.play()
                    clearInterval(timer)
                    secs=0
                    
                }else{
                    mins--
                    secs=59
                }
            }
            // if(secs == 0 && mins != 0){
            //     mins--
            // }
    
            if(secs < 10){
                sec.textContent = "0"+secs
            }else{
                sec.textContent = secs
            }

            if(mins < 10){
                min.textContent = "0"+mins
            }else{
                min.textContent = mins
            }
    
            
           
          
          
           console.log(secs) 
        },time)

    }else{
        secs = Number(sec.textContent)

        timer = setInterval(function(){
       
            secs--

            if(secs==0){
                if(mins==0){
                    buzzer.play()
                    if(bool=!bool){
                        play_button_img.setAttribute('src','/images/play.png')
                        
                    }else{
                        play_button_img.setAttribute('src','/images/pause.png')
                        
                    }
                }
                
            }

            if(secs==10){
                countDown.play()
            }

            if(secs==-1){

                if(mins==0 ){
                   
                    clearInterval(timer)
                    secs=0
                    
                }else{
                    mins--
                    secs=59
                }
                

            }

           
    
            if(secs < 10){
                sec.textContent = "0"+secs
            }else{
                sec.textContent = secs
            }

            if(mins < 10){
                min.textContent = "0"+mins
            }else{
                min.textContent = mins
            }
    
            // if(secs == 0 && mins==0 ){
            //     clearInterval(timer)
            //     alert('Times Up')
            // }
           
          
          
           console.log(secs) 
        },time)
    }
  
}



//EventListeners here...

play_button.addEventListener('click',playTimer)
sec.addEventListener('keypress', function(e){
   
    if(e.target.innerText.length <= 1){
       return
    }else{
        e.preventDefault()
    }
    console.log(e.target.innerText)
   

})