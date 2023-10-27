var timer = 6 ;
var score = 0;
var hitrn = 0;
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);    
    document.querySelector('#hitVal').textContent = hitrn;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over!</h1>`;
        }
    },1000)
    
}

function increaseScore(){
    score +=10;
    document.querySelector('#scoreVal').textContent = score;
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 119; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

document.querySelector('.pbtm').addEventListener('click',function (dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
}
})
runTimer();
makeBubble();
getNewHit();
