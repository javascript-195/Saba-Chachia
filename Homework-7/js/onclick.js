// Davaleba 1
function increase(){
    const div=document.getElementsByClassName("firstdiv")[0];
    div.style.width="850px";
    div.style.height="700px";
    }

function decrease(){
    const div=document.getElementsByClassName("firstdiv")[0];
    div.style.width="250px";
    div.style.height="250px";
}
// Davaleba 2

function changecolortored(){
   const element= document.getElementsByClassName("txt")[0]
   element.style.color="red";
}
function changecolortoblue(){
   const element= document.getElementsByClassName("txt")[0]
   element.style.color="blue";
}
function changecolortogreen(){
   const element= document.getElementsByClassName("txt")[0]
   element.style.color="green";
}
// Davaleba 3
function hide(){
    const hideElement=document.getElementsByClassName("hiddencontent")[0]
    hideElement.style.display="none";
}
function show(){
    const showElement=document.getElementsByClassName("hiddencontent")[0]
    showElement.style.display="block";
}