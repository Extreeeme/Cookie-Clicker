/* Si le chiffre est égal à deux (if else if else) , écrit "2"
Si le chiffre est égal à trois, écrit "Fizz"
Si le chiffre est égal à cinq, écrit "Buzz"
Sinon écrit le chiffre donnée */

function fizzBuzz(chiffre){

if (chiffre == 2) {
	console.log("2");
}
else if (chiffre == 3) {
	console.log("Fizz");

}
else if (chiffre == 5) {
	console.log("Buzz");
}
else {
	console.log(chiffre);
}

}