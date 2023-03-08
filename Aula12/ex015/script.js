function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Full year pois vai pegar os 4 digitos 
    var fano = document.getElementById('txtano') // ano que veio do formulario 
    var res = document.getElementById('res') // puxando o resultado da div com o id res html 
    if (fano.value.length == 0 || fano.value > ano) { // se o fano(ano do formulario)for == 0 ou0 fano for maior que ano(ano atual)
        alert('Verifique os dados e tente novamente!')
    } else {
        alert('tudo ok')
    }
}