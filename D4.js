/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  return l1 * l2;
};
console.log("l'area del rettangolo é", area(10, 20));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log("la somma dei due parametri é", crazySum(5, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num1) {
  if (num1 > 19) {
    return (num1 - 19) * 3;
  } else {
    return num1 - 19;
  }
};
console.log(crazyDiff(25));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(400));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (ciao) {
  if (ciao !== "EPICODE") {
    return "EPICODE ".concat(ciao);
  } else {
    return ciao;
  }
};
const result = epify("ciao sono wendy");
console.log(result);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num5) {
  if (num5 % 3 === 0 || num5 % 7 === 0) {
    return true;
  } else {
    return false;
  }
};
const result1 = check3and7(69);

console.log("il parametro della funzione é", result1);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  const arrayOfChars = str.split(""); // converto la stringa EPICODE in un array di caratteri: ['E', 'P', 'I', 'C', 'O', 'D', 'E']
  arrayOfChars.reverse(); // INVERTIAMO L'ARRAY
  const reversedString = arrayOfChars.join(""); // RIUNIAMO L'ARRAY IN UNA STRINGA!!
  return reversedString;
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8

 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (sentence) {
  const arrayOfWords = sentence.split(" ");

  const arrayOfUppercasedWords = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    let uppercasedWord =
      arrayOfWords[i].slice(0, 1).toUpperCase() + arrayOfWords[i].slice(1);
    arrayOfUppercasedWords.push(uppercasedWord);
  }
  return arrayOfUppercasedWords.join;
};
console.log(upperFirst("ciao mi chiamo wendy"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
