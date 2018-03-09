var commaCheck = function(wert) {
    var wert;
    wert = wert.replace(",", ".") * 1;
    return wert;
}

var mUmwandlung = function (cm) {
    var cm, m;
    if (cm >= 2.72) {
        m = cm / 100;
        return m;
    } else {
        m = cm;
        return m;
    }
}

var bmiBerechnung = function (m, kg) {
    var m, kg, bmiErgebnis;
    bmiErgebnis = kg / (m * m);
    return bmiErgebnis;
}

var runden = function (zahl, stellen) {
    var gerundet, faktor;
    faktor = Math.pow(10, stellen);
    gerundet = Math.round(zahl * faktor) / faktor;
    return gerundet;
}

var bmiKategorie = function (bmi) {
    var bmi, output;
    output = (bmi < 16) ? 'starkes Untergewicht' : (bmi >= 16 && bmi < 17) ? 'mäßiges Untergewicht' : (bmi >= 17 && bmi < 18.5) ? 'leichtes Untergewicht' : (bmi >= 18.5 && bmi < 25) ? 'Normalgewicht' : (bmi >= 25 && bmi < 30) ? 'Präadipositas' : (bmi >= 30 && bmi < 35) ? 'Adipositas Grad I' : (bmi >= 35 && bmi < 40) ? 'Adipositas Grad II' : 'Adipositas Grad III';
    return output;
}

var bmiKoerperGewicht = function (bmi) {
    var bmi;
    if (bmi < 18.5) {
        return 'Untergewicht';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normalgewicht';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Übergewicht';
    } else {
        return 'Adipositas';
    }
}

var bmiGrafisch = function (m, kg) {
    var m, kg;
    if (m < 1.59 || m > 2.01 || kg <= 36 || kg >= 124) {
        document.getElementById('grafik').innerHTML = 'Der Wert liegt leider außerhalb der Tabelle.';
    } else {
        m = (((m * 100) - 160) * 10) + 55;
        m = m + "px";
        console.log(m);
        kg = ((kg - 40) * 3) + 43;
        kg = kg + "px";
        console.log(kg);
        document.getElementById('dasX').classList.add('dasXdada');
        document.getElementById('dasX').style.left = m;
        document.getElementById('dasX').style.bottom = kg;
        document.getElementById('grafik').innerHTML = 'Das X makiert die Stelle und unter der Tabelle findest du die schriftliche Auswertung';
    }
}



