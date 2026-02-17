const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const Output=document.getElementById("Output");
let result=0;

console.log("num1:",num1.value);
console.log("num2:",num2.value);

const add=()=>{
    result=parseInt(num1.value)+parseInt(num2.value);
    Output.value=result;
}

const Sub=()=>{
    result=parseInt(num1.value)-parseInt(num2.value);
    Output.value=result;
}

const Mul=()=>{
    result=parseInt(num1.value)*parseInt(num2.value);
    Output.value=result;
}

const Div=()=>{
    if(parseInt(num2.value) === 0){
        Output.value="Infinity";   
    } else {
        result=parseInt(num1.value)/parseInt(num2.value);
        Output.value=result;
    }
}

