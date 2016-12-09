//var animal;
//var maladie;
//var sens;
//var nom;
var questions = 4;
var tab=new Array;

alert('Bonjour, nous allons te poser une serie de quatre questions.');
tab.push(prompt('Il vous reste '+questions+ ' questions. Comment t\'appelles tu?'));
questions -= 1;
tab.push(prompt('Il vous reste '+questions+ ' questions. Quel maladie te fais le plus peur?'));
questions -= 1;
tab.push(prompt('Il vous reste '+questions+ ' questions. Quel est ton animal préféré?'));
questions -= 1;
tab.push(prompt('Il vous reste '+questions+ ' questions. Peux tu me citer un des cinq sens?'));
alert('un jour un/une '+tab[2]+' atteint du '+tab[1]+' ayant perdu '+tab[3]+' qui s\'appellait '+tab[0]+ '.');