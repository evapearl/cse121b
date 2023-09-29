/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let addNumber1 =Number(document.getElementById('#add1').value);
    let addNumber2 = Number(document.getElementById('#add2').value);
    let addNumbers = parseInt(addNumber1 + addNumber2);
    console.log(addNumbers);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    document.querySelector('#sum').innerHTML = value(add); 

    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return `${number1} - ${number2}`;
}
function subtractNumbers () {
    const subtractNumber1 = Number(document.getElementById('#subtract1').value);
    const subtractNumber2 = Number(document.getElementById('#subtract2').value);
    const subtractNumbers = parseInt(subtractNumber1 - subtractNumber2);
    console.log(subtractNumbers);

    document.querySelector('difference').value = subtract;
    document.querySelector('difference').innerHTML = value(subtract);

    document.querySelector(subtractNumbers).addEventListener('click', subtractNumbers);
}

/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => `${number1} * ${number2}`;

function multiplyNumbers () {
    const multiplyNumber1 = Number(document.getElementById('#factor1').value);
    const multiplyNumber2 = Number(document.getElementById('#factor2').value);
    const multiplyNumbers = parseInt(multiplyNumber1 - multiplyNumber2);
    console.log(multiplyNumbers);

    document.querySelector('product').value = subtract;
    document.querySelector('product').innerHTML = value(subtract);

    document.querySelector(multiplyNumbers).addEventListener('click', multiplyNumbers);
}

/* Open Function Use - Divide Numbers */
function divid (dividend, divisor) {
    return dividend + divisor;
}
function dividNumbers () {
    let dividend =Number(document.getElementById('#dividend').value);
    let divisor = Number(document.getElementById('#divisor').value);
    let dividNumbers = parseInt(dividend + divisor);
    console.log(dividNumbers);

    document.querySelector('#quotient').value = divid(dividend, divisor);
    document.querySelector('#quotient').innerHTML = value(divid);  

    document.querySelector('#dividNumbers').addEventListener('click', dividNumbers);

}

/* Decision Structure */

const currentDate = Date();
//console.log(`It is now ${currentDate}`);

const currentYear = currentYear;
//console.log(`${currentYear}`);

currentDate.getFullYear= currentYear;

document.getElementById('#year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById('#array').innerHTML = numbersArray;
 

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
