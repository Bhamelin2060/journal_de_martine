
// sources https://www.section.io/engineering-education/text-to-speech-in-javascript/
// Commande vocal avec les boutone
// fonction lecture pause reprise stop
//------------------------------------------
let speech = new SpeechSynthesisUtterance();
//let inputTxt2 = document.getElementsByTagName("p");
let inputTxt2 = document.getElementsByClassName("lire");
let curseur = document.getElementById("curseur");
speech.lang = "fr-FR";
 

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  
    
   voices.forEach((voice, i ) => (
    
     voiceSelect.options[i] = new Option(voice.name, i)));
   
};
 

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;
  document.querySelector("#rate-label").innerHTML = rate;
}); 

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;
  document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click", () => {
 // modif pour jouer tous les paragraphes <p>
 
 
   //speech.text = document.querySelector("textarea").value;
   document.getElementById("start").style.backgroundColor="rgb(28, 230, 35)";  //Vert
   if(speech.text==""){
   for (j = 0; j < inputTxt2.length; j++){
     
    speech.text=speech.text+inputTxt2[j].innerText;

   }
    window.speechSynthesis.speak(speech);
   
   
    document.getElementById("start").style.backgroundColor="rgb(8, 230, 35)"; //VErt
    
  }
});
 
document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});
// Arret de lecture sur click des fleches gauche droite retour menu

document.querySelector("#gauche").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
document.querySelector("#droite").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
// fonction montre menu réglage
document.querySelector("#But_Reglage").addEventListener("click", () => {
  
    document.getElementById("curseur").style.display='block'; 
    
});
// fonction cache menu de réglage
document.querySelector("#cache_Reglage").addEventListener("click", () => {
  
  document.getElementById("curseur").style.display='none'; 
 
});
// fonction lecture

// fonction pause
document.querySelector("#pause").addEventListener("click", () => {
  
  document.getElementById("pause").style.backgroundColor="rgb(255,153,51)"; 
  document.getElementById("resume").style.backgroundColor="rgb(148, 168, 206)"; //grey
  
  
});
// fonction resume
document.querySelector("#resume").addEventListener("click", () => {
  document.getElementById("pause").style.backgroundColor="rgb(148, 168, 206)"; //grey
 
  document.getElementById("resume").style.backgroundColor="rgb(153,255,204)"; // bleu clair
  document.getElementById("resume").style=blink; // clignotant
});
// fonction cancel
document.querySelector("#cancel").addEventListener("click", () => {
  speech.text=""
  document.getElementById("pause").style.backgroundColor="rgb(191,201,201)"; //grey
  document.getElementById("resume").style.backgroundColor="rgb(191,201,201)"; //grey
  document.getElementById("start").style.backgroundColor="rgb(191,201,201)"; //grey
});
document.querySelector("#haut_parleur").addEventListener("click", () => {
 if (document.getElementById("Parole").style.display=="none" || document.getElementById("Parole").style.display==""){
  document.getElementById("Parole").style.display="block";
   document.querySelector("#start").ATTRIBUTE_NODE="true";
}
  else{
   document.getElementById("Parole").style.display="none";
  }
}
);