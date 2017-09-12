        //document.write("2, 51% <br>");
        //document.write("2, 51%" + '<br>');
        //document.write("2, 51%");
        //document.write("2, 51%");
        //console.log("tescik");
        
        
        
        //var imie="xD"
        //document.write("Witaj" + imie + "!");
        
        
        //var suma = 10 + 20 + 30;
        //console.log(suma);
        // f12 - wyswietla konsole w przeglądarce
        
        
        //windows.alert - pełna nazwa
        //alert('test');
        
        
        var a = 9, b = 'Janusz', c = true;
        var d;
        var suma = a + b;
        var roznica = a - b;
        var mnozenie = a * b;
        var dzielenie = a / b;
        var modula = a % b;
        
        console.log(typeof(a));
        console.log(typeof(b));
        console.log(typeof(c));
        console.log(typeof(d));
        
        
        var dzialanie = (7%2)/3;
        console.log(dzialanie);
        
        
        var dziesietna = 10;
        var oktalna = 010; //dodajemy 0 przed liczbą - wie że jest oktalna
        var hex = 0x20;  //Dodajemy 0x przed szesnastkową
        console.log(dziesietna); //10
        console.log(oktalna); //8
        console.log(hex); //32
        
        
        console.trace(); // w jakim pliku aktualnie jestemy
        
        //camelCase 
        var duzaLitera; //pierwsze słowo od małej, drugie od duzej
        
        
        var _duzaLitera;
        var $duzaLitera;
        //var 1duzaLitera; // od cyfry zmienna nie moze sie zaczynać i nie może sięzaczynać od myślnika
        
        
        //NOTACJA AMERYKANSKA
        
        var zmienna = 2.5; //liczby wymierne piszemy z kropką
        console.log(zmienna);
        
        
        var j1 = '1'; //zmienna ma typ string
        console.log(typeof(j1));
        var j2 = '1.5';
        var wiek = 'Aga';
        j1 = parseInt(j1); //zamiana ciągu znaków na liczbe całkowitą
        j2 = parseFloat(j2);
        var wiek = parseInt(wiek);
        console.log(wiek); //Konsola pokazuje że to nie jest liczba
        var wynik = j1 + j2 + 2;
        console.log(wynik);
        
        
        var x = 'zsk';
        //document.getElementById('naglowek').innerHTML =x; - to jest wstyd
        
        var elNaglowek = document.getElementById('naglowek'); //to jest profesjonalne

        elNaglowek.innerHTML =x;
        elNaglowek.style.color = 'red';


        var imie = prompt('Podaj swoje imię');
        console.log(imie);
        console.log(typeof(imie));
        

        var a = prompt('Podaj a');
        var b = prompt('Podaj b');
        var pole = a * b; //wyswietla pole prostokąta
        console.log(pole);

        
        a = parseInt(a);
        b = parseInt(b);
        var srednia = (a+b)/2; //wyswietla średnią z dwóch liczba
        console.log(srednia);  

        var elSrednia = document.getElemenyByID('srednia');
        elSrednia.innerHTML = srednia;
        elSrednia.textContent = srednia;