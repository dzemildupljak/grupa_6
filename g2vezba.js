// a = false;

// // console.log(false && false);

// // console.log(false && true);

// // console.log(true && false);

// // console.log(true && true);

// console.log(false || false);

// console.log(false || true);

// console.log(true || false);

// console.log(true || true);

// a = b = Boolean(a);

// console.log(b);

// var a = 10;

// console.log();

// time = 18;

// console.log("step1");
// console.log("step2");

// if (time > 16.1) {
//   console.log("If block");
//   console.log("If block");
//   console.log("If block");
//   console.log("If block");
//   console.log("If block");
//   console.log("If block");
// } else {
//   console.log("Nema potreeb dan je");
//   console.log("Nema potreeb dan je");
//   console.log("Nema potreeb dan je");
// }

// console.log("step3");
// console.log("step4");
// console.log("step5");
// console.log("step6");
// console.log("step7");

// a = 3;

// if (a === 1) {
//   console.log("a je 1");
// } else if (a === 2) {
//   console.log("a je 2");
// } else if (a === 3) {
//   console.log("a je 3");
// } else if (a === 4) {
//   console.log("a je 4");
// } else if (a === 5) {
//   console.log("a je 5");
// } else {
//   console.log("nista od navedengi vrednistu");
// }

// a = window.prompt("Unesite broj: ");

// if (a % 2 === 0) {
//   console.log("Broj je paran");
// } else {
//   console.log("Broj je neparan");
// }
// god = 1995;
// mes = 7;
// dan = 4;

// cgod = 2022;
// cmes = 3;
// cdan = 16;

// if (dan > cdan) {
//   cmes -= 1;
//   cdan += 30;
// }

// if (mes > cmes) {
//   cgod -= 1;
//   cmes += 12;
// }

// console.log(cgod - god);
// console.log(cmes - mes);
// console.log(cdan - dan);

// a = 11;

// if (a < 0 || a > 24) {
//   console.log("pogresno uneto vreme");
// } else if (a >= 0 && a < 5) {
//   console.log("trenutno je noc");
// } else if (a < 10) {
//   console.log("trenutno je jutro");
// } else if (a < 18) {
//   console.log("trenutno je dan");
// } else if (a < 20) {
//   console.log("trenutno je vece");
// } else {
//   console.log("trenutno je noc");
// }

// a = 34;
// b = 118;
// c = 65;

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("trougao je moguc");
// } else {
//   console.log("trougao je nemoguc");
// }
//    pocetna vred;  krajnja vred; korak
// for (let i = 18; i > 0; i -= 1) {
//   console.log("Hello world -", i);
// }

// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj: "));
//   console.log(broj);

//   if (i === 0) {
//     var max = broj;
//   }

//   if (broj > max) {
//     max = broj;
//   }
// }

// console.log("max je:");
// console.log(max);

