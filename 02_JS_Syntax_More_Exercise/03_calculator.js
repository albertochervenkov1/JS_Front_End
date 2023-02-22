function calculator (x, operator, y){
    let result;
    switch (operator){
        case ('+'): result=x+y; break;
        case ('-'): result=x-y; break;
        case ('*'): result=x*y; break;
        case ('/'): result=x/y; break;
    }
    console.log(result.toFixed(2));
}

calculator(5,'+',10);