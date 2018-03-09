window.onload = function () {
    document.getElementById('formular').onsubmit = function (event) {
        event.preventDefault();

        // 1. Variablen
        var kg, cm, m, ergebnis, ausgabeZahl, ausgabeGewicht, ausgabeKategorie, koerperGewicht, kategorie;




        // 2. Eingabe/Einlesen
        cm = document.getElementById('cm').value;
        console.log(cm);

        kg = document.getElementById('kg').value;
        console.log(kg);

        // 3. Verarbeitung
        cm = commaCheck(cm);
        console.log(cm);

        m = mUmwandlung(cm) * 1;
        console.log(m);

        kg = commaCheck(kg);
        console.log(kg);


        ergebnis = runden(bmiBerechnung(m, kg), 3);
        console.log(ergebnis);

        koerperGewicht = bmiKoerperGewicht(ergebnis);
        console.log(koerperGewicht);

        kategorie = bmiKategorie(ergebnis);
        console.log(kategorie);

        // 4. Ausgabe

        if (ergebnis > 0 && ergebnis < 80) {
        bmiGrafisch(m, kg);

        
        ausgabeZahl = document.getElementById('ergebnisZahl').innerHTML = ergebnis;
        ausgabeGewicht = document.getElementById('ergebnisGewicht').innerHTML = 'Grob eingeteilt fällst du in die Gruppe: <span>' + koerperGewicht + '</span>,';
        ausgabeKategorie = document.getElementById('ergebnisKategorie').innerHTML = 'welche wiederum in die Kategorie: <span>' + kategorie + '</span> eingeteilt wird!';
    } else {
        document.getElementById('grafik').innerHTML = 'Leider stimmt etwas nicht mit den eingegebenen Werten.<br>Bitte kontrolliere noch mal deine Eingaben.';
        document.getElementById('dasX').classList.remove('dasXdada');
    }

        // Eingabe wird mit absicht nicht resetet
        //document.getElementById('cm').value = '';
        //document.getElementById('kg').value = '';

    } // onsubmit
} //onload