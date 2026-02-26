function ages(age){
    if (age >= 66){
        console.log('elder')
    }else if(age >= 20){
        console.log('adult')
    }else if(age >= 14){
        console.log('teenager')
    }else if(age >= 3){
        console.log('child');
    }else if(age >= 0){
        console.log('baby');
    }else{
        console.log('out of bounds');
    }
}
ages(66)
ages(26)
ages(16)
ages(5)
ages(2)
ages(0)
ages(-1)
