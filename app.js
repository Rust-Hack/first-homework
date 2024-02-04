let quetionAboutNumbers = confirm('Здравствуйте, вы хотите вписать 3 числа?');

if(quetionAboutNumbers) {
    let firstNumber = prompt('Напишите первое число');
    firstNumber = Number(firstNumber);
    let secondNumber = prompt('Напишите второе число');
    secondNumber = Number(secondNumber);
    let thirdNumber = prompt('Напишите третье число');
    thirdNumber = Number(thirdNumber);
    let quetionAboutResult = confirm('Вы хотите умножить или сложить эти числа между собой? Если умножить, нажмите "ок", а если сложить, нажмите отмена');
    if(quetionAboutResult) {
        let result = firstNumber * secondNumber * thirdNumber;
        alert(result);
    } else {
        result = firstNumber + secondNumber + thirdNumber;
        alert(result);
    }
}