// Саставити програм који за унето n исписује збир првих n целих позитивних бројева.
// Саставити програм којим се за унети природан број n израчунава суму: S n = + + + + 1! 2! 3! ... !

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log("posle if-a", i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log("Javascript");
// }

// for (let i = 0; i < 3; i++) {
//   console.log("je super");
// }

// for (let i = 0; i < 6; i++) {
//   if (i < 3) {
//     console.log("Javascript");
//   } else {
//     console.log("je super");
//   }
// }

// broj = Number(window.prompt("Unesite broj"));

// for (let i = broj; i > 0; i -= 5) {
//   console.log(i);
// }

// brojDanaUGodini = 184;

// mesec = Math.ceil(brojDanaUGodini / 30);

// switch (mesec) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
// }

// dan = brojDanaUGodini - (mesec - 1) * 30;

// console.log(dan);

// switch (brojDanaUGodini % 7) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// console.log(day);

// Write a JavaScript progr]am to sum the multiples of 3 and 5 under 1000.

// for (var i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, "buzz");
//   } else {
//     console.log(i);
//   }
// }

// Саставити програм којим се за унети природан број n израчунава суму: S n = 1! + 2! + 3!+   ... !

// broj = Number(prompt("Unesite broj"));

// broj = 5;

// suma = 0;

// for (let i = 1; i <= broj; i++) {
//   fakt = 1;
//   for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }

//   suma += fakt;
// }

// console.log(suma);

// broj = 13;

// suma = 0;

// for (let i = 1; i <= broj; i++) {
//   fakt = 1;
//   for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }

//   console.log(fakt);
//   suma += fakt;
// }

// console.log(suma);

// 1 1 2 3 5

// el1 = 1;
// el2 = 1;
// console.log(el1);
// console.log(el2);

// for (let i = 0; i < 48; i++) {
//   el = el1 + el2;

//   el1 = el2;
//   el2 = el;

//   // [el1, el2] = [el2, el1 + el2];

//   console.log(el);
// }

// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// let zvezda = "";
// for (let i = 1; i <= 5; i++) {
//   console.log((zvezda += "*"));
// }

// for (let i = 0; i < 5; i++) {
//   let red = "";
//   for (let j = 0; j <= i; j++) {
//     red += "*";
//   }
//   console.log(red);
// }

// for (let i = 1; i <= 10; i++) {
//   var red = "";
//   for (let j = 1; j <= 10; j++) {
//     red += `${j * i}\t`;
//   }
//   console.log(red, "\n");
// }

// for (let i = 1; i <= 10; i++) {
//   red = "";

//   for (let j = 1; j <= 10; j++) {
//     red += `${i * j}\t`;
//   }

//   console.log(red);
// }

// var pozTemp = 0;
// var negTemp = 0;

// var pozBr = 0;
// var negBr = 0;

// for (let i = 0; i < 10; i++) {
//   t = Number(prompt("Unesite temp:"));
//   if (t > 0) {
//     pozBr++;
//     pozTemp += t;
//   } else {
//     negBr++;
//     negTemp += t;
//   }
// }

// console.log("Srednja pozitivna je:", pozTemp / pozBr);
// console.log("Srednja negativna je:", negTemp / negBr);

// rec = "oko";

// if (rec === rec.split("").reverse().join("")) {
//   console.log("rec je palindrom");
// } else {
//   console.log("rec nije palindrome");
// }

// var rec = "ratar";

// r a t a r
// 0 1 2 3 4

// for (let i = 0; i < Math.floor(rec.length / 2); i++) {
//   //   if (rec[i] !== rec[rec.length - 1 - i]) {
//   //           1  !==      5 - 1 - 1
//   //        Uporedjujempo poslednji i prvi karakter reci
//   if (rec[i] !== rec[rec.length - 1 - i]) {
//     console.log("rec nije palindrome");
//     //  nema potrebe za daljom proveom mozemo da prekinemo petlju
//     break;
//   }

//   if (i === Math.floor(rec.length / 2) - 1) {
//     console.log("rec je palindrome");
//   }
// }

////////////////////////////////////

// var pomRec = "";

// for (let i = rec.length - 1; i <= 0; i--) {
//   pomRec += rec[i];
// }

// if (rec === pomRec) {
//   console.log("rec je palindrome");
// } else {
//   console.log("rec nije palindrome");
// }

// var pal = true;

// maxRez = 0;

// for (let i = 100; i < 1000; i++) {
//   for (let j = 100; j < 1000; j++) {
//     var rez = String(i * j);
//     pal = true;

//     for (let k = 0; k < rez.length; k++) {
//       if (rez[k] !== rez[rez.length - 1 - k]) {
//         pal = false;
//         break;
//       }
//     }

//     if (pal && maxRez < i * j) {
//       maxRez = i * j;
//     }
//   }
// }

// console.log(maxRez);

// brojac = 0;

// while (brojac < 10) {
//   console.log(brojac);
//   brojac += 10;
// }

// moja_lozinka = "sifra";

// kor_lozinka = prompt("Unesite lozinku: ");

// while (moja_lozinka !== kor_lozinka) {
//   kor_lozinka = prompt("Pogresna lozinka pokusajate ponovo: ");
// }

// alert("Tacna lozinka");

// while (true) {
//   br = Number(prompt("Unesite broj"));

//   if (br === 0) {
//     alert("Unesli ste nulu prekida se progam");
//     break;
//   }

//   if (10 <= br && br <= 20) {
//     alert("Broj je u tacnom rasponu", br);
//   } else {
//     alert("Broj nije u tacnom rasponu");
//   }
// }

// i = 1;

// i = i = i + 1;

// console.log(i);

// while (true) {
//   operacija = prompt("Unesite operaciju: ");

//   if (operacija == "p") {
//     alert("prekid programa");
//     break;
//   }

//   br1 = Number(prompt("Prvi broj"));
//   br2 = Number(prompt("Drugi broj"));

//   switch (operacija) {
//     case "+":
//       alert(br1 + br2);
//       break;
//     case "-":
//       alert(br1 - br2);
//       break;
//     case "*":
//       alert(br1 * br2);
//       break;
//     case "/":
//       alert(br1 / br2);
//       break;
//     default:
//       alert("pogresan unos");
//       break;
//   }
// }

// let i = 10;

// while (i < 5) {
//   i++;
//   console.log(i);
// }

// var br1 = 2;
// var br2 = 2;
// var br3 = 3;
// var br4 = 4;
// var br5 = 5;
// var br6 = 6;

// const cars = ["BMW", 123, false, "Saab", 12.5, "Jos jedan el"];
//              0     1     2       3      4      5

// cars = new Array("Saab", "Volvo", "BMW");

// cars = ["Saab", "Volvo", "BMW"];

// cars = ["Saab", "Volvo", "BMW", "POSLEDNJI EL"];

// console.log(cars);

// cars.push("neka vrednost");

// console.log(cars);

// ucenici = [];

// brUc = Number(prompt("Broj ucenika"));

// for (let i = 0; i < brUc; i++) {
//   visUc = Number(prompt("Visina ucenika"));
//   ucenici.push(visUc);
// }

// console.log(ucenici);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);

// fruits.unshift("Lemon");

// console.log(fruits);

// niz1 = [2, 34, 65, 87, 45, 34, 23];
// niz2 = [];

// console.log(niz1);
// console.log(niz2);
// ///////////////////////////////////////////////////

// for (let i = 0; i < niz1.length; i++) {
//   niz2.push(niz1[i]);
// }

// niz1 = [];
// ///////////////////////////////////////////////////
// nizl = niz1.length;

// for (let i = 0; i < nizl; i++) {
//   el = niz1.pop();
//   niz2.unshift(el);
// }
// ///////////////////////////////////////////////////

// console.log(niz1);
// console.log(niz2);

// arr = [87, false, 34, [3, true, [3, 5, "Podniz"], 5, "Hello world"], 23];
// //    0   1    2

// console.log(arr[3][2][2]);
// for (let i = 0; i < a.length; i++) {
//   red = "";
//   for (let j = 0; j < a[i].length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = "\\";
//     }
//     red += `${a[i][j]}-[${i}][${j}] \t`;
//   }

//   console.log(red);
// }

// a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
// ];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = "\\";
//     }
//   }
// }

// console.log(a);

// arr1 = [1, 2, 3];
// arr2 = [100, 2, 1, 10];

// res = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (!arr2.includes(arr1[i])) {
//     console.log("ne nalazi se ", arr1[i]);
//     res.push(arr1[i]);
//   }
// }

// for (let i = 0; i < arr2.length; i++) {
//   if (!arr1.includes(arr2[i])) {
//     console.log("ne nalazi se ", arr2[i]);
//     res.push(arr2[i]);
//   }
// }

// console.log(res);

// res = [];
// leng = 0;
// if (arr1.length <= arr2.length) {
//   leng = arr2.length;
// } else {
//   leng = arr1.length;
// }

// for (let i = 0; i < leng; i++) {
//   if (arr1[i] && !arr2.includes(arr1[i])) {
//     res.push(arr1[i]);
//   }
//   if (arr2[i] && !arr1.includes(arr2[i]) && !res.includes(arr2[i])) {
//     res.push(arr2[i]);
//   }
// }
// console.log(res);

// var array1 = [1, 2, 3, 3, 3, 3, 3, 2, 2, 2];
// var array2 = [2, 30, 1, 1, 10, 30, 20, 20];

// pom = [];

// for (let i = 0; i < array1.length; i++) {
//   if (!pom.includes(array1[i])) {
//     pom.push(array1[i]);
//   }
// }

// console.log(pom);

// for (let i = 0; i < array2.length; i++) {
//   if (!pom.includes(array2[i])) {
//     pom.push(array2[i]);
//   }
// }

// console.log(pom);

// const months = [
//   "Jan1",
//   "March2",
//   "April3",
//   "June4",
//   "Jan5",
//   "March6",
//   "April7",
//   "June8",
//   "Jan",
//   "March",
//   "April",
//   "June",
//   "Jan",
//   "March",
//   "April",
//   "June",
// ];

// console.log(months);

// months.splice(-2);

// console.log(months);

// arr = [2, 30, 1, 10, 20];

// // 0
// // 3
// console.log(arr);

// el = arr[0];

// arr.splice(0, 1);
// arr.splice(3, 0, el);

// console.log(arr);

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// // var newArr = animals.slice(0, 3);

// // console.log(newArr);

// console.log(animals.slice(-2, -1));

// arr = [
//   [1, "a", true],
//   ["b", 2, false],
// ];

// [["a","b"],[1,2],[true,false]]

// arr2 = [
//   [1, "a", true],
//   ["b", 2],
// ];

// [["a","b"],[1,2],[true]]
// niz1 = [[], [], []];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (typeof arr[i][j] === "string") {
//       niz1[0].push(arr[i][j]);
//     } else if (typeof arr[i][j] === "number") {
//       niz1[1].push(arr[i][j]);
//     } else if (typeof arr[i][j] === "boolean") {
//       niz1[2].push(arr[i][j]);
//     }
//   }
// }
// console.log(niz1);

// arr = [
//   [1, "a", true],
//   ["b", 2, false],
// ];

// // spoljasnja for petlja ce da se iterira 2 puta
// for (let i = 0; i < 2; i++) {
//   // unutrasnja for petlja ce da se iterira 2 puta
//   for (let j = 0; j < 3; j++) {
//     // zvak
//     console.log(arr[i][j]);
//   }
// }

// arr = [58, "", "abcd", true, null, false, 0];

// // [58, "abcd", true]

// res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     res.push(arr[i]);
//   }
// }

// console.log(res);

// var a = 10;

// arr = ["b", 6, "a", "q", 7, 2];

// [2, 6, 7, "a", "b", "q"]

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join("@@@@"));
// // expected output: "FireAirWater"

