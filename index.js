const valorRecebido = document.getElementById("input1");

function alertValor(){
    if (!valorRecebido.value) {
    
    } else {
        converteValor();
    }
}

function converteValor(){
    const valorConvertido = (valorRecebido.value / 5.11).toFixed(2);


    document.getElementById("response").textContent = valorConvertido;
}