//prezzo finale biglietto

var prezzoFinale;

// richiesta km da percorrere

var kmTotali = parseInt(prompt("Inserire km totali da percorrere"));

console.log(kmTotali);

// richiesta età passeggero

var etaPasseggero = parseInt(prompt("Inserire età passeggero"));

console.log(etaPasseggero);

// prezzo totale senza sconto

var costoKm = 0.21;

var prezzoIntero = parseFloat((kmTotali * costoKm).toFixed(2));

console.log(prezzoIntero);

// sconto 20% per i minorenni

var scontoMinorenni = prezzoIntero * 0.2;

console.log('SCONTOMINORENNI', scontoMinorenni)

// sconto 40% per gli over 65

var scontoOver65 = prezzoIntero * 0.4;

console.log('scontoOver65', scontoOver65)

// applicazione eventuale sconto

if (etaPasseggero < 18){
  prezzoFinale = prezzoIntero - scontoMinorenni;
} else if (etaPasseggero > 65) {
  prezzoFinale = prezzoIntero - scontoOver65;
} else {
  prezzoFinale = prezzoIntero;
}

// prezzo arrotondato al secondo decimale

var arrotondato = parseFloat(prezzoFinale.toFixed(2));

console.log('ARROTONDATO', arrotondato)

// generazione password

document.getElementById('eta').innerHTML="Età passeggero: " + etaPasseggero + " anni";
document.getElementById('km').innerHTML="Km da percorrere: " + kmTotali;
document.getElementById('prezzoIntero').innerHTML="Il costo del biglietto intero è: " + prezzoIntero + " euro";
document.getElementById('prezzoFinale').innerHTML="Il costo del biglietto scontato è: " + arrotondato + " euro";
