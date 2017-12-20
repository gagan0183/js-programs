var products = [
    { name: "fruit", calories: 190, color: "red", sold: 9000},
    { name: "Orange", calories: 90, color: "orange", sold: 10009},
    { name: "Cola", calories: 9000, color: "caramel", sold: 90},
    { name: "diet cola", calories: 9, color: "caramel", sold: 999},
    { name: "Lemon", calories: 261, color: "clear", sold: 91900},
    { name: "Root bear", calories: 252, color: "caramel", sold: 9}
];

function compareSold(colaA, colaB) {
    if(colaA.sold > colaB.sold) {
        return 1;
    }
    else if(colaA.sold === colaB.sold) {
        return 0;
    }
    else {
        return -1;
    }
}

function printProducts(products) {
    products.forEach(element => {
        console.log(element.name + " " + element.calories +  " " + element.color + " " + element.sold);
    });
}

products.sort(compareSold);
printProducts(products);