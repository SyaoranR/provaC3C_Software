/* Q.2 Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara.  

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

const v1 = document.querySelector('#v1');
const v2 = document.querySelector('#v2');
const v3 = document.querySelector('#v3');
const resp = document.querySelector('#resp');
const butn = document.querySelector('#calcular');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
// const delt = document.querySelector("#delt");
// const x = document.querySelector("#x");
const warn = document.querySelector("#warn");


v1.onblur = () => {
    if (v1.value == '') {
        label1.style = "color: #b33700";
        v1.style = "border-color: #b33700";
    } else {
        label1.style = "color: #00aa44";
        v1.style = "border-color: #00aa44";
    }
}

v2.onblur = () => {
    if (v2.value == '') {
        label2.style = "color: #b33700";
        v2.style = "border-color: #b33700";
    } else {
        label2.style = "color: #00aa44";
        v2.style = "border-color: #00aa44";
    }
}

v3.onblur = () => {
    if (v3.value == '') {
        label3.style = "color: #b33700";
        v3.style = "border-color: #b33700";
    } else {
        label3.style = "color: #00aa44";
        v3.style = "border-color: #00aa44";
    }
}

butn.onclick = () => {
    if (v1.value == '' && v2.value != '' && v3.value != ''){
        v1.focus();
    } else if (v1.value != '' && v2.value == '' && v3.value != '') {
        v2.focus();
    } else if (v1.value != '' && v2.value != '' && v3.value == '') {
        v3.focus();
    } else if (v1.value <= 0) {
        warn.innerText = "Somente valor maior que 0";
    } else {
        resp.value = bhaskara(v1.value, v2.value, v3.value);
        warn.innerText = '';
    }
}

function bhaskara(vA, vB, vC) {
    vA = Number.parseFloat(vA);
    vB = Number.parseFloat(vB);
    vC = Number.parseFloat(vC);

    let x1 = 0;
    let x2 = 0;    
    let vX = Array();

    let delta = parseFloat(Math.pow(vB) - 4 * vA * vC);

    if (delta < 0) {
        return warn.innerText = "Delta é negativo";
    } else {
        x1 = parseFloat(-vB + Math.sqrt(delta) / vA*2);
        x2 = parseFloat(-vB - Math.sqrt(delta) / vA*2);
        
        vX[0] = x1;
        vX[1] = x2;
        vX[0] = Number.parseFloat(vX[0]);
        vX[1] = Number.parseFloat(vX[1]);
        console.log(x1);
        console.log(x2);
        console.log(vX);
        return vX;
        
    }
    
}

document.getElementById("paragraf1").innerText = '--------------------------------------------------------------------------------------------------------------------------------------';