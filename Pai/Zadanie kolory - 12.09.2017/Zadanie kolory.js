//zad dom utwórz formularz z loginem (text) i hasłem (pole typu password) i kolorem (text) (wpisywany hexadecymalnie) zrobić konkatenacje
//przypisz dane do tablicy jednowymiarowej, wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy.

var elHaslo = document.getElementById("haslo");
var elLogin = document.getElementById("login");
var elKolor = document.getElementById("kolor");

var data = [];

function show(){

    console.log(elKolor.value);
    console.log(elLogin.value);
    console.log(elHaslo.value);
    
    data[0] = elLogin.value.fontcolor("#" + elKolor.value);
    data[1] = elHaslo.value.fontcolor("#" + elKolor.value);
    data[2] = elKolor.value.fontcolor("#" + elKolor.value);
    
    console.log(data);
    document.write(data);
}