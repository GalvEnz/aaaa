//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número ente 1 e 10';

let ListaDeNmrs = [];
let NumeroMax = 50;
let numeroSecreto = gerarNumeroAleat();
let tentativas = 1;

function exibirMsgInicial() {
    ExibirTextoNaTela('h1', 'Jogo do número secreto');
    ExibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMsgInicial();

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto) {
            ExibirTextoNaTela('h1', 'acertou fofo <3');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTenta = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
            ExibirTextoNaTela('p', mensagemTenta);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                ExibirTextoNaTela ('p', 'O número secreto é menor que seu chute');
            } else {
                ExibirTextoNaTela ('p', 'O número secreto é maior que seu chute');
            }
            tentativas++
            limparCampo();
        }
}

function gerarNumeroAleat() {
   let numeroEscolhido = parseInt(Math.random() * NumeroMax + 1);
   let qtdElementosNaLista = ListaDeNmrs.length;
   if (qtdElementosNaLista == NumeroMax) {
    ListaDeNmrs = []
   }
   if (ListaDeNmrs.includes(numeroEscolhido)) {
    return gerarNumeroAleat();
   } else {
    ListaDeNmrs.push(numeroEscolhido);
    console.log(ListaDeNmrs)
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJooj(){
    numeroSecreto = gerarNumeroAleat();
    limparCampo();
    tentativas = 1
    ExibirTextoNaTela('h1', 'Jogo do número secreto');
    ExibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}