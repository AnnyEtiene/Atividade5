var nota1, nota2, nota3;
nota1 = parseFloat(prompt("Escreva sua primeira nota:"));
nota2 = parseFloat(prompt("Escreva sua segunda nota:"));
nota3 = parseFloat(prompt("Escreva sua terceira nota:"));

media = nota1 + nota2 + nota3 / 3;

// Verificando a situação do aluno
if (media >= 60) {
    window.alert ("Parabéns, aprovado!");
} else if (media < 60 && media >= 40) {
    Window.alert ("Em recuperação");
} else {
    window.alert("Reprovado");
}