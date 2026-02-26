function sameNumbers(number) {
    let digits = number.toString();
    let sumOfDigits = 0;
    let isSame = true;

    for (let i = 0; i < digits.length; i++) {
        sumOfDigits += Number(digits[i])
        if (digits[i] !== digits[0]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits);
    
    

}
sameNumbers(1234);