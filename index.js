const btn = document.querySelector('btn')
const screen = document.getElementById('screen')
const small_screen = document.getElementById('small_screen')
let n1 = '';
let n2 = '';
let operator = '';
let has_point = false;


function print(e){
    if(screen.innerText.length < 16){
        if(screen.innerText === '0'){
            screen.innerText = ''
        }
        if(has_point){
            if(e.target.value === '.'){
                return
            }   
        }
        if(e.target.value === '.'){
            has_point = true
        }
        screen.innerText += e.target.value;
        monitoring_size()
    }
}

function monitoring_size(){
    if(screen.innerText.length > 11 && screen.innerText.length < 16){
        screen.style.fontSize = "2rem"; }
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
        button_equal(n1, n2, operator)
    }
}

function button_equal(n1, n2, operator){
    n1 = (+small_screen.innerText.slice(0,-1));
    n2 = (+screen.innerText);
    operator = small_screen.innerText.slice(-1);
    small_screen.innerText = calculate(n1, n2, operator);
    screen.innerText = small_screen.innerText;
}

function calculate(n1, n2, operator){
    let result = ''
    if(operator === '+'){
        result = n1+n2
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

function func_ce(){
    if(screen.innerText === small_screen.innerText){
        func_c()
        return
    }
    screen.innerText = 0;
}
