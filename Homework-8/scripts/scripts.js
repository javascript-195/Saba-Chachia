
// დავალება 1:


// DOM Selector-ების მეშვეობით დაამუშავეთ შემდეგი დავალება:

// <div class="container">
// <h1>This is a heading</h1>
// <p>Veggies es <span>bonus vobis</span>, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
// <h2>A level 2 heading</h2>
// <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
// </div>

// გამოიყენეთ მოცემული DIV ტეგის HTML კოდი, რომელიც გაშვების შემთხვევაში ესე გამოიყურება:

// DOM-ის მეშვეობით მოახდინეთ მასზე შემდეგი ცვლილებები:
// 1. გახადეთ <h1> ჰედერი ლურჯი ფერის.
// 2. გახადეთ <h2> ჰედერის გარეკანი (background) ლურჯი ფერის ხოლო მასში მოცემული ტექსტი კი თეთრი ფერის.
// 3. <span> ტეგში მოცემული ტექსტის ფონტის ზომა გახადეთ 200%.

// უკეთ გააზრებისთვის ქვემოთ თანდართული იქნება ფოტოც.

const header1=document.getElementsByClassName("firsthead");
const header2=document.getElementsByClassName("secondhead");
const txtinhead=document.getElementsByClassName("spaninhead");

for (let i = 0; i < header1.length; i++) {
header1[i].style.color = "blue";
}

for (let i = 0; i < header2.length; i++) {
header2[i].style.backgroundColor = "blue";
}


for (let i = 0; i < header2.length; i++) {
header2[i].style.color = "white";
}

for (let i = 0; i < header2.length; i++) {
header2[i].style.backgroundColor = "blue";
}

for (let i = 0; i < txtinhead.length; i++) {
txtinhead[i].style.fontSize = "200%";
}


// დავალება 2:

// DOM Selector-ების მეშვეობით დაამუშავეთ შემდეგი დავალება:

// <div class="container">
// <h1>This is a heading</h1>
// <p>Veggies es <span class="alert">bonus vobis</span>, proinde vos postulo <span class="alert stop">essum magis</span> kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
// <h2 id="special">A level 2 heading</h2>
// <p>Gumbo beet greens corn soko endive gumbo gourd.</p>
// <h2>Another level 2 heading</h2>
// <p><span class="alert go">Parsley shallot</span> courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
// </div>



// გამოიყენეთ მოცემული DIV ტეგის HTML კოდი, რომელიც გაშვების შემთხვევაში ესე გამოიყურება:



// მოახდინეთ მასში შემდეგი ცვლილებები:
// ნებისმიერ HTML ელემენტს, რომელიც Id სელექტორით იქნება მონიშნული მიეცით ყვითელი გარეკანის(background) ფერი.
// ნებისმიერ ელემენტს, რომელსაც alert კლასი ექნება გაწერილი, მიანიჭეთ 1px ნაცრისფერი (gray) კედელი(border).
// თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი stop გაწერილი, გახადეთ მისი ფერი წითელი.
// თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი go გაწერილი, გახადეთ მისი ფერი მწვანე.

const yellow=document.getElementById("special");
const alerts=document.getElementsByClassName("alert");
const green=document.getElementsByClassName("go");
const red=document.getElementsByClassName("stop");

yellow.style.backgroundColor = "yellow";

for (let i = 0; i < alerts.length; i++) {
alerts[i].style.border = "1px solid grey";
}

for (let i = 0; i < green.length; i++) {
green[i].style.backgroundColor="green";
}

for (let i = 0; i < red.length; i++) {
red[i].style.backgroundColor="red";
}

