/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (
  let i = 0;
  i < pets.length;
  i++ //detto di prendere gli elementi dell'array
) {
  console.log(pets[i]); // mostrare in console gli elementi dell'array
}
console.log("-----------------------------");
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets1 = ["dog", "cat", "hamster", "redfish"];
for (
  let i = 0;
  i < pets.length;
  i++ //riprendo il mio array per far visualizzare i nomi in console
) {
  pets1.sort(); //sort viene utilizzato per mettere in ordine alfabetico gli elementi
  console.log(pets1[i]);
}

console.log("-----------------------------");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets2 = ["dog", "cat", "hamster", "redfish"];
for (
  let i = 0;
  i < pets.length;
  i++ //riprendo il mio array per far visualizzare i nomi in console
) {
  pets2.sort().reverse(); //sort viene utilizzato per mettere in ordine alfabetico gli elementi .reverse ti permette di averli al contrario
  console.log(pets2[i]);
}
console.log("-----------------------------");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets3 = ["dog", "cat", "hamster", "redfish"];
const primoElemento = pets3.shift(); //.shift rimuovo il primo elemento (dog)
pets3.push(primoElemento); //vado a riprendere l'elemento che ho eliminato e con .push lo rimetto in ultima posizione
console.log(pets3);

console.log("-----------------------------");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

/*for (
  let i = 0;
  i < cars.length;
  i++ //i=counter
) {
  const targa = cars[i]; //nuovo variabile targa che riprende cars[i], dove punta in quel momento l'array cars
  targa.licenseplate = prompt("scrivi la tua targa"); //riprendo la variabile targa e gli dico di aggiungere(licenseplate), con prompt chiedo al cliente di aggiungere la sua targa
}
console.log(cars);

console.log("-----------------------------");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
for (let i = 0; i < cars.length; i++) {
  const nuovoOggetto = { brand: "", model: "", color: "", trims: "" };
  cars.push({ nuovoOggetto });
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
//const justTrims = []

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
