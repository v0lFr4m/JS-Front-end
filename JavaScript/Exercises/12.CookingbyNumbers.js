function cooking(number, op1 , op2 ,op3 ,op4 , op5) {
    let n = Number(number);
    const ops = [op1 ,op2 ,op3 ,op4 ,op5];

    for (const op of ops) {

        switch (op) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number *= 0.8; // subtract 20%
                break;
        }

        console.log(number);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')