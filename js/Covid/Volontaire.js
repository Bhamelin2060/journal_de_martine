let Bouton_Carre=document.getElementById("Carre");
 
let Bouton_Richaud=document.getElementById("Richaud");
let Bouton_Lambinet=document.getElementById("Lambinet");
let Boutons=document.getElementById("Boutons");
let Img_Carre=document.getElementById("image_cascade1");
let Img_Richaud=document.getElementById("image_cascade2");
let Img_Lambinet=document.getElementById("image_cascade3");
let Test_Volontaire=document.getElementById("volontaire");
let visible=1;  // opacité =1
let invisible=0; 
let temps_porte=20;
document.querySelector("#Carre").addEventListener("click", () => {
    
    Img_Carre.style.opacity= visible;
    Img_Carre.style.scale= 1.5;
    Img_Richaud.style.opacity= invisible;
    Img_Lambinet.style.opacity= invisible;
    Test_Volontaire.style.opacity=visible;
    Test_Volontaire.innerText="Je suis volontaire"
    Test_Volontaire.style.color="green"
  });
  document.querySelector("#Richaud").addEventListener("click", () => {
   
    Img_Richaud.style.opacity= visible;
    Img_Richaud.style.scale= 1.5;
    Img_Carre.style.opacity= invisible;
    Img_Lambinet.style.opacity= invisible;
    Test_Volontaire.style.opacity=visible;
    Test_Volontaire.innerText="Je suis volontaire"
    Test_Volontaire.style.color="green"

    
}); 
  document.querySelector("#Lambinet").addEventListener("click", () => {
    
    Img_Lambinet.style.opacity= visible;
    var size_image=1.5;
    Img_Lambinet.style.scale= size_image;
    Img_Carre.style.opacity= invisible;
    Img_Richaud.style.opacity= invisible;
    Tourne_3d_plus(0,120,1,1,1,size_image);  // Appel à la fonction de rotation positive de l'image entre l'angle initial et l'angle final
    Test_Volontaire.style.opacity=visible;
    Test_Volontaire.innerText="Je suis non  volontaire"
    Test_Volontaire.style.color="red"
  });
  Boutons.onmouseout = function(){
    Img_Lambinet.style.opacity= visible;
    Img_Carre.style.opacity=  visible;
    Img_Richaud.style.opacity=  visible;
    Img_Lambinet.style.scale= 1;
    Img_Lambinet.style.webkitTransform = "rotate3d(0,0,1,0deg)";
    Img_Carre.style.scale=1;
    Img_Richaud.style.scale=1;
    Test_Volontaire.style.opacity=invisible;
  };
  //////////////////////////////////////////////////////////////////////////////////////////
////////////////  Fonction rotation de l'image en 3D positif  sens trigonometrique //////////////
//////////////////////////////////////////////////////////////////////////////////////////
function Tourne_3d_plus(angle_init,angle_final,Delta_angleX,Delta_angleY,Delta_angleZ,size_image){
  
  setInterval(function(){ 
     if(angle_init<angle_final) {
   angle_init=angle_init+2  
   size_image=size_image-0.01;
   Img_Lambinet.style.scale= size_image;
   Img_Lambinet.style.webkitTransform = "rotate3d("+Delta_angleX+","+Delta_angleY+","+Delta_angleZ+","+ angle_init +"deg)";
        // console.log("angle="+angle_init + "translation y="+deltay);
   }
     
    }, 10)
    
    clearInterval();
 };