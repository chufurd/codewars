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

var number = function(busStops){
  const check = busStops.reduce((total,peps ) =>{
    return total + (peps[0])
  },0)
  const leaving = busStops.reduce((total, left) =>{
    return total +(left[1])
  },0)
  return check - leaving
} 

var number = function(busStops){
  return busStops.reduce((total, left) => {return total + left[0] - left[1]},0)
}

var number = function(busStops){
  return busStops.reduce((total, left) =>  total + left[0] - left[1],0)
}

// DESCRIPTION:
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"
// FUNDAMENTALS

 function hello(name) {
   return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`

//   Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// FUNDAMENTALSSTRINGS

var countSheep = function (num){
  let string = ''
  for(let i = 1; i <= num; i++ ){
    string+=`${i} sheep...`
  }
  return string
}

function take(arr, n) {
  return arr.splice(0,n)
}

function removeExclamationMarks(s) {
  const check = s.split('').filter(n => n === '!' ? false : true).join('')
  return check
  
}

function combat(health, damage) {
  if((health - damage) > 0 ){
    return health - damage
  }else{
    return 0
  }
 } 

 function capitalize(s){
  const odd = s.split('').map((n, e) => e % 2 !== 0 ? n.toUpperCase() : n).join('')
  const even = s.split('').map((n, e) => e % 2 === 0 ? n.toUpperCase() : n).join('')
      return [even, odd]                          
<<<<<<< HEAD
};   

function getAge(inputString){
  return Number(inputString.split('').slice(0,1))
  
  }
=======
};                    

var summation = function (num) {
  
  let answer = 0
  for(var i = 0; i <= num; i++){
     answer +=i
  }
    return answer 
  }
  
  
>>>>>>> c206ddc9835bb7050102171f5e0b631428c0e180


var capitals = function (word) {
	const split = word.split('')
  return split.map((el, i) => el === el.toUpperCase() ? i : -1).filter((e)=> e >= 0)
};
 
 
 function greet(language) {
	const lang = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'

  }
  return lang[language] || 'Welcome'
}

function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}  