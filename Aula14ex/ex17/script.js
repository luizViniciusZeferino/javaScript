function tabuada() { 
    var n1 = document.getElementById('txt1')
    var tab = document.getElementById('seltab')
    if (n1.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        var numero1 = Number(n1.value)
        var c = 1 
        tab.innerHTML = '' // esta vazia para limpar a tabela quando eu por outro número
        for (var c = 1; c <= 10; c ++) {
            var item = document.createElement('option') // para eu colocar opções dentro do select preciso criar o option
            item.text = `${numero1} X ${c} = ${numero1*c}`// o text esta dentro do option 
            tab.appendChild(item) // segnifica adicionar um filho que nesse caso seria para o option

        }
    }
    
}