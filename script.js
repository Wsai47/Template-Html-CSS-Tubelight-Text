
        //fonction éxécuté quand un des deux bouton est cliqué, renvoie vers une autre fonction en ajoutant en 
        //argument le texte a changer
        //c'est a dite celui que à l'id "myContent   (a changer au niveau de l'id".
function resizeText(multiplier) {
    multiplyText(multiplier, document.getElementById('myContent'));    
}


    //fonction éxécutée à la suite de "resizeText"
function multiplyText(multiplier, txtobj) {
    //si aucun multiplier n'est instauré on le fais et ce à 100%.
    if (txtobj.style.fontSize == '') {
        txtobj.style.fontSize = "100%";
    }
    //si le multiplicateur est 0 on laisse la police à la méme taille.
    if (multiplier == 0) {
        txtobj.style.fontSize = "100%";
    } 
    else { //on augmente de X% la taille de la police.
    txtobj.style.fontSize = parseFloat(txtobj.style.fontSize) + multiplier + "%";
    }
}

document.getElementById('switch_rouge').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_rouge.css") {
      document.getElementById('theme').href = "styles/style_rouge.css";
    } 
  };

  document.getElementById('switch_jaune').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_jaune.css") {
      document.getElementById('theme').href = "styles/style_jaune.css";
    } 
  };

  document.getElementById('switch_orange').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_orange.css") {
      document.getElementById('theme').href = "styles/style_orange.css";
    } 
  };

  document.getElementById('switch_vert').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_vert.css") {
      document.getElementById('theme').href = "styles/style_vert.css";
    } 
  };

  document.getElementById('switch_bleu').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_bleu.css") {
      document.getElementById('theme').href = "styles/style_bleu.css";
    } 
  };

  document.getElementById('switch_violet').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_violet.css") {
      document.getElementById('theme').href = "styles/style_violet.css";
    } 
  };
  
  document.getElementById('switch_rose').onclick = function() {
    if (document.getElementById('theme').href != "styles/style_rose.css") {
      document.getElementById('theme').href = "styles/style_rose.css";
    } 
  };
