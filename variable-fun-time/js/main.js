//--- Easy
//create a variable and assign it a number
let x=20;
//minus 10 from that number
y=x-10;
//print that number to the console
console.log (y)
//--- Medium
//create a variable that holds a value from the input


//add 25 to that number

 // newVal=inputedVal+25 //inputedVal+=25
//alert that number
// alert(newVal)

//--- Hard
//create a variable that holds the h1
const h1holder=document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables

h1holder.addEventListener('click',sum)

function sum(){
    let inputedVal=document.querySelector('#danceDanceRevolution').value //this will get the value out from the input
    console.log(y + Number(inputedVal))
}
