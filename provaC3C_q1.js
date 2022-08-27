/* Q.1 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo) */

// Selecting screen elements
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const res = document.querySelector('#tipo');
const btn = document.querySelector('#verificar');
const la = document.querySelector('#la');
const lb = document.querySelector('#lb');
const lc = document.querySelector('#lc');
const test = document.querySelector("#teste");
const comparing = document.querySelector("#comparar");
const proving = document.querySelector("#provar");
const aviso = document.querySelector("#aviso");

a.onblur = () => {
    if (a.value == '') {
        la.style = "color: #b33700";
        a.style = "border-color: #b33700";
    } else {
        la.style = "color: #00aa44";
        a.style = "border-color: #00aa44";
    }
}

b.onblur = () => {
    if (b.value == '') {
        lb.style = "color: #b33700";
        b.style = "border-color: #b33700";
    } else {
        lb.style = "color: #00aa44";
        b.style = "border-color: #00aa44";
    }
}

c.onblur = () => {
    if (a.value == '') {
        lc.style = "color: #b33700";
        c.style = "border-color: #b33700";
    } else {
        lc.style = "color: #00aa44";
        c.style = "border-color: #00aa44";
    }
}

btn.onclick = () => {
    if (a.value == '' && b.value != '' && c.value != ''){
        a.focus();
    } else if (a.value != '' && b.value == '' && c.value != '') {
        b.focus();
    } else if (a.value != '' && b.value != '' && c.value == '') {
        c.focus();
    } else if (a.value < 0 || b.value < 0 || c.value < 0) {
        a.value = '';
        b.value = '';
        c.value = '';
        res.value = '';
        aviso.innerText = "Somente valores maiores que 0";        
    } else {
        res.value = tipo(a.value, b.value, c.value);
        aviso.innerText = '';
    }
}

