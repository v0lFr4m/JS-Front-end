function fruit(typeOfFruit, weight, pricePerKilo) { 
    let money = Math.round(weight * pricePerKilo) / 1000

    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${typeOfFruit}.`);
    
}

fruit('orange', 2500, 1.80)