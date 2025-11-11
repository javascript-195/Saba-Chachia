// ამ დავალებაში თქვენ მოგიწევთ პოლიმორფიზმის კონცეფციაზე მუშაობა, რომელიც გულისხმობს არსებული Shape კლასის გაზრდას ახალი shape კლასით.

// დავალების ეტაპები:


// შექმენით ახალი Html და ჯავასკრიპტ ფაილი: შექმენით ახალი Html ფაილი, რომელსაც დაუკავშირებთ ახალ javascript ფაილს მაგ. სახელად shapes.js, სადაც შეინახავთ საკუთარ კოდს. 	
// შექმენით მშობელი კლასი სახელად ‘Shape’: მას უნდა გააჩნდეს შემდეგი ატრიბუტები და მეთოდები:
// ატრიბუტები:
// ‘name’ (სტრიქონი) - “shape”-ის სახელის შესანახად.
// მეთოდები:
// constructor(name) - კონსტრუქტორი რომელიც მოახდენს ‘name’ ატრიბუტის ინიციალიზირებას.
// area() - მეთოდი რომელიც ჯერჯერობით დააბრუნებს რაღაც ესეთ შეტყობინებას:
// “Area calculation not implemented for generic shape.”
// შექმენით შვილობილი კლასები: შექმენით შვილობილი კლასები, თითოეული მათგანი უნდა წარმოადგენდეს განსხვავებულ გეომეტრიულ ფიგურას. შვილობილი კლასი მემკვიდრეობით უნდა იღებდეს მონაცემებს “Shape” კლასიდან და ახდენდეს area() მეთოდის ცვლილებას კონკრეტული ფიგურის ფართობის გამოსათვლელად. ეს ფიგურები შეიძლება იყოს:


// ‘Circle()’ (subclass)
// ატრიბუტები:
// 	‘radius’ - (რიცხვი) - წრის რადიუსის შესანახად.
// მეთოდები:
// 	constructor(name, radius) - კონსტრუქტორი რომელიც გამოიყენებს  ‘name’-სა და ‘radius’-ს.
// ‘area()’ - ზედგადაწერილი (ზედგადაწერა მოგიწევთ რადგან ზევით ეს როდესაც შევქმენით “Area calculation not implemented…” ეწერა და ზუსტად აქ ერთვება პოლიმორფიზმი) მეთოდი, წრის ფართობის საანგარიშოდ, შემდეგი ფორმულის გამოყენებით: ‘Math.PI * radius * radius’
// ‘Rectangle’ (subclass)
// ატრიბუტები:
// 	‘width’ (რიცხვი) მართკუთხედის სიგანის ზომის შესანახად.
// 	‘height’ (რიცხვი) მართკუთხედის სიგრძის ზომის შესანახად.
// მეთოდები:
// 	‘constructor(name, width, height)’ - კონსტრუქტორ მეთოდი რომელიც მოახდენს, ‘name, width, და height’ ატრიბუტების ინიციალიზირებას.
// 	‘area()’ - ზედგადაწერილი მეთოდი, რომელიც გამოითვლის მართკუთხედის ფართობს შემდეგი ფორმულით: ‘width * height’.
// ‘Triangle’ (subclass) 
// ატრიბუტები: 
// 	‘base’ (რიცხვი) - სამკუთხედის ფუძის სიგრძის შესანახად.
// 	‘height’ (რიცხვი) - სამკუთხედის სიმაღლის სიგრძის შესანახად.
// მეთოდები:
// 	‘constructor(name, base, height)’ - კონსტრუქტორ მეთოდი რომელიც ახდენს ‘name’, ‘base’ და ‘height’ ატრიბუტების ინიციალიზირებას.
// 	area() - ზედგადაწერილი მეთოდი სამკუთხედის ფართობის დასაანგარიშებლად შემდეგი ფორმულით ‘(base * height) / 2’.


// 4. გატესტეთ პოლიმორფიზმი: შექმენით თითოეული ფიგურის “shape”-ის ობიექტები: მაგ. let triangle = new Triangle(.......), მოახდინეთ პოლიმორფიზმის დემონსტრირება “area()” მეთოდის გამოძახებით თითოეულ ფიგურაზე იქნება ეს სამკუთხედი, წრე თუ მართკუთხედი და გამოიტანეთ დაანგარიშებული ფიგურის ფართობი პლიუს ამ ფიგურის სახელი ეკრანზე.

// კოდი უნდა იძლეოდეს რაღაც ესეთ შედეგს:

// Area of Circle: 78.53981633974
// 483Area of Rectangle: 24
// Area of Triangle: 6





class Shape {
    constructor(name){
        this.name=name;
    }
    area() {
        return "Method is not implemented yet";
    }
}

class Circle extends Shape {
    constructor(name,radius) {
        super(name);
        this.radius = radius;
    }
    area() {
         return Math.PI * this.radius * this.radius;
    }
}
 class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width=width;
        this.height=height;
    }
    area() {
         return this.width * this.height;
    }
 }
 class Triangle extends Shape{
    constructor(name, base, height){
        super(name);
        this.base=base;
        this.height=height;
    }
    area() {
        return (this.base * this.height)/2;
    }
 }
 let circle=new Circle(Circle,5);
 console.log("Area of the Circle: "+circle.area());
 let rectangle=new Rectangle(Rectangle,6,4);
 console.log("Area of the Rectangle: "+rectangle.area());
 let triangle=new Triangle(Triangle,3,4);
 console.log("Area of the Triangle: "+triangle.area());
 