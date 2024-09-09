let guessNumber;
let ro = 0;
function guessbtn(num){
    guessNumber = num;
    document.getElementById("lblGuess").innerText = num;
}
function ranNum(){
    ro++;
    if(ro<4){
        let randomNumber =Math.floor(Math.random()*10+1);
        document.getElementById("ranNumw").innerText = randomNumber;
        document.getElementById("ranNumwi").innerText = randomNumber;
        if(guessNumber == randomNumber){
            document.getElementById("ranNum").innerText = "Your Win";
        }else{
            document.getElementById("ranNum").innerText = "ooooH  !";
        }
    }else{
        document.getElementById("liveAlertPlaceholder").innerText = "time out !";
        
    }
    
}