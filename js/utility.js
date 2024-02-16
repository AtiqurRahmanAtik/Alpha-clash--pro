function hinddenSection(elementId){

    //home section
    let hidden = document.getElementById(elementId);
    
    hidden.classList.add('hidden');
}

//play ground section

function showSection(playId){

    let show = document.getElementById(playId);
    show.classList.remove('hidden');
}


//alphabet random  function 

function getAlphabet(){

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let arr = alphabet.split("");
     // console.log(arr);
    let random = Math.random(arr) * 25 ;
   
    const rounds = Math.round(random);
    // console.log(rounds);

    let alph = arr[rounds];

    return alph;

}


//set background color all id 


function setBackgroudColor( elementId){

    let element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
    
}