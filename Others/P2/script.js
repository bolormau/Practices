// let count = 0;

// while (count <= 5) {
//   console.log(count);
//   count++;
//   // debugger;
// }

// const pass = 9955;
// let inputPass = prompt("Pass: ");
// inputPass = Number(inputPass);

// let wrongAttempt = 0;

// while(wrongAttempt <= 3){
//   if (inputPass === pass) console.log("Sign-in succeed.");
//   else {
//     alert("Password is incorrect! Try again. ")
//     inputPass = prompt("Password: ");
//     inputPass = Number(inputPass);
//     wrongAttempt++;
//   }
// }

// alert("Attempt expired. Try again later.");

// if (inputPass === pass) console.log("Sign-in succeed.");
// else {
//   while(wrongAttempt <= 3){
//     alert("Password is incorrect! Try again. ")
//     inputPass = prompt("Password: ");
//     inputPass = Number(inputPass);
//     wrongAttempt++;
//   }
//   alert("Attempt expired. Try again later.");
// }

// LOOP ---------------------------------------------

// 1. Guess the number -----------
// const actualNum = 32;
// let guessNum = prompt("Guess the number: ");

// while (guessNum !== actualNum) {
//   if (guessNum < actualNum)
//     guessNum = prompt("Actual number is greater than yours! Try again: ");
//   else if (guessNum > actualNum) guessNum = prompt("Actual number is less than yours! Try again: ");
// }

// console.log("Congrats!");

// ===============================
// 2. Students counter -----------
// const studentCapacity = 25;
// let currentAppliedStudent = 0;

// while(currentAppliedStudent < 25) {
//   console.log("We need " + studentCapacity - currentAppliedStudent + " students to over the application.");
//   currentAppliedStudent++;
// }

// console.log("Class is full. Stop get application.");

// ===============================
// 3. Happy Birthday lyrics -----------
// let line = 1;
// // let chorus = 0;

// // while(chorus < 5){
//   while(line <= 4){
//     if(line !== 3) console.log("Happy birthday! Happy birthday!");
//     else console.log("Happy birthday to you!");
//     line++;
//   }
// //   chorus++;
// // }

// ===============================
// 4. USA Flag -----------
// let count = 1;

// while(count <= 10){
//   if(count <= 6) {
//     if(count % 2 !== 0) console.log(" * * * * * * ");
//     else console.log("  * * * * * *  ");
//   }
//   else console.log(" --------------------------")
// }

// ===============================
// 5. Table -----------
// let row = 1;

// while(row <= 6) {
//   if(row === 1) console.log("===========================")
//   else if(row %2 !== 0) console.log("- - - - - - - - - - - - - -");
//   else console.log("---------------------------")
//   row++;
// }

// IF - ELSE PROBLEMS
// ===============================
// 1. Greater number -----------
// let input1 = Number(prompt("Enter fisrt number: "));
// let input2 = Number(prompt("Enter second number: "));

// if()

// IF - ELSE PROBLEMS

// ===============================
// 1. Print n numbers -----------
function printNNumbers() {
  let i = 1;
  let n = Number(prompt("Enter a n"));

  console.log("1. -----------------");
  while (i <= n) {
    console.log(i);
    i++;
  }
}
// printNNumbers();

// ===============================
// 2. Print only even numbers of n numbers -----------
function printEvenNumsOfNNums() {
  let i = 1;
  let n = Number(prompt("Enter a n"));

  console.log("2. -----------------");
  while (i <= n) {
    if (i % 2 === 0) console.log(i);
    i++;
  }
}
// printEvenNumsOfNNums();

// ===============================
// 3. Sum of n numbers -----------
function sumOfNNumbers() {
  let i = 1;
  let n = Number(prompt("Enter a number: "));
  let sum = 0;

  console.log("3. -------------------");
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log("n = " + n + "=> sum  " + sum);
}
// sumOfNNumbers();

// ===============================
// 4. Odd numbers of n nums -----------
function oddNumsOfNNums() {
  let i = 1;
  let n = Number(prompt("Enter a N: "));

  console.log("4. -------------------");
  while (i <= n) {
    if (i % 2 !== 0) console.log(i);
    i++;
  }
}
// oddNumsOfNNums();

// ===============================
// 5. ----------------------------
function mulsOfNumN() {
  let i = 1;
  let n = Number(prompt("Enter a N: "));

  console.log("5. Muls of num n");
  while (i <= 10) {
    console.log(i + " x " + n + " = " + i * n);
    i++;
  }
}
// mulsOfNumN();

// ===============================
// 6. ----------------------------
function digitCounter() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));

  console.log("6. Digit counter --------------");
  while (n >= 1) {
    n /= 10;
    console.log(n);
    counter++;
  }
  console.log("Number of digit: " + counter);
}
// digitCounter();

// ===============================
// 7. ----------------------------
function firstAndLastDigit() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));
  let lastDigit = 0;
  let firstDigit = 0;

  console.log("8. First and Last digit of num -------");
  lastDigit = n % 10;

  while (n >= 1) {
    n /= 10;
  }

  firstDigit = Math.floor(n * 10);

  console.log("First digit: " + firstDigit);
  console.log("Last digit: " + lastDigit);
  // console.log("First digit: " + ((n - (n % 10)) / 10));
}
// firstAndLastDigit();


// ===============================
// 7.0. ----------------------------
function printDigitsOfNum() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));

  console.log("7.0. Print all digits of num -------");

  while (n >= 1) {
    n /= 10;
  }
}
// 

// ===============================
// 7.2. ----------------------------
function firstAndLastDigit2() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));
  let lastDigit = 0;
  let firstDigit = 0;

  console.log("8. First and Last digit of num -------");
  lastDigit = n % 10;

  while (n >= 1) {
    n /= 10;
  }

  firstDigit = Math.floor(n * 10);

  console.log("First digit: " + firstDigit);
  console.log("Last digit: " + lastDigit);
  // console.log("First digit: " + ((n - (n % 10)) / 10));
}
// firstAndLastDigit2();


// ===============================
// 8. ----------------------------
function sumOfFirstAndLastDigit() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));
  let lastDigit = 0;
  let firstDigit = 0;
  let sum = 0;

  console.log("8. Sum of first and Last digit of num -------");
  lastDigit = n % 10;

  while (n >= 1) {
    n /= 10;
  }

  firstDigit = Math.floor(n * 10);
  sum = firstDigit + lastDigit;

  console.log("Sum: " + sum);
  // console.log("First digit: " + ((n - (n % 10)) / 10));
}
// sumOfFirstAndLastDigit();


// ===============================
// 9. ----------------------------
function sumOfFirstAndLastDigit() {
  let counter = 0;
  let n = Number(prompt("Enter a long integer: "));
  let lastDigit = 0;
  let firstDigit = 0;
  let sum = 0;

  console.log("9. Sum of first and Last digit of num -------");
  lastDigit = n % 10;

  while (n >= 1) {
    n /= 10;
  }

  firstDigit = Math.floor(n * 10);
  sum = firstDigit + lastDigit;

  console.log("Sum: " + sum);
  // console.log("First digit: " + ((n - (n % 10)) / 10));
}
// sumOfFirstAndLastDigit();

