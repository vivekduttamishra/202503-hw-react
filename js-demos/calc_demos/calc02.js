
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

const calculate = function (number1, operator, number2) {

    if (typeof (operator) === 'function') {
        let result = operator(number1, number2);

        console.log(`${number1} ${operator.name} ${number2} = ${result}`)
    }else{
        console.log(`Invalid operator: ${operator}. expected a function.`)
    }
}




//use case
calculate(20, plus, 30);
calculate(30, minus, 4);
calculate(30, multiply, 4);
calculate(2, 'foo', 2)