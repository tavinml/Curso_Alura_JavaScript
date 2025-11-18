function sortear(){
    let qtd_num = parseInt(document.getElementById('quantidade').value);
    let inicio_num = parseInt(document.getElementById('de').value);
    let fim_num = parseInt(document.getElementById('ate').value);

    alert(`Quantidade: ${qtd_num}`);
    alert(`Inicio: ${inicio_num}`);
    alert(`Fim: ${fim_num}`);

    let nums_sort = [];
    let num_sorted;

    for(let i = 0; i < qtd_num; i++){
        num_sorted = obterNumeroAleatorio(inicio_num, fim_num);
        nums_sort.push(num_sorted);
    }

    alert(`Números sorteados: ${nums_sort}`);

    console.log(num_sorted);
}

function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

console.log()