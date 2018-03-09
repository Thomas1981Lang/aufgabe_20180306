window.onload = function () {
    document.getElementById('formular').onsubmit = function (event) {
        event.preventDefault();

        // 1. Variablen
        var kg, cm, m, ergebnis, ausgabe, koerperGewicht, kategorie;


        // 2. Eingabe/Einlesen
        cm = document.getElementById('cm').value;
        console.log(cm);

        kg = document.getElementById('kg').value;
        console.log(kg);

        // 3. Verarbeitung
        m = mUmwandlung(cm) * 1;
        console.log(m);

        kg = commaCheck(kg);
        console.log(kg);

        bmiGrafisch(m, kg);

        ergebnis = runden(bmiBerechnung(m, kg), 3);
        console.log(ergebnis);

        koerperGewicht = bmiKoerperGewicht(ergebnis);
        console.log(koerperGewicht);
        kategorie = bmiKategorie(ergebnis);
        console.log(kategorie);

        ausgabe = document.getElementById('ergebnis').innerHTML = 'Das Ergebnis für deinen BMI lautet: <span>' + ergebnis + '</span>.<br>Laut der Tabelle auf Wikipedia wird dein Körpergewicht eingestuft in ' + koerperGewicht + ' und gehört in die Kategorie: ' + kategorie + '!';
    } // onsubmit
} //onload