// const alphabet = ['A','B','C','D','E','F']
// const numbers = ['1','2','3','4','5','6']

// //const a = alphabet[0];
// //const b = alphabet[1];
// const [a,b] = alphabet

// const newArray = alphabet.concat(numbers)

// console.log(newArray)

// function sumAndMultiply(a,b) {
//     return[a+b,a*b]
// }

// const [sum,multiply] = sumAndMultiply(2,3)

// console.log(sum)
// console.log(multiply)

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const {name, age} = personTwo
const personThree = {...personOne, ...personTwo}
console.log(personThree);