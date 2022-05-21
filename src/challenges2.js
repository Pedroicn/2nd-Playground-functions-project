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
// console.log(generatePhoneNumber([2, 3, 3, 6, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
