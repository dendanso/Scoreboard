var score_container = document.querySelector('.score')
var score = 0
var accept_icon = document.querySelector(".accept_icon")
var accept_icon_black = document.querySelector('.accept_icon_black')
var first_team = document.querySelector('.first_team')
var second_team = document.querySelector('.second_team')
var key = "teamA"
var foul= document.querySelector(".fouls")
var no_fouls = 0;
var blackSide = document.querySelector('.black_side')


//this is how you write a function
function scoreUp(){
    score++
    score_container.innerHTML= score;
    
    if(score > 99){
        score_container.style.fontSize = "clamp(.5rem,38vw,50rem)"
        foul.style.fontSize="5rem"
    }

    gsap.fromTo(score_container,{
        y:10
    },{
        y:0,
        duration:.5
    })
    
}

function scoreDown(){

    if(score>0){
        score--
    }else{
        score=0
    }
    
    if(score<100){
        score_container.style.fontSize = "clamp(.5rem,50vw,55rem)"
        foul.style.fontSize="6rem" 
    }
    
    score_container.innerHTML= score;

    gsap.fromTo(score_container,{
        y:0
    },{
        y:10,
        duration:.5
    })
    
}

//Reduce font size if score becomes 3 digits


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

function renameSecondTeam(){
    accept_icon_black.style.display = "block"
}

function acceptRenameTeamB(){
    accept_icon_black.style.display="none"
}




//Session Storage codes here...

var team_name = sessionStorage.getItem(key)


if(team_name != null){
   first_team.textContent = team_name
}




//EventListeners methods here...

first_team.addEventListener('click',renameFirstTeam)
accept_icon.addEventListener('click',acceptRename)
second_team.addEventListener('click',renameSecondTeam)
accept_icon_black.addEventListener('click',acceptRenameTeamB)

//touch Events

let touchstartY = 0
let touchendY = 0

function changeScore(){
    if(touchendY < touchstartY){
        // alert('you are swiping up')

        score++
        score_container.innerHTML= score;
        
        if(score > 99){
            score_container.style.fontSize = "clamp(.5rem,38vw,50rem)"
            foul.style.fontSize="5rem"
        }

        gsap.fromTo(score_container,{
            y:10
        },{
            y:0,
            duration:.5
        })
        
    }

    if(touchendY> touchstartY){
        // alert('you are swiping down')

        if(score>0){
            score--
        }else{
            score=0
        }
        
        if(score<100){
            score_container.style.fontSize = "clamp(.5rem,60vw,58rem)"
            foul.style.fontSize="6rem" 
        }
        
        score_container.innerHTML= score;
    
        gsap.fromTo(score_container,{
            y:0
        },{
            y:10,
            duration:.5
        })

       
    }
}

blackSide.addEventListener('touchstart', function(e){
    touchstartY = e.changedTouches[0].screenY

    
    
})

blackSide.addEventListener('touchend', function(e){
    
    touchendY = e.changedTouches[0].screenY
    changeScore()
})