// console.log(elements.join("-"));
// // expected output: "Fire-Air-Water"

// var1 = "Hello world";

// var2 = var1.split(" ");

// var3 = var2.join();

// console.log(var1);
// console.log(var2);
// console.log(var3);

// function nazivFunkcije() {
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
//   console.log("funcija!!!");
// }

// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");

// nazivFunkcije();
// nazivFunkcije();

// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");

// nazivFunkcije();

// console.log("commanda");
// console.log("commanda");
// console.log("commanda");
// console.log("commanda");

// function capitaliseString(arg1) {
//   let fox = "the quick brown fox";
//   console.log(fox);

//   fox = fox.split(" ");

//   for (let i = 0; i < fox.length; i++) {
//     let rec = fox[i];
//     rec = rec.split("");

//     rec[0] = rec[0].toUpperCase();

//     rec = rec.join("");

//     fox[i] = rec;
//   }

//   fox = fox.join(" ");

//   console.log(fox);
// }

// capitaliseString();

// function funcWithArgs(startIndex, endIndex) {
//   console.log(startIndex);
//   console.log(endIndex);
//   return startIndex + endIndex;
// }

// var1 = funcWithArgs(3, 6);

// console.log("var1", var1);

// function powersOfTwo(n) {
//   pomArr = [];

