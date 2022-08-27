/* Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. */

// Selecting screen elements
const nota = document.querySelector('#nota');
const result = document.querySelector('#result');
const r = document.querySelector('#r');
const button = document.querySelector('#ver');
const label = document.querySelector('#label');

nota.onblur = () => {
    if (nota.value == '') {
        label.style = "color: #b33700";
        nota.style = "border-color: #b33700";
    } else {
        label.style = "color: #00aa44";
        nota.style = "border-color: #00aa44";
    }
}

button.onclick = () => {
    if (nota.value == ''){
        nota.focus();
    } else if (nota.value > 100 || nota.value < 0) {
        nota.value = '';      
        r.innerText = "Somente valores entre 0 e 100";
    // } else if () {

    // } else if () {
    } else {
        result.value = grade(nota.value);
        r.innerText = '';
    }
}

const grade = (nt) => {
    nt = Number.parseFloat(nt);
    
    if (nt < 40 && nt >= 38) {
        nt = 40;
        return 'Nota arrendondada : ' + nt + ' Aprovado';
    } else if (nt > 40) {
        if ((nt + 1) % 5 == 0)  {
            nt = nt + 1;
            return 'Nota arrendondada : ' + nt + ' Aprovado';
        } else if ((nt + 2) % 5 == 0){
            nt = nt + 2;
            return 'Nota arrendondada: ' + nt + ' Aprovado';
        } else if ((nt + 3) % 5 == 0) {
            nt = nt + 3;
            return 'Nota arrendondada : ' + nt + ' Aprovado';
        } else if (nt % 5 == 0){
            return 'Nota : ' + nt + ' Aprovado';
        }
    } else if (nt < 38) {
        return 'Nota : ' + nt + ' Reprovado';
    }

}

document.getElementById("paragraf2").innerText = '--------------------------------------------------------------------------------------------------------------------------------------';