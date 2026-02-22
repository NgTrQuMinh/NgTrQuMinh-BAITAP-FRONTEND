// DATA TYPES IN JAVASCRIPT
console.log("DATA TYPES IN JAVASCRIPT");
/// 1. Primitive Data Types (Kiểu dữ liệu nguyên thủy)
console.log("1. Primitive Data Types");
// 1. String
console.log("=== String ===");
var name = "John Doe";
var greeting = 'Hello, World!';
var message = `Welcome to JavaScript!`; // Template literals (backticks)
console.log(name); // Kết quả: John Doe
console.log(greeting); // Kết quả: Hello, World!
console.log(message); // Kết quả: Welcome to JavaScript!

// 2. Number
console.log("=== Number ===");
var a = Infinity // Số vô cùng lớn
var b = -Infinity // Số vô cùng nhỏ
var c = NaN // Not a Number (Không phải là một số)
console.log(a); // Kết quả: Infinity
console.log(b); // Kết quả: -Infinity
console.log(c); // Kết quả: NaN 

// 3. Boolean
console.log("=== Boolean ===");
var isTrue = true;
var isFalse = false;    
console.log(isTrue); // Kết quả: true
console.log(isFalse); // Kết quả: false
    
// 4. Null
console.log("=== Null ===");
var nullValue = null;
console.log(nullValue); // Kết quả: null

// 5. Undefined
console.log("=== Undefined ===");
var undefinedValue; // Biến chưa được gán giá trị sẽ có giá trị là undefined
console.log(undefinedValue); // Kết quả: undefined

// 6. Symbol
console.log("=== Symbol ===");
var sym1 = Symbol('description');
var sym2 = Symbol('description');
console.log(sym1 === sym2); // false, mỗi Symbol là duy nhất
console.log(sym1); // Kết quả: Symbol(description)



/// 2. Non-Primitive Data Types (Kiểu dữ liệu phi nguyên thủy)
console.log("2. Non-Primitive Data Types");
// 1. Object
console.log("=== Object ===");
var person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(person.name); // Kết quả: Alice
console.log(person["age"]); // Kết quả: 30
console.log(person.isStudent); // Kết quả: false

// 2. Array
console.log("=== Array ===");
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "cherry"];
console.log(numbers[0]); // Kết quả: 1
console.log(fruits[1]); // Kết quả: banana

// 3. Function
console.log("=== Function ===");
var func = function() {
    console.log("This is a function");
}; // Hàm cũng là một loại Object

var sum = function(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // Kết quả: 15