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


let arr = [1, 2, 3, 4, 5,34,64253,68];
arr.sort()
// arr.reverse()
console.log(arr);


let arr2 = [1,2,4,5]
arr2.forEach(function(element,index) {
    console.log(`Element: ${element}, Index: ${index}`)

    arr2[index] = element * 2
});
console.log(arr2);