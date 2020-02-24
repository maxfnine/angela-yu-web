//MY solution
// var player1_value = Math.floor(Math.random()*6)+1
// var player2_value = Math.floor(Math.random()*6)+1

// document.querySelector('.img1').setAttribute('src',`images/dice${player1_value}.png`);
// document.querySelector('.img2').setAttribute('src',`images/dice${player2_value}.png`);

// var h1Element = document.querySelector('h1');

// if(player1_value>player2_value){
//     h1Element.innerText='Player 1 wins!';
// }else if(player1_value<player2_value){
//     h1Element.innerText='Player 2 wins!';
// }else{
//     h1Element.innerText='Draw';
// }

//Instructors solution
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = `dice${randomNumber1}.png`;
var randomImageSource =  `images/${randomDiceImage}`;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = `dice${randomNumber2}.png`;
var randomImageSource2 =  `images/${randomDiceImage2}`;

document.querySelectorAll('img')[1].setAttribute('src',randomImageSource2);

if(randomNumber1 >randomNumber2){
    document.querySelector('h1').innerHTML='🚩 Player 1 Wins!';
} else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='Player 2 Wins! 🚩';
}else{
    document.querySelector('h1').innerHTML='Draw!';
}

