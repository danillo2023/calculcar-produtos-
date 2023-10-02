const validar = () => {
    let valor = document.querySelector("#valor").value
    let qtd = document.querySelector("#qtd").value

    if(valor === "" ){
        alert("Valor precisar ser o minino 1,00")
    }else if( qtd === ""){
        alert("Quantidade precusar ser o minino 1")
    }else{
       // alert("cadastrado com sucesso")
    }
}

const moeda = (valor = 0) =>{
    return valor.toLocaleString(
        'pt-br',
        {style:'currency', currency: 'BRL'}
    );
}

const calcular = async () =>{
    validar();

    let valor = document.querySelector("#valor").value
    let qtd = document.querySelector("#qtd").value

    let calc = await moeda(valor * qtd);

    let rest = document.querySelector("#rest").value = calc;
    console.log("Resultado do calculo: " + calc)
}

addEventListener('submit' , (e) =>{
    e.preventDefault();
    calcular();
})
