/* Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:

Entrada:
45

Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura. */

// Selecting screen elements
const valor = document.querySelector('#valor');
const answer = document.querySelector('#answer');
const alerta = document.querySelector('#alerta');
const botao = document.querySelector('#vetor');
const coluna = document.querySelector('#coluna');

valor.onblur = () => {
    if (valor.value == '') {
        coluna.style = "color: #b33700";
        valor.style = "border-color: #b33700";
    } else {
        coluna.style = "color: #00aa44";
        valor.style = "border-color: #00aa44";
    }
}

botao.onclick = () => {
    if (valor.value == ''){
        valor.focus();
    } else if (valor.value <= 0) {
        valor.value = '';      
        alerta.innerText = "Somente valores maiores que 0";    
    } else {
        //answer.value = vetorStrange(valor.value);
        alerta.innerText = '';
        document.getElementById("paragraf3").innerText = 'vetor Estranho = ' + vetorStrange(valor.value);        
    }
}

const vetorStrange = (vl) => {
    vl = Number.parseInt(vl);
    
    let vetorEstranho = [];

    for (i = 1; i <= vl; i++) {
        vetorEstranho[i] = i;
        if (i % 5 == 0) {
            vetorEstranho[i] = 'Luidy';
        } else if (i % 9 == 0) { 
            vetorEstranho[i] = 'Moura';
        } else if (i % 5 == 0 && i % 9 == 0) {
            vetorEstranho[i] = 'LuidyMoura';
        }
    }
    return vetorEstranho;
}

