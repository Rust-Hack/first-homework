var quetionAboutNumbers = confirm('Здравствуйте, вы хотите вписать 3 числа?');

if(quetionAboutNumbers) {
    var firstNumber = prompt('Напишите первое число');
    var secondNumber = prompt('Напишите второе число');
    var thirdNumber = prompt('Напишите третье число');

    if(thirdNumber == null || secondNumber == null || firstNumber == null) {
        var cancel = prompt('Почему вы отменили?');
        if(cancel){
            alert('Я понял вашу причину, ' + cancel + ' всего доброго');
        } else {
            alert('Если не хотите писать причину, тогда пока');
        }
    }else if(!thirdNumber && !secondNumber && !firstNumber) {
        alert('Пока')
    } else {
        
        if(!firstNumber) {
            firstNumber = prompt('Вы забыли написать первое число');
        }
        if(!secondNumber) {
            secondNumber = prompt('Вы забыли написать второе число');
        }
        if(!thirdNumber){
            thirdNumber = prompt('Вы забыли написать третье число');
        }
    }

    if(firstNumber && secondNumber && thirdNumber) {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        thirdNumber = Number(thirdNumber);
        var quetionAboutResult = confirm('Вы хотите умножить или сложить эти числа между собой? Если умножить, нажмите "ок", а если сложить, нажмите отмена');
        if(quetionAboutResult == NaN) {
            alert('Были получены не корректные данные. Goodbye!');
        }else if(quetionAboutResult) {
            let result = firstNumber * secondNumber * thirdNumber;
            alert(result);
        } else {
            result = firstNumber + secondNumber + thirdNumber;
            alert(result);
        }
        alert('пока');
    }

}