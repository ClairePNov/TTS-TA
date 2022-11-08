let billAmount=47;
function gratuity (billAmountArgument) {
    let withgratuity= billAmountArgument*0.2;
    return withgratuity
}
function totalWithGrat(billAmountArgument) {
    let newTotal= gratuity (billAmountArgument)+(billAmountArgument);
    return newTotal;
}

console.log("Your total inclusind gratuity is: " + totalWithGrat(billAmount));
