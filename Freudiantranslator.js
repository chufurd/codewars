 // You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...
//
// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
//
// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.
//
// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.



function toFreud(string) {
  return string.replace(/[^ ]+/g,'sex')

}

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
  const line = array.map((n, i) => `${i + 1}: ${n}`)
  return line
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends){
  const sort = friends.filter(num => num.length === 4 ? num : false )
  return sort
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  const split = str.split('').map(c => c + c).join('')
  
  return split
}

// Write a function which converts the input string to uppercase.

// FUNDAMENTALSSTRINGS

function makeUpperCase(str) {
  return str.toUpperCase()
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  return string.replace(/0/g, "O")
               .replace(/5/g, "S")
               .replace(/1/g, "I");
<<<<<<< HEAD
}

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


function checkForFactor (base, factor) {
  if(base % factor === 0) {
    return true
    
    }else{
      return false
    }
  }
=======
<<<<<<< HEAD
}

//FIZZ BUZZ PRACTICE
function preFizz(num) {
  const empty = []
  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      empty.push("FizzBuzz")
    }else if (i % 3 === 0) {
      empty.push("Fizz")
    }else if (i % 5 === 0) {
      empty.push("Buzz")
    }else{
      empty.push(i)
    }
  }
  return empty
=======
>>>>>>> c6595579e3c00edfbf7dbb331ecb77a6825e54c0
>>>>>>> b9807457cd8f47eca76f2477968761bf56c73c5a
}
>>>>>>> 967f752b6d8d45ed14c4f052674068774af8c751
 