// Desafio 1
function compareTrue(param1, param2) {
  // seu código aquii
  if (param1 && param2){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let resultado = (base * altura) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let resultado = sentence.split(" ");
  return resultado;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = array[array.length -1] + ', ' + array[0];
  return resultado; 
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties;
  totalPoints = winPoints + tiePoints;
  return totalPoints; 
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
