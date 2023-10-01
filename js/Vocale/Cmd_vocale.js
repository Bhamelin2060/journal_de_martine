
// Script de page HTML introduite temporairement
// pour l'appartition des boutons en entete de page
let Body = document.getElementsByTagName("body");
let DivForm=document.getElementById("Parole")  
let FORM = document.createElement("div")
 
 
FORM.innerHTML=`
<div id="Synthese_Vocale">
  <!--  <h1 class="text-light">Synthese vocale</h1>-->
    <div class="mb-5">
      <button id="start" class="btn start"><i class="fa-solid fa-square-caret-right"></i></button>
      <button id="pause" class="btn pause"><i class="fa-solid fa-circle-pause"></i></button>
      <button id="resume" class="btn resume"><i class="fa-solid fa-forward-step"></i></button>
      <button id="cancel" class="btn cancel"><i class="fa-solid fa-circle-stop"></i></button>
      <button id="But_Reglage" class="btn reg"><i class="fa-solid fa-sliders"></i></button>
    </div>
    <div id="curseur">  <!--  Id reglage du son-->
    <h2 class="lead text-light mt-4">Selection des voix</h2>
    <div id="reglage">  <!--  Id selection des vois-->
      <select id="voices" class="form-select bg-secondary text-light"></select>
      <button id="cache_Reglage" class="btn_close">close</button>
    </div>  <!-- fin Id selection des vois-->
   


      <h2 class="lead">Volume</h2>
      <div id="reglage"> <!--  Id reglage du volume-->
        <input type="range" min="0" max="1" value="1" step="0.1" id="volume" />
        <span id="volume-label" class="ms-2">1</span>
      </div>              <!--fin Id selection du volume-->
      <div class="mx-5">  <!--  Id reglage de la vitesse de lecture-->
        <h2 class="lead">Rate</h2>
        <div id="reglage">
        <input type="range" min="0.5" max="2" value="1" id="rate" step="0.1" />
        <span id="rate-label" class="ms-2">1</span>
        </div>        
      </div>              <!--Fin Id reglage de la vitesse de lecture-->
      <div>               <!--  Id reglage de l'intonation'-->
        <h2 class="lead">Pitch</h2> 
        <div id="reglage">
          <input type="range" min="0" max="2" value="1" step="0.1" id="pitch" />
          <span id="pitch-label" class="ms-2">1</span>
        </div>
       
      </div>                <!--Fin Id reglage de l'intonation'-->
    
    </div>            <!--  Fin Id reglage du son-->
        
  </div>`;

DivForm.appendChild(FORM);