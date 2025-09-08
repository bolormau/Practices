// CALCULATOR

// to dos:
// - clear, ac function
// - multiple operation logic
// - negative and positive operation function

let input, current, currentVal;
let n1 = null,
  n2 = null,
  op = null,
  msg = "0";

function display(msg) {
  document.getElementById("display").innerText = msg;
}

function clickNum(input) {
  if (input === "=") {
    getResult();
  } else if (input === "/" || input === "*" || input === "+" || input === "-") {
    if (n1 !== null && n2 === null) {
      op = input;
      msg = op;
      console.log("op = " + op);
    }
  } else if (input === "sign") {
    if (current === "n1") {
      if (Number(n1) > 0) {
        n1 = "-" + n1;
        msg = n1;
      } else if (Number(n1) < 0) {
        n1 = n1.slice(1);
        msg = n1;
      }
      console.log("n1 = " + n1);
    }
    if (current === "n2") {
      if (Number(n2) > 0) {
        n2 = "-" + n2;
        msg = n2;
      } else if (Number(n2) < 0) {
        n2 = n2.slice(1);
        msg = n2;
      }
      console.log("n2 = " + n2);
    }
  } else if (input === "<") {
    msg = msg.slice(0, -1);
    if (current === "result") {
      if (result.length === 1) result = null;
      else result = result.slice(0, -1);
      console.log("result = " + result);
    } else if (current === "n1") {
      if (n1.length === 1) n1 = null;
      else n1 = n1.slice(0, -1);
      console.log("n1 = " + n1);
    } else if (current === "n2") {
      if (n2.length === 1) n2 = null;
      else n2 = n2.slice(0, -1);
      console.log("n2 = " + n2);
    }
  } else if (input === "clear") {
    msg = "";
    if (current === "n1") {
      n1 = null;
      console.log("n1 = " + n1);
    } else if (current === "n2") {
      n2 = null;
      console.log("n2 = " + n2);
    } else if (current === "result") {
      n1 = null;
      n2 = null;
      op = null;
      console.log("n1 = " + n1);
      console.log("n2 = " + n2);
      console.log("op = " + op);
    }
  } else if (input == "ac") {
    msg = "0";
    n1 = null;
    n2 = null;
    op = null;
    console.log("n1 = " + n1);
    console.log("n2 = " + n2);
    console.log("op = " + op);
  } else {
    if (op === null) {
      if (n1 === null) {
        n1 = input;
      } else {
        n1 += input;
      }
      current = "n1";
      msg = n1;
      console.log("n1 = " + n1);
    } else {
      if (n2 === null) {
        n2 = input;
      } else {
        n2 += input;
      }
      msg = n2;
      current = "n2";
      console.log("n2 = " + n2);
    }
  }
  display(msg);
}

function getResult() {
  if (op !== null && n1 !== null && n2 !== null) {
    n1 = Number(n1);
    n2 = Number(n2);

    if (op === "/") {
      result = n1 / n2;
    } else if (op === "*") {
      result = n1 * n2;
    } else if (op === "-") {
      result = n1 - n2;
    }
    if (op === "+") {
      result = n1 + n2;
    }
    msg = result;
    current = "result";
    console.log("result = " + result);
  } else msg = "Cannot do operation.";
}
