// //  1. Sale
// let actualPrice = 40000;
// let salePercent = 30;

// function afterSale() {
//   let saleAmount = actualPrice * 30 / 100;
//   let priceAfterSale = actualPrice - saleAmount;
//   console.log("1. Price after sale: " + priceAfterSale);
// }

// afterSale();

// // 2. Average score on test
// let testCount = 3;
// let score1 = 89;
// let score2 = 94.9;
// let score3 = 71.3;
// let sum = 0;
// let avg = 0;

// function printAverageScore() {
// sum = score1 + score2 + score3;
// avg = sum / testCount;
// console.log("2. Average test score: " + avg);
// }

// printAverageScore();

// function print() {
//   document.getElementById("result").innerText = output;
// }

// 3. Area of rectangle --------------------------------
// let width = prompt("Width: ");
// let height = prompt("Height: ");
// let area = 0;
// let perimeter = 0;
// let scale = "meter";

function areaOfRec() {
  // let width = prompt("Width: ");
  // let height = prompt("Height: ");
  let area = width * height;
  output = area;

  print();
  // console.log("3.1. Area of rectangle: " + area + scale);
}

function perimeterOfRec() {
  // let width = prompt("Width: ");
  // let height = prompt("Height: ");
  perimeter = width + height;
  output = perimeter;

  print();
  // console.log("3.2. Perimeter of rectangle: " + area + scale);
}

// printAreaOfRectangle();
// printPerimeterOfRectangle();

// // 4. Celsius to Fahrenheit: 21C = ? ---------------------------------
// let cels = 21;
// let fahr = 0;

// function printCelsToFahr() {
// console.log("4.1. Celsius to Fahrenheit: " + (fahr = cels * 9 / 5 + 32) + "F");
// }

// function printFahrToCels() {
// console.log("4.2. Fahrenheit to Celsius: " + (cels = (fahr - 32) * 5 / 9) + "C");
// }

// printCelsToFahr();
// printFahrToCels();

// // 5. Convert minute to hour: min = 200
// let min = 200;
// let hour = 0;

// function printMinToHour() {
// console.log("5.1. Minute to hour: " + (hour = min / 60) + "hour");
// }

// function printHourToMin() {
// console.log("5.2. Hour to minute: " + (min = hour / 60) + "min")
// }

// printMinToHour();
// printHourToMin();

// // =========================================
// // ------- Operater -------

// // == doesn't matter data type
// // === - consider data type

// // ------- Prompt (scanf + alert) -------

// // 1. Check if user's age is allowed to enter Night Club.
// // let stringAge = prompt("Please, enter your age: ");
// // let intAge = Number(stringAge);
// // let isAllowed = (intAge>=21 );
// // console.log("Is it true that you allowed to enter Night Club: " + isAllowed);

// // ------- Logic Operator -------

// // 2. Check if user's age is 21-30.
// // 3. Check if user has an invitation and his/her age is 21+.
// let age1 = prompt("Mr.John, enter your age, please: ");
// let age2 = prompt("Ms.Sarah, enter your age, please: ");
// let JohnHasInvitation = true;
// let SarahHasInvitation = false;

// let JohnsAge = Number(age1);
// let SarahsAge = Number(age2);

// let isBothAllowedByAge = (((JohnsAge >= 21) && (JohnsAge <= 30)) && ((SarahsAge >= 21) && (SarahsAge <= 30)));
// let isOnlyOneAllowedByAge = ((JohnsAge || SarahsAge) >= 21 || (JohnsAge || SarahsAge) <= 30);
// let isBothAllowed = (((JohnsAge && SarahsAge) >= 21 && (JohnsAge && SarahsAge) <= 30) && ((JohnHasInvitation && SarahHasInvitation) == true))

// console.log("Is it true that you guys both allowed to enter Night Club BY AGE: " + isBothAllowedByAge);
// console.log("Is it true that either one of you guys allowed to enter Night Club BY AGE: " + isOnlyOneAllowedByAge);
// console.log("Is it true that you guys both allowed to enter Night Club BY ALL CONDITION: " + isBothAllowed);

// // 4. Check if user's name and pass are matching
// // let usernameSaved = "Biden";
// // let passwordSaved = "Kill Trump";

// // let username = prompt("Please, enter your username: ");
// // let password = prompt("Please, enter your password: ");

// // let isMatching = ((usernameSaved == username) && (passwordSaved == password));
// // let isUsernameOrPasswordNotMatching = ((usernameSaved != username) || (passwordSaved != password));
// // let isBothNotMatching = ((usernameSaved != username) && (passwordSaved != password))

