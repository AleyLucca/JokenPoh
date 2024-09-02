const result =  document.querySelector('.result')
const suapont = document.querySelector('#pont_human')
const pontAlexa = document.querySelector('#pont_alexa')

let pontHuman = 0
let pontAlex = 0


const playHuman = (humanChoice) => {
    mostrarOpcoes(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return  choices[randomNumber]
}

const mostrarOpcoes = (human, machine) => {
    if ((human === 'Pedra' && machine === 'Tesoura') ||
        (human === 'Tesoura' && machine === 'Papel') ||
        (human === 'Papel' && machine === 'Pedra') ){
        pontHuman++
        pont_human.innerHTML = pontHuman
       result.innerHTML = "Você venceu"

    } else if (human === machine) {
        result.innerHTML = "Empatou"
    }else{
        result.innerHTML = "Alexa venceu"
        pontAlex++
        pontAlexa.innerHTML = pontAlex
        
        
    }
}