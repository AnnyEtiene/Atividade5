function verificarNomeDiaMes(nome, dia, mes) {

    if (nome === "Celso Portiolli" && dia === 11 && mes === 9) {
        window.alert ("O Celso Portiolli não tem nada a ver com o 11 de Setembro");
    }
    

    if (dia === 4 && mes === 7 && nome.toLowerCase() === "seu") {
        window.alert ("Faça a prova com atenção");
    }


    window.alert ("Condição não reconhecida");
}


function obterDataAtual() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; 

    return { dia, mes };
}

function main() {
    var nome = prompt("Digite o nome:");
    var dia = parseInt(prompt("Digite o dia:"));
    var mes = parseInt(prompt("Digite o mês:"));

    var mensagem = verificarNomeDiaMes(nome, dia, mes);
    window.alert("Faça a prova com atenção");
}

main();

