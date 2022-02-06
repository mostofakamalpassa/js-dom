console.log(document);


const students = {
    name:'kamal',
    age:55,
    height:60
};


const h3Elements = document.getElementsByTagName('h3');


for(let h3 of h3Elements){
    //console.log(h3.innerText);
}

const secondTitle = document.getElementById('second-title');

secondTitle.style.background ='red';

const thirdTitle = document.getElementById('thrid-title');
thirdTitle.innerText = 'thid title change by Js';
thirdTitle.style.fontSize = '50px';
thirdTitle.style.color = 'blue';
thirdTitle.style.textTransform = 'uppercase';