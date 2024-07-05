function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function verificarAprovacao(media) {
    if (media >= 60) {
    window.alert ("Aprovado");
    } else {
        window.alert("Reprovado");
    }
}

function main() {
    var nota1 = parseFloat(prompt("Digite a primeira nota: "));
    var nota2 = parseFloat(prompt("Digite a segunda nota: "));
    var nota3 = parseFloat(prompt("Digite a terceira nota: "));

    var media = calcularMedia(nota1, nota2, nota3);

    // Verifica se o aluno foi aprovado ou reprovado
    var resultado = verificarAprovacao(media);

    // Exibe o resultado
    console.log("A média das notas é:" + {media});
    console.log("Situação do aluno:" + {resultado});
}

// Chamada para a função principal
main();