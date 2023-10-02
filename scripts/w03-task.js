/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let add1 =Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return `${number1} - ${number2}`;
}
function subtractNumbers() {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => `${number1} * ${number2}`;

function multiplyNumbers() {
    const multiplyNumber1 = Number(document.querySelector('#factor1').value);
    const multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector("#product").value = Multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
function divideNumbers () {
    let dividend =Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
let today =new Date();
console.log(today);

let currentYear = '';
//console.log(`${currentYear}`);

currentYear= today.getFullYear();

document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').value = numbersArray;
 

/* Output Odds Only Array */ 
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0 ) ;
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0 );
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce(number => number + 2); 
