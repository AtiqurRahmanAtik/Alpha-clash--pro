// function play(){
//     //home section
//     const home = document.getElementById('home');

//     let hidden = home.classList.add('hidden');
    
//     //play ground section

//     const playGround = document.getElementById('play') ;

//     const anable = playGround.classList.remove('hidden');
// }


// another option using function important


function startGame(){

    let alphabet = getAlphabet();
    // console.log(alphabet);

    let currentAlpha = document.getElementById('randonAlpha');

    let finalAlpha = currentAlpha.innerHTML = alphabet;
    console.log(finalAlpha);

    let bgcolor = setBackgroudColor(alphabet);
}



function play(){
   hinddenSection('home');
   
    showSection('play');

    startGame();

}




