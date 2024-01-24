let listaElementosSorteados = [];
let numeroMax = 10;
let numeroSecreto = numeroAleatorio();
let numeroTentativas = 1;
exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10!');
}
function verificarChute() {
    let chute = document.querySelector ('input').value;
        if(chute==numeroSecreto){
            exibirTextoNaTela('h1','Acertou!');
            let palavraTentativa = numeroTentativas> 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Voce descobriu o numero secreto com ${numeroTentativas} ${palavraTentativa} ! `;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(chute>numeroSecreto){
            exibirTextoNaTela('p','O numero secreto e menor!')
            }else{
            exibirTextoNaTela('p','O numero secreto e maior!')
            }
            numeroTentativas++;
            limparCampo();
        }
}
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroMax + 1);
    let qtdeElementos = listaElementosSorteados.length;
    if (qtdeElementos==numeroMax) {
        listaElementosSorteados =[];
    }
    if (listaElementosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaElementosSorteados.push(numeroEscolhido);
        console.log(listaElementosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = numeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

