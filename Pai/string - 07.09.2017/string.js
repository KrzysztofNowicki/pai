document.write('asdfas');

var text ='ZSK - Zespół Szkół Komunikacji';
console.log(text.length); //30

var pierwszyZnak = text.charAt(0);
console.log(pierwszyZnak); //Z - pierwszy znak

var ostatniZnak = text.charAt(text.length - 1);
console.log(ostatniZnak); //i - ostatni znak

var kod = text.charCodeAt(0); //sprawdzanie jaką cyfre przypisano danemu znakowi w tablicy ASCII
console.log(kod);

//zamiana na duże litery
var duza = text.toUpperCase();
console.log(duza);

//zamiana na male litery
var male = text.toLowerCase();
console.log(male);


var poprawnyTekst = prompt('Podaj imie','np.Kowalski');
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase()
+ poprawnyTekst.slice(1).toLocaleLowerCase();
console.log(poprawnyTekst); 

//substr(x,y) - x od któego znaku odcinamy, y - ile wycinamy

var imie = prompt('Podaj imie');
imie = imie.substr(1, imie.length -2);

console.log(imie);



