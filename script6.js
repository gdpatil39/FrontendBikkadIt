
let addNewRow=()=>{
    // const inputRow='<input type="text" name="newRow" id="newRow" value="test" readonly/><br>';
    // const divSelector=document.getElementsByClassName('test');
    // console.log(divSelector);
    // divSelector.innerHtml=inputRow;

   

    const inputRow='<input type="text" name="newRow" id="newRow" value="test" readonly/><br>';
    const divSelector=document.getElementsByClassName('test');
    console.log(divSelector);
    divSelector[0].innerHTML=inputRow;
   
}