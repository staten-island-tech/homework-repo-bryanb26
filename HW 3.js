//Function Declarations

function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

//Function Expressions

const square = function(x = 3){
    return x*x;
};

// console.log(square());

// Immidiately Invokable Function Expressions - IIFES

// (function(){
//     console.log('IIFE RandomSource.apply');
// })();

// (function(name){
//     console.log('Hello '+ name);
// })('Brad');