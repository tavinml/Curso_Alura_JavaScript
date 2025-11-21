function sortear(){
    let qtd_num = parseInt(document.getElementById('quantidade').value);
    let inicio_num = parseInt(document.getElementById('de').value);
    let fim_num = parseInt(document.getElementById('ate').value);

    if(de>=ate){
        alert('Campo do "Do Núermo" tem que ser menor que até o número');
        return;
    }

    if(qtd_num > (fim_num - inicio_num + 1)){
         alert('Campo do "Quantidade" tem que ser menor ou igual  ao intervalo possíviel');
        return;
    }

    let nums_sort = [];
    let num_sorted;

    for(let i = 0; i < qtd_num; i++){
        num_sorted = obterNumeroAleatorio(inicio_num, fim_num);

        while(nums_sort.includes(num_sorted)){
             num_sorted = obterNumeroAleatorio(inicio_num, fim_num);
             alert('A quantidade de números é maior que o intervalo possível')
        }
        nums_sort.push(num_sorted);
    }

    let result = document.getElementById('resultado');

    result.innerHTML =  `<label class="texto__paragrafo">Números sorteados:  nenhum até ${nums_sort}`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function alterarStatusBotao(){
    let button = document.getElementById('btn-reiniciar');

    if(button.classList.contains('container__botao-desabilitado')){
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }

}

function reset(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
