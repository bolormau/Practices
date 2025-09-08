// ========= Game Structure =========
// default value = "?"
// turn - odd = O; even = X
// if: turn > 9 => Game over & if: Game over => Game over
// else: Game can be contiued
//   

let turn = 1;
let s11 = "?";
let s12 = "?";
let s13 = "?";
let s21 = "?";
let s22 = "?";
let s23 = "?";
let s31 = "?";
let s32 = "?";
let s33 = "?";
let msgFilled = "Already filled! Try another position.";
let gameOver = false;

function ticTacToe(pos) {
  if (gameOver === true || turn > 9) {
    showMsg("Game over!");
  } 
  
  else {
    let sign;
    if (turn % 2 === 1) {
      sign = "o";
    } else {
      sign = "x";
    }

    let filled = false;
    if (pos === 11 && s11 === "?") {
      s11 = sign;
      document.getElementById("s11").innerText = sign;
      filled = true;
    } else if (pos === 12 && s12 === "?") {
      s12 = sign;
      document.getElementById("s12").innerText = sign;
      filled = true;
    } else if (pos === 13 && s13 === "?") {
      s13 = sign;
      document.getElementById("s13").innerText = sign;
      filled = true;
    } else if (pos === 21 && s21 === "?") {
      s21 = sign;
      document.getElementById("s21").innerText = sign;
      filled = true;
    } else if (pos === 22 && s22 === "?") {
      s22 = sign;
      document.getElementById("s22").innerText = sign;
      filled = true;
    } else if (pos === 23 && s23 === "?") {
      s23 = sign;
      document.getElementById("s23").innerText = sign;
      filled = true;
    } else if (pos === 31 && s31 === "?") {
      s31 = sign;
      document.getElementById("s31").innerText = sign;
      filled = true;
    } else if (pos === 32 && s32 === "?") {
      s32 = sign;
      document.getElementById("s32").innerText = sign;
      filled = true;
    } else if (pos === 33 && s33 === "?") {
      s33 = sign;
      document.getElementById("s33").innerText = sign;
      filled = true;
    } else {
      showMsg(msgFilled);
    }

    if (filled === true) {
      if (checkWinner(sign) == true) {
        showMsg(sign + " wins!");
        gameOver = true;
      } else if (turn === 9) {
        showMsg("It's a draw!");
        gameOver = true;
      }
      turn++;
    }
  }
}

function checkWinner(sign) {
  if (s11 === sign && s12 === sign && s13 === sign) return true;
  if (s21 === sign && s22 === sign && s23 === sign) return true;
  if (s31 === sign && s32 === sign && s33 === sign) return true;
  if (s11 === sign && s21 === sign && s31 === sign) return true;
  if (s12 === sign && s22 === sign && s32 === sign) return true;
  if (s13 === sign && s23 === sign && s33 === sign) return true;
  if (s11 === sign && s22 === sign && s33 === sign) return true;
  if (s13 === sign && s22 === sign && s31 === sign) return true;

  return false;
}

function showMsg(message) {
  document.getElementById("msg").innerText = message;
}










// // if (value == "?") {
// //   if(sign == "o") {
// //     value = sign;
// //   } else value = sign;
// // }
// // else msg = "Already taken.";

// ----------------------------------------
// let pos;
// let sign;
// let msg;

// let turn = 1;
// let s11 = "?";
// let s12 = "?";
// let s13 = "?";
// let s21 = "?";
// let s22 = "?";
// let s23 = "?";
// let s31 = "?";
// let s32 = "?";
// let s33 = "?";
// let msgFilled = "Already filled! Try another position.";

// function tap11() {
//   ticTacToe(11);
// }
// function tap12() {
//   ticTacToe(12);
// }
// function tap13() {
//   ticTacToe(13);
// }
// function tap21() {
//   ticTacToe(21);
// }
// function tap22() {
//   ticTacToe(22);
// }
// function tap23() {
//   ticTacToe(23);
// }
// function tap31() {
//   ticTacToe(31);
// }
// function tap32() {
//   ticTacToe(32);
// }
// function tap33() {
//   ticTacToe(33);
// }

// function ticTacToe(pos) {
//   function fxorfo(sign) {
//     sign = "o";
//     filler(pos, sign);
//     checker();
//   }

//   function fx(sign) {
//     sign = "x";
//     filler(pos, sign);
//     checker();
//   }

//   function msg(msg) {
//     document.getElementById("msg").innerText = msg;
//   }

//   if (turn > 9) {
//     showMsg("Game Over!");
//   }
//    else {
//      if (turn % 2 == 0) {
//         sign = "x";
//      else sign = "o";
//    }

//   function checkWinner(sign) {
//   if (s11 === sign && s12 === sign && s13 === sign) return true;
//   if (s21 === sign && s22 === sign && s23 === sign) return true;
//   if (s31 === sign && s32 === sign && s33 === sign) return true;
//   if (s11 === sign && s21 === sign && s31 === sign) return true;
//   if (s12 === sign && s22 === sign && s32 === sign) return true;
//   if (s13 === sign && s23 === sign && s33 === sign) return true;
//   if (s11 === sign && s22 === sign && s33 === sign) return true;
//   if (s13 === sign && s22 === sign && s31 === sign) return true;

//   return false;
// }