//   for (let i = 0; i <= n; i++) {
//     pomArr.push(2 ** i);
//   }

//   return pomArr;
// }

// rez = powersOfTwo(3);
// rez1 = powersOfTwo(5);
// rez2 = powersOfTwo(10);

// console.log(rez);
// console.log(rez1);
// console.log(rez2);

// const reverseSeq = function (n) {
//   pomArr = [];

//   for (let i = n; i > 0; i--) {
//     pomArr.push(i);
//   }

//   return pomArr;
// };

// var rez = reverseSeq(-3);

// console.log(rez);

// function pillars(num_pill, dist, width) {
//   if (num_pill <= 1) {
//     return 0;
//   }
//   if (dist < 10 || dist > 30) {
//     return;
//   }
//   if (width < 10 || width > 50) {
//     return;
//   }
//   // return (num_pill - 1) * (dist * 100 + width) - width;
//   return dist * (num_pill - 1) * 100 + width * (num_pill - 2);
// }

// // rez = pillars(2, 20, 25);
// rez = pillars(1, 10, 10);

// console.log(rez);
// console.log(pillars(2, 20, 25));
// console.log(pillars(11, 15, 30));

// f1 = () => {
//   return [1, 2, 3, 4, 5];
// };

// var1 = f1;

// console.log(var1());

