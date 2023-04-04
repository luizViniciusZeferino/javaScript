function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    }else{
        return 'Impar!'
    }
}

let res = parimpar(5) // o n vale 5 e 5 dividido por 5 é impar o retorno é jogado para o console.log
console.log(res) // ou console.log (parimpar(4)) e não precisa da variavel 