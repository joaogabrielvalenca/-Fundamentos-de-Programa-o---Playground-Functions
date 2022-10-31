// Desafio 1
function compareTrue(pal1, pal2) {
  if (pal1 === true && pal2 === true) {
    return true;
  } else {
    return false;
  }
} //acho que ok


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
  return `${arr[index]}, ${arr[0]}`
} //de boa


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties*1)
} //de boa


// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumArray = 0;
  let repeticoes = 0;
  for (let i=0; i<arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maiorNumArray) {
      maiorNumArray = arrayNumeros[i];
    }
  } 
  for (let i=0; i<arrayNumeros.length; i++) {
    if (arrayNumeros[i] === maiorNumArray) {
      repeticoes += 1
    }
  }
  return repeticoes;
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
function techList(tech, name) {
  let obj = {}
  for (let i = 0; i < tech.length; i++) {
    let chave = tech[i]
    if (tech != undefined) {        
      obj[chave] = name;
    } else {
      return 'vazio!'
    }   
  }
  return obj
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
