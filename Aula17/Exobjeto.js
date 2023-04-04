let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p // this é palavra auto-referência a objeto
}}

amigo.engordar(2) // a variavel amigo tem uma funcionaidade dentro dela 
console.log(`${amigo.nome} pesa ${amigo.peso} kg `)