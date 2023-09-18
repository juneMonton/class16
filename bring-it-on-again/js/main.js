// *Variables*
// Declare a variable, assign it a value, and alert the value

let x=3;
alert (x)

// Create a variable, divide it by 10, and console log the value
let y=20;
console.log(y/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function threeNumbers(x,y,z){
    alert(x*y*z)
}
threeNumbers(1,2,1)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumbers(a,b,c,d){
    console.log(a+b+c-d)
}

fourNumbers(10,1,3,4)



// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"


function takesThreeNumbers(x,y,z){
    const newThreeNumbers=(100+x-y)/z;
    if (newThreeNumbers>25){
        console.log("WE HAVE A WINNA")
    }else{
        console.log("NO WINNA")
    }
}

takesThreeNumbers (2,2,50)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayInWeek(day){
    inputDay=day.toLowerCase();

    if(inputDay=="saturday" || inputDay=="sunday"){
        alert("Weekend")
    }else if(inputDay=="monday" ||inputDay=="tuesday" ||inputDay=="wednesday" ||inputDay=="thursday" ||inputDay=="friday" ){
        alert("Weekday")
       
    }else {
        alert("TRY AGAIN")
    }

    
}

dayInWeek("TUEsday")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loop(x){
    for (let i=1;i<=x;i+=3){
        console.log(i);
    }
}
loop(15);