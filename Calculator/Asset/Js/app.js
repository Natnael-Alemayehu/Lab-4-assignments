let sub = function (a, b) {
    return a - b;
};

let div = function (a, b) {
    return a / b;
};

(function () {
    let choose = prompt("Enter the operation you want to perform (+, -, *, /)");
    if (choose === "+") {
        var arr = new Array();
        let ch = prompt("How many operands do you want : ");
        for (let i=0; i < parseInt(ch); i++) {
            arr[i] = prompt(`Enter the ${i + 1} number : `)
        }
        let sum = 0;
        arr.forEach(function (numbers) {
            sum += parseInt(numbers);
        });
        console.log("The sum of the numbers is: " + sum);
    }
    if(choose === "-"){
        let num1 = prompt("Enter the first number: ");
        let num2 = prompt("Enter the second number: ");
        console.log("The difference of the numbers is: " + sub(num1,num2));
    }
    if(choose === "*"){
        var arr = new Array();
        let ch = prompt("How many operands do you want : ");
        for (let i=0; i < parseInt(ch); i++) {
            arr[i] = prompt(`Enter the ${i + 1} number : `)
        }
        let product = 1;
        arr.forEach(function (numbers) {
            product *= parseInt(numbers);
        });
        console.log("The sum of the numbers is: " + product);
    }
    if(choose === "/"){
        let num1 = prompt("Enter the first number: ");
        let num2 = prompt("Enter the second number: ");
        if (num2 == 0){
            console.log("You can not divide a number with 0.")
        }
        else{
            console.log("The quotient of the numbers is: " + div(num1,num2))
        }
    }

})(); 