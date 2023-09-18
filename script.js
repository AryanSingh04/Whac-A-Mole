var moleNum,molePipe,plantNum,plantPipe, score=document.getElementById("score").textContent,mole,pipe
var tempp=setInterval(setplant,1000)
var temp=setInterval(setmole,1000)
function setGame(){
    pipe();

}
 setGame()
function pipe(){
    for(let i=1;i<=9;i++){
        // console.log(i)
let pipe=document.createElement('div');
pipe.classList.add("pipe")
pipe.setAttribute("id",i)
const board=document.querySelector(".board")
board.appendChild(pipe)
    }
}

function setmole(){
    if(molePipe){
        molePipe.innerHTML=" ";
    }
    moleNum=Math.ceil((Math.random())*9);
 const moleImg=document.createElement("img");
moleImg.setAttribute("id","mole")
       moleImg.src="/mole/monty-mole.png"; 
moleImg.addEventListener("click",function(){
   score=Number(score)+5
   document.getElementById("score").textContent= score
})
     molePipe=document.getElementById(moleNum)
         if(molePipe==plantPipe){
        return
     }
   molePipe.appendChild(moleImg)
}

function setplant(){
if(plantPipe){
    plantPipe.innerHTML=""
}
  plantNum=Math.ceil((Math.random())*9);
  const plantImg=document.createElement("img");
 plantImg.setAttribute("id","plant")
    plantImg.src="/mole/piranha-plant.png"
    plantImg.addEventListener("click",function(){
        // in case of another possiblity
        // score = Number (score)-2
        // document.getElementById("score").textContent= score;
        document.getElementById("score").textContent=`GAME OVER:${score}`;
        clearInterval(temp)
        clearInterval(tempp)
        temp=0;
        tempp=0;
        document.getElementById("over").classList.add("active");
    })
    plantPipe=document.getElementById(plantNum)
    plantPipe.appendChild(plantImg)
    
}

function load(){
    let load = document.querySelector(".loader");
    let container = document.querySelector(".container");
    load.style.display="none";
    container.style.display="flex"
}
document.getElementById("restart").addEventListener("click",function(){
    document.getElementById("over").classList.remove("active");
    score=0
    document.getElementById("score").textContent=`${score}`
     tempp=setInterval(setplant,1000)
     temp=setInterval(setmole,1000)
})
