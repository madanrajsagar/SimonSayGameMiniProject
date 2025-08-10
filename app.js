let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;
let h2 = document.querySelector("h2");
let btns=["yellow","green","red","purple"];

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game Started!");
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function (){
        btn.classList.remove("user-flash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randind= Math.floor(Math.random()*3);
    let randcol= btns[randind];
    let randbtn= document.querySelector(`.${randcol}`);
    gameSeq.push(randcol);
    console.log(gameSeq);
  
     btnFlash(randbtn);
}

function checkAns(idx){

    if(gameSeq[idx]===userSeq[idx])
    {   if(gameSeq.length===userSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`game over! your score was <b>${level} </b><br> press any key to start the game!"`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){ 
        document.querySelector("body").style.backgroundColor="white";   
        },200)
        reset();
    }
}

function btnPressed(){
    let btn =this;
    userFlash(btn);
    usercol= btn.getAttribute("id");
    userSeq.push(usercol);

    checkAns(userSeq.length-1);
}

let Allbtns=document.querySelectorAll(".btn");
console.log(Allbtns);
for(btn of Allbtns)
{
    btn.addEventListener("click",btnPressed);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}