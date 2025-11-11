
// 1
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let names = ["Saba", "Gio","Luka", "Shota","Nika","Gurami","Omari","Lazare","Mate","Irakli"];
for(let i=2;i<names.length;){
    // console.log(names[i]);
    i=i+3;
}

// 2
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

for(let i=10;i>0;i--){
    // console.log(i);
}

// 3
// მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
let names1=  ['John', 'Nick', 'Mary','Bob', 'Sue', 'Ann'];
for(let i=0;i<names1.length;i++){
    if(names1[i]==='Bob'){
        names1.splice(i,1);
    }
}
// console.log(names1);

// 4
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function fun(number,power){
    let result=1;
    for(let i=0;i<power;i++){
        result=result*number;
    }
    console.log(result);
}
// fun(5,3);

// 5
// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ. 
// 1
//  2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.

function fizzbuzz(){
    for(let i=1;i<=100;i++){
         if(i%5===0&&i%3===0){
            console.log(i + " FizzBuzz");
        }
       else if(i%3===0){
            console.log(i + " Fizz");
        }
        else if(i%5===0){
            console.log(i + " Buzz");
        }
         
        else{
            console.log(i);
        }
    }
}
// fizzbuzz();

// 6
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

function factorialCalc(number){
    let result=1;
    for(let i=1; i<=number;i++){
        result=result*i;
    }
    console.log (result);
}
// factorialCalc(5);

// 7
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function uppercase(str){
   return str[0].toUpperCase()+str.slice(1);
}
// uppercase("javascript");

// 8
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
function blankStringChecker(str) {
  if (str.trim() === "") {
    return "this string is blank";
  } else {
    return "this string is not blank";
  }
}
//  blankStringChecker("");

// 9
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(str) {
  console.log(str.split(" "));
}
// stringToArray("Hello World!");

// 10
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
function safeemail(email){
    let index=email.indexOf("@");
    let index1=email.indexOf(".");
    let result = "";
    for (let i = 0; i < email.length; i++) {
    if (i>index1&&i<index) {
      result =result+".";
    } else {
      result =result+email[i];
    }
  }
  console.log(result);
}
// safeemail("beqa.beqauri@gmail.com");

// 11
// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
function findLongestWord(str) {
const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  console.log(longest);
}
// findLongestWord("I just passed the exam.");

// 12
// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით
const calculator = {
  num1: 10,
  num2: 5,

  add: function() {
    return this.num1 + this.num2;
  },

  substract: function() {
    return this.num1 - this.num2;
  },

  multiply: function() {
    return this.num1 * this.num2;
  },

  divide: function() {
    if (this.num2 === 0) {
      return "Division by zero error";
    }
    return this.num1 / this.num2;
  }
};

console.log("Add:", calculator.add());           
console.log("Substract:", calculator.substract()); 
console.log("Multiply:", calculator.multiply());   
console.log("Divide:", calculator.divide()); 