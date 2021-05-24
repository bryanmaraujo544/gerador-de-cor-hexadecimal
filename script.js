const contain = document.querySelector('.contain')
const copiado = document.getElementById('copy')
const codigoHex = document.querySelector('.contain p')

contain.addEventListener('click', () => {
    //Abaixa a opacidade do retãngulo que contém a cor, aplica transição e tirca a opacidade do código
    contain.style.opacity = .8
    contain.style.transition = "ease 0.1s"
    codigoHex.style.opacity = 0           
    copiado.style.opacity = .8
    setTimeout(function(){
        //Depois de 600ms a opacidade da cor volta ao normal, o código volta a aparecer e o "copiado" desaparce
        contain.style.opacity = 1
        contain.style.transition = "ease 0.75s"
        codigoHex.style.opacity = 1
        copiado.style.opacity = 0

    }, 600); 
    //copiar o coteúdo do parágrafo para a área de transferência do usuário
    navigator.clipboard.writeText(codigoHex.textContent)
})



// Mudar cor quando a tecla ESPAÇO for teclada
window.addEventListener('keydown', () => {
    if(event.keyCode == 32){           
        // Colocando o código retornado da função numa variável
        let corHex = numeroHex()
        // Trocado a cor e o texto da div para o valor do código
        contain.style.background = `#${corHex}`
        codigoHex.innerHTML = `#${corHex}`
    }
})

function numeroHex (){
    // Gera um número aleatório com decimal no formato hexadecimal. Ex: 0.23f39dfd
    let numberRandom = (Math.random() * 1).toString(16)
    //separo a parte inteira e a parte decimal
    let separado = numberRandom.split('.')
    // Desestruturo e color a parte decimal na variável numHex
    let [, numHex] = separado
    let numHex6

    if(numHex.length == 11){
        numHex6 = numHex.substr(5)
    } else if( numHex.length == 12){
        numHex6 = numHex.substr(6)
    }
    else if( numHex.length == 13){
        numHex6 = numHex.substr(7)
    }
    
    return numHex6
    
}