
window.addEventListener('mousedown',onmousedown);
function onmousedown(){
let start2 = Date.now();
//let debut=true;                         // autorisation d'émettre des bulles
timePassed2 = Date.now() - start2;
let timer2 = setInterval(function() {
 
 // timePassed2 = Date.now() - start2;
 
    function createBubble(){
     let Section= document.getElementById("section_bulle");
    //  const Section = document.querySelector("section_bulle");
     const cElement = document.createElement("span");
     timePassed2 = Date.now() - start2;
    var size=Math.random()*200; // 200=grosseur de la bulle
  
    cElement.style.width= size +'px';
    cElement.style.height=  size +'px';
    cElement.style.left=Math.random() * innerWidth -200 + "px";
    Section.appendChild(cElement);
  
 setTimeout(()=>{
 cElement.remove()
 },12000)  //4000
     
  
if (timePassed2>1000) {
  debut=true;
}
if (timePassed2>52000) {     // au dela de 52 seconde on efface les bulles
  debut=false;
  clearInterval(timePassed2); // on arrete le timer
  cElement.remove();
  if(cElement=false){
    debut=true;
  }
}
}
 
 
 if (debut=true){
setInterval(createBubble,350); // scrutation toutes les 350 ms pour faire apparaitre de nouvelles bulles
}
 

 
},9000);  // 200 plus le nombre est grand moins il u a de bulle tempo de sructation
}