// function stray(numbers) {
//   num = 0;

//   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//     num = numbers[0];
//   }
//   if (
//     numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//     numbers[numbers.length - 1] !== numbers[numbers.length - 3]
//   ) {
//     num = numbers[numbers.length - 1];
//   }

//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//       num = numbers[i];
//       break;
//     }
//   }

//   return num;
// }

// console.log(stray([1, 2, 1, 1, 1, 1, 1, 1]));
// console.log(stray([1, 1, 17, 1, 1, 1, 1]));
// console.log(stray([1, 1, 1, 1, 1, 1, 1]));

// function inverseSlice(items, a, b) {
//   // uzimamo prvi do niza krecemo od pocetak(0) do argumenta a
//   // pomArr = items.slice(0, a);

//   // pomarr2 = items.slice(b);

//   // pomArr = pomArr.concat(pomarr2);

//   // return pomArr;

//   return items.slice(0, a).concat(items.slice(b));
// }

// console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)); // [12, 14, 55, 24]

// console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));

// const removeConsecutiveDuplicates = (s) => {
//   pomArr = s.split(" ");
//   let rez = [];
//   for (let i = 0; i < s.length; i++) {
//     if (pomArr[i] !== pomArr[i + 1]) {
//       rez.push(pomArr[i]);
//     }
//   }
//   return rez;
// };

// console.log(
//   removeConsecutiveDuplicates(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//   )
// );
// 'alpha beta gamma delta alpha beta gamma delta'

// niz = [10, 14, 2, 23, 19];

// for (let i = 0; i < niz.length; i++) {
//   for (let j = i + 1; j >= 0; j--) {
//     if (niz[j] < niz[j - 1]) {
//       // [niz[j], niz[j - 1]] = [niz[j - 1], niz[j]];
//       let pomVar = niz[j];
//       niz[j] = niz[j - 1];
//       niz[j - 1] = pomVar;
//     } else {
//       break;
//     }
//   }
// }

// console.log(niz[niz.length - 1] + niz[niz.length - 2]);

// function nbYear(p0, percent, aug, p) {
//   let n = 0;
//   while (p0 < p) {
//     p0 = p0 + (p0 * percent) / 100 + aug;

//     n = n + 1;
//   }

//   return n;
// }

// job = function (arg1) {
//   for (let i = 0; i < 10; i++) {
//     console.log(arg1, i);
//   }
// };

// job("VAR1");

// mojaFunc("Hello");

// (function (arg1) {
//   for (let i = 0; i < 10; i++) {
//     console.log(arg1, i);
//   }
// })("world")(function (arg1) {
//   for (let i = 0; i < 10; i++) {
//     console.log(arg1, i);
//   }
// })("hello");

// covek1 = 45oiutser9832uroksf
// covek1 = {
//   name: "dzemil",
//   surname: "dupljak",
//   birhdate: "04.07.1995.",
//   loacation: {
//     contry: "SRB",
//     city: {
//       cityName: "Novi Pazar",
//       postcode: 36300,
//     },
//   },
// };

// covek2 = {
//   ...covek1,
//   loacation: {
//     ...covek1.loacation,
//     city: { ...covek1.loacation.city },
//   },
// };

// covek2.loacation.city.cityName = "VA";

// console.log(covek1);
// console.log("==================================");
// console.log(covek2);

// osidjg928ruofj3209()
// nazivFunkcije = function (arg1, arg2 = 20) {
//   console.log("arg1", arg1);
//   console.log("arg2", arg2);

//   if ((arg1 + arg2) % 2 === 0) {
//     return arg1 + arg2;
//   }

//   return "neparana rezultat ";
// };

// // var1  = osidjg928ruofj3209
// var1 = nazivFunkcije;

// nazivFunkcije();
// var1();

// (function () {
//   console.log("fucnjaaaa!");
// })();

// (function () {
//   console.log("fucnjaaaa!");
// })();
// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].title === "") {
//     console.log("kniga nije odabrana");
//     continue;
//   }

//   if (library[i].readingStatus) {
//     console.log("Procitano");
//   } else {
//     console.log("Nije procitano");
//   }
// }

// osiu984uf03wf3
// obj1 = {
//   author: "Bill Gates",
//   title: "The Road Ahead",
//   readingStatus: true,
//   // 9384693tiu349
//   history: {
//     title1: "title1",
//     title2: "title2",
//     title3: "title3",
//     title4: "title4",
//   },
// };

