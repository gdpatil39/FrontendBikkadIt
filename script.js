const a='define a constant';

let b='this is scoped variable';

var c='this is global variable assigment that can be changed at any states irrespected of scope  ';



console.log(a);
console.log(b);
console.log(c);

function Change(){
document.getElementById('name1').innerText='Dotnet'
}
function Change2(){
    document.getElementById('name1').innerText='Java'
  }

function addition(){
    const valInput1 =document.getElementById('input1').value;
    const valInput2 =document.getElementById('input2').value;

    let valInput3=parseInt(valInput1)+parseInt(valInput2);

    document.getElementById('output1').value=valInput3;
}
function subtraction(){
    const valInput1 =document.getElementById('input1').value;
    const valInput2 =document.getElementById('input2').value;

    let valInput3=valInput1-valInput2;

    document.getElementById('output1').value=valInput3;
}
function Multipilcation(){
    const valInput1 =document.getElementById('input1').value;
    const valInput2 =document.getElementById('input2').value;

    let valInput3=valInput1*valInput2;

    document.getElementById('output1').value=valInput3;
}
function Division(){
    const valInput1 =document.getElementById('input1').value;
    const valInput2 =document.getElementById('input2').value;

    let valInput3=valInput1/valInput2;

    document.getElementById('output1').value=valInput3;
}

let otherway=()=>{
   
}


