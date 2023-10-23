// Desafio 11
function generatePhoneNumber(numArr) {
  if (numArr.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  let numRepeticoes = 0
  for (let i=0; i < numArr.length; i++) {
    for (let j=1; j< numArr.length; j++) {
      if (numArr[i] === numArr[j]) {
        numRepeticoes += 1
      }
      if(numRepeticoes => 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    if (numArr[i] < 0 || numArr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      return `${numArr[0]}${numArr[1]} ${numArr[2]}${numArr[3]}${numArr[4]}${numArr[5]}${numArr[6]} - ${numArr[7]}${numArr[8]}${numArr[9]}${numArr[10]}`
    }   
  }
}

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
