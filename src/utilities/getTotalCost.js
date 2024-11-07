function getTotalCost(array) {
    let sum = 0;
    for (let element of array) {
        sum = sum + element.price;
    }
    return sum.toFixed(2);
}


export { getTotalCost };