//   function filler(pos, sign) {
//     if (pos === 11 && s11 == "?") {
//         s11 = sign;
//         document.getElementById("s11").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 12) {
//       if (s12 == "?") {
//         s12 = sign;
//         document.getElementById("s12").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 13) {
//       if (s13 == "?") {
//         s13 = sign;
//         document.getElementById("s13").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 21) {
//       if (s21 == "?") {
//         s21 = sign;
//         document.getElementById("s21").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 22) {
//       if (s22 == "?") {
//         s22 = sign;
//         document.getElementById("s22").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 23) {
//       if (s23 == "?") {
//         s23 = sign;
//         document.getElementById("s23").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 31) {
//       if (s31 == "?") {
//         s31 = sign;
//         document.getElementById("s31").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 32) {
//       if (s32 == "?") {
//         s32 = sign;
//         document.getElementById("s32").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 33) {
//       if (s33 == "?") {
//         s33 = sign;
//         document.getElementById("s33").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     // else msg("Invalid position!");
//   }
// }

// //   function fo() {
// //     sign = "o";
// //     filler(pos, sign);
// //     checker();
// //   }

// //   function fx() {
// //     sign = "x";
// //     filler(pos, sign);
// //     checker();
// //   }

// //   function msg(msg) {
// //     document.getElementById("msg").innerText = msg;
// //   }

// //   if (turn % 2 === 0 && turn < 5) {
// //     fx(pos);
// //   } else if (turn % 2 != 0 && turn < 5) {
// //     fo(pos);
// //   } else msg = "Game over!";
// // }

// // if (value == "?") {
// //   if(sign == "o") {
// //     value = sign;
// //   } else value = sign;
// // }
// // else msg = "Already taken.";

// ----------------------------------------
// let pos;
// let sign;
// let msg;

// let turn = 1;
// let s11 = "?";
// let s12 = "?";
// let s13 = "?";
// let s21 = "?";
// let s22 = "?";
// let s23 = "?";
// let s31 = "?";
// let s32 = "?";
// let s33 = "?";
// let msgFilled = "Already filled! Try another position.";

// function tap11() {
//   ticTacToe(11);
// }
// function tap12() {
//   ticTacToe(12);
// }
// function tap13() {
//   ticTacToe(13);
// }
// function tap21() {
//   ticTacToe(21);
// }
// function tap22() {
//   ticTacToe(22);
// }
// function tap23() {
//   ticTacToe(23);
// }
// function tap31() {
//   ticTacToe(31);
// }
// function tap32() {
//   ticTacToe(32);
// }
// function tap33() {
//   ticTacToe(33);
// }

// function ticTacToe(pos) {
//   function fo(sign) {
//     sign = "o";
//     filler(pos, sign);
//     checker();
//   }

//   function fx(sign) {
//     sign = "x";
//     filler(pos, sign);
//     checker();
//   }

//   function msg(msg) {
//     document.getElementById("msg").innerText = msg;
//   }

//   if (turn > 9) {
//     showMsg("Game Over!");
//   }
//    else if (turn % 2 != 0 && turn < 5) {
//     fo(pos);
//   } else msg = "Game over!";

//   function checker() {
//     if (
//       ((s11 && s12 && s13) ||
//         (s21 && s22 && s23) ||
//         (s31 && s32 && s33) ||
//         (s11 && s21 && s31) ||
//         (s12 && s22 && s32) ||
//         (s13 && s23 && s33) ||
//         (s11 && s22 && s33) ||
//         (s13 && s22 && s31)) === "o"
//     ) {
//       msg("O wins!");
//     } else if (
//       ((s11 === "o" && s12 === "o" && s13 === "o") ||
//         (s21 && s22 && s23) ||
//         (s31 && s32 && s33) ||
//         (s11 && s21 && s31) ||
//         (s12 && s22 && s32) ||
//         (s13 && s23 && s33) ||
//         (s11 && s22 && s33) ||
//         (s13 && s22 && s31)) === "x"
//     ) {
//       document.getElementById("msg").innerText = "X wins!";
//     }
//   }

//   function filler(pos, sign) {
//     if (pos === 11 && s11 == "?") {
//         s11 = sign;
//         document.getElementById("s11").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 12) {
//       if (s12 == "?") {
//         s12 = sign;
//         document.getElementById("s12").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 13) {
//       if (s13 == "?") {
//         s13 = sign;
//         document.getElementById("s13").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 21) {
//       if (s21 == "?") {
//         s21 = sign;
//         document.getElementById("s21").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 22) {
//       if (s22 == "?") {
//         s22 = sign;
//         document.getElementById("s22").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 23) {
//       if (s23 == "?") {
//         s23 = sign;
//         document.getElementById("s23").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 31) {
//       if (s31 == "?") {
//         s31 = sign;
//         document.getElementById("s31").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 32) {
//       if (s32 == "?") {
//         s32 = sign;
//         document.getElementById("s32").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     else if (pos === 33) {
//       if (s33 == "?") {
//         s33 = sign;
//         document.getElementById("s33").innerText = sign;
//         turn++;
//       } else
//         document.getElementById("msg").innerText = msgFilled;
//     }
//     // else msg("Invalid position!");
//   }
// }

// //   function fo() {
// //     sign = "o";
// //     filler(pos, sign);
// //     checker();
// //   }

// //   function fx() {
// //     sign = "x";
// //     filler(pos, sign);
// //     checker();
// //   }

// //   function msg(msg) {
// //     document.getElementById("msg").innerText = msg;
// //   }

// //   if (turn % 2 === 0 && turn < 5) {
// //     fx(pos);
// //   } else if (turn % 2 != 0 && turn < 5) {
// //     fo(pos);
// //   } else msg = "Game over!";
// // }
