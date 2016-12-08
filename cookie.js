var reponse1;
var reponse2;
var reponse3;
var reponse4;
var reponse5;

reponse1 = prompt("Indiquez votre année de naissance");
reponse2 = prompt("Dans quel lycée étiez vous ?");
reponse3 = prompt("De quelle couleur est votre haut ?")
reponse4 = prompt("A quoi ressemble votre mug ?")
reponse5 = prompt("Quel est votre chanel Slack préférée ?")

reponse1 = parseInt(reponse1)+10;
reponse5 = '#'+reponse5

alert('Il était une fois un bonhomme ' +reponse3 + ' qui étudiait au ' + reponse2 + ' et qui ressemblait à '+ reponse4 + '. Il avait '+reponse1+ ' cartes Pokemon et il adorait '+ reponse5);