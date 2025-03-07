

const calculate = function (number1, operator, number2) {

    let result;
    switch (operator) {
        case "plus":
            result = number1 + number2;
            break;
        
        case "minus":
            result = number1 - number2;
        case "multiply":
            result=number1*number2;
            break;

        default:
            return console.log(`Invalid Operator: '${operator}'`)

    }

    console.log(`${number1} ${operator} ${number2} = ${result}`)
}




//use case
calculate(20, 'plus', 30);
calculate(30, 'minus', 4);
calculate(30,'multiply',4);
calculate(2, 'foo', 2)