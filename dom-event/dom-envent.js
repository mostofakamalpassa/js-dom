function redColor(){

    return document.body.style.background = 'red';
}


const yellowButton = document.getElementById('yellow-button');

// yellowButton.addEventListener('click', function(e){

//     document.body.style.background = 'yellow';
// })

yellowButton.onclick = yellowBg;
function yellowBg(){
    document.body.style.background = 'yellow';
}

const greenButton = document.getElementById('green-button');

greenButton.onclick = function(){
    document.body.style.background = 'green';
}


document.getElementById('goolden-button').addEventListener('click',goldenBg);

function goldenBg(){
    document.body.style.background = 'goldenrod';
}