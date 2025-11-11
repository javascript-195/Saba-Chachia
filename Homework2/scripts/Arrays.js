let names = ["Nika", "Saba", "Gio", "Misho"];
console.log(Array.isArray(names));
console.log(names[0]);
console.log(names.at(-1));

let  colors= ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let num = ["th","st","nd","rd"];
console.log("1"+num[1]+" choice is "+colors[0]);
console.log("2"+num[2]+" choice is "+colors[1]);
console.log("3"+num.at(-1)+" choice is "+colors[2]);

let student=[
   {
     firstName: "Mate",
    lastName: "Gotua",
    age: 16,
    hasGf: false,
   }
];
student[0].address="Miami,Florida";
delete student[0].lastName; 
student[0].hasGf= true;
console.log(student);
