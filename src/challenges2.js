// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let phoneNumber = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  if(array.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for(let i = 0; i < array.length; i += 1){
    if(array[i] < 0 || array[i] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let contador = 0;
    for(let j = 0; j < array.length; j += 1){
      if(array[i] === array[j]){
        contador += 1;
      }
 
    }
    if(contador >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangle = true;
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let valorAbsAB = Math.abs(lineA - lineB);
  let valorAbsAC = Math.abs(lineA - lineC);
  let valorAbsBC = Math.abs(lineB - lineC);
  if((lineA < somaBC && lineA > valorAbsBC) || (lineB < somaAC && lineB > valorAbsAC) || (lineC < somaAB && lineC > valorAbsAB)){
    return triangle;
  }else if(lineA > somaBC || lineB > somaAC || lineC > somaAB) {
    triangle = false;
  }else if(lineA < valorAbsBC || lineB < valorAbsAC || lineC < valorAbsAB) {
    triangle = false;
  }
  return triangle;
}
// console.log(triangleCheck(12, 17, 4))
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbers = /\d+/g;
  let stringNumbers = string.match(numbers);
  let arrayNumbers = [];
  let sumNumbers = 0;
  let resultado;
  for(let i = 0; i < stringNumbers.length; i += 1){
    arrayNumbers.push(parseInt(stringNumbers[i]));
  }
  for(let j = 0; j < arrayNumbers.length; j += 1){
    sumNumbers += arrayNumbers[j];
  }
  if(sumNumbers > 1){
    resultado = sumNumbers + ' copos de água';
  }else{
    resultado = sumNumbers + ' copo de água';
  }
  
  return resultado;
}
console.log(hydrate('1 cerveja'))
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
