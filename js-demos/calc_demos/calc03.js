
function plus(a, b) {
    return a + b
}

const minus = function (a, b) {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => a / b



//JS objects are also dictionaries.
const operators = {
    plus: plus,
    minus: minus,
    multiply, //shortcut for multiply:multiply
    divide,
}

const calculate = function (number1, operatorName, number2) {

    if (operators[operatorName]) { //if we find the matching context
        let result = operators[operatorName](number1, number2);
        console.log(`${number1} ${operatorName} ${number2} = ${result}`)
    } else {  //default case
        console.log(`Invalid operator: ${operatorName}. `)
    }
}

//client code
calculate(20, 'plus', 30);
calculate(30, 'minus', 4);
calculate(30, 'multiply', 4);
calculate(2, 'divide', 2)

//for invalid operator
calculate(15, "mod", 4);

//but calculate is extensible by user
operators.mod = (x, y) => x % y;

calculate(15, "mod", 4);