// obj2 = { ...obj1, history: { ...obj1.history } };

// console.log(obj1);
// console.log("=========================");
// console.log(obj2);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// c1 = new Car("Merceds", 2010);
// c2 = new Car("Audi", 2020);

// console.log(c1.age());
// console.log(c2.age());

// o1 = {
//   name: "dzemil",
//   surname: "dupljak",
// };

// o2 = {};

// // o2 = {
// //   dzemil: "name",
// //   dupljak: "surname",
// // };

// let flatObj = Object.entries(o1);

// for (let i = 0; i < flatObj.length; i++) {
//   console.log(flatObj[i]);

//   o2[flatObj[i][1]] = flatObj[i][0];
// }

// console.log(o1);
// console.log("===================");
// console.log(o2);

// o1 = {
//   name: "dzemil",
// };
// var1 = "nesto";
// o1[var1] = "nova vrednost";
// // o1.novi_prop = "nova vrednost";

// console.log(o1);

// console.log(o1.var1);

// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)

// o1 = {
//   name: "dzemil",
//   location: "NP",
// };

// function isContainProp(argObj, prop) {
//   // let props = Object.keys(argObj);
//   // if (props.includes(prop)) {
//   //   console.log("sadrzi");
//   // } else {
//   //   console.log("ne sadrzi");
//   // }

//   Object.keys(argObj).includes(prop)
//     ? console.log("sadrzi")
//     : console.log("ne sadrzi");
// }

// isContainProp(o1, "name");

// o1 = {
//   name: "dzemil",
//   location: "NP",
//   func1: () => {
//     console.log("FUCNKAAAA");
//   },
// };

// o1.func1();

// Create another class called Book. Book = function() {}
// Each book should have several properties:
// Title, Genre, Author
// Read (true or false)
// Read date, can be blank, otherwise needs to be a JS Date() object

// Create a class through the constructor invocation pattern. BookList = function() {}
// BookLists should have the following properties:
// Number of books marked as read (eg, BookList.booksRead)
// Number of books marked not read yet
// Next book to read(book object)(eg, BookList.nextBook() - returns a Book)
// Current book being read (book object)
// Last book read(book object)
// An array of all the Books (eg BookList.bookShelf - is an array.)

// Every Booklist should have a few methods:
// .add(book) - should add a book to the books list.
// .finishCurrentBook()
// Should mark the book that is currently being read as read
// Give it a read date of new Date(Date.now())
// Change the .lastBook property to be the book that just got finished
// Change the .currentBook property to point to what's in the .nextBook property
// Change the .nextBook property to be the first unread book you find in the list of books

// class Book {
//   constructor(title = "", genre, author) {
//     this.title = title;
//     this.genre = genre;
//     this.author = author;
//     this.read = false;
//     this.read_date = null;
//   }
// }

// class BookLists {
//   constructor() {
//     this.bookShelf = [];
//     this.booksRead = 0;
//     this.notBooksRead = this.bookShelf.length - this.booksRead;
//     this.nextBook = null;
//     this.currBook = null;
//     this.lastBook = null;
//   }

//   add(book) {
//     debugger;
//     if (book instanceof Book) {
//       debugger;
//       this.bookShelf.push(book);

//       for (let i = 0; i < this.bookShelf.length; i++) {
//         if (!this.bookShelf[i].read) {
//           this.currBook = this.bookShelf[i];
//           if (this.bookShelf[i + 1]) {
//             this.nextBook = this.bookShelf[i + 1];
//           } else {
//             this.nextBook = null;
//           }
//           break;
//         }
//       }
//     } else {
//       console.log("Invalid argument type");
//     }
//   }

//   finishCurrentBook() {
//     for (let i = 0; i < this.bookShelf.length; i++) {
//       const book = this.bookShelf[i];
//       if (book.title === this.currBook.title) {
//         this.bookShelf[i].read = true;
//         this.bookShelf[i].read_date = new Date();
//         this.lastBook = this.currBook;
//         this.currBook = this.nextBook;
//         if (this.bookShelf[i + 1]) {
//           this.nextBook = this.bookShelf[i + 2];
//         }
//         break;
//       }
//     }
//   }
// }

