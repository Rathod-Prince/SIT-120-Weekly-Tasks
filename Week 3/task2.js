//creating an array
let fruits = ['Banana', 'Orange', 'Apple', 'Bluebarries'];
console.log(fruits);

//finds the valr from array
console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

//finds value and print in numbers like 1(found) or -1(was not found)
console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));

//this method adds an element at the end of an array
console.log(fruits.push('Kiwi'));
console.log(fruits);

//this method remove the last element of an array
console.log(fruits.pop());
console.log(fruits);

//again defining an aray
let numbers = [1,2,5,3,6]

//this method is used to sort the array
console.log(numbers.sort());

//this method is used to cut out a part of an array
console.log(fruits.slice(1 , 3));

//If we give only one number it wil cut out the rest of the array
console.log(fruits.slice(1));
console.log(fruits.slice(-1));

//this method is used to iterate through the array
fruits.forEach((fruit) => console.log(fruit));