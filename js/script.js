/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var totalScore = living(q1Result) + rather(q2Result) + personality(q3Result) + food(q4Result) + sociality(q5Result);

var finalAnswer = final(totalScore, name)
alert(finalAnswer)
    });


 function final(totalScore, name){
    if(totalScore > 30 && totalScore < 40){
        return name + ", you're a Wolf"
    }
    
    else if(totalScore > 40 && totalScore < 50){
        return name + ", you're a Lion"
    }
    
    else if(totalScore > 20 && totalScore < 30){
        return name + ", you're a Tiger"
    }
    else if(totalScore < 20){
        return name + ", you're a Shark"
    }
}


function living(name){
    if(name === "Savannah" || name === "savannah"){
        return 10 ;
    }
    else if(name === "Coast Line" || name === "coast line"){
        return 7 ;
    }
    else if(name === "Forest" || name === "forest"){
        return 4;
    }
    else if(name === "Jungle" || name === "jungle"){
        return 4 ;
    }
    else{
        return 0;
    }
    
}


function rather(action){
    if(action === "lay around" || action === "Lay around" || action ===  "Lay Around"){
        return 10;
    }
    else if(action === "swim" || action ===  "Swim"){
        return 7 ;
    }
    else if(action === "Play" || action ===  "play"){
        return 5;
    }
    else if(action === "Excercise" || action ===  "excercise"){
        return 5 ;
    }
    else{
        return 0;
    }
}


function personality(pick){
    if(pick === "Loyal" || pick === "loyal"){
        return 5
    }
    else if(pick === "loner" || pick === "Loner"){
        return 5 
    }
    else if(pick === "both" || pick === "Both"){
        return 10 
    }
    else{
        return 0;
    }
    
}

function sociality(chose){
    if(chose === "Friendly" || chose === "friendly"){
        return 5
    }
    else if(chose === "Anti-social" || chose === "antisocial" || chose === "anti-social"){
        return 5
    }
    else if(chose === "Very social" || chose === "very social" || chose === "social"){
        return 10
    }
    else if(chose === "All of the Above" || chose === "all of the above"){
        return 13
    }
    else{
        return 0
    }
}

function food(preference){
    if(preference === "Chicken" || preference === "chicken"){
        return 5
    }
    else if(preference === "Fish" || preference === "fish"){
        return 5
    }
    else if(preference === "Meat" || preference === "meat"){
        return 5
    }
    else{
        return 0
    }
}

});