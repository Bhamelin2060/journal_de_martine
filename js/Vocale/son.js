 
// commande de lecture de présentation du bouquin en vocale
var audio=document.createElement('audio');
 let Elt=document.getElementById("intro");
  
let Textalire= "Chers amis, MARTINE A VERSAILLES n’est pas une nouvelle comptine de l’éroïne bien connue des enfants. A travers ce mémoire, je vous retrace les grandes lignes de ma carrière professionnelle en grande partie effectuée à Versailles. Ainsi pour pourrez voyager dans la petite histoire des hôpitaux du roi SOLEIL. Vous avez le choix de suivre mon parcours, pages après pages ou sélectionner les chapitres relatant mes diverses expériences. Grace à ce recueil web, vous trouverez les liens retraçant l’histoire des hôpitaux et des divers emplacements dans lesquels j’ai travaillé. Un petit Haut parleurvous permettra de profiter de la lecture à haute voix de mon récit. Je vous souhaite bonne lecture !";
 
 var first=true;
     window.addEventListener('mousedown',onmousedown);
   function onmousedown(){
       if(!first) 
       
        return;
        first=false;
        audio.src="./sass/AUDIO/Marche_cérémonies_des_turcsv2.mp3";
       audio.play();
     //  createBubble();
// ajout défilement en js
let start = Date.now();

      let timer = setInterval(function() {
        
        let timePassed = Date.now() - start;
        document.getElementById("intro").innerText="Pour passer la présentation,Cliquez sur la fleche -> ";
         //train.style.left = timePassed / 5 + 'px'; exemple
         if (timePassed > 10000){
        
          document.getElementById("intro").innerText=Textalire;
          document.getElementById("intro").style="color: blue" ;
          document.getElementById("intro").style.margin = "10px 10px 10px " + (250+(-timePassed+10000) / 4) + "px"  ;
         
        }
       
       //console.log(timePassed);
        if (timePassed > 52000){
           clearInterval(timePassed);
          // let OK=false;
           document.getElementById("intro").style.margin = "10px 40px 10px 10px" ;
           document.getElementById("intro").innerText="Si vous voulez en savoir plus: Cliquez la fleche";
           document.getElementById("intro").style="color: deeplink" ;
           
        }
      },20);



 
  
}

       

      
        

  