//tworzenie tablicy za pomocą literału tablicy
/* var kolory = ['biały', 'czerwony', 'zielony'];
var elWynik = document.getElementById('wynik');
elWynik.innerHTML = kolory[0]; */



//tworzenie tablicy za pomocą konstruktora tablicy
/* var samochody = new Array('BMW','Audi','Ferrari','Porsche');
console.log(samochody[samochody.length -1]);
console.log('ilość elementów: ' + samochody.length);

var auto = prompt('Podaj auto');
samochody[0] = auto;
console.log(samochody); */

//utwórz tablice o nazwie "szkola", przypisz do niej imie, nazwisko i wiek, o której spytasz ucznia w promcie. Wyświetl tablice w bloku o nazwie "dane".

/* var szkola = [];
var imie = prompt('Podaj imie');
var nazwisko = prompt('Podaj nazwisko');
var wiek = prompt('Podaj wiek');

szkola[0] = imie;
szkola[1] = nazwisko;
szkola[2] = wiek;

var elDane;
elDane = document.getElementById('dane');
elDane.innerHTML = szkola; */


//tablice wielowymiarowe
/* var tab = new Array(
new Array ('Jan','Nowak','Poznan'),
new Array ('Anna','Kowal','Gniezno'),
new Array ('Karol','Kowalski','Kraków')
);

console.log(tab);
console.log(tab[1][2]); */


//sortowanie
var imiona = ['Paweł','Anna','Zenon','Jacek'];
console.log(imiona);
var posortowane = imiona.sort(); //sortowanie alfabetyczne elementów w tablicy
console.log(posortowane);
var odwroc =  posortowane.reverse(); //sortowanie przeciwne

odwroc.pop(); // usuwa ostatni element w tablicy
odwroc.push('Gerwazy'); //dodaje element na ostatnią pozycje w tablicy
odwroc.unshift('Joanna'); //dodaje element na początek tablicy
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); // -1 - nie istnieje w tablicy
console.log(odwroc.indexOf('Gerwazy')); //sprawdza czy dana wartość występuje w tablicy i pokazuje jego index
//Jeżeli wartość jest = -1 to element nie występuje w tablicy



//sortowanie liczb
var cyfry =[1,2,20,190,-1,1000000];
console.log(cyfry);
cyfry.sort();
console.log(cyfry); //[-1, 1, 1000000, 190, 2, 20]

cyfry.sort(function(a,b){
    return (a-b);
}
);
console.log(cyfry);



//tworzenie funkcji
var elWynik = document.getElementById('wynik');
var elpodajKolor = document.getElementById('podajKolor');
var elkolor = document.getElementById('kolor');
var kolor = [];
function zapisz(){
    console.log(elkolor.value);
    kolor[0] = elkolor.value;
    console.log(kolor);
    
}


//Zad dom - Utwórz formularz z logiem (text) i hasłem (password) i kolorem (text) - kolor heksadecymalny. Przy zmiennej dodac konkatenacje i dodać #. Przypisz dane do tablicy jednowymiarowej. Wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy
























