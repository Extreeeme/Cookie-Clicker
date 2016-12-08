// un jour *un singe* *dislexique* ayant perdu
// *la vue* qui s\'appelle *Jean-Moris*
var animal;
var maladie;
var sens;
var nom;
var question = 4;

alert('Bonjour, nous allons te poser une série de quatre questions.');
nom = prompt('Il vous reste '+question+ ' questions. Comment t\'appelles tu ?');
question -= 1;
maladie = prompt('Il vous reste '+question+ ' questions. Cite moi une malaide');
question -= 1;
animal = prompt('Il vous reste '+question+ ' questions. Quel est ton animal préféré');
question -= 1;
sens = prompt('Il vous reste '+question+ ' questions. Pouvez vous me citer un sens');
alert('Un jour un/une '+animal+' atteins de/du '+maladie+' ayant perdu '+sens+' qui s\'appelait '+nom);