// b1 = new Book("HP1", "magic", "JKR");
// b2 = new Book("HP2", "magic", "JKR");
// b3 = new Book("HP3", "magic", "JKR");
// b4 = new Book("HP4", "magic", "JKR");
// b5 = new Book("HP5", "magic", "JKR");

// bl = new BookLists();

// bl.add(b1);
// bl.add(b2);
// bl.add(b3);
// bl.add(b4);
// bl.add(b5);

// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// bl.finishCurrentBook();

// console.log("=========================");
// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// bl.finishCurrentBook();
// bl.finishCurrentBook();
// bl.finishCurrentBook();
// bl.finishCurrentBook();

// console.log("=========================");
// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// console.log(bl.bookShelf);

// o1 = {
//   name: "dzemil",
//   surmane: "dupljak",
//   location: "np",
//   info: function () {
//     console.log(this.name, this.surmane);
//   },
// };

// o1.info();

// let p1 = {
//   firstName: "John",
//   lastName: "Smith",
// };

// let p2 = {
//   firstName: "Ann",
//   lastName: "Brown",
// };

// function sayWelcome(greeting, arg2) {
//   console.log(arg2.subObj);
//   console.log(greeting + " " + this.firstName + " " + this.lastName);
// }

// sayWelcome.call(p1, "Welcome", { subObj: "name" }); // Welcome John Smith

// let p1 = {
//   firstName: "John",
//   lastName: "Smith",
// };
// let p2 = {
//   firstName: "Ann",
//   lastName: "Brown",
// };
// function sayWelcome(greeting) {
//   console.log(greeting + " " + this.firstName + " " + this.lastName);
// }
// sayWelcome.apply(p1); // Welcome John Smith
// // sayWelcome.apply(p2, ["Welcome"]); // Welcome Ann Brown

// let p1 = {
//   firstName: "John",
//   lastName: "Smith",
// };
// let p2 = {
//   firstName: "Ann",
//   lastName: "Brown",
// };

// function sayWelcome() {
//   console.log("Welcome " + this.firstName + " " + this.lastName);
// }

// let sayWelcomeJohn = sayWelcome.bind(p1);
// let sayWelcomeAnn = sayWelcome.bind(p2);

// sayWelcomeJohn(); // Welcome John Smith
// sayWelcomeAnn(); // Welcome Ann Brown

// function add(book) {
//   if (book instanceof Book) {
//     debugger;
//     this.bookShelf.push(book);

//     for (let i = 0; i < this.bookShelf.length; i++) {
//       if (!this.bookShelf[i].read) {
//         this.currBook = this.bookShelf[i];
//         if (this.bookShelf[i + 1]) {
//           this.nextBook = this.bookShelf[i + 1];
//         } else {
//           this.nextBook = null;
//         }
//         break;
//       }
//     }
//   } else {
//     console.log("Invalid argument type");
//   }
// }

// bookShelf = {
//   bookShelf: [],
//   booksRead: 0,
//   notBooksRead: this.bookShelf.length - this.booksRead,
//   nextBook: null,
//   currBook: null,
//   lastBook: null,
// };

// bookShelf2 = {
//   bookShelf: [],
//   booksRead: 0,
//   notBooksRead: this.bookShelf.length - this.booksRead,
//   nextBook: null,
//   currBook: null,
//   lastBook: null,
// };

// add.call(bookShelf, {});
// add.call(bookShelf2, {});
// var a;
// a = 10;

// console.log(a);

// a = 11;

// function innerFunc() {
//   console.log("inner function");
// }

// function func1(arg) {
//   innerFunc();
//   console.log("FUNC", arg);
// }

// function main() {
//   func1(1);
//   innerFunc();
//   console.log("main end ====");
// }

// main();

// function someJob() {
//   for (let i = 0; i < 2000000000; i++) {}
//   console.log("job finished");
// }

// console.log("start");
// someJob();
// console.log("jos neki posao");
// console.log("komanda 1");

// setTimeout(() => {
//   console.log("komanda 21");
// }, 1000);

// setTimeout(() => {
//   console.log("komanda 22");
// }, 800);

// console.log("komanda 3");
// console.log("komanda 4");

// console.log("komanda 1");

// setTimeout(() => {
//   console.log("komanda 21");
// }, 1001);

// setTimeout(() => {
//   console.log("komanda 22");
// }, 1000);

// console.log("komanda 3");
// console.log("komanda 4");

// const work = async () => {
//   console.log(1111111);
//   await sleep(2000);
//   console.log(2222222);
// };

