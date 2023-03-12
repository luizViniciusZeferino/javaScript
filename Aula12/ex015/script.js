function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Full year pois vai pegar os 4 digitos 
    var fano = document.getElementById('txtano') // ano que veio do formulario 
    var res = document.getElementById('res') // puxando o resultado da div com o id res html 
    if (fano.value.length == 0 || fano.value > ano) { // se o fano(ano do formulario)for == 0 ou0 fano for maior que ano(ano atual)
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex") // variavel para puxar os dois inputs de bolinha que estão em html 
        var idade = ano - Number(fano.value) // calculando idade, que seria o ano atual menos o valor do numero. 
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto' ) // mesma coisa que fazer img id = foto 
        var genero = '' // váriavel vazia pq pode ser tanto homem quanto mulher 
        if (fsex[0].checked) { // se oque estiver marcado for o fsez0(homem) 
            genero = 'Homem'
            if (idade >=0 && idade < 10) { 
                // criança
                img.setAttribute('src', 'Foto-crianca 1.png') 
            } else if (idade < 21 ) {
                // jovem
                img.setAttribute('src', 'Foto-adolescente 1.png') 
            } else if (idade < 50 ) {
                // Adulto 
                img.setAttribute('src', 'Foto-adulto 1.png') 
            } else {
                // idoso 
                img.setAttribute('src', 'Foto-velho.png') 

            }
        } else if (fsex[1].checked) { // se oque estiver marcado for o fsez1(mulher) 
            genero = 'Mulher'
            if (idade >=0 && idade < 10) { 
                // criança
            } else if (idade < 21 ) {
                // jovem
            } else if (idade < 50 ) {
                // Adulto 
            } else {
                // idoso 
            }
        }
        res.style.textAlign = 'center' // centralizar div 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // appendeChild significa add um elemento que nesse caso seria o img 
    }
}


