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

function square(a){
  return a**2
}