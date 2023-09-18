// *Variables*
// Create a variable and console log the value
let x=3;
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y=3;
z=x+10;
alert(z)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(w,x,y,z){
    const a=w-x-y-z;
    alert(a);

}

subtracts(10,2,2,2)
// Create a function that divides one number by another and returns the remainder

function modulo(x,y){
    return (x%y);
}

console.log(modulo(8,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function newFunction(x,y){
    const sum=x+y;
    if(sum>50){
        alert("Jumanji")
    }
}

newFunction(60,60)



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function anotherFunction(x,y,z){
    const zebra=(x*y*z);
    if((zebra%3)===0){
        alert("ZEBRA")
    }
}

anotherFunction(3,3,1)


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber(word,number){
    for(i=1;i<=number;i++){
        console.log(word)

    }
}


wordNumber('Yey!',20)