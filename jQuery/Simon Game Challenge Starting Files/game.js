// $(document).ready(function(){
//     nextSequence();
// });

var buttonColours = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var h1Element = $("#level-title");
var bodyElement = $('body');

$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).on('keypress',function(){
    if(level == 0){
       nextSequence(); 
    }
});

function nextSequence(){
    h1Element.text(`Level ${level}`)
    level++;
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var chosenButton = $(`#${randomChosenColour}`);
    chosenButton.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
}

function animatePress(currentColour){
    var button = $(`#${currentColour}`);
    button.addClass('pressed');
    setTimeout(function(){
        button.removeClass('pressed');
    },100);
}

function checkAnswer(currentLevel){
    var isRight = gamePattern[currentLevel]===userClickedPattern[currentLevel];
    if(isRight){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            },1000);
        }
    }else{
        playSound('wrong');
        bodyElement.addClass('game-over');
        setTimeout(function(){
            bodyElement.removeClass('game-over');
            h1Element.text("Game Over, Press Any Key to Restart");
            startOver();
        },200);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = []
}