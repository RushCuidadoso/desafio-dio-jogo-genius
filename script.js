var order = [];
var clickedOrder = [];
var score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const green = document.querySelector(".green")
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

// Cria ordem aleatoria de cores
var shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order.push(colorOrder);
  // order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Ascende a proxima cor
function lightColor(element, number){
  number = number * 1000;
    setTimeout(() => {
      element.classList.add("selected");
    }, number);
  
    setTimeout(() => {
      element.classList.remove("selected");
    }, number + 500)
}

/* var disableClick = () => {
  document.querySelector('body').style.pointerEvents = "none";
}

var enableClick = () => {
  document.querySelector('body').style.pointerEvents = "auto";
} */

// Verifica se os botões clicados são os mesmos da ordem gerada
var checkOrder = () => {
  for (const i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      // disableClick();
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
      alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
      // disableClick();
      nextLevel();
  }
};

// Função para detectar click
var click = (color) => {
    clickedOrder.push(color);
    // clickedOrder[clickedOrder.lenght] = color
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);
}

// Função que retorna a cor
var createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

// Função para carregar o próximo nivel
var nextLevel = () => {
    score++;

    red.classList.remove("selected");
    yellow.classList.remove("selected");
    blue.classList.remove("selected");
    green.classList.remove("selected");


    shuffleOrder();
}

// Função para game over
var gameOver = () => {
    alert(`Pontuação: ${score}! \nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função de inicio do jogo
var playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!')
    score = 0;
    
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// disableClick();
playGame();