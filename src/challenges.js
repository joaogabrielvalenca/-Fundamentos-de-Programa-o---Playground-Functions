// Desafio 1
function compareTrue(pal1, pal2) {
  if (pal1 && pal2 === 'girafa' && 'elefante') {
    return true;
  } else {
    return false;
  }
} //meio errado


// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
} //de boa

// Desafio 3
function splitSentence(frase) {
  return arrayFrase = frase.split(" ")
} //de boa


// Desafio 4
function concatName(arr) {
  let index = arr.length - 1
  return `${arr[0]}, ${arr[index]}`
} //de boa


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties*1)
} //de boa


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
    
} // de boa


// Desafio 8
function fizzBuzz(arrayNums) {
  const result = []
  for(let i = 0; i < arrayNums.length; i++) {
    if (arrayNums[i] % 3 === 0 && arrayNums[i] % 5 === 0) {
      result[i]='fizzBuzz'
    } else if (arrayNums[i] % 5 === 0){
        result[i]='buzz';
    }   else if (arrayNums[i] % 3 === 0) {
          result[i]='fizz';
          }else {
            result[i]='bug!'; 
    }
}
return result;
} // de boa
      

// Desafio 9
function encode(phrase) {
  let changeA = phrase.replace(/a/g, "1");
  let changeE = changeA.replace(/e/g, "2");
  let changeI = changeE.replace(/i/g, "3");
  let changeO = changeI.replace(/o/g, "4");
  let changeTotal = changeO.replace(/u/g, "5");
  
  return changeTotal;
}

function decode(newPhrase) {
  let change1 = newPhrase.replace(/1/g, "a");
  let change2 = change1.replace(/2/g, "e");
  let change3 = change2.replace(/3/g, "i");
  let change4 = change3.replace(/4/g, "o");
  let changeNewTotal = change4.replace(/5/g, "u");

  return changeNewTotal;
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
