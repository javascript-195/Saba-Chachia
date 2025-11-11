function squared(number){
    console.log(number*number);
}
squared(5);

function CtoF(celsius){
    console.log((celsius*(9/5))+32);
}
CtoF(1);

function num(number, firstnum, lastnum){
    if(firstnum<=number && lastnum>=number){
        console.log("it is between the given numbers")
    }
    else{
        console.log("it is NOT between the given numbers")
    }
}
num(3, 1, 2);

function years(year){
    if(year%4===0){
        console.log("this is a leap year")
    }
    else{
        console.log("this is NOT a leap year")
    }
}
years(2028);


let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let action=prompt("Enter action: ");
function calc(num1,num2,action){
    if(action!=="+"&&action!=="-"&&action!=="*"&&action!=="/"){
        console.log("invalid action")
    }
    else if(action==="+"){
        console.log(num1+num2)
    }
     else if(action==="-"){
        console.log(num1-num2)
    }
     else if(action==="*"){
        console.log(num1*num2)
    }
     else if(action==="/"){
        console.log(num1/num2)
    }
}
calc(4,2,"+");
