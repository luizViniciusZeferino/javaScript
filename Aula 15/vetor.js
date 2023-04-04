 let valores = [8,5,6,2,3]

 valores.sort()
 /*
 for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }
são iguais
 */

 for(let pos in valores) {
    console.log (valores[pos])
 }

 