// Desafio 1
function compareTrue() {
  // começando projeto
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(frase) {
  return arrayFrase = frase.split(" ")
}


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties*1)
}


// Desafio 6
function highestCount(arrayNumeros = [9,1,2,3,9,5,7]) {
  let maiorNumero = arrayNumeros[0];
  let numRepeticoes = 1;
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maiorNumero) {
      maiorNumero = arrayNumeros[i]
    } else if(arrayNumeros[i] === maiorNumero) {
      numRepeticoes += 1
      console.log('else if' + numRepeticoes)
    }
    numRepeticoes = numRepeticoes + 1
    console.log('no for' + numRepeticoes)
  }
  return numRepeticoes; 
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dif1 = Math.abs(cat1 - mouse);
  let dif2 = Math.abs(cat2 - mouse);
  if (dif1 < dif2) {
    return "cat1";
  } else if (dif2 < dif1) {
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge"
  }
    
}

console.log(catAndMouse(1,5,9))
console.log(catAndMouse(5,2,8))


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
