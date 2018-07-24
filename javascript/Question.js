
/* Function to Correct the answers given by the user & the color Change. 
 And gives the feed back of for the answer ranges */

function check(){


    total_second=0;
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;

    var ansCorrect=0;
    var pointInc =0;
    var pointDec = 0;
    var total =0;
    var index;
    var i=0;

    answers=["b. Brian Lara" , "a. West Indies" , "d. Muttiah Muralitharan" ,"c. India" , "d. Nuwan Zoysa (Sri Lanka)" ,
                    "b. Michael Holding" , "a. Melbourne, 1877" , "d. Blue" , "b. Brian Lara" , "c. 2019"];


    if(q1=="BrianLara"){
        ansCorrect++;
        pointInc+=2;
        index1 = 0;

    }else{
        pointDec++;
        index1 = 0;

    }
    if(q2=="WestIndies"){
        ansCorrect++;
        pointInc+=2;
        index2 = 1;

    }else{
        pointDec++;
        index2=1;
    }

    if(q3=="MuttiahMuralitharan"){
        ansCorrect++;
        pointInc+=2;
        index3=2;
    }else{
        pointDec++;
        index3=2;

    }

    if(q4=="India"){
        ansCorrect++;
        pointInc+=2;
        index4=3;
    }
    else{
        pointDec++;
        index4=3;

    }

    if(q5=="NuwanZoysa"){
        ansCorrect++;
        pointInc+=2;
        index5=4;
    }else{
        pointDec++;
        index5=4;
        
    }

    if(q6=="Michael Holding"){
        ansCorrect++;
        pointInc+=2;
        index6 = 5;

    }else{
        pointDec++;
        index6 = 5;
    }

    if(q7=="Melbourne"){
        ansCorrect++;
        pointInc+=2;
        index7=6;

    }else{
        pointDec++;
        index7=6;
    }

    if(q8=="blue"){
        ansCorrect++;
        pointInc+=2;
        index8 =7;

    }else{
        pointDec++;
        index8=7;
    }
    if(q9=="BrianLara"){
        ansCorrect++;
        pointInc+=2;
        index9=8;

    }else{
        pointDec++;
        index9 =8;
    }

    if(q10=="2019"){
        ansCorrect++;
        pointInc+=2;
        index10 = 9;

    }else{
        pointDec++;
        index10 =9;
    }

    total = total+ (pointInc-pointDec);


    
    var display =["Great Job" , "That's just Okay" , "You really need to do better"];
    var pictures=["images/greatjob.gif" ,"images/okay.gif" , "images/fail.gif" ];
    var colours =["yellow","pink","red"];
    var score;

    if (ansCorrect<3){
        score=2;
        document.body.style.backgroundColor= "ED8575";  //light red
    }
    if(ansCorrect>=3 && ansCorrect<=6){
        score=1;
        document.body.style.backgroundColor= "C175ED";  //light purple
    }
    if(ansCorrect>=7 && ansCorrect<=10){
        score=0;
        document.body.style.backgroundColor= "B5ED75";  //light green
    }

    
    document.getElementById("after-submit").style.visibility="visible";
    document.getElementById("head").style.visibility="visible";
    document.getElementById("new").style.visibility="visible";
    /* document.getElementsByClassName("grid2").style.display="grid"; */


    document.getElementById("show-messege").innerHTML = display[score];

    document.getElementById("picture").src=pictures[score];

    document.getElementById("new1").innerHTML= "1) "+ answers[index1];
    document.getElementById("new2").innerHTML= "2) "+ answers[index2];
    document.getElementById("new3").innerHTML= "3) "+ answers[index3];
    document.getElementById("new4").innerHTML= "4) "+ answers[index4];
    document.getElementById("new5").innerHTML= "5) "+ answers[index5];
    document.getElementById("new6").innerHTML= "6) "+ answers[index6];
    document.getElementById("new7").innerHTML= "7) "+ answers[index7];
    document.getElementById("new8").innerHTML= "8) "+ answers[index8];
    document.getElementById("new9").innerHTML= "9) "+ answers[index9];
    document.getElementById("new10").innerHTML= "10) "+ answers[index10];

    document.getElementById("number-correct").innerHTML=" You got " + "'" +ansCorrect + "'" + " Correct from all." +"<br> & ";
    document.getElementById("number-incorrect").innerHTML=" You got " + "'"+ pointDec + "'" + " Incorrect from all." ;
    document.getElementById("point1").innerHTML = "Your Total mark  :  " + total;

} // End chech();


// Timer

var total_second = 60*10;
var c_min = parseInt(total_second/60);
var c_sec = parseInt(total_second%60);

function checkTime(){
    document.getElementById("quiz-time-left").innerHTML = "Time Left : " + c_min + " minutes " + c_sec + " Seconds" ; 

    if(total_second <=0){
        check();
    }else{
        total_second=total_second-1;
        c_min = parseInt(total_second/60);
        c_sec = parseInt(total_second%60);
        setTimeout("checkTime()",1000);
    }
}
setTimeout("checkTime()",1000);

    // End chechTimer();