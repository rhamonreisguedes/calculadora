const btn = document.querySelector('btn')
const screen = document.getElementById('screen')
const small_screen = document.getElementById('small_screen')
let n1 = '';
let n2 = '';
let operator = '';



function print(e){
    if(screen.innerText === '0'){
        screen.innerText = ''
    }
    screen.innerText += e.target.value;
}

function operacao(e){
    if(operator === ''){
        operator = e.target.value;
        small_screen.innerText = screen.innerText;
        small_screen.innerText += operator;
        screen.innerText = 0;
    }else if(e.target.value === '+' || e.target.value === '-' ||  e.target.value === '/' ||  e.target.value === '*'){
        n1 = (+small_screen.innerText.slice(0,-1));
        n2 = (+screen.innerText);
        small_screen.innerText = calculate(n1, n2, operator);
        operator = e.target.value;
        small_screen.innerText += operator;
        screen.innerText = 0;
    }else if(e.target.value === '='){
        n1 = (+small_screen.innerText.slice(0,-1));
        n2 = (+screen.innerText);
        operator = small_screen.innerText.slice(-1);
        small_screen.innerText = calculate(n1, n2, operator);
        screen.innerText = small_screen.innerText;
    }
}

function calculate(n1, n2, operator){
    if(operator === '+'){
        return n1+n2;
    }
    if(operator === '-'){
        return n1-n2;
    }
    if(operator === '*'){
        return n1*n2;
    }
    if(operator === '/'){
        return n1/n2;
    }
}

function del(){
    let tela = screen.innerText;
    screen.innerText = tela.slice(0, -1);
    small_screen.innerText = screen.innerText;
    if(tela.length === 1){
        screen.innerText = '0'; 
        small_screen.innerText = '0';
    }
}

function func_c(){
    screen.innerText = 0;
    small_screen.innerText = 0;
    operator = ''
}

