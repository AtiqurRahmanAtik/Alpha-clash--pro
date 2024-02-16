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

    setBackgroudColor(alphabet);

   
}



function play(){
   hinddenSection('home');
   
    showSection('play');

    startGame();

}


//add evenlistner 

document.addEventListener('keyup',function(event){

   let  PressKe = event.key;
   console.log(PressKe);


   let keyIs = document.getElementById('randonAlpha');

 

   let mainKey =  keyIs.innerHTML;
   let upperKey = mainKey.toLowerCase();

//    console.log(PressKe, upperKey);


  if(PressKe === upperKey){

    // console.log('you hav press : ',upperKey);

    const life = document.getElementById('score');
    
    let lifeScore = life.innerHTML;
    
    let score = parseInt(lifeScore);
    let newScore = score + 1;
    
    life.innerHTML = newScore;

    removeBackgroudColor(upperKey);
    startGame();
    
  }
  else{
    console.log('lose');

    //life decrement 
    const life = document.getElementById('life');

    let lifeScore = life.innerHTML ;
    
    let lfScore = parseInt(lifeScore);

    let decriScore = lfScore - 1;

    let finalDcriScore =  life.innerHTML = decriScore;

 


  }
   
})