const tipo = (lado1, lado2, lado3) => {
    existe = false;        
    lado1 = Number.parseFloat(lado1);
    lado2 = Number.parseFloat(lado2);
    lado3 = Number.parseFloat(lado3);

    if (lado1 >= lado2) {
        if (lado3 < lado1+lado2 && lado3 > lado1-lado2) {
            teste.innerText = 'Triângulo existe';
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado3 > lado1+lado2) {
                proving.innerText = 'lado3 > lado1 + lado2';
                comparing.innerText = parseFloat(lado3) + ' > (' + parseFloat(lado1) + ' + ' + parseFloat(lado2) + ') ==> ' + parseFloat(lado3) + ' > ' + parseFloat(lado1+lado2);
            } else if (lado3 < lado1-lado2){
                proving.innerText = 'lado3 < lado1 - lado2';
                comparing.innerText = parseFloat(lado3) + ' < (' + parseFloat(lado1) + ' - ' + parseFloat(lado2) + ') ==> ' + parseFloat(lado3) + ' < ' + parseFloat(lado1-lado2);
            }
            existe = false;
            return aviso.innerText = '';
        }
    } else if (lado2 >= lado1) {
        if (lado3 < lado1+lado2 && lado3 > lado2-lado1) {
            teste.innerText = 'Triângulo existe';
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado3 > lado1+lado2) {
                proving.innerText = 'lado3 > lado1 + lado2';
                comparing.innerText = parseFloat(lado3) + ' > (' + parseFloat(lado1) + ' + ' + parseFloat(lado2) + ') ==> ' + parseFloat(lado3) + ' > ' + parseFloat(lado1+lado2);
            } else if (lado3 < lado2-lado1){
                proving.innerText = 'lado3 < lado2 - lado1';
                comparing.innerText = parseFloat(lado3) + ' < (' + parseFloat(lado2) + ' - ' + parseFloat(lado1) + ') ==> ' + parseFloat(lado3) + ' < ' + parseFloat(lado2-lado1);
            }
            existe = false;
            return aviso.innerText = '';
        }
    } else if (lado1 >= lado3) {
        if (lado2 < lado1+lado3 && lado2 > lado1-lado3) {
            teste.innerText = 'Triângulo existe';
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado2 > lado1+lado3) {
                proving.innerText = 'lado2 > lado1 + lado3';
                comparing.innerText = parseFloat(lado2) + ' > (' + parseFloat(lado1) + ' + ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado2) + ' > ' + parseFloat(lado1+lado3);
            } else if (lado2 < lado1-lado3){
                proving.innerText = 'lado2 < lado1 - lado3';
                comparing.innerText = parseFloat(lado2) + ' < (' + parseFloat(lado1) + ' - ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado2) + ' < ' + parseFloat(lado1-lado3);
            }
            existe = false;
            return aviso.innerText = '';
        }
    } else if (lado3 >= lado1) {
        if (lado2 < lado1+lado3 && lado2 > lado3-lado1) {
            teste.innerText = 'Triângulo existe';
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado2 > lado1+lado3) {
                proving.innerText = 'lado2 > lado1 + lado3';
                comparing.innerText = parseFloat(lado2) + ' > (' + parseFloat(lado1) + ' + ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado2) + ' > ' + parseFloat(lado1+lado3);
            } else if (lado2 < lado3-lado1){
                proving.innerText = 'lado2 < lado3 - lado1';
                comparing.innerText = parseFloat(lado2) + ' < (' + parseFloat(lado3) + ' - ' + parseFloat(lado1) + ') ==> ' + parseFloat(lado2) + ' < ' + parseFloat(lado3-lado1);
            }
            existe = false;
            return aviso.innerText = '';
        }
    } else if (lado2 >= lado3) {
        if (lado1 < lado2+lado3 && lado1 > lado2-lado3) {
            teste.innerText = 'Triângulo existe';
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado1 > lado2+lado3) {
                proving.innerText = 'lado1 > lado2 + lado3';
                comparing.innerText = parseFloat(lado1) + ' > (' + parseFloat(lado2) + ' + ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado1) + ' > ' + parseFloat(lado2+lado3);
            } else if (lado1 < lado2-lado3){
                proving.innerText = 'lado1 < lado2 - lado3';
                comparing.innerText = parseFloat(lado1) + ' < (' + parseFloat(lado2) + ' - ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado1) + ' < ' + parseFloat(lado2-lado3);
            }
            existe = false;
            return aviso.innerText = '';
        }
    } else if (lado3 >= lado2) {
        if (lado1 < lado2+lado3 && lado1 > lado3-lado2) {
            teste.innerText = 'Triângulo existe';            
            existe = true;
            proving.innerText = '';
            comparing.innerText = '';
        } else {
            teste.innerText = 'Triângulo não existe';
            if (lado1 > lado2+lado3) {
                proving.innerText = 'lado1 > lado2 + lado3';
                comparing.innerText = parseFloat(lado1) + ' > (' + parseFloat(lado2) + ' + ' + parseFloat(lado3) + ') ==> ' + parseFloat(lado1) + ' > ' + parseFloat(lado2+lado3);
            } else if (lado1 < lado3-lado2){
                proving.innerText = 'lado1 < lado3 - lado2';
                comparing.innerText = parseFloat(lado1) + ' < (' + parseFloat(lado3) + ' - ' + parseFloat(lado2) + ') ==> ' + parseFloat(lado1) + ' < ' + parseFloat(lado3-lado2);
            }
            existe = false;
            return aviso.innerText = '';
        }
    }

    if (existe == true) {        
        if (lado1 == lado2 && lado2 == lado3) {
            return aviso.innerText = 'Triângulo Equilátero';           
        } else if (
        // lado1 != lado2
        lado1 != lado2 && lado2 == lado3 || lado1 != lado2 && lado1 == lado3 || 
        // lado1 != lado3
        lado1 != lado3 && lado2 == lado3 || lado1 != lado3 && lado1 == lado2 || 
        // lado2 != lado3
        lado2 != lado3 && lado1 == lado3 || lado2 != lado3 && lado1 == lado2) {
            return aviso.innerText = 'Triângulo Isósceles';
        } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
            return aviso.innerText = 'Triângulo Escaleno';
        } 
    }
    
}

document.getElementById("paragraf0").innerText = '--------------------------------------------------------------------------------------------------------------------------------------';
