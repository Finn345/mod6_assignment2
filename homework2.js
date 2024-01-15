//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish"," South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate"," Vanilla"," Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla ",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foods(obj){
    for (let key in obj) {
        if (key !== "shakes") {
            console.log(`${key}: ${obj[key]}`);
          }
      if (typeof obj[key] === "object") {
        let objPtTwo = obj[key];
        if (Array.isArray(objPtTwo)){
            for(let i=0; i < objPtTwo.length; i++){
                if (typeof objPtTwo[i] === "object"){
                    for (let prop in objPtTwo[i]){
                        console.log(`${prop}: ${objPtTwo[i][prop]}`)
                    }
                }
            }
        }
      }
    }
}
foods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age

    this.addage = () => {
        return this.age++
    }

    this.printInfo = () => {
        console.log(`Name: ${this.name} \nAge: ${this.age} `)
    }
}

let person1 = new Person('John', 23)
person1.printInfo()
person1.addage()
person1.addage()
person1.addage()
person1.printInfo()

let person2 = new Person('Mark', 124)
person2.printInfo()
person2.addage()
person2.addage()
person2.addage()
person2.addage()
person2.addage()
person2.printInfo()

// _______________________________________________________________________ //

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

const wordSizes = (str) => {
    return new Promise( (resolve, reject) =>{
        if (str.length >= 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

wordSizes('This is a giant string')
//wordSizes('Small') -- Just a test ot make sure reject worked

.then( (result) => {
    console.log(`Big Word ${result}`)
})
.catch( (error) =>{
    console.log(`Small Number ${error}`)
})


//Do some more Codewars JavaScript

/* Problem 1: Simple Pig latin
    put the first letter of each word at the and and join in 'ay'
    at the end
Solution:

function pigIt(str){
  var pigArray = str.split(' ');
  for (let i=0; i<pigArray.length;i++){
    if(/[a-zA-z]/.test(pigArray[i])){
      pigArray[i] = pigArray[i].slice(1) + pigArray[i][0] + 'ay';
    }
  }
  return pigArray.join(' ');
}

*/

/*

Problem 2: Roman Numeral Conversion
Convert Roman Numerials to Numbers

Solution:

function solution(roman){
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0;
  for (let i=0; i < roman.length; i++) {
    const currentLatin = romanNums[roman[i]];
    const nextLatin = romanNums[roman[i + 1]];
    if (nextLatin && currentLatin < nextLatin) {
      result -= currentLatin;
    } else{
      result += currentLatin;
    }
  }
  return result;
}

*/