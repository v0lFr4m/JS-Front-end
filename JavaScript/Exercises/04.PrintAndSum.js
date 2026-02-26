function printAndSum(start , end) {
    let sumOfNumber = 0
    let stringOfNum = ''
    for (let i = start; i <= end; i++) {
        sumOfNumber += i ;
        stringOfNum += i + ' ';
    }
    console.log(stringOfNum.trim());
    console.log(`Sum: ${sumOfNumber}`);
}

printAndSum(5, 10)