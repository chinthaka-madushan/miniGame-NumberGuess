document.getElementById("rowguess").style.display = "none";
document.getElementById("rowstart").style.display;

let round = 0;
let guessNumber = 1;
let randomNumber = Math.floor(Math.random()*10+1);

function btnStart(){
    document.getElementById("rowstart").style.display = "none";
    document.getElementById("rowguess").style.display = "block";
    

}
function Btnclick(guessNum){  
    document.getElementById("c-num").innerText=guessNum;
    guessNumber = guessNum;
    round++;
    resalt();
    if(round > 2){
        disablebtn();
    }
}
function disablebtn(){
    let dis = document.getElementsByClassName("btn-group");
    for(let x = 0; x<dis.length ; x++){
        dis[x].disabled = true;
    }
}
function resalt(){
    if(guessNumber == randomNumber){
        document.body.style.backgroundColor='#2ECC71';
        document.getElementById("lblhint").innerText = "💎💎💎 WInner 💎💎💎 NUMBER MATCHING"; 
        rockf();
    }else{
       
        switch(round){
            case 1 : 
                document.body.style.backgroundColor='#f8ebe9'; 
                document.getElementById("lblhint").innerText = "😆OOH ! WRONG NUMBER you have a TWO chanse...❗️";
                break;
            case 2 : 
                document.body.style.backgroundColor='#e5afaa';
                document.getElementById("lblhint").innerText = "😅OOH ! WRONG NUMBER you have a ONE chanse...❗️";
                break;
            case 3 : 
                document.body.style.backgroundColor='#c0392b';
                document.getElementById("lblhint").innerText = "😂OOH ! WRONG NUMBER  🔴game over🔴"; 
                rockf();
                break;
        }      
    }
}
function rockf(){
    document.getElementById("ran-num").innerText = randomNumber;
    document.getElementById("rockA").style.marginLeft = "190px";

}
function re(){
    document.getElementById("rowstart").style.display = "none";
    document.getElementById("rowguess").style.display = "block";
}