// // console.log("Is it true that your username and password are both matched: " + isMatching);
// // console.log("Is it true that either of your username or password matched: " + isUsernameOrPasswordNotMatching);
// // console.log("Is it true that your username and password are both not matched: " + isBothNotMatching);

// // // 5. Check if user got 18+ score and passed his drom exam.
// // let testScore = prompt("Please, enter your test score: ");
// // let passedDromExam = true;

// // let gonnaGetDriversLicense = ((testScore >= 18) && (passedDromExam == true));

// // console.log("Is it true that you're gonna get you driver's license: " + gonnaGetDriversLicense)

function print() {
  document.getElementById("result1").innerText = output;
}
let output;

// 2-1 --------------
// Even or Odd
function checkEvenOrOdd() {
  let strInput = prompt("Input any number: ");
  let input = Number(strInput);

  if (input % 2 === 0) output = "It's even number!";
  else output = "It's odd number!";

  print();
}

// 2-2 --------------
// Age Group
function checkAgeGroup() {
  let strAge = prompt("Input your age: ");
  let age = Number(strAge);

  // if (age >= 0 && age < 13) output = "You're Baby Child! Ujujuju~";
  // if (age >= 13 && age <= 19) output = "You're Teenager! Happy for your teenage year~";
  // if (age >= 20 && age <= 64) output = "You're Adult. BoRiNg, booooo~";
  // if (age > 64) output = "You're Senior! Урт насалж удаан жаргаарай~";
  // else output = "Your age below 0? I don't think so.."

  if (age > 64) output = "You're Senior! Урт насалж удаан жаргаарай~";
  else if (age >= 20) output = "You're Adult. BoRiNg, booooo~";
  else if (age >= 13) output = "You're Teenager! Happy for your teenage year~";
  else if (age < 13) output = "You're Baby Child! Ujujuju~";
  else output = "Your age below 0? I don't think so..";

  document.getElementById("result2").innerText = output;

  // print();
}

// 2-3 --------------
// Log-in System
function loginSystem() {
  const adminUsername = "admin";
  const adminPassword = "pass123";

  let username = prompt("Enter your username: ");
  let password = prompt("Enter your password: ");
  // let password = Number(password);

  if (adminUsername == username && adminPassword == password)
    output = "Log-in succeed!";
  if (adminUsername != username || adminPassword != password)
    output = "Username or password not matching!";
  else output = "Log-in unsuccesful!";

  document.getElementById("result3").innerText = output;
}

// 2-4 --------------
// Larger Number

function largerNumber() {
  let num1 = prompt("Enter first number: ");
  let num2 = prompt("Enter second number: ");

  if (num1 === num2) output = "Numbers are equal.";
  if (num1 > num2) output = "First number is greater.";
  else output = "Second number is greater.";

  document.getElementById("result4").innerText = output;
}

// 2-5 --------------
// Traffic Light
function trafficLight() {
  let color = prompt("Enter traffic light color: ");

  // if(color === "red") output = "STOP right now!";
  // if(color === "yellow") output = "STOP fast!";
  // if(color === "green") output = "GO GO GO!";
  // else output = "There is no such color in traffic light!"
  // Multiple "if loop" keep check the conditions.

  if (color === "red") output = "STOP right now!";
  else if (color === "yellow") output = "STOP fast!";
  else if (color === "green") output = "GO GO GO!";
  else output = "There is no such color in traffic light!";

  document.getElementById("result5").innerText = output;
}

// 2-6 --------------
// Rock Paper Scissor
function rockPaperScissor() {
  const rock = 1;
  const paper = 2;
  const scissor = 3;

  let strInput1 = prompt("User1: ");
  let strInput2 = prompt("User2: ");
  let user1 = Number(strInput1);
  let user2 = Number(strInput2);

  if (user1 == user2) output = "It's tie!";
  if ((user1 + 1) % 3 == user2 % 3) output = "First user wins.";
  else output = "Second user wins.";

  document.getElementById("result6").innerText = output;
}

// 2-7 --------------
// Grade
function scoreToGrade() {
  let strScr = prompt("Input your score: ");
  let scr = Number(strScr);

  if (scr > 100) output = "Wrong score!";
  else if (scr >= 90) output = "A";
  else if (scr >= 80) output = "B";
  else if (scr >= 70) output = "C";
  else if (scr >= 60) output = "D";
  else if (scr >= 0) output = "F";
  else output = "You cannot enter negative number!";

  document.getElementById("result7").innerText = output;
}