// await work();

// clb = function () {
//   console.log("callback!!!!");
// };

// clb2 = function () {
//   console.log("calback2222222");
// };

// function work(radnjaPosle) {
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   for (let i = 0; i < 1099000000; i++) {}
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");

//   radnjaPosle();
// }

// work(clb);
// work(clb2);

// // setTimeout(clb, 1000);

// func1 = () => {
//   console.log("func1");
// };

// function work(radnjaPosle) {
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   for (let i = 0; i < 1099000000; i++) {}
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");
//   console.log("pripreman neka");

//   radnjaPosle();
// }

// work(() => {
//   console.log("func1");
// });

// setTimeout(() => {
//   console.log("adssad");
//   console.log("adssad");
// }, 1000);

// timeoutID = setTimeout(
//   (arg1) => {
//     console.log("callback function");
//     console.log(arg1);
//   },
//   2 * 1000,
//   "That was really slow!"
// );

// for (let i = 0; i < cars.length; i++) {
//   const c = cars[i];
//   console.log(c);
//   console.log(i);
// }
// console.log("=======================");

// cars.forEach((el, index) => {
//   console.log(el);
//   console.log(index);
// });
// var cars;

// function imefunkcije(arg1, index) {
//   console.log(arg1);
//   index && console.log(index);
// }

// const cars = ["BMW", 123, false, "Saab", 12.5, "Jos jedan el"];

// cars.forEach((c, i, arr2) => {
//   console.log(c, i, arr2);
// });

// function forEachCustom(arr, callbackfn) {
//   for (let i = 0; i < arr.length; i++) {
//     callbackfn(arr[i]);
//   }
// }

// forEachCustom(cars, (arg1, index) => {
//   console.log(arg1);
//   index && console.log(index);
// });
// function wash(callback) {
//   setTimeout(function () {
//     console.log("wash");
//     callback();
//   }, 3000);
// }

// function dry(callback) {
//   setTimeout(function () {
//     console.log("dry");
//     callback();
//   }, 2000);
// }

// function fold(callback) {
//   setTimeout(function () {
//     console.log("fold");
//     callback();
//   }, 1000);
// }

// function doLaundry(actions) {
//   actions[0](() => {
//     actions[1](() => {
//       actions[2](() => {
//         console.log("Done");
//       });
//     });
//   });
// }

// doLaundry([wash, dry, fold]);

// function f1() {
//   console.log("F1");
// }

// const job = (clb) => {
//   console.log("job");
//   console.log("job");
//   console.log("job");
//   console.log("job");
//   clb();
// };

// job(() => {
//   console.log("clb nameless");
// });

// const cars = ["BMW", 123, false, "Saab", 12.5, "Jos jedan el"];

// arr1 = cars.map((el) => {
//   if (typeof el === "number") {
//     return el;
//   }
// });

// arr2 = cars.filter((el) => {
//   if (typeof el === "number") {
//     return el;
//   }
// });

// console.log(arr1);
// console.log(arr2);

// arr1 = [1, 2, 3, 4, 5, 5, 7, 6, 5, 5, 5, 5, 5];

// res = arr1.some((el) => {
//   return el > 6;
// });

// res2 = arr1.every((el) => {
//   return el > 0;
// });

// // console.log(arr1);
// // console.log(res);
// // console.log(res2);

// if (
//   !arr1.every((el) => {
//     return el > 1;
//   })
// ) {
//   console.log("Ne ispunjavaju svi elementi dati uslov");
// } else {
//   console.log("Ispunjavaju svi elementi dati uslov");
// }

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// }, 0);

// console.log(sumWithInitial / array1.length);
// // expected output: 10

// function find_missing(arr1, arr2) {
//   arr2.forEach((el) => {
//     if (arr1.includes(el)) {
//       arr1.splice(arr1.indexOf(el), 1);
//     }
//   });

//   return arr1[0];
// }

// res = find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);

// res2 = find_missing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);

// console.log(res);
// console.log(res2);
// console.log(find_missing([0, 0, 0, 0, 0], [0, 0, 0, 0]));

const heros = [
  { name: "Spider-Man" },
  { name: "Thor" },
  { name: "Black Panther" },
  { name: "Captain Marvel" },
];

const heros2 = heros.map((el, index) => {
  return {
    id: index,
    hero: el.name,
  };
});

console.log(heros2);
