//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(x,y){
    const result=(x-y);
    alert (result)
}

subtract(4,3)

//create a function that divides three numbers and console logs the quotient

function divide(x,y,z){
    const quotient=(x/y/z);
    console.log(quotient)
}
divide(3,3,1)

//create a function that multiplys three numbers and returns the product

function multiply(x,y,z){
    const a=x*y*z;
    return a

}

console.log(multiply(1,2,1))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function medium(x,y,z){
    const a=(x+y)%z;
    return a
}
console.log(medium(3,5,3))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(a,b,c,d){
    const x=(a*b);
    if(x>100){
        y=x+(c+d);
        console.log(y)
    }else if(x<100){
        z=x-(c-d);
        console.log(z)
    }else if(x=100){
        w=(a*b*c)%d;
        alert (w)
    }

}

hard(2,20,4,3)