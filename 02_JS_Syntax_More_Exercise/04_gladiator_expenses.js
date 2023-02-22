function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let total_price=0;
    let shieldBreaks=0;
    for (let i=1; i<=lostFights; i++){
    if (i%2 === 0){
        total_price+=helmetPrice;
        if (i%3 === 0){
            total_price+=shieldPrice;
            shieldBreaks+=1;
            if (shieldBreaks%2 === 0){
                total_price+=armorPrice;
            }
        }
    }
    if (i%3===0){
        total_price+=swordPrice
    }   
}
console.log(`Gladiator expenses: ${total_price.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);