function carregar(){
    var msg = document.getElementById('msg') // puxando a div msg
    var img = document.getElementById('imagem') // puxando a div imagem 
    var data = new Date() // data atual
    var hora = data.getHours() // hora atual
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12 ){
        "bom dia" 
        img.src = 'manha.png'
        document.body.style.background = '#f5ad0f' // cor de fundo de bom dia
    } else if (hora >=12 && hora < 18){
        "Boa tarde"
        img.src = 'tarde.png'
        document.body.style.background = '#8dc5d6' // cor de fundo de boa tarde 
    } else {
        "Boa noite"
        img.src = 'noite.png'
        document.body.style.background = '#544d4b' // cor de fundo de boa noite
    }
}