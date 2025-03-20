/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
console.log(area(4, 2));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(int1, int2) {
  let result = int1 + int2;

  if (int1 === int2) {
    result = (int1 + int2) * 3;
  }

  return result;
}
console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(int1) {
  let result = int1 - 19;
  if (int1 > 19) {
    result = (int1 - 19) * 3;
  }

  return result;
}
console.log(crazyDiff(33));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
}
console.log(boundary(19));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  let result = "EPICODE" + string;
  if (string.startsWith("EPICODE", 0) === true) {
    result = string;
  }
  return result;
}
console.log(epify("EPICODER"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(intPos) {
  if (intPos < 1) {
    return console.error();
  } else if (intPos % 3 === 0 || intPos % 7 === 0) {
    return true;
  }
  return false;
}

const param = check3and7(2);
console.log(param);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}
const stringReversed = reverseString("Ciao");
console.log(stringReversed);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  return string
    .split(" ")
    .map((parola) => parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase())
    .join(" ");
}

const stringModified = upperFirst("ciao come stai");
console.log(stringModified);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  if (string.length <= 2) {
    return "";
  }
  return string.slice(1, -1);
}
const stringElaborated = cutString("pietra");
console.log(stringElaborated);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let randomNumbers = [];
  for (i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  return randomNumbers;
}
console.log(giveMeRandom(7));
