function mudaFoto (foto){
    document.getElementById('icone').src = foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('quantidade').value);
    tot = qtd * 1500;
    document.getElementById('preco').value = tot;
}