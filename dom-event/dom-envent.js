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