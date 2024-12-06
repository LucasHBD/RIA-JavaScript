function fat(n){
    var resultado = n;
    if(n === 0 || n === 1) return 1;
    while(n > 1){
        n--;
        resultado *= n;
    }
    return resultado;
}

module.exports = fat;