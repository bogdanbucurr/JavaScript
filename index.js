const display = document.getElementById('calc-display');

let exp = [];


function evaluateExp() {
    const mathExpress = exp.join('');
    const res = eval(mathExpress);
    display.innerText = res;
    exp = [];
}


function handleCalcBtn(e) {
    let value = e.innerText;

    console.log(value)
    if (value === '␈' && exp.length > 1) {
        exp.pop();
        display.innerText = exp.join('');
        return;
    }
    if (value === 'x') {
        value = '*';
    }
    if (value === '÷') {
        value = '/';
    }
    if (value === 'C') {
        display.innerText = 0;
        exp = [];
        return;
    }
    if (value === '=') {
        evaluateExp();
        return;
    }

    if(value === '√'){
        const v = Number(exp.join(''));
        const res = Math.sqrt(v);
        display.innerText = res;
        exp = [];
        return
    }

    if (exp.length === 11) {
        return;
    }
    exp.push(value);
    display.innerText = exp.join('');
}




