function Contar() {
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var resposta = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Impossível contar');
    } else {
        resposta.innerHTML = "Contando...";
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        var res = resposta;

        for (var contador = i; contador <= f; contador += p) { // parei aqui 
            res.innerHTML += `${contador} `;
        }
    }
}






Reg
    