let number1 = prompt("Please enter the first number");
let operator = prompt("Choose one of the mathematical operators: +, -, *, /");
let number2 = prompt("Please enter the second number");

let result = 0;

if ( /* The Number.isNaN() method determines whether the passed value is NaN and its type is Number. */ (Number.isNaN(parseInt(number1)) || Number.isNaN(parseInt(number2)))  ) {
    if (confirm(`Looks like you did not enter the number(s) correctly. The calculator can't understand you. Would you like to refresh the page and try again?`)) {
        document.location.reload();
    }
    else {
        alert("Thank you for using the JS calculator!");
    }
} else if (operator === "+") {
    result = parseInt(number1) + parseInt(number2);
    alert(`The sum of both numbers is ${result}. Thank you for using the JS calculator!`);
}
else if (operator === "-") {
    result = parseInt(number1) - parseInt(number2);
    alert(`The difference of both numbers is ${result}. Thank you for using the JS calculator!`);
} else if (operator === "*") {
    result = parseInt(number1) * parseInt(number2);
    alert(`The result of the multiplication is ${result}. Thank you for using the JS calculator!`);
} else if (operator === "/") {
    result = parseInt(number1) / parseInt(number2);
    alert(`The result of the division is ${result}. Thank you for using the JS calculator!`);
} else {
    if (confirm(`Looks like you did not enter the operator correctly. The calculator can't understand you. Would you like to refresh the page and try again?`)) {
        document.location.reload();
    }
    else {
        alert("Thank you for using the JS calculator!");
    }
}


