function vacations(group , typeOfPeople, dayOfWeeek){
    let result;

    switch(typeOfPeople){
        case 'Students':
            switch(dayOfWeeek){
                case 'Friday':
                    result = group * 8.45
                    break;
                case 'Saturday':
                    result = group * 9.80
                    break;
                case 'Sunday':
                    result = group * 10.46
                    break;
            }
            if(group >= 30){
                result *= 0.85;
            }
            break;

        case 'Business':
            if (group >= 100){
                group -= 10
            }
            switch(dayOfWeeek){
                case 'Friday':
                    result = group * 10.90
                    break;
                case 'Saturday':
                    result = group * 15.60
                    break;
                case 'Sunday':
                    result = group * 16.00
                    break;
            }           
            break;

        case 'Regular':
            switch(dayOfWeeek){
                case 'Friday':
                    result = group * 15
                    break;
                case 'Saturday':
                    result = group * 20
                    break;
                case 'Sunday':
                    result = group * 22.50
                    break;
            }
            if (group >= 10 && group <= 20){
                result *= 0.95
            }   
            break;
    }
    console.log(`Total price: ${result.toFixed(2)}`);
    
}

vacations(40,
"Regular",
"Saturday"
)

