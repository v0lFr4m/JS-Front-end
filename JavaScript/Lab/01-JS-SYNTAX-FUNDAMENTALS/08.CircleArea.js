function circleArea(input){
    let area ;
    if (Number.isFinite(input)){
        area = Math.PI * input ** 2;
        console.log(area.toFixed(2))
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
    
}
circleArea(5)