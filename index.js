const btn = document.querySelector("btn");
const screen = document.getElementById("screen");
const small_screen = document.getElementById("small_screen");
let n1 = "";
let n2 = "";
let operator = "";
let result = "";


function clicou(e) {
  if (screen.innerText.length < 11) {
    if (screen.innerText === "0") {
      screen.innerText = "";
    }
    if (e.target.value === "." && screen.innerText.indexOf(".") > -1) {
      return;
    }
    screen.innerText += e.target.value;
  }
}

function operacao(e) {
  if (operator === "") {
    operator = e.target.value;
    small_screen.innerText = screen.innerText;
    small_screen.innerText += operator;
    screen.innerText = 0;
  } else if (
    e.target.value === "+" ||
    e.target.value === "-" ||
    e.target.value === "/" ||
    e.target.value === "*"
  ) {
    n1 = +small_screen.innerText.slice(0, -1);
    n2 = +screen.innerText;
    result = calculate(n1, n2, operator);
    if (result.toString().length > 11) {
      result = adjust_result(result);
    }
    console.log(result);
    small_screen.innerText = result;
    operator = e.target.value;
    small_screen.innerText += operator;
    screen.innerText = 0;
  } else if (e.target.value === "=") {
    button_equal(n1, n2, operator);
  }
}

function button_equal(n1, n2, operator) {
    if(small_screen.innerText.indexOf('=') > -1){
        func_c()
    }
  n1 = +small_screen.innerText.slice(0, -1);
  n2 = +screen.innerText;
  operator = small_screen.innerText.slice(-1);
  result = calculate(n1, n2, operator);
  if (result.toString().length > 11) {
    result = adjust_result(result);
  }
  small_screen.innerText = result;
  screen.innerText = small_screen.innerText;
}

function adjust_result(result) {
  result_string = result.toString();
  result = +result_string.slice(0, 11);
  console.log(result);
  return result;
}

function calculate(n1, n2, operator) {
  if (operator === "+") {
    return n1 + n2;
  }
  if (operator === "-") {
    return n1 - n2;
  }
  if (operator === "*") {
    return n1 * n2;
  }
  if (operator === "/") {
    return n1 / n2;
  }
  if(operator === '='){
    return screen.innerText
  }
}

function del() {
  let tela = screen.innerText;
  screen.innerText = tela.slice(0, -1);
  small_screen.innerText = screen.innerText;
  if (tela.length === 1) {
    screen.innerText = "0";
    small_screen.innerText = "0";
  }
}

function func_c() {
  screen.innerText = 0;
  small_screen.innerText = 0;
  operator = "";
  result = "";
}

function func_ce() {
  if (screen.innerText === small_screen.innerText) {
    func_c();
    return;
  }
  screen.innerText = 0;
}
