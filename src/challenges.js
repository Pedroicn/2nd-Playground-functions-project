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
function highestCount(array) {
  // seu código aqui
  let contador = 0;
  let maiorNumero = array[0];
    for (let i = 1; i < array.length; i+=1){
    if(array[i] > maiorNumero){
      maiorNumero = array[i];
    }
  }
  for (let j = 0; j < array.length; j+=1){
    if (array[j] === maiorNumero){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if(distanceCat2 < distanceCat1){
    return 'cat2';
  }
  else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }

  
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  arrayString = [];
  for (let i = 0; i < arrayNumbers.length; i+=1){
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0){
       arrayString.push('fizzBuzz');
    }
    else if (arrayNumbers[i] % 3 === 0) {
      arrayString.push('fizz');
    }
    else if (arrayNumbers[i] % 5 === 0){
      arrayString.push('buzz');
    }
    else{
      arrayString.push('bug!')
    }
  } 
  return arrayString;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  for(let i = 0; i < string.length; i+=1){
    if(string[i] === 'a'){
      newString += '1';
    }else if(string[i] === 'e'){
      newString += '2';
    }else if(string[i] === 'i'){
      newString += '3';
    }else if(string[i] === 'o'){
      newString += '4'
    }else if(string[i] === 'u'){
      newString += '5'
    }else{
      newString += string[i]
    }

  }
  return newString
}

function decode(string2) {
  // seu código aqui
  let newString2 = '';
  for(let i = 0; i < string2.length; i+=1){
    if(string2[i] === '1'){
      newString2 += 'a';
    }else if(string2[i] === '2'){
      newString2 += 'e';
    }else if(string2[i] === '3'){
      newString2 += 'i';
    }else if(string2[i] === '4'){
      newString2 += 'o'
    }else if(string2[i] === '5'){
      newString2 += 'u'
    }else{
      newString2 += string2[i]
    }

  }
  return newString2
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