// 2-8 --------------
// Simple Calculator
function operate() {
  let strInput1 = prompt("Enter 1st num: ");
  let op = prompt("Enter operator: ");
  let strInput2 = prompt("Enter 3rd num: ");
  let num1 = Number(strInput1);
  let num2 = Number(strInput2);

  if (op === "+") output = num1 + num2;
  else if (op === "-") output = num1 - num2;
  else if (op === "*") output = num1 * num2;
  else if (op === "/") output = num1 / num2;
  else if (op === "%") output = num1 % num2;
  else output = "We cannot do this operation.";

  document.getElementById("result8").innerText = output;
}

// 2-9 --------------
// Simple Calculator with Tab
// Operands
// function num1() {
//   let num1 = 1;
//   return num1;
// }
// function num2() {
//   let num2 = 2;
//   return num2;
// }
// function num3() {
//   let num3 = 3;
//   return num3;
// }
// function num4() {
//   let num4 = 4;
//   return num4;
// }
// function num5() {
//   let num5 = 5;
//   return num5;
// }
// function num6() {
//   let num6 = 6;
//   return num6;
// }
// function num7() {
//   let num7 = 7;
//   return num7;
// }
// function num8() {
//   let num8 = 8;
//   return num8;
// }
// function num9() {
//   let num9 = 9;
//   return num9;
// }
// function num0() {
//   let num0 = 0;
//   return num0;
// }

// // Operators
// function add() {
//   let add = "+";
//   return num6;
// }
// function sub() {
//   let sub = "-";
//   return sub;
// }
// function mul() {
//   let mul = "*";
//   return mul;
// }
// function div() {
//   let div = "/";
//   return div;
// }
// function rem() {
//   let rem = "%";
//   return rem;
// }

function operate() {
  input1();
  input2();
  input3();

  if (op === "+") output = num1 + num2;
  else if (op === "-") output = num1 - num2;
  else if (op === "*") output = num1 * num2;
  else if (op === "/") output = num1 / num2;
  else if (op === "%") output = num1 % num2;
  else output = "We cannot do this operation.";

  document.getElementById("result8").innerText = output;
}

// 2-10 --------------
// Check Weekday
function weekday() {
  let strInput = prompt("Input weekday by number: ");
  let input = Number(strInput);

  if (input === "1") output = "Monday";
  else if (input === 2) output = "Tuesday";
  else if (input === 3) output = "Wednesday";
  else if (input === 4) output = "Thursday";
  else if (input === 2) output = "Friday";
  else if (input === 3) output = "Saturday";
  else if (input === 4) output = "Sunday";
  else output = "Wrong weekday!";

  document.getElementById("result10").innerText = output;
}

// 2-11 --------------
// Check Leap year
function isLeapYear() {
  let strInput = prompt("Input year: ");
  let input = Number(strInput);

  // if (input % 4 === 0) {
  //   output = "It's a LEAP YEAR.";
  //   if (input % 100 === 0) {
  //     if (input % 400 === 0)
  //       output = "It's a LEAP YEAR.";
  //     else
  //       output = "It's NOT leap year.";
  //   }
  // }

  if (
    (input % 4 === 0 && input % 100 != 0) ||
    (input % 100 === 0 && input % 400 === 0)
  )
    output = "It's a LEAP YEAR.";
  else output = "It's NOT leap year.";

  document.getElementById("result11").innerText = output;
}

// 2-12 --------------
// Triangle Checker
function triangleChecker() {
  let a = prompt("Enter first side of triangle: ");
  let b = prompt("Triangle b side: ");
  let c = prompt("Triangle c side: ");
  a = Number(a);
  b = Number(b);
  c = Number(c);

  let max = 0;

  if (a >= max) max = a;
  else if (b > max) max = b;
  else max = c;

  let sum = a + b + c;
  let sumOfmin2 = sum - max;

  // if (a + b > c && a + c > b && b + c > a) output = "Scalene";
  if (sumOfmin2 <= max) output = "Invalid triangle";
  {
    if (a === b && a === c) output = "Equilateral";
    else if (
      a === b ||
      (a === c && a != b && c != b) ||
      (b === c && b != a && c != a)
    )
      output = "Isosceles";
    else output = output = "Scalene";
  }

  // else {
  //   if (a === b && a === c) output = "Equilateral";
  //   else if (a === b || a === c || b === c) output = "Isosceles";
  // }
  // else if (a === b && a === c) output = "Equilateral";
  // else if ((a === b && a != c && b != c) || (a === c && a != b && c != b) || (b === c && b != a && c != a)) output = "Isosceles";
  // else

  document.getElementById("result12").innerText = output;
}

