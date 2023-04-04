// RECURSIVIDADE
function fatorial(n) { // estou criando uma função fatorial dentro da função fatorial tem uma chamada para ela mesmo
    if (n == 1) {
        return 1
    }else {
        return n * fatorial(n-1) // essa é a chamada 
    }
         
}

console.log (fatorial(10))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! 

n! = n x (n-1)       ou seja n!(5) = 5 x n-1! (5 x 5 - 1! igua a 4!) 5 x 4! 
1! = 1 

*/