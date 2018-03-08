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

var commaCheck = function (kg) {
    var kg;
    kg = kg.replace(",", ".") * 1;
    return kg;
}

var bmiBerechnung = function (m, kg) {
    var m, kg, bmiErgebnis;
    bmiErgebnis = kg / (m * m);
    return bmiErgebnis;
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
    m = (((m * 100) - 160 ) * 10) + 55;
    m = m + "px";
    console.log(m);
    kg = ((kg - 40) * 3) + 43;
    kg = kg + "px";
    console.log(kg);
    document.getElementById('dasX').style.left = m;
    document.getElementById('dasX').style.bottom = kg;
}