function Contar() {
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var resposta = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // lenght significa quantidade de caracteres. Se o valor das variaveis forem 0 = alert
        window.alert('{[ERRO] Faltam Dados!');
        res.innerHTML = 'Impossível contar!'
    } else {
        resposta.innerHTML = "Contando:  <br>  "; // br para fazer a quebra de linha em html. 

        var i = Number(inicio.value); // fazendo a mudança para numero 
        var f = Number(fim.value);
        var p = Number(passo.value);
        var res = resposta;
        if (p <= 0) {
            window.alert ('Passo inválido, considerando PASSO 1')
            p = 1 
        }
        if ( i < f ) {
            for (var contador = i; contador <= f; contador += p) { // crescente
                res.innerHTML += `${contador} \u{1F449} `;
             }
        }else {
            for (var contador = i; contador >= f; contador -= p ) // regressiva 
            res.innerHTML += `${contador} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}







    