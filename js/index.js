var score_container = document.querySelector('.score')
var score = 0
var first_team_img = document.querySelector(".accept_icon")
var first_team = document.querySelector('.first_team')

//this is how you write a function
function scoreUp(){
    score++
    score_container.innerHTML= score;
    
}

function scoreDown(){

    if(score>0){
        score--
    }else{
        score=0
    }
    
    
    score_container.innerHTML= score;
    
}

var foul= document.querySelector(".fouls")
var no_fouls = 0;


function whiteFoulsUp() {
   
    if(no_fouls<5){
        no_fouls++;
        foul.innerHTML =no_fouls
    }else{
        foul.innerHTML="5+"
    }

 
    
}

function whiteFoulsDown() {
    no_fouls--
    if(no_fouls<0){
        no_fouls=0
    }
    foul.innerHTML=no_fouls
    
    
}

function renameFirstTeam(){
    first_team_img.style.display = "inline-block"
}

function acceptRename(){
    
    first_team_img.style.display ="none"

}



first_team.addEventListener('click',renameFirstTeam)
first_team_img.addEventListener('click',acceptRename)











