let foods = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];



foods.shift()
console.log(foods);


foods.unshift("Steak")
console.log(foods);


foods.pop()
console.log(foods);

foods.push("Tacos")
console.log(foods); 



for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

for (let food of foods) {
    console.log(food);
}
