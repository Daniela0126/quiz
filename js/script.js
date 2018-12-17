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

        var totalScore = living(q1Result) + rather(q2Result) + personality(q3Result) + sociality(q5Result) + food(q4Result);
    });

});

function living(name){
    if(name === "Savannah" || "savannah"){
        return 10 ;
    }
    else if(name === "Coast Line" || "coast line"){
        return 7 ;
    }
    else if(name === "Forest" || "forest"){
        return 4;
    }
    else if(name === "Jungle" || "jungle"){
        return 4 ;
    }
    else{
        return 0;
    }
    
}

function rather(action){
    if(action === "lay around" || "Lay around" || "Lay Around"){
        return 10;
    }
    else if(action === "swim" || "Swim"){
        return 7 ;
    }
    else if(action === "Play" || "play"){
        return 5;
    }
    else if(action === "excercise" || "excercise"){
        return 5 ;
    }
}


function personality(pick){
    if(pick === "loyal" || "loyal"){
        return 5
    }
    else if(pick === "loner" || "Loner"){
        return 5 
    }
    else if(pick === "both" || "Both"){
        return 10 
    }
    
}

function sociality(chose){
    if(chose === "Friendly" || "friendly"){
        return 5
    }
    else if(chose === "Anti-social" || "antisocial" || "anti-social"){
        return 5
    }
    else if(chose === "Very social" || "very social" || "social"){
        return 10
    }
    else if(chose === "All of the Above" || "all of the above"){
        return 13
    }
    else{
        return 0
    }
}

function food(preference){
    if(preference === "Chicken" || "chicken"){
        return 5
    }
    else if(preference === "Fish" || "fish"){
        return 5
    }
    else if(preference === "Meat" || "meat"){
        return 5
    }
    else{
        return 0
    }
}
