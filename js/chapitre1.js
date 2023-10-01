
let Bouton=document.getElementById("Bouton2");
let togg1 = document.getElementById("ch1");
let togg2 = document.getElementById("ch2");
let togg3 = document.getElementById("ch3");  
let togg4 = document.getElementById("ch4");
let togg5 = document.getElementById("ch5"); 

let Chapitres = document.getElementById("annexe");
let Lien_histoire=document.getElementById("lien_histoire");


togg1.addEventListener("click", () => {
    if(getComputedStyle(Chapitres).display != "none"){
        Chapitres.style.display="none";
        Lien_histoire.style.display="block";
        Bouton.style.display="block";
    } else {
        Chapitres.style.display = "flex";
        Lien_histoire.style.display="none";
    }
  }) 
  
  Bouton.addEventListener("click", () => {
      {
        Chapitres.style.display = "flex";
        Bouton.style.display="none";
        Lien_histoire.style.display="none";
    }
  })