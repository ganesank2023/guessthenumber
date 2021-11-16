'use strict';

let guess = Math.trunc(Math.random()*20);


let score = 20;
let highscore1=0;
let highscore2=0;

const message = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const num = document.querySelector(".guess").value;
    if(num){
    if(score==0){
        document.querySelector('.score').textContent=score ;
        message("Indru poi naalai va...");
        
    }
    else{
    if(num==guess){
        message("crt da solda da paiya");

        document.querySelector('.number').textContent=guess;

        document.querySelector('body').style.backgroundColor='green';

        document.querySelector('.number').style.width='30rem'; 

        highscore1 = score;
        if(highscore1>highscore2){
            highscore2=highscore1;
        }
        document.querySelector('.highscore').textContent=highscore2;

    }

    if(num!==guess){
        document.querySelector('.message').textContent=num>guess?"Too Large": "Too small";
        score--;
        document.querySelector('.score').textContent=score ;
    }
}
    }
    else{
        document.querySelector('.message').textContent="number mothala podu da venna"; 
    }


});



document.querySelector('.again').addEventListener('click',function(){

    score = 20;
    document.querySelector('.score').textContent=score ;
    document.querySelector('.message').textContent="Start guessing...";

    document.querySelector('body').style.backgroundColor='#222';

        document.querySelector('.number').style.width='15rem'; 

        document.querySelector(".guess").value = '';
        document.querySelector('.number').textContent='?';
        guess = Math.trunc(Math.random()*20);



});