function age(age){
    if(age<18){
        console.log("You don't have the right to vote.");
    }
    else{
        console.log("You have the right to vote.");
    }
}
// age(18);

function  password(password){
     let onlyDigits = true;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char < '0' || char > '9') {
            onlyDigits = false;
            break;
        }
    }
     if (onlyDigits) {
        return "Your password is invalid.";
     }
    else if(password.length < 3){
        return "Your password is invalid.";
    }
    else if(password.length >=3 && password.length <=6 ){
        return "Your password is weak.";
    }
    else if(password.length >=6 && password.length <=8 ){
        return "Your password is accaptable.";
    }
    else if(password.length >=8 && password.length <=16 ){
        return "Your password is strong.";
    }
    
}
// password("1a");

function factorialCalc(number){
    let result=1;
    for(let i=1; i<=number;i++){
        result=result*i;
    }
    return result;
}
// factorialCalc(5);

function uppercase(str){
   return str[0].toUpperCase()+str.slice(1);
}
// uppercase("javascript");

function blankStringChecker(str) {
  if (str.trim() === "") {
    return "this string is blank";
  } else {
    return "this string is not blank";
  }
}
//  blankStringChecker("");