// 2-13 --------------
// Clock converter
function clockConverter() {
  let input = prompt("Enter an hour: ");
  input = Number(input);

  if (input >= 0 && input <= 24) {
    if (input === 12) output = 12 + "PM";
    else if (input === 0 || input === 24) output = 12 + "AM";
    else if (input > 0 && input > 12) output = input - 12 + "PM";
    else output = input + "AM";
  } else output = "Wrong input.";

  document.getElementById("result13").innerText = output;
}

// 2-14 --------------
// Month Days
function dayOfMonthsChecker() {
  let strInput = prompt("Enter an hour: ");
  let input = Number(strInput);

  if (input > 0 && input <= 12) {
    if (input == 2) output = input + "-month has 28/29 days.";
    else if (input === 4 || input === 6 || input === 9 || input === 11)
      output = input + "-month has 30 days.";
    else output = input + "-month has 31 days.";
  } else output = "Wrong input.";

  document.getElementById("result14").innerText = output;
}

// 2-15 --------------
// ATM Withdrawal
function withdrawal() {
  let strBalance = prompt("Hey! please, tell me your bank balance first: ");
  let balance = Number(strBalance);
  let strAmount = prompt("Enter withdrawal amount: ");
  let amount = Number(strAmount);
  let cashCount;

  if (balance <= 10000) {
    if (amount % 100 === 0) {
      cashCount = amount / 100;
      output = "I'm giving you " + cashCount + " - 100 bucket";
    } else if (amount % 50 === 0) {
      cashCount = amount / 50;
      output = "I'm giving you " + cashCount + " - 50 bucket";
    } else if (amount % 20 === 0) {
      cashCount = amount / 20;
      output = "I'm giving you " + cashCount + " - 20 bucket";
    } else if (amount % 10 === 0) {
      cashCount = amount / 10;
      output = "I'm giving you " + cashCount + " - 10 bucket";
    } else output = "Sorry, we don't do withdrawal by pin money. ";
  } else output = "Oops! You cannot have more than $10000.";

  document.getElementById("result15").innerText = output;
}

// 2-16 --------------
// Employee bonus calculator
function employeeBonus() {
  let input = prompt("Enter an amount of sales you've done in a month: ");
  input = Number(input);
  let rank;
  let bonus;
  let totalMoney;

  if (input >= 5000) rank = "Special";
  else if (input >= 3000) rank = "Good";
  else if (input >= 1000) rank = "Average";
  else rank = "Need to improve";

  function calculateTotalMoney(bonus) {
    totalMoney = input + input * (bonus / 100);
    output =
      "Your rank is " +
      rank +
      ", so you will get " +
      bonus +
      "% then your total money will be $" +
      totalMoney +
      ".";
  }

  if (rank === "Special") {
    bonus = 12;
    calculateTotalMoney(bonus);
  } else if (rank === "Good") {
    bonus = 8;
    calculateTotalMoney(bonus);
  } else if (rank === "Average") {
    bonus = 5;
    calculateTotalMoney(bonus);
  } else {
    bonus = 2;
    calculateTotalMoney(bonus);
  }

  document.getElementById("result16").innerText = output;
}

// 2-17 --------------
// Price after discount calculator
function calculatePriceAfterDiscount() {
  let input = prompt("Enter the total price: ");
  input = Number(input);
  let discount;
  let priceAfterDiscount;

  if (input > 1000) discount = 15;
  else if (input >= 500) discount = 10;
  else discount = 5;

  priceAfterDiscount = input - input * (discount / 100);
  output =
    "Your total is $" +
    input +
    ", so you will get " +
    discount +
    "% of discount, then the price after discount will be $" +
    priceAfterDiscount +
    ".";

  document.getElementById("result17").innerText = output;
}

// 2-18 --------------
// Check prime number
function checkPrimeNumber() {
  let input = prompt("Enter a number: ");
  input = Number(input);

  if (input === 1) output = input + " is Prime Number.";
  else if (input > 1) {
    for (let i = 2; i > sqr(input); i++) {
      if (input % i === 0) output = input + " is Prime Number.";
      else output = input + " is NOT Prime Number.";
    }
  }

  document.getElementById("result18").innerText = output;
}

// 2-19 --------------
// Tic Tac Toe



// 2-20 --------------
// Tic Tac Toe
