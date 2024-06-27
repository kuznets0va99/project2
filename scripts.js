var timer=300;
var sc =0;

function createBuble(){for(let i=0; i<406;i++){
  document.querySelector("#panel-bottom").innerHTML+=`<div class="buble"><h3>${Math.floor(Math.random()*10)}</h3></div>`
}}
function getHit(){
  document.querySelector("#hitPoint").textContent=Math.floor(Math.random()*10)
}
function time(){
  let timerw = setInterval(function(){
    if(timer>0){
      timer--
      document.querySelector("#timeInterv").textContent=timer
    }
    else{
      clearInterval(timerw)
      document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over</h1>`
    }
  },1000);
}
document.querySelector("#panel-bottom").addEventListener("click",function(gets){
  let a=document.querySelector("#hitPoint").textContent;
  if(gets.target.textContent==a){
    score();
    getHit();
  }
})
function score(){
sc+=10;
document.querySelector("#counter").textContent=sc;
}

time();
createBuble();
getHit();

