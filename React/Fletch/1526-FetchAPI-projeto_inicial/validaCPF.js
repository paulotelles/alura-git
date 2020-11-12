function verificaCPF(cpf) {
    const cpfInvalidos = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        '00000000000'
    ];

    return cpfInvalidos.indexOf(cpf) === -1;
}

function somaNumeroCpf(cpf, numero, fator){
    let soma = 0;

    for(let indice = 0; indice < numero; indice++){
        soma += parseInt(cpf.substring(indice, [indice+1])) * fator;
        fator -= 1;
    }
    return soma;
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoVerificacao){
    const soma = somaNumeroCpf(cpf, totalDeDigitos, peso);
    const resto = (soma * 10) % 11;
    return resto === digitoVerificacao;

}

function verificaPrimeiroDigito(cpf){
    const peso = 10;
    const totalDigitoPrimeiraParte = 9;
    const digitoVerificacao = parseInt(cpf.substring(9, 10));
    return verificaDigito(cpf, totalDigitoPrimeiraParte, peso, digitoVerificacao);
}


console.log(verificaPrimeiroDigito('18875539081'));

function verificaSegundoDigito(cpf){
    const peso = 11;
    const totalDeDigitoSegundaParte = 10;
    const digitoVerificacao = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDeDigitoSegundaParte, peso, digitoVerificacao);
}

function validaCPF(cpf){
    return(
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)&&
        verificaCPF(cpf)
    )
}

