const notes = require('./notes.js');
// var _ = require('lodash');


console.log("This is starting of server.js file.")
function app(){
    console.log("This is function print")
}
app()

console.log(notes.myClass);
console.log(notes.addNumber(2,5));


//
const jsonString = '{"name": "John", "age": 30, "city": "Pokhara"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.city);

//
const objectToConvert ={
    name: "Alice",
    age: "8"
}

const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);