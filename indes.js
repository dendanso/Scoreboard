var whiteScoreup = document.querySelector(".whitescoreUp")
var whiteScoreDown = document.querySelector(".whitescoreDown")
var score = 0
var score_text = document.querySelector('.score')
var done_icon= document.querySelector(".done_icon")
var firstteam= document.querySelector(".firstteam")
var key= "teamA"
var doneblack_icon = document.querySelector(".doneblack_icon")
var secondteam=  document.querySelector(".secondteam")
var key1="teamB"
function scoreUp(){
        score++
        score_text.innerHTML = score
}
function scoreDown(){
        score--
        if(score<0){
         score=0
        }

        score_text.innerHTML = score

}

var fouls = 0
var fouls_text = document.querySelector(".fouls")

function foulsup() {
        
        if(fouls<6){
        fouls++
        fouls_text.innerHTML=fouls

             if(fouls == 6){
                fouls_text.innerHTML="5+"
             }
        }
         

        
        
}
function foulsdown() {
        fouls--
        if (fouls<0){
                fouls=0
        }
        fouls_text.innerHTML= fouls
        
}

var bscore = 0
var bscore_text=document.querySelector(".bscore")

function bscoreup(){
        bscore++
        bscore_text.innerHTML = bscore
}
function bscoredown() {
        bscore--
        if(bscore<0){
                bscore=0
        }
        bscore_text.innerHTML=bscore
        
}

 var bfouls = 0
var bfouls_text = document.querySelector(".bfouls")

function bfoulup() {
        
        if(bfouls<6){
                bfouls++
                bfouls_text.innerHTML=bfouls
        
                     if(bfouls == 6){
                        bfouls_text.innerHTML="5+"
                     }
                
        }
        else{
                bfouls_text.innerHTML="5+"
        }
        
        
        
}

function bfouldown() {
        bfouls--
        if(bfouls<0){
                bfouls=0
        }
        bfouls_text.innerHTML= bfouls

        
}
function first_team(){
        done_icon.style.display="block"
}

function  doneicon(){
        done_icon.style.display="none"
        var teamA=firstteam.textContent
        sessionStorage.setItem(key,teamA)
}

firstteam.addEventListener('click',first_team)
done_icon.addEventListener('click',doneicon)


var team_name=sessionStorage.getItem(key)

if (team_name != null){
        firstteam.textContent = team_name
}

function second_team(){
        doneblack_icon.style.display="block"
}
function  doneblackicon(){
        doneblack_icon.style.display="none"
        var teamB=secondteam.textContent
        sessionStorage.setItem(key1,teamB)
}

secondteam.addEventListener('click',second_team)
doneblack_icon.addEventListener('click',doneblackicon)

var team_name=sessionStorage.getItem(key1)

if (team_name != null){
        secondteam.textContent = team_name
}


