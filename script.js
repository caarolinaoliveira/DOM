const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

/*  essa função acima é um evento simples que diz:
quando clicar no botão 'descanso curto' o html será modificado pelo
data attribute (data contexto) para o parâmetro foco

sintaxe básica do addEventListener
    elemento.addEventListener(evento, callback);

    exemplo sem função de evento 

     longoBt.addEventListener('click',() => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/imagens/descanso-longo.png')
 })
*/
focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

 longoBt.addEventListener('click',() => {
    alterarContexto('descanso-longo')
 })

/* o evento banner.setAttribute altera a foto quando há um evento de clique botao foco*/
function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch(contexto) {
        case "foco": 
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;

    }
}


