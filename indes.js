var whiteScoreup = document.querySelector("whitescoreUp")
var whiteScoreDown = document.querySelector("whitescoreDown")
var score = 0
var score_text = document.querySelector('.score')

function scoreUp(){
        score++
        score_text.innerHTML = score
}
function scoreDown(){
        score--

}