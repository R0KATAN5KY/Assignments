//step 1:

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);
ages.push(4);
console.log(ages[ages.length - 1] - ages[0]);
let sum = 0
for(let number of ages){
    sum += number;
} let average = sum / ages.length;
console.log(average);

//step 2:

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum1 = 0
for(let number of names){
    sum1 += number.length;
} let average1 = sum1 / names.length;
console.log(average1);
for(i = 5; i < names.length; i++){
    console.log(names.join(" "));
}

//step 3: How do you access the last element of any array?
//answer: Using the length property and subtracting 1.
console.log([ages.length - 1]);
console.log([names.length - 1]);

//step 4: How do you access the first element of any array?
//answer: Access using index 0.
console.log([ages[0]]);
console.log([names[0]]);

//step 5

let nameLengths = [];
for(let value of names){
    nameLengths.push(value.length);
} console.log(nameLengths);

//step 6

let sum2 = 0;
for(let i = 0; i < nameLengths.length; i++){
    sum2 += nameLengths[i];
} console.log(sum2);

//step 7

function repeat(word, n){
    let repeatString = "";
    while(n > 0){
        repeatString += word;
        n--;
    } return repeatString;
} console.log(repeat("Hello", 3));

//step 8

function wholeName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
} console.log(wholeName("John", "Doe"));

//step 9

function bigNumber(array){
    let sum3 = 0;
    for(let i = 0; i < array.length; i++){
        sum3 += array[i];
    } return sum3 > 100;
} console.log(bigNumber(ages));

//step 10

function avgOfArray(arr){
    let sum3 = 0;
    arr.forEach(element => sum3 += element)
        return sum3 / arr.length;
} console.log(avgOfArray(ages));

//step 11

function number(arr1, arr2){
    return avgOfArray(arr1) > avgOfArray(arr2);
} console.log(number(ages, nameLengths));

//step 12

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    } return false;
}
console.log(willBuyDrink(false, 17.00));

//step 13 - This function changes the first letter of each word into an uppercase.

function upperCase(str){
    let array = str.split(' ');
    let newArray = [];
    for(var x = 0; x < array.length; x++){
        newArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
    } return newArray.join(' ');
} console.log(upperCase("is this thing working?"));
