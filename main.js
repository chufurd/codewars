//this is practice
//vs code practice
//practice
//this is practice on my desktop
//second
<<<<<<< HEAD
 
=======
//practice 
// test
>>>>>>> a0cc0cc288eb75f1b2b5a1d641375e3d8a227c97

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

function getDivisorsCnt(n){
  var empty = 0
 for (var i = 1; i <= n; i++) {
  if(n % i === 0){
   empty++
  }
   }
return empty
}

function sumTwoSmallestNumbers(numbers) {  
  const check = numbers.sort((a, b ) => a > b ? 1 : -1)
  const lowest =  check.slice(0, 2)
  const add = lowest.reduce((a , b) => a + b)
  return add
}

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a, b) => a > b ? 1 : -1).slice(0, 2).reduce((a, b) => a + b)
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return (height * width) * length
  }
}

<<<<<<< HEAD
function square(a){
  return a**2
=======
function minMax(arr){
  const last = arr.sort((a, b) => a > b ? 1 : -1).slice(-1)[0]
  const first = arr.sort((a, b) => a > b ? -1 : 1).slice(-1)[0]
  return [first, last]
>>>>>>> 5b75b6604cab577df012dc1ee5ab0848b5fce2a8
}

function findDifference(a, b) {
  return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if(exam > 75 && projects >= 5){
    return 90
  }else if(exam > 50 && projects >= 2){
    return 75
  }else{
    return 0
  }   
} 

function basicOp(operation, value1, value2){
  if(operation === '+') return value1 + value2;
else if (operation === '-') return value1 - value2; 
else if (operation === '*') return value1 * value2;
else if (operation === '/') return value1 / value2
  
} 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  for (let i = 0; i < a.length; i++){
      if (a[i] > limit){
        return false
      }
      }  
    return true
<<<<<<< HEAD
  }

  function reverseLetter(str) {
    const del = str.replace(/[^a-z]/gi,'')
     return del.split('').reverse().join('')
    
  }
=======
  }  
>>>>>>> d8b2977a4e208c62459137ed43f8a0227b15bd9c

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length ? true : false
  
}