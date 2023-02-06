let [computer_score,user_score]=[0,0];
let displaywon=document.getElementById("displaywon");
let displaylose=document.getElementById("displaylose");

let result_ref=document.getElementById("result");
let choices_object={
    'rock':{
        'rock':'draw',
        'scissor':'win',
        'paper':'lose'
    },
    'scissor':{
        'rock':'lose',
        'scissor':'draw',
        'paper':'win'
    },
    'paper':{
        'rock':'win',
        'scissor':'lose',
        'paper':'draw'
    }
}



function checker(input){
    var choices=["rock","paper","scissor"];
    var num=Math.floor(Math.random()*3);
    dis_c="";
    dis_u="";

    if(choices[num]=="rock"){
        dis_c=`<h3>Computer choose&nbsp;<p class=" dis-c fas fa-hand-rock"></p></h3>` 
    }
    else if(choices[num]=="paper"){
        dis_c=`<h3>Computer choose&nbsp;<p class=" dis-c fas fa-hand-paper"></p></h3>` 
    }
    else{
        dis_c=`<h3 >Computer choose&nbsp;<p class=" dis-c fas fa-hand-scissors"></p></h3>` 
    }

    if(input=='rock'){
        dis_u=`<h3 >You choose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=" dis-u fas fa-hand-rock"></span></h3>`
    }
    else if(input=='paper'){
        dis_u=`<h3 >You choose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=" dis-u fas fa-hand-paper"></span></h3>`
    }
    else{
        dis_u=`<h3 >You choose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=" dis-u fas fa-hand-scissors"></span></h3>`
    }



    document.getElementById("comp_choice").innerHTML=dis_c;

    document.getElementById("user_choice").innerHTML=dis_u;

    let computer_choice=choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText="background-color:violet;";
            result_ref.innerHTML="YOU LEAD";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText="background-color:red;";
            result_ref.innerHTML="COMPUTER LEAD";
            computer_score++;
            break;
        default:
            result_ref.style.cssText="background-color:yellow;";
            result_ref.innerHTML="DRAW";
            break;   
    }
    if(computer_score==10||user_score==10){
        if(user_score==10){
            displaywon.style.cssText="display:block";
        }
        if(computer_score==10){
            displaylose.style.cssText="display:block";
        }
        user_score=0;
        computer_score=0;
        
    }

    document.getElementById("computer_score").innerHTML=computer_score;
    document.getElementById("user_score").innerHTML=user_score;
}
function restart(){
    displaywon.style.cssText="display:none";
    displaylose.style.cssText="display:none";
    // document.getElementById("details").remove();
    window.location.reload();

}
