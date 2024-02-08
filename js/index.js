var score_container = document.querySelector('.score')
var score = 0
var accept_icon = document.querySelector(".accept_icon")
var first_team = document.querySelector('.first_team')
var key = "teamA"


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
   
    if(no_fouls<6){
        no_fouls++;
        foul.innerHTML =no_fouls

        if(no_fouls == 6){
            foul.innerHTML="5+"
        }
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
    accept_icon.style.display="block"
}

function acceptRename(){
    accept_icon.style.display="none"
    var teamA = first_team.textContent
    sessionStorage.setItem(key,teamA)

    

}


first_team.addEventListener('click',renameFirstTeam)
accept_icon.addEventListener('click',acceptRename)

var team_name = sessionStorage.getItem(key)


if(team_name != null){
   first_team.textContent = team_name
}


console.log(first_team.textContent)









