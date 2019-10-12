module.exports = function zeros(expression) {
    let easyDevider = 5;
    let numberOddDoubleFact = 0;
    let numberEvenDoubleFact = 0;
    let numberFact = 0;
    let numberOfZeros = 0;
    let sizeOfArrOfNums = 0;
    let arrOfNums = Array.from(Array(sizeOfArrOfNums), () => 0);

    expression = expression.split('*');
    console.log(expression);
    let counter = 0;
    let counterOfSign = 0;
    let isOnlyDoubleSign;
    for (let i = 0; i < expression.length; i++) {
        isOnlyDoubleSign = expression[i].includes('!!');
        if (isOnlyDoubleSign) counterOfSign++;
    }


    for (let i = 0; i < expression.length; i++) {

        if (parseInt(expression[i]) % 2 == 0)
            counter++;

    }

    if (counterOfSign === expression.length && counter === 0) {
        numberOfZeros = 0;
    }

    //let isItTrue = ();
    //if (counter !== 0) {
    else {
        expression.forEach(element => {
            if (/!!/.test(element) == true) {
                element = parseInt(element);
                if (element % 2 == 0) {
                    sizeOfArrOfNums = element / 2;
                    arrOfNums[sizeOfArrOfNums];
                    for (var i = 1; i <= sizeOfArrOfNums; i++) {
                        arrOfNums[i - 1] = 2 * i;
                    }
                    arrOfNums.forEach(subElement => {
                        while (subElement > 0 && (subElement % 5) == 0) {
                            numberEvenDoubleFact += 1;
                            subElement /= easyDevider;
                        }

                    });
                    arrOfNums = Array.from(Array(sizeOfArrOfNums), () => 0);
                    sizeOfArrOfNums = 0;
                } else {
                    sizeOfArrOfNums = Math.ceil(element / 2)
                    arrOfNums[sizeOfArrOfNums] = 0;
                    for (var i = 0; i < sizeOfArrOfNums; i++) {
                        arrOfNums[i] = 2 * i + 1;
                    }
                    arrOfNums.forEach(subElement => {
                        while (subElement > 0 && (subElement % 5) == 0) {
                            numberOddDoubleFact += 1;
                            subElement /= easyDevider;
                        }

                    });
                    arrOfNums = Array.from(Array(sizeOfArrOfNums), () => 0);
                    sizeOfArrOfNums = 0;
                }
            } else {
                if (/!/.test(element) == true) {
                    element = parseInt(element);
                    while (Math.floor(element / easyDevider) >= 1) {
                        numberFact += Math.floor(element / easyDevider);
                        easyDevider *= easyDevider;
                    }
                    easyDevider = 5;
                }
            }

        });
    }
    /*} /*else {
        numberOfZeros = 0;
    }*/
    numberOfZeros = numberFact + numberOddDoubleFact + numberEvenDoubleFact;
    console.log(numberOfZeros);
    return numberOfZeros;
}


//zeros('11!!*22!!*33!!')