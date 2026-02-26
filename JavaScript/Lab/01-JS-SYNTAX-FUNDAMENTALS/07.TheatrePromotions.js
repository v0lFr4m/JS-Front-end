function theatrePromotions(typeofDay , age){
    let price ;
    if (age < 0 || age > 122){
        console.log('Error!');
        return
    }

    switch(typeofDay){
        case 'Weekday':
            if(age >= 0 && age <= 18){
                price = 12;
            } else if(age <= 64){
                price = 18;
            }else if(age <= 122){
                price = 12;
            }else{
                price = 'Error!'
            }
            break;
        case 'Weekend':
            if(age >= 0 && age <= 18){
                price = 15;
            } else if(age <= 64){
                price = 20;
            }else if(age <= 122){
                price = 15;
            }else{
                price = 'Error!'
            }
            break;
        case 'Holiday':
            if(age >= 0 && age <= 18){
                price = 5;
            } else if(age <= 64){
                price = 12;
            }else if(age <= 122){
                price = 10;
            }else{
                price = 'Error!'
            }
            break;
        default:
            console.log("Error!")
    }
    console.log(`${price}$`)
}

theatrePromotions('Holiday',15)
