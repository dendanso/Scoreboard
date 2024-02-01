var score_container = document.querySelector('.score')
var score = 0

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