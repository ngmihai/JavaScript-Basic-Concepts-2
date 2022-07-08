//--------------------------------------------------
console.log("While / iteratii");
// Repetitie bazate pe o conditie

let indice = 0;
let iteratie = 0;

while (indice < 10) {
  console.log(`Iteratia ${iteratie}: Indice = ${indice}`);
  indice = indice + 1; // indice += 1; sau indice++;

  //indice = indice + 2; // indice += 2;
  //indice = indice + 3;
  iteratie = iteratie + 1; // Numaram de cate ori se executa codul din interiorul while-ului
}

let i = 0;
while (i < 3) {
  // 0, 1, 2
  console.log(i);
  // i = 0 + 1 => i = 1;
  // i = 1 + 1 => i = 2;
  // i = 2 + 1 => i = 3;
  i = i + 1;
}

i = 0;
while (i <= 3) {
  // 0, 1, 2, 3
  console.log(i);
  // i = 0 + 1 => i = 1;
  // i = 1 + 1 => i = 2;
  // i = 2 + 1 => i = 3;
  // i = 3 + 1 => i = 4;
  i = i + 1;
}

console.log(" While terminat");
console.log("\n");

// break - iese din codul repetitiv
// continue - sare inapoi la conditia repetitiva

// Arrays
const arr = ["Mihai", "Andrei", "Eric", "Bogdan", "Andreea"];
//             0         1        2        3
const exempluArray = new Array();
exempluArray.push("Test");
exempluArray.push("Test 2");
console.log(exempluArray, exempluArray.length);

let indiceCurent = 0;
// exempluArray = ["Test", "Test 2"], dimensiunea 2
//                    0       1

// Conditie pentru parcurgerea array-ului: avem un indice curent care incepe de pe pozitia 0 si se termina pe pozitia exempluArray.length - 1 (ceea ce inseamna ca parcurgem elementele de la 0 -> n - 1)

// exempluArray.length = 2

//     De la:   0   <       2 => [0, 1]
while (indiceCurent < exempluArray.length) {
  console.log(indiceCurent, exempluArray[indiceCurent]);
  indiceCurent++;
}

//     De la:   0   <=      2 - 1 = 1; => [0, 1]
while (indiceCurent <= exempluArray.length - 1) {
  console.log(indiceCurent, exempluArray[indiceCurent]);
  indiceCurent++;
}

console.log("\n");
console.log("For Loop");
// For loop
//    initializari;conditia de oprire; comanda executata dupa fiecare bucla
for (let indice = 0; indice < 5; indice = indice + 2) {
  // i++
  console.log(indice);
} // se executa comanda de la final de for, in cazul acesta indice = indice + 1

console.log("\n");
console.log("Referinte");
// Referinte

// Noi cand definim variabile => alocam zone de memorie in calculator cu un anumit spatiu
// Dimensiunile difera in functie de ce tip de variabile avem
// Tipuri mari: primite si obiect

// Tipuri primitive: number, boolean, string
// Tipuri obiecte: array, functiile, object

let numar1 = 5;
let numar2 = numar1; // pentru tipurile primitive se copiaza valoarea
console.log(numar1, numar2);
numar1 = 7;
console.log(numar1, numar2);

let boolean1 = true;
let boolean2 = boolean1;
console.log(boolean1, boolean2);
boolean1 = false;
console.log(boolean1, boolean2);

let string1 = "Test";
let string2 = string1;
console.log(string1, string2);
string1 = "Nu";
console.log(string1, string2);

let array1 = ["Test 1"];
let array2 = array1; // Se asigneaza adresa pentru tipurile obiect
console.log(array1, array2);
array1.push("Test 2");
console.log(array1, array2);

let array3 = [...array1];
console.log(array3);
array1.push("Test 3");
console.log(array3);
console.log(...array1);

console.log("\n");
console.log("\n");

const [a, b, c, ...d] = array1;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
