<!DOCTYPE html>
<html lang="en">

<head>
    
</head>
<body>
    
<script> 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o valor da venda: ', (valorVenda) => {
  readline.question('Digite a porcentagem da comissão: ', (porcentagemComissao) => {
    const comissao = valorVenda * (porcentagemComissao / 100);
    console.log(`A comissão é de R$ ${comissao}`);
    readline.close();
  });
});

</script>
    
</body>
</html>