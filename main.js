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
<<<<<<< HEAD
} 
=======
>>>>>>> 5b75b6604cab577df012dc1ee5ab0848b5fce2a8
}
>>>>>>> 0e031d644f57321b774f8f4a061201d581ef001c
  
function sortByLength (array) {
  return array.sort((a, b) => a.length > b.length ? 1 : -1)
};

function getGrade (s1, s2, s3) {
  const total = (s1 + s2 + s3) / 3
  if(total >= 90 ){
    return 'A'
  }else if(total >= 80){
    return 'B'
  }else if(total >= 70){
    return 'C'
  }else if(total >= 60){
    return 'D'
  }else{
    return 'F'
  }
}