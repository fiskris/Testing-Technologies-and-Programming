/*
Coding Task 1
reverseString("John");
*/
var reverseString = str => {
    let reversed = "";
    for( let i = str.length-1; i >= 0; i--) { 
        reversed += str[i];
    }
    return console.log(reversed);
}

reverseString("John");
reverseString("James");

/*
Coding Task 2
reverseArray()
*/
var reverseArray = arr => {
    let reversed = [];
    for( let i = arr.length-1; i >= 0; i--) { 
        reversed.push(arr[i]);
    }
    return console.log(reversed);
}
const array1 =[55,121,44,198, 'bum']
reverseArray([1, 2, 3, 4, 5]);
reverseArray(["I", "like", "JavaScript"]);
reverseArray(array1);
/*
Coding Task 3
mostExpensiveItem()
*/
/*
var mostExpensiveItem = arr => {    
    let value = new Array(arr.length);
    let max = 0;
    let item_number = 0
    for (let i = 0; i < arr.length; i++) {
        value[i] = (arr[i].price) * (arr[i].stock);
        if (value[i] > max) {
            max = value[i];
            item = arr[i].item;
            item_number = i;
         }    
        }  
        console.log("\n" + item + " is the most expensive item, and costs £" + max);    
    return console.log(arr[item_number]);
}
const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]
mostExpensiveItem(items);
*/

var mostExpensiveItem = arr => {    
    let cost = 0;
    let max = 0;
    let item_number = 0
    for (let i = 0; i < arr.length; i++) {
        cost = (arr[i].price) * (arr[i].stock);
        if ((arr[i].price) * (arr[i].stock) > max) {
            max = cost;    
            item_number = i;
         }    
        }  
    console.log("\n" + arr[item_number].item + " is the most expensive item, and costs £" + max);    
    return console.log(arr[item_number]);
}
const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]
mostExpensiveItem(items);